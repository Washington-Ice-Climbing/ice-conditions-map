# ice-conditions-map
Interactive map showing crowdsourced ice climbing conditions and photos.
Check it out at [https://wa-ice.now.sh]( https://wa-ice.now.sh).

## Getting started
Install dependencies:
```.env
npm install
```
### Mapbox API Key
Next, specify the development Mapbox API Key. You will need to contact
Kyle to get this key, or you can create your own Mapbox account and use your own key for free.
```.env
export MAPBOX_API_KEY=<key>
```
I find it helpful to put these export commands in a file `.env` (excluded in the `.gitignore`).
Then, each time you need to populate your env vars, just run:
```.env
source .env
```

#### Admin Only
To change the api key uploaded to `now`:
```.env
now secrets rm mapbox-api-key
now secrets add mapbox-api-key <key>
```

### Launch the app

Run the app:
```.env
npm run dev
```
The app should launch in a browser at `http://localhost:3000`. 
It will reload on changes to any file in the `pages` or `components` directory.

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
To deploy, first deploy locally, making sure everything will work fine when it is deployed:
```.env
now dev
```
You can visit the site at `http://localhost:3000` and make sure it's all good.

Then, simply type:
```.env
now
```
Follow the prompts. You can reach it at https://ice-conditions-map.kymccrohan.now.sh.

To deploy to production (https://wa-ice.now.sh):
```.env
now --prod
```

## Routes
To add a new route:
1. Add a route object to the array in `public/routes/routes.js`.
    - `rid` is the name of the folder that will hold assets for this route.
    - Copy the json structure for the rest of the object. Populate data correctly.
2. Create the folder  `public/routes/<rid>`.
    - Inside, create a `imgs` folder (note all photos must be square):
        - Add a `cover.jpg`. This is the cover image on the routes screen.
        - Add a `topo.jpg`. This is the topo image on the topos tab.
        - Add any more photos you want. These will be displayed on the carousel.
    - Create html content files:
        - `intro.html`
        - `approach.html`
        - `climb.html`
        - `descent.html`
        - `gear.html`
        - `conditions.html`
        - `strategy.html`
        - `history.html`
        - `links.html`
        - `story.html` (optional)
        
## Contributors
Routes link to a "contributor". To add a new contributor:
1. Add a new object to the array in `public/contributors/contributors.js`
- `cid` should match the contributor in the corresponding route objects.
- optionally add an image to the folder and link it. If no image is provided, the avatar
will just be the `cid` in text.

## Technologies used
This [setup guide](https://levelup.gitconnected.com/lets-create-a-project-with-nextjs-antd-and-deploy-with-now-sh-e38772348312) 
was super helpful, although there was one issue with getting build to work.
- [AntJs](https://ant.design/)
- [ReactJs](https://reactjs.org/)
- [NextJs](https://nextjs.org/)
- [Now](https://zeit.co/home)