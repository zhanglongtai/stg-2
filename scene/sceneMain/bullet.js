class Bullet extends GameImage {
    constructor(game, bulletName) {
        super(game, bulletName)

        this.setUp()
    }

    setUp() {
        this.speed = 10
        this.alive = true
    }

    destroy() {
        this.alive = false
    }

    debug() {}
}

class BulletFromPlayer extends Bullet {
    constructor(game) {
        super(game, 'playerBullet')
    }

    update() {
        this.y -= this.speed

        if (this.y < 0) {
            this.destroy()
        }
    }

    debug() {
        this.speed = config.player_bullet_speed.value
    }
}

class BulletFromEnemy extends Bullet {
    constructor(game) {
        super(game, 'enemyBullet')

        // this.setUp()
    }

    setUp() {
        this.speed = 10
    }

    update() {
        this.y += this.speed

        if (this.y > 600) {
            this.destroy()
        }
    }

    debug() {
        this.speed = config.enemy_bullet_speed.value
    }
}
