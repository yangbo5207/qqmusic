import jsonp from './jsonp'
import * as API from './API'

/**
 * 热门搜索关键字
 */
export const getHotSearchKeysmod = () => {
    return jsonp(API.hotSearchKeysmod, {
        // 暂时未确认那些参数可以动态传进来，所以先写死
        params: {
            jsonpCallback: 'hotSearchKeysmod_top_search'
        }
    })
}

/**
 * banner推荐
 */
export const getRecomList = () => {
    return jsonp(API.recomList, {
        params: {
            tpl: 'v12',
            page: 'other',
            callback: 'GetRecomListCallback5053087508676672',
            rnd: '5053087508676672',
            jsonpCallback: 'GetRecomListCallback5053087508676672'
        }
    })
}

/**
 * 新歌速递列表
 */
const defaultConfig = {
    cmd: 'firstpage',
    page: 0,
    pagesize: 20,
    language: -1,
    genre: 0,
    year: 1,
    pay: 0,
    type: -1,
    company: -1
}
export const getAlbumList = (options = defaultConfig) => {
    return jsonp(API.albumList, {
        params: {
            jsonpCallback: 'GetAlbumListJsonCallback',
            cmd: options.cmd,
            page: options.page,
            pagesize: options.pagesize || 20,
            sort: 1,
            language: options.language,
            genre: options.genre,
            year: options.year,
            pay: options.pay,
            type: options.type,
            company: options.company
        }
    })
}
