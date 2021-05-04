Resource: */api/v1/auth/reset-password/{resetToken}* \
Method:   *PUT*

##### Headers
```bash
NONE
```

##### Body
```bash
{
  "password": "my_new_password"
}
```

##### Request
```bash
curl -i -X PUT http://localhost:8080/api/v1/auth/reset-password/575df8bd915e93c9fce7866cefd5b2cf8c1acf61 --data "password=my_new_password"
```

##### Response
```bash
{
  "success": true,
  "message": "Password reset successfully!"
}
```
[<< back](../../index.md)
