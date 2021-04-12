# Login routes

## Create a new user
```
var config = {
  method: 'post',
  url: 'http://localhost:3001/newUser',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : {
      email: ankushchalla@gmail.com,
      password: an123,
      firstName: ankush,
      lastName: challa
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
```
returns the following JSON: 
```
{
    "firstName": "ankush",
    "lastName": "challa"
}
```

## Login a user
```
var config = {
  method: 'post',
  url: 'http://localhost:3001/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : {
      email: ankushchalla@gmail.com,
      password: an123
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
```
returns the following JSON:
```
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFua3VzaGhhbGxhQGdtYWlsLmNvbSJ9.qAiHEACTNVAShh1D3EUQpFJXQQn1fUfXPfGL56fi5hM"
}
```
This token will uniquely identify the user, and must be added to the `headers` parameter on API calls, for example:
```
var config = {
  method: 'get',
  url: 'http://localhost:3001/<route>',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFua3VzaGNoYWxsYUBnbWFpbC5jb20ifQ.ainOTqmkHKQwgLtmnOqIiA0xu-pck3rUs_YD92cBO1U', 
    'Content-Type': 'application/json'
  },
  data : data
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
```
