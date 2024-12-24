# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js: failing to handle errors in an HTTP server. The `bug.js` file shows a basic server without error handling. The `bugSolution.js` file provides a more robust version that gracefully handles errors.

## Problem

The initial server lacks proper error handling.  If the port 8080 is already in use, or there's another network problem, the server will crash without any informative error message.

## Solution

The solution adds an 'error' event listener to the server.  This listener catches errors and logs them to the console, preventing a crash and providing valuable debugging information.

## How to run

1. Clone the repository.
2. Run `node bug.js` to see the unhandled error scenario (requires port 8080 to be free).
3. Run `node bugSolution.js` to see the improved version with error handling. 