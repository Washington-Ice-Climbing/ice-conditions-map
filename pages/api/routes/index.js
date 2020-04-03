import { routes } from '../../../static/routes/routes'
import { addRouteLinks } from "../../../utils/RouteUtil";

export default (req, res) => {
    const routesUpdated = routes.map(r => addRouteLinks(r))
    res.status(200).json(routesUpdated)
}