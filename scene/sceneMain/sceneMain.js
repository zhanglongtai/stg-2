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

        this.enemyNum = 1
        this.enemies = []
        this.addEnemies()
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
    }

    debug() {}
}
