class Enemy extends GameImage {
    constructor(game, scene) {
        const enemyIndex = randomBetween(0, 4)
        const enemyType = `enemy${enemyIndex}`
        super(game, enemyType)

        this.scene = scene

        this.setUp()
    }

    static new(game, scene) {
        const i = new this(game, scene)
        return i
    }

    setUp() {
        this.alive = true
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)

        this.speed = 5
        this.cooldown = 60

        this.bullets = BulletsFromEnemy.new(this.game)
        this.scene.addElement(this.bullets)
    }

    destroy() {
        this.alive = false
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 9

            if (this.y > 0) {
                const r = Math.random()
                
                if (r < 0.5) {
                    const x = this.x + this.width / 2
                    const y = this.y
                    const b = BulletFromEnemy.new(this.game)
                    b.x = x - b.width / 2
                    b.y = y
                
                    this.bullets.addBullet(b)
                }
            }
        }
    }

    update() {
        if (this.cooldown > 0) {
            this.cooldown -= 1
        }

        this.bullets.update()

        this.y += this.speed
        this.fire()

        if (this.y > 600 || !this.alive) {
            this.setUp()
        }
    }

    debug() {
        this.speed = config.enemy_speed.value
    }

    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }

    collide(spaceship) {
        // return rectIntersects(o, ball) || rectIntersects(ball, o)
        const a = this
        const b = spaceship
        if (this.aInb(a.x, b.x, b.x + b.width) || this.aInb(b.x, a.x, a.x + a.width)) {
            if (this.aInb(a.y, b.y, b.y + b.height) || this.aInb(b.y, a.y, a.y + a.height)) {
                return true
            }
        }
        return false
    }
}
