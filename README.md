# WIDE TECHNICAL TEST

## how to start this application

```
1. git clone https://github.com/RehanNarwindo/rehannarwindo_wide_test.git
2. cd with_JS
3. make .env and fill JWT_SECRET=
3. npm i -y
4. nodemon app
```

## how to use
### go to url app running

## ENDPOINT

## 1. REGISTER => /register
method : POST
body : 
```JSON
{
  "name":"your_name",
  "password":"your_password",
  "address":"your_address"
}
```
status : 
### 401 create
```JSON
{
  "id": 2,
  "name": "test1",
  "address": "test123"
}
```

## 2. LOGIN => /login
method : POST
body : 
```JSON
{
  "name":"your_name",
  "password":"your_password"
}
```
status : 
### 400 OK
```JSON
{
  "access_token": "your_access_token"
}
```

## 3. PRODUCT => /product
method : GET

