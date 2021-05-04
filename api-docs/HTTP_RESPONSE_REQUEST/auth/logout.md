Resource: */api/v1/auth/logout* \
Method:   *POST*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1ODE0MjIsImV4cCI6MTYxOTU4NjQyMn0.5hQ6DtiMrJOu23nLPHjjepcWoRZeUvcJJorDPpZaxv8
```

##### Body
```bash
refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1ODE0MjIsImV4cCI6MTY1MTEzOTAyMn0.X4Oku60hpWXNgOqnx1auUd9P8Qd8Yk1SBWx16yatlK4"
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1ODE0MjIsImV4cCI6MTYxOTU4NjQyMn0.5hQ6DtiMrJOu23nLPHjjepcWoRZeUvcJJorDPpZaxv8" \
-X POST http://localhost:8080/api/v1/auth/refresh-token \
--data "refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODhkMWJmMTAxOGM0MGYzY2RkNTRhZCIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1ODE0MjIsImV4cCI6MTY1MTEzOTAyMn0.X4Oku60hpWXNgOqnx1auUd9P8Qd8Yk1SBWx16yatlK4"
```

##### Response
```bash
{
  "message": "OK"
}
```
[<< back](../../index.md)
