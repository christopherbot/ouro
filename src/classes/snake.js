const UP = 'UP'
const DOWN = 'DOWN'
const LEFT = 'LEFT'
const RIGHT = 'RIGHT'

export default class Snake {
  constructor(scene, x, y, options = {}) {
    // TODO move into static class property
    const defaultOptions = {
      bounds: {},
      color: 0xFFFFFF,
      size: 16,
    }

    // TODO move into static proprty
    // width assumed to be the same as its height:
    const assetSize = scene.textures.get('body').getSourceImage().width

    options = {
      ...defaultOptions,
      ...options,
    }

    this.scene = scene

    this.bounds = options.bounds
    this.color = options.color
    this.size = options.size

    this.scale = this.size / assetSize

    this.headPosition = new Phaser.Geom.Point(x, y)
    this.tail = new Phaser.Geom.Point(x, y)

    this.body = scene.physics.add.group({ immovable: true })

    this.head = this.body
      .create(x * this.size, y * this.size, 'body')
      .setScale(this.scale)
      .setOrigin(0)
      .setTint(this.color)


    this.movesPerSecond = 12

    this.nextUpdateTime = 0

    this.direction = DOWN
    this.nextDirection = DOWN
  }

  goLeft() {
    if (this.direction === UP || this.direction === DOWN) {
      this.nextDirection = LEFT
    }
  }

  goRight() {
    if (this.direction === UP || this.direction === DOWN) {
      this.nextDirection = RIGHT
    }
  }

  goUp() {
    if (this.direction === LEFT || this.direction === RIGHT) {
      this.nextDirection = UP
    }
  }

  goDown() {
    if (this.direction === LEFT || this.direction === RIGHT) {
      this.nextDirection = DOWN
    }
  }

  wrapVerticalPosition(y) {
    return Phaser.Math.Wrap(y, this.bounds.top / this.size, this.bounds.bottom / this.size)
  }

  wrapHorizontalPosition(x) {
    return Phaser.Math.Wrap(x, this.bounds.left / this.size, this.bounds.right / this.size)
  }

  move(time) {
    switch(this.nextDirection) {
      case UP:
        this.headPosition.y = this.wrapVerticalPosition(this.headPosition.y - 1)
        break
      case DOWN:
        this.headPosition.y = this.wrapVerticalPosition(this.headPosition.y + 1)
        break
      case LEFT:
        this.headPosition.x = this.wrapHorizontalPosition(this.headPosition.x - 1)
        break
      case RIGHT:
        this.headPosition.x = this.wrapHorizontalPosition(this.headPosition.x + 1)
        break
    }

    this.direction = this.nextDirection

    Phaser.Actions.ShiftPosition(
      this.body.getChildren(),
      this.headPosition.x * this.size,
      this.headPosition.y * this.size,
      1,
      this.tail,
    )

    this.nextUpdateTime = time + (1000 / this.movesPerSecond)

    return true
  }

  overlapsWith(item) {
    if (!item) {
      return false
    }

    return this.head.x === item.x && this.head.y === item.y
  }

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

    return strandedChildren.length
  }

  handleOverlapFood(food) {
    if (this.overlapsWith(food)) {
      return this.grow()
    }
  }

  grow(amount = 1) {
    [...Array(amount)].forEach(() => {
      this.body
        .create(this.tail.x, this.tail.y, 'body')
        .setScale(this.scale)
        .setOrigin(0)
        .setTint(this.color)
    })

    return true
  }

  update(time) {
    if (time >= this.nextUpdateTime) {
      return this.move(time)
    }
  }
}
