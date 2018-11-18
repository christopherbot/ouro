import Snake from '../snake'

export default class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }

  get gameWidth() {
    return this.sys.game.config.width
  }

  get gameHeight() {
    return this.sys.game.config.height
  }

  get middleX() {
    return this.gameWidth / 2
  }

  get middleY() {
    return this.gameHeight / 2
  }

  handleKeyPress() {
    if (this.cursors.right.isDown) {
      this.snake.goRight()
    } else if (this.cursors.left.isDown) {
      this.snake.goLeft()
    } else if (this.cursors.up.isDown) {
      this.snake.goUp()
    } else if (this.cursors.down.isDown) {
      this.snake.goDown()
    }
  }

  preload() {
    this.load.image('body', 'assets/body.png')
  }

  create(data) {
    this.color1 = data.color1
    this.color2 = data.color2
    this.add.text(this.middleX, 20, 'Game').setOrigin(0.5, 0)

    this.cursors = this.input.keyboard.createCursorKeys()

    this.snake = new Snake(this, 10, 20, { color: this.color2 })
  }

  update(time) {
    this.handleKeyPress()
    this.snake.update(time)
  }
}
