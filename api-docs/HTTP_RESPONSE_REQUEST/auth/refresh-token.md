Resource: */api/v1/auth/refresh-token* \
Method:   *POST*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1NzkzNDgsImV4cCI6MTYxOTU4NDM0OH0.oOk0vel6dCkh3miQ1wK2krRIVhjyftlCz96XxaYZG1w
```

##### Body
```bash
refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1NzkzNDgsImV4cCI6MTY1MTEzNjk0OH0.aqeWoICdo1mS0sSmVRLpxtF4n6LoFAQ5E21zjJjTkuY"
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1ODA0NzIsImV4cCI6MTYxOTU4NTQ3Mn0.UuPJ50lFIKraXjvnGvY-j9JOhsHKUEbpJ9RA5rsdzHQ" \
-X POST http://localhost:8080/api/v1/auth/refresh-token \
--data "refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1ODA0NzIsImV4cCI6MTY1MTEzODA3Mn0.hwsQ32eMggkwPHN7XaTTJuMW_fdZWmlA9ziUXFN9U1U"
```

##### Response
```bash
{
  "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsImlhdCI6MTYxOTU4MDYxOSwiZXhwIjoxNjE5NTg1NjE5fQ.eHXIKvwHU5vykpkDmvLRlqhAIIYozUYoG7w_hkWxAUc",
  "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsImlhdCI6MTYxOTU4MDYxOSwiZXhwIjoxNjUxMTM4MjE5fQ.M2esH9LTAjFAOCG2K3pEUo1ZJebLV0Hhepn7xaYbSgE"
}
```
[<< back](../../index.md)
