import BaseScene from './baseScene'
import Snake from '../classes/snake'
import Food from '../classes/food'

export default class Game extends BaseScene {
  constructor() {
    super('game')
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
    this.snake2 = new Snake(this, 30, 10, { color: this.color2 })

    this.food1 = new Food(this, 10, 20, { color: this.color1 })
    this.food2 = new Food(this, 30, 20, { color: this.color2 })
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
