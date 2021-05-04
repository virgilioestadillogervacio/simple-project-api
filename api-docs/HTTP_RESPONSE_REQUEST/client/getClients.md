Resource: */api/v1/client* \
Method:   *GET*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkwMjY3ZmRhOGVmMDJmY2NjNGMxOSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1OTE4NDIsImV4cCI6MTYxOTU5Njg0Mn0.O44hEuYGdY9Oqw7Qf6esO9hIM3UmOyJgZNG2MmunTv4
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkwMjY3ZmRhOGVmMDJmY2NjNGMxOSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MTk1OTE4NDIsImV4cCI6MTYxOTU5Njg0Mn0.O44hEuYGdY9Oqw7Qf6esO9hIM3UmOyJgZNG2MmunTv4" -X GET http://localhost:8080/api/v1/client
```

##### Response
```bash
{
  data: [
    {
      "company": "Google",
      "numOfEmployees": 1000,
      "_id": "60890268fda8ef02fccc4c28", 
      "user": {
        "fname": "Larry",
        "lname": "Page",
        "_id":"60890267fda8ef02fccc4c19",
        "email":"larrypage@gmail.com",
        "role":"CLIENT",
        "__v":0
      },
      "__v":0
    },
    {
      "company": "Microsoft",
      "numOfEmployees":1500,
      "_id":"60890268fda8ef02fccc4c29",
      "user": {
        "fname": "Bill",
        "lname": "Gates",
        "_id": "60890267fda8ef02fccc4c1a",
        "email": "billgates@gmail.com",
        "role": "CLIENT",
        "__v":0
      },
      "__v":0
    },
    {
      "company": "Facebook",
      "numOfEmployees": 3000,
      "_id":"60890268fda8ef02fccc4c2a",
      "user": {
        "fname": "Mark",
        "lname": "Zuckerberg",
        "_id": "60890267fda8ef02fccc4c1b",
        "email":"markzuckerberg@gmail.com",
        "role": "CLIENT",
        "__v": 0
      },
    "__v": 0
    }
  ]
}
```
[<< back](../../index.md)
