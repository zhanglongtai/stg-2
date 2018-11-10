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
        for (let i = 0; i < 3; i++) {
            const s = GameImage.new(this.game, 'sky')
            s.width = s.texture.width
            this.interval = s.width
            s.x = i * s.width
            s.y = 0
            this.skyList.push(s)
        }
    }

    update() {
        // land forward
        for (const s of this.skyList) {
            s.x -= 5
            if(s.x < -300) {
                s.x += this.interval * 3
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
