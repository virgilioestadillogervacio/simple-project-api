Resource: */api/v1/project/{id}* \
Method:   *DELETE*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTY1MjI1OCwiZXhwIjoxNjE5NjU3MjU4fQ.hpniXDkrjw7v8N4UAs0TNCBlQm3i2tq6szrmkf_zSAI
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTY1MjI1OCwiZXhwIjoxNjE5NjU3MjU4fQ.hpniXDkrjw7v8N4UAs0TNCBlQm3i2tq6szrmkf_zSAI" \
-X DELETE http://localhost:8080/api/v1/project/608915240b914c0490b2e955
```

##### Response
```bash
{
  "data":
  {
    "employees": [
      "608915230b914c0490b2e94d",
      "608915230b914c0490b2e94e",
      "608915230b914c0490b2e94f"
    ],
    "_id": "608915240b914c0490b2e955",
    "name": "New Project",
    "client": "608915230b914c0490b2e952",
    "__v": 0
  }
}
```
[<< back](../../index.md)
