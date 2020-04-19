import { routes } from '../public/routes/routes'
import { contributors } from "../public/contributors/contributors";
import fs from 'fs';
import path from 'path';

export function getRoutes() {
    return routes.map(r => addRouteLinks(r));
}

export function getContributors() {
    return contributors;
}

export async function getRouteImages(rid) {
    const images = (await import(`../public/routes/${rid}/images/images`)).images
    return images.map(image => Object.assign(image, {
        src: `${getImagePath(rid)}/${image.src}`
    }))
}

export async function getRouteContent(rid) {
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