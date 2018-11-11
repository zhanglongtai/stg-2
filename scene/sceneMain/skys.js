class Skys {
    constructor(game) {
        this.game = game

        this.setUp()
    }

    static new(game) {
        return new this(game)
    }

    setUp() {
        this.skyList = []
        this.skyNum = 2
        for (let i = 0; i < this.skyNum; i++) {
            const s = GameImage.new(this.game, 'sky')
            s.width = s.texture.height
            this.interval = s.height
            s.x = 0
            s.y = -(i * s.height)
            this.skyList.push(s)
        }
    }

    update() {
        // sky downward
        for (const s of this.skyList) {
            s.y += 5
            if(s.y > 600) {
                s.y -= this.interval * this.skyNum
            }
        }
    }

    draw() {
        for (const s of this.skyList) {
            const context = this.game.context
            context.drawImage(s.texture, s.x, s.y)
        }
    }
}
