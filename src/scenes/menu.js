import BaseScene from './baseScene'

export default class Menu extends BaseScene {
  constructor() {
    super('menu')
  }

  get colors() {
    return [
      '#DF1A2D',
      '#0798BB',
      '#F8E71C',
      '#7ED321',
    ]
  }

  get text() {
    return {
      player1: 'Player 1',
      player2: 'Player 2',
      chooseColor: 'Choose Colour:',
      controls: 'Controls',
      gameInstructionsHeader: 'Game Instructions',
      instructions: [
        '- Player score +1 when opponent fails to return ball',
        // '- Player loses when snake touches a wall',
      ],
      gamePrompt: 'hit [enter]'
    }
  }

  get colorBoxSize() {
    return 20
  }

  get colorBoxSpacing() {
    return 8
  }

  get menuTextStyles() {
    return {
      ...this.textStyles2,
      fontSize: '12px',
    }
  }

  createColorBoxes(offset) {
    const colorBoxes = this.colors
      .map(this.hexStringToColor)
      .reduce((boxes, color, i) => {
        const box = this.add.rectangle(
          i * 30 + (this.colorBoxSpacing + offset),
          29,
          this.colorBoxSize,
          this.colorBoxSize,
          color,
        ).setOrigin(0, 0)

        boxes.push(box)

        return boxes
      }, [])

    return colorBoxes
  }

  addPlayerSections() {
    this.player1Header = this.add.text(0, 0, this.text.player1, this.textStyles2)
    this.player2Header = this.add.text(0, 0, this.text.player2, this.textStyles2)
    this.chooseColor1Text = this.add.text(0, 30, this.text.chooseColor, this.menuTextStyles)
    this.chooseColor2Text = this.add.text(0, 30, this.text.chooseColor, this.menuTextStyles)

    const player1Elements = [
      this.player1Header,
      this.chooseColor1Text,
      ...this.createColorBoxes(this.chooseColor1Text.width),
      this.add.image(0, 70, 'WASD').setOrigin(0, 0),
      this.add.text(22, 160, this.text.controls, this.menuTextStyles),
    ]

    const player2Elements = [
      this.player2Header,
      this.chooseColor2Text,
      ...this.createColorBoxes(this.chooseColor2Text.width),
      this.add.image(0, 70, 'arrowKeys').setOrigin(0, 0),
      this.add.text(22, 160, this.text.controls, this.menuTextStyles),
    ]

    const getContainerWidth = (width, child) => {
      if (child.x + child.width > width) {
        width = child.x + child.width
      }

      return width
    }

    const container1Width = player1Elements.reduce(getContainerWidth, 0)
    const container2Width = player2Elements.reduce(getContainerWidth, 0)

    const container1X = (this.middleX - container1Width) * 2 / 3
    const container2X = this.middleX + (this.middleX - container2Width) / 3

    this.player1Container = this.add.container(container1X, 100, player1Elements)
    this.player2Container = this.add.container(container2X, 100, player2Elements)

    this.cursor1 = new Phaser.Geom.Triangle.BuildEquilateral(
      this.player1Container.x + this.chooseColor1Text.width + this.colorBoxSpacing + (this.colorBoxSize / 2),
      this.player1Container.y + 55,
      15,
    )

    this.cursor2 = new Phaser.Geom.Triangle.BuildEquilateral(
      // `+ 30` to begin on second color:
      this.player2Container.x + this.chooseColor2Text.width + this.colorBoxSpacing + (this.colorBoxSize / 2) + 30,
      this.player2Container.y + 55,
      15,
    )

    this.cursorGraphics1 = this.add.graphics({ fillStyle: { color: 0xFFFFFF } })
    this.cursorGraphics2 = this.add.graphics({ fillStyle: { color: 0xFFFFFF } })

    this.cursorGraphics1.fillTriangleShape(this.cursor1)
    this.cursorGraphics2.fillTriangleShape(this.cursor2)
  }

  addGameInstructions() {
    this.add.text(this.middleX, 350, this.text.gameInstructionsHeader, this.menuTextStyles).setOrigin(0.5, 0)
    this.text.instructions.forEach((instruction, i) =>
      this.add.text(this.middleX, i * 20 + 390, instruction, this.menuTextStyles).setOrigin(0.5, 0),
    )
  }

  addGamePrompt() {
    this.gamePrompt = this.add.text(this.middleX, 470, this.text.gamePrompt, {
      ...this.menuTextStyles,
      padding: 10,
    })
      .setOrigin(0.5, 0)

    this.gamePromptGraphics = this.add.graphics({ lineStyle: { color: 0x979797, width: 2 } })
    this.gamePromptGraphics.strokeRoundedRect(
      this.gamePrompt.x - this.gamePrompt.width * 1.25 / 2,
      this.gamePrompt.y,
      this.gamePrompt.width * 1.25,
      this.gamePrompt.height,
      5, // border radius
    )
  }

  addAudioText() {
    return this.add.text(
      this.middleX,
      60,
      this.sound.mute ? this.audioOffText : this.audioOnText,
      this.menuTextStyles,
    )
      .setOrigin(0.5, 0)
  }

  handleKeyPress() {
    if (this.keyJustDown(this.enterKey)) {
      this.scene.start('game', {
        color1: this.colors[this.player1ColorIndex],
        color2: this.colors[this.player2ColorIndex],
      })
    }

    if (this.keyJustDown(this.keyM)) {
      this.toggleAudioMute(this.audioText)
    }

    if (this.keyJustDown(this.keyD)) {
      if (this.player1ColorIndex === this.colors.length - 1) {
        this.player1ColorIndex = 0
        this.cursor1.left -= (30 * (this.colors.length - 1))
      } else {
        this.player1ColorIndex += 1
        this.cursor1.left += 30
      }

      this.changePlayerHeaderFill(1)
    }

    if (this.keyJustDown(this.keyA)) {
      if (this.player1ColorIndex === 0) {
        this.player1ColorIndex = this.colors.length - 1
        this.cursor1.left += (30 * (this.colors.length - 1))
      } else {
        this.player1ColorIndex -= 1
        this.cursor1.left -= 30
      }

      this.changePlayerHeaderFill(1)
    }

    if (this.keyJustDown(this.cursors.right)) {
      if (this.player2ColorIndex === this.colors.length - 1) {
        this.player2ColorIndex = 0
        this.cursor2.left -= (30 * (this.colors.length - 1))
      } else {
        this.player2ColorIndex += 1
        this.cursor2.left += 30
      }

      this.changePlayerHeaderFill(2)
    }

    if (this.keyJustDown(this.cursors.left)) {
      if (this.player2ColorIndex === 0) {
        this.player2ColorIndex = this.colors.length - 1
        this.cursor2.left += (30 * (this.colors.length - 1))
      } else {
        this.player2ColorIndex -= 1
        this.cursor2.left -= 30
      }

      this.changePlayerHeaderFill(2)
    }
  }

  changePlayerHeaderFill(i) {
    this[`player${i}Header`].setFill(`${this.colors[this[`player${i}ColorIndex`]]}`)

    this[`cursorGraphics${i}`].clear()
    this[`cursorGraphics${i}`].fillTriangleShape(this[`cursor${i}`])
  }

  preload() {
    this.load.image('WASD', 'assets/WASD.png')
    this.load.image('arrowKeys', 'assets/arrowKeys.png')
  }

  create() {
    this.addSmallGameTitle()
    this.addPlayerSections()
    this.addGameInstructions()
    this.addGamePrompt()
    this.audioText = this.addAudioText()

    this.cursors = this.createCursorKeys()
    this.keyW = this.addKey('W')
    this.keyA = this.addKey('A')
    this.keyS = this.addKey('S')
    this.keyD = this.addKey('D')
    this.keyM = this.addKey('M')
    this.enterKey = this.addKey('ENTER')

    this.player1ColorIndex = 0
    this.player2ColorIndex = 1
    this.changePlayerHeaderFill(1)
    this.changePlayerHeaderFill(2)
  }

  update() {
    this.handleKeyPress()
  }
}
