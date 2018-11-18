const UP = 0
const DOWN = 1
const LEFT = 2
const RIGHT = 3

const directionLoop = [RIGHT, DOWN, LEFT, UP]

export default new Phaser.Class({
  initialize(scene, x, y) {
    this.scene = scene
    this.headPosition = new Phaser.Geom.Point(x, y)

    this.body = scene.add.group()

    this.head = this.body.create(x * 10, y * 10, 'body')
    this.head
      .setOrigin(0)
      .setScale(0.044) // 10 / 255 (arbitrary num / dimension of body asset)
      .setTint(0xB4DA55) // TODO pass selected color

    this.movesPerSecond = 20

    this.nextUpdateTime = 0

    this.heading = RIGHT
    this.directionLoopIndex = 0

    const loopSnake = () => {
      this.directionLoopIndex = Phaser.Math.Wrap(this.directionLoopIndex + 1, 0, directionLoop.length)
      this.heading = directionLoop[this.directionLoopIndex]
    }

    scene.time.addEvent({ delay: 500, callback: loopSnake, loop: true })
  },

  update(time) {
    if (time >= this.nextUpdateTime) {
      return this.move(time)
    }
  },

  move(time) {
    switch(this.heading) {
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

    Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 10, this.headPosition.y * 10, 1)

    this.nextUpdateTime = time + (1000 / this.movesPerSecond)

    return true
  },
})
