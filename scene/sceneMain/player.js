class Player extends GameImage {
    constructor(game, scene) {
        super(game, 'player')
        this.scene = scene

        this.setUp()
    }

    static new(game, scene) {
        const i = new this(game, scene)
        return i
    }

    setUp() {
        this.alive = true
        this.speed = 5
        this.cooldown = 9

        this.bullets = BulletsFromPlayer.new(this.game)
        this.scene.addElement(this.bullets)
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

    destroy() {
        this.alive = false
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 9

            const x = this.x + this.width / 2
            const y = this.y
            const b = BulletFromPlayer.new(this.game)
            b.x = x - b.width / 2
            b.y = y

            this.bullets.addBullet(b)
        }
    }

    update() {
        if (this.cooldown > 0) {
            this.cooldown -= 1
        }

        this.bullets.update()

        if (!this.alive) {
            setTimeout(() => {
                const sceneEnd = SceneEnd.new(this.game)
                this.game.replaceScene(sceneEnd)
            }, window.fps*15)
        }
    }

    draw() {
        if (this.alive) {
            super.draw()
            this.bullets.draw()
        }
    }

    debug() {
        this.speed = config.player_speed.value
    }
}
