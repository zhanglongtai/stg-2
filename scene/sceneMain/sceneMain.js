class SceneMain extends Scene {
    constructor(game) {
        super(game)

        this.setUp()
        this.setInputs()
    }

    setUp() {
        // this.sky = GameImage.new(this.game, 'sky')
        this.skys = Skys.new(this.game)
        this.addElement(this.skys)

        this.player = Player.new(this.game, this)
        this.player.x = 100
        this.player.y = 500
        this.addElement(this.player)

        this.enemyNum = 5
        this.enemies = []
        this.addEnemies()

        this.explosions = Explosions.new(this.game)
        this.addElement(this.explosions)
    }

    addEnemies() {
        // less than 3 enemy in a row
        const positionList = []

        const es = []
        for (let i = 0; i < this.enemyNum; i++) {
            const e = Enemy.new(this.game, this)
            es.push(e)
            this.addElement(e)
        }

        this.enemies = es
    }

    setInputs() {
        this.game.registerAction('ArrowLeft', (keyState) => {
            this.player.moveLeft()
        })
    
        this.game.registerAction('ArrowRight', (keyState) => {
            this.player.moveRight()
        })
    
        this.game.registerAction('ArrowUp', (keyState) => {
            this.player.moveUp()
        })

        this.game.registerAction('ArrowDown', (keyState) => {
            this.player.moveDown()
        })

        this.game.registerAction(' ', (keyState) => {
            this.player.fire()
        })
    }

    update() {
        super.update()

        for (const bullet of this.player.bullets.bulletList) {
            for (const enemy of this.enemies) {
                if (enemy.y > 0) {
                    if (bullet.collide(enemy)) {
                        const x = enemy.x
                        const y = enemy.y

                        bullet.destroy()
                        enemy.destroy()

                        const explosion = Explosion.new(this.game, x, y)
                        this.explosions.addExplosion(explosion)
                    }
                }
            }
        }

        for (const enemy of this.enemies) {
            for (const bullet of enemy.bullets.bulletList) {
                if (bullet.collide(this.player)) {
                    const x = this.player.x
                    const y = this.player.y

                    bullet.destroy()
                    this.player.destroy()

                    const explosion = Explosion.new(this.game, x, y)
                    this.explosions.addExplosion(explosion)
                }
            }
        }

        for (const enemy of this.enemies) {
            if (enemy.collide(this.player)) {
                const x = (this.player.x + enemy.x) / 2
                const y = (this.player.y + enemy.y) / 2

                enemy.destroy()
                this.player.destroy()

                const explosion = Explosion.new(this.game, x, y)
                this.explosions.addExplosion(explosion)
            }
        }
    }

    debug() {}
}
