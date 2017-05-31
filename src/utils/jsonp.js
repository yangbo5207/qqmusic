import jsonp from 'jsonp'
import each from 'lodash/each'

export default function (url, options) {
    const connect = /\?/.test(url) ? '&' : '?'
    let param = connect

    each(options.params, (item, key) => {
        param += `&${key}=${item}`
    })

    return new Promise((resolve, reject) => {
        jsonp(url, {
            param,
            name: options.jsonpCallback || '__jp',
            timeout: options.timeout || 60000,
            prefix: options.prefix || '__jp'
        }, (error, data) => data ? resolve(data.data) : reject(error))
    })
}
