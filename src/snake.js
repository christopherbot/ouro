const UP = 0
const DOWN = 1
const LEFT = 2
const RIGHT = 3

export default new Phaser.Class({
  initialize(scene, x, y, options) {
    this.scene = scene
    this.color = options.color

    this.headPosition = new Phaser.Geom.Point(x, y)
    this.tail = new Phaser.Geom.Point(x, y)

    this.body = scene.add.group()

    this.head = this.body.create(x * 10, y * 10, 'body')
    this.head
      .setOrigin(0)
      .setTint(this.color)


    this.movesPerSecond = 20

    this.nextUpdateTime = 0

    this.direction = DOWN
  },

  goLeft() {
    if (this.direction === UP || this.direction === DOWN) {
      this.direction = LEFT
    }
  },

  goRight() {
    if (this.direction === UP || this.direction === DOWN) {
      this.direction = RIGHT
    }
  },

  goUp() {
    if (this.direction === LEFT || this.direction === RIGHT) {
      this.direction = UP
    }
  },

  goDown() {
    if (this.direction === LEFT || this.direction === RIGHT) {
      this.direction = DOWN
    }
  },

  move(time) {
    switch(this.direction) {
      case UP:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, this.scene.gameHeight / 10)
        break
      case DOWN:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, this.scene.gameHeight / 10)
        break
      case LEFT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, this.scene.gameWidth / 10)
        break
      case RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, this.scene.gameWidth / 10)
        break
    }

    Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 10, this.headPosition.y * 10, 1, this.tail)

    this.nextUpdateTime = time + (1000 / this.movesPerSecond)

    return true
  },

  grow(amount = 1) {
    const newTail = this.body.create(this.tail.x, this.tail.y, 'body')
    newTail
      .setOrigin(0)
      .setTint(this.color)
  },

  eatFood(food) {
    if (this.head.x === food.x && this.head.y === food.y) {
      this.grow()
      food.eat()

      return true
    }

    return false
  },

  update(time) {
    if (time >= this.nextUpdateTime) {
      return this.move(time)
    }
  },
})
