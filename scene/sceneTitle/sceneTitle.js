class SceneTitle extends Scene {
    constructor(game) {
        super(game)

        this.setUp()
        this.setInput()
    }

    setUp() {
        this.skys = Skys.new(this.game)
        this.skys.update = () => {}
        this.addElement(this.skys)

        this.lands = Lands.new(this.game)
        this.lands.update = () => {}
        this.addElement(this.lands)

        this.text = Label.new(this.game, 'press Enter to start game', 80, 220)
        this.addElement(this.text)
    }

    setInput() {
        this.game.registerAction('Enter', () => {
            const scene = SceneMain.new(this.game)
            this.game.replaceScene(scene)
        })
    }

    draw() {
        super.draw()
    }
}
