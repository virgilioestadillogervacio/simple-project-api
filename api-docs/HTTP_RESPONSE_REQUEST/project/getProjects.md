Resource: */api/v1/project* \
Method:   *GET*

##### Headers
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTYxOTkxNiwiZXhwIjoxNjE5NjI0OTE2fQ.V917JakkKruw7QoLAuaPOeDeuph3ZzGB6CzJFtQR3bM
```

##### Body
```bash
NONE
```

##### Request
```bash
curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODkxNTIzMGI5MTRjMDQ5MGIyZTk0MCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYxOTYxOTkxNiwiZXhwIjoxNjE5NjI0OTE2fQ.V917JakkKruw7QoLAuaPOeDeuph3ZzGB6CzJFtQR3bM" \
-X GET http://localhost:8080/api/v1/project
```

##### Response
```bash
{
  "data": [
    {
      "employees": [],
      "_id": "608915240b914c0490b2e953",
      "name": "Google Calendar",
      "client": null,
      "__v": 0
    },
    {
      "employees": [
        {
          "position": "Angular Developer",
          "yearOfExperience": 1,
          "_id": "608915230b914c0490b2e94b",
          "user": "608915230b914c0490b2e945",
          "__v": 0
        },
        {
          "position": "VueJS Developer",
          "yearOfExperience": 2,
          "_id": "608915230b914c0490b2e94c",
          "user": "608915230b914c0490b2e946",
          "__v": 0
        }
      ],
      "_id": "608915240b914c0490b2e954",
      "name": "Microsoft Office",
      "client": {
        "company": "Microsoft",
        "numOfEmployees": 1500,
        "_id": "608915230b914c0490b2e951",
        "user": "608915230b914c0490b2e942",
        "__v": 0
      },
      "__v": 0
    },
    {
      "employees": [
        {
          "position": "NodeJS Developer",
          "yearOfExperience": 7,
          "_id": "608915230b914c0490b2e94d",
          "user": "608915230b914c0490b2e947",
          "__v": 0
        },
        {
          "position": "Python Developer",
          "yearOfExperience": 4,
          "_id": "608915230b914c0490b2e94e",
          "user": "608915230b914c0490b2e948",
          "__v": 0
        },
        {
          "position": "Ruby Developer",
          "yearOfExperience": 5,
          "_id": "608915230b914c0490b2e94f",
          "user": "608915230b914c0490b2e949",
          "__v": 0
        }
      ],
      "_id": "608915240b914c0490b2e955",
      "name": "Instagram",
      "client": {
        "company": "Facebook",
        "numOfEmployees": 3000,
        "_id": "608915230b914c0490b2e952",
        "user": "608915230b914c0490b2e943",
        "__v": 0
      },
      "__v": 0
    }
  ]
}
```
[<< back](../../index.md)
