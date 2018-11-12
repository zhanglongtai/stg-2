class Explosion extends Animation {
    constructor(game, x, y) {
        super(game)

        this.setUp(x, y)
    }

    static new(game, x, y) {
        return new this(game, x, y)
    }

    setUp(x, y) {
        super.setUp()

        this.alive = true

        for (let i = 1; i < 6; i++) {
            const name = `explosion${i}`
            const texture = this.game.textureByName(name)
            this.animations['idle'].push(texture)
        }

        this.x = x
        this.y = y
        this.texture = this.frames()[0]
    }

    update() {
        this.frameCount -= 1
        if (this.frameCount === 0) {
            this.frameCount = 3

            const index = this.frameIndex % this.frames().length
            this.texture = this.frames()[index]

            this.frameIndex += 1
            if (this.frameIndex > this.frames().length) {
                this.destroy()
            }
        }
    }

    destroy() {
        this.alive = false
    }

    draw() {
        this.game.drawImage(this)
    }

    debug() {}
}
