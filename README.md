![Screenshot 2022-04-08 at 1 07 38 AM](https://user-images.githubusercontent.com/18538027/162333724-5c0cd2f2-50aa-47c0-99bb-7d5d9cd392d2.png)

# Rick and Morty App

This application makes use of the public API of Rick & Morty: https://rickandmortyapi.com.

- Front end is built in React with Redux and Hooks.
- Back end is built in Express and is a REST API with MongoDB Database.
- MongoDB url is provided separately.

## Objectives

### The main functionalities are:

- Login\
The users need to be authenticated to consume the application. The auth is kept state between reloads in local storage. User information for login is stored in db.
- List view\
Main page is a list view of all characters with an indicator to know if a character is in the fav list.
- Detail view\
When character is clicked, the user will be taken to a detailed view page. A button is available to add or remove a character from a favourite list. Favourites information is stored in db.
- 404 page

### These bonus functionalities are:

- Register\
Sign up page was added within Auth component for new users.
- Testing\
Basic Front End tests added in Jest. See further work.
- Backend pagination\
Next/prev button added to send request to back end to fetch next page of characters.
- Image preloader\
Further work.

### Further work to be done with more time:
- Testing! Write unit, integration and e2e tests to check components, functionality for user flow `(Auth -> View Character List -> View Details -> Favourite/Unfavourite)`\
e.g Jest and Puppeteer for unit, api and e2e testing across browsers and platforms, and 
- Deploy app
- Episode details to populate `First seen in:` name.
- Add informative errors to be displayed in front end

## Running the app locally
- Run `git clone https://github.com/cmcmanus2022/rick-morty-app.git`

### Back end
- Create `.env` file in `server` directory with `secret` and `CONNECTION_URL` variables. These are provided separately.
- Open terminal and navigate to `server`.
- Run `yarn start` to run app in development mode.
- You should see a message in console log saying `Server running on port: 5000` if successful.

### Front end
- Open new terminal and navigate to `src` directory, run `yarn start` to run app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Extra libraries

### Back end
- axios - to make http requests
- bcryptjs - to hash password
- jsonwebtoken - for authentication
- mongoose - MongoDB client

### Front end
- react-router-dom - React navigation
- redux-thunk - React redux for async anctions
