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

  drawCourtBoundaries() {
    const horizontalLine1 = new Phaser.Geom.Line(0, this.courtTop, this.gameWidth, this.courtTop)
    const horizontalLine2 = new Phaser.Geom.Line(0, this.gameHeight - 1, this.gameWidth, this.gameHeight - 1)
    const verticalLine = new Phaser.Geom.Line(this.middleX, this.courtTop + 1, this.middleX, this.gameHeight - 2)

    const lineGraphics = this.add.graphics({ lineStyle: { color: 0xFFFFFF } })
    lineGraphics.strokeLineShape(horizontalLine1)
    lineGraphics.strokeLineShape(horizontalLine2)
    lineGraphics.strokeLineShape(verticalLine)
  }

  createScoreDisplay(dx, text) {
    return this.add.text(this.middleX + dx, this.middleY + (this.courtTop / 2), text, {
      ...this.textStyles2,
      fontSize: '40px',
    }).setOrigin(0.5, 0.5)
  }

  createFoodScoreDisplay(dx, text, color) {
    return this.add.text(this.middleX + dx, this.courtTop / 2, text, {
      fontFamily: "'Press Start 2P'",
      fontSize: '20px',
    })
      .setOrigin(0.5, 0.5)
      .setTint(color)
  }

  initScores() {
    this.score1Display = this.createScoreDisplay(-35, this.score1)
    this.score2Display = this.createScoreDisplay(40, this.score2)

    this.foodScore2Display = this.createFoodScoreDisplay(0.85 * this.middleX, this.food2.total, this.color2)
    this.foodScore1Display = this.createFoodScoreDisplay(-0.85 * this.middleX, this.food1.total, this.color1)
  }

  updateScore1() {
    this.score1 += 1

    if (!this.isScore1DoubleDigits && this.score1.toString().length > 1) {
      this.isScore1DoubleDigits = true
      this.score1Display.x -= 15
    }

    if (!this.isScore1TripleDigits && this.score1.toString().length > 2) {
      this.isScore1TripleDigits = true
      this.score1Display.x -= 20
    }

    this.score1Display.setText(this.score1)
  }

  updateScore2() {
    this.score2 += 1

    if (!this.isScore2DoubleDigits && this.score2.toString().length > 1) {
      this.isScore2DoubleDigits = true
      this.score2Display.x += 15
    }

    if (!this.isScore2TripleDigits && this.score2.toString().length > 2) {
      this.isScore2TripleDigits = true
      this.score2Display.x += 20
    }

    this.score2Display.setText(this.score2)
  }

  updateFoodScore1() {
    this.foodScore1Display.setText(this.food1.total)
  }

  updateFoodScore2() {
    this.foodScore2Display.setText(this.food2.total)
  }

  resetBall(directionInteger) {
    this.ball.setVelocity(0)
    this.ball.x = this.middleX
    this.ball.y = this.middleY + (this.courtTop / 2)

    setTimeout(() => this.ball.setVelocity(
      directionInteger * this.ballStartingVelocity,
      this.ballStartingVelocity
    ), 1000)
  }

  handleKeyPress() {
    if (this.keyJustDown(this.keyM)) {
      this.toggleAudioMute(this.audioText)
    }

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

  addAudioText() {
    return this.add.text(
      this.middleX * 1.5,
      this.courtTop / 2,
      this.sound.mute ? this.audioOffText : this.audioOnText,
      {
        ...this.textStyles2,
        fontSize: '12px',
      },
    )
      .setOrigin(0.5, 0.5)
  }

  changeMusicTheme() {
    const complexTheme = this.sound.add('complexTheme', { loop: true })

    const simpleTheme = this.sound.sounds.find(({ key }) => key === 'simpleTheme')
    const currentSeek = simpleTheme.seek

    // crossfade the two sounds using tweens
    const crossfadeDurationInMs = 1000

    this.tweens.add({
      targets: simpleTheme,
      volume: {
        getStart: () => 1,
        getEnd: () => 0,
      },
      duration: crossfadeDurationInMs,
      ease: 'Linear',
      onComplete: () => simpleTheme.stop(),
    })

    this.tweens.add({
      targets: complexTheme,
      onStart: () => complexTheme.play({ seek: currentSeek }),
      volume: {
        getStart: () => 0,
        getEnd: () => 1,
      },
      duration: crossfadeDurationInMs,
      ease: 'Linear',
    })
  }

  preload() {
    this.score1 = 0
    this.score2 = 0

    this.isScore1DoubleDigits = false
    this.isScore2DoubleDigits = false
    this.isScore1TripleDigits = false
    this.isScore2TripleDigits = false
    // Oh man I hope no one is playing into quadruple digits...

    this.ballStartingVelocity = 150
    this.ballVelocityMultiplier = 1.1
  }

  hitBall(snake, ball, snakeBody) {
    // The ball velocity has been updated by the hit at this point.
    const { x: vx, y: vy } = ball.body.velocity

    if (vx === 0 && vy === 0) {
      // don't do anything if the ball is at its starting position
      return
    }

    const upperVelocityBound = velocity => velocity * this.ballVelocityMultiplier

    ball.setVelocity(
      Phaser.Math.Between(vx, upperVelocityBound(vx)),
      Phaser.Math.Between(vy, upperVelocityBound(vy)),
    )

    snakeBody.setTint(0xFFFFFF)
    setTimeout(() => snakeBody.setTint(snake.color), 100)
  }

  create(data) {
    this.changeMusicTheme()

    this.physics.world.setBounds(0, this.courtTop, this.gameWidth, this.gameHeight - this.courtTop)
    this.physics.world.setBoundsCollision(false, false, true, true)
    this.color1 = this.hexStringToColor(data.color1)
    this.color2 = this.hexStringToColor(data.color2)
    this.addSmallGameTitle()
    this.drawCourtBoundaries()
    this.audioText = this.addAudioText()

    this.cursors = this.createCursorKeys()
    this.keyW = this.addKey('W')
    this.keyA = this.addKey('A')
    this.keyS = this.addKey('S')
    this.keyD = this.addKey('D')
    this.keyM = this.addKey('M')

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

    this.initScores()

    this.ball = this.physics.add.image(400, 200, 'body')
      .setCollideWorldBounds(true)
      .setScale(1.6)
      .setBounce(1)
      .setVelocity(this.ballStartingVelocity)

    this.physics.add.collider(this.ball, this.snake1.body, this.hitBall.bind(this, this.snake1), null, this)
    this.physics.add.collider(this.ball, this.snake2.body, this.hitBall.bind(this, this.snake2), null, this)
  }

  update(time) {
    this.handleKeyPress()

    if (this.snake1.update(time)) {
      this.snake1.handleOverlapSelf()

      if (this.snake1.handleOverlapFood(this.food1)) {
        this.food1.eat()
        this.updateFoodScore1()
      }
    }

    if (this.snake2.update(time)) {
      this.snake2.handleOverlapSelf()

      if (this.snake2.handleOverlapFood(this.food2)) {
        this.food2.eat()
        this.updateFoodScore2()
      }
    }

    if (this.ball.x < 0) {
      this.updateScore2()
      this.resetBall(1)
    }

    if (this.ball.x > this.gameWidth) {
      this.updateScore1()
      this.resetBall(-1)
    }
  }
}
