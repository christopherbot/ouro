export default class Menu extends Phaser.Scene {
  constructor() {
    super('menu')
  }

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
      menuTitle: 'Ouro',
      player1: 'Player 1',
      player2: 'Player 2',
      chooseColor: 'Choose Colour:',
      controls: 'Controls',
      gameInstructionsHeader: 'Game Instructions',
      instructions: [
        '- Player score + 1 when opponent fails to return ball',
        '- Player loses when snake touches a wall',
      ],
      gamePrompt: '[Hit Enter]'
    }
  }

  addKey(key) {
    return this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key])
  }

  addMenuTitle() {
    this.add.text(
      this.middleX,
      20,
      this.text.menuTitle,
      { fill: '#0F0' },
    ).setOrigin(0.5, 0)
  }

  createColorBoxes() {
    const colorBoxes = this.colors
      .map(color => Phaser.Display.Color.HexStringToColor(color).color)
      .reduce((boxes, color, i) => {
        const box = this.add.rectangle(i * 30 + 142, 29, 20, 20, color).setOrigin(0, 0)
        boxes.push(box)

        return boxes
      }, [])

    return colorBoxes
  }

  addPlayerSections() {
    this.player1Header = this.add.text(0, 0, this.text.player1)
    this.player1Container = this.add.container(50, 50, [
      this.player1Header,
      this.add.text(0, 30, this.text.chooseColor),
      ...this.createColorBoxes(),
      this.add.image(0, 70, 'WASD').setOrigin(0, 0),
      this.add.text(32, 160, this.text.controls),
    ])

    this.cursor1 = new Phaser.Geom.Triangle.BuildEquilateral(
      this.player1Container.x + 152,
      this.player1Container.y + 55,
      15,
    )

    this.player2Header = this.add.text(0, 0, this.text.player2)
    this.player2Container = this.add.container(380, 50, [
      this.player2Header,
      this.add.text(0, 30, this.text.chooseColor),
      ...this.createColorBoxes(),
      this.add.image(0, 70, 'arrowKeys').setOrigin(0, 0),
      this.add.text(32, 160, this.text.controls),
    ])

    this.cursor2 = new Phaser.Geom.Triangle.BuildEquilateral(
      this.player2Container.x + 182,
      this.player2Container.y + 55,
      15,
    )

    this.graphics = this.add.graphics({ fillStyle: { color: 0xFFFFFF } })
    this.graphics.fillTriangleShape(this.cursor1)
    this.graphics.fillTriangleShape(this.cursor2)
  }

  addGameInstructions() {
    this.add.text(this.middleX, 260, this.text.gameInstructionsHeader).setOrigin(0.5, 0)
    this.text.instructions.forEach((instruction, i) =>
      this.add.text(this.middleX, i * 20 + 300, instruction).setOrigin(0.5, 0),
    )
  }

  addGamePrompt() {
    this.add.text(this.middleX, 360, this.text.gamePrompt).setOrigin(0.5, 0)
  }

  handleKeyPress() {
    if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
      if (this.player1ColorIndex === this.colors.length - 1) {
        this.player1ColorIndex = 0
        this.cursor1.left -= (30 * (this.colors.length - 1))
      } else {
        this.player1ColorIndex += 1
        this.cursor1.left += 30
      }
    }

    if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
      if (this.player1ColorIndex === 0) {
        this.player1ColorIndex = this.colors.length - 1
        this.cursor1.left += (30 * (this.colors.length - 1))
      } else {
        this.player1ColorIndex -= 1
        this.cursor1.left -= 30
      }
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) {
      if (this.player2ColorIndex === this.colors.length - 1) {
        this.player2ColorIndex = 0
        this.cursor2.left -= (30 * (this.colors.length - 1))
      } else {
        this.player2ColorIndex += 1
        this.cursor2.left += 30
      }
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.left)) {
      if (this.player2ColorIndex === 0) {
        this.player2ColorIndex = this.colors.length - 1
        this.cursor2.left += (30 * (this.colors.length - 1))
      } else {
        this.player2ColorIndex -= 1
        this.cursor2.left -= 30
      }
    }

    this.player1Header.setFill(`${this.colors[this.player1ColorIndex]}`)
    this.player2Header.setFill(`${this.colors[this.player2ColorIndex]}`)

    this.graphics.clear()
    this.graphics.fillTriangleShape(this.cursor1)
    this.graphics.fillTriangleShape(this.cursor2)
  }

  preload() {
    this.load.image('WASD', 'assets/WASD.png')
    this.load.image('arrowKeys', 'assets/arrowKeys.png')
  }

  create() {
    this.addMenuTitle()
    this.addPlayerSections()
    this.addGameInstructions()
    this.addGamePrompt()

    this.cursors = this.input.keyboard.createCursorKeys()
    this.keyW = this.addKey('W')
    this.keyA = this.addKey('A')
    this.keyS = this.addKey('S')
    this.keyD = this.addKey('D')

    this.player1ColorIndex = 0
    this.player2ColorIndex = 1
  }

  update() {
    this.handleKeyPress()
  }
}
