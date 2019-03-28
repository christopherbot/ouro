import BaseScene from './baseScene'

export default class Title extends BaseScene {
  constructor(props) {
    super('title')
  }

  get menuPromptText() {
    return 'hit [enter]'
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
      this.middleY - 100,
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
      this.middleY + 175,
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

  get selections() {
    return [{
      label: 'Local',
      scene: 'menu',
    }, {
      label: 'Online',
      scene: 'onlineMenu',
    }]
  }

  get selectionTextStyles() {
    return {
      ...this.textStyles2,
      fontSize: '16px',
    }
  }

  addSelections() {
    const getContainerWidth = (width, child) => {
      if (child.x + child.width > width) {
        width = child.x + child.width
      }

      return width
    }

    const selections = this.selections.map((selection, i) => {
      return this.add.text(0, i * this.selectionSpacing, selection.label, this.selectionTextStyles)
    })

    const containerWidth = selections.reduce(getContainerWidth, 0)

    this.selectionContainer = this.add.container(
      this.middleX - containerWidth / 2,
      this.middleY + this.selectionSpacing,
      selections,
    )

    this.snakeCursor = this.add.sprite(
      this.selectionContainer.x + containerWidth + 10,
      this.selectionContainer.y - 5,
      'snake',
    )
      .setScale(1.5)
      .setOrigin(0, 0)

    this.nextSnakeCursorY = this.snakeCursor.y

    this.anims.create({
      key: 'snakeDance',
      frames: this.anims.generateFrameNames('snake', { start: 1, end: 4 }),
      frameRate: 5,
      repeat: -1,
    })

    this.snakeCursor.anims.play('snakeDance')
  }

  moveSnakeCursor(delta) {
    const remainder =  this.nextSnakeCursorY - this.snakeCursor.y

    if (remainder !== 0) {
      this.snakeCursor.y += remainder / delta
    }
  }

  handleKeyPress() {
    if (this.keyJustDown(this.keyM)) {
      this.toggleAudioMute()
    }

    if (this.keyJustDown(this.keyS) || this.keyJustDown(this.cursors.down)) {
      if (this.selectionIndex === this.selections.length - 1) {
        this.selectionIndex = 0
        this.nextSnakeCursorY -= (this.selectionSpacing * (this.selections.length - 1))
      } else {
        this.selectionIndex += 1
        this.nextSnakeCursorY += this.selectionSpacing
      }
    }

    if (this.keyJustDown(this.keyW) || this.keyJustDown(this.cursors.up)) {
      if (this.selectionIndex === 0) {
        this.selectionIndex = this.selections.length - 1
        this.nextSnakeCursorY += (this.selectionSpacing * (this.selections.length - 1))
      } else {
        this.selectionIndex -= 1
        this.nextSnakeCursorY -= this.selectionSpacing
      }
    }

    if (this.keyJustDown(this.enterKey)) {
      const nextScene = this.selections[this.selectionIndex].scene
      this.scene.start(nextScene)
    }
  }

  preload() {
    this.load.spritesheet('snake', 'assets/snakeSprite.png', { frameWidth: 56, frameHeight: 14 })
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
    this.load.audio('simpleTheme', 'assets/audio/simpleTheme.ogg')
    this.load.audio('complexTheme', 'assets/audio/complexTheme.ogg')

    this.drawProgressBar()
  }

  _create() {
    this.selectionIndex = 0
    this.selectionSpacing = 50

    this.addGameTitle()
    this.addSelections()
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
        this._create()
      },
    })


    this.enterKey = this.addKey('ENTER')
    this.cursors = this.createCursorKeys()
    this.keyW = this.addKey('W')
    this.keyS = this.addKey('S')
    this.keyM = this.addKey('M')
  }

  update(time, delta) {
    if (this.loading) {
      return
    }

    this.moveSnakeCursor(delta)
    this.handleKeyPress()
  }
}
