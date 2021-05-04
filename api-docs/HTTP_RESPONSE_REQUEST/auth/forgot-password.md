Resource: */api/v1/auth/forgot-password* \
Method:   *POST*

##### Headers
```bash
NONE
```

##### Body
```bash
{
  "email": "virgiliogervacioestadillo@gmail.com"
}
```

##### Request
```bash
curl -i -X POST http://localhost:8080/api/v1/auth/forgot-password --data "email=virgiliogervacioestadillo@gmail.com"
```

##### Response
```bash
{
  "success": true,
  "message": "Email sent!"
}
```
[<< back](../../index.md)
