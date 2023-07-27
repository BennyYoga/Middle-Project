# User Endpoint

Before you access All endpoint you must login to get `Token` to access endpoint. for login you can access this endpoint

>Post /api/login


### Response

```
{
    "Token": "String",
    "UserId": String"
}
```
And you can use token for access file must authenticate in header


## Model Of user

```
{
    UserId : uuid
    Username : string
    Password : string
    Picture : file
    Email : string
}
```
## Get User

Get User is to get data all from user accept password 

> GET /api/user/:IdUser

### Url Params
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `UserId` | `string` | IdUser when You Login |

### Response

```
{
    message : "String"
}
```

### Status Response  

| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

## Create User
To make user before login

> POST /api/user

### Body Params
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `Username` | `string` | IdUser when You Login |
| `Password` | `string` | Password for login |
| `Email` | `string` | Email like gmail or something |
| `Picture` | `file` | Picture Ekstension JPG, or PNG |

### Status Response  

| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 500 | `INTERNAL SERVER ERROR` |

## Edit User User
To make data user 

> PATCH /api/user/:IdUser

### Request Headers
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `Authorization` | `string` | **Required** get from respone login |

### Body Form-data (Optionaly Parametes)
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `Username` | `string` | IdUser when You Login |
| `Password` | `string` | Password for login |
| `Email` | `string` | Email like gmail or something |
| `Picture` | `file` | Picture Ekstension JPG, or PNG |

### Url Params
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `UserId` | `string` | IdUser when You Login |


### Status Response  

| Status Code | Description |
| :--- | :--- |
| 201 | `EDITED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |