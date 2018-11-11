export class Title extends Phaser.Scene {
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

  get gameTitle() {
    return 'Ouro'
  }

  addGameTitle() {
    this.add.text(
      this.middleX,
      this.middleY + 100,
      this.gameTitle,
      { fill: '#0F0' }
    ).setOrigin(0.5, 1)
  }

  addSnake() {
    this.snake = this.add.sprite(this.middleX, this.middleY, 'snake')
    this.isSnakeMovingUp = true

    this.anims.create({
      key: 'snakeDance',
      frames: this.anims.generateFrameNames('snake', { start: 1, end: 4 }),
      frameRate: 5,
      repeat: -1,
    })

    this.snake.anims.play('snakeDance')
  }

  moveSnake(delta) {
    this.snake.x -= delta / 8

    if (this.snake.x < -16) {
      this.snake.x = this.gameWidth + 16
    }

    if (this.isSnakeMovingUp) {
      this.snake.y -= delta / 16

      if (this.snake.y < this.middleY - 30) {
        this.isSnakeMovingUp = false
      }
    } else {
      this.snake.y += delta / 16

      if (this.snake.y > this.middleY + 30) {
        this.isSnakeMovingUp = true
      }
    }
  }

  preload() {
    this.load.spritesheet('snake', 'assets/snake.png', { frameWidth: 32, frameHeight: 32 })
  }

  create() {
    this.addGameTitle()
    this.addSnake()
  }

  update(time, delta) {
    this.moveSnake(delta)
  }
}
