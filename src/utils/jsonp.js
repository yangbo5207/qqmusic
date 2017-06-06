import jsonp from 'jsonp'
import each from 'lodash/each'

const defaultConfig = {
    g_tk: 5831,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
}

export default function (url, options) {
    options.params = { ...defaultConfig, ...options.params }
    const connect = /\?/.test(url) ? '&' : '?'
    let param = connect

    each(options.params, (item, key) => {
        param += `&${key}=${item}`
    })

    return new Promise((resolve, reject) => {
        jsonp(url, {
            param,
            name: options.params.jsonpCallback || '__jp',
            timeout: options.timeout || 60000,
            prefix: options.prefix || '__jp'
        }, (error, data) => data ? resolve(data.data) : reject(error))
    })
}
