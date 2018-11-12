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

    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }

    collide(spaceship) {
        // return rectIntersects(o, ball) || rectIntersects(ball, o)
        const a = this
        const b = spaceship
        if (aInb(a.x, b.x, b.x + b.width) || aInb(b.x, a.x, a.x + a.width)) {
            if (aInb(a.y, b.y, b.y + b.height) || aInb(b.y, a.y, a.y + a.height)) {
                return true
            }
        }
        return false
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
