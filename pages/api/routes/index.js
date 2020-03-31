import { routes } from '../../../static/routes/routes'

export default (req, res) => {
    const routesUpdated = routes.map(r => Object.assign(r, {imgSrc: `/static/routes/${r.rid}/cover.jpg`}))
    res.status(200).json(routesUpdated)
}