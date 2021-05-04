Resource: */api/v1/auth/login* \
Method:   *POST*

##### Headers
```bash
  NONE
```

##### Body
```bash
{
  "email": "johndoe@gmail.com",
  "passwd": "12345678"
}
```

##### Request
```bash
curl -i --data "email=churvabells@gmail.com&passwd=12345678" \
-X POST http://localhost:8080/api/v1/auth/login
```

##### Response
```bash
{
  "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhjZTEzZDI5MTAxMGVmZDg0NmI1YiIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1Nzg2MjcsImV4cCI6MTYxOTU4MzYyN30.eMkSKy77RQUlCuHzX5SNaDbQ-H5XmbmO6YSfuSNSi88",
  "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhjZTEzZDI5MTAxMGVmZDg0NmI1YiIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1Nzg2MjcsImV4cCI6MTY1MTEzNjIyN30.7iFM7AJNoRKsmnX-tQLLhcZ-FHRs71qjNy-eUmdL2BU"
}
```
[<< back](../../index.md)
