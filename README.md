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

### REQUEST
body : 
```JSON
{
  "name":"your_name",
  "password":"your_password",
  "address":"your_address"
}
```
### RESPONSE

-  Response (201 - Create )
```JSON
{
  "id": your_id,
  "name": "your_name",
  "address": "your_password"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "name is required"
}
OR
{
  "message": "password is required"
}
OR
{
  "message": "address is required"
}

```
## 2. LOGIN => /login
method : POST
### Request
body : 
```JSON
{
  "name":"your_name",
  "password":"your_password"
}
```
### Response
- Response (200 - OK )
```JSON
{
  "access_token": "your_access_token"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "name is required"
}
OR
{
  "message": "password is required"
}
```

- Response (401 - Unauthorized)

```json
{
  "message": "name/password is invalid"
}
```

## 3. PRODUCT => /product

method : GET

### Request
- headers:

```json
{
  "access_token": "bearer string"
}
```

- query : 
```JSON
{
  "page":"<number_page>"
}
```
### Response

- Response (200 - OK)
```JSON
{
  "total": 10,
  "size": 2,
  "totalPage": 5,
  "currentPage": 1,
  "data": [
  {
      "id": 1,
      "name": "Hoodie Polos",
      "price": 150000,
      "createdAt": "2024-08-27T18:44:29.902Z",
      "updatedAt": "2024-08-27T18:44:29.902Z"
    },
    {
      "id": 2,
      "name": "Kaos Polos",
      "price": 60000,
      "createdAt": "2024-08-27T18:44:29.902Z",
      "updatedAt": "2024-08-27T18:44:29.902Z"
    }
  ]
}
```

