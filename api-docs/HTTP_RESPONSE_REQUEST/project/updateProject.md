Resource: */api/v1/project/{id}* \
Method:   *PUT*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MyIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk2NTE1OTgsImV4cCI6MTYxOTY1NjU5OH0.DjmLORWE8bqHCDrcZq1nj-w20IBiGGWeG4c9ajMaIP8
```

##### Body
```bash
{
  name: "New Project"
}
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MyIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk2NTE1OTgsImV4cCI6MTYxOTY1NjU5OH0.DjmLORWE8bqHCDrcZq1nj-w20IBiGGWeG4c9ajMaIP8" \
-X PUT http://localhost:8080/api/v1/project/608915240b914c0490b2e955 \
--data "name=New Project"
```

##### Response
```bash
{
  "data": {
    "employees": [
      "608915230b914c0490b2e94d",
      "608915230b914c0490b2e94e",
      "608915230b914c0490b2e94f"
    ],
    "_id": "608915240b914c0490b2e955",
    "name": "New Project",
    "client":"608915230b914c0490b2e952",
    "__v": 0
  }
}
```
[<< back](../../index.md)
