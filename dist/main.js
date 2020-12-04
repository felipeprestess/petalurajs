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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/clientes.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/clientes.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"  \\r\\n.navbar-brand, .nav-link {\\r\\n    text-align: center;\\r\\n    font-family: \\\"Pacifico\\\";\\r\\n    font-size: 40px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/css/clientes.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/api/cliente.js":
/*!****************************!*\
  !*** ./src/api/cliente.js ***!
  \****************************/
/*! exports provided: listagemClientes, editaCliente, detalheCliente, cadastrarClientes, removerCliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listagemClientes\", function() { return listagemClientes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editaCliente\", function() { return editaCliente; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detalheCliente\", function() { return detalheCliente; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cadastrarClientes\", function() { return cadastrarClientes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removerCliente\", function() { return removerCliente; });\nconst listagemClientes = () => fetch(\"http://localhost:4000/clientes\")\r\n    .then(response => response.json()).then(json => json)\r\n\r\nconst cadastrarClientes = (nome, cpf) => {\r\n    const json = JSON.stringify({\r\n        nome: nome,\r\n        cpf: cpf\r\n    });\r\n    return fetch(\"http://localhost:4000/clientes/cliente\", {\r\n        method: \"POST\",\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: json\r\n    }).then(res => res.body);\r\n}\r\n\r\nconst removerCliente = id => {\r\n    return fetch(`http://localhost:4000/clientes/cliente/${id}`, { \r\n        method: 'DELETE'\r\n    });\r\n}\r\n\r\nconst detalheCliente = id => {\r\n    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\r\n        method: \"GET\",\r\n    })\r\n    .then(res => res.json());\r\n}\r\n\r\nconst editaCliente = (id, cpf, nome) => {\r\n    const json = JSON.stringify({\r\n        nome: nome,\r\n        cpf: cpf\r\n    });\r\n    return fetch(`http://localhost:4000/clienteps/cliente/${id}`, {\r\n        method: \"PUT\",\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: json\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/api/cliente.js?");

/***/ }),

/***/ "./src/assets/css/clientes.css":
/*!*************************************!*\
  !*** ./src/assets/css/clientes.css ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clientes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./clientes.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/clientes.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clientes_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_clientes_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/assets/css/clientes.css?");

/***/ }),

/***/ "./src/componentes/cadastro/cadastro-clientes.js":
/*!*******************************************************!*\
  !*** ./src/componentes/cadastro/cadastro-clientes.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validacao_validaCPF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validacao/validaCPF.js */ \"./src/componentes/validacao/validaCPF.js\");\n/* harmony import */ var _api_cliente_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/cliente.js */ \"./src/api/cliente.js\");\n\r\n\r\n\r\nconst eventoEnvia = (form) => {\r\n    form.addEventListener('submit', event => {\r\n        event.preventDefault();\r\n\r\n        const nome = event.target.querySelector('[data-nome]').value;\r\n        const cpf = event.target.querySelector('[data-cpf]').value;\r\n\r\n        if (Object(_validacao_validaCPF_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cpf)) {\r\n            Object(_api_cliente_js__WEBPACK_IMPORTED_MODULE_1__[\"cadastrarClientes\"])(nome, cpf);\r\n        } else {\r\n            alert('CPF não é válido!');\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventoEnvia);\n\n//# sourceURL=webpack:///./src/componentes/cadastro/cadastro-clientes.js?");

/***/ }),

/***/ "./src/componentes/cadastro/componente-cadastro.js":
/*!*********************************************************!*\
  !*** ./src/componentes/cadastro/componente-cadastro.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { default: eventoEnvia } = __webpack_require__(/*! ./cadastro-clientes */ \"./src/componentes/cadastro/cadastro-clientes.js\");\n\nconst inicializaCadastro = () => {\n  const form = document.createElement('form');\n  const cadastro = \n  `<form data-form>\n          <div class=\"container\">\n      <div class=\"form-group\">\n        <label>CPF</label>\n        <input type=\"number\" class=\"form-control\" data-cpf placeholder=\"Digite seu CPF aqui\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Nome</label>\n        <input type=\"text\" class=\"form-control\" data-nome placeholder=\"Digite seu nome aqui\" />\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n      </div>\n    </form>`;\n  form.innerHTML = cadastro;\n  eventoEnvia(form);\n  return form;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (inicializaCadastro);\n  \n\n//# sourceURL=webpack:///./src/componentes/cadastro/componente-cadastro.js?");

/***/ }),

/***/ "./src/componentes/edita/edita-cliente.js":
/*!************************************************!*\
  !*** ./src/componentes/edita/edita-cliente.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validacao_validaCPF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validacao/validaCPF.js */ \"./src/componentes/validacao/validaCPF.js\");\n/* harmony import */ var _api_cliente_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/cliente.js */ \"./src/api/cliente.js\");\n\r\n\r\n\r\nconst eventoForm = formEdicao => {\r\n    const pegaURL = new URL(window.location);\r\n    const id = pegaURL.searchParams.get('id');\r\n    console.log(formEdicao);\r\n    const inputCPF = formEdicao.querySelector('[data-cpf]');\r\n    const inputNome = formEdicao.querySelector('[data-nome]');\r\n\r\n    Object(_api_cliente_js__WEBPACK_IMPORTED_MODULE_1__[\"detalheCliente\"])(id).then(dados => {\r\n        inputCPF.value = dados[0].cpf;\r\n        inputNome.value = dados[0].nome;\r\n    });\r\n\r\n    \r\n    formEdicao.addEventListener('submit', e =>{\r\n        e.preventDefault();\r\n\r\n        if(!Object(_validacao_validaCPF_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputCPF.value)) {\r\n            alert('CPF inválido.');\r\n            return;\r\n        }\r\n        Object(_api_cliente_js__WEBPACK_IMPORTED_MODULE_1__[\"editaCliente\"])(id, inputCPF.value, inputNome.value)\r\n            .then(() => formEdicao.appendChild(alerta(\"success\",\"Cliente editado com sucesso!\")))\r\n            .catch(() => formEdicao.appendChild(alerta(\"warning\",\"Erro ao editar cliente!\")));\r\n    });\r\n\r\n    const alerta = (classe, mensagem) => {\r\n        const linha = document.createElement('section');\r\n        const conteudoLinha = `\r\n        <div class=\"alert alert-${classe}\" role=\"alert\">\r\n            ${mensagem}\r\n        </div>\r\n        `;\r\n        linha.innerHTML = conteudoLinha;\r\n        return linha;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventoForm);\n\n//# sourceURL=webpack:///./src/componentes/edita/edita-cliente.js?");

/***/ }),

/***/ "./src/componentes/listagem/listagem-cliente.js":
/*!******************************************************!*\
  !*** ./src/componentes/listagem/listagem-cliente.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_cliente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../api/cliente */ \"./src/api/cliente.js\");\n/* harmony import */ var _assets_css_clientes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/css/clientes.css */ \"./src/assets/css/clientes.css\");\n\r\n\r\n\r\nconst criaCorpoTabela = (tabela) => {\r\n    const corpoTabela = document.createElement('tbody');\r\n\r\n    const exibeCliente = (cpf, nome, id) => {\r\n        const linha = document.createElement('tr');\r\n    \r\n        const conteudoLinha = `\r\n            <td>${cpf}</td>\r\n            <td>${nome}</td>\r\n            <td>\r\n                <button id=\"rmvCliente\" class=\"btn btn-danger\" onclick=\"confirmarRemoverCliente(${id})\">Remover</button>\r\n                <button class=\"btn btn-info\" onclick=\"navegacao('/editar?id=${id}'); return false\" type=\"button\">Editar</button>\r\n            </td>\r\n            `;\r\n        \r\n        linha.innerHTML = conteudoLinha;\r\n        return linha;\r\n    }\r\n\r\n    Object(_api_cliente__WEBPACK_IMPORTED_MODULE_0__[\"listagemClientes\"])().then(exibe =>{\r\n        exibe.forEach(indice => {\r\n            corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));\r\n        })\r\n    })\r\n    \r\n    tabela.appendChild(corpoTabela);\r\n}\r\n\r\nconst inicializaTabela = () => { \r\n    const cabecalho = \r\n    `<thead class=\"thead-dark\">\r\n        <tr>\r\n            <th scope=\"col\">CPF</th>\r\n            <th scope=\"col\">Nome</th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\">\r\n                <a class=\"btn btn-primary\" onclick=\"navegacao('/cadastro'); return false;\">Novo Cliente</a>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    `;\r\n\r\n    const tabela = document.createElement('table');\r\n    tabela.innerHTML = cabecalho;\r\n    tabela.classList.add('table');\r\n    criaCorpoTabela(tabela);\r\n    return tabela;\r\n}\r\n\r\nconst confirmarRemoverCliente = id =>{\r\n    if (confirm(\"Você realmente deseja remover este cliente?\")) {\r\n        Object(_api_cliente__WEBPACK_IMPORTED_MODULE_0__[\"removerCliente\"])(id);\r\n        document.location.reload();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (inicializaTabela);\n\n//# sourceURL=webpack:///./src/componentes/listagem/listagem-cliente.js?");

/***/ }),

/***/ "./src/componentes/validacao/validaCPF.js":
/*!************************************************!*\
  !*** ./src/componentes/validacao/validaCPF.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction verificaCPFInvalidos(cpf) {\r\n    const cpfsInvalido = [\r\n        '11111111111',\r\n        '22222222222',\r\n        '33333333333',\r\n        '44444444444',\r\n        '55555555555',\r\n        '66666666666',\r\n        '77777777777',\r\n        '88888888888',\r\n        '99999999999',\r\n        '00000000000',\r\n    ];\r\n\r\n    return cpfsInvalido.indexOf(cpf) === -1;\r\n}\r\n\r\nfunction somaNumerosCPF(cpf, totalDigitos, peso) {\r\n    let soma = 0;\r\n    for (let i = 1; i <= totalDigitos; i++) {\r\n        soma += parseInt(cpf.substring(i - 1, i) * (peso - i));\r\n    }\r\n    return soma;\r\n}\r\n\r\nfunction verificaDigito(cpf, totalDigitos, peso, digitoDeVerificacao) {\r\n    let soma = somaNumerosCPF(cpf, totalDigitos, peso);\r\n    let resto = (soma * 10 ) % 11;\r\n    if (resto === 10 || resto === 11) resto = 0;\r\n    return resto === digitoDeVerificacao;\r\n}\r\n\r\nfunction verificaPrimeiroDigito(cpf) {\r\n    const peso = 11;\r\n    const totalDeDigitosPrimeiraParte = 9;\r\n    const digitoDeVerificacao = parseInt(cpf.substring(9, 10));\r\n\r\n    return verificaDigito(cpf, totalDeDigitosPrimeiraParte, peso, digitoDeVerificacao);\r\n}\r\n\r\nfunction verificaSegundoDigito(cpf) {\r\n    const peso = 12;\r\n    const totalDeDigitosSegundaParte = 10;\r\n    const digitoDeVerificacao = parseInt(cpf.substring(10,11));\r\n\r\n    return verificaDigito(cpf, totalDeDigitosSegundaParte, peso, digitoDeVerificacao)\r\n}\r\n\r\nfunction validaCPF(cpf) {\r\n    return (\r\n        verificaPrimeiroDigito(cpf) &&\r\n        verificaSegundoDigito(cpf) &&\r\n        verificaCPFInvalidos(cpf)\r\n    )\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (validaCPF);\n\n//# sourceURL=webpack:///./src/componentes/validacao/validaCPF.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\nObject(_router_js__WEBPACK_IMPORTED_MODULE_0__[\"navegacao\"])(window.location.pathname)\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: navegacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navegacao\", function() { return navegacao; });\n/* harmony import */ var _componentes_cadastro_componente_cadastro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/cadastro/componente-cadastro */ \"./src/componentes/cadastro/componente-cadastro.js\");\n/* harmony import */ var _componentes_listagem_listagem_cliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/listagem/listagem-cliente */ \"./src/componentes/listagem/listagem-cliente.js\");\n/* harmony import */ var _componentes_edita_edita_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/edita/edita-cliente */ \"./src/componentes/edita/edita-cliente.js\");\n\r\n\r\n\r\n\r\nconst rotas = {\r\n    \"/\": _componentes_listagem_listagem_cliente__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    \"/cadastro\":_componentes_cadastro_componente_cadastro__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    \"/editar\": _componentes_edita_edita_cliente__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n    \r\n}\r\n\r\nconst rootDiv = document.querySelector('[data-container]');\r\n\r\nconst navegacao = pathName => {\r\n    window.history.pushState({}, pathName, window.location.origin + pathName);\r\n\r\n    rootDiv.innerHTML = \"\";\r\n    const iniciarRota = rotas[window.location.pathname];\r\n\r\n    rootDiv.appendChild(iniciarRota)\r\n}\r\nwindow.navegacao = navegacao;\r\n\r\nwindow.onpopstate = () => {\r\n    rootDiv.innerHTML = \"\";\r\n    rootDiv.appendChild(rotas[window.location.pathname]);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ })

/******/ });