import BaseScene from './baseScene'

export default class Title extends BaseScene {
  constructor(props) {
    super('title')
  }

  get menuPromptText() {
    return 'hit [enter]'
  }

  get snakeSpriteHeight() {
    return this.gameHeight - 70
  }

  addGameTitle() {
    this.add.text(
      this.middleX,
      this.middleY - 50,
      this.gameTitle.toUpperCase(),
      {
        ...this.textStyles,
        fontSize: '175px',
        padding: 10,
      }
    )
      .setOrigin(0.5, 0.5)
      .setShadow(2, 2, '#FFF', 20, true, true)
  }

  addMenuPrompt() {
    this.menuPrompt = this.add.text(
      this.middleX,
      this.middleY + 75,
      this.menuPromptText,
      {
        ...this.textStyles,
        fontSize: '35px',
        padding: 10,
      },
    )
      .setOrigin(0.5, 0)
      .setShadow(1, 1, '#FFF', 1, true, true)

    this.graphics = this.add.graphics({ lineStyle: { color: 0x979797, width: 2 } })
    this.graphics.strokeRoundedRect(
      this.menuPrompt.x - this.menuPrompt.width * 1.5 / 2,
      this.menuPrompt.y,
      this.menuPrompt.width * 1.5,
      this.menuPrompt.height,
      5, // border radius
    )
  }

  addSnakeAnimation() {
    this.snakeAnimation = this.add.sprite(this.middleX, this.snakeSpriteHeight, 'snake').setScale(1.5)
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
    this.snakeAnimation.x = Phaser.Math.Wrap(this.snakeAnimation.x - delta / 8, -45, this.gameWidth + 45)

    if (this.isSnakeMovingUp) {
      this.snakeAnimation.y -= delta / 16

      if (this.snakeAnimation.y < this.snakeSpriteHeight - 30) {
        this.isSnakeMovingUp = false
      }
    } else {
      this.snakeAnimation.y += delta / 16

      if (this.snakeAnimation.y > this.snakeSpriteHeight + 30) {
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
    this.load.spritesheet('snake', 'assets/snakeSprite.png', { frameWidth: 56, frameHeight: 14 })
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
  }

  addText() {
    this.addGameTitle()
    this.addMenuPrompt()
  }

  create() {
    this.loading = true

    WebFont.load({
      google: {
        families: ['Cabin']
      },
      active: () => {
        this.loading = false
        this.addText()
        this.addSnakeAnimation()
      },
    })

    this.enterKey = this.addKey('ENTER')
  }

  update(time, delta) {
    if (this.loading) {
      return
    }

    this.moveSnake(delta)
    this.handleKeyPress()
  }
}
