import BaseScene from './baseScene'

export default class OnlineMenu extends BaseScene {
  constructor() {
    super('onlineMenu')
  }

  get menuTextStyles() {
    return {
      ...this.textStyles2,
      fontSize: '12px',
    }
  }

  get comingSoonStyles() {
    return {
      ...this.textStyles,
      fontSize: '40px',
    }
  }

  addAudioText() {
    return this.add.text(
      this.middleX,
      60,
      this.sound.mute ? this.audioOffText : this.audioOnText,
      this.menuTextStyles,
    ).setOrigin(0.5, 0)
  }

  addText() {
    this.add.text(
      this.middleX,
      this.middleY - 50,
      'Online coming soon',
      this.comingSoonStyles,
    ).setOrigin(0.5, 0)
  }

  addTitlePrompt() {
    this.titlePrompt = this.add.text(
      this.middleX,
      470,
      'return to title [enter]',
      this.menuTextStyles,
    ).setOrigin(0.5, 0)
  }

  handleKeyPress() {
    if (this.keyJustDown(this.keyM)) {
      this.toggleAudioMute(this.audioText)
    }

    if (this.keyJustDown(this.enterKey)) {
      this.scene.start('title')
    }
  }

  preload() {
  }

  create() {
    this.enterKey = this.addKey('ENTER')
    this.keyM = this.addKey('M')

    this.audioText = this.addAudioText()
    this.addSmallGameTitle()
    this.addText()
    this.addTitlePrompt()
  }

  update() {
    this.handleKeyPress()
  }
}
