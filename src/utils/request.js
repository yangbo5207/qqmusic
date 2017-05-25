import jsonp from './jsonp'
import * as API from './API'

/**
 * 热门搜索关键字
 */
export const getHotSearchKeysmod = () => {
    return jsonp(API.hotSearchKeysmod, {
        // 暂时未确认那些参数可以动态传进来，所以先写死
        params: {
            g_tk: '5381',
            jsonpCallback: 'hotSearchKeysmod_top_search',
            loginUin: 0,
            hostUin: 0,
            format: 'jsonp',
            inCharset: 'utf8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'yqq',
            needNewCode: 0
        },
        jsonpCallback: 'hotSearchKeysmod_top_search'
    })
}

/**
 * 获取排行榜信息
 */
export const getRecomList = () => {
    return jsonp(API.recomList, {
        params: {
            tpl: 'v12',
            page: 'other',
            callback: 'GetRecomListCallback5053087508676672',
            rnd: '5053087508676672',
            g_tk: '5381',
            jsonpCallback: 'GetRecomListCallback5053087508676672',
            loginUin: 0,
            hostUin: 0,
            format: 'jsonp',
            inCharset: 'utf8',
            outCharset: 'GB2312',
            notice: 0,
            platform: 'yqq',
            needNewCode: 0
        },
        jsonpCallback: 'GetRecomListCallback5053087508676672'
    })
}
