export const randomString = (num) => {
    let res = ''
    for (let i = 0; i < num; i++) {
        res += (Math.random() * 9).toFixed(0)
    }
    return res
}
