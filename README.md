# Cascade Ice
Cascade ice climbing guide.
Check it out at [https://cascade-ice.now.sh]( https://cascade-ice.now.sh).

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
vercel secrets rm mapbox-api-key
vercel secrets add mapbox-api-key <key>
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
vercel dev
```
You can visit the site at `http://localhost:3000` and make sure it's all good.
To do this, you will probably need an `.env.build` file with any env vars like:
```.env
MAPBOX_API_KEY=<key>
```

Then, simply type:
```.env
vercel
```
Follow the prompts. You can reach it at https://ice-conditions-map.kymccrohan.vercel.app.

To deploy to production (https://wa-ice.now.sh):
```.env
vercel --prod
```

## Routes
To add a new route:
1. Add a route id to the array in `public/routes/routes.js`.
 - The route id you choose will be the name of the folder containing its data.
 - Route id must be unique.
 - Only use lower case letters and hyphens in the id.
2. Create the folder  `public/routes/<rid>`, where `rid` is the route id chosen.
- Create a file `info.js` inside (copy and adjust from other examples):
    - `coordinates` is the long,lat (decimal) of the start of the climb.
    - `region` is one of the following: ["Mt. Hood", "Mt. Rainier", "I90", "US2", "Mountain Loop", "Highway 20", "Mt. Baker", "BC"]
    - `difficulty` is one of the following: ["PD","AD","D","TD","ED"]
- Inside, create a `images` folder (note all photos must be square and should be 1000x1000, and should have a `.jpg` extension):
    - Add a `cover.jpg`. This is the cover image on the routes screen.
    - Add a `topo.jpg`. This is the topo image on the topos tab.
    - Add any more photos you want. These can be displayed on the carousel.
    - Create a `images.js` file (copy other examples). This is where you list
    which images will appear in the carousel and their respective captions.
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
3. Create a map on caltopo:
    - Create the map under the gmail account `cascadeiceguide@gmail.com` (ask Kyle for password)
    - Make all lines use the small circle dot style.
    - Make the "Approach" line blue (select from basic color menu)
    - Make the "Climb" line red (default color)
    - Make the "Descent" line yellow (select from basic color menu)
    - Add any additional lines or markers as fit
    - Use "MapBuilderTopo" map layer unless specific reason to use otherwise
    - After saving the map to this account, a static url will appear, which you can use.
    - Click "Manage this map" and make sure it is "Publicly Viewable".
        
## Contributors
Routes link to one or more "contributors". To add a new contributor:
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