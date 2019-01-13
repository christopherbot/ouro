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

  drawProgressBar() {
    const progressText = this.add.text(
      this.middleX,
      this.middleY + 50,
      '0%',
      {
        fontSize: '20px',
        fontFamily: 'Avenir', // use a font that doesn't need to be loaded
      },
    ).setOrigin(0.5)

    // draw a progress bar that looks like a growing snake
    const width = 300
    const height = 30
    const outlineWidth = 10
    const tongueHeight = 10
    const tongueTipLength = 40

    const x = this.middleX - width / 2
    const y = this.middleY

    const outlineColor = 0x222222
    const bodyColor = 0x7ed420
    const tongueColor = 0xb71717

    const outline = this.add.graphics({ fillStyle: { color: outlineColor } })
    const body = this.add.graphics({ fillStyle: { color: bodyColor } })
    const tongue = this.add.graphics({ fillStyle: { color: tongueColor } })
    const tongueTip = this.add.graphics({ fillStyle: { color: tongueColor } })

    tongueTip.fillRect(x + width, y - tongueHeight / 2, tongueTipLength, tongueHeight)
    tongueTip.fillRect(x + width + tongueTipLength, y - 1.5 * tongueHeight, tongueHeight, tongueHeight)
    tongueTip.fillRect(x + width + tongueTipLength, y + 0.5 * tongueHeight, tongueHeight, tongueHeight)

    this.load.on('progress', (value) => {
      progressText.setText(`${value * 100}%`)

      const newWidth = width * value

      outline.clear()
      body.clear()
      tongue.clear()

      outline.fillRect(
        x - outlineWidth,
        y - (height / 2 + outlineWidth),
        newWidth + 2 * outlineWidth,
        height + 2 * outlineWidth,
      )

      body.fillRect(x, y - height / 2, newWidth, height)

      tongue.fillRect(x + newWidth, y - tongueHeight / 2, width - newWidth, tongueHeight)
    })

    this.load.on('complete', () => {
      progressText.destroy()
      outline.destroy()
      body.destroy()
      tongue.destroy()
      tongueTip.destroy()
    })
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
        ...this.textStyles2,
        fontSize: '20px',
        padding: 10,
      },
    )
      .setOrigin(0.5, 0)
      .setShadow(1, 1, '#FFF', 1, true, true)

    this.graphics = this.add.graphics({ lineStyle: { color: 0x979797, width: 2 } })
    this.graphics.strokeRoundedRect(
      this.menuPrompt.x - this.menuPrompt.width * 1.25 / 2,
      this.menuPrompt.y,
      this.menuPrompt.width * 1.25,
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
    if (this.keyJustDown(this.keyM)) {
      this.toggleAudioMute()
    }

    if (this.keyJustDown(this.enterKey)) {
      this.scene.start('menu')
    }
  }

  preload() {
    this.load.spritesheet('snake', 'assets/snakeSprite.png', { frameWidth: 56, frameHeight: 14 })
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
    this.load.audio('simpleTheme', 'assets/audio/simpleTheme.wav')
    this.load.audio('complexTheme', 'assets/audio/complexTheme.wav')

    this.drawProgressBar()
  }

  addText() {
    this.addGameTitle()
    this.addMenuPrompt()
  }

  create() {
    this.loading = true

    const simpleTheme = this.sound.add('simpleTheme', { loop: true })
    simpleTheme.play()

    WebFont.load({
      google: {
        families: ['Cabin', 'Press Start 2P']
      },
      active: () => {
        this.loading = false
        this.addText()
        this.addSnakeAnimation()
      },
    })

    this.enterKey = this.addKey('ENTER')
    this.keyM = this.addKey('M')
  }

  update(time, delta) {
    if (this.loading) {
      return
    }

    this.moveSnake(delta)
    this.handleKeyPress()
  }
}
