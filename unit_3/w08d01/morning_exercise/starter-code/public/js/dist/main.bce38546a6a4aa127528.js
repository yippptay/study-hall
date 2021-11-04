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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/src/main.js: Support for the experimental syntax 'classProperties' isn't currently enabled (3:10):\\n\\n  1 | const swag = ['ga hat', 'ga notebook', 'my natural coolness'];\\n  2 | class Test {\\n> 3 |     main = () => {\\n    |          ^\\n  4 |         console.log(swag);\\n  5 |     };\\n  6 | }\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\\n    at Parser._raise (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:745:17)\\n    at Parser.raiseWithData (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:738:17)\\n    at Parser.expectPlugin (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:8811:18)\\n    at Parser.parseClassProperty (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12184:12)\\n    at Parser.pushClassProperty (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12144:30)\\n    at Parser.parseClassMemberWithIsStatic (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12077:14)\\n    at Parser.parseClassMember (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12014:10)\\n    at /home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11959:14\\n    at Parser.withTopicForbiddingContext (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11030:14)\\n    at Parser.parseClassBody (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11936:10)\\n    at Parser.parseClass (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11910:22)\\n    at Parser.parseStatementContent (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11197:21)\\n    at Parser.parseStatement (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11155:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11730:25)\\n    at Parser.parseBlockBody (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11716:10)\\n    at Parser.parseTopLevel (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:11086:10)\\n    at Parser.parse (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12767:10)\\n    at parse (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/parser/lib/index.js:12820:38)\\n    at parser (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/gensync/index.js:254:32)\\n    at /home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/gensync/index.js:266:13\\n    at async.call.result.err.err (/home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/gensync/index.js:216:11)\\n    at /home/alexmerced/development/GA/SEIR-Nova/unit_3/w08d01/morning_exercise/starter-code/node_modules/gensync/index.js:184:28\");\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });