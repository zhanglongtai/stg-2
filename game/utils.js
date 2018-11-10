const log = function() {
    // const el = document.querySelector('#id-log')
    // el.value = el.value + '\n' + input
    console.log.apply(console, arguments)
}

const imgFromPath = function(path) {
    const img = new Image()
    img.src = path

    return img
}

const rectIntersects = function(a, b) {
    if (b.y > a.y && b.y < a.height + a.y) {
        if (b.x > a.x && b.x < a.x + a.width) {
            return true
        }
    }

    return false
}

const randomBetween = function(start, end) {
    const n = Math.random()*(end - start + 1)
    return Math.floor(n + start)
}
