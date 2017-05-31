import { requestAnimationFrame, cancelAnimationFrame, getTransform } from './requestAnimationFrame'

const styleTransform = getTransform()

export default function (elem, target, callback) {
    const duration = 600
    const easein = (t, b, c, d) => c * (t /= d) * t + b

    let stime = +new Date()

    const ani = () => {
        const offset = Math.min(duration, +new Date() - stime)
        const s = easein(offset, 0, 1, duration)
        const currentX = elem.offsetLeft
        const resX = (target - currentX) * s + currentX
        elem.style[styleTransform] = `translate(` + resX.toFixed(2) + `px, 0)`

        if (offset === duration) {
            cancelAnimationFrame(this.timer)
            callback && callback()
        } else {
            this.timer = requestAnimationFrame(ani)
        }
    }
}
