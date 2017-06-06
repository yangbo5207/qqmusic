import jsonp from './jsonp'
import * as API from './API'
import * as tool from './tool'

/**
 * 热门搜索关键字
 */
export const getHotSearchKeysmod = () => {
    return jsonp(API.hotSearchKeysmod, {
        // 暂时未确认那些参数可以动态传进来，所以先写死
        params: {
            jsonpCallback: 'hotSearchKeysmod_top_search',
            a: 0
        }
    })
}

/**
 * 搜索智能提示
 */
export const searchSmart = key => {
    return jsonp(API.sosoSmartbox, {
        params: {
            is_xml: 0,
            key,
            jsonpCallback: `SmartboxKeysCallbackmod_search${tool.randomString(4)}`,
            a: 0
        }
    })
}

/**
 * 根据关键字搜索单曲
 */
const searchDefaultConfig = {
    keyword: '薛之谦',
    pageindex: 1,
    pagesize: 20,
    searchid: '57879984364014038'
}
export const search = options => {
    options = { ...searchDefaultConfig, ...options }
    return jsonp(API.soso, {
        params: {
            ct: 24,
            qqmusic_ver: 1298,
            new_json: 1,
            remoteplace: 'txt.yqq.song',
            searchid: options.searchid,
            t: 0,
            aggr: 1,
            cr: 1,
            catZhida: 1,
            lossless: 0,
            flag_qc: 0,
            p: options.pageindex,
            n: options.pagesize,
            w: options.keyword,
            jsonpCallback: `searchCallbacksong${tool.randomString(4)}`,
            a: 0
        }
    })
}

/**
 * banner推荐
 */
export const getRecomList = () => {
    return jsonp(API.recomList, {
        params: {
            jsonpCallback: 'GetRecomListCallback5053087508676672',
            tpl: 'v12',
            page: 'other',
            callback: 'GetRecomListCallback5053087508676672',
            rnd: '5053087508676672',
            a: 0
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
    company: -1,
    sort: 1,
    a: 0
}
export const getAlbumList = (options) => {
    options = { ...defaultConfig, ...options }
    return jsonp(API.albumList, {
        params: {
            jsonpCallback: 'GetAlbumListJsonCallback',
            cmd: options.cmd,
            page: options.page,
            pagesize: options.pagesize || 20,
            sort: options.sort,
            language: options.language,
            genre: options.genre,
            year: options.year,
            pay: options.pay,
            type: options.type,
            company: options.company
        }
    })
}
