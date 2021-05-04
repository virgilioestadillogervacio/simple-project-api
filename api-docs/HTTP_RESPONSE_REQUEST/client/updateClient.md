Resource: */api/v1/client/{id}* \
Method:   *PUT*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkwMjY3ZmRhOGVmMDJmY2NjNGMxOSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1OTE4NDIsImV4cCI6MTYxOTU5Njg0Mn0.O44hEuYGdY9Oqw7Qf6esO9hIM3UmOyJgZNG2MmunTv4
```

##### Body
```bash
{
  company: "New Company",
  numOfEmployees: 10,
  fname: "Harry",
  lname: "Potter",
  email: "harrrypotter@gmail.com"
}
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkwMjY3ZmRhOGVmMDJmY2NjNGMxOSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1OTE4NDIsImV4cCI6MTYxOTU5Njg0Mn0.O44hEuYGdY9Oqw7Qf6esO9hIM3UmOyJgZNG2MmunTv4" -X PUT http://localhost:8080/api/v1/client/60890268fda8ef02fccc4c28 \
--data "company=New Company&numOfEmployees=10&fname=Harry&lname=Potter&email=harrypotter@gmail.com"
```

##### Response
```bash
{
  "data": {
    "company": "New Company",
    "numOfEmployees": 10,
    "_id": "60890268fda8ef02fccc4c28",
    "user": {
      "fname": "Harry",
      "lname": "Potter",
      "_id": "60890267fda8ef02fccc4c19",
      "email": "harrypotter@gmail.com",
      "role": "CLIENT", 
      "__v": 0
    },
    __v": 0
  }
}
```
[<< back](../../index.md)
