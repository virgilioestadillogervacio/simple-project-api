Resource: */api/v1/employee* \
Method:   *GET*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0NCIsInJvbGUiOiJFTVBMT1lFRSIsImlhdCI6MTYxOTU5NzgzMCwiZXhwIjoxNjE5NjAyODMwfQ.5NdKNuCcC4AOPS887t9VZloQ7Q7DMQW0JmyIZnslaMo
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0NCIsInJvbGUiOiJFTVBMT1lFRSIsImlhdCI6MTYxOTU5NzgzMCwiZXhwIjoxNjE5NjAyODMwfQ.5NdKNuCcC4AOPS887t9VZloQ7Q7DMQW0JmyIZnslaMo" \ 
-X GET http://localhost:8080/api/v1/employee
```

##### Response
```bash
{
  "data": [
    {
      "position": "React Developer",
      "yearOfExperience": 3,
      "_id": "608915230b914c0490b2e94a",
      "user": {
        "fname": "Virgilio",
        "lname": "Estadillo",
        "_id": "608915230b914c0490b2e944",
        "email": "virgilioestadillo@gmail.com",
        "role": "EMPLOYEE",
        "__v": 0
      },
      "__v": 0
    },
    {
      "position": "Angular Developer",
      "yearOfExperience": 1,
      "_id": "608915230b914c0490b2e94b",
      "user": {
        "fname": "Corey",
        "lname": "Patrick",
        "_id": "608915230b914c0490b2e945",
        "email": "coreypatrick@gmail.com",
        "role": "EMPLOYEE",
        "__v": 0
      },
      "__v": 0
    },
    {
      "position": "VueJS Developer",
      "yearOfExperience": 2,
      "_id": "608915230b914c0490b2e94c",
      "user": {
        "fname": "Cody",
        "lname": "Shepherd",
        "_id": "608915230b914c0490b2e946",
        "email": "codyshepherd@gmail.com",
        "role": "EMPLOYEE",
        "__v": 0
      },
      "__v": 0
    },
    {
      "position": "NodeJS Developer",
      "yearOfExperience": 7,
      "_id": "608915230b914c0490b2e94d",
      "user": {
        "fname": "Enrique",
        "lname": "Stark",
        "_id": "608915230b914c0490b2e947",
        "email": "enriquestark@gmail.com",
        "role": "EMPLOYEE",
        "__v": 0
      },
      "__v": 0
    },
    {
      "position": "Python Developer",
      "yearOfExperience": 4,
      "_id": "608915230b914c0490b2e94e",
      "user": {
        "fname": "Riccardo",
        "lname": "Taylor",
        "_id": "608915230b914c0490b2e948",
        "email": "ricardotaylor@gmail.com",
        "role": "EMPLOYEE",
        "__v": 0
      },
      "__v": 0
    },
    {
      "position": "Ruby Developer",
      "yearOfExperience": 5,
      "_id": "608915230b914c0490b2e94f",
      "user": {
        "fname": "Connar",
        "lname": "Robertson",
        "_id": "608915230b914c0490b2e949",
        "email": "connarrobertson@gmail.com",
        "role": "EMPLOYEE",
        "__v": 0
      },
      "__v": 0
    }
  ]
}
```
[<< back](../../index.md)
