import BaseScene from './baseScene'
import Snake from '../snake'
import Food from '../food'

export default class Game extends BaseScene {
  constructor() {
    super('game')
  }

  handleKeyPress() {
    if (this.keyD.isDown) {
      this.snake1.goRight()
    } else if (this.keyA.isDown) {
      this.snake1.goLeft()
    } else if (this.keyW.isDown) {
      this.snake1.goUp()
    } else if (this.keyS.isDown) {
      this.snake1.goDown()
    }

    if (this.cursors.right.isDown) {
      this.snake2.goRight()
    } else if (this.cursors.left.isDown) {
      this.snake2.goLeft()
    } else if (this.cursors.up.isDown) {
      this.snake2.goUp()
    } else if (this.cursors.down.isDown) {
      this.snake2.goDown()
    }
  }

  preload() {
    this.load.image('body', 'assets/body.png')
  }

  create(data) {
    this.color1 = this.hexStringToColor(data.color1)
    this.color2 = this.hexStringToColor(data.color2)
    this.add.text(this.middleX, 20, 'Game').setOrigin(0.5, 0)

    this.cursors = this.createCursorKeys()
    this.keyW = this.addKey('W')
    this.keyA = this.addKey('A')
    this.keyS = this.addKey('S')
    this.keyD = this.addKey('D')

    this.snake1 = new Snake(this, 10, 10, { color: this.color1 })
    this.snake2 = new Snake(this, 50, 10, { color: this.color2 })

    this.food1 = new Food(this, 10, 20, { color: this.color1 })
    this.food2 = new Food(this, 50, 20, { color: this.color2 })
  }

  update(time) {
    this.handleKeyPress()
    if (this.snake1.update(time)) {
      this.snake1.eatFood(this.food1)
    }

    if (this.snake2.update(time)) {
      this.snake2.eatFood(this.food2)
    }
  }
}
