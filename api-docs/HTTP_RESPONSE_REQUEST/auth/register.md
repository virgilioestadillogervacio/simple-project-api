Resource: */api/v1/auth/register* \
Method:   *POST*

##### Headers
```bash
NONE
```

##### Body
```bash
{
  "email": "johndoe@gmail.com",
  "passwd": "12345678",
  "role": "EMPLOYEE"
}
```

##### Request
```bash
curl -i --data "email=churvabells@gmail.com&passwd=12345678&role=client" \
-X POST http://localhost:8080/api/v1/auth/register
```

##### Response
```bash
{
"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhiMzk3ZGNjMzBkMGJlZmU4ZTUxZiIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1NzE2MDgsImV4cCI6MTYxOTU3NjYwOH0.2ttZQOC_OZdlmaGMwSNkhQO2SM10aBGlIYwbU7jOImw",
"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhiMzk3ZGNjMzBkMGJlZmU4ZTUxZiIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1NzE2MDgsImV4cCI6MTY1MTEyOTIwOH0.Ex_M97uxgBpZQf48RFNj43XTg2h_Mnk1x_VZxCAla-4"
}
```
[<< back](../../index.md)
