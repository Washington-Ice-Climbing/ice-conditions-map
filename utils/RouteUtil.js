import { routes } from '../public/routes/routes'

export function getRoutes() {
    return routes.map(r => addRouteLinks(r))
}

function addRouteLinks(route) {
    const path = `/routes/${route.rid}`
    return Object.assign(route, {
        coverImg: `${path}/imgs/cover.jpg`,
        routeDir: `/public/${path}`,
        imgDir: path
    })
}