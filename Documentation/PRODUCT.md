# Product Endpoint

Endpoint for access Product from video available that has been created by the user for editing must login before access

## Model Of Product

```
{
    ProductId : uuid,
    Name : string,
    VideoId : string
    UserId : string,
    Price : integer,
    ImageProduct : file,
    LinkProduct : string,
}
```

## Get Product

To show all Product avaliable has been user created

> GET /api/product

### Response

```
[
    {
        ProductId : uuid,
        Name : string,
        VideoId : string
        UserId : string,
        Price : integer,
        ImageProduct : file,
        LinkProduct : string,
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

To show one Producr avaliable has been user created

> GET /api/product/:ProductId

### Response

```
[
    {
        ProductId : uuid,
        Name : string,
        VideoId : string
        UserId : string,
        Price : integer,
        ImageProduct : file,
        LinkProduct : string,
    }
]
```

### Url Params

| Parameter   | Type     | Description                 |
| :---------- | :------- | :-------------------------- |
| `ProductId` | `string` | _Required_ from one product |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `SUCCESS`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

## Get Product By Video

to see all the videos that have been made by logged in users

> GET /api/product/byvideo/:VideoId

### Response

```
[
    {
        ProductId : uuid,
        Name : string,
        VideoId : string
        UserId : string,
        Price : integer,
        ImageProduct : file,
        LinkProduct : string,
    }
    {
    .....
    }
]
```

### Url Params

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `ProductId` | `string` | _Required_ from Product |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `SUCCESS`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Create Product

To edit data video

> POST /api/product/

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Body Params

| Parameter         | Type     | Description                      |
| :---------------- | :------- | :------------------------------- |
| `Name`           | `string` | **Requiered** Name Of Product |
| `VideoId`           | `string` | **Requiered** Video of product |
| `Price`     | `string` | **Requiered** Price Of the product         |
| `ImageProduct` | `file`   | Picture Ekstension JPG, or PNG   |
| `LinkProduct`    | `String` | link Product from Tokopedia        |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Edit Video (Optionaly Parametes)

To edit data Product

> PATCH /api/product/edit/:ProductId

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Url Params

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `ProductId` | `string` | _Required_ from Product |

### Body Params

| Parameter         | Type     | Description                      |
| :---------------- | :------- | :------------------------------- |
| `Name`           | `string` | **Requiered** Name Of Product |
| `VideoId`           | `string` | **Requiered** Video of product |
| `Price`     | `string` | **Requiered** Price Of the product         |
| `ImageProduct` | `file`   | Picture Ekstension JPG, or PNG   |
| `LinkProduct`    | `String` | link Product from Tokopedia        |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `EDITED`                |
| 404         | `NOT FOUND`             |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |

## Create Product

To deleted data Product

> POST /api/product/:ProductId

### Request Headers

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `Authorization` | `string` | **Required** get from respone login |

### Url Params

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `ProductId` | `string` | _Required_ from one Product |

### Status Response

| Status Code | Description             |
| :---------- | :---------------------- |
| 201         | `DELETED`               |
| 404         | `NOT FOUND`             |
| 400         | `BAD REQUEST`           |
| 500         | `INTERNAL SERVER ERROR` |
