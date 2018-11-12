const enableDebugMode = function(game, enabled) {
    if (!enabled) {
        return
    }

    window.addEventListener('keydown', (event) => {
        const k = event.key
        if (k === 'p') {
            window.paused = !window.paused
        } else if ('123456789'.includes(k)) {
            // const scene = SceneMain.new(game, localLevels, Number(k))
            // game.replaceScene(scene)
        }
    })

    document.querySelector('#id-fps-input').addEventListener('input', (event) => {
        const value = event.target.value
        window.fps = Number(value)
    })
}

const __main = function() {
    const imgPath = {
        sky: 'img/space.svg',
        playerBullet: 'img/player-bullet-small.png',
        enemyBullet: 'img/enemy-bullet-small.png',
        player: 'img/player-small.png',
        enemy0: 'img/enemy0-small.png',
        enemy1: 'img/enemy1-small.png',
        enemy2: 'img/enemy2-small.png',
        enemy3: 'img/enemy3-small.png',
        enemy4: 'img/enemy4-small.png',
        explosion1: 'img/explosion1-big.png',
        explosion2: 'img/explosion2-big.png',
        explosion3: 'img/explosion3-big.png',
        explosion4: 'img/explosion4-big.png',
        explosion5: 'img/explosion5-big.png',
    }

    const game = Game.singleInstance(30, imgPath, (gameInstance) => {
        // const scene = SceneMain.new(gameInstance)
        const scene = SceneTitle.new(gameInstance)
        game.runWithScene(scene)
    })

    enableDebugMode(game, true)
    window.paused = false
}

__main()
