import each from 'lodash/each'

let lastTime = 0
const ROOT = window

export const requestAnimationFrame = ROOT.requestAnimationFrame ||
    ROOT.webkitRequestAnimationFrame ||
    ROOT.mozRequestAnimationFrame ||
    ROOT.msRequestAnimationFrame ||
    function (callback) {
        let currTime = Date.now()
        const delay = Math.max(1000 / 60, 1000 / 60 - (currTime - lastTime))
        lastTime = currTime + delay
        return setTimeout(callback, delay)
    }

export const cancelAnimationFrame = ROOT.cancelAnimationFrame ||
    ROOT.webkitCancelAnimationFrame ||
    ROOT.webkitCancelRequestAnimationFrame ||
    ROOT.mozCancelRequestAnimationFrame ||
    ROOT.msCancelRequestAnimationFrame ||
    clearTimeout

export const getTransform = () => {
    const divStyle = document.createElement('div').style
    let styleTransform = null

    each(['transform', 'WebkitTransform', 'mozTransform', 'msTransform'], ts => {
        if (ts in divStyle) {
            styleTransform = ts
        }
    })

    return styleTransform
}

export const getStyle = (elem, name) => {
    return elem.currentStyle ? elem.currentStyle[name] : document.defaultView.getComputedStyle(elem, false)[name]
}
