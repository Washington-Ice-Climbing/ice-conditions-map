import { routes } from '../public/routes/routes'
import { contributors } from "../public/contributors/contributors";

export function getRoutes() {
    return routes.map(r => addRouteLinks(r));
}

export function getContributors() {
    return contributors;
}

function addRouteLinks(route) {
    const path = `/routes/${route.rid}`
    return Object.assign(route, {
        coverImg: `${path}/imgs/cover.jpg`,
        topoImg: `${path}/imgs/topo.jpg`,
        routeDir: `/public/${path}`,
        imgDir: path
    })
}