# E&M Hecho a mano

E&M: Hecho a mano is an e-commerce made with create-react-app

![img1](./src/assets/images/cap1.png)
![img2](./src/assets/images/cap2.png)
![img3](./src/assets/images/cap3.png)


## Installation
```bash
git clone https://github.com/iElectro13/em-hechoamano
```

```bash
cd em-hechoamano
```

```
npm install
```

## Usage

```bash
npm start
```

## Third-party's libraries
- [react-alice-carousel](https://github.com/maxmarinich/react-alice-carousel#readme "react-alice-carousel")
- [react-router-dom](https://github.com/remix-run/react-router#readme "react-router-dom")
- [react-icons](https://react-icons.github.io/react-icons/ "react-icons")
- [tailwindcss](https://tailwindcss.com/ "tailwindcss")

## Roadmap

1) Backend
2) Auth with JWT
3) Admin panel
4) User registration
5) Stripe payment
6) Jest and RTL implementation

## Global state management
In this project was used ContextAPI and useReducer working together to handle the global state.

## Directories
- assets/ : In this folder i’m going to place static files, like images, fonts, vídeos and
many others utility files.
- components/ : every component will be placed in this folder. Inside this folder i am
going to organize another folders by component category, like buttons, cards, etc.
- buttons/, cards/... : inside this kind of folders will be placed single React Components
beside it’s Test file.
- pages: In this folder all “pages” will be placed. In this project, “pages” means
complete sections, in order to route them later, so the user can navigate as any web
page.
- context/: In this folder i'm going to store the Context and Reducers files.

## Config files
- index.css : In this file i’m going to place any global css rule.
- App.js: In this file I'm going to route my application.
- Index.js: Config file.
- tailwind.config.js and postcss.config.js : these are CSS framework config files.
- Context.js: Global state config
- Reducers.js: Actions to mutate the global state
- generate.js: simple script to mock the database
- db.json: json-server mock data file

## Class components vs Functional components
In this project, functional components will be used. It’s completely prohibited to use class
components.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors
[iElectro](https://github.com/iElectro13 "iElectro")