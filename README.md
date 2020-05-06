# Animal Catalogue App

This application will allow creating/removing/fetching animal catalogue items. Each item can have name, description and an attachment image. Each user only has access to animal catalogue items that he/she has created. 

# Functionality of the application

* The application has serverless backend built using AWS Lambda funtions, mongoDB database and AWS Api Gateway, AWS S3 bucker and AWS Cloudformation
* The client consist of Vuejs framework
* The application uses Auth0 HS256 algorithm to authenticate users and pass jwt token to interact with the backend
* To upload images attachements, the application uses presigned url from s3 bucket and uploads the image through it to the s3 bucket
