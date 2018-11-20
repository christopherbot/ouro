import BaseScene from './baseScene'

export default class Title extends BaseScene {
  constructor(props) {
    super('title')
  }

  get menuPrompt() {
    return 'Press [Enter]'
  }

  addGameTitle() {
    this.add.text(
      this.middleX,
      this.middleY + 100,
      this.gameTitle,
      { fill: '#0F0' }
    ).setOrigin(0.5, 1)
  }

  addMenuPrompt() {
    this.add.text(
      this.middleX,
      this.middleY + 130,
      this.menuPrompt,
      { fill: '#0F0' }
    ).setOrigin(0.5, 1)
  }

  addSnakeAnimation() {
    this.snakeAnimation = this.add.sprite(this.middleX, this.middleY, 'snake')
    this.isSnakeMovingUp = true

    this.anims.create({
      key: 'snakeDance',
      frames: this.anims.generateFrameNames('snake', { start: 1, end: 4 }),
      frameRate: 5,
      repeat: -1,
    })

    this.snakeAnimation.anims.play('snakeDance')
  }

  moveSnake(delta) {
    this.snakeAnimation.x -= delta / 8

    if (this.snakeAnimation.x < -16) {
      this.snakeAnimation.x = this.gameWidth + 16
    }

    if (this.isSnakeMovingUp) {
      this.snakeAnimation.y -= delta / 16

      if (this.snakeAnimation.y < this.middleY - 30) {
        this.isSnakeMovingUp = false
      }
    } else {
      this.snakeAnimation.y += delta / 16

      if (this.snakeAnimation.y > this.middleY + 30) {
        this.isSnakeMovingUp = true
      }
    }
  }

  handleKeyPress() {
    if (this.keyJustDown(this.enterKey)) {
      this.scene.start('menu')
    }
  }

  preload() {
    this.load.spritesheet('snake', 'assets/snake.png', { frameWidth: 32, frameHeight: 32 })
  }

  create() {
    this.enterKey = this.addKey('ENTER')

    this.addGameTitle()
    this.addMenuPrompt()
    this.addSnakeAnimation()
  }

  update(time, delta) {
    this.moveSnake(delta)
    this.handleKeyPress()
  }
}
