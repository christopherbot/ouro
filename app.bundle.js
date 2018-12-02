webpackJsonp([0],{

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseScene = __webpack_require__(220);

var _baseScene2 = _interopRequireDefault(_baseScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_BaseScene) {
  _inherits(Title, _BaseScene);

  function Title(props) {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, 'title'));
  }

  _createClass(Title, [{
    key: 'addGameTitle',
    value: function addGameTitle() {
      this.add.text(this.middleX, this.middleY - 50, this.gameTitle.toUpperCase(), _extends({}, this.textStyles, {
        fontSize: '175px',
        padding: 10
      })).setOrigin(0.5, 0.5).setShadow(2, 2, '#FFF', 20, true, true);
    }
  }, {
    key: 'addMenuPrompt',
    value: function addMenuPrompt() {
      this.menuPrompt = this.add.text(this.middleX, this.middleY + 75, this.menuPromptText, _extends({}, this.textStyles2, {
        fontSize: '20px',
        padding: 10
      })).setOrigin(0.5, 0).setShadow(1, 1, '#FFF', 1, true, true);

      this.graphics = this.add.graphics({ lineStyle: { color: 0x979797, width: 2 } });
      this.graphics.strokeRoundedRect(this.menuPrompt.x - this.menuPrompt.width * 1.25 / 2, this.menuPrompt.y, this.menuPrompt.width * 1.25, this.menuPrompt.height, 5 // border radius
      );
    }
  }, {
    key: 'addSnakeAnimation',
    value: function addSnakeAnimation() {
      this.snakeAnimation = this.add.sprite(this.middleX, this.snakeSpriteHeight, 'snake').setScale(1.5);
      this.isSnakeMovingUp = true;

      this.anims.create({
        key: 'snakeDance',
        frames: this.anims.generateFrameNames('snake', { start: 1, end: 4 }),
        frameRate: 5,
        repeat: -1
      });

      this.snakeAnimation.anims.play('snakeDance');
    }
  }, {
    key: 'moveSnake',
    value: function moveSnake(delta) {
      this.snakeAnimation.x = Phaser.Math.Wrap(this.snakeAnimation.x - delta / 8, -45, this.gameWidth + 45);

      if (this.isSnakeMovingUp) {
        this.snakeAnimation.y -= delta / 16;

        if (this.snakeAnimation.y < this.snakeSpriteHeight - 30) {
          this.isSnakeMovingUp = false;
        }
      } else {
        this.snakeAnimation.y += delta / 16;

        if (this.snakeAnimation.y > this.snakeSpriteHeight + 30) {
          this.isSnakeMovingUp = true;
        }
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      if (this.keyJustDown(this.enterKey)) {
        this.scene.start('menu');
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.spritesheet('snake', 'assets/snakeSprite.png', { frameWidth: 56, frameHeight: 14 });
      this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
  }, {
    key: 'addText',
    value: function addText() {
      this.addGameTitle();
      this.addMenuPrompt();
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.loading = true;

      WebFont.load({
        google: {
          families: ['Cabin', 'Press Start 2P']
        },
        active: function active() {
          _this2.loading = false;
          _this2.addText();
          _this2.addSnakeAnimation();
        }
      });

      this.enterKey = this.addKey('ENTER');
    }
  }, {
    key: 'update',
    value: function update(time, delta) {
      if (this.loading) {
        return;
      }

      this.moveSnake(delta);
      this.handleKeyPress();
    }
  }, {
    key: 'menuPromptText',
    get: function get() {
      return 'hit [enter]';
    }
  }, {
    key: 'snakeSpriteHeight',
    get: function get() {
      return this.gameHeight - 70;
    }
  }]);

  return Title;
}(_baseScene2.default);

exports.default = Title;

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseScene = __webpack_require__(220);

var _baseScene2 = _interopRequireDefault(_baseScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_BaseScene) {
  _inherits(Menu, _BaseScene);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, 'menu'));
  }

  _createClass(Menu, [{
    key: 'createColorBoxes',
    value: function createColorBoxes(offset) {
      var _this2 = this;

      var colorBoxes = this.colors.map(this.hexStringToColor).reduce(function (boxes, color, i) {
        var box = _this2.add.rectangle(i * 30 + (_this2.colorBoxSpacing + offset), 29, _this2.colorBoxSize, _this2.colorBoxSize, color).setOrigin(0, 0);

        boxes.push(box);

        return boxes;
      }, []);

      return colorBoxes;
    }
  }, {
    key: 'addPlayerSections',
    value: function addPlayerSections() {
      this.player1Header = this.add.text(0, 0, this.text.player1, this.textStyles2);
      this.player2Header = this.add.text(0, 0, this.text.player2, this.textStyles2);
      this.chooseColor1Text = this.add.text(0, 30, this.text.chooseColor, this.menuTextStyles);
      this.chooseColor2Text = this.add.text(0, 30, this.text.chooseColor, this.menuTextStyles);

      var player1Elements = [this.player1Header, this.chooseColor1Text].concat(_toConsumableArray(this.createColorBoxes(this.chooseColor1Text.width)), [this.add.image(0, 70, 'WASD').setOrigin(0, 0), this.add.text(22, 160, this.text.controls, this.menuTextStyles)]);

      var player2Elements = [this.player2Header, this.chooseColor2Text].concat(_toConsumableArray(this.createColorBoxes(this.chooseColor2Text.width)), [this.add.image(0, 70, 'arrowKeys').setOrigin(0, 0), this.add.text(22, 160, this.text.controls, this.menuTextStyles)]);

      var getContainerWidth = function getContainerWidth(width, child) {
        if (child.x + child.width > width) {
          width = child.x + child.width;
        }

        return width;
      };

      var container1Width = player1Elements.reduce(getContainerWidth, 0);
      var container2Width = player2Elements.reduce(getContainerWidth, 0);

      var container1X = (this.middleX - container1Width) * 2 / 3;
      var container2X = this.middleX + (this.middleX - container2Width) / 3;

      this.player1Container = this.add.container(container1X, 100, player1Elements);
      this.player2Container = this.add.container(container2X, 100, player2Elements);

      this.cursor1 = new Phaser.Geom.Triangle.BuildEquilateral(this.player1Container.x + this.chooseColor1Text.width + this.colorBoxSpacing + this.colorBoxSize / 2, this.player1Container.y + 55, 15);

      this.cursor2 = new Phaser.Geom.Triangle.BuildEquilateral(
      // `+ 30` to begin on second color:
      this.player2Container.x + this.chooseColor2Text.width + this.colorBoxSpacing + this.colorBoxSize / 2 + 30, this.player2Container.y + 55, 15);

      this.cursorGraphics = this.add.graphics({ fillStyle: { color: 0xFFFFFF } });
      this.cursorGraphics.fillTriangleShape(this.cursor1);
      this.cursorGraphics.fillTriangleShape(this.cursor2);
    }
  }, {
    key: 'addGameInstructions',
    value: function addGameInstructions() {
      var _this3 = this;

      this.add.text(this.middleX, 350, this.text.gameInstructionsHeader, this.menuTextStyles).setOrigin(0.5, 0);
      this.text.instructions.forEach(function (instruction, i) {
        return _this3.add.text(_this3.middleX, i * 20 + 390, instruction, _this3.menuTextStyles).setOrigin(0.5, 0);
      });
    }
  }, {
    key: 'addGamePrompt',
    value: function addGamePrompt() {
      this.gamePrompt = this.add.text(this.middleX, 470, this.text.gamePrompt, _extends({}, this.menuTextStyles, {
        padding: 10
      })).setOrigin(0.5, 0);

      this.gamePromptGraphics = this.add.graphics({ lineStyle: { color: 0x979797, width: 2 } });
      this.gamePromptGraphics.strokeRoundedRect(this.gamePrompt.x - this.gamePrompt.width * 1.25 / 2, this.gamePrompt.y, this.gamePrompt.width * 1.25, this.gamePrompt.height, 5 // border radius
      );
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      if (this.keyJustDown(this.enterKey)) {
        this.scene.start('game', {
          color1: this.colors[this.player1ColorIndex],
          color2: this.colors[this.player2ColorIndex]
        });
      }

      if (this.keyJustDown(this.keyD)) {
        if (this.player1ColorIndex === this.colors.length - 1) {
          this.player1ColorIndex = 0;
          this.cursor1.left -= 30 * (this.colors.length - 1);
        } else {
          this.player1ColorIndex += 1;
          this.cursor1.left += 30;
        }
      }

      if (this.keyJustDown(this.keyA)) {
        if (this.player1ColorIndex === 0) {
          this.player1ColorIndex = this.colors.length - 1;
          this.cursor1.left += 30 * (this.colors.length - 1);
        } else {
          this.player1ColorIndex -= 1;
          this.cursor1.left -= 30;
        }
      }

      if (this.keyJustDown(this.cursors.right)) {
        if (this.player2ColorIndex === this.colors.length - 1) {
          this.player2ColorIndex = 0;
          this.cursor2.left -= 30 * (this.colors.length - 1);
        } else {
          this.player2ColorIndex += 1;
          this.cursor2.left += 30;
        }
      }

      if (this.keyJustDown(this.cursors.left)) {
        if (this.player2ColorIndex === 0) {
          this.player2ColorIndex = this.colors.length - 1;
          this.cursor2.left += 30 * (this.colors.length - 1);
        } else {
          this.player2ColorIndex -= 1;
          this.cursor2.left -= 30;
        }
      }
    }
  }, {
    key: 'changePlayerHeaderFills',
    value: function changePlayerHeaderFills() {
      this.player1Header.setFill('' + this.colors[this.player1ColorIndex]);
      this.player2Header.setFill('' + this.colors[this.player2ColorIndex]);

      this.cursorGraphics.clear();
      this.cursorGraphics.fillTriangleShape(this.cursor1);
      this.cursorGraphics.fillTriangleShape(this.cursor2);
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.image('WASD', 'assets/WASD.png');
      this.load.image('arrowKeys', 'assets/arrowKeys.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.addSmallGameTitle();
      this.addPlayerSections();
      this.addGameInstructions();
      this.addGamePrompt();

      this.cursors = this.createCursorKeys();
      this.keyW = this.addKey('W');
      this.keyA = this.addKey('A');
      this.keyS = this.addKey('S');
      this.keyD = this.addKey('D');
      this.enterKey = this.addKey('ENTER');

      this.player1ColorIndex = 0;
      this.player2ColorIndex = 1;
    }
  }, {
    key: 'update',
    value: function update() {
      this.handleKeyPress();
      this.changePlayerHeaderFills();
    }
  }, {
    key: 'colors',
    get: function get() {
      return ['#DF1A2D', '#0798BB', '#F8E71C', '#7ED321'];
    }
  }, {
    key: 'text',
    get: function get() {
      return {
        player1: 'Player 1',
        player2: 'Player 2',
        chooseColor: 'Choose Colour:',
        controls: 'Controls',
        gameInstructionsHeader: 'Game Instructions',
        instructions: ['- Player score +1 when opponent fails to return ball'],
        gamePrompt: 'hit [enter]'
      };
    }
  }, {
    key: 'colorBoxSize',
    get: function get() {
      return 20;
    }
  }, {
    key: 'colorBoxSpacing',
    get: function get() {
      return 8;
    }
  }, {
    key: 'menuTextStyles',
    get: function get() {
      return _extends({}, this.textStyles2, {
        fontSize: '12px'
      });
    }
  }]);

  return Menu;
}(_baseScene2.default);

exports.default = Menu;

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseScene = __webpack_require__(220);

var _baseScene2 = _interopRequireDefault(_baseScene);

var _snake = __webpack_require__(1152);

var _snake2 = _interopRequireDefault(_snake);

var _food = __webpack_require__(1153);

var _food2 = _interopRequireDefault(_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_BaseScene) {
  _inherits(Game, _BaseScene);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 'game'));
  }

  _createClass(Game, [{
    key: 'addCourtBoundaries',
    value: function addCourtBoundaries() {
      var horizontalLine1 = new Phaser.Geom.Line(0, this.courtTop, this.gameWidth, this.courtTop);
      var horizontalLine2 = new Phaser.Geom.Line(0, this.gameHeight - 1, this.gameWidth, this.gameHeight - 1);
      var verticalLine = new Phaser.Geom.Line(this.middleX, this.courtTop + 1, this.middleX, this.gameHeight - 2);

      var lineGraphics = this.add.graphics({ lineStyle: { color: 0xFFFFFF } });
      lineGraphics.strokeLineShape(horizontalLine1);
      lineGraphics.strokeLineShape(horizontalLine2);
      lineGraphics.strokeLineShape(verticalLine);
    }
  }, {
    key: 'initScores',
    value: function initScores() {
      this.score1Display = this.add.text(this.middleX - 35, this.middleY + this.courtTop / 2, this.score1, _extends({}, this.textStyles2, {
        fontSize: '40px'
      })).setOrigin(0.5, 0.5);

      this.score2Display = this.add.text(this.middleX + 40, this.middleY + this.courtTop / 2, this.score2, _extends({}, this.textStyles2, {
        fontSize: '40px'
      })).setOrigin(0.5, 0.5);
    }
  }, {
    key: 'updateScore1',
    value: function updateScore1() {
      this.score1 += 1;

      if (!this.isScore1DoubleDigits && this.score1.toString().length > 1) {
        this.isScore1DoubleDigits = true;
        this.score1Display.x -= 15;
      }

      if (!this.isScore1TripleDigits && this.score1.toString().length > 2) {
        this.isScore1TripleDigits = true;
        this.score1Display.x -= 20;
      }

      this.score1Display.setText(this.score1);
    }
  }, {
    key: 'updateScore2',
    value: function updateScore2() {
      this.score2 += 1;

      if (!this.isScore2DoubleDigits && this.score2.toString().length > 1) {
        this.isScore2DoubleDigits = true;
        this.score2Display.x += 15;
      }

      if (!this.isScore2TripleDigits && this.score2.toString().length > 2) {
        this.isScore2TripleDigits = true;
        this.score2Display.x += 20;
      }

      this.score2Display.setText(this.score2);
    }
  }, {
    key: 'resetBall',
    value: function resetBall(directionInteger) {
      var _this2 = this;

      this.ball.setVelocity(0);
      this.ball.x = this.middleX;
      this.ball.y = this.middleY + this.courtTop / 2;
      setTimeout(function () {
        return _this2.ball.setVelocity(directionInteger * 150, 150);
      }, 1000);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      if (this.keyJustDown(this.keyD)) {
        this.snake1.goRight();
      } else if (this.keyJustDown(this.keyA)) {
        this.snake1.goLeft();
      } else if (this.keyJustDown(this.keyW)) {
        this.snake1.goUp();
      } else if (this.keyJustDown(this.keyS)) {
        this.snake1.goDown();
      }

      if (this.keyJustDown(this.cursors.right)) {
        this.snake2.goRight();
      } else if (this.keyJustDown(this.cursors.left)) {
        this.snake2.goLeft();
      } else if (this.keyJustDown(this.cursors.up)) {
        this.snake2.goUp();
      } else if (this.keyJustDown(this.cursors.down)) {
        this.snake2.goDown();
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.image('body', 'assets/body.png');

      this.score1 = 0;
      this.score2 = 0;
      this.isScore1DoubleDigits = false;
      this.isScore2DoubleDigits = false;
      this.isScore1TripleDigits = false;
      this.isScore2TripleDigits = false;
      // Oh man I hope no one is playing into quadruple digits...
    }
  }, {
    key: 'hitBall',
    value: function hitBall(snake, ball, snakeBody) {
      snakeBody.setTint(0xFFFFFF);
      setTimeout(function () {
        return snakeBody.setTint(snake.color);
      }, 100);
    }
  }, {
    key: 'create',
    value: function create(data) {
      this.physics.world.setBounds(0, this.courtTop, this.gameWidth, this.gameHeight - this.courtTop);
      this.physics.world.setBoundsCollision(false, false, true, true);
      this.color1 = this.hexStringToColor(data.color1);
      this.color2 = this.hexStringToColor(data.color2);
      this.addSmallGameTitle();
      this.addCourtBoundaries();
      this.initScores();

      this.cursors = this.createCursorKeys();
      this.keyW = this.addKey('W');
      this.keyA = this.addKey('A');
      this.keyS = this.addKey('S');
      this.keyD = this.addKey('D');

      this.snake1 = new _snake2.default(this, 10, 10, {
        color: this.color1,
        bounds: this.player1Bounds
      });

      this.snake2 = new _snake2.default(this, 30, 10, {
        color: this.color2,
        bounds: this.player2Bounds
      });

      this.food1 = new _food2.default(this, 10, 20, {
        color: this.color1,
        bounds: this.player1Bounds
      });

      this.food2 = new _food2.default(this, 30, 20, {
        color: this.color2,
        bounds: this.player2Bounds
      });

      this.ball = this.physics.add.image(400, 200, 'body').setCollideWorldBounds(true).setScale(1.6).setBounce(1).setVelocity(150, 150);

      this.physics.add.collider(this.ball, this.snake1.body, this.hitBall.bind(this, this.snake1), null, this);
      this.physics.add.collider(this.ball, this.snake2.body, this.hitBall.bind(this, this.snake2), null, this);
    }
  }, {
    key: 'update',
    value: function update(time) {
      this.handleKeyPress();
      if (this.snake1.update(time)) {
        this.snake1.handleInteractions(this.food1);
      }

      if (this.snake2.update(time)) {
        this.snake2.handleInteractions(this.food2);
      }

      if (this.ball.x < 0) {
        this.updateScore2();
        this.resetBall(1);
      }

      if (this.ball.x > this.gameWidth) {
        this.updateScore1();
        this.resetBall(-1);
      }
    }
  }, {
    key: 'courtTop',
    get: function get() {
      return 64;
    }
  }, {
    key: 'player1Bounds',
    get: function get() {
      return {
        top: this.courtTop,
        right: this.middleX,
        bottom: this.gameHeight,
        left: 0
      };
    }
  }, {
    key: 'player2Bounds',
    get: function get() {
      return {
        top: this.courtTop,
        right: this.gameWidth,
        bottom: this.gameHeight,
        left: this.middleX
      };
    }
  }]);

  return Game;
}(_baseScene2.default);

exports.default = Game;

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var UP = 'UP';
var DOWN = 'DOWN';
var LEFT = 'LEFT';
var RIGHT = 'RIGHT';

exports.default = new Phaser.Class({
  initialize: function initialize(scene, x, y, options) {
    this.scene = scene;

    this.color = options.color;
    this.bounds = options.bounds;
    this.size = options.size || 16;
    this.scale = this.size / 10; // the `body` asset is 10x10

    this.headPosition = new Phaser.Geom.Point(x, y);
    this.tail = new Phaser.Geom.Point(x, y);

    this.body = scene.physics.add.group({ immovable: true });

    this.head = this.body.create(x * this.size, y * this.size, 'body');
    this.head.setScale(this.scale).setOrigin(0).setTint(this.color);

    this.movesPerSecond = 12;

    this.nextUpdateTime = 0;

    this.direction = DOWN;
    this.nextDirection = DOWN;
  },
  goLeft: function goLeft() {
    if (this.direction === UP || this.direction === DOWN) {
      this.nextDirection = LEFT;
    }
  },
  goRight: function goRight() {
    if (this.direction === UP || this.direction === DOWN) {
      this.nextDirection = RIGHT;
    }
  },
  goUp: function goUp() {
    if (this.direction === LEFT || this.direction === RIGHT) {
      this.nextDirection = UP;
    }
  },
  goDown: function goDown() {
    if (this.direction === LEFT || this.direction === RIGHT) {
      this.nextDirection = DOWN;
    }
  },
  wrapVerticalPosition: function wrapVerticalPosition(y) {
    return Phaser.Math.Wrap(y, this.bounds.top / this.size, this.bounds.bottom / this.size);
  },
  wrapHorizontalPosition: function wrapHorizontalPosition(x) {
    return Phaser.Math.Wrap(x, this.bounds.left / this.size, this.bounds.right / this.size);
  },
  move: function move(time) {
    switch (this.nextDirection) {
      case UP:
        this.headPosition.y = this.wrapVerticalPosition(this.headPosition.y - 1);
        break;
      case DOWN:
        this.headPosition.y = this.wrapVerticalPosition(this.headPosition.y + 1);
        break;
      case LEFT:
        this.headPosition.x = this.wrapHorizontalPosition(this.headPosition.x - 1);
        break;
      case RIGHT:
        this.headPosition.x = this.wrapHorizontalPosition(this.headPosition.x + 1);
        break;
    }

    this.direction = this.nextDirection;

    Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * this.size, this.headPosition.y * this.size, 1, this.tail);

    this.nextUpdateTime = time + 1000 / this.movesPerSecond;

    return true;
  },
  overlapsWith: function overlapsWith(item) {
    if (!item) {
      return false;
    }

    return this.head.x === item.x && this.head.y === item.y;
  },
  handleOverlapSelf: function handleOverlapSelf() {
    var _this = this;

    var strandedChildren = [];

    var removeTheRest = false;
    this.body.children.each(function (child, index) {
      if (index === 0) {
        return;
      }

      if (removeTheRest) {
        _this.body.remove(child);
        strandedChildren.push(child);
      } else if (_this.overlapsWith(child)) {
        removeTheRest = true;
        _this.body.remove(child);
        strandedChildren.push(child);
      }
    });

    strandedChildren.forEach(function (child, index) {
      var fadeDuration = 300;
      var delay = index * 20;

      _this.scene.tweens.add({
        targets: child,
        alpha: 0,
        ease: 'Sine.easeInOut',
        duration: fadeDuration,
        delay: delay
      });

      _this.scene.time.addEvent({
        delay: fadeDuration + delay,
        callback: child.destroy,
        loop: false
      });
    });
  },
  handleInteractions: function handleInteractions(food) {
    if (this.overlapsWith(food)) {
      this.grow();
      food.eat();
    }

    this.handleOverlapSelf();
  },
  grow: function grow() {
    var _this2 = this;

    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    [].concat(_toConsumableArray(Array(amount))).forEach(function () {
      _this2.body.create(_this2.tail.x, _this2.tail.y, 'body').setScale(_this2.scale).setOrigin(0).setTint(_this2.color);
    });
  },
  update: function update(time) {
    if (time >= this.nextUpdateTime) {
      return this.move(time);
    }
  }
});

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = new Phaser.Class({
  Extends: Phaser.GameObjects.Image,

  initialize: function initialize(scene, x, y, options) {
    this.scene = scene;
    Phaser.GameObjects.Image.call(this, scene);

    this.color = options.color;
    this.bounds = options.bounds;
    this.size = options.size || 16;
    this.scale = this.size / 10; // the `body` asset is 10x10

    this.setTexture('body');
    this.setPosition(x * this.size, y * this.size);
    this.setScale(this.scale);
    this.setOrigin(0);
    this.setTint(this.color);
    this.setAlpha(0.9);

    this.total = 0;

    scene.children.add(this);
  },
  reposition: function reposition(x, y) {
    x = x || Phaser.Math.Between(this.bounds.left / this.size, this.bounds.right / this.size - 1);
    y = y || Phaser.Math.Between(this.bounds.top / this.size, this.bounds.bottom / this.size - 1);

    this.setPosition(x * this.size, y * this.size);
  },
  eat: function eat() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    this.total += amount;

    this.reposition();
  }
});

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseScene = function (_Phaser$Scene) {
  _inherits(BaseScene, _Phaser$Scene);

  function BaseScene() {
    _classCallCheck(this, BaseScene);

    return _possibleConstructorReturn(this, (BaseScene.__proto__ || Object.getPrototypeOf(BaseScene)).apply(this, arguments));
  }

  _createClass(BaseScene, [{
    key: 'addSmallGameTitle',
    value: function addSmallGameTitle() {
      this.add.text(this.middleX, 0, this.gameTitle.toUpperCase(), _extends({}, this.textStyles, {
        fontSize: '40px',
        padding: 10
      })).setOrigin(0.5, 0).setShadow(1, 1, '#FFF', 10, true, true);
    }
  }, {
    key: 'createCursorKeys',
    value: function createCursorKeys() {
      return this.input.keyboard.createCursorKeys();
    }
  }, {
    key: 'addKey',
    value: function addKey(key) {
      return this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key]);
    }
  }, {
    key: 'keyJustDown',
    value: function keyJustDown(key) {
      return Phaser.Input.Keyboard.JustDown(key);
    }
  }, {
    key: 'hexStringToColor',
    value: function hexStringToColor(hex) {
      if (!hex.startsWith('#')) {
        console.warn('[hexStringToColor]: ' + hex + ' is not a valid hex string.');

        return hex;
      }

      return Phaser.Display.Color.HexStringToColor(hex).color;
    }
  }, {
    key: 'gameTitle',
    get: function get() {
      return 'Ouro';
    }
  }, {
    key: 'gameWidth',
    get: function get() {
      return this.sys.game.config.width;
    }
  }, {
    key: 'gameHeight',
    get: function get() {
      return this.sys.game.config.height;
    }
  }, {
    key: 'middleX',
    get: function get() {
      return this.gameWidth / 2;
    }
  }, {
    key: 'middleY',
    get: function get() {
      return this.gameHeight / 2;
    }
  }, {
    key: 'textStyles',
    get: function get() {
      return {
        fontFamily: 'Cabin',
        color: '#F6FEFF'
      };
    }
  }, {
    key: 'textStyles2',
    get: function get() {
      return {
        fontFamily: "'Press Start 2P'", // See `docs/notes.md` for why this is wrapped in 2 quotes
        color: '#32EEF8'
      };
    }
  }]);

  return BaseScene;
}(Phaser.Scene);

exports.default = BaseScene;

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(221);

var _title = __webpack_require__(1149);

var _title2 = _interopRequireDefault(_title);

var _menu = __webpack_require__(1150);

var _menu2 = _interopRequireDefault(_menu);

var _game = __webpack_require__(1151);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameConfig = {
  width: 800,
  height: 560,
  backgroundColor: '#072C40',
  physics: {
    default: 'arcade'
  },
  scene: [_title2.default, _menu2.default, _game2.default]
};

var game = new Phaser.Game(gameConfig);

/***/ })

},[467]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jhc2VTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGl0bGUiLCJwcm9wcyIsImFkZCIsInRleHQiLCJtaWRkbGVYIiwibWlkZGxlWSIsImdhbWVUaXRsZSIsInRvVXBwZXJDYXNlIiwidGV4dFN0eWxlcyIsImZvbnRTaXplIiwicGFkZGluZyIsInNldE9yaWdpbiIsInNldFNoYWRvdyIsIm1lbnVQcm9tcHQiLCJtZW51UHJvbXB0VGV4dCIsInRleHRTdHlsZXMyIiwiZ3JhcGhpY3MiLCJsaW5lU3R5bGUiLCJjb2xvciIsIndpZHRoIiwic3Ryb2tlUm91bmRlZFJlY3QiLCJ4IiwieSIsImhlaWdodCIsInNuYWtlQW5pbWF0aW9uIiwic3ByaXRlIiwic25ha2VTcHJpdGVIZWlnaHQiLCJzZXRTY2FsZSIsImlzU25ha2VNb3ZpbmdVcCIsImFuaW1zIiwiY3JlYXRlIiwia2V5IiwiZnJhbWVzIiwiZ2VuZXJhdGVGcmFtZU5hbWVzIiwic3RhcnQiLCJlbmQiLCJmcmFtZVJhdGUiLCJyZXBlYXQiLCJwbGF5IiwiZGVsdGEiLCJQaGFzZXIiLCJNYXRoIiwiV3JhcCIsImdhbWVXaWR0aCIsImtleUp1c3REb3duIiwiZW50ZXJLZXkiLCJzY2VuZSIsImxvYWQiLCJzcHJpdGVzaGVldCIsImZyYW1lV2lkdGgiLCJmcmFtZUhlaWdodCIsInNjcmlwdCIsImFkZEdhbWVUaXRsZSIsImFkZE1lbnVQcm9tcHQiLCJsb2FkaW5nIiwiV2ViRm9udCIsImdvb2dsZSIsImZhbWlsaWVzIiwiYWN0aXZlIiwiYWRkVGV4dCIsImFkZFNuYWtlQW5pbWF0aW9uIiwiYWRkS2V5IiwidGltZSIsIm1vdmVTbmFrZSIsImhhbmRsZUtleVByZXNzIiwiZ2FtZUhlaWdodCIsIkJhc2VTY2VuZSIsIk1lbnUiLCJvZmZzZXQiLCJjb2xvckJveGVzIiwiY29sb3JzIiwibWFwIiwiaGV4U3RyaW5nVG9Db2xvciIsInJlZHVjZSIsImJveGVzIiwiaSIsImJveCIsInJlY3RhbmdsZSIsImNvbG9yQm94U3BhY2luZyIsImNvbG9yQm94U2l6ZSIsInB1c2giLCJwbGF5ZXIxSGVhZGVyIiwicGxheWVyMSIsInBsYXllcjJIZWFkZXIiLCJwbGF5ZXIyIiwiY2hvb3NlQ29sb3IxVGV4dCIsImNob29zZUNvbG9yIiwibWVudVRleHRTdHlsZXMiLCJjaG9vc2VDb2xvcjJUZXh0IiwicGxheWVyMUVsZW1lbnRzIiwiY3JlYXRlQ29sb3JCb3hlcyIsImltYWdlIiwiY29udHJvbHMiLCJwbGF5ZXIyRWxlbWVudHMiLCJnZXRDb250YWluZXJXaWR0aCIsImNoaWxkIiwiY29udGFpbmVyMVdpZHRoIiwiY29udGFpbmVyMldpZHRoIiwiY29udGFpbmVyMVgiLCJjb250YWluZXIyWCIsInBsYXllcjFDb250YWluZXIiLCJjb250YWluZXIiLCJwbGF5ZXIyQ29udGFpbmVyIiwiY3Vyc29yMSIsIkdlb20iLCJUcmlhbmdsZSIsIkJ1aWxkRXF1aWxhdGVyYWwiLCJjdXJzb3IyIiwiY3Vyc29yR3JhcGhpY3MiLCJmaWxsU3R5bGUiLCJmaWxsVHJpYW5nbGVTaGFwZSIsImdhbWVJbnN0cnVjdGlvbnNIZWFkZXIiLCJpbnN0cnVjdGlvbnMiLCJmb3JFYWNoIiwiaW5zdHJ1Y3Rpb24iLCJnYW1lUHJvbXB0IiwiZ2FtZVByb21wdEdyYXBoaWNzIiwiY29sb3IxIiwicGxheWVyMUNvbG9ySW5kZXgiLCJjb2xvcjIiLCJwbGF5ZXIyQ29sb3JJbmRleCIsImtleUQiLCJsZW5ndGgiLCJsZWZ0Iiwia2V5QSIsImN1cnNvcnMiLCJyaWdodCIsInNldEZpbGwiLCJjbGVhciIsImFkZFNtYWxsR2FtZVRpdGxlIiwiYWRkUGxheWVyU2VjdGlvbnMiLCJhZGRHYW1lSW5zdHJ1Y3Rpb25zIiwiYWRkR2FtZVByb21wdCIsImNyZWF0ZUN1cnNvcktleXMiLCJrZXlXIiwia2V5UyIsImNoYW5nZVBsYXllckhlYWRlckZpbGxzIiwiR2FtZSIsImhvcml6b250YWxMaW5lMSIsIkxpbmUiLCJjb3VydFRvcCIsImhvcml6b250YWxMaW5lMiIsInZlcnRpY2FsTGluZSIsImxpbmVHcmFwaGljcyIsInN0cm9rZUxpbmVTaGFwZSIsInNjb3JlMURpc3BsYXkiLCJzY29yZTEiLCJzY29yZTJEaXNwbGF5Iiwic2NvcmUyIiwiaXNTY29yZTFEb3VibGVEaWdpdHMiLCJ0b1N0cmluZyIsImlzU2NvcmUxVHJpcGxlRGlnaXRzIiwic2V0VGV4dCIsImlzU2NvcmUyRG91YmxlRGlnaXRzIiwiaXNTY29yZTJUcmlwbGVEaWdpdHMiLCJkaXJlY3Rpb25JbnRlZ2VyIiwiYmFsbCIsInNldFZlbG9jaXR5Iiwic2V0VGltZW91dCIsInNuYWtlMSIsImdvUmlnaHQiLCJnb0xlZnQiLCJnb1VwIiwiZ29Eb3duIiwic25ha2UyIiwidXAiLCJkb3duIiwic25ha2UiLCJzbmFrZUJvZHkiLCJzZXRUaW50IiwiZGF0YSIsInBoeXNpY3MiLCJ3b3JsZCIsInNldEJvdW5kcyIsInNldEJvdW5kc0NvbGxpc2lvbiIsImFkZENvdXJ0Qm91bmRhcmllcyIsImluaXRTY29yZXMiLCJTbmFrZSIsImJvdW5kcyIsInBsYXllcjFCb3VuZHMiLCJwbGF5ZXIyQm91bmRzIiwiZm9vZDEiLCJGb29kIiwiZm9vZDIiLCJzZXRDb2xsaWRlV29ybGRCb3VuZHMiLCJzZXRCb3VuY2UiLCJjb2xsaWRlciIsImJvZHkiLCJoaXRCYWxsIiwiYmluZCIsInVwZGF0ZSIsImhhbmRsZUludGVyYWN0aW9ucyIsInVwZGF0ZVNjb3JlMiIsInJlc2V0QmFsbCIsInVwZGF0ZVNjb3JlMSIsInRvcCIsImJvdHRvbSIsIlVQIiwiRE9XTiIsIkxFRlQiLCJSSUdIVCIsIkNsYXNzIiwiaW5pdGlhbGl6ZSIsIm9wdGlvbnMiLCJzaXplIiwic2NhbGUiLCJoZWFkUG9zaXRpb24iLCJQb2ludCIsInRhaWwiLCJncm91cCIsImltbW92YWJsZSIsImhlYWQiLCJtb3Zlc1BlclNlY29uZCIsIm5leHRVcGRhdGVUaW1lIiwiZGlyZWN0aW9uIiwibmV4dERpcmVjdGlvbiIsIndyYXBWZXJ0aWNhbFBvc2l0aW9uIiwid3JhcEhvcml6b250YWxQb3NpdGlvbiIsIm1vdmUiLCJBY3Rpb25zIiwiU2hpZnRQb3NpdGlvbiIsImdldENoaWxkcmVuIiwib3ZlcmxhcHNXaXRoIiwiaXRlbSIsImhhbmRsZU92ZXJsYXBTZWxmIiwic3RyYW5kZWRDaGlsZHJlbiIsInJlbW92ZVRoZVJlc3QiLCJjaGlsZHJlbiIsImVhY2giLCJpbmRleCIsInJlbW92ZSIsImZhZGVEdXJhdGlvbiIsImRlbGF5IiwidHdlZW5zIiwidGFyZ2V0cyIsImFscGhhIiwiZWFzZSIsImR1cmF0aW9uIiwiYWRkRXZlbnQiLCJjYWxsYmFjayIsImRlc3Ryb3kiLCJsb29wIiwiZm9vZCIsImdyb3ciLCJlYXQiLCJhbW91bnQiLCJBcnJheSIsIkV4dGVuZHMiLCJHYW1lT2JqZWN0cyIsIkltYWdlIiwiY2FsbCIsInNldFRleHR1cmUiLCJzZXRQb3NpdGlvbiIsInNldEFscGhhIiwidG90YWwiLCJyZXBvc2l0aW9uIiwiQmV0d2VlbiIsImlucHV0Iiwia2V5Ym9hcmQiLCJJbnB1dCIsIktleWJvYXJkIiwiS2V5Q29kZXMiLCJKdXN0RG93biIsImhleCIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwid2FybiIsIkRpc3BsYXkiLCJDb2xvciIsIkhleFN0cmluZ1RvQ29sb3IiLCJzeXMiLCJnYW1lIiwiY29uZmlnIiwiZm9udEZhbWlseSIsIlNjZW5lIiwiZ2FtZUNvbmZpZyIsImJhY2tncm91bmRDb2xvciIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7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QVksa0JBRFAsRUFDMkI7QUFDaEMvUCxlQUFPO0FBRkYsT0FBUDtBQUlEOzs7O0VBakNvQ3NCLE9BQU8wTyxLOztrQkFBekJoTixTOzs7Ozs7Ozs7O0FDQXJCOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTWlOLGFBQWE7QUFDakJoUSxTQUFPLEdBRFU7QUFFakJJLFVBQVEsR0FGUztBQUdqQjZQLG1CQUFpQixTQUhBO0FBSWpCekcsV0FBUztBQUNQMEcsYUFBUztBQURGLEdBSlE7QUFPakJ2TyxTQUFPLENBQUM5QyxlQUFELEVBQVFtRSxjQUFSLEVBQWNzRSxjQUFkO0FBUFUsQ0FBbkI7O0FBVUEsSUFBTXNJLE9BQU8sSUFBSXZPLE9BQU9pRyxJQUFYLENBQWdCMEksVUFBaEIsQ0FBYixDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNjZW5lIGZyb20gJy4vYmFzZVNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIEJhc2VTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoJ3RpdGxlJylcbiAgfVxuXG4gIGdldCBtZW51UHJvbXB0VGV4dCgpIHtcbiAgICByZXR1cm4gJ2hpdCBbZW50ZXJdJ1xuICB9XG5cbiAgZ2V0IHNuYWtlU3ByaXRlSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVIZWlnaHQgLSA3MFxuICB9XG5cbiAgYWRkR2FtZVRpdGxlKCkge1xuICAgIHRoaXMuYWRkLnRleHQoXG4gICAgICB0aGlzLm1pZGRsZVgsXG4gICAgICB0aGlzLm1pZGRsZVkgLSA1MCxcbiAgICAgIHRoaXMuZ2FtZVRpdGxlLnRvVXBwZXJDYXNlKCksXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMudGV4dFN0eWxlcyxcbiAgICAgICAgZm9udFNpemU6ICcxNzVweCcsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgfVxuICAgIClcbiAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAuc2V0U2hhZG93KDIsIDIsICcjRkZGJywgMjAsIHRydWUsIHRydWUpXG4gIH1cblxuICBhZGRNZW51UHJvbXB0KCkge1xuICAgIHRoaXMubWVudVByb21wdCA9IHRoaXMuYWRkLnRleHQoXG4gICAgICB0aGlzLm1pZGRsZVgsXG4gICAgICB0aGlzLm1pZGRsZVkgKyA3NSxcbiAgICAgIHRoaXMubWVudVByb21wdFRleHQsXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMudGV4dFN0eWxlczIsXG4gICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgfSxcbiAgICApXG4gICAgICAuc2V0T3JpZ2luKDAuNSwgMClcbiAgICAgIC5zZXRTaGFkb3coMSwgMSwgJyNGRkYnLCAxLCB0cnVlLCB0cnVlKVxuXG4gICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKHsgbGluZVN0eWxlOiB7IGNvbG9yOiAweDk3OTc5Nywgd2lkdGg6IDIgfSB9KVxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlUm91bmRlZFJlY3QoXG4gICAgICB0aGlzLm1lbnVQcm9tcHQueCAtIHRoaXMubWVudVByb21wdC53aWR0aCAqIDEuMjUgLyAyLFxuICAgICAgdGhpcy5tZW51UHJvbXB0LnksXG4gICAgICB0aGlzLm1lbnVQcm9tcHQud2lkdGggKiAxLjI1LFxuICAgICAgdGhpcy5tZW51UHJvbXB0LmhlaWdodCxcbiAgICAgIDUsIC8vIGJvcmRlciByYWRpdXNcbiAgICApXG4gIH1cblxuICBhZGRTbmFrZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLnNuYWtlQW5pbWF0aW9uID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMubWlkZGxlWCwgdGhpcy5zbmFrZVNwcml0ZUhlaWdodCwgJ3NuYWtlJykuc2V0U2NhbGUoMS41KVxuICAgIHRoaXMuaXNTbmFrZU1vdmluZ1VwID0gdHJ1ZVxuXG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnc25ha2VEYW5jZScsXG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCdzbmFrZScsIHsgc3RhcnQ6IDEsIGVuZDogNCB9KSxcbiAgICAgIGZyYW1lUmF0ZTogNSxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSlcblxuICAgIHRoaXMuc25ha2VBbmltYXRpb24uYW5pbXMucGxheSgnc25ha2VEYW5jZScpXG4gIH1cblxuICBtb3ZlU25ha2UoZGVsdGEpIHtcbiAgICB0aGlzLnNuYWtlQW5pbWF0aW9uLnggPSBQaGFzZXIuTWF0aC5XcmFwKHRoaXMuc25ha2VBbmltYXRpb24ueCAtIGRlbHRhIC8gOCwgLTQ1LCB0aGlzLmdhbWVXaWR0aCArIDQ1KVxuXG4gICAgaWYgKHRoaXMuaXNTbmFrZU1vdmluZ1VwKSB7XG4gICAgICB0aGlzLnNuYWtlQW5pbWF0aW9uLnkgLT0gZGVsdGEgLyAxNlxuXG4gICAgICBpZiAodGhpcy5zbmFrZUFuaW1hdGlvbi55IDwgdGhpcy5zbmFrZVNwcml0ZUhlaWdodCAtIDMwKSB7XG4gICAgICAgIHRoaXMuaXNTbmFrZU1vdmluZ1VwID0gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbmFrZUFuaW1hdGlvbi55ICs9IGRlbHRhIC8gMTZcblxuICAgICAgaWYgKHRoaXMuc25ha2VBbmltYXRpb24ueSA+IHRoaXMuc25ha2VTcHJpdGVIZWlnaHQgKyAzMCkge1xuICAgICAgICB0aGlzLmlzU25ha2VNb3ZpbmdVcCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcygpIHtcbiAgICBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmVudGVyS2V5KSkge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnbWVudScpXG4gICAgfVxuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NuYWtlJywgJ2Fzc2V0cy9zbmFrZVNwcml0ZS5wbmcnLCB7IGZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogMTQgfSlcbiAgICB0aGlzLmxvYWQuc2NyaXB0KCd3ZWJmb250JywgJ2h0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvd2ViZm9udC8xLjYuMjYvd2ViZm9udC5qcycpXG4gIH1cblxuICBhZGRUZXh0KCkge1xuICAgIHRoaXMuYWRkR2FtZVRpdGxlKClcbiAgICB0aGlzLmFkZE1lbnVQcm9tcHQoKVxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWVcblxuICAgIFdlYkZvbnQubG9hZCh7XG4gICAgICBnb29nbGU6IHtcbiAgICAgICAgZmFtaWxpZXM6IFsnQ2FiaW4nLCAnUHJlc3MgU3RhcnQgMlAnXVxuICAgICAgfSxcbiAgICAgIGFjdGl2ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmFkZFRleHQoKVxuICAgICAgICB0aGlzLmFkZFNuYWtlQW5pbWF0aW9uKClcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHRoaXMuZW50ZXJLZXkgPSB0aGlzLmFkZEtleSgnRU5URVInKVxuICB9XG5cbiAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlU25ha2UoZGVsdGEpXG4gICAgdGhpcy5oYW5kbGVLZXlQcmVzcygpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY2VuZXMvdGl0bGUuanMiLCJpbXBvcnQgQmFzZVNjZW5lIGZyb20gJy4vYmFzZVNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQmFzZVNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ21lbnUnKVxuICB9XG5cbiAgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJyNERjFBMkQnLFxuICAgICAgJyMwNzk4QkInLFxuICAgICAgJyNGOEU3MUMnLFxuICAgICAgJyM3RUQzMjEnLFxuICAgIF1cbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXIxOiAnUGxheWVyIDEnLFxuICAgICAgcGxheWVyMjogJ1BsYXllciAyJyxcbiAgICAgIGNob29zZUNvbG9yOiAnQ2hvb3NlIENvbG91cjonLFxuICAgICAgY29udHJvbHM6ICdDb250cm9scycsXG4gICAgICBnYW1lSW5zdHJ1Y3Rpb25zSGVhZGVyOiAnR2FtZSBJbnN0cnVjdGlvbnMnLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBbXG4gICAgICAgICctIFBsYXllciBzY29yZSArMSB3aGVuIG9wcG9uZW50IGZhaWxzIHRvIHJldHVybiBiYWxsJyxcbiAgICAgICAgLy8gJy0gUGxheWVyIGxvc2VzIHdoZW4gc25ha2UgdG91Y2hlcyBhIHdhbGwnLFxuICAgICAgXSxcbiAgICAgIGdhbWVQcm9tcHQ6ICdoaXQgW2VudGVyXSdcbiAgICB9XG4gIH1cblxuICBnZXQgY29sb3JCb3hTaXplKCkge1xuICAgIHJldHVybiAyMFxuICB9XG5cbiAgZ2V0IGNvbG9yQm94U3BhY2luZygpIHtcbiAgICByZXR1cm4gOFxuICB9XG5cbiAgZ2V0IG1lbnVUZXh0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnRleHRTdHlsZXMyLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb2xvckJveGVzKG9mZnNldCkge1xuICAgIGNvbnN0IGNvbG9yQm94ZXMgPSB0aGlzLmNvbG9yc1xuICAgICAgLm1hcCh0aGlzLmhleFN0cmluZ1RvQ29sb3IpXG4gICAgICAucmVkdWNlKChib3hlcywgY29sb3IsIGkpID0+IHtcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgICAgIGkgKiAzMCArICh0aGlzLmNvbG9yQm94U3BhY2luZyArIG9mZnNldCksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgdGhpcy5jb2xvckJveFNpemUsXG4gICAgICAgICAgdGhpcy5jb2xvckJveFNpemUsXG4gICAgICAgICAgY29sb3IsXG4gICAgICAgICkuc2V0T3JpZ2luKDAsIDApXG5cbiAgICAgICAgYm94ZXMucHVzaChib3gpXG5cbiAgICAgICAgcmV0dXJuIGJveGVzXG4gICAgICB9LCBbXSlcblxuICAgIHJldHVybiBjb2xvckJveGVzXG4gIH1cblxuICBhZGRQbGF5ZXJTZWN0aW9ucygpIHtcbiAgICB0aGlzLnBsYXllcjFIZWFkZXIgPSB0aGlzLmFkZC50ZXh0KDAsIDAsIHRoaXMudGV4dC5wbGF5ZXIxLCB0aGlzLnRleHRTdHlsZXMyKVxuICAgIHRoaXMucGxheWVyMkhlYWRlciA9IHRoaXMuYWRkLnRleHQoMCwgMCwgdGhpcy50ZXh0LnBsYXllcjIsIHRoaXMudGV4dFN0eWxlczIpXG4gICAgdGhpcy5jaG9vc2VDb2xvcjFUZXh0ID0gdGhpcy5hZGQudGV4dCgwLCAzMCwgdGhpcy50ZXh0LmNob29zZUNvbG9yLCB0aGlzLm1lbnVUZXh0U3R5bGVzKVxuICAgIHRoaXMuY2hvb3NlQ29sb3IyVGV4dCA9IHRoaXMuYWRkLnRleHQoMCwgMzAsIHRoaXMudGV4dC5jaG9vc2VDb2xvciwgdGhpcy5tZW51VGV4dFN0eWxlcylcblxuICAgIGNvbnN0IHBsYXllcjFFbGVtZW50cyA9IFtcbiAgICAgIHRoaXMucGxheWVyMUhlYWRlcixcbiAgICAgIHRoaXMuY2hvb3NlQ29sb3IxVGV4dCxcbiAgICAgIC4uLnRoaXMuY3JlYXRlQ29sb3JCb3hlcyh0aGlzLmNob29zZUNvbG9yMVRleHQud2lkdGgpLFxuICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwgNzAsICdXQVNEJykuc2V0T3JpZ2luKDAsIDApLFxuICAgICAgdGhpcy5hZGQudGV4dCgyMiwgMTYwLCB0aGlzLnRleHQuY29udHJvbHMsIHRoaXMubWVudVRleHRTdHlsZXMpLFxuICAgIF1cblxuICAgIGNvbnN0IHBsYXllcjJFbGVtZW50cyA9IFtcbiAgICAgIHRoaXMucGxheWVyMkhlYWRlcixcbiAgICAgIHRoaXMuY2hvb3NlQ29sb3IyVGV4dCxcbiAgICAgIC4uLnRoaXMuY3JlYXRlQ29sb3JCb3hlcyh0aGlzLmNob29zZUNvbG9yMlRleHQud2lkdGgpLFxuICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwgNzAsICdhcnJvd0tleXMnKS5zZXRPcmlnaW4oMCwgMCksXG4gICAgICB0aGlzLmFkZC50ZXh0KDIyLCAxNjAsIHRoaXMudGV4dC5jb250cm9scywgdGhpcy5tZW51VGV4dFN0eWxlcyksXG4gICAgXVxuXG4gICAgY29uc3QgZ2V0Q29udGFpbmVyV2lkdGggPSAod2lkdGgsIGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQueCArIGNoaWxkLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSBjaGlsZC54ICsgY2hpbGQud2lkdGhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpZHRoXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyMVdpZHRoID0gcGxheWVyMUVsZW1lbnRzLnJlZHVjZShnZXRDb250YWluZXJXaWR0aCwgMClcbiAgICBjb25zdCBjb250YWluZXIyV2lkdGggPSBwbGF5ZXIyRWxlbWVudHMucmVkdWNlKGdldENvbnRhaW5lcldpZHRoLCAwKVxuXG4gICAgY29uc3QgY29udGFpbmVyMVggPSAodGhpcy5taWRkbGVYIC0gY29udGFpbmVyMVdpZHRoKSAqIDIgLyAzXG4gICAgY29uc3QgY29udGFpbmVyMlggPSB0aGlzLm1pZGRsZVggKyAodGhpcy5taWRkbGVYIC0gY29udGFpbmVyMldpZHRoKSAvIDNcblxuICAgIHRoaXMucGxheWVyMUNvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihjb250YWluZXIxWCwgMTAwLCBwbGF5ZXIxRWxlbWVudHMpXG4gICAgdGhpcy5wbGF5ZXIyQ29udGFpbmVyID0gdGhpcy5hZGQuY29udGFpbmVyKGNvbnRhaW5lcjJYLCAxMDAsIHBsYXllcjJFbGVtZW50cylcblxuICAgIHRoaXMuY3Vyc29yMSA9IG5ldyBQaGFzZXIuR2VvbS5UcmlhbmdsZS5CdWlsZEVxdWlsYXRlcmFsKFxuICAgICAgdGhpcy5wbGF5ZXIxQ29udGFpbmVyLnggKyB0aGlzLmNob29zZUNvbG9yMVRleHQud2lkdGggKyB0aGlzLmNvbG9yQm94U3BhY2luZyArICh0aGlzLmNvbG9yQm94U2l6ZSAvIDIpLFxuICAgICAgdGhpcy5wbGF5ZXIxQ29udGFpbmVyLnkgKyA1NSxcbiAgICAgIDE1LFxuICAgIClcblxuICAgIHRoaXMuY3Vyc29yMiA9IG5ldyBQaGFzZXIuR2VvbS5UcmlhbmdsZS5CdWlsZEVxdWlsYXRlcmFsKFxuICAgICAgLy8gYCsgMzBgIHRvIGJlZ2luIG9uIHNlY29uZCBjb2xvcjpcbiAgICAgIHRoaXMucGxheWVyMkNvbnRhaW5lci54ICsgdGhpcy5jaG9vc2VDb2xvcjJUZXh0LndpZHRoICsgdGhpcy5jb2xvckJveFNwYWNpbmcgKyAodGhpcy5jb2xvckJveFNpemUgLyAyKSArIDMwLFxuICAgICAgdGhpcy5wbGF5ZXIyQ29udGFpbmVyLnkgKyA1NSxcbiAgICAgIDE1LFxuICAgIClcblxuICAgIHRoaXMuY3Vyc29yR3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcyh7IGZpbGxTdHlsZTogeyBjb2xvcjogMHhGRkZGRkYgfSB9KVxuICAgIHRoaXMuY3Vyc29yR3JhcGhpY3MuZmlsbFRyaWFuZ2xlU2hhcGUodGhpcy5jdXJzb3IxKVxuICAgIHRoaXMuY3Vyc29yR3JhcGhpY3MuZmlsbFRyaWFuZ2xlU2hhcGUodGhpcy5jdXJzb3IyKVxuICB9XG5cbiAgYWRkR2FtZUluc3RydWN0aW9ucygpIHtcbiAgICB0aGlzLmFkZC50ZXh0KHRoaXMubWlkZGxlWCwgMzUwLCB0aGlzLnRleHQuZ2FtZUluc3RydWN0aW9uc0hlYWRlciwgdGhpcy5tZW51VGV4dFN0eWxlcykuc2V0T3JpZ2luKDAuNSwgMClcbiAgICB0aGlzLnRleHQuaW5zdHJ1Y3Rpb25zLmZvckVhY2goKGluc3RydWN0aW9uLCBpKSA9PlxuICAgICAgdGhpcy5hZGQudGV4dCh0aGlzLm1pZGRsZVgsIGkgKiAyMCArIDM5MCwgaW5zdHJ1Y3Rpb24sIHRoaXMubWVudVRleHRTdHlsZXMpLnNldE9yaWdpbigwLjUsIDApLFxuICAgIClcbiAgfVxuXG4gIGFkZEdhbWVQcm9tcHQoKSB7XG4gICAgdGhpcy5nYW1lUHJvbXB0ID0gdGhpcy5hZGQudGV4dCh0aGlzLm1pZGRsZVgsIDQ3MCwgdGhpcy50ZXh0LmdhbWVQcm9tcHQsIHtcbiAgICAgIC4uLnRoaXMubWVudVRleHRTdHlsZXMsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUsIDApXG5cbiAgICB0aGlzLmdhbWVQcm9tcHRHcmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKHsgbGluZVN0eWxlOiB7IGNvbG9yOiAweDk3OTc5Nywgd2lkdGg6IDIgfSB9KVxuICAgIHRoaXMuZ2FtZVByb21wdEdyYXBoaWNzLnN0cm9rZVJvdW5kZWRSZWN0KFxuICAgICAgdGhpcy5nYW1lUHJvbXB0LnggLSB0aGlzLmdhbWVQcm9tcHQud2lkdGggKiAxLjI1IC8gMixcbiAgICAgIHRoaXMuZ2FtZVByb21wdC55LFxuICAgICAgdGhpcy5nYW1lUHJvbXB0LndpZHRoICogMS4yNSxcbiAgICAgIHRoaXMuZ2FtZVByb21wdC5oZWlnaHQsXG4gICAgICA1LCAvLyBib3JkZXIgcmFkaXVzXG4gICAgKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoKSB7XG4gICAgaWYgKHRoaXMua2V5SnVzdERvd24odGhpcy5lbnRlcktleSkpIHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWUnLCB7XG4gICAgICAgIGNvbG9yMTogdGhpcy5jb2xvcnNbdGhpcy5wbGF5ZXIxQ29sb3JJbmRleF0sXG4gICAgICAgIGNvbG9yMjogdGhpcy5jb2xvcnNbdGhpcy5wbGF5ZXIyQ29sb3JJbmRleF0sXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5RCkpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcjFDb2xvckluZGV4ID09PSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggPSAwXG4gICAgICAgIHRoaXMuY3Vyc29yMS5sZWZ0IC09ICgzMCAqICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggKz0gMVxuICAgICAgICB0aGlzLmN1cnNvcjEubGVmdCArPSAzMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5QSkpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcjFDb2xvckluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggPSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxXG4gICAgICAgIHRoaXMuY3Vyc29yMS5sZWZ0ICs9ICgzMCAqICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggLT0gMVxuICAgICAgICB0aGlzLmN1cnNvcjEubGVmdCAtPSAzMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMuY3Vyc29ycy5yaWdodCkpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcjJDb2xvckluZGV4ID09PSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMucGxheWVyMkNvbG9ySW5kZXggPSAwXG4gICAgICAgIHRoaXMuY3Vyc29yMi5sZWZ0IC09ICgzMCAqICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyMkNvbG9ySW5kZXggKz0gMVxuICAgICAgICB0aGlzLmN1cnNvcjIubGVmdCArPSAzMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMuY3Vyc29ycy5sZWZ0KSkge1xuICAgICAgaWYgKHRoaXMucGxheWVyMkNvbG9ySW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIyQ29sb3JJbmRleCA9IHRoaXMuY29sb3JzLmxlbmd0aCAtIDFcbiAgICAgICAgdGhpcy5jdXJzb3IyLmxlZnQgKz0gKDMwICogKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIyQ29sb3JJbmRleCAtPSAxXG4gICAgICAgIHRoaXMuY3Vyc29yMi5sZWZ0IC09IDMwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlUGxheWVySGVhZGVyRmlsbHMoKSB7XG4gICAgdGhpcy5wbGF5ZXIxSGVhZGVyLnNldEZpbGwoYCR7dGhpcy5jb2xvcnNbdGhpcy5wbGF5ZXIxQ29sb3JJbmRleF19YClcbiAgICB0aGlzLnBsYXllcjJIZWFkZXIuc2V0RmlsbChgJHt0aGlzLmNvbG9yc1t0aGlzLnBsYXllcjJDb2xvckluZGV4XX1gKVxuXG4gICAgdGhpcy5jdXJzb3JHcmFwaGljcy5jbGVhcigpXG4gICAgdGhpcy5jdXJzb3JHcmFwaGljcy5maWxsVHJpYW5nbGVTaGFwZSh0aGlzLmN1cnNvcjEpXG4gICAgdGhpcy5jdXJzb3JHcmFwaGljcy5maWxsVHJpYW5nbGVTaGFwZSh0aGlzLmN1cnNvcjIpXG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgnV0FTRCcsICdhc3NldHMvV0FTRC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZSgnYXJyb3dLZXlzJywgJ2Fzc2V0cy9hcnJvd0tleXMucG5nJylcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFkZFNtYWxsR2FtZVRpdGxlKClcbiAgICB0aGlzLmFkZFBsYXllclNlY3Rpb25zKClcbiAgICB0aGlzLmFkZEdhbWVJbnN0cnVjdGlvbnMoKVxuICAgIHRoaXMuYWRkR2FtZVByb21wdCgpXG5cbiAgICB0aGlzLmN1cnNvcnMgPSB0aGlzLmNyZWF0ZUN1cnNvcktleXMoKVxuICAgIHRoaXMua2V5VyA9IHRoaXMuYWRkS2V5KCdXJylcbiAgICB0aGlzLmtleUEgPSB0aGlzLmFkZEtleSgnQScpXG4gICAgdGhpcy5rZXlTID0gdGhpcy5hZGRLZXkoJ1MnKVxuICAgIHRoaXMua2V5RCA9IHRoaXMuYWRkS2V5KCdEJylcbiAgICB0aGlzLmVudGVyS2V5ID0gdGhpcy5hZGRLZXkoJ0VOVEVSJylcblxuICAgIHRoaXMucGxheWVyMUNvbG9ySW5kZXggPSAwXG4gICAgdGhpcy5wbGF5ZXIyQ29sb3JJbmRleCA9IDFcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmhhbmRsZUtleVByZXNzKClcbiAgICB0aGlzLmNoYW5nZVBsYXllckhlYWRlckZpbGxzKClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjZW5lcy9tZW51LmpzIiwiaW1wb3J0IEJhc2VTY2VuZSBmcm9tICcuL2Jhc2VTY2VuZSdcbmltcG9ydCBTbmFrZSBmcm9tICcuLi9jbGFzc2VzL3NuYWtlJ1xuaW1wb3J0IEZvb2QgZnJvbSAnLi4vY2xhc3Nlcy9mb29kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgQmFzZVNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2dhbWUnKVxuICB9XG5cbiAgZ2V0IGNvdXJ0VG9wKCkge1xuICAgIHJldHVybiA2NFxuICB9XG5cbiAgZ2V0IHBsYXllcjFCb3VuZHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy5jb3VydFRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLm1pZGRsZVgsXG4gICAgICBib3R0b206IHRoaXMuZ2FtZUhlaWdodCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgfVxuICB9XG5cbiAgZ2V0IHBsYXllcjJCb3VuZHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy5jb3VydFRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLmdhbWVXaWR0aCxcbiAgICAgIGJvdHRvbTogdGhpcy5nYW1lSGVpZ2h0LFxuICAgICAgbGVmdDogdGhpcy5taWRkbGVYLFxuICAgIH1cbiAgfVxuXG4gIGFkZENvdXJ0Qm91bmRhcmllcygpIHtcbiAgICBjb25zdCBob3Jpem9udGFsTGluZTEgPSBuZXcgUGhhc2VyLkdlb20uTGluZSgwLCB0aGlzLmNvdXJ0VG9wLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5jb3VydFRvcClcbiAgICBjb25zdCBob3Jpem9udGFsTGluZTIgPSBuZXcgUGhhc2VyLkdlb20uTGluZSgwLCB0aGlzLmdhbWVIZWlnaHQgLSAxLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0IC0gMSlcbiAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBuZXcgUGhhc2VyLkdlb20uTGluZSh0aGlzLm1pZGRsZVgsIHRoaXMuY291cnRUb3AgKyAxLCB0aGlzLm1pZGRsZVgsIHRoaXMuZ2FtZUhlaWdodCAtIDIpXG5cbiAgICBjb25zdCBsaW5lR3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcyh7IGxpbmVTdHlsZTogeyBjb2xvcjogMHhGRkZGRkYgfSB9KVxuICAgIGxpbmVHcmFwaGljcy5zdHJva2VMaW5lU2hhcGUoaG9yaXpvbnRhbExpbmUxKVxuICAgIGxpbmVHcmFwaGljcy5zdHJva2VMaW5lU2hhcGUoaG9yaXpvbnRhbExpbmUyKVxuICAgIGxpbmVHcmFwaGljcy5zdHJva2VMaW5lU2hhcGUodmVydGljYWxMaW5lKVxuICB9XG5cbiAgaW5pdFNjb3JlcygpIHtcbiAgICB0aGlzLnNjb3JlMURpc3BsYXkgPSB0aGlzLmFkZC50ZXh0KHRoaXMubWlkZGxlWCAtIDM1LCB0aGlzLm1pZGRsZVkgKyAodGhpcy5jb3VydFRvcCAvIDIpLCB0aGlzLnNjb3JlMSwge1xuICAgICAgLi4udGhpcy50ZXh0U3R5bGVzMixcbiAgICAgIGZvbnRTaXplOiAnNDBweCcsXG4gICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KVxuXG4gICAgdGhpcy5zY29yZTJEaXNwbGF5ID0gdGhpcy5hZGQudGV4dCh0aGlzLm1pZGRsZVggKyA0MCwgdGhpcy5taWRkbGVZICsgKHRoaXMuY291cnRUb3AgLyAyKSwgdGhpcy5zY29yZTIsIHtcbiAgICAgIC4uLnRoaXMudGV4dFN0eWxlczIsXG4gICAgICBmb250U2l6ZTogJzQwcHgnLFxuICAgIH0pLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlMSgpIHtcbiAgICB0aGlzLnNjb3JlMSArPSAxXG5cbiAgICBpZiAoIXRoaXMuaXNTY29yZTFEb3VibGVEaWdpdHMgJiYgdGhpcy5zY29yZTEudG9TdHJpbmcoKS5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmlzU2NvcmUxRG91YmxlRGlnaXRzID0gdHJ1ZVxuICAgICAgdGhpcy5zY29yZTFEaXNwbGF5LnggLT0gMTVcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTY29yZTFUcmlwbGVEaWdpdHMgJiYgdGhpcy5zY29yZTEudG9TdHJpbmcoKS5sZW5ndGggPiAyKSB7XG4gICAgICB0aGlzLmlzU2NvcmUxVHJpcGxlRGlnaXRzID0gdHJ1ZVxuICAgICAgdGhpcy5zY29yZTFEaXNwbGF5LnggLT0gMjBcbiAgICB9XG5cbiAgICB0aGlzLnNjb3JlMURpc3BsYXkuc2V0VGV4dCh0aGlzLnNjb3JlMSlcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlMigpIHtcbiAgICB0aGlzLnNjb3JlMiArPSAxXG5cbiAgICBpZiAoIXRoaXMuaXNTY29yZTJEb3VibGVEaWdpdHMgJiYgdGhpcy5zY29yZTIudG9TdHJpbmcoKS5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmlzU2NvcmUyRG91YmxlRGlnaXRzID0gdHJ1ZVxuICAgICAgdGhpcy5zY29yZTJEaXNwbGF5LnggKz0gMTVcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTY29yZTJUcmlwbGVEaWdpdHMgJiYgdGhpcy5zY29yZTIudG9TdHJpbmcoKS5sZW5ndGggPiAyKSB7XG4gICAgICB0aGlzLmlzU2NvcmUyVHJpcGxlRGlnaXRzID0gdHJ1ZVxuICAgICAgdGhpcy5zY29yZTJEaXNwbGF5LnggKz0gMjBcbiAgICB9XG5cbiAgICB0aGlzLnNjb3JlMkRpc3BsYXkuc2V0VGV4dCh0aGlzLnNjb3JlMilcbiAgfVxuXG4gIHJlc2V0QmFsbChkaXJlY3Rpb25JbnRlZ2VyKSB7XG4gICAgdGhpcy5iYWxsLnNldFZlbG9jaXR5KDApXG4gICAgdGhpcy5iYWxsLnggPSB0aGlzLm1pZGRsZVhcbiAgICB0aGlzLmJhbGwueSA9IHRoaXMubWlkZGxlWSArICh0aGlzLmNvdXJ0VG9wIC8gMilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYmFsbC5zZXRWZWxvY2l0eShkaXJlY3Rpb25JbnRlZ2VyICogMTUwLCAxNTApLCAxMDAwKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoKSB7XG4gICAgaWYgKHRoaXMua2V5SnVzdERvd24odGhpcy5rZXlEKSkge1xuICAgICAgdGhpcy5zbmFrZTEuZ29SaWdodCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5QSkpIHtcbiAgICAgIHRoaXMuc25ha2UxLmdvTGVmdCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMua2V5VykpIHtcbiAgICAgIHRoaXMuc25ha2UxLmdvVXAoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmtleVMpKSB7XG4gICAgICB0aGlzLnNuYWtlMS5nb0Rvd24oKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMuY3Vyc29ycy5yaWdodCkpIHtcbiAgICAgIHRoaXMuc25ha2UyLmdvUmlnaHQoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmN1cnNvcnMubGVmdCkpIHtcbiAgICAgIHRoaXMuc25ha2UyLmdvTGVmdCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmtleUp1c3REb3duKHRoaXMuY3Vyc29ycy51cCkpIHtcbiAgICAgIHRoaXMuc25ha2UyLmdvVXAoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlKdXN0RG93bih0aGlzLmN1cnNvcnMuZG93bikpIHtcbiAgICAgIHRoaXMuc25ha2UyLmdvRG93bigpXG4gICAgfVxuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvZHknLCAnYXNzZXRzL2JvZHkucG5nJylcblxuICAgIHRoaXMuc2NvcmUxID0gMFxuICAgIHRoaXMuc2NvcmUyID0gMFxuICAgIHRoaXMuaXNTY29yZTFEb3VibGVEaWdpdHMgPSBmYWxzZVxuICAgIHRoaXMuaXNTY29yZTJEb3VibGVEaWdpdHMgPSBmYWxzZVxuICAgIHRoaXMuaXNTY29yZTFUcmlwbGVEaWdpdHMgPSBmYWxzZVxuICAgIHRoaXMuaXNTY29yZTJUcmlwbGVEaWdpdHMgPSBmYWxzZVxuICAgIC8vIE9oIG1hbiBJIGhvcGUgbm8gb25lIGlzIHBsYXlpbmcgaW50byBxdWFkcnVwbGUgZGlnaXRzLi4uXG4gIH1cblxuICBoaXRCYWxsKHNuYWtlLCBiYWxsLCBzbmFrZUJvZHkpIHtcbiAgICBzbmFrZUJvZHkuc2V0VGludCgweEZGRkZGRilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNuYWtlQm9keS5zZXRUaW50KHNuYWtlLmNvbG9yKSwgMTAwKVxuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICB0aGlzLnBoeXNpY3Mud29ybGQuc2V0Qm91bmRzKDAsIHRoaXMuY291cnRUb3AsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmNvdXJ0VG9wKVxuICAgIHRoaXMucGh5c2ljcy53b3JsZC5zZXRCb3VuZHNDb2xsaXNpb24oZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMuY29sb3IxID0gdGhpcy5oZXhTdHJpbmdUb0NvbG9yKGRhdGEuY29sb3IxKVxuICAgIHRoaXMuY29sb3IyID0gdGhpcy5oZXhTdHJpbmdUb0NvbG9yKGRhdGEuY29sb3IyKVxuICAgIHRoaXMuYWRkU21hbGxHYW1lVGl0bGUoKVxuICAgIHRoaXMuYWRkQ291cnRCb3VuZGFyaWVzKClcbiAgICB0aGlzLmluaXRTY29yZXMoKVxuXG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5jcmVhdGVDdXJzb3JLZXlzKClcbiAgICB0aGlzLmtleVcgPSB0aGlzLmFkZEtleSgnVycpXG4gICAgdGhpcy5rZXlBID0gdGhpcy5hZGRLZXkoJ0EnKVxuICAgIHRoaXMua2V5UyA9IHRoaXMuYWRkS2V5KCdTJylcbiAgICB0aGlzLmtleUQgPSB0aGlzLmFkZEtleSgnRCcpXG5cbiAgICB0aGlzLnNuYWtlMSA9IG5ldyBTbmFrZSh0aGlzLCAxMCwgMTAsIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yMSxcbiAgICAgIGJvdW5kczogdGhpcy5wbGF5ZXIxQm91bmRzLFxuICAgIH0pXG5cbiAgICB0aGlzLnNuYWtlMiA9IG5ldyBTbmFrZSh0aGlzLCAzMCwgMTAsIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yMixcbiAgICAgIGJvdW5kczogdGhpcy5wbGF5ZXIyQm91bmRzLFxuICAgIH0pXG5cbiAgICB0aGlzLmZvb2QxID0gbmV3IEZvb2QodGhpcywgMTAsIDIwLCB7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvcjEsXG4gICAgICBib3VuZHM6IHRoaXMucGxheWVyMUJvdW5kcyxcbiAgICB9KVxuXG4gICAgdGhpcy5mb29kMiA9IG5ldyBGb29kKHRoaXMsIDMwLCAyMCwge1xuICAgICAgY29sb3I6IHRoaXMuY29sb3IyLFxuICAgICAgYm91bmRzOiB0aGlzLnBsYXllcjJCb3VuZHMsXG4gICAgfSlcblxuICAgIHRoaXMuYmFsbCA9IHRoaXMucGh5c2ljcy5hZGQuaW1hZ2UoNDAwLCAyMDAsICdib2R5JylcbiAgICAgIC5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSlcbiAgICAgIC5zZXRTY2FsZSgxLjYpXG4gICAgICAuc2V0Qm91bmNlKDEpXG4gICAgICAuc2V0VmVsb2NpdHkoMTUwLCAxNTApXG5cbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYmFsbCwgdGhpcy5zbmFrZTEuYm9keSwgdGhpcy5oaXRCYWxsLmJpbmQodGhpcywgdGhpcy5zbmFrZTEpLCBudWxsLCB0aGlzKVxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5iYWxsLCB0aGlzLnNuYWtlMi5ib2R5LCB0aGlzLmhpdEJhbGwuYmluZCh0aGlzLCB0aGlzLnNuYWtlMiksIG51bGwsIHRoaXMpXG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoKVxuICAgIGlmICh0aGlzLnNuYWtlMS51cGRhdGUodGltZSkpIHtcbiAgICAgIHRoaXMuc25ha2UxLmhhbmRsZUludGVyYWN0aW9ucyh0aGlzLmZvb2QxKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNuYWtlMi51cGRhdGUodGltZSkpIHtcbiAgICAgIHRoaXMuc25ha2UyLmhhbmRsZUludGVyYWN0aW9ucyh0aGlzLmZvb2QyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJhbGwueCA8IDApIHtcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUyKClcbiAgICAgIHRoaXMucmVzZXRCYWxsKDEpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmFsbC54ID4gdGhpcy5nYW1lV2lkdGgpIHtcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUxKClcbiAgICAgIHRoaXMucmVzZXRCYWxsKC0xKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjZW5lcy9nYW1lLmpzIiwiY29uc3QgVVAgPSAnVVAnXG5jb25zdCBET1dOID0gJ0RPV04nXG5jb25zdCBMRUZUID0gJ0xFRlQnXG5jb25zdCBSSUdIVCA9ICdSSUdIVCdcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBoYXNlci5DbGFzcyh7XG4gIGluaXRpYWxpemUoc2NlbmUsIHgsIHksIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcblxuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yXG4gICAgdGhpcy5ib3VuZHMgPSBvcHRpb25zLmJvdW5kc1xuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZSB8fCAxNlxuICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNpemUgLyAxMCAvLyB0aGUgYGJvZHlgIGFzc2V0IGlzIDEweDEwXG5cbiAgICB0aGlzLmhlYWRQb3NpdGlvbiA9IG5ldyBQaGFzZXIuR2VvbS5Qb2ludCh4LCB5KVxuICAgIHRoaXMudGFpbCA9IG5ldyBQaGFzZXIuR2VvbS5Qb2ludCh4LCB5KVxuXG4gICAgdGhpcy5ib2R5ID0gc2NlbmUucGh5c2ljcy5hZGQuZ3JvdXAoeyBpbW1vdmFibGU6IHRydWUgfSlcblxuICAgIHRoaXMuaGVhZCA9IHRoaXMuYm9keS5jcmVhdGUoeCAqIHRoaXMuc2l6ZSwgeSAqIHRoaXMuc2l6ZSwgJ2JvZHknKVxuICAgIHRoaXMuaGVhZFxuICAgICAgLnNldFNjYWxlKHRoaXMuc2NhbGUpXG4gICAgICAuc2V0T3JpZ2luKDApXG4gICAgICAuc2V0VGludCh0aGlzLmNvbG9yKVxuXG5cbiAgICB0aGlzLm1vdmVzUGVyU2Vjb25kID0gMTJcblxuICAgIHRoaXMubmV4dFVwZGF0ZVRpbWUgPSAwXG5cbiAgICB0aGlzLmRpcmVjdGlvbiA9IERPV05cbiAgICB0aGlzLm5leHREaXJlY3Rpb24gPSBET1dOXG4gIH0sXG5cbiAgZ29MZWZ0KCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gVVAgfHwgdGhpcy5kaXJlY3Rpb24gPT09IERPV04pIHtcbiAgICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IExFRlRcbiAgICB9XG4gIH0sXG5cbiAgZ29SaWdodCgpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFVQIHx8IHRoaXMuZGlyZWN0aW9uID09PSBET1dOKSB7XG4gICAgICB0aGlzLm5leHREaXJlY3Rpb24gPSBSSUdIVFxuICAgIH1cbiAgfSxcblxuICBnb1VwKCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gUklHSFQpIHtcbiAgICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IFVQXG4gICAgfVxuICB9LFxuXG4gIGdvRG93bigpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQgfHwgdGhpcy5kaXJlY3Rpb24gPT09IFJJR0hUKSB7XG4gICAgICB0aGlzLm5leHREaXJlY3Rpb24gPSBET1dOXG4gICAgfVxuICB9LFxuXG4gIHdyYXBWZXJ0aWNhbFBvc2l0aW9uKHkpIHtcbiAgICByZXR1cm4gUGhhc2VyLk1hdGguV3JhcCh5LCB0aGlzLmJvdW5kcy50b3AgLyB0aGlzLnNpemUsIHRoaXMuYm91bmRzLmJvdHRvbSAvIHRoaXMuc2l6ZSlcbiAgfSxcblxuICB3cmFwSG9yaXpvbnRhbFBvc2l0aW9uKHgpIHtcbiAgICByZXR1cm4gUGhhc2VyLk1hdGguV3JhcCh4LCB0aGlzLmJvdW5kcy5sZWZ0IC8gdGhpcy5zaXplLCB0aGlzLmJvdW5kcy5yaWdodCAvIHRoaXMuc2l6ZSlcbiAgfSxcblxuICBtb3ZlKHRpbWUpIHtcbiAgICBzd2l0Y2godGhpcy5uZXh0RGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIFVQOlxuICAgICAgICB0aGlzLmhlYWRQb3NpdGlvbi55ID0gdGhpcy53cmFwVmVydGljYWxQb3NpdGlvbih0aGlzLmhlYWRQb3NpdGlvbi55IC0gMSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgRE9XTjpcbiAgICAgICAgdGhpcy5oZWFkUG9zaXRpb24ueSA9IHRoaXMud3JhcFZlcnRpY2FsUG9zaXRpb24odGhpcy5oZWFkUG9zaXRpb24ueSArIDEpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIExFRlQ6XG4gICAgICAgIHRoaXMuaGVhZFBvc2l0aW9uLnggPSB0aGlzLndyYXBIb3Jpem9udGFsUG9zaXRpb24odGhpcy5oZWFkUG9zaXRpb24ueCAtIDEpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFJJR0hUOlxuICAgICAgICB0aGlzLmhlYWRQb3NpdGlvbi54ID0gdGhpcy53cmFwSG9yaXpvbnRhbFBvc2l0aW9uKHRoaXMuaGVhZFBvc2l0aW9uLnggKyAxKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5uZXh0RGlyZWN0aW9uXG5cbiAgICBQaGFzZXIuQWN0aW9ucy5TaGlmdFBvc2l0aW9uKFxuICAgICAgdGhpcy5ib2R5LmdldENoaWxkcmVuKCksXG4gICAgICB0aGlzLmhlYWRQb3NpdGlvbi54ICogdGhpcy5zaXplLFxuICAgICAgdGhpcy5oZWFkUG9zaXRpb24ueSAqIHRoaXMuc2l6ZSxcbiAgICAgIDEsXG4gICAgICB0aGlzLnRhaWwsXG4gICAgKVxuXG4gICAgdGhpcy5uZXh0VXBkYXRlVGltZSA9IHRpbWUgKyAoMTAwMCAvIHRoaXMubW92ZXNQZXJTZWNvbmQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9LFxuXG4gIG92ZXJsYXBzV2l0aChpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oZWFkLnggPT09IGl0ZW0ueCAmJiB0aGlzLmhlYWQueSA9PT0gaXRlbS55XG4gIH0sXG5cbiAgaGFuZGxlT3ZlcmxhcFNlbGYoKSB7XG4gICAgY29uc3Qgc3RyYW5kZWRDaGlsZHJlbiA9IFtdXG5cbiAgICBsZXQgcmVtb3ZlVGhlUmVzdCA9IGZhbHNlXG4gICAgdGhpcy5ib2R5LmNoaWxkcmVuLmVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocmVtb3ZlVGhlUmVzdCkge1xuICAgICAgICB0aGlzLmJvZHkucmVtb3ZlKGNoaWxkKVxuICAgICAgICBzdHJhbmRlZENoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3ZlcmxhcHNXaXRoKGNoaWxkKSkge1xuICAgICAgICByZW1vdmVUaGVSZXN0ID0gdHJ1ZVxuICAgICAgICB0aGlzLmJvZHkucmVtb3ZlKGNoaWxkKVxuICAgICAgICBzdHJhbmRlZENoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHN0cmFuZGVkQ2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWRlRHVyYXRpb24gPSAzMDBcbiAgICAgIGNvbnN0IGRlbGF5ID0gaW5kZXggKiAyMFxuXG4gICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICB0YXJnZXRzOiBjaGlsZCxcbiAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgIGVhc2U6ICdTaW5lLmVhc2VJbk91dCcsXG4gICAgICAgIGR1cmF0aW9uOiBmYWRlRHVyYXRpb24sXG4gICAgICAgIGRlbGF5LFxuICAgICAgfSlcblxuICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcbiAgICAgICAgZGVsYXk6IGZhZGVEdXJhdGlvbiArIGRlbGF5LFxuICAgICAgICBjYWxsYmFjazogY2hpbGQuZGVzdHJveSxcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgaGFuZGxlSW50ZXJhY3Rpb25zKGZvb2QpIHtcbiAgICBpZiAodGhpcy5vdmVybGFwc1dpdGgoZm9vZCkpIHtcbiAgICAgIHRoaXMuZ3JvdygpXG4gICAgICBmb29kLmVhdCgpXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVPdmVybGFwU2VsZigpXG4gIH0sXG5cbiAgZ3JvdyhhbW91bnQgPSAxKSB7XG4gICAgWy4uLkFycmF5KGFtb3VudCldLmZvckVhY2goKCkgPT4ge1xuICAgICAgdGhpcy5ib2R5XG4gICAgICAgIC5jcmVhdGUodGhpcy50YWlsLngsIHRoaXMudGFpbC55LCAnYm9keScpXG4gICAgICAgIC5zZXRTY2FsZSh0aGlzLnNjYWxlKVxuICAgICAgICAuc2V0T3JpZ2luKDApXG4gICAgICAgIC5zZXRUaW50KHRoaXMuY29sb3IpXG4gICAgfSlcbiAgfSxcblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aW1lID49IHRoaXMubmV4dFVwZGF0ZVRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vdmUodGltZSlcbiAgICB9XG4gIH0sXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzZXMvc25ha2UuanMiLCJleHBvcnQgZGVmYXVsdCBuZXcgUGhhc2VyLkNsYXNzKHtcbiAgRXh0ZW5kczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlLFxuXG4gIGluaXRpYWxpemUoc2NlbmUsIHgsIHksIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UuY2FsbCh0aGlzLCBzY2VuZSlcblxuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yXG4gICAgdGhpcy5ib3VuZHMgPSBvcHRpb25zLmJvdW5kc1xuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZSB8fCAxNlxuICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNpemUgLyAxMCAvLyB0aGUgYGJvZHlgIGFzc2V0IGlzIDEweDEwXG5cbiAgICB0aGlzLnNldFRleHR1cmUoJ2JvZHknKVxuICAgIHRoaXMuc2V0UG9zaXRpb24oeCAqIHRoaXMuc2l6ZSwgeSAqIHRoaXMuc2l6ZSlcbiAgICB0aGlzLnNldFNjYWxlKHRoaXMuc2NhbGUpXG4gICAgdGhpcy5zZXRPcmlnaW4oMClcbiAgICB0aGlzLnNldFRpbnQodGhpcy5jb2xvcilcbiAgICB0aGlzLnNldEFscGhhKDAuOSlcblxuICAgIHRoaXMudG90YWwgPSAwXG5cbiAgICBzY2VuZS5jaGlsZHJlbi5hZGQodGhpcylcbiAgfSxcblxuICByZXBvc2l0aW9uKHgsIHkpIHtcbiAgICB4ID0geCB8fCBQaGFzZXIuTWF0aC5CZXR3ZWVuKHRoaXMuYm91bmRzLmxlZnQgLyB0aGlzLnNpemUsICh0aGlzLmJvdW5kcy5yaWdodCAvIHRoaXMuc2l6ZSkgLSAxKVxuICAgIHkgPSB5IHx8IFBoYXNlci5NYXRoLkJldHdlZW4odGhpcy5ib3VuZHMudG9wIC8gdGhpcy5zaXplLCAodGhpcy5ib3VuZHMuYm90dG9tIC8gdGhpcy5zaXplKSAtIDEpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHggKiB0aGlzLnNpemUsIHkgKiB0aGlzLnNpemUpXG4gIH0sXG5cbiAgZWF0KGFtb3VudCA9IDEpIHtcbiAgICB0aGlzLnRvdGFsICs9IGFtb3VudFxuXG4gICAgdGhpcy5yZXBvc2l0aW9uKClcbiAgfSxcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xhc3Nlcy9mb29kLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgZ2V0IGdhbWVUaXRsZSgpIHtcbiAgICByZXR1cm4gJ091cm8nXG4gIH1cblxuICBnZXQgZ2FtZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnN5cy5nYW1lLmNvbmZpZy53aWR0aFxuICB9XG5cbiAgZ2V0IGdhbWVIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3lzLmdhbWUuY29uZmlnLmhlaWdodFxuICB9XG5cbiAgZ2V0IG1pZGRsZVgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVdpZHRoIC8gMlxuICB9XG5cbiAgZ2V0IG1pZGRsZVkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZUhlaWdodCAvIDJcbiAgfVxuXG4gIGdldCB0ZXh0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb250RmFtaWx5OiAnQ2FiaW4nLFxuICAgICAgY29sb3I6ICcjRjZGRUZGJyxcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dFN0eWxlczIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbnRGYW1pbHk6IFwiJ1ByZXNzIFN0YXJ0IDJQJ1wiLCAvLyBTZWUgYGRvY3Mvbm90ZXMubWRgIGZvciB3aHkgdGhpcyBpcyB3cmFwcGVkIGluIDIgcXVvdGVzXG4gICAgICBjb2xvcjogJyMzMkVFRjgnLFxuICAgIH1cbiAgfVxuXG4gIGFkZFNtYWxsR2FtZVRpdGxlKCkge1xuICAgIHRoaXMuYWRkLnRleHQoXG4gICAgICB0aGlzLm1pZGRsZVgsXG4gICAgICAwLFxuICAgICAgdGhpcy5nYW1lVGl0bGUudG9VcHBlckNhc2UoKSxcbiAgICAgIHtcbiAgICAgICAgLi4udGhpcy50ZXh0U3R5bGVzLFxuICAgICAgICBmb250U2l6ZTogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgIH0sXG4gICAgKVxuICAgICAgLnNldE9yaWdpbigwLjUsIDApXG4gICAgICAuc2V0U2hhZG93KDEsIDEsICcjRkZGJywgMTAsIHRydWUsIHRydWUpXG4gIH1cblxuICBjcmVhdGVDdXJzb3JLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKVxuICB9XG5cbiAgYWRkS2V5KGtleSkge1xuICAgIHJldHVybiB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXNba2V5XSlcbiAgfVxuXG4gIGtleUp1c3REb3duKGtleSkge1xuICAgIHJldHVybiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24oa2V5KVxuICB9XG5cbiAgaGV4U3RyaW5nVG9Db2xvcihoZXgpIHtcbiAgICBpZiAoIWhleC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW2hleFN0cmluZ1RvQ29sb3JdOiAke2hleH0gaXMgbm90IGEgdmFsaWQgaGV4IHN0cmluZy5gKVxuXG4gICAgICByZXR1cm4gaGV4XG4gICAgfVxuXG4gICAgcmV0dXJuIFBoYXNlci5EaXNwbGF5LkNvbG9yLkhleFN0cmluZ1RvQ29sb3IoaGV4KS5jb2xvclxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NlbmVzL2Jhc2VTY2VuZS5qcyIsImltcG9ydCAncGhhc2VyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vc2NlbmVzL3RpdGxlJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9zY2VuZXMvbWVudSdcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NlbmVzL2dhbWUnXG5cbmNvbnN0IGdhbWVDb25maWcgPSB7XG4gIHdpZHRoOiA4MDAsXG4gIGhlaWdodDogNTYwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDcyQzQwJyxcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnXG4gIH0sXG4gIHNjZW5lOiBbVGl0bGUsIE1lbnUsIEdhbWVdLFxufVxuXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9