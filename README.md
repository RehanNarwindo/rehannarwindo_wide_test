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

## 4. CART => /cart

method : GET

### Request
- headers:

```json
{
  "access_token": "bearer string"
}
```

### Response

- Response (200 - OK)
```JSON
[
  {
    "id": 5,
    "ProductId": 6,
    "type": "pria",
    "quatity": 2,
    "total": 100000,
    "UserId": 2,
    "createdAt": "2024-08-27T19:46:17.209Z",
    "updatedAt": "2024-08-27T19:47:11.223Z",
    "Product": {
      "id": 6,
      "name": "Celana Pendek",
      "price": 50000,
      "createdAt": "2024-08-27T18:44:29.902Z",
      "updatedAt": "2024-08-27T18:44:29.902Z"
    }
  },
  {
    "id": 6,
    "ProductId": 5,
    "type": "",
    "quatity": 2,
    "total": 280000,
    "UserId": 2,
    "createdAt": "2024-08-28T10:32:47.104Z",
    "updatedAt": "2024-08-28T10:32:53.186Z",
    "Product": {
      "id": 5,
      "name": "Celana Panjang",
      "price": 140000,
      "createdAt": "2024-08-27T18:44:29.902Z",
      "updatedAt": "2024-08-27T18:44:29.902Z"
    }
  }
]
```

## 4. CART => /cart

method : POST

### Request
- headers:

```json
{
  "access_token": "bearer string"
}
```

- body :
```JSON

{
  "ProductId": "product_Id",
  "type": "type_product",
  "quatity": 1
}
```

### Response 

- Response (200 - OK)

```JSON
{
  "id": 6,
  "ProductId": 5,
  "type": "",
  "quatity": 2,
  "total": 280000,
  "UserId": 2,
  "createdAt": "2024-08-28T10:32:47.104Z",
  "updatedAt": "2024-08-28T10:32:53.186Z"
}
```

- Response (400 - Bad Request )

```JSON
{
  "message": "ProductId is required"
}
```














