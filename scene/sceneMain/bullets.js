class Bullets {
    constructor(game) {
        this.game = game

        this.setUp()
    }

    static new(game) {
        return new this(game)
    }

    setUp() {
        this.bulletList = []
    }

    draw() {
        for (const b of this.bulletList) {
            b.draw()
        }
    }

    update() {
        let newList = this.bulletList.slice()

        for (let i = 0; i < this.bulletList.length; i++) {
            const b = this.bulletList[i]

            if (b.alive) {
                b.update()
            } else {
                const sliceFront = newList.slice(0, i)
                const sliceBack = newList.slice(i + 1)
                newList = sliceFront.concat(sliceBack)
            }
        }
        
        this.bulletList = newList
    }

    addBullet(bullet) {
        this.bulletList.push(bullet)
    }
}

class BulletsFromPlayer extends Bullets {
    constructor(game) {
        super(game)
    }
}

class BulletsFromEnemy extends Bullets {
    constructor(game) {
        super(game)
    }

    update() {
        super.update()
    }
}
