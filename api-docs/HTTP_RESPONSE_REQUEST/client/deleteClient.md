Resource: */api/v1/client/{id}* \
Method:   *DELETE*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkwMjY3ZmRhOGVmMDJmY2NjNGMxOSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1OTYwNDgsImV4cCI6MTYxOTYwMTA0OH0.x2sYgCjX-zsf-2yW0Kr7jb0H7v8y-idGIHwGg2LUyZg
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTU5Njk4MSwiZXhwIjoxNjE5NjAxOTgxfQ.04HMLEYydtajbe_YT7ajEU_p94u800cZn-CGZ2Iqbrw" -X DELETE http://localhost:8080/api/v1/client/608915230b914c0490b2e950
```

##### Response
```bash
{
  "data":
  {
    "company": "Google",
    "numOfEmployees": 1000,
    "_id":"608915230b914c0490b2e950",
    "user": {
      "fname": "Larry",
      "lname": "Page",
      "_id":"608915230b914c0490b2e941",
      "email": "larrypage@gmail.com",
      "role": "CLIENT",
      "__v": 0
    },
    "__v": 0
  }
}
```
[<< back](../../index.md)
