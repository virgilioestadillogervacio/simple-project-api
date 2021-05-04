Resource: */api/v1/employee/{id}* \
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
-X GET http://localhost:8080/api/v1/employee/608915230b914c0490b2e94a
```

##### Response
```bash
{
  "data": {
    "position": "React Developer",
    "yearOfExperience":3,
    "_id": "608915230b914c0490b2e94a",
    "user": {
      "fname": "Virgilio",
      "lname": "Estadillo",
      "_id":  "608915230b914c0490b2e944",
      "email": "virgilioestadillo@gmail.com",
      "role": "EMPLOYEE",
      "__v": 0
    },
    "__v": 0
  }
}
```
[<< back](../../index.md)
