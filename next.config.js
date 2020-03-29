const withLess = require('@zeit/next-less')

module.exports = () => {
    return withLess({
        lessLoaderOptions: {
            modifyVars: {
                'primary-color': '#066',
            },
            javascriptEnabled: true,
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
            }
            return config
        },
    })
}