import { routes } from '../public/routes/routes'
import { contributors } from "../public/contributors/contributors";
import { regions } from "../public/observations/regions";
import { observations } from "../public/observations/observations";
import fs from 'fs';
import path from 'path';

// Return list of route ids
export function getRouteIds() {
    return routes;
}

// Returns just basic route info for each route.
export async function getRoutes() {
    const routeFiles = await Promise.all(routes.map(rid => import(`../public/routes/${rid}/info`)));
    return routeFiles.map(r => addRouteLinks(r.info));
}

export function getContributors() {
    return contributors;
}

export function getRegions() {
    return regions;
}

export function getObservations() {
    return observations;
}

export async function getObservation(oid) {
    const ob = getObservations().find(o => String(oid) === String(o.id));
    return ob;
}

// Returns all route image, info, and content
export async function getRoute(rid) {
    const route = (await getRoutes()).filter(r => rid=== r.rid)[0];
    route.imgs = await getRouteImages(route.rid);
    route.content = await getRouteContent(route.rid);
    return route;
}

async function getRouteImages(rid) {
    const images = (await import(`../public/routes/${rid}/images/images`)).images
    return images.map(image => Object.assign(image, {
        src: `${getImagePath(rid)}/${image.src}`
    }))
}

async function getRouteContent(rid) {
    const routeDir = path.join(process.cwd(), `/public/${getDataPath(rid)}`)

    // can have a story or not
    let story = null;
    try {story = fs.readFileSync(path.join(routeDir, 'story.html'), 'utf8')} catch(e) { null; }

    return {
        overview: fs.readFileSync(path.join(routeDir, 'overview.html'), 'utf8'),
        beta: {
            approach: fs.readFileSync(path.join(routeDir, 'approach.html'), 'utf8'),
            climb: fs.readFileSync(path.join(routeDir, 'climb.html'), 'utf8'),
            descent: fs.readFileSync(path.join(routeDir, 'descent.html'), 'utf8'),
            gear: fs.readFileSync(path.join(routeDir, 'gear.html'), 'utf8'),
            conditions: fs.readFileSync(path.join(routeDir, 'conditions.html'), 'utf8'),
            strategy: fs.readFileSync(path.join(routeDir, 'strategy.html'), 'utf8')
        },
        extra: {
            history: fs.readFileSync(path.join(routeDir, 'history.html'), 'utf8'),
            story: story,
            links: fs.readFileSync(path.join(routeDir, 'links.html'), 'utf8')
        }
    }
}

function addRouteLinks(route) {
    return Object.assign(route, {
        coverImg: `${getImagePath(route.rid)}/cover.jpg`,
        topoImg: `${getImagePath(route.rid)}/topo.jpg`
    })
}

function getDataPath(rid) {
    return `/routes/${rid}`
}

function getImagePath(rid) {
    return `${getDataPath(rid)}/images`
}