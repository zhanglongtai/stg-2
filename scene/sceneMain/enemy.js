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
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)

        this.speed = 5
        this.cooldown = 10

        this.bullets = BulletsFromEnemy.new(this.game)
        this.scene.addElement(this.bullets)
    }

    fire() {
        if (this.cooldown === 0) {
            log('cooldown', this.cooldown)
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
        log('update', this.cooldown)
        if (this.cooldown > 0) {
            this.cooldown -= 1
        }

        this.bullets.update()

        this.y += this.speed
        this.fire()

        if (this.y > 600) {
            this.setUp()
        }
    }

    debug() {
        this.speed = config.enemy_speed.value
    }
}
