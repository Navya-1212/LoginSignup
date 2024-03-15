# Login/Signup

This Project is made under Oasis Infobyte Web Development internship program by Navya Srivastav.
 
# 1.0 Introduction | Task - 3

Welcome to our Login/Signup Project repository! This project aims to provide a comprehensive solution for user authentication. Whether you're a beginner looking to understand the basics of user authentication or a seasoned developer seeking a robust authentication system for your application, this project has got you covered.
 
 
# 2.0 Prequisite

- MoongoDB (atlas) account


# 3.0 Installation

Install the project by cloning this repo from your terminal.

- Go to the #root folder,open terminal in VS-Code and write this command
 ``` bash
  cd backend
```
- Install the dependencies using this command for backend
 ``` bash
  npm i
```
- If any ERR ocured in terminal the use this command and reinstall the dependencies using this line
```bash
  npm i --force
```
- Install the dependencies using this command for frontend

```bash
  cd frontend
```
- If any ERR occures in terminal, then use this command and reinstall the dependencies using this line
```bash
  npm i --force
```

# 4.0 Environment Variables
To run this project, you will need to add the following environment variables to your .env file
- Now create a new file in Root/backend folder with a name <b>.env</b> and copy-paste the values of .example.env ➡️ .env. 
</br>
Any value you put here is sensitive, so by default .env files will be not tracked by github. In case you want to change this, you can do it by removing.env from .gitignore. 
- Add the Prerequisite asked their.
</br>
Here is the refference how you can add -
</br>
</br>
- DB_URI=mongodb+srv://<'username'>:<'password'>@cluster0.<'database_url'>.mongodb.net/<'Database_Name'>
</br>
- You can create a database by [signing up](https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2&nextHash=%23org%2F655ca82e2a92b8144c5786e5%2Fsettings%2Fgeneral&signedOut=true) here and creating a database.
</br>
- For creating a <b> PORT </b>, You can assign it any value like "4000", "5000","8000".
- Change the corresponding API_URL in frontend/service/api.js.
</br>
- For generating <b>ACCESS_SECRET_KEY </b> and <b>REFRESH_SECRET_KEY</b>, open your vs code terminal and run this command 2 times and Copy the 64 digits value and paste it in <b>ACCESS_SECRET_KEY </b> and <b>REFRESH_SECRET_KEY</b>. Run the below command 2 times to get different values
```bash
node
```
```bash
require("crypto").randomBytes(64).toString("hex")
```
</br>


# 5.0 Run Project

- Run the backend server .

- Goto #root folder and run these commands in your powershell.

- Open a new powershell and write this command to move to backend directory.
```bash
  cd backend
```
- Run the backend Server.
```bash
  npm run dev
```
- If terminal returns Port started successfully at ${PORT} & Databse connected successfully than you are good to go.

- Open a new powershell and write this command to move to frontend directory from the root folder.
```bash
  cd frontend
```
- Write this command to start the react server at 3000.
```bash
  npm start
```

# 6.0 Tech Stack

_Client:_ React , TailwindCSS ,Material UI .

_Server:_ MongoDB , Express.js , Node.js .
