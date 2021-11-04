/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/src/components/App.js: Unexpected token (17:12)\\n\\n  15 |     render() {\\n  16 |         return (\\n> 17 |             <div className=\\\"Page-wrapper\\\">\\n     |             ^\\n  18 |                 <h2>Super Nova App</h2>\\n  19 |                 <Offspring\\n  20 |                     favoriteTeacher={this.state.name}\\n    at Parser._raise (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:745:17)\\n    at Parser.raiseWithData (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:738:17)\\n    at Parser.raise (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:732:17)\\n    at Parser.unexpected (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:8806:16)\\n    at Parser.parseExprAtom (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:10129:20)\\n    at Parser.parseExprSubscripts (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9655:23)\\n    at Parser.parseMaybeUnary (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Parser.parseExprOps (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Parser.parseMaybeConditional (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Parser.parseMaybeAssign (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Parser.parseParenAndDistinguishExpression (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:10266:28)\\n    at Parser.parseExprAtom (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:10006:21)\\n    at Parser.parseExprSubscripts (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9655:23)\\n    at Parser.parseMaybeUnary (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Parser.parseExprOps (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Parser.parseMaybeConditional (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Parser.parseMaybeAssign (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Parser.parseExpression (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:9385:23)\\n    at Parser.parseReturnStatement (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11522:28)\\n    at Parser.parseStatementContent (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11203:21)\\n    at Parser.parseStatement (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11155:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11730:25)\\n    at Parser.parseBlockBody (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11716:10)\\n    at Parser.parseBlock (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11700:10)\\n    at Parser.parseFunctionBody (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:10707:24)\\n    at Parser.parseFunctionBodyAndFinish (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:10690:10)\\n    at Parser.parseMethod (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:10652:10)\\n    at Parser.pushClassMethod (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12155:30)\\n    at Parser.parseClassMemberWithIsStatic (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12072:12)\\n    at Parser.parseClassMember (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12014:10)\");\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

/******/ });