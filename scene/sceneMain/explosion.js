class Explosion extends Animation {
    constructor(game) {
        super(game)

        this.setUp()
    }

    setUp() {
        this.animations = {
            idle: {sx: 0, sy: 0, sWidth: 0, sHeight: 0},
            moveLeft: {sx: 0, sy: 0, sWidth: 0, sHeight: 0},
            moveRight: {sx: 0, sy: 0, sWidth: 0, sHeight: 0},
        }

        const name = 'explosion'
        this.texture = this.game.textureByName(name)

        this.x = 100
        this.y = 300
    }

    update() {
        this.frameCount -= 1
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }

    draw() {
        const context = this.game.context

        context.save()

        const w = this.width / 2
        const h = this.height / 2
        
        context.translate(this.x + w, this.y + h)

        if (this.flipX) {
            context.scale(-1, 1)
        }
        
        context.rotate(this.rotation * Math.PI / 180)

        context.translate(-w, -h)

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }

    debug() {
        this.speed = config.bird_speed.value
    }
}
