# HOME AUTOMATION

- Step by step process to run the project
1. Take a clone from git "git clone https://github.com/debadattatabi/home-automation.git"
2. open command prompt and navigate to the project folder and do "npm install" - To Install all the dependencies
3. create a database in your mysql server "create database test" 
4. Now to run the project start "nodemon server.js" or "node server.js"

- Open Postman Follow The Step by step processes:

- Add new smart device
- API URL: "http://localhost:3001/device/add"
- Method: POST
- Body Params: name (string), room (string)

- List all smart devices
- API URL:  "http://localhost:3001/device/list"
- Method: GET

- Perform an operation on a device 
- API URL: "http://localhost:3001/device/perform"
- Method: PUT
- Body Params: id (number), status (boolean) // true - ON a device, false - OFF a device

- Remove an installed device 
- API URL: "http://localhost:3001/device/remove"
- Method: DELETE
- Body Params: id (number)