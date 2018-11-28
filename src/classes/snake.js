const UP = 'UP'
const DOWN = 'DOWN'
const LEFT = 'LEFT'
const RIGHT = 'RIGHT'

export default new Phaser.Class({
  initialize(scene, x, y, options) {
    this.scene = scene

    this.color = options.color
    this.size = options.size || 16
    this.scale = this.size / 10 // the `body` asset is 10x10

    this.headPosition = new Phaser.Geom.Point(x, y)
    this.tail = new Phaser.Geom.Point(x, y)

    this.body = scene.add.group()

    this.head = this.body.create(x * this.size, y * this.size, 'body')
    this.head
      .setScale(this.scale)
      .setOrigin(0)
      .setTint(this.color)


    this.movesPerSecond = 12

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
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, this.scene.gameHeight / this.size)
        break
      case DOWN:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, this.scene.gameHeight / this.size)
        break
      case LEFT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, this.scene.gameWidth / this.size)
        break
      case RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, this.scene.gameWidth / this.size)
        break
    }

    Phaser.Actions.ShiftPosition(
      this.body.getChildren(),
      this.headPosition.x * this.size,
      this.headPosition.y * this.size,
      1,
      this.tail,
    )

    this.nextUpdateTime = time + (1000 / this.movesPerSecond)

    return true
  },

  overlapsWith(item) {
    if (!item) {
      return false
    }

    return this.head.x === item.x && this.head.y === item.y
  },

  handleOverlapSelf() {
    const strandedChildren = []

    let removeTheRest = false
    this.body.children.each((child, index) => {
      if (index === 0) {
        return
      }

      if (removeTheRest) {
        this.body.remove(child)
        strandedChildren.push(child)
      } else if (this.overlapsWith(child)) {
        removeTheRest = true
        this.body.remove(child)
        strandedChildren.push(child)
      }
    })

    strandedChildren.forEach((child, index) => {
      const fadeDuration = 300
      const delay = index * 20

      this.scene.tweens.add({
        targets: child,
        alpha: 0,
        ease: 'Sine.easeInOut',
        duration: fadeDuration,
        delay,
      })

      this.scene.time.addEvent({
        delay: fadeDuration + delay,
        callback: child.destroy,
        loop: false,
      })
    })
  },

  handleInteractions(food) {
    if (this.overlapsWith(food)) {
      this.grow()
      food.eat()
    }

    this.handleOverlapSelf()
  },

  grow(amount = 1) {
    [...Array(amount)].forEach(() => {
      this.body
        .create(this.tail.x, this.tail.y, 'body')
        .setScale(this.scale)
        .setOrigin(0)
        .setTint(this.color)
    })
  },

  update(time) {
    if (time >= this.nextUpdateTime) {
      return this.move(time)
    }
  },
})
