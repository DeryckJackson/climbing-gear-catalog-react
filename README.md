# Gear Catalog

#### By Deryck Jackson

## Description

React App for organizing and keeping track of users climbing gear.

## Screen Shots

![gearPic](gearPic.png)
![gearDetail](gearDetail.png)

## Component Diagram

![diagram](component-diagram.png)

## User Stories

- :heavy_check_mark: As a user I want to add a gear piece to my gear collection with name, description, brand, weight, width, depth and whether or not it locks.
- :heavy_check_mark: As a user I want to be able to log in and only be able to use CRUD functionality on my own gear
- As a user I want to create gear racks for climbing trips

## Stretch Goals

- As a user I want to make wishlists for gear I don't have and want
- As a user I want to collaborate with other users to put racks together for climbing trips, it should be able to make a list from both users collection.
- As a user I want new gear suggestions based on what kind of gear I have, e.g. You're missing cams in size 0.3 - 0.75 [link]. Your rope is over 5 years old, manufacturers recommend replacing them every 5 years. [link].
- As a user I want to be able to make my wishlist public so other people can see the gear I want and get it for me

## Setup and Installation

- Navigate to the parent directory you would like to store the project's directory in.
- Clone the repository from github, and navigate to its directory.

```sh
git clone https://github.com/DeryckJackson/climbing-gear-catalog-react
cd climbing-gear-catalog-react
```

- Install required dependencies.

```sh
npm install
```

- Run the application (You will need two terminals open)

```sh
npm run dev
```

- Install python dependencies

```sh
pipenv shell
pipenv install
```

- Open new terminal
- Run the python migration

```sh
cd gearcatalog
python manage.py migrate
```

- Add a .env file to the `gearcatalog` directory.
- Generate a new django secret key by running the follow command

```sh
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```
- Create a .env file in the `gearcatalog/gearcatalog` directory
- Add the generated key to the .env file with the following key

```
SECRET_KEY = {YOUR_NEW_SECRET_KEY}
```

- Run the python backend server

```sh
python manage.py runserver
```

- Open your browser and navigate to `localhost:8000`

## Tech used

- Html
- CSS / Bootstrap
- Redux
- JavaScript
- React
- Django

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
