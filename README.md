# Spotify Playlist Guard - Website

This project is a web app that provides an interface for managing administration resources of the [Spotify Playlist Guard](https://github.com/marcus-castanho/spotify_playlist_guard).

## The application

This is the codebase of the web app for managing admin resources of the spotify playlist guard app. Links to the application:

-   The [application](https://spotify-playlist-guard-admin.vercel.app/): the url to the live version of this project;
-   [Components storybook documentation](https://spotify-playlist-guard-admin.vercel.app/docs): the url to the storybook docs for all the components used in the application;

Also, please check the **other apps related to this project**:

-   [Spotify Playlist Guard](https://github.com/marcus-castanho/spotify_playlist_guard): An application tha performs a guard routine periodically removing, from selected playlists, tracks added by unauthorized users;
-   [Spotify Playlist Guard API](https://github.com/marcus-castanho/spotify-playlist-guard-api): An API for the Spotify Playlist Guard application;
-   [Spotify Playlist Guard Website](https://github.com/marcus-castanho/spotify-playlist-guard-website): A website for the Spotify Playlist Guard application;

### Pages

#### Sign in page (not authenticated) - /signin

The sign in page contains a sign in form to be filled with the admin's e-mail and password.The header is present across all the app and contains a version of the guard bot logo for admin as a button that redirects back to the sign in page or the home page if authenticated and a sun/moon button for switching between themes The footer is present in some pages accros the app and contains a Github logo which redirects to this app's repository and also a link to the developer's profile.

#### Home page (authenticated) - /

The home page for authenticated users shows a section containing cards for the app's external apps. Each card presents the name of the app, a pencil button that opens an edit modal with a form and a trash button that opens a delete confirmation modal. The playlists section is paginated and presents a pagination bar at hthe bottom with previous and next button as well as the current page and other available pages.At the top left corner of the sections there is a plus sign button which opens a modal with a form for creating a new external app. The header for authenticated pages also contains a profile image which opens a pop-up container with options of redirection to the profile page or signin out.

#### Profile page (authenticated) - /profile

The profile page presents a center section containing the user's spotify profile picture their info: name and e-amil. An edit button is also presented, which turns the section into a form.

### Authentication

This projects uses a JWT strategy to authenticate the admin users. For more information on how the autentication service works in the back end, please see the ["Authentication" section in the API documentation](https://github.com/marcus-castanho/spotify-playlist-guard-api?tab=readme-ov-file#authentication).

### Architecture

This project uses the [Next.js](https://nextjs.org/) framework, and, therefore, uses its routes based architecture (app folder router) with each file in the page `/app` representing a page route. For more information, please check out [Next.js official documentation](https://nextjs.org/docs/app). Also, all the application is contained in the `/src` folder and is mainly divided between pages in `/app` folder, components in `/components` folder, tests in `/tests` folder and other folders that represent other tools, services and adapters that are used in the pages.

### Technologies and libraries

-   [TypeScript](https://www.typescriptlang.org/) as language;
-   [Next.js](https://nextjs.org/) as framework;
-   [React](https://react.dev/) as web UI library;
-   [Tailwind](https://tailwindcss.com/) as CSS framework;
-   [Storybook](https://storybook.js.org/) as documentation tool;
-   [GitHub Actions](https://github.com/features/actions) as CI/CD tool;
-   [Vercel](https://vercel.com/) as cloud server host;

## Usage:

Requirements:

-   An instance of [Spotify Playlist Guard API](https://github.com/marcus-castanho/spotify-playlist-guard-api) running;
-   [NodeJS and npm](https://nodejs.org/en/) installed in your machine;
-   A terminal of your choice.

Steps:

1. Clone this repo on your local directory;
2. In the terminal, enter the created directory and run the following command to install all the dependencies:

```
npm install -y
```

3. Create a .env file based on the .env.example in this project and insert the values of the vars based on your development environment.

4. Run the following command to run the app in development mode:

```
npm run dev
```

5. For a production-like running app, run the following commands:

```
npm run build
```

```
npm run start
```

The application will then be available at 'http://localhost:3030'

# Development and contributions

## Commit Message Guidelines

This project uses [Convention Commit](https://www.conventionalcommits.org/) with [ AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) specifications for standard commit messages.

## Git Hooks

Git hooks compliant with the commit guidelines and linting of the projet are defined in the ./husky folder. The hooks are disabled by default and can be enabled or disabled using the commands:

```
npm run enable-hooks
```

```
npm run disable-hooks
```

## License

Spotify Playlist Guard Website is published under [MIT license](https://github.com/marcus-castanho/spotify_playlist_guard/blob/main/LICENSE)
