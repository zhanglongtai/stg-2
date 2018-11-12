class Explosions {
    constructor(game) {
        this.game = game

        this.setUp()
    }

    static new(game) {
        return new this(game)
    }

    setUp() {
        this.explosionList = []
    }

    draw() {
        for (const b of this.explosionList) {
            b.draw()
        }
    }

    update() {
        let newList = this.explosionList.slice()

        for (let i = 0; i < this.explosionList.length; i++) {
            const e = this.explosionList[i]

            if (e.alive) {
                e.update()
            } else {
                const sliceFront = newList.slice(0, i)
                const sliceBack = newList.slice(i + 1)
                newList = sliceFront.concat(sliceBack)
            }
        }
        
        this.explosionList = newList
    }

    addExplosion(explosion) {
        this.explosionList.push(explosion)
    }
}
