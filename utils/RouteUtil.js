export function addRouteLinks(route) {
    const path = `/static/routes/${route.rid}`
    return Object.assign(route, {
        coverImg: `${path}/imgs/cover.jpg`,
        routeDir: path
    })
}