# REST API Middle Project Generasi GIGIH 3.0

Hello, Welcome to documentation for Video and product project of the task Generasi Gigih 3.0. These API Video project using Expres.js and with database Mongodb. The API aims to provide services for managing video data, including information about Video, Comment, User, and Product of Video. introduce my self [Benny Yoga](https://www.linkedin.com/in/bennyyoga/) From fs-class-2


```
Name        : Benny Yoga Suhardi
Class       : Fs-2
Id          : GG3FSGP0294
```


# Getting Started

To run this project you can `copy this repository` and run this code

>npm install

after install you can run the program with 

>npm start

# Endpoint API
This documentation is created to facilitate your understanding and usage of the Video Project REST API. You will find step-by-step guides for performing various operations, such as:

1. User Management
2. Video Display and Management
3. Authenticate
4. Product Management
5. Comment in some video

and this some endpoint to access to aboce the feature 

## User Endpoints

Open endpoints require no Authentication. but if you have full access of the Api you must create user and login

* [Login](Documentation/USER.md) : `POST /api/login/`

or you can manage your account for login

* [Create User](Documentation/USER.md) : `POST /api/user/` 
* [Edit Your Profile](Documentation/USER.md) : `PATCH /api/user/` 
* [Get Your Data](Documentation/USER.md) : `POST /api/user/:id`

## Video Endpoints
This endpoint to access video like to embeded link of url video and access the picture of the video. have many endpoint you can access from unAutenticate and must be authenticate


* [Get All Video](Documentation/VIDEO.md) : `GET /api/video/`
* [Get One Video](Documentation/VIDEO.md) : `GET /api/video/:id`
* [Get Video by User](Documentation/VIDEO.md) : `GET /api/video-user/`
* [Create Video](Documentation/VIDEO.md) : `POST /api/video/`
* [Edit Video](Documentation/VIDEO.md) : `PATCH /api/video/edit/:id`
* [Delete Video](Documentation/VIDEO.md) : `DELETE /api/video/delete/:id`

## Product Endpoint
Product you can access from unAutenticate and must be authenticate. this product tied to the video that is being shown

* [Get All Product](Documentation/PRODUCT.md) : `GET /api/product/`
* [Get One Product](Documentation/PRODUCT.md) : `GET /api/product/:id`
* [Get Product by Video](Documentation/PRODUCT.md) : `GET /api/product/byvideo/:id`
* [Create Product](Documentation/PRODUCT.md) : `POST /api/product/`
* [Edit Product](Documentation/PRODUCT.md) : `PATCH /api/product/edit/:id`
* [Delete Product](Documentation/PRODUCT.md) : `DELETE /api/product/delete/:id`

## Comment Endpoint
Comment Endpoint you cant access without login or autehnticate but for create you must login before access and this endpoint tied to the video

* [Get Product](Documentation/COMMENT.md) : `GET /api/comment/`
* [Get Product by Video](Documentation/COMMENT.md) : `GET /api/comment/byvideo/:id`
* [Create Product by Video](DOCUMENTATION/COMMENT.md) : `POST /api/comment/`
