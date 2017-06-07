export const randomString = (num) => {
    let res = ''
    for (let i = 0; i < num; i++) {
        res += (Math.random() * 9).toFixed(0)
    }
    return res
}

/**
 * value 是否为validList中的一个值
 * @param  {something}  value 多为字符串，也可以为其他类型
 * @param  {Array}  validList value所有可能值组成的数组
 * @return {Boolean} xx
 */
export const isTheone = (value, validList) => {
    let result = false
    validList.forEach(item => {
        if (value === item) {
            result = true
        }
    })
    return result
}
