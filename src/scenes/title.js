export class Title extends Phaser.Scene {
  get gameWidth() {
    return this.sys.game.config.width
  }

  get gameHeight() {
    return this.sys.game.config.height
  }

  preload() {
    this.load.spritesheet('snake', 'assets/snake.png', { frameWidth: 32, frameHeight: 32 })
  }

  create() {
    this.snake = this.add.sprite(this.gameWidth / 2, this.gameHeight / 2, 'snake')

    this.anims.create({
      key: 'snakeDance',
      frames: this.anims.generateFrameNames('snake', { start: 1, end: 4 }),
      frameRate: 5,
      repeat: -1,
    })

    this.snake.anims.play('snakeDance')
  }
}
