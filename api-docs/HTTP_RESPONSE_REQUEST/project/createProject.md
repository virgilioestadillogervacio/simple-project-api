Resource: */api/v1/project* \
Method:   *POST*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTY1MzM2NCwiZXhwIjoxNjE5NjU4MzY0fQ.Yvh07WnRDjJkVBTu-zO8lAKLP8XLfIDLP4hivr-w8n8
```

##### Body
```bash
{
	"name": "Justice League",
	"employees": [
		"608915230b914c0490b2e94d",
    "608915230b914c0490b2e94e"
	]
}
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTY1MzM2NCwiZXhwIjoxNjE5NjU4MzY0fQ.Yvh07WnRDjJkVBTu-zO8lAKLP8XLfIDLP4hivr-w8n8" \
-X POST http://localhost:8080/api/v1/project \
--data "name=Justice League&employees[0]=608915230b914c0490b2e94d&employees[1]=608915230b914c0490b2e94e"
```

##### Response
```bash
{
  "data": {
    "employees": [
      "608915230b914c0490b2e94d",
      "608915230b914c0490b2e94e"
    ],
    "_id": "6089f9541bd4a60578fde720",
    "name": "Justice League",
    "client":"608915230b914c0490b2e940",
    "__v": 0
  }
}
```
[<< back](../../index.md)
