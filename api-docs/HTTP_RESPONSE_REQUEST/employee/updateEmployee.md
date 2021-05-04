Resource: */api/v1/employee/{id}* \
Method:   *PUT*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0NCIsInJvbGUiOiJFTVBMT1lFRSIsImlhdCI6MTYxOTU5OTAyNywiZXhwIjoxNjE5NjA0MDI3fQ.LBY8M5rtqbtHFLYj-JulNhB8cEvl-edd6HjRPKiD4hU
```

##### Body
```bash
{
  position: "NextJS Developer",
  yearOfExperience: 4,
  fname: "Bong",
  lname: "Gervacio",
  email: "bong@gmail.com"
}
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0NCIsInJvbGUiOiJFTVBMT1lFRSIsImlhdCI6MTYxOTU5OTAyNywiZXhwIjoxNjE5NjA0MDI3fQ.LBY8M5rtqbtHFLYj-JulNhB8cEvl-edd6HjRPKiD4hU" \
-X PUT http://localhost:8080/api/v1/employee/608915230b914c0490b2e94a \
--data "position=NextJS Developer&yearOfExperience=4&fname=Bong&lname=Gervacio&email=bong@gmail.com"
```

##### Response
```bash
{
  "data": {
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
