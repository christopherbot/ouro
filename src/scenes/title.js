import BaseScene from './baseScene'

export default class Title extends BaseScene {
  constructor(props) {
    super('title')
  }

  get menuPromptText() {
    return 'hit [enter]'
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

    if (Math.abs(remainder) > 0.5) {
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
    this.selectionIndex = 0
    this.selectionSpacing = 50
  }

  create() {
    this.enterKey = this.addKey('ENTER')
    this.cursors = this.createCursorKeys()
    this.keyW = this.addKey('W')
    this.keyS = this.addKey('S')
    this.keyM = this.addKey('M')

    this.addGameTitle()
    this.addSelections()
    this.addMenuPrompt()
  }

  update(time, delta) {
    this.moveSnakeCursor(delta)
    this.handleKeyPress()
  }
}
