# ice-conditions-map
Interactive map showing crowdsourced ice climbing conditions and photos.
Check it out at [https://ice-conditions-map.kymccrohan.now.sh]( https://ice-conditions-map.kymccrohan.now.sh).

## Getting started
Install dependencies:
```.env
npm install
```
Run the app:
```.env
npm run dev
```
The app should launch in a browser. It will reload on changes to any file in the `pages` or `components` directory.

### Adding dependencies
For normal deps:
```.env
npm install <dep> --save
```
If it's only for development (like testing) do:
```.env
npm install <dep> --save-dev
```

### Deploying
To deploy, first make sure it builds:
```.env
npm run build
```
If it fails to build, deployment will stall, so we check build first.

Then, simply type:
```.env
now
```
Follow the prompts.

## Routes
To add a new route:
1. Add a route object to the array in `static/routes/routes.js`.
    - `rid` is the name of the folder that will hold assets for this route.
2. Create the folder `<rid>` under `static/routes`.
    - add `cover.jpg`
    
Note all photos must be square.

## Technologies used
This [setup guide](https://levelup.gitconnected.com/lets-create-a-project-with-nextjs-antd-and-deploy-with-now-sh-e38772348312) 
was super helpful, although there was one issue with getting build to work.
- [AntJs](https://ant.design/)
- [ReactJs](https://reactjs.org/)
- [NextJs](https://nextjs.org/)
- [Now](https://zeit.co/home)