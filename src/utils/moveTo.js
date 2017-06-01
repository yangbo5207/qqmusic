import { requestAnimationFrame, cancelAnimationFrame, getTransform, getStyle } from './requestAnimationFrame'

const styleTransform = getTransform()

export default function (elem, target, callback) {
    const duration = 600
    const easein = (t, b, c, d) => c * (t /= d) * t + b

    let stime = +new Date()
    let timer = null

    const ani = () => {
        const offset = Math.min(duration, +new Date() - stime)
        const s = easein(offset, 0, 1, duration)
        const currentX = parseInt(getStyle(elem, 'transform').match(/-?[0-9.]+/g)[4])
        const resX = (target - currentX) * s + currentX
        elem.style[styleTransform] = `translate(` + resX.toFixed(2) + `px, 0)`

        if (offset !== duration) {
            timer = requestAnimationFrame(ani)
        } else {
            cancelAnimationFrame(timer)
            callback && callback()
        }
    }

    ani()
}
