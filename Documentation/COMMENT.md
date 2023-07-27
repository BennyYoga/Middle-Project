# Comment Endpoint

Endpoint for access Comment in video available that has been created by the user for create must login before access

## Model Of Comment

```
{
    CommentId : uuid
    UserId : string,
    VideoId : string,
    Comment : string,
    Username : string,
    TimeStamp : datetime
}
```

## Get Comment

To show all comment avaliable has been user created

> GET /api/comment

### Response

```
[
    {
        CommentId : uuid
        UserId : string,
        VideoId : string,
        Comment : string,
        Username : string,
        TimeStamp : datetime
    }
    {
    .....
    }
]
```

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `SUCCESS`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Get One Comment

To show one Comment avaliable has been user created

> GET /api/Comment/:CommentId

### Response

```
[
    {
        CommentId : uuid
        UserId : string,
        VideoId : string,
        Comment : string,
        Username : string,
        TimeStamp : datetime
    }
]
```

### Url Params

| Parameter   | Type     | Description                 |
| :---------- | :------- | :-------------------------- |
| `CommentId` | `string` | _Required_ from one Comment |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `SUCCESS`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Create Comment

To edit data Comment

> POST /api/Comment/

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Body Params

| Parameter  | Type     | Description                      |
| :--------- | :------- | :------------------------------- |
| `Comment`  | `string` | **Requiered** Content of COmment |
| `UserId`   | `string` | **Requiered** Id User comment |
| `VideoId`  | `string` | **Requiered** video of comment |
| `Username` | `string` | **Requiered** Name user send comment |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |
