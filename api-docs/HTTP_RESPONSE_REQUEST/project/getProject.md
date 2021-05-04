Resource: */api/v1/project/{id}* \
Method:   *GET*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0NyIsInJvbGUiOiJFTVBMT1lFRSIsImlhdCI6MTYxOTY1MDAzNiwiZXhwIjoxNjE5NjU1MDM2fQ.i2pb3uUsCEs_RRbOWtEIUx6V1Ey0KfHth3YXwJZvi5I
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0NyIsInJvbGUiOiJFTVBMT1lFRSIsImlhdCI6MTYxOTY1MDAzNiwiZXhwIjoxNjE5NjU1MDM2fQ.i2pb3uUsCEs_RRbOWtEIUx6V1Ey0KfHth3YXwJZvi5I" \
-X GET http://localhost:8080/api/v1/project/608915240b914c0490b2e955
```

##### Response
```bash
{
  "data": {
    "employees": [
      {
        "position": "NodeJS Developer",
        "yearOfExperience": 7,
        "_id": "608915230b914c0490b2e94d",
        "user": "608915230b914c0490b2e947",
        "__v": 0
      },
      {
        "position": "Python Developer",
        "yearOfExperience": 4,
        "_id": "608915230b914c0490b2e94e",
        "user": "608915230b914c0490b2e948",
        "__v": 0
      },
      {
        "position": "Ruby Developer",
        "yearOfExperience": 5,
        "_id": "608915230b914c0490b2e94f",
        "user": "608915230b914c0490b2e949",
        "__v": 0
      }
    ],
    "_id": "608915240b914c0490b2e955",
    "name": "Instagram",
    "client": {
      "company": "Facebook",
      "numOfEmployees": 3000,
      "_id": "608915230b914c0490b2e952",
      "user": "608915230b914c0490b2e943",
      "__v": 0
    },
    "__v": 0
  }
}
```
[<< back](../../index.md)
