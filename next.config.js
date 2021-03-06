const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')


module.exports = () => {
    return withLess(withCSS({
        lessLoaderOptions: {
            modifyVars: {
                'primary-color': '#F7882F',
            },
            javascriptEnabled: true,
        },
        env: {
            MAPBOX_API_KEY: process.env.MAPBOX_API_KEY
        },
        webpack: (config, { isServer }) => {
            if (isServer) {
                const antStyles = /antd\/.*?\/style.*?/
                const origExternals = [...config.externals]
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antStyles)) return callback()
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback)
                        } else {
                            callback()
                        }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                ]
                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader',
                })
            } else {
                config.node = {
                    fs: 'empty'
                }
            }
            return config
        },
    }))
}