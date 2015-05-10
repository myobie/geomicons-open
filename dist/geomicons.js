var Geomicons =
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var paths = __webpack_require__(31);
	var toString = __webpack_require__(2);
	var inject = __webpack_require__(3);

	module.exports = {
	  paths: paths,
	  toString: toString,
	  inject: inject
	};




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M3 8 A3 3 0 0 0 9 8 A3 3 0 0 0 3 8 M12 6 L28 6 L28 10 L12 10z M3 16 A3 3 0 0 0 9 16 A3 3 0 0 0 3 16 M12 14 L28 14 L28 18 L12 18z M3 24 A3 3 0 0 0 9 24 A3 3 0 0 0 3 24 M12 22 L28 22 L28 26 L12 26z'
	].join(' ');



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	var paths = __webpack_require__(31); 
	var camelCase = __webpack_require__(60);
	var error = __webpack_require__(61);

	module.exports = function(key) {

	  var string = '';
	  var d = paths[camelCase(key)] || false;

	  if (!d) {
	    error(key);
	    return false;
	  }

	  string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="fill:currentcolor">\n' +
	               '<path d="' + d + '"/>\n' +
	               '</svg>';

	  return string;

	};



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	var camelCase = __webpack_require__(60);
	var paths = __webpack_require__(31);

	function inject(el, pathdata) {

	  var svg;
	  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	  if (el.tagName == 'svg') {
	    svg = el.cloneNode(true);
	  } else {
	    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	    for (var i = 0; i < el.attributes.length; i++) {
	      svg.setAttribute(el.attributes[i].name, el.attributes[i].value);
	    }
	  }

	  svg.setAttribute('viewBox', '0 0 32 32');
	  svg.setAttribute('style', 'fill:currentcolor');
	  path.setAttribute('d', pathdata);
	  svg.appendChild(path);

	  el.parentNode.replaceChild(svg, el);

	};

	module.exports = function(elements) {

	  if (!elements.length) elements = [elements];

	  if (typeof document !== 'undefined') {
	    for (var i = 0; i < elements.length; i++) {
	      var key = elements[i].getAttribute('data-icon');
	      key = camelCase(key);
	      var d = paths[key];
	      if (!d) {
	        error(key);
	        return false;
	      }
	      inject(elements[i], d);
	    }
	  } else {
	    console.error('geomicons.inject() only works in a browser context');
	    return false;
	  }

	};



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M6 2 L26 2 L26 30',
	  'L16 24 L6 30 Z',
	].join(' ');



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 4 L6 4 L6 2 A2 2 0 0 1 10 2 L10 4 L22 4 L22 2 A2 2 0 0 1 26 2 L26 4 L30 4 L30 10 L2 10 M2 12 L30 12 L30 30 L2 30',
	].join(' ');



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 6 L8 6 L10 2 L22 2 L24 6 L32 6 L32 28 L0 28 z M9 17 A7 7 0 0 0 23 17 A7 7 0 0 0 9 17'
	].join(' ');



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M32 16 A16 12 0 0 0 0 16 A16 12 0 0 0 16 28 L18 28 C20 30 24 32 28 32 C27 31 26 28 26 25.375 L26 25.375 A16 12 0 0 0 32 16'
	].join(' ');



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z'
	].join(' ');



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M1 12 L16 26 L31 12 L27 8 L16 18 L5 8 z'
	].join(' ');



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z'
	].join(' ');



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z'
	].join(' ');



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z'
	].join(' ');



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 28 16 A12 12 0 0 1 16 28 A12 12 0 0 1 4 16 A12 12 0 0 1 16 4 M14 6 L14 17.25 L22 22 L24.25 18.5 L18 14.75 L18 6z'
	].join(' ');



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z'
	].join(' ');



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M7 14 A7 7 0 0 0 0 21 A7 7 0 0 0 7 28 H27 A5 5 0 0 0 32 23 A5 5 0 0 0 27 18 A10 10 0 0 0 28 14 A10 10 0 0 0 18 4 A10 10 0 0 0 8 14 A7 7 0 0 0 7 14'
	].join(' ');



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M14 0 H18 L19 6 L20.707 6.707 L26 3.293 L28.707 6 L25.293 11.293 L26 13 L32 14 V18 L26 19 L25.293 20.707 L28.707 26 L26 28.707 L20.707 25.293 L19 26 L18 32 L14 32 L13 26 L11.293 25.293 L6 28.707 L3.293 26 L6.707 20.707 L6 19 L0 18 L0 14 L6 13 L6.707 11.293 L3.293 6 L6 3.293 L11.293 6.707 L13 6 L14 0 z M16 10 A6 6 0 0 0 16 22 A6 6 0 0 0 16 10'
	].join(' ');



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L16 4 L16 8 L8 8 L8 24 L24 24 L24 16 L28 16 L28 28 L4 28 z M26 2 L30 6 L16 20 L12 20 L12 16 z'
	].join(' ');



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25'
	].join(' ');



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 4 L28 4 L28 16 L24 12 L20 16 L16 12 L20 8z M4 16 L8 20 L12 16 L16 20 L12 24 L16 28 L4 28z'
	].join(' ');



/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L12 4 L12 8 L8 8 L8 24 L24 24 L24 20 L28 20 L28 28 L4 28 z M16 4 L28 4 L28 16 L24 12 L16 20 L12 16 L20 8z'
	].join(' ');



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z'
	].join(' ');



/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 2 L4 30 L28 30 L28 10 L20 2 z'
	].join(' ');



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 4 L0 28 L32 28 L32 8 L16 8 L12 4 z'
	].join(' ');



/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 18 L30 2 L14 30 L14 18z'
	].join(' ');



/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z'
	].join(' ');



/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z'
	].join(' ');



/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 10 C0 6, 3 2, 8 2 C12 2, 15 5, 16 6 C17 5, 20 2, 24 2 C30 2, 32 6, 32 10 C32 18, 18 29, 16 30 C14 29, 0 18, 0 10'
	].join(' ');



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z'
	].join(' ');



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6'
	].join(' ');



/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 16 A8 8 0 0 1 8 8 L14 8 A8 8 0 0 1 22 16 L18 16 A4 4 0 0 0 14 12 L8 12 A4 4 0 0 0 4 16 A4 4 0 0 0 8 20 L10 24 L8 24 A8 8 0 0 1 0 16z M22 8 L24 8 A8 8 0 0 1 32 16 A8 8 0 0 1 24 24 L18 24 A8 8 0 0 1 10 16 L14 16 A4 4 0 0 0 18 20 L24 20 A4 4 0 0 0 28 16 A4 4 0 0 0 24 12z'
	].join(' ');



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {
	  bookmark: __webpack_require__(4),
	  calendar: __webpack_require__(5),
	  calendar: __webpack_require__(5),
	  camera: __webpack_require__(6),
	  chat: __webpack_require__(7),
	  check: __webpack_require__(8),
	  chevronDown: __webpack_require__(9),
	  chevronLeft: __webpack_require__(10),
	  chevronRight: __webpack_require__(11),
	  chevronUp: __webpack_require__(12),
	  clock: __webpack_require__(13),
	  close: __webpack_require__(14),
	  cloud: __webpack_require__(15),
	  cog: __webpack_require__(16),
	  compose: __webpack_require__(17),
	  dribbble: __webpack_require__(18),
	  expand: __webpack_require__(19),
	  external: __webpack_require__(20),
	  facebook: __webpack_require__(21),
	  file: __webpack_require__(22),
	  folder: __webpack_require__(23),
	  geolocation: __webpack_require__(24),
	  github: __webpack_require__(25),
	  grid: __webpack_require__(26),
	  heart: __webpack_require__(27),
	  home: __webpack_require__(28),
	  info: __webpack_require__(29),
	  link: __webpack_require__(30),
	  list: __webpack_require__(1),
	  lock: __webpack_require__(32),
	  mail: __webpack_require__(33),
	  musicNote: __webpack_require__(34),
	  next: __webpack_require__(35),
	  no: __webpack_require__(36),
	  pause: __webpack_require__(37),
	  picture: __webpack_require__(38),
	  pin: __webpack_require__(39),
	  play: __webpack_require__(40),
	  previous: __webpack_require__(41),
	  refresh: __webpack_require__(42),
	  repost: __webpack_require__(43),
	  search: __webpack_require__(44),
	  shoppingCart: __webpack_require__(45),
	  skull: __webpack_require__(46),
	  speakerVolume: __webpack_require__(47),
	  speaker: __webpack_require__(48),
	  star: __webpack_require__(49),
	  tag: __webpack_require__(50),
	  trash: __webpack_require__(51),
	  triangleDown: __webpack_require__(52),
	  triangleLeft: __webpack_require__(53),
	  triangleRight: __webpack_require__(54),
	  triangleUp: __webpack_require__(55),
	  twitter: __webpack_require__(56),
	  user: __webpack_require__(57),
	  video: __webpack_require__(58),
	  warning: __webpack_require__(59),
	};



/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M22 16 L22 12 A6 6 0 0 0 10 12 L10 16 z M4 16 L6 16 L6 12 A10 10 0 0 1 26 12 L26 16 L28 16 L28 30 L4 30 z'
	].join(' ');



/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 6 L16 16 L32 6 z M0 9 L0 26 L32 26 L32 9 L16 19 z'
	].join(' ');



/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 24 A6 6 0 0 0 12 24 V8 H26 V18 A6 6 0 0 0 18 24 A6 6 0 0 0 30 24 V2 H8 V18 A6 6 0 0 0 0 24'
	].join(' ');



/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z'
	].join(' ');



/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 6 A10 10 0 0 1 20.675 7 L7 20.675 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 M26 16 A10 10 0 0 1 16 26 A10 10 0 0 1 11.325 25 L25 11.325 A10 10 0 0 1 26 16'
	].join(' ');



/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z'
	].join(' ');



/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 4 L0 28 L32 28 L32 4 z M4 24 L10 10 L15 18 L18 14 L24 24z M25 7 A4 4 0 0 1 25 15 A4 4 0 0 1 25 7'
	].join(' ');



/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 12 A12 12 0 0 1 28 12 C28 20, 16 32, 16 32 C16 32, 4 20 4 12 M11 12 A5 5 0 0 0 21 12 A5 5 0 0 0 11 12 Z'
	].join(' ');



/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L28 16 L4 28 z'
	].join(' ');



/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z'
	].join(' ');



/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 2 A14 14 0 0 0 2 16 A14 14 0 0 0 16 30 A14 14 0 0 0 26 26 L 23.25 23 A10 10 0 0 1 16 26 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 A10 10 0 0 1 23.25 9 L19 13 L30 13 L30 2 L26 6 A14 14 0 0 0 16 2'
	].join(' ');



/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M7 7 L14 14 L9 14 L9 20 L16 20 L16 24 L5 24 L5 14 L0 14 z M16 8 L27 8 L27 18 L32 18 L25 25 L18 18 L23 18 L23 12 L16 12z'
	].join(' ');



/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M12 0 A12 12 0 0 0 0 12 A12 12 0 0 0 12 24 A12 12 0 0 0 18.5 22.25 L28 32 L32 28 L22.25 18.5 A12 12 0 0 0 24 12 A12 12 0 0 0 12 0 M12 4 A8 8 0 0 1 12 20 A8 8 0 0 1 12 4'
	].join(' ');



/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 4 L5 4 L6 8 L30 8 L28 22 L6 22 L3.5 6 L0 6z M10 24 A3 3 0 0 0 10 30 A3 3 0 0 0 10 24 M24 24 A3 3 0 0 0 24 30 A3 3 0 0 0 24 24'
	].join(' ');



/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12'
	].join(' ');



/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z M32 16 A16 16 0 0 1 27.25 27.375 L25.25 25.25 A13 13 0 0 0 29 16 A13 13 0 0 0 25.25 6.75 L27.25 4.625 A16 16 0 0 1 32 16 M25 16 A9 9 0 0 1 22.375 22.375 L20.25 20.25 A6 6 0 0 0 22 16 A6 6 0 0 0 20.25 11.75 L22.375 9.625 A9 9 0 0 1 25 16'
	].join(' ');



/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z'
	].join(' ');



/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 L21 11 L32 12 L23 19 L26 31 L16 25 L6 31 L9 19 L0 12 L11 11'
	].join(' ');



/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 18 L16 2 L29 3 L30 16 L14 32 z M20 9 A3 3 0 0 0 26 9 A3 3 0 0 0 20 9'
	].join(' ');



/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L10 4 L12 2 L20 2 L22 4 L28 4 L29 8 L3 8 z M5 10 L27 10 L26 30 L6 30 z'
	].join(' ');



/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 8 H28 L16 26 z'
	].join(' ');



/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M24 4 V28 L6 16 z'
	].join(' ');



/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M8 4 V28 L26 16 z'
	].join(' ');



/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 24 H28 L16 6 z'
	].join(' ');



/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4'
	].join(' ');



/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M10 8 A6 6 0 0 1 22 8 L22 12 A6 6 0 0 1 10 12 z M2 26 C3 23 10 20 14 20 L18 20 C22 20 29 23 30 26 L30 28 L2 28 z'
	].join(' ');



/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 6 L0 26 L24 26 L24 19 L32 23 L32 9 L24 13 L24 6 z'
	].join(' ');



/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M15 0 H17 L32 29 L31 30 L1 30 L0 29 z M19 8 L13 8 L14 20 L18 20 z M16 22 A3 3 0 0 0 16 28 A3 3 0 0 0 16 22'
	].join(' ');



/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = function(string) {
	  return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
	};



/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	
	var paths = __webpack_require__(31);

	module.exports = function(key) {
	  var iconList = Object.keys(paths);
	  iconList = iconList.join();
	  console.error(
	    'No icon found for ' + key + '.\n' +
	    'Geomicons Open includes the following icons: \n' + iconList
	  );
	};



/***/ }
/******/ ]);