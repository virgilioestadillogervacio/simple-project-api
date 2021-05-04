Resource: */api/v1/employee/{id}* \
Method:   *DELETE*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTYwMDEwMSwiZXhwIjoxNjE5NjA1MTAxfQ.CSI81xTcBqNy0Hk5Rxka_VVssBZlKHJ2zPPZz51oTWM
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTYwMDEwMSwiZXhwIjoxNjE5NjA1MTAxfQ.CSI81xTcBqNy0Hk5Rxka_VVssBZlKHJ2zPPZz51oTWM" \
-X DELETE http://localhost:8080/api/v1/employee/608915230b914c0490b2e94a
```

##### Response
```bash
{
  data: {
    "position": "NextJS Developer",
    "yearOfExperience": 4,
    "_id": "608915230b914c0490b2e94a",
    "user": {
      "fname": "Bong",
      "lname": "Gervacio",
      "_id": "608915230b914c0490b2e944",
      "email": "bong@gmail.com",
      "role": "EMPLOYEE",
      "__v": 0
    },
    "__v": 0
  }
}
```
[<< back](../../index.md)
