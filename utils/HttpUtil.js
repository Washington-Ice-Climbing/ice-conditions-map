export function getUrl(path) {
    const baseUrl = process.env.NODE_ENV == "production" ?
        "https://ice-conditions-map.kymccrohan.now.sh" : "http://localhost:3000"
    return `${baseUrl}/${path}`
}