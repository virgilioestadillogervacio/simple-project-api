Resource: */api/v1/auth/me* \
Method:   *GET*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGU3YzE1ZjgzZWRjMGJkMDk0MTFmNyIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTk1MDc1NywiZXhwIjoxNjE5OTU1NzU3fQ.cEKC7RWV070j8No_fQlb0xL1LNcSuEincsYoyGDCxBo
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGU3YzE1ZjgzZWRjMGJkMDk0MTFmNyIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTk1MDc1NywiZXhwIjoxNjE5OTU1NzU3fQ.cEKC7RWV070j8No_fQlb0xL1LNcSuEincsYoyGDCxBo" \
-X GET http://localhost:8080/api/v1/auth/me
```

##### Response
```bash
{
  "status": 200,
  "data": {
    "fname":"",
    "lname":"",
    "_id":"6088d1bf1018c40f3cdd54ad",
    "email":"johndoe@gmail.com",
    "role":"CLIENT",
    "__v":0
  }
}
```
[<< back](../../index.md)
