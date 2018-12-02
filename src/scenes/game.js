import BaseScene from './baseScene'
import Snake from '../classes/snake'
import Food from '../classes/food'

export default class Game extends BaseScene {
  constructor() {
    super('game')
  }

  get courtTop() {
    return 64
  }

  get player1Bounds() {
    return {
      top: this.courtTop,
      right: this.middleX,
      bottom: this.gameHeight,
      left: 0,
    }
  }

  get player2Bounds() {
    return {
      top: this.courtTop,
      right: this.gameWidth,
      bottom: this.gameHeight,
      left: this.middleX,
    }
  }

  addCourtBoundaries() {
    const horizontalLine1 = new Phaser.Geom.Line(0, this.courtTop, this.gameWidth, this.courtTop)
    const horizontalLine2 = new Phaser.Geom.Line(0, this.gameHeight - 1, this.gameWidth, this.gameHeight - 1)
    const verticalLine = new Phaser.Geom.Line(this.middleX, this.courtTop + 1, this.middleX, this.gameHeight - 2)

    const lineGraphics = this.add.graphics({ lineStyle: { color: 0xFFFFFF } })
    lineGraphics.strokeLineShape(horizontalLine1)
    lineGraphics.strokeLineShape(horizontalLine2)
    lineGraphics.strokeLineShape(verticalLine)
  }

  handleKeyPress() {
    if (this.keyJustDown(this.keyD)) {
      this.snake1.goRight()
    } else if (this.keyJustDown(this.keyA)) {
      this.snake1.goLeft()
    } else if (this.keyJustDown(this.keyW)) {
      this.snake1.goUp()
    } else if (this.keyJustDown(this.keyS)) {
      this.snake1.goDown()
    }

    if (this.keyJustDown(this.cursors.right)) {
      this.snake2.goRight()
    } else if (this.keyJustDown(this.cursors.left)) {
      this.snake2.goLeft()
    } else if (this.keyJustDown(this.cursors.up)) {
      this.snake2.goUp()
    } else if (this.keyJustDown(this.cursors.down)) {
      this.snake2.goDown()
    }
  }

  preload() {
    this.load.image('body', 'assets/body.png')
  }

  hitBall(snake, ball, snakeBody) {
    snakeBody.setTint(0xFFFFFF)
    setTimeout(() => snakeBody.setTint(snake.color), 100)
  }

  create(data) {
    this.physics.world.setBounds(0, this.courtTop, this.gameWidth, this.gameHeight - this.courtTop)
    this.physics.world.setBoundsCollision(true, true, true, true)
    this.color1 = this.hexStringToColor(data.color1)
    this.color2 = this.hexStringToColor(data.color2)
    this.addSmallGameTitle()
    this.addCourtBoundaries()

    this.cursors = this.createCursorKeys()
    this.keyW = this.addKey('W')
    this.keyA = this.addKey('A')
    this.keyS = this.addKey('S')
    this.keyD = this.addKey('D')

    this.snake1 = new Snake(this, 10, 10, {
      color: this.color1,
      bounds: this.player1Bounds,
    })

    this.snake2 = new Snake(this, 30, 10, {
      color: this.color2,
      bounds: this.player2Bounds,
    })

    this.food1 = new Food(this, 10, 20, {
      color: this.color1,
      bounds: this.player1Bounds,
    })

    this.food2 = new Food(this, 30, 20, {
      color: this.color2,
      bounds: this.player2Bounds,
    })

    this.ball = this.physics.add.image(400, 200, 'body')
      .setCollideWorldBounds(true)
      .setScale(1.6)
      .setBounce(1)
      .setVelocity(150, 150)

    this.physics.add.collider(this.ball, this.snake1.body, this.hitBall.bind(this, this.snake1), null, this)
    this.physics.add.collider(this.ball, this.snake2.body, this.hitBall.bind(this, this.snake2), null, this)
  }

  update(time) {
    this.handleKeyPress()
    if (this.snake1.update(time)) {
      this.snake1.handleInteractions(this.food1)
    }

    if (this.snake2.update(time)) {
      this.snake2.handleInteractions(this.food2)
    }
  }
}
