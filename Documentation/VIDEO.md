# Video Endpoint

Endpoint for access video available that has been created by the user for editing must login before access

## Model Of Video

```
{
    VideoId : uuid
    UserId : string,
    Title : string,
    Description : string,
    ImageThumbnail : file,
    VideoEmbeded : string,
    TimeStamp : datetime
}
```

## Get Video

To show all video avaliable has been user created

> GET /api/video

### Response

```
[
    {
        VideoId : uuid
        UserId : string,
        Title : string,
        Description : string,
        ImageThumbnail : string,
        VideoEmbeded : string,
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

## Get One Video

To show one video avaliable has been user created

> GET /api/video/:VideoId

### Response

```
[
    {
        VideoId : uuid
        UserId : string,
        Title : string,
        Description : string,
        ImageThumbnail : string,
        VideoEmbeded : string,
        TimeStamp : datetime
    }
]
```

### Url Params

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `VideoID` | `string` | _Required_ from one video |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `SUCCESS`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Get One Video User

to see all the videos that have been made by logged in users

> GET /api/vide-user/:VideoId

### Response

```
[
    {
        VideoId : uuid
        UserId : string,
        Title : string,
        Description : string,
        ImageThumbnail : string,
        VideoEmbeded : string,
        TimeStamp : datetime
    }
    {
    .....
    }
]
```

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `SUCCESS`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Create Video

To edit data video

> POST /api/video/

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Body Params

| Parameter         | Type     | Description                      |
| :---------------- | :------- | :------------------------------- |
| `Title`           | `string` | **Requiered** Title of the video |
| `Description`     | `string` | Description Of the video         |
| `ImageeThumbnail` | `file`   | Picture Ekstension JPG, or PNG   |
| `VideoEmbeded`    | `String` | Code Embeded from youtube        |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Edit Video (Optionaly Parametes)

To edit data video

> PATCH /api/video/edit/:VideoId

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Url Params

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `VideoID` | `string` | _Required_ from one video |

### Body Params

| Parameter         | Type     | Description                      |
| :---------------- | :------- | :------------------------------- |
| `Title`           | `string` | **Requiered** Title of the video |
| `Description`     | `string` | Description Of the video         |
| `ImageeThumbnail` | `file`   | Picture Ekstension JPG, or PNG   |
| `VideoEmbeded`    | `String` | Code Embeded from youtube        |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `EDITED`                |
| 404         | `NOT FOUND`             |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Create Video

To deleted data video

> POST /api/video/:VideoId

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Url Params

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `VideoID` | `string` | _Required_ from one video |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `DELETED`               |
| 404         | `NOT FOUND`             |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |
