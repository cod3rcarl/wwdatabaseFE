## Getting Started:

Clone the repo as instructed below

## Prerequisites:

Download and install npm modules. Add .env file for local usage. You will need to also clone the backend repository and create a databse from
https://dashboard.heroku.com/apps . This article goes through step by step instructions https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1. Place the credentials inside the .env file.

## Installation

1.  Clone the repo

`git clone https://github.com/cod3rcarl/wwdatabaseFE.git &
https://github.com/cod3rcarl/wrestlingDatabase.git

2. Install the required npm modules

`npm i`

3. Add a .env file in the root of the folder with the entry:

`REACT_APP_BACKEND_URL= if running locally, enter the localhost port the backend server is running from here`

4. Start the application

`npm start`

## Usage

Type a date into the date field. The date is formatted as DD/MM/YYYY. The first time a fetch is made, it can take a few seconds before a name appears (I am working on fixing this issue) After the first fetch however the names will appear immediately.

## Built with:

- HTML
- CSS
- JavaScript
- React
