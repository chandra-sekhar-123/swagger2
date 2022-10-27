# NodeExpressCRUD

This source code is part of [Node.js, Express.js, Mongoose and MongoDB CRUD Tutorial](https://github.com/ramanait/NodeExpressCRUD)


# Git Commands

Repo URL http URL or SSH URL 
Repo examples : Bitbucket, Azure Repos, Gitlab, Aws code commit

git clone <http url> or <ssh url>



# Terminal commands
`npm i` install all the modules in the package.json
`npm start`  to excute the scripts with `start` word


shourt cuts

`CTRL + C` to terminate the project
`CTRL + S` to save the file
`ALT + SHIFT + F` to format the code
`CTRL + /` to comment the java script code
`Shift + left arrow` left selection from the right
`Shift + right arrow` right selection from the left
`CTRL + D` to select the similar words in file 
`CTRL + F` find the matched words, we can filter by matching case or whole word
`CTRL + P` to select the file / search the file in VS Code
`ALT + Shift + down arrow` duplicate copy of selection 


`CTRL+SHIFT+I` to inspect the browser / open the developer


JSON - Java Script Object Notation
two types
Object: {}
Array: []
Array of Objects: [{},{},{}]


# CRUD:

C - Create - POST
R - Read - GET
U - Update - PUT
D - Delete - DELETE

# Status Codes

Success Response Codes
200 - Success
201 - Created

Failure Response Codes

400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not found
405 - Method not allowed
500 - Internal Server
502 - Bad Gateway 


# Mongoose

model.save() // model.insert() to create or add the data in the database
model.find() // list all the records in model
model.findOne({})

model.update()
model.updateOne() or model.findByIdAndUpdate()

model.delete()

# Node JS Apps 

Web Socket - Chat or Chat Bot - socket.io, engine.io
Data Streams / FileStreams
RESTful JSON APIs

# Spint Boards

Azure Devops
Jira
Rally



# JWT

{
  "email":"ramana@gmail.com",
  "role":"Admin"
}

User Information
Roles - set of permissions
Permissions - permission to specific feature. it can be enable or disable

# Example Token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDczOTk3MWIwNzJjOWY3MjE0MTU0MiIsIm5hbWUiOiJSYW1hbmEiLCJlbWFpbCI6InZlbmthdGExQHNzYm0uY2giLCJpYXQiOjE2NjE0MTc4NzksImV4cCI6MTY2MTUwNDI3OX0._JpY3ccHERb8Opnor12v-KXS8f11tbaBXcsPMaUrHNE


# Third party providers

    Auth0 => auth0.com
    okta => okta.com

    

# Request Payload, 

Example
------------
-headers { "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDczOTk3MWIwNzJjOWY3MjE0MTU0MiIsIm5hbWUiOiJSYW1hbmEiLCJlbWFpbCI6InZlbmthdGExQHNzYm0uY2giLCJpYXQiOjE2NjE0MTc4NzksImV4cCI6MTY2MTUwNDI3OX0._JpY3ccHERb8Opnor12v-KXS8f11tbaBXcsPMaUrHNE"}  
-body {
  "name": "Ramana",
  "address": "Tuni",
  "category": "Mentor",
  "gender": "Male",
  "phone": "+918008386917",
  "email": "venkata1@ssbm.ch",
  "password": "12345",
  "dob":"06/06/1990"
}

# Response Payload
---------------------
  # unauthorised respose - status code is 401
    {
      "auth": false,
      "message": "No token provided."
    }

 # success response - status code is 200
    {
      "employees": [
        {
          "_id": "630341b2bc9e5de179c02cb5",
          "name": "nagendra",
          "address": "tuni",
          "position": "Senior Software Engineer",
          "salary": 80000,
          "updated_at": "2022-08-22T08:43:30.947Z",
          "__v": 0
        }
      ]
    }

# Software

 Web Application  - Advanced Java + JSP + Hibernates + Springboot ( MySQL, PostGreSQL )  + HTML + CSS 

 MEAN - MongoDB, Express, Angular, Node - Complete Web Application  + Java, .NET, AWS, Azure  = Full Stack

 MERN - MongoDB, Express, React, Node - Complete Web Application


Rest API in NodeJS with JWT/security + Angular => complete web application.

index.html
--------------------------------------------------
-                                                -
-       -----------------------------------      -
-                                                -
-                                                -
-
-       
-
-       -----------------------------------
---------------------------------------------------

UI/UX tools / Wireframes / Mocks

1) Balsamiq => balsamiq.com
2) Figma => figma.com
3) Zeplin => zeplin.com

Local Storage => to store the in the browser till we remove with specific domain 

`window.localStorage.setItem("token","<token value>");`
`window.localStorage.getItem("token");`

Local Storage => to store the in the browser till we close the browser with specific domain 

`window.sessionStorage.setItem("token","<token value>");`
`window.sessionStorage.getItem("token");`

Cookies => to store the in the browser till we delete or expiry in the browser with specific domain 

`document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC";`
