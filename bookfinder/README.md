# Chingu Voyage45 Tier3 Team 37

## Book Finder

The Book Finder Web App is an innovative online platform designed to simplify the process of finding and purchasing books across multiple websites. This application offers users a convenient way to explore a vast collection of books from various online retailers, compare prices, and make informed purchasing decisions.

## Table of contents

- [Chingu Voyage45 Tier3 Team 37](#chingu-voyage45-tier3-team-37)
  - [Book Finder](#book-finder)
  - [Table of contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Design protoype](#design-protoype)
  - [Screenshots](#screenshots)
  - [Tools and Technologies](#tools-and-technologies)
    - [UX/UI](#uxui)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Devops](#devops)
  - [Setup](#setup)
  - [Sample Code](#sample-code)
  - [Authors](#authors)

## Key Features

**Price Comparison:** With our app, users can effortlessly view the prices of their desired books from different online retailers, helping them identify the best deals and discounts.

**Favorites List:** Found a book you're interested in? Add it to your favorites list! This feature allows users to curate their own personalized collection of books they're considering or simply wish to keep track of for future reference.

**Discount Notifications:** Never miss a deal again! Our app goes the extra mile by sending users notifications when a book they've favorited receives a discount. This ensures that users stay informed about cost-saving opportunities for their favorite reads.

**Direct Purchase Links:** When users discover a book they're eager to buy, our app provides direct links to the respective seller's website. This seamless integration ensures a smooth transition from discovery to purchase, allowing users to complete their transactions with ease.

## Design protoype

[Our project prototype on FIGMA](https://www.figma.com/file/ep8G9FmBjyI97BPPUsV9hZ/book-price-finder?type=design&node-id=0%3A1&mode=design&t=IG2ZP95Zdr7U8EZE-1)

## Screenshots

## Tools and Technologies

### UX/UI

- Figma

### Frontend

- Tailwind Css
- NextJS
- React
- Javascript

### Backend

- NextJS
- Javascript
- MongoDB Atlas
- Clerk

### Devops

- Netlify

## Setup

To get started with Book Finder Web App, follow these steps:

- Clone the repository to your local machine.
- Create a .env.local file in the root directory with variables that we provide you to it if requested
- Install the necessary dependencies using npm install.
- Start the development server using `npm run dev` in the CLI.
- Open your browser and navigate to the provided URL to explore and discover books!

## Sample Code

## API Reference

#### Get books

```http
  GET /api/v1/books
```

| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| `search`    | `string` | General input search       |
| `title`     | `string` | Search Title Parameter     |
| `author`    | `string` | Search Author Parameter    |
| `publisher` | `string` | Search Publisher Parameter |

#### Get prices

```http
  GET /api/v1/price
```

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `isbn`    | `string` | Book Industry Identifier |

#### User

```http
  POST /api/v1/user
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Add book to user favorite

```http
  POST /api/v1/favorite
```

| Parameter     | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `identifier`  | `string` | **Required**. Book Industry Identifier |
| `cover`       | `string` | **Required**. Book Cover Url           |
| `title`       | `string` | **Required**. Book Title               |
| `description` | `string` | Book Description                       |
| `price`       | `number` | Book Pirce                             |

#### Delete a book from user favorite

```http
  POST /api/v1/favorite
```

| Parameter    | Type     | Description                            |
| :----------- | :------- | :------------------------------------- |
| `identifier` | `string` | **Required**. Book Industry Identifier |

```http
  GET /api/v1/favorite
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

```http
  POST /api/v1/favorite/{favoriteId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `favoriteId` | `string` | **Required**. MongoDB Favorite Id |

```http
  DELETE /api/v1/favorite/{favoriteId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `favoriteId` | `string` | **Required**. MongoDB Favorite Id |

## Authors

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/EmmanuelOloke"><img src="https://avatars.githubusercontent.com/u/16335826?v=4" width="100px;" alt="Emmanuel Oloke"/><br /><sub><b>Emmanuel Oloke</b></sub></a><br /><a href="https://github.com/EmmanuelOloke?tab=repositories" title="Projects">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ceifeirocv"><img src="https://avatars.githubusercontent.com/u/20646833?v=4" width="100px;" alt="Jair Almeida Oliveira"/><br /><sub><b>Jair Almeida Oliveira</b></sub></a><br /><a href="https://github.com/ceifeirocv?tab=repositories" title="Projects">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Pio-js"><img src="https://avatars.githubusercontent.com/u/71008079?v=4" width="100px;" alt="Pio Saija"/><br /><sub><b>Pio Saija</b></sub></a><br /><a href="https://github.com/Pio-js?tab=repositories" title="Projects">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yildiztugba"><img src="https://avatars.githubusercontent.com/u/78135546?v=4" width="100px;" alt="Tugba Yildiz"/><br /><sub><b>Tugba Yildiz</b></sub></a><br /><a href="https://github.com/yildiztugba?tab=repositories" title="Projects">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/frugalcodes"><img src="https://avatars.githubusercontent.com/u/91540220?v=4" width="100px;" alt="Samuel Igwe"/><br /><sub><b>Samuel Igwe</b></sub></a><br /><a href="https://github.com/frugalcodes?tab=repositories" title="Projects">💻</a></td>
    </tr>
     </tbody>
</table>
