/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _ReactDOM = ReactDOM,
	    render = _ReactDOM.render;


	render(React.createElement(
	  "h1",
	  { id: "title",
	    className: "header",
	    style: { color: 'orange', fontFamily: 'verdana' } },
	  "Snake Ladder Board"
	), document.getElementById('react-header'));

	var Player = function () {
	  function Player(name, level) {
	    _classCallCheck(this, Player);

	    this.name = name;
	    this.level = level;
	  }

	  _createClass(Player, [{
	    key: "play",
	    value: function play(dice) {
	      return dice();
	    }
	  }]);

	  return Player;
	}();

	var dice = function dice() {
	  var min = Math.ceil(1);
	  var max = Math.floor(13);
	  return Math.floor(Math.random() * (max - min)) + min;
	};

	var player = new Player("kiran", "beginner");
	console.log(player.play(dice));

	var Game = {
	  createBoard: function createBoard() {
	    for (var i = 100; i >= 1; i--) {
	      var div = document.createElement('div');
	      div.innerHTML = i;
	      div.onClick = function () {
	        alert("Player Information");
	      };
	      document.getElementsByTagName('section')[0].appendChild(div);
	    }
	  }
	};

	Game.createBoard();

/***/ }
/******/ ]);