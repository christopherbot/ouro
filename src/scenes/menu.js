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

  addMenuTitle() {
    this.add.text(
      this.middleX,
      20,
      this.text.menuTitle,
      { fill: '#0F0' },
    ).setOrigin(0.5, 0)
  }

  createColorBoxes() {
    const colors = [0xDF1A2D, 0x0798BB, 0xF8E71C, 0x7ED321]

    const colorBoxes = colors.reduce((boxes, color, i) => {
      const box = this.add.rectangle(i * 30 + 140, 29, 20, 20, color).setOrigin(0, 0)
      boxes.push(box)

      return boxes
    }, [])

    return colorBoxes
  }

  addPlayerSections() {
    this.player1Container = this.add.container(50, 50, [
      this.add.text(0, 0, this.text.player1),
      this.add.text(0, 30, this.text.chooseColor),
      ...this.createColorBoxes(),
      this.add.image(0, 70, 'WASD').setOrigin(0, 0),
      this.add.text(32, 160, this.text.controls),
    ])

    this.player2Container = this.add.container(380, 50, [
      this.add.text(0, 0, this.text.player2),
      this.add.text(0, 30, this.text.chooseColor),
      ...this.createColorBoxes(),
      this.add.image(0, 70, 'arrowKeys').setOrigin(0, 0),
      this.add.text(32, 160, this.text.controls),
    ])
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

  preload() {
    this.load.image('WASD', 'assets/WASD.png')
    this.load.image('arrowKeys', 'assets/arrowKeys.png')
  }

  create() {
    this.addMenuTitle()
    this.addPlayerSections()
    this.addGameInstructions()
    this.addGamePrompt()
  }

  update() {}
}
