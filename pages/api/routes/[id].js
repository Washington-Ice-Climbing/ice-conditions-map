import { routes } from '../../../static/routes/routes'

export default ({ query: { id } }, res) => {
    const filtered = routes.filter(r => r.rid === id)

    // route with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `route with id: ${id} not found.` })
    }
}