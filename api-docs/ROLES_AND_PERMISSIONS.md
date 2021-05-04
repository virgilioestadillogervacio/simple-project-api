## Roles and Permissions

#### Auth

ROLES  | PERMISSIONS         | METHODS  | RESOURCES
------ | ------------------- | -------- | ----------------------------------------
NONE   |  CREATE USER        |  POST    |  /api/v1/auth/register
NONE   |  LOGIN USER         |  POST    |  /api/v1/auth/login      
NONE   |  GET CURRENT USER   |  GET     |  /api/v1/auth/me
NONE   |  GET REFRESH TOKEN  |  POST    |  /api/v1/auth/refresh-token
NONE   |  LOGOUT USER        |  POST    |  /api/v1/auth/logout
NONE   |  FORGOT PASSWORD    |  POST    |  /api/v1/auth/forgot-password
NONE   |  RESET PASSWORD     |  PUT     |  /api/v1/auth/reset-password/{resetToken}

#### Employee
ROLES                     | PERMISSIONS         | METHODS  | RESOURCES
------------------------- | ------------------- | -------- | ---------------------
[ADMIN, EMPLOYEE, CLIENT] | GET ALL EMPLOYEES   | GET      | /api/v1/employee
[ADMIN, EMPLOYEE, CLIENT] | GET ONE EMPLOYEE    | GET      | /api/v1/employee/{id} 
[ADMIN, EMPLOYEE]         | UPDATE EMPLOYEE     | PUT      | /api/v1/employee/{id}
[ADMIN]                   | DELETE EMPLOYEE     | DELETE   | /api/v1/employee/{id}

#### Client
ROLES           | PERMISSIONS         | METHODS  | RESOURCES
--------------- | ------------------- | -------- | ------------------------------
[ADMIN]         | GET ALL CLIENTS     | GET      | /api/v1/client
[ADMIN, CLIENT] | GET ONE CLIENT      | GET      | /api/v1/client/{id}
[CLIENT]        | UPDATE CLIENT       | PUT      | /api/v1/client/{id}
[ADMIN]         | DELETE CLIENT       | DELETE   | /api/v1/client/{id}  

#### Project
ROLES                      | PERMISSIONS      | METHODS  | RESOURCES
-------------------------- | ---------------- | -------- | ----------------------
[ADMIN]                    | GET ALL PROJECTS | GET      | /api/v1/project
[ADMIN, EMPLOYEE, CLIENT]  | SEARCH PROJECTS  | GET      | /api/v1/project/search
[ADMIN, EMPLOYEE, CLIENT]  | GET ONE PROJECT  | GET      | /api/v1/project/{id}
[ADMIN, CLIENT]            | CREATE PROJECT   | POST     | /api/v1/project
[ADMIN, CLIENT]            | UPDATE PROJECT   | PUT      | /api/v1/project/{id}
[ADMIN]                    | DELETE PROJECT   | DELETE   | /api/v1/project/{id}

[<< back](../README.md)
