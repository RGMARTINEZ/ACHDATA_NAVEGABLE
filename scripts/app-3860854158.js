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
/***/ (function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var environment_1 = __webpack_require__(1);
	var common_module_1 = __webpack_require__(2);
	var home_module_1 = __webpack_require__(22);
	var aunt_module_1 = __webpack_require__(26);
	var settings_module_1 = __webpack_require__(32);
	var monitoring_module_1 = __webpack_require__(38);
	var consulting_module_1 = __webpack_require__(65);
	var admin_module_1 = __webpack_require__(106);
	var statistics_module_1 = __webpack_require__(151);
	var audit_module_1 = __webpack_require__(158);
	var manipulation_module_1 = __webpack_require__(165);
	var app_routes_1 = __webpack_require__(170);
	var app_translate_1 = __webpack_require__(171);
	var app_forms_1 = __webpack_require__(172);
	var app_run_1 = __webpack_require__(173);
	var app_Interceptor_1 = __webpack_require__(174);
	// interceptor http errors Handler
	var httpConfig = function ($httpProvider) {
	    $httpProvider.interceptors.push(app_Interceptor_1.ApiCallInterceptor.factory);
	};
	httpConfig.$inject = ["$httpProvider"];
	angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngMessages',
	    'ngSanitize', 'ngAria', 'angular-cache', 'angularPromiseButtons',
	    'toastr', 'pascalprecht.translate', 'ui.router', 'ngFabForm', 'ui.bootstrap', 'rx', 'ngDialog', 'ngCsv', 'ngclipboard',
	    common_module_1.default.name, home_module_1.default.name, aunt_module_1.default.name, settings_module_1.default.name, monitoring_module_1.default.name, consulting_module_1.default.name, admin_module_1.default.name, statistics_module_1.default.name, audit_module_1.default.name, manipulation_module_1.default.name])
	    .constant('environment', environment_1.environment)
	    .constant('moment', moment)
	    .config(app_translate_1.default)
	    .config(httpConfig)
	    .config(app_routes_1.default)
	    .config(app_forms_1.default)
	    .run(app_run_1.default);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	exports.environment = {
	    name: 'SOI DATA development',
	    api: 'https://soidata.com.co',
	    port: '',
	    path: '',
	    timeout: 30000,
	    jwtKey: 'jwtToken',
	    apilogin: 'https://conduit.productionready.io/api',
	    correoUsoDatosPersonales: 'astmailertest@gmail.com',
	    maxPeriods: 36
	};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var root_component_1 = __webpack_require__(3);
	var header_component_1 = __webpack_require__(4);
	var footer_component_1 = __webpack_require__(6);
	var paginacion_component_1 = __webpack_require__(7);
	var get_service_1 = __webpack_require__(9);
	var jwt_service_1 = __webpack_require__(10);
	var user_service_1 = __webpack_require__(11);
	var api_service_1 = __webpack_require__(12);
	var urlBuilder_service_1 = __webpack_require__(13);
	var show_authed_directive_1 = __webpack_require__(14);
	var file_reader_directive_1 = __webpack_require__(15);
	var validateForm_directive_1 = __webpack_require__(16);
	var matchInputs_directive_1 = __webpack_require__(17);
	var validateAlpha_directive_1 = __webpack_require__(18);
	var validFile_directive_1 = __webpack_require__(19);
	var underscore_1 = __webpack_require__(20);
	var haspermissions_service_1 = __webpack_require__(21);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.common', [])
	    .component('appRoot', root_component_1.RootComponent)
	    .component('header', header_component_1.HeaderComponent)
	    .component('footer', footer_component_1.FooterComponent)
	    .component('paginacion', paginacion_component_1.PaginacionComponent)
	    .service('JWT', jwt_service_1.JWT)
	    .service('User', user_service_1.User)
	    .service('getService', get_service_1.GetService)
	    .service('Api', api_service_1.Api)
	    .factory('_', underscore_1.underscore)
	    .directive('showAuthed', show_authed_directive_1.ShowAuthed)
	    .directive('fileReader', file_reader_directive_1.fileReader)
	    .directive('matchd', matchInputs_directive_1.matchd)
	    .directive('onlyAlphabets', validateAlpha_directive_1.onlyAlphabets)
	    .directive('linked', validateForm_directive_1.linked)
	    .directive('validFile', validFile_directive_1.validFile)
	    .service('UrlBuilder', urlBuilder_service_1.UrlBuilder)
	    .service('permissions', haspermissions_service_1.permissions);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	exports.RootComponent = {
	    templateUrl: 'app/common/components/root/rootConsultas.html'
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var header_controller_1 = __webpack_require__(5);
	exports.HeaderComponent = {
	    templateUrl: 'app/common/components/header/header.html',
	    controller: header_controller_1.default
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	var HeaderController = (function () {
	    /** @ngInject */
	    HeaderController.$inject = ["environment", "User", "$scope", "$state", "permissions"];
	    function HeaderController(environment, User, $scope, $state, permissions) {
	        var _this = this;
	        this.User = User;
	        this.$state = $state;
	        this.permissions = permissions;
	        this.appName = environment.name;
	        this.currentUser = User.current;
	        $scope.$watch('User.current', function (newUser) {
	            _this.currentUser = newUser;
	        });
	        this.logout = User.logout.bind(User);
	    }
	    HeaderController.prototype.isCurrentUserAch = function () {
	        if (this.User.current.tenant === 'ach') {
	            return false;
	        }
	        else {
	            return true;
	        }
	    };
	    HeaderController.prototype.$onInit = function () {
	        // console.log(this.User.current.email);
	        // console.log(this.$state.current.name)
	    };
	    HeaderController.prototype.getClassPrincipal = function (principal) {
	        var nombre = this.$state.current.name;
	        return nombre.includes(principal);
	    };
	    HeaderController.prototype.getDetalladaConsulting = function () {
	        return this.permissions.havepermissions(this.User.current.permissions, '*:consultas.individual-natural.consultar') || this.permissions.havepermissions(this.User.current.permissions, '*:consultas.masivas-natural.consultar') || this.permissions.havepermissions(this.User.current.permissions, '*:consultas.individual-juridica.consultar') || this.permissions.havepermissions(this.User.current.permissions, '*:consultas.masivas-juridica.consultar');
	    };
	    HeaderController.prototype.getConsJuridicaConsulting = function () {
	        return this.permissions.havepermissions(this.User.current.permissions, '*:consultas.consolidada.juridica.consultar');
	    };
	    HeaderController.prototype.getMasivaFiltrosConsulting = function () {
	        return this.permissions.havepermissions(this.User.current.permissions, '*:consultas.masiva.filtros-natural.consultar');
	    };
	    return HeaderController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HeaderController;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	exports.FooterComponent = {
	    templateUrl: 'app/common/components/footer/footer.html'
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var paginacion_controller_1 = __webpack_require__(8);
	exports.PaginacionComponent = {
	    templateUrl: 'app/common/components/paginacion/paginacion.html',
	    controller: paginacion_controller_1.default,
	    bindings: {
	        'changePage': '&',
	        'changeItemsPerPage': '&',
	        'totalResultados': '<',
	        'itemsPerPage': '<',
	        'pagina': '<',
	        'configurable': '<'
	    }
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	var PaginacionController = (function () {
	    /** @ngInject */
	    function PaginacionController() {
	        this.pagina = 1;
	    }
	    return PaginacionController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PaginacionController;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	var GetService = (function () {
	    /** @ngInject */
	    GetService.$inject = ["$timeout", "$q"];
	    function GetService($timeout, $q) {
	        this.$timeout = $timeout;
	        this.$q = $q;
	    }
	    GetService.prototype.getPerson = function () {
	        var deferred = this.$q.defer();
	        this.$timeout(function () { deferred.resolve('hola'); }, 1000);
	        return deferred.promise;
	    };
	    return GetService;
	}());
	exports.GetService = GetService;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	var JWT = (function () {
	    /** @ngInject */
	    JWT.$inject = ["$window", "environment", "$timeout", "$q"];
	    function JWT($window, environment, $timeout, $q) {
	        this.$window = $window;
	        this.environment = environment;
	        this.$timeout = $timeout;
	        this.$q = $q;
	        this._AppConstants = environment;
	        this._$window = $window;
	    }
	    JWT.prototype.save = function (token) {
	        this._$window.localStorage[this._AppConstants.jwtKey] = token;
	    };
	    JWT.prototype.get = function () {
	        return this._$window.localStorage[this._AppConstants.jwtKey];
	    };
	    JWT.prototype.destroy = function () {
	        this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
	    };
	    return JWT;
	}());
	exports.JWT = JWT;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	var User = (function () {
	    /** @ngInject */
	    User.$inject = ["JWT", "environment", "$http", "$state", "$timeout", "$q", "permissions", "Api", "$cookies"];
	    function User(JWT, environment, $http, $state, $timeout, $q, permissions, Api, $cookies) {
	        this.JWT = JWT;
	        this.environment = environment;
	        this.$http = $http;
	        this.$state = $state;
	        this.$timeout = $timeout;
	        this.$q = $q;
	        this.permissions = permissions;
	        this.Api = Api;
	        this.$cookies = $cookies;
	        this.current = null;
	        this.loged = null;
	        this.logedTenant = null;
	    }
	    User.prototype.sendUser = function (user, tenant) {
	        this.loged = user;
	        this.logedTenant = tenant;
	    };
	    ;
	    User.prototype.attemptAuth = function (type, credentials) {
	        var _this = this;
	        var dataSend = {
	            tenant: credentials.tenant,
	            email: credentials.email,
	            password: credentials.password
	        };
	        return this.$http({
	            url: this.environment.api + '/administracion/auth/token',
	            method: 'POST',
	            data: dataSend
	        }).then(function (res) {

				var dataRes = {
					"tenant": "ach",
					"email": "jainer.quiceno@alejandria-consulting.com",
					"areaCode": "02",
					"areaName": "Área dos",
					"permissions": [
					  "*:consultas.masiva.filtros-natural.consultar",
					  "ach:consultas.parametro.consultar",
					  "*:consultas.consolidada.juridica.consultar",
					  "*:estadisticas.consolidado.generar",
					  "*:consultas.individual-juridica.consultar",
					  "*:consultas.masivas-juridica.consultar",
					  "*:consultas.extendida.individual-natural.consultar",
					  "*:consultas.consolidada.masivas-natural.consultar",
					  "ach:monitoreo.proceso-migracion.modificar",
					  "*:estadisticas.detallado.generar",
					  "*:consultas.individual-natural.consultar",
					  "*:consultas.extendida.masivas-natural.consultar",
					  "*:usuarios.entidad.editar",
					  "ach:monitoreo.planilla.revertir",
					  "ach:consultas.parametro.editar",
					  "*:usuarios.entidad.consultar",
					  "ach:monitoreo.tablero-control.consultar",
					  "ach:estadisticas.consolidado-ach.generar",
					  "*:consultas.masivas-natural.consultar",
					  "ach:autorizacion-datos-personales.gestionar.actualizar",
					  "*:usuarios.entidad.crear",
					  "ach:monitoreo.procesamiento-archivo.reintentar",
					  "ach:estadisticas.detallado-ach.generar",
					  "*:utilidades.cargue-registros",
					  "ach:auditoria.reporte-auditoria.generar",
					  "*:consultas.consolidada.individual-natural.consultar"
					]
				  }
	            _this.current = dataRes;
	            _this.current.permissions.push('portal');
	            return res;
	        });
	    };
	    User.prototype.update = function (fields) {
	        var _this = this;
	        return this.$http({
	            url: this.environment.apilogin + '/user',
	            method: 'PUT',
	            data: { user: fields }
	        }).then(function (res) {
	            _this.current = res.data.user;
	            return res.data.user;
	        });
	    };
	    User.prototype.logout = function () {
	        var _this = this;
	        return this.$http({
	            url: this.environment.api + '/administracion/auth/invalidate/' + this.current.email,
	            method: 'GET',
	        }).then(function (res) {
	            _this.current = null;
	            _this.$state.go('login', null, { reload: true });
	            _this.$timeout(function () {
	                location.reload();
	            }, 100, true);
	        });
	    };
	    User.prototype.verifyAuth = function (parametro) {
	        var _this = this;
	        var deferred = this.$q.defer();
	        // check for JWT token
	        if (this.current) {
	            deferred.resolve(true);
	        }
	        else {
	            this.$http({
	                url: this.environment.api + '/administracion/extract_token',
	                method: 'GET'
	            }).then(function (res) {
	                _this.current = res.data;
	                _this.current.permissions.push('portal');
	                deferred.resolve(true);
	            }, function (err) {
	                // this.JWT.destroy();
	                _this.$state.go('login');
	                deferred.resolve(false);
	            });
	        }
	        return deferred.promise;
	    };
	    User.prototype.ensureAuthIs = function (atributo) {
	        var _this = this;
	        var deferred = this.$q.defer();
	        this.verifyAuth().then(function (authValid) {
	            if (!authValid) {
	                _this.$state.go('login');
	                deferred.resolve(false);
	            }
	            else {
	                var permisos = _this.current.permissions;
	                var isOk = _this.permissions.havepermissions(permisos, atributo);
	                if (isOk) {
	                    deferred.resolve(true);
	                }
	                else {
	                    deferred.resolve(false);
	                    _this.$state.go('login');
	                }
	            }
	        });
	        return deferred.promise;
	    };
	    return User;
	}());
	exports.User = User;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	var Api = (function () {
	    /** @ngInject */
	    Api.$inject = ["$http", "$q", "CacheFactory", "environment", "UrlBuilder"];
	    function Api($http, $q, CacheFactory, environment, UrlBuilder) {
	        this.$http = $http;
	        this.$q = $q;
	        this.CacheFactory = CacheFactory;
	        this.environment = environment;
	        this.UrlBuilder = UrlBuilder;
	        /**
	         * Cache instance name for api
	         */
	        this.cacheName = 'api-cache';
	        // creates cache instance
	        if (!CacheFactory.get(this.cacheName)) {
	            CacheFactory.createCache(this.cacheName, {
	                maxAge: 60 * 60 * 1000,
	                cacheFlushInterval: 180 * 60 * 1000,
	                deleteOnExpire: 'aggressive' // items will be deleted from this cache when they expire
	            });
	        }
	        // initializes cache attribute for future use
	        this.cache = CacheFactory.get(this.cacheName);
	    }
	    Api.prototype.get = function (url, params, accept, showGlobalSpinner, cacheEnabled, responseType) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var cache = cacheEnabled || false;
	        var resType;
	        if (responseType) {
	            resType = responseType;
	        }
	        else {
	            resType = '';
	        }
	        var config = {
	            method: 'GET',
	            url: this.environment.api + ':' + this.environment.port + this.environment.path + url,
	            headers: {
	                'Content-type': accept
	            },
	            data: '',
	            params: params,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs,
	            responseType: resType
	        };
	        var requestKey = this.UrlBuilder.buildRequestUrl(config);
	        var cachedResult = this.cache.get(requestKey);
	        if (cache && typeof cachedResult !== 'undefined') {
	            // results found in cache
	            deferred.resolve(cachedResult.data);
	        }
	        else {
	            // perform request
	            this.performGetRequest(config, deferred, cache);
	        }
	        return deferred.promise;
	    };
	    Api.prototype.get_v_ingestion = function (url, params, accept, showGlobalSpinner, cacheEnabled, responseType) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var cache = cacheEnabled || false;
	        var resType;
	        if (responseType) {
	            resType = responseType;
	        }
	        else {
	            resType = '';
	        }
	        var config = {
	            method: 'GET',
	            url: this.environment.api + '/' + url,
	            headers: {
	                'Content-type': accept
	            },
	            data: '',
	            params: params,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs,
	            responseType: resType
	        };
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    Api.prototype.get2 = function (url, params, accept, showGlobalSpinner, cacheEnabled, responseType) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var cache = cacheEnabled || false;
	        var resType;
	        if (responseType) {
	            resType = responseType;
	        }
	        else {
	            resType = '';
	        }
	        var config = {
	            method: 'GET',
	            url: this.environment.api + ':' + this.environment.port + this.environment.path + url,
	            headers: {
	                'Content-type': accept
	            },
	            data: '',
	            params: params,
	            timeout: this.environment.timeout * 10,
	            showGlobalSpinner: sgs,
	            responseType: resType
	        };
	        var requestKey = this.UrlBuilder.buildRequestUrl(config);
	        var cachedResult = this.cache.get(requestKey);
	        if (cache && typeof cachedResult !== 'undefined') {
	            // results found in cache
	            deferred.resolve(cachedResult.data);
	        }
	        else {
	            // perform request
	            this.performGetRequest(config, deferred, cache);
	        }
	        return deferred.promise;
	    };
	    Api.prototype.get3 = function (url, params, accept, showGlobalSpinner, cacheEnabled, responseType) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var cache = cacheEnabled || false;
	        var resType;
	        if (responseType) {
	            resType = responseType;
	        }
	        else {
	            resType = '';
	        }
	        var config = {
	            method: 'GET',
	            url: this.environment.api + '/' + url,
	            headers: {
	                'Content-type': accept
	            },
	            data: '',
	            params: params,
	            timeout: this.environment.timeout * 10,
	            showGlobalSpinner: sgs,
	            responseType: resType
	        };
	        var requestKey = this.UrlBuilder.buildRequestUrl(config);
	        var cachedResult = this.cache.get(requestKey);
	        if (cache && typeof cachedResult !== 'undefined') {
	            // results found in cache
	            deferred.resolve(cachedResult.data);
	        }
	        else {
	            // perform request
	            this.performGetRequest(config, deferred, cache);
	        }
	        return deferred.promise;
	    };
	    Api.prototype.post = function (url, data, contentType, showGlobalSpinner, responseType) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var resType;
	        if (responseType) {
	            resType = responseType;
	        }
	        else {
	            resType = '';
	        }
	        var config = {
	            method: 'POST',
	            url: this.environment.api + ':' + this.environment.port + this.environment.path + url,
	            headers: {
	                'Content-Type': contentType
	            },
	            data: data,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs,
	            responseType: resType
	        };
	        console.log(config);
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    Api.prototype.post_v_ingestion = function (url, data, contentType, showGlobalSpinner, responseType) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var resType;
	        if (responseType) {
	            resType = responseType;
	        }
	        else {
	            resType = '';
	        }
	        var config = {
	            method: 'POST',
	            url: this.environment.api + '/' + url,
	            headers: {
	                'Content-Type': contentType
	            },
	            data: data,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs,
	            responseType: resType
	        };
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    Api.prototype.put = function (url, data, showGlobalSpinner) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var config = {
	            method: 'PUT',
	            url: this.environment.api + ':' + this.environment.port + this.environment.path + url,
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: data,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs
	        };
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    Api.prototype.put_reintentar = function (url, data, showGlobalSpinner) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var config = {
	            method: 'PUT',
	            url: this.environment.api + '/' + url,
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: data,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs
	        };
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    Api.prototype.del = function (url, data, showGlobalSpinner) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var config = {
	            method: 'DELETE',
	            url: this.environment.api + ':' + this.environment.port + this.environment.path + url,
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: data,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs
	        };
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    Api.prototype.del_auth = function (url, data, showGlobalSpinner) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var config = {
	            method: 'DELETE',
	            url: this.environment.api + ':' + this.environment.port + this.environment.path + url,
	            headers: {
	                'Content-Type': undefined
	            },
	            data: data,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs
	        };
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    Api.prototype.del_reversions = function (url, data, showGlobalSpinner) {
	        var deferred = this.$q.defer();
	        var sgs = showGlobalSpinner || false;
	        var config = {
	            method: 'DELETE',
	            url: this.environment.api + '/' + url,
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: data,
	            timeout: this.environment.timeout,
	            showGlobalSpinner: sgs
	        };
	        this.$http(config).then(function (response) {
	            deferred.resolve(response);
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	        return deferred.promise;
	    };
	    /**
	     * Performs a get http request
	     * @param config Request config
	     * @param deferred Deferred object
	     * @param cacheResponse Indicates if result must be cached
	     */
	    Api.prototype.performGetRequest = function (config, deferred, cacheResponse) {
	        var _this = this;
	        this.$http(config).then(function (promiseValue) {
	            deferred.resolve(promiseValue);
	            if (cacheResponse) {
	                var requestKey = _this.UrlBuilder.buildRequestUrl(config);
	                _this.cache.put(requestKey, promiseValue);
	            }
	        }, function (reason) {
	            deferred.reject(reason);
	        });
	    };
	    return Api;
	}());
	exports.Api = Api;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	var UrlBuilder = (function () {
	    /** @ngInject */
	    UrlBuilder.$inject = ["$httpParamSerializer"];
	    function UrlBuilder($httpParamSerializer) {
	        this.$httpParamSerializer = $httpParamSerializer;
	    }
	    /**
	     * Builds an url from a request
	     * @param requestConfig Request configuration
	     * @returns {string} Request url
	     */
	    UrlBuilder.prototype.buildRequestUrl = function (requestConfig) {
	        var url = angular.copy(requestConfig.url);
	        /*var params: string = angular.copy(requestConfig.params);
	         var serializedParams: string = this.$httpParamSerializer(params);
	         if (serializedParams.length > 0) {
	         url += ((url.indexOf('?') === -1) ? '?' : '&') + serializedParams;
	         }*/
	        // console.log('URL: ' + url);
	        return url;
	    };
	    return UrlBuilder;
	}());
	exports.UrlBuilder = UrlBuilder;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	ShowAuthed.$inject = ["User", "_", "permissions"];
	function ShowAuthed(User, _, permissions) {
	    return {
	        restrict: 'EA',
	        link: function (scope, element, attrs) {
	            scope.User = User;
	            var classDisplay = 'inline-block';
	            if (attrs.classStyle) {
	                classDisplay = 'inherit';
	            }
	            scope.$watch('User.current', function (val) {
	                if (val) {
	                    var permisos = val.permissions;
	                    var atributo = attrs.showAuthed;
	                    var isOk = permissions.havepermissions(permisos, atributo);
	                    if (isOk) {
	                        element.css({ display: classDisplay });
	                    }
	                    else {
	                        element.css({ display: 'none' });
	                    }
	                }
	                else {
	                    // no user detected
	                    element.css({ display: 'none' });
	                }
	            });
	        }
	    };
	}
	exports.ShowAuthed = ShowAuthed;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	fileReader.$inject = ["ServiceProvider"];
	function fileReader(ServiceProvider) {
	    return {
	        restrict: 'EA',
	        scope: {
	            fileReader: '='
	        },
	        link: function (scope, element, attrs) {
	            // pasa el csv a arreglo
	            function CSVToArray(strData, strDelimiter) {
	                strDelimiter = (strDelimiter || ',');
	                var objPattern = new RegExp(('(\\' + strDelimiter + '|\\r?\\n|\\r|^)' +
	                    '(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|' +
	                    '([^\"\\' + strDelimiter + '\\r\\n]*))'), 'gi');
	                var arrData = [[]];
	                var arrMatches = null;
	                // comparando el csv con la  pattern
	                while (arrMatches = objPattern.exec($.trim(strData))) {
	                    var strMatchedDelimiter = arrMatches[1];
	                    if (strMatchedDelimiter.length && (strMatchedDelimiter !== strDelimiter)) {
	                        arrData.push([]);
	                    }
	                    if (arrMatches[2]) {
	                        var strMatchedValue = arrMatches[2].replace(new RegExp('\"\"', 'g'), '\"');
	                    }
	                    else {
	                        var strMatchedValue = arrMatches[3];
	                    }
	                    arrData[arrData.length - 1].push(strMatchedValue);
	                }
	                // return  data.
	                return (arrData);
	            }
	            // pasa el arreglo a json y le da un header
	            function CSV2JSON(csv) {
	                var array = CSVToArray(csv);
	                array.unshift(['tipoDocumento', 'numeroDocumento']);
	                var objArray = [];
	                for (var i = 1; i < array.length; i++) {
	                    objArray[i - 1] = {};
	                    for (var k = 0; k < array[0].length && k < array[i].length; k++) {
	                        var key = array[0][k];
	                        objArray[i - 1][key] = array[i][k];
	                    }
	                }
	                var json = JSON.stringify(objArray);
	                var str = json.replace(/},/g, "},\r\n");
	                return str;
	            }
	            // ejecuta la conversion
	            $(element).on('change', function (changeEvent) {
	                var files = changeEvent.target.files;
	                if (files.length) {
	                    var r = new FileReader();
	                    r.onload = function (e) {
	                        var csv = e.target.result;
	                        var contents = CSV2JSON(csv);
	                        // servicios para guardar el json final
	                        ServiceProvider.setFile(contents);
	                    };
	                    r.readAsText(files[0]);
	                }
	            });
	        }
	    };
	}
	exports.fileReader = fileReader;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	function linked() {
	    return {
	        restrict: 'EA',
	        link: function (scope, element, attrs) {
	            var id = attrs['linked'];
	            element.on('click', function () {
	                document.getElementById(id).click();
	            });
	        }
	    };
	}
	exports.linked = linked;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	matchd.$inject = ["$parse"];
	function matchd($parse) {
	    return {
	        restrict: 'EA',
	        require: '^ngModel',
	        link: function (scope, element, attrs, ctrl) {
	            // if ngModel is not defined, we don't need to do anything
	            var firstPassword = '#' + attrs.pwCheck;
	            element.add(firstPassword).on('keyup', function () {
	                scope.$apply(function () {
	                    var v = element.val() === $(firstPassword).val();
	                    ctrl.$setValidity('matchs', v);
	                });
	            });
	        }
	    };
	}
	exports.matchd = matchd;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	function onlyAlphabets() {
	    return {
	        restrict: 'EA',
	        link: function (scope, element, attrs) {
	            console.log('DATOS A PROBAR DIRECTIVA');
	            var classDisplay = 'inline-block';
	            if (attrs.classStyle) {
	                classDisplay = 'inherit';
	            }
	            scope.$watch('User.current', function (val) {
	                console.log('DATOS A PROBAR DIRECTIVA');
	            });
	        }
	    };
	}
	exports.onlyAlphabets = onlyAlphabets;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	function validFile() {
	    return {
	        restrict: 'EA',
	        link: function (scope, element, attrs) {
	            /*  this.ngModel.$render = function () {
	                  this.ngModel.$setViewValue(element.val());
	              };
	  
	              element.bind('change', function () {
	                  scope.$apply(function () {
	                      this.ngModel.$render();
	                  });
	              }); */
	        }
	    };
	}
	exports.validFile = validFile;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	underscore.$inject = ["$window"];
	function underscore($window) {
	    return $window._;
	}
	exports.underscore = underscore;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	var permissions = (function () {
	    /** @ngInject */
	    permissions.$inject = ["$window", "environment", "$timeout", "$q"];
	    function permissions($window, environment, $timeout, $q) {
	        this.$window = $window;
	        this.environment = environment;
	        this.$timeout = $timeout;
	        this.$q = $q;
	        this._AppConstants = environment;
	        this._$window = $window;
	    }
	    permissions.prototype.havepermissions = function (permission, atributo) {
	        var haspermissions = false;
	        if (permission.length > 0) {
	            for (var i = 0; i < permission.length; i++) {
	                var item = permission[i].toUpperCase();
	                var newFilter = atributo.toUpperCase();
	                if (~item.indexOf(newFilter)) {
	                    haspermissions = true;
	                    break;
	                }
	                else {
	                    haspermissions = false;
	                }
	            }
	        }
	        else {
	            haspermissions = false;
	        }
	        return haspermissions;
	    };
	    return permissions;
	}());
	exports.permissions = permissions;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var common_module_1 = __webpack_require__(2);
	var home_routes_1 = __webpack_require__(23);
	var home_component_1 = __webpack_require__(24);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.home', [common_module_1.default.name])
	    .config(home_routes_1.default)
	    .component('home', home_component_1.HomeComponent);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	/**
	 * Created by macbookpro on 14/10/16.
	 */
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.home', {
	        url: '/',
	        template: '<home></home>',
	        resolve: {
	            auth: ["User", function (User) {
	                User.ensureAuthIs('portal');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var home_controller_1 = __webpack_require__(25);
	exports.HomeComponent = {
	    templateUrl: 'app/home/components/home.html',
	    controller: home_controller_1.default
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/**
	 * Created by macbookpro on 14/10/16.
	 */
	"use strict";
	var HomeController = (function () {
	    /** @ngInject */
	    HomeController.$inject = ["$state"];
	    function HomeController($state) {
	        // this.inicia = 'Saludo';
	        this.$state = $state;
	    }
	    return HomeController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HomeController;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by macbookpro on 15/10/16.
	 */
	"use strict";
	var common_module_1 = __webpack_require__(2);
	var auth_routes_1 = __webpack_require__(27);
	var auth_component_1 = __webpack_require__(28);
	var newpass_component_1 = __webpack_require__(30);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.auth', [common_module_1.default.name])
	    .config(auth_routes_1.default)
	    .component('login', auth_component_1.AuthComponent)
	    .component('newpass', newpass_component_1.newpassComponent);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('login', {
	        url: '/login',
	        template: '<login></login>'
	    })
	        .state('newpass', {
	        url: '/establecer/:first/?t',
	        template: '<newpass></newpass>',
	        resolve: {
	            entidad: ["EntidadService", "$state", "$stateParams", function (EntidadService, $state, $stateParams) {
	                // modificar para llamar el servicios de obtener roles por id
	                return {};
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by macbookpro on 15/10/16.
	 */
	var auth_controller_1 = __webpack_require__(29);
	exports.AuthComponent = {
	    templateUrl: 'app/auth/components/login/auth.html',
	    controller: auth_controller_1.default
	};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";
	var AuthController = (function () {
	    /** @ngInject */
	    AuthController.$inject = ["User", "$state", "$stateParams", "toastr", "Api", "$cookies"];
	    function AuthController(User, $state, $stateParams, toastr, Api, $cookies) {
	        this.User = User;
	        this.$state = $state;
	        this.$stateParams = $stateParams;
	        this.toastr = toastr;
	        this.Api = Api;
	        this.$cookies = $cookies;
	        this.contrasena = '';
	        this.confirmcontrasena = '';
	        this.entidad = '';
	        this.tenant = '';
	        this.invalidButton = false;
	        this.olvidoPass = false;
	        this.isSubmitting = false;
	        this.errors = {};
	        this.slide = 0;
	        this.inicia = 'saludo';
	    }
	    AuthController.prototype.changePass = function () {
	        this.olvidoPass = !this.olvidoPass;
	    };
	    AuthController.prototype.submitRecoverPass = function () {
	        var dataTosend = {
	            mail: this.recoverMail,
	            tenant: this.tenant
	        };
	        var that = this;
	        if (dataTosend.tenant != 'ach') {
	            // remplazar por el servicios de establecer contraseña
	            that.Api.post('/administracion/password/forgotten ', dataTosend, 'application/json').then(function (data) {
	                alert('Se ha enviado un correo electrónico a la cuenta ingresada.');
	            }, function (error) {
	                that.toastr.error('Error: ' + error.data);
	            });
	        }
	        else {
	            this.toastr.error('Error: ' + 'Por favor verifique que su cuenta de correo electrónico es válida para realizar esta solicitud');
	        }
	    };
	    AuthController.prototype.submitForm = function () {
	        var _this = this;
	        this.invalidButton = true;
	        this.isSubmitting = true;
	        this.formData.tenant = this.tenant;
	        this.User.attemptAuth('login', this.formData).then(function (res) {
	            _this.$cookies['tenant'] = _this.tenant;
	            _this.$state.go('layout.home');
	            _this.invalidButton = false;
	        }, function (err) {
	            if (err.data.message === 'Su contraseña ha expirado por favor cambiela') {
	                _this.User.sendUser(_this.formData.email, _this.formData.tenant);
	            }
	            else {
	                _this.isSubmitting = false;
	                _this.toastr.error(err.data.message);
	                _this.invalidButton = false;
	            }
	        });
	    };
	    AuthController.prototype.changeActive = function (position) {
	        this.slide = position;
	    };
	    AuthController.prototype.$onInit = function () {
	        // si no tiene tenat en la url queda ach por defecto
	        if (this.$cookies['tenant']) {
	            this.tenant = this.$cookies['tenant'];
	        }
	    };
	    return AuthController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AuthController;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by macbookpro on 15/10/16.
	 */
	var newpass_controller_1 = __webpack_require__(31);
	exports.newpassComponent = {
	    templateUrl: 'app/auth/components/newpass/newpass.html',
	    controller: newpass_controller_1.default
	};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	var newpassController = (function () {
	    /** @ngInject */
	    newpassController.$inject = ["User", "$state", "$stateParams", "Api", "toastr"];
	    function newpassController(User, $state, $stateParams, Api, toastr) {
	        this.User = User;
	        this.$state = $state;
	        this.$stateParams = $stateParams;
	        this.Api = Api;
	        this.toastr = toastr;
	        this.isSubmitting = false;
	        this.formData = {};
	        this.errors = {};
	        this.slide = 0;
	        this.t = '';
	        this.submitUrl = '/administracion/password/set/first';
	        this.inicia = 'saludo';
	        this.t = $stateParams.t;
	        if ($stateParams.first != '0') {
	            this.submitUrl = '/administracion/password/set';
	        }
	        console.log($stateParams);
	    }
	    newpassController.prototype.submitForm = function () {
			that.$state.go('pages/charts/chartjs.html');

	    };
	    newpassController.prototype.changeActive = function (position) {
	        this.slide = position;
	    };
	    return newpassController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = newpassController;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var common_module_1 = __webpack_require__(2);
	var settings_routes_1 = __webpack_require__(33);
	var profile_component_1 = __webpack_require__(34);
	var timeoutprofile_component_1 = __webpack_require__(36);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.settings', [common_module_1.default.name])
	    .config(settings_routes_1.default)
	    .component('profile', profile_component_1.ProfileComponent)
	    .component('timeoutprofile', timeoutprofile_component_1.TimeoutProfileComponent);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	/**
	 * Created by macbookpro on 17/10/16.
	 */
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.profile', {
	        url: '/perfil',
	        template: '<profile></profile>',
	        resolve: {
	            auth: ["User", function (User) {
	                User.ensureAuthIs('portal');
	            }]
	        }
	    })
	        .state('timeout', {
	        url: '/expiracion',
	        template: '<timeoutprofile></timeoutprofile>',
	        resolve: {
	            auth: ["User", function (User) {
	                // return  User.verifyAuth('portal');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by macbookpro on 17/10/16.
	 */
	var profile_controller_1 = __webpack_require__(35);
	exports.ProfileComponent = {
	    templateUrl: 'app/settings/components/profile/profile.html',
	    controller: profile_controller_1.default
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	var ProfileController = (function () {
	    /** @ngInject */
	    ProfileController.$inject = ["User", "toastr", "Api"];
	    function ProfileController(User, toastr, Api) {
	        this.toastr = toastr;
	        this.Api = Api;
	        this.formData = {};
	    }
	    ProfileController.prototype.submitForm = function () {
	        if (this.oldcontrasena === this.contrasena) {
	            this.toastr.error('La anterior contraseña no puede ser igual a la nueva.');
	            return false;
	        }
	        var dataTosend = {
	            oldPass: this.oldcontrasena,
	            newPass: this.contrasena
	        };
	        var that = this;
	        // remplazar por el servicios de cambiar contraseña
	        that.Api.post('/administracion/password/change', dataTosend, 'application/json').then(function (data) {
	            that.toastr.success('Su contraseña ha sido actualizada correctamente');
	        }, function (error) {
	            console.log(error);
	            that.toastr.error('Error al enviar la consulta: ' + error.data.message);
	        });
	    };
	    return ProfileController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProfileController;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var timeoutprofile_controller_1 = __webpack_require__(37);
	exports.TimeoutProfileComponent = {
	    templateUrl: 'app/settings/components/timeoutprofile/timeoutprofile.html',
	    controller: timeoutprofile_controller_1.default
	};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	var ProfileController = (function () {
	    /** @ngInject */
	    ProfileController.$inject = ["User", "toastr", "Api", "$state"];
	    function ProfileController(User, toastr, Api, $state) {
	        this.User = User;
	        this.toastr = toastr;
	        this.Api = Api;
	        this.$state = $state;
	        this.formData = {};
	    }
	    ProfileController.prototype.submitForm = function () {
	        if (this.oldcontrasena === this.contrasena) {
	            this.toastr.error('La anterior contraseña no puede ser igual a la nueva.');
	            return false;
	        }
	        var dataTosend = {
	            tenant: this.User.logedTenant,
	            email: this.User.loged,
	            oldPass: this.oldcontrasena,
	            newPass: this.contrasena
	        };
	        var that = this;
	        // remplazar por el servicios de cambiar contraseña
	        that.Api.post('/administracion/password/change/expired', dataTosend, 'application/json').then(function (data) {
	            that.$state.go('layout.home');
	            that.toastr.success('Su contraseña ha sido actualizada correctamente');
	        }, function (error) {
	            console.log(error);
	            that.toastr.error('Error al enviar la consulta: ' + error.data.message);
	        });
	    };
	    return ProfileController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProfileController;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by macbookpro on 18/10/16.
	 */
	var common_module_1 = __webpack_require__(2);
	var monitoring_routes_1 = __webpack_require__(39);
	var consultas_component_1 = __webpack_require__(40);
	var erroresConsulta_component_1 = __webpack_require__(41);
	var formularioConsultas_component_1 = __webpack_require__(43);
	var resultadoIndividual_component_1 = __webpack_require__(45);
	var resultados_component_1 = __webpack_require__(47);
	var reversionesConsulta_component_1 = __webpack_require__(49);
	var consultas_service_1 = __webpack_require__(51);
	var migraciones_component_1 = __webpack_require__(52);
	var estado_component_1 = __webpack_require__(53);
	var migraciones_service_1 = __webpack_require__(55);
	var reversiones_component_1 = __webpack_require__(56);
	var consultaReversiones_component_1 = __webpack_require__(57);
	var reversiones_service_1 = __webpack_require__(59);
	var onlynumbers_directive_1 = __webpack_require__(60);
	var reintentar_component_1 = __webpack_require__(61);
	var consultaReintentar_component_1 = __webpack_require__(62);
	var reintentar_service_1 = __webpack_require__(64);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.monitoring', [common_module_1.default.name])
	    .config(monitoring_routes_1.default)
	    .service('ConsultasService', consultas_service_1.ConsultasService)
	    .component('consultas', consultas_component_1.ConsultasComponent)
	    .component('consultasErrores', erroresConsulta_component_1.ErroresConsultaCompoment)
	    .component('consultasFormulario', formularioConsultas_component_1.FormularioConsultasComponent)
	    .component('consultasResultadoIndividual', resultadoIndividual_component_1.ResultadoIndividualComponent)
	    .component('consultasResultados', resultados_component_1.ResultadosComponent)
	    .component('consultasReversiones', reversionesConsulta_component_1.ReversionesConsultaCompoment)
	    .service('MigracionesService', migraciones_service_1.MigracionesService)
	    .component('migraciones', migraciones_component_1.MigracionesComponent)
	    .component('estadoMigraciones', estado_component_1.EstadoComponent)
	    .directive('onlyNumbers', onlynumbers_directive_1.onlyNumbers)
	    .service('ReversionesService', reversiones_service_1.ReversionesService)
	    .component('reversiones', reversiones_component_1.ReversionesComponent)
	    .component('consultaReversiones', consultaReversiones_component_1.ConsultaReversionesComponent)
	    .service('ReintentarService', reintentar_service_1.ReintentarService)
	    .component('reintentar', reintentar_component_1.ReintentarComponent)
	    .component('consultaReintentar', consultaReintentar_component_1.ConsultaReintentarComponent);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.monitoring', {
	        abstract: true,
	        url: '/monitoreo',
	        templateUrl: 'app/monitoring/root.monitoring.html',
	    })
	        .state('layout.monitoring.main', {
	        url: '',
	        template: '<consultas></consultas>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('monitoreo.tablero-control');
	            }]
	        }
	    })
	        .state('layout.migraciones', {
	        url: '/migraciones',
	        template: '<migraciones></migraciones>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('monitoreo.proceso-migracion');
	            }]
	        }
	    })
	        .state('layout.reversiones', {
	        url: '/reversiones',
	        template: '<reversiones></reversiones>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('monitoreo.planilla');
	            }]
	        }
	    })
	        .state('layout.reintentar', {
	        url: '/reintentar',
	        template: '<reintentar></reintentar>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('monitoreo.procesamiento-archivo');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";
	exports.ConsultasComponent = {
	    templateUrl: 'app/monitoring/components/consultas/components/consultas/consultas.html'
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var erroresConsulta_controller_1 = __webpack_require__(42);
	exports.ErroresConsultaCompoment = {
	    templateUrl: 'app/monitoring/components/consultas/components/erroresConsulta/erroresConsulta.html',
	    controller: erroresConsulta_controller_1.default,
	    bindings: {
	        'errores': '<',
	        'fecha': '<',
	        'proceso': '<',
	        'indice': '<',
	        'global': '<',
	        'itemsPerPageGlobal': '<'
	    }
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	var ErroresConsultaController = (function () {
	    /** @ngInject */
	    ErroresConsultaController.$inject = ["ConsultasService", "toastr", "$window", "$translate", "ngDialog"];
	    function ErroresConsultaController(ConsultasService, toastr, $window, $translate, ngDialog) {
	        this.ConsultasService = ConsultasService;
	        this.toastr = toastr;
	        this.$window = $window;
	        this.$translate = $translate;
	        this.ngDialog = ngDialog;
	        this.selectAll = false;
	        this.pagina = 1;
	        this.totalResultados = 0;
	        this.itemsPerPage = 10;
	        this.mostrarErrores = false;
	        if (this.global % 3 !== 0) {
	            var mod = this.global % this.itemsPerPageGlobal;
	            if (mod === this.indice + 1) {
	                this.indice = this.indice + (3 - this.global % 3);
	            }
	        }
	    }
	    ErroresConsultaController.prototype.reintentarErrores = function () {
	        var that = this;
	        var seleccionados = this.darSeleccionados();
	        if (seleccionados.length === 0) {
	            this.toastr.warning(this.$translate.instant('messages.noPayrollSelected'));
	        }
	        else {
	            this.ngDialog.openConfirm({
	                template: '\  <p>' + this.$translate.instant('messages.confirmRetry') + '</p>\
	                <div class="ngdialog-buttons">\
	                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + this.$translate.instant('action.no') + '</button>\
	                    <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + this.$translate.instant('action.yes') + '</button>\
	                </div>',
	                plain: true
	            }).then(function (confirm) {
	                that.ConsultasService.reintentarErrores(seleccionados, that.proceso, that.indice);
	                return that.ConsultasService.cargarErroresIndividual(that.fecha, that.proceso, that.indice);
	            });
	        }
	    };
	    ErroresConsultaController.prototype.observarReintentarErrores = function () {
	        var that = this;
	        this.observableReintentarErrores = this.ConsultasService.reintentarErroresObservable;
	        this.observableReintentarErrores.subscribe(function (success) {
	            if (!success.error && that.comprobarIndice(success.indice)) {
	                that.toastr.success(that.$translate.instant('messages.successRetry'));
	                that.selectAll = false;
	                that.seleccionarTodos();
	            }
	            else if (that.comprobarIndice(success.indice)) {
	                that.toastr.error(that.$translate.instant('messages.failureRetry') + ': ' + success.result);
	            }
	        }, function (err) {
	            console.log('Error en suscribe: ' + err);
	            that.toastr.error(that.$translate.instant('messages.failureRetry'));
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    ErroresConsultaController.prototype.descargarErrores = function () {
	        this.ConsultasService.descargarCSVErrores(this.proceso, this.fecha);
	    };
	    ErroresConsultaController.prototype.darSeleccionados = function () {
	        var seleccionados = [];
	        angular.forEach(this.errores, function (actual) {
	            if (actual.seleccionado) {
	                seleccionados.push(actual);
	            }
	        });
	        return seleccionados;
	    };
	    ErroresConsultaController.prototype.seleccionarTodos = function () {
	        var that = this;
	        angular.forEach(this.erroresPagina, function (actual) {
	            if (!actual.migrada) {
	                actual.seleccionado = that.selectAll;
	            }
	        });
	    };
	    ErroresConsultaController.prototype.guardarObservacion = function (error, proceso) {
	        if (!error.observacion) {
	            this.toastr.error(this.$translate.instant('messages.observationFailureLength') + this.$translate.instant('validation.min.characters', { num: 10 }));
	        }
	        else if (error.observacion.length >= 10 && error.observacion.length <= 140) {
	            error.tipoProceso = proceso;
	            return this.ConsultasService.actualizarError(error, this.indice);
	        }
	        else if (error.observacion.length < 10) {
	            this.toastr.error(this.$translate.instant('messages.observationFailureLength') + this.$translate.instant('validation.min.characters', { num: 10 }));
	        }
	        else {
	            this.toastr.error(this.$translate.instant('messages.observationFailureLength') + this.$translate.instant('validation.max.characters', { num: 140 }));
	        }
	    };
	    ErroresConsultaController.prototype.observarGuardarObservacion = function () {
	        var that = this;
	        this.observableActualizarError = this.ConsultasService.actualizarErrorObservable;
	        this.observableActualizarError.subscribe(function (success) {
	            if (!success.error && that.comprobarIndice(success.indice)) {
	                that.toastr.success('Observación Guardada');
	            }
	            else if (that.comprobarIndice(success.indice)) {
	                that.toastr.error(that.$translate.instant('messages.observationFailure') + ': ' + success.result);
	            }
	        }, function (err) {
	            console.log('Error en suscribe: ' + err);
	            that.toastr.error(that.$translate.instant('messages.observationFailure'));
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    ErroresConsultaController.prototype.observarErrores = function () {
	        var that = this;
	        this.observableErrores = this.ConsultasService.erroresObservable;
	        this.observableErrores.subscribe(function (success) {
	            if (that.comprobarIndice(success.indice) && !success.error) {
	                that.errores = that.ConsultasService.erroresPlanillaDTO;
	                that.erroresPagina = that.errores.slice(0, that.itemsPerPage);
	                that.mostrarErrores = true;
	                that.fecha = success.fecha;
	                that.totalResultados = that.errores.length;
	            }
	            else if (that.comprobarIndice(success.indice) && success.error) {
	                that.errores = undefined;
	                that.erroresPagina = undefined;
	                that.mostrarErrores = false;
	                that.fecha = '';
	                that.totalResultados = 0;
	                that.toastr.error(that.$translate.instant('messages.errorsFailure'));
	            }
	            else {
	                that.errores = undefined;
	                that.erroresPagina = undefined;
	                that.mostrarErrores = false;
	                that.fecha = '';
	                that.totalResultados = 0;
	            }
	        }, function (err) {
	            console.log('Error en suscribe: ' + err);
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    ErroresConsultaController.prototype.observarErroresDescarga = function () {
	        var that = this;
	        this.observableDescargaErrores = this.ConsultasService.descargarErroresObservable;
	        this.observableDescargaErrores.subscribe(function (success) {
	            that.$window.open('data:text/csv;charset=utf-8,' + encodeURI(success.data), 'csv');
	        }, function (err) {
	            console.log('Error en suscribe: ' + err);
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    ErroresConsultaController.prototype.comprobarIndice = function (actual) {
	        if (actual === this.indice || actual === this.indice - 1 || actual === this.indice - 2) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ErroresConsultaController.prototype.$onInit = function () {
	        this.observarErrores();
	        this.observarErroresDescarga();
	        this.observarReintentarErrores();
	        this.observarGuardarObservacion();
	    };
	    ErroresConsultaController.prototype.changeItemsPerPage = function (actual) {
	        this.selectAll = false;
	        this.seleccionarTodos();
	        this.pagina = 1;
	        this.itemsPerPage = actual.itemsPerPage;
	        if (this.itemsPerPage == -1) {
	            this.erroresPagina = this.errores;
	        }
	        else {
	            this.erroresPagina = this.errores.slice(0, this.itemsPerPage);
	        }
	    };
	    ErroresConsultaController.prototype.changePage = function (actual) {
	        this.selectAll = false;
	        this.seleccionarTodos();
	        var inicio = this.itemsPerPage * (actual.pagina - 1);
	        var final = this.itemsPerPage * (actual.pagina);
	        this.erroresPagina = this.errores.slice(inicio, final);
	        this.pagina = actual.pagina;
	    };
	    ErroresConsultaController.prototype.$onDestroy = function () {
	        this.observableErrores.observers = [];
	        this.observableActualizarError.observers = [];
	        this.observableDescargaErrores.observers = [];
	        this.observableReintentarErrores.observers = [];
	    };
	    return ErroresConsultaController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ErroresConsultaController;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var formularioConsultas_controller_1 = __webpack_require__(44);
	exports.FormularioConsultasComponent = {
	    templateUrl: 'app/monitoring/components/consultas/components/formularioConsultas/formularioConsultas.html',
	    controller: formularioConsultas_controller_1.default,
	    bindings: {
	        'fechaInicio': '@',
	        'fechaFin': '@',
	        'tipoProceso': '@'
	    }
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	var FormularioConsultasController = (function () {
	    /** @ngInject */
	    FormularioConsultasController.$inject = ["ConsultasService", "$translate", "$timeout", "toastr", "$state"];
	    function FormularioConsultasController(ConsultasService, $translate, $timeout, toastr, $state) {
	        this.ConsultasService = ConsultasService;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.toastr = toastr;
	        this.$state = $state;
	        this.dateOptions = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: new Date(1900, 1, 1),
	            startingDay: 1
	        };
	        this.dateOptions2 = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: this.fechaInicio,
	            startingDay: 1
	        };
	        this.showCalendar1 = false;
	        this.showCalendar2 = false;
	        this.restriccionDias = 1000 * 60 * 60 * 24 * 60;
	        this.tipoProceso = 'MINPS';
	    }
	    FormularioConsultasController.prototype.submit = function () {
	        var that = this;
	        if (this.fechaInicio && this.fechaFin) {
	            var diff = this.fechaFin.getTime() - this.fechaInicio.getTime();
	            if (diff <= this.restriccionDias) {
	                var formu = (_a = {},
	                    _a['fecha-inicio'] = this.formatDate(this.fechaInicio),
	                    _a['fecha-fin'] = this.formatDate(this.fechaFin),
	                    _a.tipoProceso = this.tipoProceso,
	                    _a
	                );
	                this.ConsultasService.setDatosConsulta(formu);
	                return this.ConsultasService.consultar().then(function (response) {
	                    if (response[0] != null && response[0].conError === 401) {
	                        that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                        that.$state.go('login');
	                    }
	                }, function (error) {
	                    that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	                });
	            }
	            else {
	                this.toastr.error(this.$translate.instant('validation.dates.invalidRange'));
	            }
	        }
	        else {
	            this.toastr.error(this.$translate.instant('validation.dates.invalidDates'));
	        }
	        var _a;
	    };
	    FormularioConsultasController.prototype.cambioProceso = function () {
	        var that = this;
	        if (this.fechaInicio === undefined && this.fechaFin === undefined) {
	            var formu = (_a = {},
	                _a['fecha-inicio'] = this.formatDate(new Date()),
	                _a['fecha-fin'] = this.formatDate(new Date()),
	                _a.tipoProceso = this.tipoProceso,
	                _a
	            );
	            this.ConsultasService.setDatosConsulta(formu);
	            this.ConsultasService.consultar().then(function (response) {
	                if (response[0] != null && response[0].conError === 401) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	            }, function (error) {
	                that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	            });
	        }
	        var _a;
	    };
	    FormularioConsultasController.prototype.toggleCalendar1 = function () {
	        this.showCalendar1 = !this.showCalendar1;
	        this.dateOptions.maxDate = this.fechaFin;
	        if (this.fechaFin !== undefined) {
	            var fechaLim = this.fechaFin.getTime() - this.restriccionDias;
	            this.dateOptions.minDate = new Date(fechaLim);
	        }
	    };
	    FormularioConsultasController.prototype.toggleCalendar2 = function () {
	        this.showCalendar2 = !this.showCalendar2;
	        this.dateOptions2.minDate = this.fechaInicio;
	        if (this.fechaInicio !== undefined) {
	            var fechaLim = this.fechaInicio.getTime() + this.restriccionDias;
	            var actual = new Date().getTime();
	            if (fechaLim < actual) {
	                this.dateOptions2.maxDate = new Date(fechaLim);
	            }
	            else {
	                this.dateOptions2.maxDate = new Date();
	            }
	        }
	    };
	    FormularioConsultasController.prototype.formatDate = function (inDate) {
	        var entrada = new Date(inDate);
	        return '' + entrada.getFullYear() + '-' + (entrada.getMonth() + 1) + '-' + entrada.getDate();
	    };
	    return FormularioConsultasController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = FormularioConsultasController;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var resultadoIndividual_controller_1 = __webpack_require__(46);
	exports.ResultadoIndividualComponent = {
	    templateUrl: 'app/monitoring/components/consultas/components/resultadoIndividual/resultadoIndividual.html',
	    controller: resultadoIndividual_controller_1.default,
	    bindings: {
	        'mostrarErrores': '<',
	        'resultado': '<',
	        'indice': '<'
	    }
	};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";
	var ResultadoIndividualController = (function () {
	    /** @ngInject */
	    ResultadoIndividualController.$inject = ["ConsultasService", "rx", "$window", "toastr"];
	    function ResultadoIndividualController(ConsultasService, rx, $window, toastr) {
	        this.ConsultasService = ConsultasService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.mostrarErrores = true;
	        this.mostrarErrores = false;
	        this.mostrarRevertidas = false;
	        this.id = this.resultado.idPlanilla;
	    }
	    ResultadoIndividualController.prototype.toggleErrores = function () {
	        if (this.mostrarErrores) {
	            this.ConsultasService.cerrarErroresRevertidas();
	        }
	        else {
	            var fecha;
	            if (this.resultado.tipoProceso === 'MINPS') {
	                fecha = this.resultado.fechaPagoPlanillas;
	            }
	            else {
	                fecha = this.resultado.fechaProcesado;
	            }
	            return this.ConsultasService.cargarErroresIndividual(fecha, this.resultado.tipoProceso, this.indice);
	        }
	    };
	    ResultadoIndividualController.prototype.formatDate = function (inDate) {
	        /*var entrada: Date = new Date(inDate);
	        return '' + (entrada.getDate() + 1) + '/' + (entrada.getMonth() + 1) + '/' + entrada.getFullYear();*/
	        return inDate;
	    };
	    ResultadoIndividualController.prototype.descargarMINPS = function () {
	        var dto = {
	            fecha: this.resultado.fechaPagoPlanillas
	        };
	        this.ConsultasService.descargarMINPS(dto);
	    };
	    ResultadoIndividualController.prototype.observarDescargarMINPS = function () {
	        var that = this;
	        var observable = this.ConsultasService.descargarMINPSObservable;
	        observable.subscribe(function (success) {
	            if (success.error === false) {
	                if (success.result.data.includes(that.resultado.fechaPagoPlanillas)) {
	                    that.$window.open('data:text/csv;charset=utf-8,' + encodeURI(success.result.data));
	                }
	            }
	            else {
	                that.toastr.error('' + success.result);
	            }
	        }, function (err) {
	            that.toastr.error('' + err);
	            console.log('Error en suscribe: ' + err);
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    ResultadoIndividualController.prototype.toggleRevertidas = function () {
	        if (this.mostrarRevertidas) {
	            this.ConsultasService.cerrarErroresRevertidas();
	        }
	        else {
	            this.ConsultasService.cargarRevertidas(this.resultado.fechaPagoPlanillas, this.indice);
	        }
	    };
	    ResultadoIndividualController.prototype.$onInit = function () {
	        this.observarDescargarMINPS();
	    };
	    return ResultadoIndividualController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ResultadoIndividualController;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var resultados_controller_1 = __webpack_require__(48);
	exports.ResultadosComponent = {
	    templateUrl: 'app/monitoring/components/consultas/components/resultados/resultados.html',
	    controller: resultados_controller_1.default
	};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";
	var ResultadosController = (function () {
	    /** @ngInject */
	    ResultadosController.$inject = ["ConsultasService", "rx", "$window", "toastr", "$translate", "$timeout", "$state"];
	    function ResultadosController(ConsultasService, rx, $window, toastr, $translate, $timeout, $state) {
	        this.ConsultasService = ConsultasService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.$state = $state;
	        this.pagina = 1;
	        this.totalResultados = 0;
	        this.itemsPerPage = 9;
	    }
	    ResultadosController.prototype.mostrarResultados = function () {
	        var that = this;
	        this.observable = this.ConsultasService.observableConsulta;
	        this.observable.subscribe(function (success) {
	            that.limiparResultados();
	            that.$timeout(function () {
	                if (success.result[0] && success.error === false) {
	                    that.pagina = 1;
	                    that.resultados = success.result;
	                    that.resultadosPagina = that.resultados.slice(0, that.itemsPerPage);
	                    that.totalResultados = success.result.length;
	                }
	                else if (success.error === true) {
	                    that.toastr.error('' + success.result);
	                    that.resultados = undefined;
	                    that.resultadosPagina = undefined;
	                    that.totalResultados = 0;
	                    that.pagina = 1;
	                }
	                else {
	                    that.toastr.warning(that.$translate.instant('messages.noResults'));
	                    that.resultados = undefined;
	                    that.resultadosPagina = undefined;
	                    that.totalResultados = 0;
	                    that.pagina = 1;
	                }
	            }, 0);
	        }, function (err) {
	            that.toastr.error('' + err);
	            console.log('Error en suscribe: ' + err);
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    ResultadosController.prototype.limiparResultados = function () {
	        this.resultados = undefined;
	        this.resultadosPagina = undefined;
	        this.totalResultados = 0;
	        this.pagina = 1;
	    };
	    ResultadosController.prototype.$onInit = function () {
	        var that = this;
	        this.mostrarResultados();
	        var formu = (_a = {},
	            _a['fecha-inicio'] = this.formatDate(new Date()),
	            _a['fecha-fin'] = this.formatDate(new Date()),
	            _a.tipoProceso = 'MINPS',
	            _a
	        );
	        this.ConsultasService.setDatosConsulta(formu);
	        this.ConsultasService.consultar().then(function (response) {
	            if (response[0] != null && response[0].conError === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	        }, function (error) {
	            that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	        });
	        var _a;
	    };
	    ResultadosController.prototype.$onDestroy = function () {
	        this.observable.observers = [];
	    };
	    ResultadosController.prototype.changePage = function (actual) {
	        var inicio = this.itemsPerPage * (actual.pagina - 1);
	        var final = this.itemsPerPage * (actual.pagina);
	        this.resultadosPagina = this.resultados.slice(inicio, final);
	        this.pagina = actual.pagina;
	    };
	    ResultadosController.prototype.descargarCSV = function () {
	        if (this.totalResultados > 0) {
	            this.ConsultasService.descargarCSVResultados();
	            var that = this;
	            var observable = this.ConsultasService.descargarCSVConsultaObservable;
	            observable.subscribe(function (success) {
	                that.$window.open('data:text/csv;charset=utf-8,' + encodeURI(success.data), 'csv');
	            }, function (err) {
	                console.log('Error en suscribe: ' + err);
	            }, function () {
	                console.log('Completed');
	            });
	        }
	    };
	    ResultadosController.prototype.formatDate = function (inDate) {
	        var entrada = new Date(inDate);
	        return '' + entrada.getFullYear() + '-' + (entrada.getMonth() + 1) + '-' + entrada.getDate();
	    };
	    return ResultadosController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ResultadosController;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var reversionesConsulta_controller_1 = __webpack_require__(50);
	exports.ReversionesConsultaCompoment = {
	    templateUrl: 'app/monitoring/components/consultas/components/reversionesConsulta/reversionesConsulta.html',
	    controller: reversionesConsulta_controller_1.default,
	    bindings: {
	        'reversiones': '<',
	        'fecha': '<',
	        'indice': '<',
	        'global': '<',
	        'itemsPerPageGlobal': '<'
	    }
	};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	var ReversionesConsultaController = (function () {
	    /** @ngInject */
	    ReversionesConsultaController.$inject = ["ConsultasService", "toastr"];
	    function ReversionesConsultaController(ConsultasService, toastr) {
	        this.ConsultasService = ConsultasService;
	        this.toastr = toastr;
	        this.mostrarRevertidas = false;
	        if (this.global % 3 !== 0) {
	            var mod = this.global % this.itemsPerPageGlobal;
	            if (mod === this.indice + 1) {
	                this.indice = this.indice + (3 - this.global % 3);
	            }
	        }
	    }
	    ReversionesConsultaController.prototype.observarReversiones = function () {
	        var that = this;
	        this.observableRevertidas = this.ConsultasService.revertidasObservable;
	        this.observableRevertidas.subscribe(function (success) {
	            var comprobar = that.comprobarIndice(success.indice);
	            if (comprobar && !success.error) {
	                that.reversiones = that.ConsultasService.reversionesPlanillaDTO;
	                that.mostrarRevertidas = true;
	                that.fecha = success.fecha;
	            }
	            else if (comprobar && success.error) {
	                that.toastr.error('' + success.error);
	                that.reversiones = undefined;
	                that.mostrarRevertidas = false;
	                that.fecha = '';
	            }
	            else {
	                that.reversiones = undefined;
	                that.mostrarRevertidas = false;
	                that.fecha = '';
	            }
	        }, function (err) {
	            console.log('Error en suscribe: ' + err);
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    ReversionesConsultaController.prototype.comprobarIndice = function (actual) {
	        if (actual === this.indice || actual === this.indice - 1 || actual === this.indice - 2) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ReversionesConsultaController.prototype.$onInit = function () {
	        this.observarReversiones();
	    };
	    ReversionesConsultaController.prototype.$onDestroy = function () {
	        this.observableRevertidas.observers = [];
	    };
	    return ReversionesConsultaController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ReversionesConsultaController;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";
	var ConsultasService = (function () {
	    /** @ngInject */
	    ConsultasService.$inject = ["Api", "rx"];
	    function ConsultasService(Api, rx) {
	        this.Api = Api;
	        this.rx = rx;
	        this.resultadosPlanillaDTO = [];
	        this.observableConsulta = new this.rx.Subject();
	        this.erroresObservable = new this.rx.Subject();
	        this.revertidasObservable = new this.rx.Subject();
	        this.descargarCSVConsultaObservable = new this.rx.Subject();
	        this.descargarMINPSObservable = new this.rx.Subject();
	        this.actualizarErrorObservable = new this.rx.Subject();
	        this.reintentarErroresObservable = new this.rx.Subject();
	        this.descargarErroresObservable = new this.rx.Subject();
	    }
	    ConsultasService.prototype.consultar = function () {
	        this.cerrarErroresRevertidas();
	        var that = this;
	        var proceso = this.datosConsulta.tipoProceso.toLowerCase();
	        if (this.datosConsulta) {
	            this.consultarPromise = this.Api.get('/monitoreo/migracion/' + proceso, this.datosConsulta, 'application/json', true, false)
	                .then(function (response) {
	                var jsonData = JSON.parse(JSON.stringify(response)).data;
	                console.log(response);
	                console.log(jsonData);
	                var respuestasArray = [];
	                for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
	                    var actual = jsonData_1[_i];
	                    var respuesta = actual;
	                    respuesta.tipoProceso = that.datosConsulta.tipoProceso;
	                    respuestasArray.push(respuesta);
	                }
	                that.resultadosPlanillaDTO = respuestasArray;
	                var success = {
	                    result: that.resultadosPlanillaDTO,
	                    error: false
	                };
	                that.observableConsulta.onNext(success);
	                that.cargarErroresIndividual('', '', -10);
	                return that.resultadosPlanillaDTO;
	            }, function (error) {
	                var mensaje;
	                if (error.status === 401) {
	                    var resultado = {
	                        idPlanilla: null,
	                        fechaPagoPlanillas: null,
	                        fechaProcesado: null,
	                        disponibles: 0,
	                        procesados: 0,
	                        revertidas: 0,
	                        conError: 401,
	                        tipoProceso: null,
	                        errores: null,
	                    };
	                    that.resultadosPlanillaDTO = [];
	                    that.resultadosPlanillaDTO.push(resultado);
	                    return that.resultadosPlanillaDTO;
	                }
	                if (error.data) {
	                    mensaje = error.data.message;
	                }
	                else {
	                    mensaje = 'Error en la consulta.';
	                }
	                var failure = {
	                    result: mensaje,
	                    error: true
	                };
	                that.observableConsulta.onNext(failure);
	            });
	        }
	        return this.consultarPromise;
	    };
	    ConsultasService.prototype.setDatosConsulta = function (datosConsulta) {
	        return this.datosConsulta = datosConsulta;
	    };
	    ConsultasService.prototype.cargarErroresIndividual = function (fecha, tipoProceso, indice) {
	        this.cerrarErroresRevertidas();
	        var that = this;
	        if (fecha) {
	            var proceso = tipoProceso.toLowerCase();
	            var fechaFormat = {
	                fecha: fecha
	            };
	            this.erroresPromise = this.Api.get('/monitoreo/migracion/' + proceso + '/errors', fechaFormat, 'application/json', true, false)
	                .then(function (response) {
	                var jsonData = JSON.parse(JSON.stringify(response)).data;
	                var erroresArray = [];
	                for (var _i = 0, jsonData_2 = jsonData; _i < jsonData_2.length; _i++) {
	                    var errorActual = jsonData_2[_i];
	                    var errorResp = errorActual;
	                    erroresArray.push(errorResp);
	                }
	                var resp = {
	                    indice: indice,
	                    fecha: fecha
	                };
	                that.erroresPlanillaDTO = erroresArray;
	                that.erroresObservable.onNext(resp);
	                return that.erroresPlanillaDTO;
	            }, function (error) {
	                var mensaje;
	                if (error.data) {
	                    mensaje = error.data.message;
	                }
	                else {
	                    mensaje = 'Error en la consulta.';
	                }
	                var resp = {
	                    indice: indice,
	                    fecha: '',
	                    error: mensaje
	                };
	                that.erroresObservable.onNext(resp);
	            });
	        }
	        return this.erroresPromise;
	    };
	    ConsultasService.prototype.cerrarErroresRevertidas = function () {
	        var resp = {
	            indice: -10,
	            fecha: ''
	        };
	        this.erroresObservable.onNext(resp);
	        this.revertidasObservable.onNext(resp);
	    };
	    ConsultasService.prototype.cargarRevertidas = function (fechaPago, indice) {
	        this.cerrarErroresRevertidas();
	        var that = this;
	        if (fechaPago) {
	            var fecha = {
	                fecha: fechaPago
	            };
	            this.revertidasPromise = this.Api.get('/migracion/reversiones', fecha, 'application/json', true, false)
	                .then(function (response) {
	                var jsonData = JSON.parse(JSON.stringify(response)).data;
	                var revertidasArray = [];
	                for (var _i = 0, jsonData_3 = jsonData; _i < jsonData_3.length; _i++) {
	                    var reversionActual = jsonData_3[_i];
	                    var revResp = reversionActual;
	                    revertidasArray.push(revResp);
	                }
	                var resp = {
	                    indice: indice,
	                    fecha: fechaPago
	                };
	                that.reversionesPlanillaDTO = revertidasArray;
	                that.revertidasObservable.onNext(resp);
	                return that.reversionesPlanillaDTO;
	            }, function (error) {
	                var mensaje;
	                if (error.data) {
	                    mensaje = error.data.message;
	                }
	                else {
	                    mensaje = 'Error en la consulta.';
	                }
	                var resp = {
	                    indice: indice,
	                    fecha: '',
	                    error: mensaje
	                };
	                that.revertidasObservable.onNext(resp);
	            });
	        }
	        return this.revertidasPromise;
	    };
	    ConsultasService.prototype.reintentarErrores = function (errores, tipoProceso, indice) {
	        console.log('Servicio Consultas. Número de errores por reintentar: ' + errores.length);
	        var that = this;
	        var proceso = tipoProceso.toLowerCase();
	        if (errores) {
	            var erroresFormato = {
	                planillas: errores
	            };
	            console.log(JSON.stringify(erroresFormato));
	            return this.Api.post('/migracion/reintento/' + proceso, erroresFormato, 'application/json')
	                .then(function (response) {
	                var success = {
	                    result: response,
	                    error: false,
	                    indice: indice
	                };
	                that.reintentarErroresObservable.onNext(success);
	            }, function (error) {
	                var res;
	                if (error.data) {
	                    res = error.data.message;
	                }
	                else {
	                    res = 'Error al contactar el servicio.';
	                }
	                var failure = {
	                    result: res,
	                    error: true,
	                    indice: indice
	                };
	                that.reintentarErroresObservable.onNext(failure);
	            });
	        }
	    };
	    ConsultasService.prototype.descargarCSVResultados = function () {
	        var that = this;
	        var proceso = this.datosConsulta.tipoProceso.toLowerCase();
	        if (this.datosConsulta) {
	            this.Api.get('/monitoreo/migracion/' + proceso, this.datosConsulta, 'text/csv', true, false)
	                .then(function (response) {
	                that.descargarCSVConsultaObservable.onNext(response);
	            }, function (error) {
	                console.log('llego al servicio descargar csv error');
	            });
	        }
	    };
	    ConsultasService.prototype.descargarMINPS = function (fecha) {
	        var that = this;
	        if (fecha) {
	            this.Api.get('/monitoreo/migracion/planillas/minps', fecha, 'text/csv', true, false)
	                .then(function (response) {
	                var success = {
	                    result: response,
	                    error: false
	                };
	                that.descargarMINPSObservable.onNext(success);
	            }, function (error) {
	                var failure = {
	                    result: error.data.message,
	                    error: true
	                };
	                that.descargarMINPSObservable.onNext(failure);
	            });
	        }
	    };
	    ConsultasService.prototype.descargarCSVErrores = function (tipoProceso, fecha) {
	        var that = this;
	        var proceso = tipoProceso.toLowerCase();
	        var fechaFormat = {
	            fecha: fecha
	        };
	        if (this.datosConsulta) {
	            this.Api.get('/monitoreo/migracion/' + proceso + '/errors', fechaFormat, 'text/csv', true, false)
	                .then(function (response) {
	                that.descargarErroresObservable.onNext(response);
	            }, function (error) {
	                console.log('llego al servicio descargar csv error');
	            });
	        }
	    };
	    ConsultasService.prototype.actualizarError = function (error, indice) {
	        var that = this;
	        var proceso = error.tipoProceso.toLowerCase();
	        if (error) {
	            return this.Api.put('/monitoreo/migracion/' + proceso + '/errors', error)
	                .then(function (response) {
	                var success = {
	                    result: response,
	                    error: false,
	                    indice: indice
	                };
	                that.actualizarErrorObservable.onNext(success);
	            }, function (error) {
	                var res;
	                if (error.data) {
	                    res = error.data.message;
	                }
	                else {
	                    res = 'Error al contactar el servicio.';
	                }
	                var failure = {
	                    result: res,
	                    error: true,
	                    indice: indice
	                };
	                that.actualizarErrorObservable.onNext(failure);
	            });
	        }
	    };
	    return ConsultasService;
	}());
	exports.ConsultasService = ConsultasService;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";
	exports.MigracionesComponent = {
	    templateUrl: 'app/monitoring/components/migraciones/components/migraciones/migraciones.html'
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var estado_controller_1 = __webpack_require__(54);
	exports.EstadoComponent = {
	    templateUrl: 'app/monitoring/components/migraciones/components/estado/estado.html',
	    controller: estado_controller_1.default
	};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";
	var EstadoController = (function () {
	    /** @ngInject */
	    EstadoController.$inject = ["MigracionesService", "toastr", "ngDialog", "$translate"];
	    function EstadoController(MigracionesService, toastr, ngDialog, $translate) {
	        this.MigracionesService = MigracionesService;
	        this.toastr = toastr;
	        this.ngDialog = ngDialog;
	        this.$translate = $translate;
	        this.estadoProceso = { nodosIngestion: [] };
	        this.iniciado = true;
	        this.selectAll = false;
	    }
	    EstadoController.prototype.cambiarProceso = function (payload) {
	        var that = this;
	        that.iniciado = !that.iniciado;
	        that.selectAll = !payload;
	        if (payload) {
	            this.ngDialog.openConfirm({
	                template: '\  <p>' + this.$translate.instant('messages.confirmMigrationState') + '</p>\
	                <div class="ngdialog-buttons">\
	                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + this.$translate.instant('action.no') + '</button>\
	                    <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + this.$translate.instant('action.yes') + '</button>\
	                </div>',
	                plain: true
	            }).then(function (confirm) {
	                that.MigracionesService.iniciarProcesoMigracion(that.selectAll).then(function (httpResponseOK) {
	                    if (httpResponseOK.status === 200) {
	                        that.toastr.success(that.$translate.instant('messages.migrationStarted'));
	                        that.estadoSuccess = false;
	                    }
	                }, function (httpResponseFail) {
	                    that.resultError(httpResponseFail);
	                });
	                that.selectAll = payload;
	            }, function (reject) {
	                that.selectAll = false;
	            });
	        }
	        else {
	            this.ngDialog.openConfirm({
	                template: '\  <p>' + this.$translate.instant('messages.cancelMigrationState') + '</p>\
	                <div class="ngdialog-buttons">\
	                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + this.$translate.instant('action.no') + '</button>\
	                    <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + this.$translate.instant('action.yes') + '</button>\
	                </div>',
	                plain: true
	            }).then(function (confirm) {
	                that.MigracionesService.detenerProcesoMigracion(that.selectAll).then(function (httpResponseOK) {
	                    if (httpResponseOK.status === 200) {
	                        that.toastr.success(that.$translate.instant('messages.migrationStopped'));
	                        that.estadoSuccess = false;
	                    }
	                }, function (httpResponseFail) {
	                    that.resultError(httpResponseFail);
	                });
	                that.selectAll = payload;
	            }, function (reject) {
	                that.selectAll = true;
	            });
	        }
	    };
	    EstadoController.prototype.consultarProceso = function () {
	        var that = this;
	        this.MigracionesService.consultarProcesoMigracion().then(function (httpResponseOK) {
	            if (httpResponseOK.status === 200) {
	                that.estadoProceso = httpResponseOK.data;
	                that.estadoProceso.procesoIngestionActivo === 'ACTIVO' ? that.selectAll = true : that.selectAll = false;
	                that.estadoError = true;
	                that.estadoSuccess = false;
	            }
	        }, function (httpResponseFail) {
	            that.resultError(httpResponseFail);
	        });
	    };
	    EstadoController.prototype.resultError = function (payload) {
	        var that = this;
	        that.estadoSuccess = true;
	        that.estadoError = true;
	        that.estadoProceso.nodosIngestion = [];
	        if (payload.status === 503) {
	            that.toastr.error(that.$translate.instant('messages.errorMigrationState503'));
	        }
	        else {
	            if (payload.status === 400) {
	                that.toastr.error(that.$translate.instant('messages.errorMigrationState400'));
	            }
	            else if (payload.status === 401) {
	                that.estadoError = false;
	                that.estadoSuccess = false;
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	            }
	            else if (payload.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	            }
	        }
	    };
	    EstadoController.prototype.$onInit = function () {
	        this.consultarProceso();
	        this.estadoSuccess = true;
	        this.estadoError = false;
	    };
	    EstadoController.prototype.$onDestroy = function () {
	        var that = this;
	    };
	    return EstadoController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EstadoController;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	"use strict";
	var MigracionesService = (function () {
	    /** @ngInject */
	    MigracionesService.$inject = ["Api", "rx", "toastr", "$translate"];
	    function MigracionesService(Api, rx, toastr, $translate) {
	        this.Api = Api;
	        this.rx = rx;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.observableEstado = new this.rx.Subject();
	        this.observableCambiarEstado = new this.rx.Subject();
	    }
	    MigracionesService.prototype.consultarEstadoMigracion = function () {
	        var that = this;
	        this.Api.get('/migracion/estado', '', 'application/json')
	            .then(function (response) {
	            var success = {
	                result: response.data.stopped,
	                error: false
	            };
	            that.observableEstado.onNext(success);
	        }, function (error) {
	            var failure = {
	                result: error.message,
	                error: true
	            };
	            that.observableEstado.onNext(failure);
	        });
	    };
	    MigracionesService.prototype.cambiarEstadoMigracion = function (detener) {
	        var that = this;
	        var data = {
	            stop: detener
	        };
	        this.Api.post('/migracion/reiniciar-detener-migracion', data, 'application/json')
	            .then(function (response) {
	            var success = {
	                result: response,
	                error: false
	            };
	            that.observableCambiarEstado.onNext(success);
	        }, function (error) {
	            var failure = {
	                result: error.message,
	                error: true
	            };
	            that.observableCambiarEstado.onNext(failure);
	        });
	    };
	    MigracionesService.prototype.consultarProcesoMigracion = function () {
	        return this.Api.get_v_ingestion('ingestion/status', '', 'application/json');
	    };
	    MigracionesService.prototype.iniciarProcesoMigracion = function (detener) {
	        var data = { start: true };
	        return this.Api.post_v_ingestion('ingestion/start', data, 'application/json');
	    };
	    MigracionesService.prototype.detenerProcesoMigracion = function (detener) {
	        var data = { start: true };
	        return this.Api.post_v_ingestion('ingestion/stop', data, 'application/json');
	    };
	    return MigracionesService;
	}());
	exports.MigracionesService = MigracionesService;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";
	exports.ReversionesComponent = {
	    templateUrl: 'app/monitoring/components/reversiones/components/reversiones/reversiones.html'
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var consultaReversiones_controller_1 = __webpack_require__(58);
	exports.ConsultaReversionesComponent = {
	    templateUrl: 'app/monitoring/components/reversiones/components/consultaReversiones/consultaReversiones.html',
	    controller: consultaReversiones_controller_1.default
	};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";
	var ConsultaReversionesController = (function () {
	    /** @ngInject */
	    ConsultaReversionesController.$inject = ["ReversionesService", "toastr", "ngDialog", "$translate", "$window", "$state"];
	    function ConsultaReversionesController(ReversionesService, toastr, ngDialog, $translate, $window, $state) {
	        this.ReversionesService = ReversionesService;
	        this.toastr = toastr;
	        this.ngDialog = ngDialog;
	        this.$translate = $translate;
	        this.$window = $window;
	        this.$state = $state;
	    }
	    ConsultaReversionesController.prototype.eliminarPlanilla = function (payload, data) {
	        var that = this;
	        if (payload) {
	            this.ngDialog.openConfirm({
	                template: 'app/monitoring/components/reversiones/components/consultaReversiones/template.html'
	            }).then(function (confirm) {
	                var element = document.getElementById('inputModalEliminar');
	                var paramsDelete = {
	                    nroPlanilla: data.numeroPlanilla,
	                    tipoArchivo: data.tipoArchivo,
	                    nombreArchivo: data.nombreArchivo,
	                    idArchivoSOI: data.idArchivoSOI,
	                    justificacion: element.value == '' ? '' : element.value
	                };
	                that.ReversionesService.delPlanillaReversions(paramsDelete).then(function (httpResponseOK) {
	                    if (httpResponseOK.status === 200) {
	                        that.toastr.success(that.$translate.instant('reversiones.confirmDelete'));
	                    }
	                }, function (httpResponseFail) {
	                    that.resultError(httpResponseFail);
	                });
	            }, function (reject) { });
	        }
	    };
	    ConsultaReversionesController.prototype.descargarPlanilla = function () {
	        var that = this;
	        var dataDowload = that.resultsPlanillas[0];
	        var typeData = dataDowload.tipoArchivo;
	        var stringResult = typeData.split("-", 1).toString();
	        return that.ReversionesService.descargarPlanilla(dataDowload.numeroPlanilla, stringResult).then(function (response) {
	            try {
	                var file = new Blob([response.data], { type: 'text/csv;charset=ut-8;' });
	                var fileURL = URL.createObjectURL(file);
	                var linkElem = $('#link');
	                var element = angular.element(linkElem);
	                var nombre = response.headers('Content-Disposition');
	                var nombreFormato = that.formatFileName(nombre);
	                element.attr({
	                    href: fileURL,
	                    target: '_self',
	                    download: nombreFormato
	                })[0].click();
	            }
	            catch (exception) {
	                that.toastr.error('Error al descargar la planilla: ' + exception);
	            }
	        }, function (error) {
	            if (error.status === 404) {
	                that.toastr.warning(error.data.message);
	            }
	            else if (error.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (error.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                that.toastr.error('Error al descargar el reporte');
	            }
	        });
	    };
	    ConsultaReversionesController.prototype.submitForm = function () {
	        var that = this;
	        if (this.validarNumerico()) {
	            that.consultarPlanilla();
	        }
	        else {
	            this.toastr.error(this.$translate.instant('reversiones.errorPlanillaNumber'));
	        }
	    };
	    ConsultaReversionesController.prototype.consultarPlanilla = function () {
	        var that = this;
	        that.ReversionesService.getArchivosProcesados(that.numeroPlanilla, that.tipoArchivo).then(function (httpResponseOK) {
	            if (httpResponseOK.status === 200) {
	                that.resultsPlanillas = httpResponseOK.data;
	                if (that.resultsPlanillas.length > 0) {
	                    that.estadoError = true;
	                    that.estadoSuccess = false;
	                }
	                else {
	                    that.estadoError = false;
	                    that.estadoSuccess = true;
	                }
	                that.estadoError = true;
	                that.estadoSuccess = false;
	            }
	        }, function (httpResponseFail) {
	            that.resultError(httpResponseFail);
	        });
	    };
	    ConsultaReversionesController.prototype.resultError = function (payload) {
	        var that = this;
	        that.estadoSuccess = true;
	        that.estadoError = true;
	        if (payload.status === 503) {
	            that.toastr.error(that.$translate.instant(payload.data));
	        }
	        else {
	            if (payload.status === 400) {
	                that.toastr.error(that.$translate.instant(payload.data));
	            }
	            else if (payload.status === 401) {
	                that.estadoError = false;
	                that.estadoSuccess = false;
	                that.toastr.error(that.$translate.instant(payload.data));
	                that.$state.go('login');
	            }
	            else if (payload.status === 403) {
	                that.toastr.error(that.$translate.instant(payload.data));
	                that.$state.go('login');
	            }
	            else if (payload.status === 404) {
	                that.toastr.error(that.$translate.instant(payload.data));
	            }
	        }
	    };
	    ConsultaReversionesController.prototype.onlyNumberKey = function (event) {
	        return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
	    };
	    ConsultaReversionesController.prototype.cambiarPeriodo = function (event) {
	        var key = window.event ? event.keyCode : event.which;
	        if (Number(this.numeroPlanilla) || !this.numeroPlanilla) {
	            if (event.keyCode === 8 || event.keyCode === 46
	                || event.keyCode === 37 || event.keyCode === 39) {
	            }
	        }
	    };
	    ConsultaReversionesController.prototype.validarNumerico = function () {
	        if (this.tipoArchivo === 'MINPS' || this.tipoArchivo === 'OINF') {
	            if (/^[0-9]+$/.test(this.numeroPlanilla)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ConsultaReversionesController.prototype.formatFileName = function (name) {
	        var lista = name.split(';');
	        var cont = lista[1];
	        cont = cont.replace(' filename=\"', '');
	        cont = cont.substring(0, cont.length - 1);
	        return cont;
	    };
	    ConsultaReversionesController.prototype.$onInit = function () {
	        this.estadoSuccess = true;
	        this.estadoError = false;
	        this.tipoArchivo = 'MINPS';
	    };
	    ConsultaReversionesController.prototype.$onDestroy = function () {
	        var that = this;
	    };
	    return ConsultaReversionesController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ConsultaReversionesController;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";
	var ReversionesService = (function () {
	    /** @ngInject */
	    ReversionesService.$inject = ["Api", "rx", "toastr", "$translate"];
	    function ReversionesService(Api, rx, toastr, $translate) {
	        this.Api = Api;
	        this.rx = rx;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.observableEstado = new this.rx.Subject();
	        this.observableCambiarEstado = new this.rx.Subject();
	    }
	    ReversionesService.prototype.consultarEstadoMigracion = function () {
	        var that = this;
	        this.Api.get('/migracion/estado', '', 'application/json')
	            .then(function (response) {
	            var success = {
	                result: response.data.stopped,
	                error: false
	            };
	            that.observableEstado.onNext(success);
	        }, function (error) {
	            var failure = {
	                result: error.message,
	                error: true
	            };
	            that.observableEstado.onNext(failure);
	        });
	    };
	    ReversionesService.prototype.cambiarEstadoMigracion = function (detener) {
	        var that = this;
	        var data = {
	            stop: detener
	        };
	        this.Api.post('/migracion/reiniciar-detener-migracion', data, 'application/json')
	            .then(function (response) {
	            var success = {
	                result: response,
	                error: false
	            };
	            that.observableCambiarEstado.onNext(success);
	        }, function (error) {
	            var failure = {
	                result: error.message,
	                error: true
	            };
	            that.observableCambiarEstado.onNext(failure);
	        });
	    };
	    ReversionesService.prototype.getArchivosProcesados = function (id, tipo) {
	        var params = {
	            tipo_archivo: tipo
	        };
	        return this.Api.get3("migracion/estado/" + id, params, 'application/json');
	    };
	    ReversionesService.prototype.delPlanillaReversions = function (data) {
	        return this.Api.del_reversions("migracion/control/reversion", data, false);
	    };
	    ReversionesService.prototype.descargarPlanilla = function (id, tipo) {
	        var params = {
	            tipo_archivo: tipo
	        };
	        return this.Api.get3("migracion/estado/" + id, params, 'text/csv', true, false, 'arraybuffer');
	    };
	    ReversionesService.prototype.iniciarProcesoMigracion = function (detener) {
	        var data = { start: true };
	        return this.Api.post('ingestion/start', data, 'application/json');
	    };
	    ReversionesService.prototype.detenerProcesoMigracion = function (detener) {
	        var data = { start: true };
	        return this.Api.post('ingestion/stop', data, 'application/json');
	    };
	    return ReversionesService;
	}());
	exports.ReversionesService = ReversionesService;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	onlyNumbers.$inject = ["$parse"];
	function onlyNumbers($parse) {
	    return {
	        restrict: 'EA',
	        require: '^ngModel',
	        link: function (scope, element, attrs, ctrl) {
	            // if ngModel is not defined, we don't need to do anything
	            if (!ctrl) {
	                return;
	            }
	            ctrl.$parsers.push(function (val) {
	                if (angular.isUndefined(val)) {
	                    var val = '';
	                }
	                var clean = val.replace(/[^0-9]/g, '');
	                var negativeCheck = clean.split('-');
	                var decimalCheck = clean.split('.');
	                if (!angular.isUndefined(negativeCheck[1])) {
	                    negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
	                    clean = negativeCheck[0] + '-' + negativeCheck[1];
	                    if (negativeCheck[0].length > 0) {
	                        clean = negativeCheck[0];
	                    }
	                }
	                if (!angular.isUndefined(decimalCheck[1])) {
	                    decimalCheck[1] = decimalCheck[1].slice(0, 2);
	                    clean = decimalCheck[0] + '.' + decimalCheck[1];
	                }
	                if (val !== clean) {
	                    ctrl.$setViewValue(clean);
	                    ctrl.$render();
	                }
	                return clean;
	            });
	            element.bind('keypress', function (event) {
	                if (event.keyCode === 32) {
	                    event.preventDefault();
	                }
	            });
	        }
	    };
	}
	exports.onlyNumbers = onlyNumbers;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	exports.ReintentarComponent = {
	    templateUrl: 'app/monitoring/components/reintentar/components/reintentar/reintentar.html'
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var consultaReintentar_controller_1 = __webpack_require__(63);
	exports.ConsultaReintentarComponent = {
	    templateUrl: 'app/monitoring/components/reintentar/components/consultaReintentar/consultaReintentar.html',
	    controller: consultaReintentar_controller_1.default
	};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";
	var ConsultaReintentarController = (function () {
	    /** @ngInject */
	    ConsultaReintentarController.$inject = ["ReintentarService", "toastr", "ngDialog", "$translate", "$window", "$state"];
	    function ConsultaReintentarController(ReintentarService, toastr, ngDialog, $translate, $window, $state) {
	        this.ReintentarService = ReintentarService;
	        this.toastr = toastr;
	        this.ngDialog = ngDialog;
	        this.$translate = $translate;
	        this.$window = $window;
	        this.$state = $state;
	        this.maxDaysConsolidado = 183;
	        this.maxDaysDetallado = 31;
	        this.dateOptions = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: new Date(new Date().getTime() - (61 * 24 * 60 * 60 * 1000)),
	            startingDay: 1
	        };
	        this.dateOptions2 = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: new Date(new Date().getTime() - (61 * 24 * 60 * 60 * 1000)),
	            startingDay: 1
	        };
	        this.tipoReporte = 'Consolidado';
	        this.tipoFormato = 'CSV';
	        this.maxDays = this.maxDaysConsolidado;
	        this.showCalendar1 = false;
	        this.showCalendar2 = false;
	        this.mensajeError = '';
	        this.disableTenantsConsolidado = false;
	        this.disableTenantsDetallado = false;
	        this.pagina = 1;
	        this.totalResultados = 0;
	        this.itemsPerPage = 8;
	    }
	    ConsultaReintentarController.prototype.toggleCalendar1 = function () {
	        this.showCalendar1 = !this.showCalendar1;
	    };
	    ConsultaReintentarController.prototype.toggleCalendar2 = function () {
	        this.showCalendar2 = !this.showCalendar2;
	    };
	    ConsultaReintentarController.prototype.reintentarPlanilla = function (payload, data) {
	        var that = this;
	        var arraySelected = 0;
	        for (var i = 0; i < that.resultadosPagina.length; i++) {
	            if (that.resultadosPagina[i].isSelected) {
	                arraySelected = arraySelected + 1;
	            }
	        }
	        if (arraySelected != 0) {
	            if (payload) {
	                this.ngDialog.openConfirm({
	                    template: 'app/monitoring/components/reintentar/components/consultaReintentar/template.html'
	                }).then(function (confirm) {
	                    var element = document.getElementById('inputModalEliminar');
	                    var dataSendo = [];
	                    for (var i = 0; i < that.resultadosPagina.length; i++) {
	                        if (that.resultadosPagina[i].isSelected) {
	                            dataSendo.push({
	                                nroPlanilla: that.resultadosPagina[i].numeroPlanilla,
	                                tipoArchivo: that.resultadosPagina[i].tipoArchivo,
	                                nombreArchivo: that.resultadosPagina[i].nombreArchivo,
	                                idArchivoSOI: that.resultadosPagina[i].idArchivoSOI,
	                                justificacion: element.value == '' ? '' : element.value
	                            });
	                        }
	                    }
	                    that.ReintentarService.ReintentarPlanillaReversions(dataSendo).then(function (httpResponseOK) {
	                        if (httpResponseOK.status === 200) {
	                            that.toastr.success(that.$translate.instant('reintentar.confirmReintentar'));
	                            that.checkedList = [];
	                        }
	                    }, function (httpResponseFail) {
	                        that.resultError(httpResponseFail);
	                    });
	                }, function (reject) { });
	            }
	        }
	        else {
	            that.toastr.error('Debe seleccionar al menos un archivo para realizar el proceso de reintentar la migración.');
	        }
	    };
	    ConsultaReintentarController.prototype.descargarPlanilla = function () {
	        var that = this;
	        var dataDowload = that.resultsPlanillas[0];
	        var typeData = dataDowload.tipoArchivo;
	        var stringResult = typeData.split("-", 1).toString();
	        return that.ReintentarService.descargarPlanilla(dataDowload.numeroPlanilla, stringResult).then(function (response) {
	            try {
	                var file = new Blob([response.data], { type: 'text/csv;charset=ut-8;' });
	                var fileURL = URL.createObjectURL(file);
	                var linkElem = $('#link');
	                var element = angular.element(linkElem);
	                var nombre = response.headers('Content-Disposition');
	                var nombreFormato = that.formatFileName(nombre);
	                element.attr({
	                    href: fileURL,
	                    target: '_self',
	                    download: nombreFormato
	                })[0].click();
	            }
	            catch (exception) {
	                that.toastr.error('Error al descargar la planilla: ' + exception);
	            }
	        }, function (error) {
	            if (error.status === 404) {
	                that.toastr.warning(error.data.message);
	            }
	            else if (error.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (error.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                that.toastr.error('Error al descargar el reporte');
	            }
	        });
	    };
	    ConsultaReintentarController.prototype.submitForm = function () {
	        var that = this;
	        if (this.validarNumerico()) {
	            that.consultarPlanilla();
	        }
	        else {
	            this.toastr.error(this.$translate.instant('reversiones.errorPlanillaNumber'));
	        }
	    };
	    ConsultaReintentarController.prototype.consultarPlanilla = function () {
	        if (this.fechaInicio.getTime() > this.fechaFin.getTime()) {
	            this.toastr.error('La fecha desde no puede ser posterior a la fecha fin.');
	        }
	        else {
	            var that = this;
	            var params = {
	                desde: this.formatDate(this.fechaInicio),
	                hasta: this.formatDate(this.fechaFin)
	            };
	            that.ReintentarService.getArchivosProcesados(params, that.tipoArchivo).then(function (httpResponseOK) {
	                if (httpResponseOK.status === 200) {
	                    that.pagina = 1;
	                    that.resultsPlanillas = httpResponseOK.data;
	                    for (var i = 0; i < that.resultsPlanillas.length; i++) {
	                        that.resultsPlanillas[i]["isSelected"] = false;
	                    }
	                    that.resultadosPagina = that.resultsPlanillas.slice(0, that.itemsPerPage);
	                    that.totalResultados = that.resultsPlanillas.length;
	                    that.cambiarReferencia(false);
	                    that.masterSelected = false;
	                    if (that.resultsPlanillas.length > 0) {
	                        that.estadoError = true;
	                        that.estadoSuccess = false;
	                    }
	                    else {
	                        that.estadoError = false;
	                        that.estadoSuccess = true;
	                    }
	                    that.estadoError = true;
	                    that.estadoSuccess = false;
	                }
	            }, function (httpResponseFail) {
	                that.resultError(httpResponseFail);
	            });
	        }
	    };
	    ConsultaReintentarController.prototype.resultError = function (payload) {
	        var that = this;
	        that.estadoSuccess = true;
	        that.estadoError = true;
	        if (payload.status === 503 || payload.status === 500) {
	            that.toastr.error(that.$translate.instant('messages.error.service.unavailable'));
	        }
	        else {
	            if (payload.status === 400) {
	                that.toastr.error(that.$translate.instant(payload.data));
	            }
	            else if (payload.status === 401) {
	                that.estadoError = false;
	                that.estadoSuccess = false;
	                that.toastr.error(that.$translate.instant(payload.data));
	                that.$state.go('login');
	            }
	            else if (payload.status === 403) {
	                that.toastr.error(that.$translate.instant(payload.data));
	                that.$state.go('login');
	            }
	            else if (payload.status === 404) {
	                that.toastr.error(that.$translate.instant(payload.data));
	            }
	        }
	    };
	    ConsultaReintentarController.prototype.checkUncheckAll = function (payload) {
	        var that = this;
	        for (var i = 0; i < that.resultadosPagina.length; i++) {
	            that.resultadosPagina[i].isSelected = that.masterSelected;
	        }
	    };
	    ConsultaReintentarController.prototype.isAllSelected = function (payload) {
	        var that = this;
	        that.masterSelected = that.resultadosPagina.every(function (item) {
	            return item.isSelected == true;
	        });
	        /* that.masterSelected = that.resultsPlanillas.every(function(item:any) {
	             return item.isSelected == true;
	         })*/
	    };
	    ConsultaReintentarController.prototype.getCheckedItemList = function () {
	        var that = this;
	        for (var i = 0; i < that.resultadosPagina.length; i++) {
	            if (that.resultadosPagina[i].isSelected)
	                that.checkedList.push(that.resultadosPagina[i]);
	        }
	    };
	    ConsultaReintentarController.prototype.onlyNumberKey = function (event) {
	        return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
	    };
	    ConsultaReintentarController.prototype.copyText = function (payload) {
	        var inputName = "myInput" + payload;
	        var copyText = document.getElementById(inputName);
	        copyText.select();
	        document.execCommand("copy");
	        var tooltipName = "myTooltip" + payload;
	        var tooltip = document.getElementById(tooltipName);
	        tooltip.innerHTML = "Copiado";
	    };
	    ConsultaReintentarController.prototype.outFunc = function (payload) {
	        var tooltipNameOut = "myTooltip" + payload;
	        var tooltip = document.getElementById(tooltipNameOut);
	        tooltip.innerHTML = "Copiar";
	    };
	    ConsultaReintentarController.prototype.cambiarReferencia = function (event) {
	        var that = this;
	        if (event != null && event != undefined && event != '') {
	            that.masterSelected = false;
	            that.checkUncheckAll(that.masterSelected);
	        }
	    };
	    ConsultaReintentarController.prototype.validarNumerico = function () {
	        if (this.tipoArchivo === 'MINPS' || this.tipoArchivo === 'OINF') {
	            if (/^[0-9]+$/.test(this.numeroPlanilla)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ConsultaReintentarController.prototype.formatFileName = function (name) {
	        var lista = name.split(';');
	        var cont = lista[1];
	        cont = cont.replace(' filename=\"', '');
	        cont = cont.substring(0, cont.length - 1);
	        return cont;
	    };
	    ConsultaReintentarController.prototype.formatDate = function (inDate) {
	        var entrada = new Date(inDate);
	        var fecha = '';
	        var fechaMonth = '';
	        if (entrada.getDate() < 10) {
	            fecha = '0' + entrada.getDate();
	        }
	        else {
	            fecha = '' + entrada.getDate();
	        }
	        //bugfix/SDA-985 OCTUBRE 8/2020
	        //moises guerrero
	        //se corrige if (entrada.getMonth() < 10) {  
	        if (entrada.getMonth() + 1 < 10) {
	            fechaMonth = '0' + (entrada.getMonth() + 1);
	        }
	        else {
	            fechaMonth = '' + (entrada.getMonth() + 1);
	        }
	        return '' + entrada.getFullYear() + '-' + (fechaMonth) + '-' + fecha;
	    };
	    ConsultaReintentarController.prototype.changePage = function (actual) {
	        var that = this;
	        var inicio = this.itemsPerPage * (actual.pagina - 1);
	        var final = this.itemsPerPage * (actual.pagina);
	        this.resultadosPagina = this.resultsPlanillas.slice(inicio, final);
	        this.pagina = actual.pagina;
	        that.masterSelected = false;
	        that.checkUncheckAll(that.masterSelected);
	    };
	    ConsultaReintentarController.prototype.$onInit = function () {
	        this.estadoSuccess = true;
	        this.estadoError = false;
	        this.tipoArchivo = 'pago';
	        this.checkedList = [];
	    };
	    ConsultaReintentarController.prototype.$onDestroy = function () {
	        var that = this;
	        that.masterSelected = false;
	    };
	    return ConsultaReintentarController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ConsultaReintentarController;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";
	var ReintentarService = (function () {
	    /** @ngInject */
	    ReintentarService.$inject = ["Api", "rx", "toastr", "$translate"];
	    function ReintentarService(Api, rx, toastr, $translate) {
	        this.Api = Api;
	        this.rx = rx;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.observableEstado = new this.rx.Subject();
	        this.observableCambiarEstado = new this.rx.Subject();
	    }
	    ReintentarService.prototype.consultarEstadoMigracion = function () {
	        var that = this;
	        this.Api.get('/migracion/estado', '', 'application/json')
	            .then(function (response) {
	            var success = {
	                result: response.data.stopped,
	                error: false
	            };
	            that.observableEstado.onNext(success);
	        }, function (error) {
	            var failure = {
	                result: error.message,
	                error: true
	            };
	            that.observableEstado.onNext(failure);
	        });
	    };
	    ReintentarService.prototype.cambiarEstadoMigracion = function (detener) {
	        var that = this;
	        var data = {
	            stop: detener
	        };
	        this.Api.post('/migracion/reiniciar-detener-migracion', data, 'application/json')
	            .then(function (response) {
	            var success = {
	                result: response,
	                error: false
	            };
	            that.observableCambiarEstado.onNext(success);
	        }, function (error) {
	            var failure = {
	                result: error.message,
	                error: true
	            };
	            that.observableCambiarEstado.onNext(failure);
	        });
	    };
	    ReintentarService.prototype.getArchivosProcesados = function (data, tipo) {
	        var that = this;
	        that.fechasDescarga = data;
	        that.tipoDescarga = tipo;
	        return this.Api.get3("migracion/estado/fecha_referencia/" + tipo, data, 'application/json');
	    };
	    ReintentarService.prototype.ReintentarPlanillaReversions = function (data) {
	        return this.Api.put_reintentar("migracion/control/reintento", data, false);
	    };
	    ReintentarService.prototype.descargarPlanilla = function (id, tipo) {
	        var that = this;
	        return this.Api.get3("migracion/estado/fecha_referencia/" + that.tipoDescarga, that.fechasDescarga, 'text/csv', true, false, 'arraybuffer');
	    };
	    ReintentarService.prototype.iniciarProcesoMigracion = function (detener) {
	        var data = { start: true };
	        return this.Api.post('ingestion/start', data, 'application/json');
	    };
	    ReintentarService.prototype.detenerProcesoMigracion = function (detener) {
	        var data = { start: true };
	        return this.Api.post('ingestion/stop', data, 'application/json');
	    };
	    return ReintentarService;
	}());
	exports.ReintentarService = ReintentarService;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var common_module_1 = __webpack_require__(2);
	var consulting_routes_1 = __webpack_require__(66);
	var consultas_component_1 = __webpack_require__(67);
	var individuales_component_1 = __webpack_require__(69);
	var masivas_component_1 = __webpack_require__(71);
	var natural_component_1 = __webpack_require__(73);
	var juridica_component_1 = __webpack_require__(75);
	var extendida_component_1 = __webpack_require__(78);
	var masivasFiltros_component_1 = __webpack_require__(80);
	var massiveQueriesByUser_component_1 = __webpack_require__(82);
	var massiveListConsolidated_component_1 = __webpack_require__(84);
	var massiveListExtended_component_1 = __webpack_require__(86);
	var massiveListFilterExtended_component_1 = __webpack_require__(88);
	var massiveListFilterDetallada_component_1 = __webpack_require__(90);
	var parametro_list_component_1 = __webpack_require__(92);
	var parametro_component_1 = __webpack_require__(94);
	var parametro_filter_component_1 = __webpack_require__(96);
	var parametro_form_component_1 = __webpack_require__(98);
	var consulting_service_1 = __webpack_require__(100);
	var masivasFileReader_directive_1 = __webpack_require__(101);
	var parametro_service_1 = __webpack_require__(102);
	var massiveListLegalConsolidated_component_1 = __webpack_require__(104);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.individuales', [common_module_1.default.name])
	    .config(consulting_routes_1.default)
	    .component('consulting', consultas_component_1.ConsultasComponent)
	    .component('individuales', individuales_component_1.IndividualesComponent)
	    .component('masivas', masivas_component_1.MasivasComponent)
	    .component('naturales', natural_component_1.NaturalComponent)
	    .component('juridicas', juridica_component_1.JuridicaComponent)
	    .component('extendida', extendida_component_1.ExtendidaComponent)
	    .component('masivasfiltros', masivasFiltros_component_1.MasivasFiltrosComponent)
	    .component('massiveQueriesByUser', massiveQueriesByUser_component_1.MassiveQueriesByUserComponent)
	    .component('massiveListConsolidated', massiveListConsolidated_component_1.MassiveListConsolidatedComponent)
	    .component('massiveListExtended', massiveListExtended_component_1.MassiveListExtendedComponent)
	    .component('massiveListFilterDetallada', massiveListFilterDetallada_component_1.MassiveListFilterDetalladaComponent)
	    .component('massiveListFilterExtended', massiveListFilterExtended_component_1.MassiveListFilterExtendedComponent)
	    .component('massiveListLegalConsolidated', massiveListLegalConsolidated_component_1.MassiveListLegalConsolidatedComponent)
	    .service('ConsultingService', consulting_service_1.ConsultingService)
	    .directive('masivasFileReader', masivasFileReader_directive_1.MasivasFileReader)
	    .component('parametro', parametro_component_1.ParametroComponent)
	    .component('parametrolist', parametro_list_component_1.ParametroListComponent)
	    .component('parametroForm', parametro_form_component_1.ParametroFormComponent)
	    .component('parametroFilter', parametro_filter_component_1.ParametroFilterComponent)
	    .service('ParametroService', parametro_service_1.ParametroSrv);


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.consulting', {
	        url: '/consultas',
	        template: '<consulting></consulting>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('consultas');
	            }]
	        }
	    })
	        .state('layout.naturales', {
	        url: '/naturales',
	        template: '<naturales></naturales>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('consultas');
	            }]
	        }
	    })
	        .state('layout.juridicas', {
	        url: '/juridicas',
	        template: '<juridicas></juridicas>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('consultas');
	            }]
	        }
	    })
	        .state('layout.extendida', {
	        url: '/extendida',
	        template: '<extendida></extendida>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('consultas');
	            }]
	        }
	    })
	        .state('layout.masivas-filtros', {
	        url: '/masivas-filtros',
	        template: '<masivasfiltros></masivasfiltros>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('consultas');
	            }]
	        }
	    })
	        .state('layout.parametros', {
	        url: '/parametros',
	        template: '<parametro parametrobinding="$resolve.usuarios.data" ></parametro>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('consultas.parametro');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var consultas_controller_1 = __webpack_require__(68);
	exports.ConsultasComponent = {
	    templateUrl: 'app/consulting/components/consultas/consutas.html',
	    controller: consultas_controller_1.default
	};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";
	var ConsultasController = (function () {
	    /** @ngInject */
	    ConsultasController.$inject = ["environment", "ConsultingService", "$window", "toastr", "$translate", "permissions", "User", "$state"];
	    function ConsultasController(environment, ConsultingService, $window, toastr, $translate, permissions, User, $state) {
	        this.environment = environment;
	        this.ConsultingService = ConsultingService;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.permissions = permissions;
	        this.User = User;
	        this.$state = $state;
	        this.tipoDocumentoNatural = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Carné Diplomático', value: 'CD' },
	            { name: 'Tarjeta de Identidad', value: 'TI' },
	            { name: 'Registro Civil', value: 'RC' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Salvo Conducto', value: 'SC' },
	            { name: 'Permiso Especial', value: 'PE' }
	        ];
	        this.tipoDocumentoJuridica = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'NIT', value: 'NI' },
	            { name: 'Salvo Conducto', value: 'SC' },
	            { name: 'Permiso Especial', value: 'PE' }
	        ];
	        this.tipoIdentificacion = 'CC';
	        this.identificacionAlfanumerica = false;
	        this.porDefecto = true;
	        this.tituloLabel = 'CLIENTE A CONSULTAR';
	        this.documentos = this.tipoDocumentoNatural;
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.consultaImpar = true;
	        this.permisoIndividualNatural = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.individual-natural.consultar');
	        this.permisoIndividualJuridica = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.individual-juridica.consultar');
	        this.permisoMasivaNatural = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.masivas-natural.consultar');
	        this.permisoMasivaJuridica = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.masivas-juridica.consultar');
	        this.verificarSeleccion();
	    }
	    ConsultasController.prototype.$onInit = function () { };
	    ConsultasController.prototype.setConsulta = function (tipo) {
	        this.tipoBusqueda = tipo;
	        this.tituloLabel = (tipo === 'Individual' ? 'CLIENTE A CONSULTAR' : 'DATOS ARCHIVO');
	        this.verificarSeleccionCambioConsulta();
	    };
	    ConsultasController.prototype.cambiarTipoPersona = function (tipo) {
	        this.tipoPersona = tipo;
	        if (this.tipoPersona === 'Natural') {
	            this.documentos = this.tipoDocumentoNatural;
	        }
	        else {
	            this.documentos = this.tipoDocumentoJuridica;
	        }
	        this.tipoIdentificacion = 'CC';
	    };
	    ConsultasController.prototype.sendConsulta = function () {
	        if (this.tipoBusqueda === 'Individual') {
	            this.consultarIndividual();
	        }
	        else {
	            this.consultarMasiva();
	        }
	    };
	    ConsultasController.prototype.consultarMasiva = function () {
	        this.file = this.ConsultingService.getFileMasivas();
	        this.fileUpload = this.ConsultingService.getArchivo();
	        if (!this.file) {
	            if (this.nombreArchivo !== 'Selecciona un archivo') {
	                this.toastr.error(this.$translate.instant('El archivo para la consulta se encuentra vacío.'));
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor, seleccionar un archivo.'));
	            }
	            return false;
	        }
	        if (!this.verificarExtension()) {
	            this.toastr.error(this.$translate.instant('La extensión del archivo debe ser TXT.'));
	            return false;
	        }
	        if (!this.verificarSize()) {
	            this.toastr.error(this.$translate.instant('El archivo debe tener un tamaño máximo de 30MB. Por favor intente nuevamente.'));
	            return false;
	        }
	        var lines = this.file.split(/\r?\n|\r/);
	        var persons = [];
	        if (lines.length >= 50 && lines.length <= 2000000) {
	            var hist = 1;
	            if (this.periodoConsulta) {
	                hist = this.periodoConsulta;
	            }
	            else {
	                hist = 0;
	            }
	            /* var body = {
	               historico: +hist,
	               contenido: persons,
	               nombreConsulta: this.nombreConsulta,
	               nombreArchivoCargado: this.nombreArchivo
	       
	             };*/
	            var body = {
	                nombreConsulta: this.nombreConsulta,
	                tipo: this.tipoPersona,
	                historico: +hist,
	                entidad: this.User.current.tenant,
	                userId: this.User.current.email
	            };
	            var fromData = new FormData();
	            fromData.append('file', this.fileUpload);
	            if (this.nombreConsulta) {
	                var that = this;
	                if (this.tipoPersona === 'Natural') {
	                    this.ConsultingService.consultarNaturalMasiva(body, fromData).then(function (response) {
	                        console.log(response);
	                        console.log('Número de Solicitud: ' + response.data.queryUuid);
	                        that.toastr.success("Consulta enviada exitosamente. N\u00FAmero de solicitud:   " + response.data.queryUuid + ". <br>   Recibir\u00E1 un correo electr\u00F3nico cuando est\u00E9 disponible para descargar.", { allowHtml: true });
	                        that.limpiarMasivas();
	                        that.ConsultingService.massiveQueriesByUserGET(''); // TODO: Eliminar cuando se tenga usuario - Andres Peralta
	                    }, function (error) {
	                        that.limpiarMasivas();
	                        if (error.status === 401) {
	                            that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                            that.$state.go('login');
	                        }
	                        else if (error.status === 403) {
	                            that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                            that.$state.go('login');
	                        }
	                        else {
	                            if (error.data) {
	                                that.toastr.error(error.data);
	                            }
	                            else {
	                                that.toastr.error(that.$translate.instant('Error al enviar la consulta.'));
	                            }
	                        }
	                    });
	                }
	                else {
	                    this.ConsultingService.consultaJuridicaMasiva(body, fromData).then(function (response) {
	                        console.log('Número de Solicitud: ' + response.data.queryUuid);
	                        that.toastr.success("Consulta enviada exitosamente. N\u00FAmero de solicitud:   " + response.data.queryUuid + ". <br>   Recibir\u00E1 un correo electr\u00F3nico cuando est\u00E9 disponible para descargar.", { allowHtml: true });
	                        that.limpiarMasivas();
	                        that.ConsultingService.massiveQueriesByUserGET(''); // TODO: Eliminar cuando se tenga usuario - Andres Peralta
	                    }, function (error) {
	                        if (error.status === 401) {
	                            that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                            that.$state.go('login');
	                        }
	                        else if (error.status === 403) {
	                            that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                            that.$state.go('login');
	                        }
	                        else {
	                            if (error.data) {
	                                that.toastr.error(error.data);
	                            }
	                            else {
	                                that.toastr.error(that.$translate.instant('Error al enviar la consulta.'));
	                            }
	                        }
	                    });
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor ingrese un nombre para la consulta.'));
	            }
	        }
	        else {
	            this.toastr.error(this.$translate.instant('masivas.incorrectFile', { num: lines.length }));
	        }
	    };
	    ConsultasController.prototype.consultarIndividual = function () {
	        // this.toastr.clear();
	        if (this.validarNumeroIdentificacion()) {
	            if (this.validarPeriodo()) {
	                if (this.validarAlfanumerico() && this.validarNumerico()) {
	                    if (this.tipoPersona === 'Natural') {
	                        this.servicioNaturalIndividual();
	                    }
	                    else if (this.tipoPersona === 'Juridica') {
	                        this.servicioJuridicaIndividual();
	                    }
	                }
	                else {
	                    if (this.esAlfanumerico()) {
	                        this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                    }
	                    else if (this.esNumerico()) {
	                        this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                    }
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongPeriod'));
	            }
	        }
	    };
	    ConsultasController.prototype.cambiarPeriodo = function (event) {
	        var key = window.event ? event.keyCode : event.which;
	        if (Number(this.periodoConsulta) || !this.periodoConsulta) {
	            if (event.keyCode === 8 || event.keyCode === 46
	                || event.keyCode === 37 || event.keyCode === 39) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key > 95 && key < 107) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key < 48 || key > 57) {
	                this.periodoConsulta = this.periodoConsultaAlt;
	            }
	            else {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	        }
	        else {
	            this.periodoConsulta = this.periodoConsultaAlt;
	        }
	    };
	    ConsultasController.prototype.servicioNaturalIndividual = function () {
	        var periodo;
	        var ultimaPlanilla;
	        if (this.periodoConsulta) {
	            periodo = this.periodoConsulta;
	            ultimaPlanilla = false;
	        }
	        else {
	            periodo = this.environment.maxPeriods;
	            ultimaPlanilla = true;
	        }
	        var that = this;
	        this.ConsultingService.consultarNaturalIndividual(this.tipoIdentificacion, this.numeroIdentificacion, periodo, ultimaPlanilla).then(function (response) {
	            if (!response.error) {
	                that.porDefecto = false;
	                that.$window.open(response.data);
	            }
	            else {
	                if (response.data === 404) {
	                    that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	                }
	                else if (response.data === 401) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 403) {
	                    that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 409) {
	                    that.toastr.warning(that.$translate.instant('messages.error.useAuth'));
	                }
	                else {
	                    that.toastr.error(that.$translate.instant('messages.queryError'));
	                }
	            }
	        }, function (error) {
	            that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	        });
	    };
	    ConsultasController.prototype.servicioJuridicaIndividual = function () {
	        var periodo;
	        var ultimaPlanilla;
	        if (this.periodoConsulta) {
	            periodo = this.periodoConsulta;
	            ultimaPlanilla = false;
	        }
	        else {
	            periodo = this.environment.maxPeriods;
	            ultimaPlanilla = true;
	        }
	        var that = this;
	        this.ConsultingService.consultarJuridicaIndividual(this.tipoIdentificacion, this.numeroIdentificacion, periodo, ultimaPlanilla).then(function (response) {
	            if (!response.error) {
	                that.porDefecto = false;
	                that.$window.open(response.data);
	            }
	            else {
	                if (response.data === 404) {
	                    that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	                }
	                else if (response.data === 401) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 403) {
	                    that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 409) {
	                    that.toastr.warning(that.$translate.instant('messages.error.useAuth'));
	                }
	                else {
	                    that.toastr.error(that.$translate.instant('messages.queryError'));
	                }
	            }
	        }, function (error) {
	            that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	        });
	    };
	    ConsultasController.prototype.validarAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ConsultasController.prototype.validarNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            if (/^[0-9]+$/.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ConsultasController.prototype.esNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ConsultasController.prototype.esAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ConsultasController.prototype.validarPeriodo = function () {
	        if (this.periodoConsulta) {
	            if (/^[0-9]+$/.test('' + this.periodoConsulta)) {
	                if (this.periodoConsulta >= 1 && this.periodoConsulta) {
	                    return true;
	                }
	                else {
	                    return false;
	                }
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ConsultasController.prototype.validarNumeroIdentificacion = function () {
	        if (this.numeroIdentificacion) {
	            if (this.numeroIdentificacion.length > 1) {
	                if (this.validarCaracteresEspeciales()) {
	                    return true;
	                }
	                else {
	                    this.toastr.error(this.$translate.instant('individuales.idSpecialChars'));
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongId'));
	            }
	        }
	        else {
	        }
	        return false;
	    };
	    ConsultasController.prototype.validarCaracteresEspeciales = function () {
	        if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ConsultasController.prototype.periodoMayor = function () {
	        if (this.periodoConsulta > this.environment.maxPeriods) {
	            this.periodoConsulta = this.environment.maxPeriods;
	            this.periodoConsultaAlt = this.environment.maxPeriods;
	        }
	    };
	    ConsultasController.prototype.verificarExtension = function () {
	        if (this.nombreArchivo.length > 4) {
	            var ext = this.nombreArchivo.substring(this.nombreArchivo.length - 4, this.nombreArchivo.length);
	            if (ext === '.csv' || ext === '.txt') {
	                return true;
	            }
	        }
	        return false;
	    };
	    ConsultasController.prototype.verificarSize = function () {
	        if (this.fileUpload.size <= 31457280) {
	            return true;
	        }
	        return false;
	    };
	    ConsultasController.prototype.limpiarMasivas = function () {
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.ConsultingService.setFileMasivas('', '', '');
	        this.nombreConsulta = '';
	        this.periodoConsulta = undefined;
	        this.consultaImpar = !this.consultaImpar;
	        document.getElementById("file-1").setAttribute('value', '');
	    };
	    ConsultasController.prototype.verificarSeleccion = function () {
	        if (this.permisoIndividualNatural) {
	            this.tipoBusqueda = 'Individual';
	            this.tipoPersona = 'Natural';
	            this.tituloLabel = 'CLIENTE A CONSULTAR';
	        }
	        else if (this.permisoIndividualJuridica) {
	            this.tipoBusqueda = 'Individual';
	            this.tipoPersona = 'Juridica';
	            this.tituloLabel = 'CLIENTE A CONSULTAR';
	            this.documentos = this.tipoDocumentoJuridica;
	        }
	        else if (this.permisoMasivaNatural) {
	            this.tipoBusqueda = 'Masiva';
	            this.tipoPersona = 'Natural';
	            this.tituloLabel = 'DATOS ARCHIVO';
	        }
	        else if (this.permisoMasivaJuridica) {
	            this.tipoBusqueda = 'Masiva';
	            this.tipoPersona = 'Juridica';
	            this.tituloLabel = 'DATOS ARCHIVO';
	            this.documentos = this.tipoDocumentoJuridica;
	        }
	        else {
	            this.toastr.error('No tiene los permisos necesarios para realizar consultas.');
	            this.$state.go('login');
	        }
	    };
	    ConsultasController.prototype.verificarSeleccionCambioConsulta = function () {
	        if (this.tipoBusqueda === 'Individual') {
	            if (this.tipoPersona === 'Natural') {
	                if (this.permisoIndividualNatural) {
	                    this.tipoPersona = 'Natural';
	                }
	                else if (this.permisoIndividualJuridica) {
	                    this.tipoPersona = 'Juridica';
	                }
	            }
	            else if (this.tipoPersona === 'Juridica') {
	                if (this.permisoIndividualJuridica) {
	                    this.tipoPersona = 'Juridica';
	                }
	                else if (this.permisoIndividualNatural) {
	                    this.tipoPersona = 'Natural';
	                }
	            }
	            this.tituloLabel = 'CLIENTE A CONSULTAR';
	        }
	        else if (this.tipoBusqueda === 'Masiva') {
	            if (this.tipoPersona === 'Natural') {
	                if (this.permisoMasivaNatural) {
	                    this.tipoPersona = 'Natural';
	                }
	                else if (this.permisoMasivaJuridica) {
	                    this.tipoPersona = 'Juridica';
	                }
	            }
	            else if (this.tipoPersona === 'Juridica') {
	                if (this.permisoMasivaJuridica) {
	                    this.tipoPersona = 'Juridica';
	                }
	                else if (this.permisoMasivaNatural) {
	                    this.tipoPersona = 'Natural';
	                }
	            }
	            this.tituloLabel = 'DATOS ARCHIVO';
	        }
	    };
	    return ConsultasController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ConsultasController;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var individuales_controller_1 = __webpack_require__(70);
	exports.IndividualesComponent = {
	    templateUrl: 'app/consulting/components/individuales/individuales.html',
	    controller: individuales_controller_1.default,
	    bindings: {
	        'tipoPersona': '<',
	        'documentos': '<',
	        'tipoIdentificacion': '=',
	        'numeroIdentificacion': '='
	    }
	};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	"use strict";
	var IndividualesController = (function () {
	    function IndividualesController() {
	    }
	    return IndividualesController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = IndividualesController;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var masivas_controller_1 = __webpack_require__(72);
	exports.MasivasComponent = {
	    templateUrl: 'app/consulting/components/masivas/masivas.html',
	    controller: masivas_controller_1.default,
	    bindings: {
	        nombreConsulta: '=',
	        nombreArchivo: '=',
	        consultaImpar: '=',
	    }
	};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";
	var MasivasController = (function () {
	    /** @ngInject */
	    MasivasController.$inject = ["ConsultingService", "$timeout", "$window"];
	    function MasivasController(ConsultingService, $timeout, $window) {
	        this.ConsultingService = ConsultingService;
	        this.$timeout = $timeout;
	        this.$window = $window;
	    }
	    MasivasController.prototype.observarNombre = function () {
	        var that = this;
	        this.observableNombre = this.ConsultingService.observableFileName;
	        this.observableNombre.subscribe(function (success) {
	            that.$timeout(function () {
	                if (success) {
	                    that.nombreArchivo = success;
	                }
	                else {
	                    that.nombreArchivo = 'Selecciona un archivo';
	                }
	            }, 0);
	        }, function (err) {
	            that.nombreArchivo = 'Selecciona un archivo';
	        }, function () {
	            that.nombreArchivo = 'Selecciona un archivo';
	        });
	    };
	    MasivasController.prototype.$onInit = function () {
	        this.observarNombre();
	        this.flagExtendidaNatural = this.$window.location.pathname == '/extendida' ? false : true;
	    };
	    MasivasController.prototype.$onDestroy = function () {
	        this.observableNombre.observers = [];
	    };
	    return MasivasController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MasivasController;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var natural_controller_1 = __webpack_require__(74);
	exports.NaturalComponent = {
	    templateUrl: 'app/consulting/components/natural/natural.html',
	    controller: natural_controller_1.default
	};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

	"use strict";
	var NaturalController = (function () {
	    /** @ngInject */
	    NaturalController.$inject = ["environment", "ConsultingService", "$window", "toastr", "$translate", "permissions", "User", "$state"];
	    function NaturalController(environment, ConsultingService, $window, toastr, $translate, permissions, User, $state) {
	        this.environment = environment;
	        this.ConsultingService = ConsultingService;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.permissions = permissions;
	        this.User = User;
	        this.$state = $state;
	        this.tipoDocumentoNatural = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Carné Diplomático', value: 'CD' },
	            { name: 'Tarjeta de Identidad', value: 'TI' },
	            { name: 'Registro Civil', value: 'RC' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Salvo Conducto', value: 'SC' },
	            { name: 'Permiso Especial', value: 'PE' }
	        ];
	        this.tipoIdentificacion = 'CC';
	        this.identificacionAlfanumerica = false;
	        this.porDefecto = true;
	        this.tituloLabel = 'CLIENTE A CONSULTAR';
	        this.documentos = this.tipoDocumentoNatural;
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.consultaImpar = true;
	        this.permisoIndividualNatural = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.consolidada.individual-natural.consultar');
	        this.permisoMasivaNatural = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.consolidada.masivas-natural.consultar');
	        this.verificarSeleccion();
	    }
	    NaturalController.prototype.$onInit = function () { };
	    NaturalController.prototype.setConsulta = function (tipo) {
	        this.tipoBusqueda = tipo;
	        this.tituloLabel = (tipo === 'Individual' ? 'CLIENTE A CONSULTAR' : 'DATOS ARCHIVO');
	        this.verificarSeleccionCambioConsulta();
	    };
	    NaturalController.prototype.cambiarTipoPersona = function (tipo) {
	        this.tipoPersona = tipo;
	        if (this.tipoPersona === 'Natural') {
	            this.documentos = this.tipoDocumentoNatural;
	        }
	        this.tipoIdentificacion = 'CC';
	    };
	    NaturalController.prototype.sendConsultaConsolidada = function () {
	        if (this.tipoBusqueda === 'Individual') {
	            this.consultarIndividual();
	        }
	        else {
	            this.consultarMasiva();
	        }
	    };
	    NaturalController.prototype.consultarMasiva = function () {
	        this.file = this.ConsultingService.getFileMasivas();
	        this.fileUpload = this.ConsultingService.getArchivo();
	        if (!this.file) {
	            if (this.nombreArchivo !== 'Selecciona un archivo') {
	                this.toastr.error(this.$translate.instant('El archivo para la consulta se encuentra vacío.'));
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor, seleccionar un archivo.'));
	            }
	            return false;
	        }
	        if (!this.verificarExtension()) {
	            this.toastr.error(this.$translate.instant('La extensión del archivo debe ser TXT.'));
	            return false;
	        }
	        if (!this.verificarSize()) {
	            this.toastr.error(this.$translate.instant('El archivo debe tener un tamaño máximo de 30MB. Por favor intente nuevamente.'));
	            return false;
	        }
	        var lines = this.file.split(/\r?\n|\r/);
	        var persons = [];
	        if (lines.length >= 50 && lines.length <= 2000000) {
	            var hist = 1;
	            if (this.periodoConsulta) {
	                hist = this.periodoConsulta;
	            }
	            else {
	                hist = 0;
	            }
	            /* var body = {
	               historico: +hist,
	               contenido: persons,
	               nombreConsulta: this.nombreConsulta,
	               nombreArchivoCargado: this.nombreArchivo
	       
	             };*/
	            var body = {
	                nombreConsulta: this.nombreConsulta,
	                tipo: this.tipoPersona,
	                historico: +hist,
	                entidad: this.User.current.tenant,
	                userId: this.User.current.email
	            };
	            var fromData = new FormData();
	            fromData.append('file', this.fileUpload);
	            if (this.nombreConsulta) {
	                if (this.periodoConsulta) {
	                    var that = this;
	                    if (this.tipoPersona === 'Natural') {
	                        this.ConsultingService.consultarNaturalConsolidadoMasiva(body, fromData).then(function (response) {
	                            console.log(response);
	                            console.log('Número de Solicitud: ' + response.data.queryUuid);
	                            that.toastr.success("Consulta enviada exitosamente. N\u00FAmero de solicitud:   " + response.data.queryUuid + ". <br>   Recibir\u00E1 un correo electr\u00F3nico cuando est\u00E9 disponible para descargar.", { allowHtml: true });
	                            that.limpiarMasivas();
	                            that.ConsultingService.massiveListConsolidatedGET(''); // TODO: Eliminar cuando se tenga usuario - Andres Peralta
	                        }, function (error) {
	                            that.limpiarMasivas();
	                            if (error.status === 401) {
	                                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                                that.$state.go('login');
	                            }
	                            else if (error.status === 403) {
	                                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                                that.$state.go('login');
	                            }
	                            else {
	                                if (error.data) {
	                                    that.toastr.error(error.data);
	                                }
	                                else {
	                                    that.toastr.error(that.$translate.instant('Error al enviar la consulta.'));
	                                }
	                            }
	                        });
	                    }
	                }
	                else {
	                    this.toastr.error(this.$translate.instant('Por favor ingrese un período para la consulta.'));
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor ingrese un nombre para la consulta.'));
	            }
	        }
	        else {
	            this.toastr.error(this.$translate.instant('masivas.incorrectFile', { num: lines.length }));
	        }
	    };
	    NaturalController.prototype.consultarIndividual = function () {
	        if (this.validarNumeroIdentificacion()) {
	            if (this.validarPeriodo()) {
	                if (this.validarAlfanumerico() && this.validarNumerico()) {
	                    if (this.tipoPersona === 'Natural') {
	                        this.servicioNaturalIndividual();
	                    }
	                }
	                else {
	                    if (this.esAlfanumerico()) {
	                        this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                    }
	                    else if (this.esNumerico()) {
	                        this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                    }
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongPeriod'));
	            }
	        }
	    };
	    NaturalController.prototype.cambiarPeriodo = function (event) {
	        var key = window.event ? event.keyCode : event.which;
	        if (Number(this.periodoConsulta) || !this.periodoConsulta) {
	            if (event.keyCode === 8 || event.keyCode === 46
	                || event.keyCode === 37 || event.keyCode === 39) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key > 95 && key < 107) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key < 48 || key > 57) {
	                this.periodoConsulta = this.periodoConsultaAlt;
	            }
	            else {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	        }
	        else {
	            this.periodoConsulta = this.periodoConsultaAlt;
	        }
	    };
	    NaturalController.prototype.servicioNaturalIndividual = function () {
	        var periodo;
	        var ultimaPlanilla;
	        if (this.periodoConsulta) {
	            periodo = this.periodoConsulta;
	            ultimaPlanilla = false;
	            var that = this;
	            this.ConsultingService.consultarNaturalConsolidadoIndividual(this.tipoIdentificacion, this.numeroIdentificacion, periodo, ultimaPlanilla).then(function (response) {
	                if (!response.error) {
	                    that.porDefecto = false;
	                    that.$window.open(response.data);
	                }
	                else {
	                    if (response.data === 404) {
	                        that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	                    }
	                    else if (response.data === 401) {
	                        that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                        that.$state.go('login');
	                    }
	                    else if (response.data === 403) {
	                        that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                        that.$state.go('login');
	                    }
	                    else if (response.data === 409) {
	                        that.toastr.warning(that.$translate.instant('messages.error.useAuth'));
	                    }
	                    else {
	                        that.toastr.error(that.$translate.instant('messages.queryError'));
	                    }
	                }
	            }, function (error) {
	                that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	            });
	        }
	        else {
	            this.toastr.error('Por favor ingrese un período para la consulta.');
	        }
	    };
	    NaturalController.prototype.validarAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    NaturalController.prototype.validarNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            if (/^[0-9]+$/.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    NaturalController.prototype.esNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    NaturalController.prototype.esAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    NaturalController.prototype.validarPeriodo = function () {
	        if (this.periodoConsulta) {
	            if (/^[0-9]+$/.test('' + this.periodoConsulta)) {
	                if (this.periodoConsulta >= 1 && this.periodoConsulta) {
	                    return true;
	                }
	                else {
	                    return false;
	                }
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    NaturalController.prototype.validarNumeroIdentificacion = function () {
	        if (this.numeroIdentificacion) {
	            if (this.numeroIdentificacion.length > 1) {
	                if (this.validarCaracteresEspeciales()) {
	                    return true;
	                }
	                else {
	                    this.toastr.error(this.$translate.instant('individuales.idSpecialChars'));
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongId'));
	            }
	        }
	        else {
	        }
	        return false;
	    };
	    NaturalController.prototype.validarCaracteresEspeciales = function () {
	        if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    NaturalController.prototype.periodoMayor = function () {
	        if (this.periodoConsulta > this.environment.maxPeriods) {
	            this.periodoConsulta = this.environment.maxPeriods;
	            this.periodoConsultaAlt = this.environment.maxPeriods;
	        }
	    };
	    NaturalController.prototype.verificarExtension = function () {
	        if (this.nombreArchivo.length > 4) {
	            var ext = this.nombreArchivo.substring(this.nombreArchivo.length - 4, this.nombreArchivo.length);
	            if (ext === '.csv' || ext === '.txt') {
	                return true;
	            }
	        }
	        return false;
	    };
	    NaturalController.prototype.limpiarMasivas = function () {
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.ConsultingService.setFileMasivas('', '', '');
	        this.nombreConsulta = '';
	        this.periodoConsulta = undefined;
	        this.consultaImpar = !this.consultaImpar;
	        document.getElementById("file-1").setAttribute('value', '');
	    };
	    NaturalController.prototype.verificarSeleccion = function () {
	        if (this.permisoIndividualNatural) {
	            this.tipoBusqueda = 'Individual';
	            this.tipoPersona = 'Natural';
	            this.tituloLabel = 'CLIENTE A CONSULTAR';
	        }
	        else if (this.permisoMasivaNatural) {
	            this.tipoBusqueda = 'Masiva';
	            this.tipoPersona = 'Natural';
	            this.tituloLabel = 'DATOS ARCHIVO';
	        }
	        else {
	            this.toastr.error('No tiene los permisos necesarios para realizar consultas.');
	            this.$state.go('login');
	        }
	    };
	    NaturalController.prototype.verificarSize = function () {
	        if (this.fileUpload.size <= 31457280) {
	            return true;
	        }
	        return false;
	    };
	    NaturalController.prototype.verificarSeleccionCambioConsulta = function () {
	        if (this.tipoBusqueda === 'Individual') {
	            if (this.tipoPersona === 'Natural') {
	                if (this.permisoIndividualNatural) {
	                    this.tipoPersona = 'Natural';
	                }
	            }
	            this.tituloLabel = 'CLIENTE A CONSULTAR';
	        }
	        else if (this.tipoBusqueda === 'Masiva') {
	            if (this.tipoPersona === 'Natural') {
	                if (this.permisoMasivaNatural) {
	                    this.tipoPersona = 'Natural';
	                }
	            }
	            this.tituloLabel = 'DATOS ARCHIVO';
	        }
	    };
	    return NaturalController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NaturalController;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var juridica_controller_1 = __webpack_require__(76);
	exports.JuridicaComponent = {
	    templateUrl: 'app/consulting/components/juridica/juridica.html',
	    controller: juridica_controller_1.default
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var validator_1 = __webpack_require__(77);
	var JuridicaController = (function () {
	    /** @ngInject */
	    JuridicaController.$inject = ["ConsultingService", "$window", "toastr", "$translate", "permissions", "User", "$state"];
	    function JuridicaController(ConsultingService, $window, toastr, $translate, permissions, User, $state) {
	        this.ConsultingService = ConsultingService;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.permissions = permissions;
	        this.User = User;
	        this.$state = $state;
	        this.tipoDocumentoJuridica = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'NIT', value: 'NI' },
	            { name: 'Salvo Conducto', value: 'SC' },
	            { name: 'Permiso Especial', value: 'PE' }
	        ];
	        this.tipoIdentificacion = 'CC';
	        this.identificacionAlfanumerica = false;
	        this.mostrarInformacionIndividual = false;
	        this.tituloLabel = 'CLIENTE A CONSULTAR';
	        this.documentos = this.tipoDocumentoJuridica;
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.consultaImpar = true;
	        this.permisoConsolidadoJuridica = true;
	        this.verificarSeleccion();
	        this.setRangosSalarios();
	    }
	    JuridicaController.prototype.$onInit = function () { };
	    //SETTERS
	    JuridicaController.prototype.setConsulta = function (tipo) {
	        this.mostrarInformacionIndividual = false;
	        this.tipoConsulta = tipo;
	        this.tituloLabel = (tipo === 'Individual' ? 'CLIENTE A CONSULTAR' : 'DATOS ARCHIVO');
	        this.verificarSeleccionCambioConsulta();
	        this.setRangosSalarios();
	    };
	    JuridicaController.prototype.setRangosSalarios = function () {
	        this.mostrarInformacionIndividual = false;
	        this.rangosSalarios = [];
	        for (var i = 0; i < 5; i++) {
	            this.rangosSalarios.push({ indice: i, limiteInferior: i !== 0 ? '' : '$0', limiteSuperior: '' });
	        }
	    };
	    JuridicaController.prototype.setLimiteSuperior = function (indice) {
	        var rangoSelected = this.rangosSalarios.find(function (limite) { return limite.indice === indice; });
	        var limiteInfAux = Number(rangoSelected.limiteSuperior.replace(/\$/g, '').replace(/\./g, ''));
	        rangoSelected.limiteSuperior = '$' + limiteInfAux.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	        this.rangosSalarios[indice] = rangoSelected;
	        if (indice !== this.rangosSalarios.length - 1) {
	            var rangoSelectedSuperior = this.rangosSalarios.find(function (limite) { return limite.indice === indice + 1; });
	            if (rangoSelected.limiteSuperior === "$0") {
	                rangoSelected.limiteSuperior = '';
	                rangoSelectedSuperior.limiteInferior = '';
	                this.rangosSalarios[indice] = rangoSelected;
	                this.rangosSalarios[indice + 1] = rangoSelectedSuperior;
	            }
	            else {
	                var limiteInfAuxSuperior = Number(rangoSelected.limiteSuperior.replace(/\$/g, '').replace(/\./g, '')) + 1;
	                rangoSelectedSuperior.limiteInferior = '$' + limiteInfAuxSuperior.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	                this.rangosSalarios[indice + 1] = rangoSelectedSuperior;
	            }
	        }
	        else {
	            if (rangoSelected.limiteSuperior === "$0") {
	                rangoSelected.limiteSuperior = '';
	                this.rangosSalarios[indice] = rangoSelected;
	            }
	        }
	    };
	    JuridicaController.prototype.sendConsultaConsolidada = function () {
	        if (this.tipoConsulta === 'Individual') {
	            this.consultarIndividual();
	        }
	        else {
	            this.consultarMasiva();
	        }
	    };
	    JuridicaController.prototype.consultarMasiva = function () {
	        if (validator_1.verificarIngresosJuridicaConsolidada(this.rangosSalarios).length === 0) {
	            this.toastr.warning(this.$translate.instant('messages.minimoPrimerRangoSalario'));
	            return false;
	        }
	        this.file = this.ConsultingService.getFileMasivas();
	        this.fileUpload = this.ConsultingService.getArchivo();
	        if (!this.file) {
	            if (this.nombreArchivo !== 'Selecciona un archivo') {
	                this.toastr.error(this.$translate.instant('El archivo para la consulta se encuentra vacío.'));
	                this.limpiarMasivas();
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor, seleccionar un archivo.'));
	            }
	            return false;
	        }
	        if (!validator_1.verificarExtension(this.nombreArchivo)) {
	            this.toastr.error(this.$translate.instant('La extensión del archivo debe ser TXT.'));
	            return false;
	        }
	        /*
	            if (verificarSize(this.fileUpload.size)) {
	              this.toastr.error(this.$translate.instant('El archivo debe tener un tamaño máximo de 30MB. Por favor intente nuevamente.'));
	              return false;
	            }
	        */
	        var lines = this.file.split(/\r?\n|\r/);
	        if (lines.length >= 1 && lines.length <= 500000) {
	            var formData = new FormData();
	            var blob = new Blob([this.fileUpload], { type: "text/csv" });
	            formData.append('file', blob, this.nombreArchivo);
	            formData.append('nombreConsulta', this.nombreConsulta);
	            formData.append('ingresos', JSON.stringify(validator_1.verificarIngresosJuridicaConsolidada(this.rangosSalarios)));
	            if (this.nombreConsulta) {
	                var that = this;
	                this.ConsultingService.consultarConsolidadaEmpresasMasiva(formData).then(function (response) {
	                    console.log('Número de Solicitud: ' + response.data.queryUuid);
	                    that.toastr.success("Consulta enviada exitosamente. N\u00FAmero de solicitud:   " + response.data.queryUuid + ". <br>   Recibir\u00E1 un correo electr\u00F3nico cuando est\u00E9 disponible para descargar.", { allowHtml: true });
	                    that.limpiarMasivas();
	                    that.ConsultingService.massiveListLegalConsolidatedGET(''); // TODO: Eliminar cuando se tenga usuario - Andres Peralta
	                }, function (error) {
	                    that.limpiarMasivas();
	                    if (error.status === 401) {
	                        that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                        that.$state.go('login');
	                    }
	                    else if (error.status === 403) {
	                        that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                        that.$state.go('login');
	                    }
	                    else {
	                        if (error.data) {
	                            that.toastr.error(error.data);
	                        }
	                        else {
	                            that.toastr.error(that.$translate.instant('Error al enviar la consulta.'));
	                        }
	                    }
	                });
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor ingrese un nombre para la consulta.'));
	            }
	        }
	        else {
	            this.toastr.error(this.$translate.instant('masivas.incorrectFileLegalConsolidated', { num: lines.length }));
	        }
	    };
	    JuridicaController.prototype.consultarIndividual = function () {
	        if (this.validarNumeroIdentificacion()) {
	            if (validator_1.validarAlfanumerico(this.tipoIdentificacion, this.numeroIdentificacion) && validator_1.validarNumerico(this.tipoIdentificacion, this.numeroIdentificacion)) {
	                if (this.tipoPersona === 'Juridica') {
	                    this.servicioJuridicaConsolidadaIndividualJSON();
	                }
	            }
	            else {
	                if (validator_1.esAlfanumerico(this.tipoIdentificacion)) {
	                    this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                }
	                else if (validator_1.esNumerico(this.tipoIdentificacion)) {
	                    this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                }
	            }
	        }
	    };
	    JuridicaController.prototype.servicioJuridicaConsolidadaIndividualJSON = function () {
	        if (validator_1.verificarIngresosJuridicaConsolidada(this.rangosSalarios).length === 0) {
	            this.toastr.warning(this.$translate.instant('messages.minimoPrimerRangoSalario'));
	            return false;
	        }
	        var data = {
	            "responseType": "application/json",
	            "ingresos": validator_1.verificarIngresosJuridicaConsolidada(this.rangosSalarios)
	        };
	        var that = this;
	        that.mostrarInformacionIndividual = false;
	        this.ConsultingService.consultarJuridicaConsolidadaIndividualJSON(this.tipoIdentificacion, this.numeroIdentificacion, data).then(function (response) {
	            if (!response.error) {
	                that.mostrarInformacionIndividual = true;
	                that.informacionJuridicaConsolidada = response.data[0];
	            }
	            else {
	                if (response.data === 400) {
	                    that.toastr.warning(that.$translate.instant(response.message));
	                }
	                else if (response.data === 404) {
	                    that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	                }
	                else if (response.data === 401) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 403) {
	                    that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 409) {
	                    that.toastr.warning(that.$translate.instant('messages.error.useAuth'));
	                }
	                else {
	                    that.toastr.error(that.$translate.instant('messages.queryError'));
	                }
	            }
	        }, function (error) {
	            that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	        });
	    };
	    JuridicaController.prototype.servicioJuridicaConsolidadaIndividualPDF = function () {
	        if (validator_1.verificarIngresosJuridicaConsolidada(this.rangosSalarios).length === 0) {
	            this.toastr.warning(this.$translate.instant('messages.minimoPrimerRangoSalario'));
	            return false;
	        }
	        var data = {
	            "responseType": "application/pdf",
	            "ingresos": validator_1.verificarIngresosJuridicaConsolidada(this.rangosSalarios)
	        };
	        var that = this;
	        this.ConsultingService.consultarJuridicaConsolidadaIndividualPDF(this.tipoIdentificacion, this.numeroIdentificacion, data).then(function (response) {
	            if (!response.error) {
	                that.$window.open(response.data);
	            }
	            else {
	                if (response.data === 404) {
	                    that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	                }
	                else if (response.data === 401) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 403) {
	                    that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 409) {
	                    that.toastr.warning(that.$translate.instant('messages.error.useAuth'));
	                }
	                else {
	                    that.toastr.error(that.$translate.instant('messages.queryError'));
	                }
	            }
	        }, function (error) {
	            that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	        });
	    };
	    JuridicaController.prototype.limpiarMasivas = function () {
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.ConsultingService.setFileMasivas('', '', '');
	        this.nombreConsulta = '';
	        this.consultaImpar = !this.consultaImpar;
	        document.getElementById("file-1").setAttribute('value', '');
	    };
	    JuridicaController.prototype.verificarSeleccion = function () {
	        if (this.permisoConsolidadoJuridica) {
	            this.tipoConsulta = 'Individual';
	            this.tipoPersona = 'Juridica';
	            this.tituloLabel = 'CLIENTE A CONSULTAR';
	        }
	        else {
	            this.toastr.error('No tiene los permisos necesarios para realizar consultas.');
	            this.$state.go('login');
	        }
	    };
	    JuridicaController.prototype.verificarSeleccionCambioConsulta = function () {
	        if (this.tipoConsulta === 'Individual') {
	            if (this.tipoPersona === 'Juridica') {
	                this.tipoPersona = 'Juridica';
	            }
	            this.tituloLabel = 'CLIENTE A CONSULTAR';
	        }
	        else if (this.tipoConsulta === 'Masiva') {
	            if (this.tipoPersona === 'Juridica') {
	                this.tipoPersona = 'Juridica';
	            }
	            this.tituloLabel = 'DATOS ARCHIVO';
	        }
	    };
	    JuridicaController.prototype.validarNumeroIdentificacion = function () {
	        if (this.numeroIdentificacion) {
	            if (this.numeroIdentificacion.length > 1) {
	                if (validator_1.validarCaracteresEspeciales(this.numeroIdentificacion)) {
	                    return true;
	                }
	                else {
	                    this.toastr.error(this.$translate.instant('individuales.idSpecialChars'));
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongId'));
	            }
	        }
	        else {
	        }
	        return false;
	    };
	    return JuridicaController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = JuridicaController;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";
	function validarCaracteresEspeciales(numeroIdentificacion) {
	    if (/^[a-z0-9]+$/i.test(numeroIdentificacion)) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.validarCaracteresEspeciales = validarCaracteresEspeciales;
	function esAlfanumerico(tipoIdentificacion) {
	    if (tipoIdentificacion === 'CD' || tipoIdentificacion === 'PA') {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.esAlfanumerico = esAlfanumerico;
	function validarAlfanumerico(tipoIdentificacion, numeroIdentificacion) {
	    if (tipoIdentificacion === 'CD' || tipoIdentificacion === 'PA') {
	        if (/^[a-z0-9]+$/i.test(numeroIdentificacion)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    }
	    else {
	        return true;
	    }
	}
	exports.validarAlfanumerico = validarAlfanumerico;
	function validarNumerico(tipoIdentificacion, numeroIdentificacion) {
	    if (tipoIdentificacion === 'CC' || tipoIdentificacion === 'CE' || tipoIdentificacion === 'TI' || tipoIdentificacion === 'RC' || tipoIdentificacion === 'NI' || tipoIdentificacion === 'SC' || tipoIdentificacion === 'PE') {
	        if (/^[0-9]+$/.test(numeroIdentificacion)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    }
	    else {
	        return true;
	    }
	}
	exports.validarNumerico = validarNumerico;
	function esNumerico(tipoIdentificacion) {
	    if (tipoIdentificacion === 'CC' || tipoIdentificacion === 'CE' || tipoIdentificacion === 'TI' || tipoIdentificacion === 'RC' || tipoIdentificacion === 'NI' || tipoIdentificacion === 'SC' || tipoIdentificacion === 'PE') {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.esNumerico = esNumerico;
	function verificarSize(fileSize) {
	    if (fileSize <= 31457280) {
	        return true;
	    }
	    return false;
	}
	exports.verificarSize = verificarSize;
	function verificarExtension(nombreArchivo) {
	    if (nombreArchivo.length > 4) {
	        var ext = nombreArchivo.substring(nombreArchivo.length - 4, nombreArchivo.length);
	        if (ext === '.csv' || ext === '.txt') {
	            return true;
	        }
	    }
	    return false;
	}
	exports.verificarExtension = verificarExtension;
	function verificarIngresosJuridicaConsolidada(rangosSalarios) {
	    var rangosSalariosSinFormato = rangosSalarios.map(function (rango) { return ({
	        limiteInferior: Number(rango.limiteInferior.slice(1).replace(/\./g, '')),
	        limiteSuperior: Number(rango.limiteSuperior.slice(1).replace(/\./g, ''))
	    }); });
	    var rangosSalariosVerificados = [];
	    rangosSalariosSinFormato.slice(0).reverse().forEach(function (rango) {
	        if (rango.limiteInferior !== 0 || rango.limiteSuperior !== 0) {
	            rangosSalariosVerificados.push(rango);
	        }
	    });
	    return rangosSalariosVerificados.slice(0).reverse();
	}
	exports.verificarIngresosJuridicaConsolidada = verificarIngresosJuridicaConsolidada;
	function tipoDocumentoJuridica() {
	    return [
	        { name: 'Cédula de Ciudadanía', value: 'CC' },
	        { name: 'Cédula de Extranjería', value: 'CE' },
	        { name: 'NIT', value: 'NI' },
	        { name: 'Salvo Conducto', value: 'SC' },
	        { name: 'Permiso Especial', value: 'PE' }
	    ];
	}
	exports.tipoDocumentoJuridica = tipoDocumentoJuridica;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var extendida_controller_1 = __webpack_require__(79);
	exports.ExtendidaComponent = {
	    templateUrl: 'app/consulting/components/extendida/extendida.html',
	    controller: extendida_controller_1.default
	};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";
	var ExtendidaController = (function () {
	    /** @ngInject */
	    ExtendidaController.$inject = ["environment", "ConsultingService", "$window", "toastr", "$translate", "permissions", "User", "$state"];
	    function ExtendidaController(environment, ConsultingService, $window, toastr, $translate, permissions, User, $state) {
	        this.environment = environment;
	        this.ConsultingService = ConsultingService;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.permissions = permissions;
	        this.User = User;
	        this.$state = $state;
	        this.tipoDocumentoNatural = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Carné Diplomático', value: 'CD' },
	            { name: 'Tarjeta de Identidad', value: 'TI' },
	            { name: 'Registro Civil', value: 'RC' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Salvo Conducto', value: 'SC' },
	            { name: 'Permiso Especial', value: 'PE' }
	        ];
	        this.tipoConsulta = 'Individual';
	        this.tipoIdentificacion = 'CC';
	        this.identificacionAlfanumerica = false;
	        this.tituloCliente = 'CLIENTE A CONSULTAR';
	        this.documentos = this.tipoDocumentoNatural;
	        this.consultaImpar = true;
	        this.permisoIndividualNatural = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.extendida.individual-natural.consultar');
	        this.permisoMasivaNatural = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.extendida.masivas-natural.consultar');
	        this.verificarSeleccion();
	    }
	    ExtendidaController.prototype.$onInit = function () { };
	    //SETTERS
	    ExtendidaController.prototype.setTipoConsulta = function (tipoConsulta) {
	        this.tipoConsulta = tipoConsulta;
	        if (this.tipoConsulta === 'Individual') {
	            this.tituloCliente = 'CLIENTE A CONSULTAR';
	        }
	        else {
	            this.tituloCliente = 'DATOS ARCHIVO';
	        }
	    };
	    ExtendidaController.prototype.sendConsulta = function () {
	        if (this.tipoConsulta === 'Individual') {
	            this.consultarIndividual();
	        }
	        else {
	            this.consultarMasiva();
	        }
	    };
	    ExtendidaController.prototype.consultarIndividual = function () {
	        if (this.validarNumeroIdentificacion()) {
	            if (this.validarPeriodo()) {
	                if (this.validarAlfanumerico() && this.validarNumerico()) {
	                    this.servicioNaturalIndividual();
	                }
	                else {
	                    if (this.esAlfanumerico()) {
	                        this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                    }
	                    else if (this.esNumerico()) {
	                        this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                    }
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongPeriod'));
	            }
	        }
	    };
	    ExtendidaController.prototype.consultarMasiva = function () {
	        this.file = this.ConsultingService.getFileMasivas();
	        this.fileUpload = this.ConsultingService.getArchivo();
	        if (!this.file) {
	            if (this.nombreArchivo !== 'Selecciona un archivo') {
	                this.toastr.error(this.$translate.instant('El archivo para la consulta se encuentra vacío.'));
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor, seleccionar un archivo.'));
	            }
	            return false;
	        }
	        if (!this.verificarExtension()) {
	            this.toastr.error(this.$translate.instant('La extensión del archivo debe ser TXT.'));
	            return false;
	        }
	        if (!this.verificarSize()) {
	            this.toastr.error(this.$translate.instant('El archivo debe tener un tamaño máximo de 30MB. Por favor intente nuevamente.'));
	            return false;
	        }
	        var lines = this.file.split(/\r?\n|\r/);
	        var that = this;
	        if (this.nombreConsulta) {
	            if (lines.length >= 50 && lines.length <= 500000) {
	                var formData = new FormData();
	                var blob = new Blob([this.fileUpload], { type: "text/csv" });
	                var historico = (this.periodoConsulta) ? this.periodoConsulta : 0;
	                formData.append('file', blob, this.nombreArchivo);
	                formData.append('nombreConsulta', this.nombreConsulta);
	                formData.append('historico', historico.toString());
	                this.ConsultingService.consultarExtendidaNaturalMasiva(formData).then(function (response) {
	                    that.toastr.success("Consulta enviada exitosamente. N\u00FAmero de solicitud:   " + response.data.queryUuid + ". <br>   Recibir\u00E1 un correo electr\u00F3nico cuando est\u00E9 disponible para descargar.", { allowHtml: true });
	                    that.limpiarMasivas();
	                }, function (error) {
	                    that.limpiarMasivas();
	                    if (error.status === 401) {
	                        that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                        that.$state.go('login');
	                    }
	                    else if (error.status === 403) {
	                        that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                        that.$state.go('login');
	                    }
	                    else {
	                        if (error.data) {
	                            that.toastr.error(error.data);
	                        }
	                        else {
	                            that.toastr.error(that.$translate.instant('Error al enviar la consulta.'));
	                        }
	                    }
	                });
	            }
	            else {
	                that.limpiarMasivas();
	                this.toastr.error(this.$translate.instant('masivas.incorrectFileExtendida', { num: lines.length }));
	            }
	        }
	        else {
	            this.toastr.error(this.$translate.instant('Por favor ingrese un nombre para la consulta.'));
	        }
	    };
	    ExtendidaController.prototype.servicioNaturalIndividual = function () {
	        var periodo;
	        var ultimaPlanilla;
	        if (this.periodoConsulta) {
	            periodo = this.periodoConsulta;
	            ultimaPlanilla = false;
	        }
	        else {
	            periodo = this.environment.maxPeriods;
	            ultimaPlanilla = true;
	        }
	        var that = this;
	        this.ConsultingService.consultarExtendidaNaturalIndividual(this.tipoIdentificacion, this.numeroIdentificacion, periodo, ultimaPlanilla).then(function (response) {
	            if (!response.error) {
	                that.$window.open(response.data);
	            }
	            else {
	                if (response.data === 404) {
	                    that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	                }
	                else if (response.data === 401) {
	                    that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 403) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	                else if (response.data === 409) {
	                    that.toastr.warning(that.$translate.instant('messages.error.useAuth'));
	                }
	                else {
	                    that.toastr.error(that.$translate.instant('messages.queryError'));
	                }
	            }
	        }, function (error) {
	            that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	        });
	    };
	    //VALIDACIONES
	    ExtendidaController.prototype.verificarSeleccion = function () {
	        if (this.permisoIndividualNatural) {
	            this.tipoConsulta = 'Individual';
	            this.tituloCliente = 'CLIENTE A CONSULTAR';
	        }
	        else if (this.permisoMasivaNatural) {
	            this.tipoConsulta = 'Masiva';
	            this.tituloCliente = 'DATOS ARCHIVO';
	        }
	        else {
	            this.toastr.error('No tiene los permisos necesarios para realizar consultas.');
	            this.$state.go('login');
	        }
	    };
	    ExtendidaController.prototype.validarNumeroIdentificacion = function () {
	        if (this.numeroIdentificacion) {
	            if (this.numeroIdentificacion.length > 1) {
	                if (this.validarCaracteresEspeciales()) {
	                    return true;
	                }
	                else {
	                    this.toastr.error(this.$translate.instant('individuales.idSpecialChars'));
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongId'));
	            }
	        }
	        else {
	        }
	        return false;
	    };
	    ExtendidaController.prototype.validarCaracteresEspeciales = function () {
	        if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ExtendidaController.prototype.validarPeriodo = function () {
	        if (this.periodoConsulta) {
	            if (/^[0-9]+$/.test('' + this.periodoConsulta)) {
	                if (this.periodoConsulta >= 1 && this.periodoConsulta) {
	                    return true;
	                }
	                else {
	                    return false;
	                }
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ExtendidaController.prototype.validarAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ExtendidaController.prototype.validarNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            if (/^[0-9]+$/.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    ExtendidaController.prototype.esNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ExtendidaController.prototype.esAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    ExtendidaController.prototype.cambiarPeriodo = function (event) {
	        var key = window.event ? event.keyCode : event.which;
	        if (Number(this.periodoConsulta) || !this.periodoConsulta) {
	            if (event.keyCode === 8 || event.keyCode === 46
	                || event.keyCode === 37 || event.keyCode === 39) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key > 95 && key < 107) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key < 48 || key > 57) {
	                this.periodoConsulta = this.periodoConsultaAlt;
	            }
	            else {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	        }
	        else {
	            this.periodoConsulta = this.periodoConsultaAlt;
	        }
	    };
	    ExtendidaController.prototype.periodoMayor = function () {
	        if (this.periodoConsulta > this.environment.maxPeriods) {
	            this.periodoConsulta = this.environment.maxPeriods;
	            this.periodoConsultaAlt = this.environment.maxPeriods;
	        }
	    };
	    ExtendidaController.prototype.verificarExtension = function () {
	        if (this.nombreArchivo.length > 4) {
	            var ext = this.nombreArchivo.substring(this.nombreArchivo.length - 4, this.nombreArchivo.length);
	            if (ext === '.csv' || ext === '.txt') {
	                return true;
	            }
	        }
	        return false;
	    };
	    ExtendidaController.prototype.verificarSize = function () {
	        if (this.fileUpload.size <= 31457280) {
	            return true;
	        }
	        return false;
	    };
	    ExtendidaController.prototype.limpiarMasivas = function () {
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.ConsultingService.setFileMasivas('', '', '');
	        this.nombreConsulta = '';
	        this.periodoConsulta = undefined;
	        this.consultaImpar = !this.consultaImpar;
	        document.getElementById("file-1").setAttribute('value', '');
	    };
	    return ExtendidaController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ExtendidaController;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var masivasFiltros_controller_1 = __webpack_require__(81);
	exports.MasivasFiltrosComponent = {
	    templateUrl: 'app/consulting/components/masivasFiltros/masivasFiltros.html',
	    controller: masivasFiltros_controller_1.default
	};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	"use strict";
	var MasivasFiltrosController = (function () {
	    /** @ngInject */
	    MasivasFiltrosController.$inject = ["environment", "ConsultingService", "$window", "toastr", "$translate", "permissions", "User", "$state"];
	    function MasivasFiltrosController(environment, ConsultingService, $window, toastr, $translate, permissions, User, $state) {
	        this.environment = environment;
	        this.ConsultingService = ConsultingService;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.permissions = permissions;
	        this.User = User;
	        this.$state = $state;
	        this.permisoMasivaFiltros = this.permissions.havepermissions(this.User.current.permissions, '*:consultas.masiva.filtros-natural.consultar');
	        this.verificarSeleccion();
	    }
	    MasivasFiltrosController.prototype.$onInit = function () {
	        this.cargarListRelacionLaboral();
	    };
	    //SETTERS
	    MasivasFiltrosController.prototype.setTipoConsulta = function (tipoConsulta) {
	        this.tipoConsulta = tipoConsulta;
	        this.tipoConsultaFiltro = (this.tipoConsulta == 'Detallada') ? 'DETALLADA_FILTROS' : 'EXTENDIDA_FILTROS';
	    };
	    MasivasFiltrosController.prototype.cambiarPeriodo = function (event) {
	        var key = window.event ? event.keyCode : event.which;
	        if (Number(this.periodoConsulta) || !this.periodoConsulta) {
	            if (event.keyCode === 8 || event.keyCode === 46
	                || event.keyCode === 37 || event.keyCode === 39) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key > 95 && key < 107) {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	            else if (key < 48 || key > 57) {
	                this.periodoConsulta = this.periodoConsultaAlt;
	            }
	            else {
	                this.periodoConsultaAlt = this.periodoConsulta;
	                this.periodoMayor();
	            }
	        }
	        else {
	            this.periodoConsulta = this.periodoConsultaAlt;
	        }
	    };
	    MasivasFiltrosController.prototype.periodoMayor = function () {
	        if (this.periodoConsulta > this.environment.maxPeriods) {
	            this.periodoConsulta = this.environment.maxPeriods;
	            this.periodoConsultaAlt = this.environment.maxPeriods;
	        }
	    };
	    MasivasFiltrosController.prototype.setListRelacionLaboralCompleta = function (tipoList) {
	        if (tipoList == 'Aux') {
	            Array.prototype.push.apply(this.listRelacionLaboral, this.listRelacionLaboralAux);
	            this.listRelacionLaboralAux.length = 0;
	        }
	        else {
	            Array.prototype.push.apply(this.listRelacionLaboralAux, this.listRelacionLaboral);
	            this.listRelacionLaboral.length = 0;
	        }
	    };
	    MasivasFiltrosController.prototype.setListRelacionLaboralElemento = function (tipoList, item) {
	        if (tipoList == 'Aux') {
	            var newItem = this.listRelacionLaboralAux.find(function (tpCotizante) { return tpCotizante === item; });
	            this.listRelacionLaboral.push(newItem);
	            this.listRelacionLaboralAux = this.listRelacionLaboralAux.filter(function (tpCotizante) { return tpCotizante != item; });
	        }
	        else {
	            var newItem = this.listRelacionLaboral.find(function (tpCotizante) { return tpCotizante === item; });
	            this.listRelacionLaboralAux.push(newItem);
	            this.listRelacionLaboral = this.listRelacionLaboral.filter(function (tpCotizante) { return tpCotizante != item; });
	        }
	    };
	    MasivasFiltrosController.prototype.setLimitesIngresos = function () {
	        this.limiteInferiorIngresos = '$0';
	        this.limiteSuperiorIngresos = '$0';
	    };
	    MasivasFiltrosController.prototype.setLimiteInferiorIngresos = function () {
	        var limiteInfAux = Number(this.limiteInferiorIngresos.replace(/\$/g, '').replace(/\./g, ''));
	        this.limiteInferiorIngresos = limiteInfAux.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	        this.limiteInferiorIngresos = '$' + this.limiteInferiorIngresos;
	    };
	    MasivasFiltrosController.prototype.setLimiteSuperiorIngresos = function () {
	        var limiteSupAux = Number(this.limiteSuperiorIngresos.replace(/\$/g, '').replace(/\./g, ''));
	        this.limiteSuperiorIngresos = limiteSupAux.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	        this.limiteSuperiorIngresos = '$' + this.limiteSuperiorIngresos;
	    };
	    MasivasFiltrosController.prototype.cargarListRelacionLaboral = function () {
	        this.listRelacionLaboralAux = ["DEPENDIENTE", "INDEPENDIENTE", "PENSIONADO"];
	    };
	    MasivasFiltrosController.prototype.sendConsulta = function () {
	        if (this.validarNombreConsulta() && this.validarArchivo()) {
	            if (this.validarLimitesIngresos()) {
	                var that = this;
	                var historico = (this.periodoConsulta) ? this.periodoConsulta : 0;
	                var filtros = this.definirFiltros();
	                var formData = new FormData();
	                var blob = new Blob([this.fileUpload], { type: "text/csv" });
	                formData.append('file', blob, this.nombreArchivo);
	                formData.append('nombreConsulta', this.nombreConsulta);
	                formData.append('historico', historico.toString());
	                formData.append('filtros', JSON.stringify(filtros));
	                this.ConsultingService.consultarNaturalMasivaFiltros(formData).then(function (response) {
	                    that.toastr.success("Consulta enviada exitosamente. N\u00FAmero de solicitud:   " + response.data.queryUuid + ". <br>   Recibir\u00E1 un correo electr\u00F3nico cuando est\u00E9 disponible para descargar.", { allowHtml: true });
	                    that.limpiar();
	                }, function (error) {
	                    //that.limpiar();
	                    if (error.status === 400) {
	                        that.toastr.error(that.$translate.instant(error.data));
	                    }
	                    else if (error.status === 401) {
	                        that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                        that.$state.go('login');
	                    }
	                    else if (error.status === 403) {
	                        that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                        that.$state.go('login');
	                    }
	                    else {
	                        if (error.data) {
	                            that.toastr.error(error.data);
	                        }
	                        else {
	                            that.toastr.error(that.$translate.instant('Error al enviar la consulta.'));
	                        }
	                    }
	                });
	            }
	        }
	    };
	    //VALIDACIONES
	    MasivasFiltrosController.prototype.verificarSeleccion = function () {
	        if (this.permisoMasivaFiltros) {
	            this.tipoConsulta = 'Detallada';
	            this.nombreArchivo = 'Selecciona un archivo';
	            this.consultaImpar = true;
	            this.tipoConsultaFiltro = 'DETALLADA_FILTROS';
	            this.listRelacionLaboral = [];
	            this.excluirNovedadRetiro = false;
	            this.setLimitesIngresos();
	        }
	        else {
	            this.toastr.error('No tiene los permisos necesarios para realizar consultas.');
	            this.$state.go('login');
	        }
	    };
	    MasivasFiltrosController.prototype.validarNombreConsulta = function () {
	        if (!this.nombreConsulta) {
	            this.toastr.error(this.$translate.instant('Por favor ingrese un nombre para la consulta.'));
	            return false;
	        }
	        return true;
	    };
	    MasivasFiltrosController.prototype.validarArchivo = function () {
	        this.file = this.ConsultingService.getFileMasivas();
	        this.fileUpload = this.ConsultingService.getArchivo();
	        if (!this.file) {
	            if (this.nombreArchivo !== 'Selecciona un archivo') {
	                this.toastr.error(this.$translate.instant('El archivo para la consulta se encuentra vacío.'));
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor, seleccionar un archivo.'));
	            }
	            return false;
	        }
	        if (!this.verificarExtension()) {
	            this.toastr.error(this.$translate.instant('La extensión del archivo debe ser CSV o TXT.'));
	            return false;
	        }
	        if (!this.verificarSize()) {
	            this.toastr.error(this.$translate.instant('El archivo debe tener un tamaño máximo de 30MB. Por favor intente nuevamente.'));
	            return false;
	        }
	        var lines = this.file.split(/\r?\n|\r/);
	        if (this.tipoConsulta == 'Detallada' && !(lines.length >= 50 && lines.length <= 2000000)) {
	            this.toastr.error(this.$translate.instant('masivas.incorrectFile', { num: lines.length }));
	            return false;
	        }
	        if (this.tipoConsulta == 'Extendida' && !(lines.length >= 50 && lines.length <= 500000)) {
	            this.toastr.error(this.$translate.instant('masivas.incorrectFileExtendida', { num: lines.length }));
	            return false;
	        }
	        return true;
	    };
	    MasivasFiltrosController.prototype.verificarExtension = function () {
	        if (this.nombreArchivo.length > 4) {
	            var ext = this.nombreArchivo.substring(this.nombreArchivo.length - 4, this.nombreArchivo.length);
	            if (ext === '.csv' || ext === '.txt') {
	                return true;
	            }
	        }
	        return false;
	    };
	    MasivasFiltrosController.prototype.verificarSize = function () {
	        if (this.fileUpload.size <= 31457280) {
	            return true;
	        }
	        return false;
	    };
	    MasivasFiltrosController.prototype.validarLimitesIngresos = function () {
	        var limiteInfAux = this.limiteInferiorIngresos.slice(1);
	        var limiteSupAux = this.limiteSuperiorIngresos.slice(1);
	        //Valida que el limite inferior no sea mayor al limite superior
	        if (this.limiteInferiorIngresos != '$0' && this.limiteSuperiorIngresos != '$0') {
	            if (Number(limiteSupAux.replace(/\./g, '')) < Number(limiteInfAux.replace(/\./g, ''))) {
	                this.toastr.error(this.$translate.instant('El límite superior de ingresos debe ser mayor al límite inferior'));
	                return false;
	            }
	        }
	        return true;
	    };
	    MasivasFiltrosController.prototype.definirFiltros = function () {
	        var filtros = {
	            tipoConsulta: this.tipoConsultaFiltro.toUpperCase()
	        };
	        var limiteInfAux = Number(this.limiteInferiorIngresos.slice(1).replace(/\./g, ''));
	        var limiteSupAux = Number(this.limiteSuperiorIngresos.slice(1).replace(/\./g, ''));
	        if (limiteInfAux != 0) {
	            filtros.ingresos = { limiteInferior: limiteInfAux };
	        }
	        if (limiteSupAux != 0) {
	            filtros.ingresos = {
	                limiteInferior: limiteInfAux,
	                limiteSuperior: limiteSupAux
	            };
	        }
	        if (this.listRelacionLaboral.length > 0) {
	            filtros.relacionLaboral = this.listRelacionLaboral;
	        }
	        if (this.excluirNovedadRetiro) {
	            filtros.excluirNovedadRetiro = this.excluirNovedadRetiro;
	        }
	        return filtros;
	    };
	    MasivasFiltrosController.prototype.limpiar = function () {
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.ConsultingService.setFileMasivas('', '', '');
	        this.nombreConsulta = '';
	        this.periodoConsulta = undefined;
	        this.consultaImpar = !this.consultaImpar;
	        document.getElementById("file-1").setAttribute('value', '');
	        this.listRelacionLaboral = [];
	        this.excluirNovedadRetiro = false;
	        this.setLimitesIngresos();
	        this.cargarListRelacionLaboral();
	    };
	    return MasivasFiltrosController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MasivasFiltrosController;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var massiveQueriesByUser_controller_1 = __webpack_require__(83);
	exports.MassiveQueriesByUserComponent = {
	    templateUrl: 'app/consulting/components/massiveQueriesByUser/massiveQueriesByUser.html',
	    controller: massiveQueriesByUser_controller_1.default
	};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	"use strict";
	var MassiveQueriesByUserController = (function () {
	    /** @ngInject */
	    MassiveQueriesByUserController.$inject = ["ConsultingService", "rx", "$window", "toastr", "$translate", "$timeout", "ngDialog", "$scope", "$state"];
	    function MassiveQueriesByUserController(ConsultingService, rx, $window, toastr, $translate, $timeout, ngDialog, $scope, $state) {
	        this.ConsultingService = ConsultingService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.ngDialog = ngDialog;
	        this.$scope = $scope;
	        this.$state = $state;
	        this.results = [];
	    }
	    MassiveQueriesByUserController.prototype.$onInit = function () {
	        this.pulling();
	    };
	    MassiveQueriesByUserController.prototype.pulling = function () {
	        this.showResults();
	        this.ConsultingService.massiveQueriesByUserGET(''); // todo: eliminar cuando se tenga usuario - Andres Peralta
	        setTimeout(this.pulling.bind(this), 10000);
	    };
	    MassiveQueriesByUserController.prototype.$onDestroy = function () {
	        this.massiveQueriesByUserGetObservable.observers = [];
	    };
	    MassiveQueriesByUserController.prototype.showResults = function () {
	        var that = this;
	        this.massiveQueriesByUserGetObservable = this.ConsultingService.massiveQueriesByUserGetObservable;
	        this.massiveQueriesByUserGetObservable.subscribe(function (value) {
	            if (!value.error && value.result) {
	                that.$timeout(function () {
	                    that.results = value.result;
	                }, 0);
	            }
	            else {
	                that.toastr.error(value.msg);
	                if (value.msg == that.$translate.instant('messages.error.unauthorized')) {
	                    that.$state.go('login');
	                }
	            }
	        }, function (exeption) {
	            if (exeption.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (exeption.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                var msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                that.toastr.error(msg);
	                console.error(msg, exeption);
	            }
	        });
	    };
	    MassiveQueriesByUserController.prototype.downloadResultsZip = function (dto) {
	        var that = this;
	        that.ngDialog.openConfirm({
	            template: '\  <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip') + '\</p>\
	          <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip-disclaimer') + '\</p>\
	          <div class="ngdialog-buttons">\
	              <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + that.$translate.instant('action.cancel') + '</button>\
	              <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + that.$translate.instant('action.accept') + '</button>\
	          </div>',
	            plain: true,
	            className: 'ngdialog-theme-default custom-width-800'
	        }).then(function (confirm) {
	            that.ConsultingService.downloadResultsZip(dto.id, dto.esNatural).then(function (promiseValue) {
	                try {
	                    var file = new Blob([promiseValue.data], { type: 'application/zip' });
	                    var fileURL = URL.createObjectURL(file);
	                    var downloadLink = document.createElement('a');
	                    downloadLink.href = fileURL;
	                    downloadLink.download = dto.nombreArchivoResultados;
	                    downloadLink.setAttribute('download', dto.nombreArchivoResultados);
	                    document.body.appendChild(downloadLink);
	                    downloadLink.click();
	                    window.URL.revokeObjectURL(downloadLink.href);
	                }
	                catch (exception) {
	                    var msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    that.toastr.error(msg);
	                    console.error(msg, exception);
	                }
	            }, function (reason) {
	                var msg;
	                if (reason.status === 503) {
	                    msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	                }
	                else {
	                    if (reason.data && reason.data.message) {
	                        msg = reason.data.message;
	                    }
	                    else {
	                        msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                        console.error(msg, reason);
	                    }
	                }
	                that.toastr.error(msg);
	            }).finally(function () {
	                that.ConsultingService.massiveQueriesByUserGET('');
	            });
	        });
	    };
	    MassiveQueriesByUserController.prototype.formatDate = function (inDate) {
	        var dateValue = new Date(inDate);
	        return dateValue.toLocaleString('es-CO');
	    };
	    return MassiveQueriesByUserController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MassiveQueriesByUserController;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var massiveListConsolidated_controller_1 = __webpack_require__(85);
	exports.MassiveListConsolidatedComponent = {
	    templateUrl: 'app/consulting/components/massiveListConsolidated/massiveListConsolidated.html',
	    controller: massiveListConsolidated_controller_1.default
	};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	"use strict";
	var MassiveListConsolidatedController = (function () {
	    /** @ngInject */
	    MassiveListConsolidatedController.$inject = ["ConsultingService", "rx", "$window", "toastr", "$translate", "$timeout", "ngDialog", "$scope", "$state"];
	    function MassiveListConsolidatedController(ConsultingService, rx, $window, toastr, $translate, $timeout, ngDialog, $scope, $state) {
	        this.ConsultingService = ConsultingService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.ngDialog = ngDialog;
	        this.$scope = $scope;
	        this.$state = $state;
	        this.results = [];
	    }
	    MassiveListConsolidatedController.prototype.$onInit = function () {
	        this.pulling();
	    };
	    MassiveListConsolidatedController.prototype.pulling = function () {
	        this.showResults();
	        this.ConsultingService.massiveListConsolidatedGET(''); // todo: eliminar cuando se tenga usuario - Andres Peralta
	        setTimeout(this.pulling.bind(this), 10000);
	    };
	    MassiveListConsolidatedController.prototype.$onDestroy = function () {
	        this.massiveListConsolidatedGetObservable.observers = [];
	    };
	    MassiveListConsolidatedController.prototype.showResults = function () {
	        var that = this;
	        this.massiveListConsolidatedGetObservable = this.ConsultingService.massiveListConsolidatedGetObservable;
	        this.massiveListConsolidatedGetObservable.subscribe(function (value) {
	            if (!value.error && value.result) {
	                that.$timeout(function () {
	                    that.results = value.result;
	                }, 0);
	            }
	            else {
	                that.toastr.error(value.msg);
	                if (value.msg == that.$translate.instant('messages.error.unauthorized')) {
	                    that.$state.go('login');
	                }
	            }
	        }, function (exeption) {
	            if (exeption.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (exeption.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                var msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                that.toastr.error(msg);
	                console.error(msg, exeption);
	            }
	        });
	    };
	    MassiveListConsolidatedController.prototype.downloadConsolidatedResultsZip = function (dto) {
	        var that = this;
	        that.ngDialog.openConfirm({
	            template: '\  <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip') + '\</p>\
	          <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip-disclaimer') + '\</p>\
	          <div class="ngdialog-buttons">\
	              <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + that.$translate.instant('action.cancel') + '</button>\
	              <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + that.$translate.instant('action.accept') + '</button>\
	          </div>',
	            plain: true,
	            className: 'ngdialog-theme-default custom-width-800'
	        }).then(function (confirm) {
	            that.ConsultingService.downloadResultsConsolidatedZip(dto.id, dto.esNatural).then(function (promiseValue) {
	                try {
	                    var file = new Blob([promiseValue.data], { type: 'application/zip' });
	                    var fileURL = URL.createObjectURL(file);
	                    var downloadLink = document.createElement('a');
	                    downloadLink.href = fileURL;
	                    downloadLink.download = dto.nombreArchivoResultados;
	                    downloadLink.setAttribute('download', dto.nombreArchivoResultados);
	                    document.body.appendChild(downloadLink);
	                    downloadLink.click();
	                    window.URL.revokeObjectURL(downloadLink.href);
	                }
	                catch (exception) {
	                    var msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    that.toastr.error(msg);
	                    console.error(msg, exception);
	                }
	            }, function (reason) {
	                var msg;
	                if (reason.status === 503) {
	                    msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	                }
	                else {
	                    if (reason.data && reason.data.message) {
	                        msg = reason.data.message;
	                    }
	                    else {
	                        msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                        console.error(msg, reason);
	                    }
	                }
	                that.toastr.error(msg);
	            }).finally(function () {
	                that.ConsultingService.massiveListConsolidatedGET('');
	            });
	        });
	    };
	    MassiveListConsolidatedController.prototype.formatDate = function (inDate) {
	        var dateValue = new Date(inDate);
	        return dateValue.toLocaleString('es-CO');
	    };
	    return MassiveListConsolidatedController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MassiveListConsolidatedController;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var massiveListExtended_controller_1 = __webpack_require__(87);
	exports.MassiveListExtendedComponent = {
	    templateUrl: 'app/consulting/components/massiveListExtended/massiveListExtended.html',
	    controller: massiveListExtended_controller_1.default
	};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	"use strict";
	var MassiveListExtenedController = (function () {
	    /** @ngInject */
	    MassiveListExtenedController.$inject = ["ConsultingService", "rx", "$window", "toastr", "$translate", "$timeout", "ngDialog", "$scope", "$state"];
	    function MassiveListExtenedController(ConsultingService, rx, $window, toastr, $translate, $timeout, ngDialog, $scope, $state) {
	        this.ConsultingService = ConsultingService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.ngDialog = ngDialog;
	        this.$scope = $scope;
	        this.$state = $state;
	        this.results = [];
	        this.enableTimeOut = true;
	    }
	    MassiveListExtenedController.prototype.$onInit = function () {
	        this.pulling();
	        this.enableTimeOut = true;
	    };
	    MassiveListExtenedController.prototype.pulling = function () {
	        if (this.enableTimeOut) {
	            this.showResults();
	            this.ConsultingService.massiveListExtendedGET('');
	            setTimeout(this.pulling.bind(this), 10000);
	        }
	    };
	    MassiveListExtenedController.prototype.$onDestroy = function () {
	        this.massiveListExtendedGetObservable.observers = [];
	        this.enableTimeOut = false;
	    };
	    MassiveListExtenedController.prototype.showResults = function () {
	        var that = this;
	        this.massiveListExtendedGetObservable = this.ConsultingService.massiveListExtendedGetObservable;
	        this.massiveListExtendedGetObservable.subscribe(function (value) {
	            if (!value.error && value.result) {
	                that.$timeout(function () {
	                    that.results = value.result;
	                }, 0);
	            }
	            else {
	                that.toastr.error(value.msg);
	                if (value.msg == that.$translate.instant('messages.error.unauthorized')) {
	                    that.$state.go('login');
	                }
	            }
	        }, function (exeption) {
	            if (exeption.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (exeption.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                var msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                that.toastr.error(msg);
	                console.error(msg, exeption);
	            }
	        });
	    };
	    MassiveListExtenedController.prototype.downloadExtendedResultsZip = function (dto) {
	        var that = this;
	        that.ngDialog.openConfirm({
	            template: '\  <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip') + '\</p>\
	              <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip-disclaimer') + '\</p>\
	              <div class="ngdialog-buttons">\
	                  <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + that.$translate.instant('action.cancel') + '</button>\
	                  <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + that.$translate.instant('action.accept') + '</button>\
	              </div>',
	            plain: true,
	            className: 'ngdialog-theme-default custom-width-800'
	        }).then(function (confirm) {
	            that.ConsultingService.downloadResultsExtendedZip(dto.id, dto.esNatural).then(function (promiseValue) {
	                try {
	                    var file = new Blob([promiseValue.data], { type: 'application/zip' });
	                    var fileURL = URL.createObjectURL(file);
	                    var downloadLink = document.createElement('a');
	                    downloadLink.href = fileURL;
	                    downloadLink.download = dto.nombreArchivoResultados;
	                    downloadLink.setAttribute('download', dto.nombreArchivoResultados);
	                    document.body.appendChild(downloadLink);
	                    downloadLink.click();
	                    window.URL.revokeObjectURL(downloadLink.href);
	                }
	                catch (exception) {
	                    var msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    that.toastr.error(msg);
	                    console.error(msg, exception);
	                }
	            }, function (reason) {
	                var msg;
	                if (reason.status === 503) {
	                    msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	                }
	                else {
	                    if (reason.data && reason.data.message) {
	                        msg = reason.data.message;
	                    }
	                    else {
	                        msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                        console.error(msg, reason);
	                    }
	                }
	                that.toastr.error(msg);
	            }).finally(function () {
	                that.ConsultingService.massiveListExtendedGET('');
	            });
	        });
	    };
	    return MassiveListExtenedController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MassiveListExtenedController;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var massiveListFilterExtended_controller_1 = __webpack_require__(89);
	exports.MassiveListFilterExtendedComponent = {
	    templateUrl: 'app/consulting/components/massiveListFilterExtended/massiveListFilterExtended.html',
	    controller: massiveListFilterExtended_controller_1.default
	};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";
	var MassiveListFilterDetalladaController = (function () {
	    /** @ngInject */
	    MassiveListFilterDetalladaController.$inject = ["ConsultingService", "rx", "$window", "toastr", "$translate", "$timeout", "ngDialog", "$scope", "$state"];
	    function MassiveListFilterDetalladaController(ConsultingService, rx, $window, toastr, $translate, $timeout, ngDialog, $scope, $state) {
	        this.ConsultingService = ConsultingService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.ngDialog = ngDialog;
	        this.$scope = $scope;
	        this.$state = $state;
	        this.results = [];
	    }
	    MassiveListFilterDetalladaController.prototype.$onInit = function () {
	        this.pulling();
	    };
	    MassiveListFilterDetalladaController.prototype.pulling = function () {
	        this.showResults();
	        this.ConsultingService.massiveListFilterExtendedGET(''); // todo: eliminar cuando se tenga usuario - Andres Peralta
	        setTimeout(this.pulling.bind(this), 10000);
	    };
	    MassiveListFilterDetalladaController.prototype.$onDestroy = function () {
	        this.massiveListFilterExtendedGetObservable.observers = [];
	    };
	    MassiveListFilterDetalladaController.prototype.showResults = function () {
	        var that = this;
	        this.massiveListFilterExtendedGetObservable = this.ConsultingService.massiveListFilterExtendedGetObservable;
	        this.massiveListFilterExtendedGetObservable.subscribe(function (value) {
	            if (!value.error && value.result) {
	                that.$timeout(function () {
	                    that.results = value.result;
	                }, 0);
	            }
	            else {
	                that.toastr.error(value.msg);
	                if (value.msg == that.$translate.instant('messages.error.unauthorized')) {
	                    that.$state.go('login');
	                }
	            }
	        }, function (exeption) {
	            if (exeption.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (exeption.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                var msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                that.toastr.error(msg);
	                console.error(msg, exeption);
	            }
	        });
	    };
	    MassiveListFilterDetalladaController.prototype.downloadResultsZip = function (dto) {
	        var that = this;
	        that.ngDialog.openConfirm({
	            template: '\  <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip') + '\</p>\
	          <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip-disclaimer') + '\</p>\
	          <div class="ngdialog-buttons">\
	              <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + that.$translate.instant('action.cancel') + '</button>\
	              <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + that.$translate.instant('action.accept') + '</button>\
	          </div>',
	            plain: true,
	            className: 'ngdialog-theme-default custom-width-800'
	        }).then(function (confirm) {
	            that.ConsultingService.downloadResultsFilterZip(dto.id, dto.esNatural).then(function (promiseValue) {
	                try {
	                    var file = new Blob([promiseValue.data], { type: 'application/zip' });
	                    var fileURL = URL.createObjectURL(file);
	                    var downloadLink = document.createElement('a');
	                    downloadLink.href = fileURL;
	                    downloadLink.download = dto.nombreArchivoResultados;
	                    downloadLink.setAttribute('download', dto.nombreArchivoResultados);
	                    document.body.appendChild(downloadLink);
	                    downloadLink.click();
	                    window.URL.revokeObjectURL(downloadLink.href);
	                }
	                catch (exception) {
	                    var msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    that.toastr.error(msg);
	                    console.error(msg, exception);
	                }
	            }, function (reason) {
	                var msg;
	                if (reason.status === 503) {
	                    msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	                }
	                else {
	                    if (reason.data && reason.data.message) {
	                        msg = reason.data.message;
	                    }
	                    else {
	                        msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                        console.error(msg, reason);
	                    }
	                }
	                that.toastr.error(msg);
	            }).finally(function () {
	                that.ConsultingService.massiveListFilterExtendedGET('');
	            });
	        });
	    };
	    MassiveListFilterDetalladaController.prototype.formatDate = function (inDate) {
	        var dateValue = new Date(inDate);
	        return dateValue.toLocaleString('es-CO');
	    };
	    return MassiveListFilterDetalladaController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MassiveListFilterDetalladaController;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var massiveListFilterDetallada_controller_1 = __webpack_require__(91);
	exports.MassiveListFilterDetalladaComponent = {
	    templateUrl: 'app/consulting/components/massiveListFilterDetallada/massiveListFilterDetallada.html',
	    controller: massiveListFilterDetallada_controller_1.default
	};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	"use strict";
	var MassiveListFilterDetalladaController = (function () {
	    /** @ngInject */
	    MassiveListFilterDetalladaController.$inject = ["ConsultingService", "rx", "$window", "toastr", "$translate", "$timeout", "ngDialog", "$scope", "$state"];
	    function MassiveListFilterDetalladaController(ConsultingService, rx, $window, toastr, $translate, $timeout, ngDialog, $scope, $state) {
	        this.ConsultingService = ConsultingService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.ngDialog = ngDialog;
	        this.$scope = $scope;
	        this.$state = $state;
	        this.results = [];
	    }
	    MassiveListFilterDetalladaController.prototype.$onInit = function () {
	        this.pulling();
	    };
	    MassiveListFilterDetalladaController.prototype.pulling = function () {
	        this.showResults();
	        this.ConsultingService.massiveListFilterDetalladaGET(''); // todo: eliminar cuando se tenga usuario - Andres Peralta
	        setTimeout(this.pulling.bind(this), 10000);
	    };
	    MassiveListFilterDetalladaController.prototype.$onDestroy = function () {
	        this.massiveListFilterDetalladaGetObservable.observers = [];
	    };
	    MassiveListFilterDetalladaController.prototype.showResults = function () {
	        var that = this;
	        this.massiveListFilterDetalladaGetObservable = this.ConsultingService.massiveListFilterDetalladaGetObservable;
	        this.massiveListFilterDetalladaGetObservable.subscribe(function (value) {
	            if (!value.error && value.result) {
	                that.$timeout(function () {
	                    that.results = value.result;
	                }, 0);
	            }
	            else {
	                that.toastr.error(value.msg);
	                if (value.msg == that.$translate.instant('messages.error.unauthorized')) {
	                    that.$state.go('login');
	                }
	            }
	        }, function (exeption) {
	            if (exeption.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (exeption.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                var msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                that.toastr.error(msg);
	                console.error(msg, exeption);
	            }
	        });
	    };
	    MassiveListFilterDetalladaController.prototype.downloadResultsZip = function (dto) {
	        var that = this;
	        that.ngDialog.openConfirm({
	            template: '\  <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip') + '\</p>\
	          <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip-disclaimer') + '\</p>\
	          <div class="ngdialog-buttons">\
	              <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + that.$translate.instant('action.cancel') + '</button>\
	              <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + that.$translate.instant('action.accept') + '</button>\
	          </div>',
	            plain: true,
	            className: 'ngdialog-theme-default custom-width-800'
	        }).then(function (confirm) {
	            that.ConsultingService.downloadResultsFilterZip(dto.id, dto.esNatural).then(function (promiseValue) {
	                try {
	                    var file = new Blob([promiseValue.data], { type: 'application/zip' });
	                    var fileURL = URL.createObjectURL(file);
	                    var downloadLink = document.createElement('a');
	                    downloadLink.href = fileURL;
	                    downloadLink.download = dto.nombreArchivoResultados;
	                    downloadLink.setAttribute('download', dto.nombreArchivoResultados);
	                    document.body.appendChild(downloadLink);
	                    downloadLink.click();
	                    window.URL.revokeObjectURL(downloadLink.href);
	                }
	                catch (exception) {
	                    var msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    that.toastr.error(msg);
	                    console.error(msg, exception);
	                }
	            }, function (reason) {
	                var msg;
	                if (reason.status === 503) {
	                    msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	                }
	                else {
	                    if (reason.data && reason.data.message) {
	                        msg = reason.data.message;
	                    }
	                    else {
	                        msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                        console.error(msg, reason);
	                    }
	                }
	                that.toastr.error(msg);
	            }).finally(function () {
	                that.ConsultingService.massiveListFilterDetalladaGET('');
	            });
	        });
	    };
	    MassiveListFilterDetalladaController.prototype.formatDate = function (inDate) {
	        var dateValue = new Date(inDate);
	        return dateValue.toLocaleString('es-CO');
	    };
	    return MassiveListFilterDetalladaController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MassiveListFilterDetalladaController;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var parametro_list_controller_1 = __webpack_require__(93);
	exports.ParametroListComponent = {
	    templateUrl: 'app/consulting/components/parametros/components/parametroList/parametro-list.html',
	    controller: parametro_list_controller_1.default,
	    bindings: {
	        limit: '='
	    }
	};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

	"use strict";
	var ParametroListController = (function () {
	    /** @ngInject */
	    ParametroListController.$inject = ["$scope", "_", "Api", "toastr"];
	    function ParametroListController($scope, _, Api, toastr) {
	        this.$scope = $scope;
	        this._ = _;
	        this.Api = Api;
	        this.toastr = toastr;
	        this.loading = true;
	        this.umbrales = {};
	    }
	    ;
	    // servicio para obtener los parametros guardados.
	    ParametroListController.prototype.getParametros = function () {
	        var that = this;
	        that.loading = true;
	        that.Api.get('/consultas/parametros', {}, 'application/json')
	            .then(function (data) {
	            that.loading = false;
	            that.list = data.data;
	            that.umbrales = {};
	            for (var i = 0; i < that.list.length; i++) {
	                if (that.list[i].nombre == 'UMBRAL_RANGO_SALARIO_IBC') {
	                    that.umbrales.UMBRAL_RANGO_SALARIO_IBC = that.list[i].valorNumerico;
	                    that.umbral_rango = that.list[i].valorNumerico;
	                    localStorage.setItem("umbral_rango", that.umbral_rango);
	                }
	                else if (that.list[i].nombre == 'SMMLV') {
	                    that.umbrales.SMMLV = that.list[i].valorNumerico;
	                    that.salario_smmlv = that.list[i].valorNumerico;
	                    localStorage.setItem("salario_smmlv", that.salario_smmlv);
	                }
	                else if (that.list[i].nombre == 'UMBRAL_VARIACION_SALARIAL') {
	                    that.umbrales.UMBRAL_VARIACION_SALARIAL = that.list[i].valorNumerico;
	                    that.umbral_variacion = that.list[i].valorNumerico;
	                    localStorage.setItem("umbral_variacion", that.umbral_variacion);
	                }
	                else if (that.list[i].nombre == 'LISTA_CORREOS_NOTIFICACION') {
	                    that.umbrales.LISTA_CORREOS_NOTIFICACION = that.list[i].valorLista.join(', ');
	                    that.umbral_lista_correo = that.list[i].valorLista.join(', ');
	                    localStorage.setItem("umbral_lista_correo", that.umbral_lista_correo);
	                }
	            }
	        }, function (error) {
	            that.toastr.error('Error al enviar la consulta.');
	        });
	    };
	    ParametroListController.prototype.submitForm = function () {
	        var that = this;
	        var body;
	        var message;
	        var parametros = [];
	        for (var i = 0; i < that.list.length; i++) {
	            var dataAnterior = {
	                nombre: that.list[i].nombre,
	                tipo: that.list[i].tipo,
	                valorNumerico: that.list[i].valorNumerico,
	                valorTexto: that.list[i].tipo,
	                valorLista: that.list[i].valorLista,
	                valorMapa: that.list[i].valorMapa
	            };
	            var dataNueva = {
	                nombre: that.list[i].nombre,
	                tipo: that.list[i].tipo,
	                valorNumerico: null,
	                valorTexto: that.list[i].tipo,
	                valorLista: that.list[i].valorLista,
	                valorMapa: that.list[i].valorMapa
	            };
	            if (that.list[i].nombre === 'UMBRAL_VARIACION_SALARIAL') {
	                if (that.list[i].valorNumerico !== that.umbrales.UMBRAL_VARIACION_SALARIAL) {
	                    dataNueva.valorNumerico = Number(that.umbrales.UMBRAL_VARIACION_SALARIAL);
	                    parametros.push({ parametroAnterior: dataAnterior, parametroNuevo: dataNueva });
	                }
	            }
	            else if (that.list[i].nombre == 'UMBRAL_RANGO_SALARIO_IBC') {
	                if (that.list[i].valorNumerico !== that.umbrales.UMBRAL_RANGO_SALARIO_IBC) {
	                    dataNueva.valorNumerico = Number(that.umbrales.UMBRAL_RANGO_SALARIO_IBC);
	                    parametros.push({ parametroAnterior: dataAnterior, parametroNuevo: dataNueva });
	                }
	            }
	            else if (that.list[i].nombre === 'SMMLV') {
	                if (that.list[i].valorNumerico != that.umbrales.SMMLV) {
	                    dataNueva.valorNumerico = Number(that.umbrales.SMMLV);
	                    parametros.push({ parametroAnterior: dataAnterior, parametroNuevo: dataNueva });
	                }
	            }
	            else if (that.list[i].nombre === 'LISTA_CORREOS_NOTIFICACION') {
	                if (that.list[i].valorLista.join(', ') != that.umbrales.LISTA_CORREOS_NOTIFICACION) {
	                    var arrayEmail = that.umbrales.LISTA_CORREOS_NOTIFICACION;
	                    var splitted = arrayEmail.split(", ");
	                    dataNueva.valorNumerico = 0;
	                    dataNueva.valorLista = splitted;
	                    parametros.push({ parametroAnterior: dataAnterior, parametroNuevo: dataNueva });
	                }
	            }
	        }
	        if (parametros.length != 0) {
	            if (that.umbrales.UMBRAL_RANGO_SALARIO_IBC == 0) {
	                that.toastr.error('El valor del umbral rangos Salario e IBC no puede ser 0');
	            }
	            else if (that.umbrales.UMBRAL_VARIACION_SALARIAL == 0) {
	                that.toastr.error('El valor del Umbral variación significativa de salario no puede ser 0');
	            }
	            else if (that.umbrales.SMMLV == 0) {
	                that.toastr.error('El valor del Salario mínimo mensual legal vigente no puede ser 0');
	            }
	            else if (that.umbrales.SMMLV == 0) {
	                that.toastr.error('La lista de emails de notificación no puede estar vacia');
	            }
	            else {
	                body = { parametros: parametros };
	                message = 'Los parámetros se han actualizado con éxito.';
	                that.Api.put('/consultas/parametros', body, true).then(function (data) {
	                    that.toastr.success(message);
	                    that.getParametros();
	                }, function (error) {
	                    that.toastr.error(error.data);
	                });
	            }
	        }
	        else {
	            that.toastr.error('No hay cambios en los parámetros actuales');
	            that.getParametros();
	        }
	    };
	    /*public enableEmail(event: any,  tipo) {
	      var that = this;
	      if(tipo == 'UMBRAL_RANGO_SALARIO_IBC'){
	        if ( Number(localStorage.getItem("umbral_rango")) === Number(event.target.value)) {
	          this.enableInputEmail = false;
	        } else {
	          this.enableInputEmail = true;
	        }
	      } else if(tipo == 'SMMLV'){
	        if ( Number(localStorage.getItem("salario_smmlv")) === Number(event.target.value)) {
	          this.enableInputEmail = false;
	        } else {
	          this.enableInputEmail = true;
	        }
	      } else if (tipo == 'UMBRAL_VARIACION_SALARIAL') {
	        if ( Number(localStorage.getItem("umbral_variacion")) === Number(event.target.value)) {
	          this.enableInputEmail = false;
	        } else {
	          this.enableInputEmail = true;
	        }
	      }
	    }*/
	    ParametroListController.prototype.$onInit = function () {
	        var that = this;
	        this.enableInputEmail = false;
	        this.getParametros();
	    };
	    return ParametroListController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ParametroListController;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var parametro_controller_1 = __webpack_require__(95);
	exports.ParametroComponent = {
	    templateUrl: 'app/consulting/components/parametros/components/parametro/parametro.html',
	    controller: parametro_controller_1.default
	};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	"use strict";
	var ParametroController = (function () {
	    function ParametroController() {
	    }
	    return ParametroController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ParametroController;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var parametro_filter_controller_1 = __webpack_require__(97);
	exports.ParametroFilterComponent = {
	    require: {
	        'parent': '^parametrolist'
	    },
	    templateUrl: 'app/consulting/components/parametros/components/parametrofilter/parametro.filter.html',
	    controller: parametro_filter_controller_1.default,
	};


/***/ }),
/* 97 */
/***/ (function(module, exports) {

	"use strict";
	var ParametroFilterController = (function () {
	    /** @ngInject */
	    ParametroFilterController.$inject = ["EntidadService", "$state"];
	    function ParametroFilterController(EntidadService, $state) {
	        this.EntidadService = EntidadService;
	        this.$state = $state;
	        this.especifica = 'nombre';
	    }
	    ParametroFilterController.prototype.setfilter = function () {
	        // this.parent.filterEntidad(this.filtro, this.especifica );
	    };
	    return ParametroFilterController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ParametroFilterController;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var parametro_form_controller_1 = __webpack_require__(99);
	exports.ParametroFormComponent = {
	    templateUrl: 'app/consulting/components/parametros/components/parametroform/parametro-form.html',
	    controller: parametro_form_controller_1.default,
	    bindings: {
	        articlebinding: '=',
	        departamentosbinding: '='
	    }
	};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	"use strict";
	var ParametroFormController = (function () {
	    // this.entidadToSend.dominioCorreo = [];
	    /** @ngInject */
	    ParametroFormController.$inject = ["$state", "Api", "toastr"];
	    function ParametroFormController($state, Api, toastr) {
	        this.$state = $state;
	        this.Api = Api;
	        this.toastr = toastr;
	        this.title = 'CREAR';
	        this.edit = false;
	        this.checkRango = false;
	        this.EstadoEntidad = [
	            { name: 'Activo', value: 'activo' },
	            { name: 'Inactivo', value: 'inactivo' }
	        ];
	    }
	    ParametroFormController.prototype.setCiudad = function () {
	        var that = this;
	        that.Api.get('/administracion/ciudades/' + that.entidadToSend.departamento, {}, 'application/json').then(function (data) {
	            that.listciudades = data.data;
	        }, function (error) {
	            that.toastr.error('Error al enviar la consulta.');
	        });
	    };
	    ParametroFormController.prototype.MaysPrimera = function (string) {
	        return string.charAt(0).toUpperCase() + string.slice(1);
	    };
	    ParametroFormController.prototype.submitForm = function () {
	        var that = this;
	        var header;
	        var message = 'Entidad Guardada';
	        var texto = this.entidadToSend.nombre;
	        this.entidadToSend.nombre = this.MaysPrimera(texto.toLowerCase());
	        this.checkRango ? this.entidadToSend.consolidadaRango = 'true' : this.entidadToSend.consolidadaRango = 'false';
	        if (this.edit) {
	            header = { commandName: 'ActualizarEntidad', body: { entidadVieja: this.entidadToPre, entidadNueva: this.entidadToSend } };
	            message = 'La entidad ha sido editada con éxito';
	        }
	        else {
	            header = { commandName: 'CrearEntidad', body: this.entidadToSend };
	            message = 'La entidad ha sido creada con éxito';
	        }
	        that.Api.post('/administracion/commands', header, 'application/json').then(function (data) {
	            that.toastr.success(message);
	            that.$state.go('layout.admin.entidad');
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	    };
	    ParametroFormController.prototype.$onInit = function () {
	        if (this.articlebinding) {
	            this.title = 'EDITAR';
	            this.edit = true;
	            this.entidadToPre = angular.copy(this.articlebinding);
	            //  this.entidadToSend.dominioCorreo = [];
	            this.entidadToSend = this.articlebinding;
	            this.checkRango = this.articlebinding.consolidadaRango === 'true' ? true : false;
	            this.setCiudad();
	        }
	        else {
	            this.entidadToSend = {
	                nombre: '',
	                nit: '',
	                codigoEntidad: '',
	                codigoAch: '',
	                dominioCorreo: [],
	                nombreContacto: '',
	                correoContacto: '',
	                direccionEntidad: '',
	                departamento: '',
	                ciudad: '',
	                estado: '',
	                consolidadaRango: 'false'
	            };
	        }
	    };
	    ParametroFormController.prototype.isValidDomain = function (mail) {
	        return /^\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
	    };
	    ParametroFormController.prototype.addDomain = function (domain) {
	        if (domain) {
	            if (!this.isValidDomain(domain)) {
	                this.toastr.error('Error en el Formato del dominio');
	                return false;
	            }
	            var continua = true;
	            var dominios = this.entidadToSend.dominioCorreo;
	            for (var i = 0; i < dominios.length; i++) {
	                if (dominios[i] === domain) {
	                    continua = false;
	                    break;
	                }
	            }
	            if (continua) {
	                var that = this;
	                that.Api.get('/administracion/entidades/dominio/' + domain, {}, 'application/json').then(function (response) {
	                    var data = response.data;
	                    if (data.length === 0) {
	                        that.entidadToSend.dominioCorreo.push(domain);
	                        that.domain = '';
	                    }
	                    else {
	                        that.toastr.error('Este dominio ya está registrado.');
	                    }
	                }, function (error) {
	                    that.toastr.error('Error al verificar el dominio');
	                });
	            }
	        }
	    };
	    return ParametroFormController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ParametroFormController;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	"use strict";
	var ConsultingService = (function () {
	    /** @ngInject */
	    ConsultingService.$inject = ["Api", "rx", "$translate", "$state"];
	    function ConsultingService(Api, rx, $translate, $state) {
	        this.Api = Api;
	        this.rx = rx;
	        this.$translate = $translate;
	        this.$state = $state;
	        this.observableFileName = new this.rx.Subject();
	        this.massiveQueriesByUserGetObservable = new this.rx.Subject();
	        this.massiveListConsolidatedGetObservable = new this.rx.Subject();
	        this.massiveListExtendedGetObservable = new this.rx.Subject();
	        this.massiveListFilterDetalladaGetObservable = new this.rx.Subject();
	        this.massiveListFilterExtendedGetObservable = new this.rx.Subject();
	        this.massiveListLegalConsolidatedGetObservable = new this.rx.Subject();
	        this.downloadResultsZipObservable = new this.rx.Subject();
	    }
	    ConsultingService.prototype.consultarNaturalConsolidadoIndividual = function (tipoDocumento, numeroDocumento, periodo, ultimaPlanilla) {
	        var that = this;
	        var params = {
	            historico: periodo
	        };
	        if (tipoDocumento && numeroDocumento) {
	            this.naturalIndividualPromise = this.Api.get('/consultas/individuales/consolidada/naturales/' + tipoDocumento + numeroDocumento, params, 'application/pdf', false, false, 'arraybuffer')
	                .then(function (response) {
	                var file = new Blob([response.data], { type: 'application/pdf' });
	                var fileURL = URL.createObjectURL(file);
	                that.naturalRespuesta = {
	                    error: false,
	                    data: fileURL
	                };
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalIndividualPromise;
	    };
	    ConsultingService.prototype.consultarNaturalIndividual = function (tipoDocumento, numeroDocumento, periodo, ultimaPlanilla) {
	        var that = this;
	        var params = {
	            historico: periodo,
	            ultimaPlanilla: ultimaPlanilla
	        };
	        if (tipoDocumento && numeroDocumento) {
	            this.naturalIndividualPromise = this.Api.get('/consultas/individuales/personas/naturales/' + tipoDocumento + numeroDocumento, params, 'application/pdf', false, false, 'arraybuffer')
	                .then(function (response) {
	                var file = new Blob([response.data], { type: 'application/pdf' });
	                var fileURL = URL.createObjectURL(file);
	                that.naturalRespuesta = {
	                    error: false,
	                    data: fileURL
	                };
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalIndividualPromise;
	    };
	    ConsultingService.prototype.consultarJuridicaIndividual = function (tipoDocumento, numeroDocumento, periodo, ultimaPlanilla) {
	        var that = this;
	        var params = {
	            historico: periodo,
	            ultimaPlanilla: ultimaPlanilla
	        };
	        if (tipoDocumento && numeroDocumento) {
	            this.juridicaIndividualPromise = this.Api.get('/consultas/individuales/personas/juridicas/' + tipoDocumento + numeroDocumento, params, 'application/pdf', false, false, 'arraybuffer')
	                .then(function (response) {
	                var file = new Blob([response.data], { type: 'application/pdf' });
	                var fileURL = URL.createObjectURL(file);
	                that.juridicaRespuesta = {
	                    error: false,
	                    data: fileURL
	                };
	                return that.juridicaRespuesta;
	            }, function (error) {
	                that.juridicaRespuesta = {
	                    error: true,
	                    data: error.status
	                };
	                return that.juridicaRespuesta;
	            });
	        }
	        return this.juridicaIndividualPromise;
	    };
	    ConsultingService.prototype.setFileMasivas = function (file, name, payload) {
	        this.fileData = file;
	        this.fileName = name;
	        this.fileMasivo = payload;
	        this.observableFileName.onNext(this.fileName);
	    };
	    ConsultingService.prototype.getFileMasivas = function () {
	        return this.fileData;
	    };
	    ConsultingService.prototype.getArchivo = function () {
	        return this.fileMasivo;
	    };
	    ConsultingService.prototype.getFileMasivasName = function () {
	        return this.fileName;
	    };
	    ConsultingService.prototype.consultarNaturalMasiva = function (body, payload) {
	        if (body) {
	            return this.naturalMasivaPromise = this.Api.post("/consultas/masivas/?nombreConsulta=" + body.nombreConsulta + "&historico=" + body.historico + "&tipo=" + body.tipo, payload, undefined);
	        }
	    };
	    ConsultingService.prototype.consultarNaturalConsolidadoMasiva = function (body, payload) {
	        if (body) {
	            return this.naturalMasivaPromise = this.Api.post("/consultas/masivas/consolidada/naturales?nombreConsulta=" + body.nombreConsulta + "&historico=" + body.historico + "&tipo=CONSOLIDADA_PN", payload, undefined);
	        }
	    };
	    ConsultingService.prototype.consultaJuridicaMasiva = function (body, payload) {
	        if (body) {
	            return this.juridicaMasivaPromise = this.Api.post("/consultas/masivas/?nombreConsulta=" + body.nombreConsulta + "&historico=" + body.historico + "&tipo=" + body.tipo, payload, undefined);
	        }
	    };
	    ConsultingService.prototype.consultarNaturalMasivaFiltros = function (payload) {
	        return this.naturalMasivaFiltrosPromise = this.Api.post("/consultas/masivas/natural/filtros", payload, undefined);
	    };
	    ConsultingService.prototype.massiveQueriesByUserGET = function (user) {
	        var that = this;
	        this.massiveQueriesByUserGetPromise = this.Api.get('/consultas/masivas/?tipoConsulta=DETALLADA', '', 'application/json', true, false)
	            .then(function (promiseValue) {
	            try {
	                var jsonData = JSON.parse(JSON.stringify(promiseValue)).data;
	                var arrayDTO = [];
	                for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
	                    var actual = jsonData_1[_i];
	                    arrayDTO.push(actual);
	                }
	                var success = { result: arrayDTO, error: false };
	                that.massiveQueriesByUserGetObservable.onNext(success);
	                return arrayDTO;
	            }
	            catch (exception) {
	                that.massiveQueriesByUserGetObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else if (reason.status === 401) {
	                msg = that.$translate.instant('messages.error.unauthorized');
	            }
	            else if (reason.status === 403) {
	                msg = that.$translate.instant('messages.error.forbidden');
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = { msg: msg, error: true };
	            that.massiveQueriesByUserGetObservable.onNext(failure);
	        });
	        return this.massiveQueriesByUserGetPromise;
	    };
	    ConsultingService.prototype.massiveListConsolidatedGET = function (user) {
	        var that = this;
	        this.massiveListConsolidatedGetPromise = this.Api.get('/consultas/masivas/?tipoConsulta=CONSOLIDADA', '', 'application/json', true, false) // TODO Cambiar endpoint para consolidado cuando back entregue
	            .then(function (promiseValue) {
	            try {
	                var jsonData = JSON.parse(JSON.stringify(promiseValue)).data;
	                var arrayDTO = [];
	                for (var _i = 0, jsonData_2 = jsonData; _i < jsonData_2.length; _i++) {
	                    var actual = jsonData_2[_i];
	                    arrayDTO.push(actual);
	                }
	                var success = { result: arrayDTO, error: false };
	                that.massiveListConsolidatedGetObservable.onNext(success);
	                return arrayDTO;
	            }
	            catch (exception) {
	                that.massiveListConsolidatedGetObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else if (reason.status === 401) {
	                msg = that.$translate.instant('messages.error.unauthorized');
	            }
	            else if (reason.status === 403) {
	                msg = that.$translate.instant('messages.error.forbidden');
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = { msg: msg, error: true };
	            that.massiveListConsolidatedGetObservable.onNext(failure);
	        });
	        return this.massiveListConsolidatedGetPromise;
	    };
	    ConsultingService.prototype.massiveListFilterDetalladaGET = function (user) {
	        var that = this;
	        this.massiveListFilterDetalladaGetPromise = this.Api.get('/consultas/masivas/?tipoConsulta=DETALLADA_FILTROS', '', 'application/json', true, false)
	            .then(function (promiseValue) {
	            try {
	                var jsonData = JSON.parse(JSON.stringify(promiseValue)).data;
	                var arrayDTO = [];
	                for (var _i = 0, jsonData_3 = jsonData; _i < jsonData_3.length; _i++) {
	                    var actual = jsonData_3[_i];
	                    arrayDTO.push(actual);
	                }
	                var success = { result: arrayDTO, error: false };
	                that.massiveListFilterDetalladaGetObservable.onNext(success);
	                return arrayDTO;
	            }
	            catch (exception) {
	                that.massiveListFilterDetalladaGetObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else if (reason.status === 401) {
	                msg = that.$translate.instant('messages.error.unauthorized');
	            }
	            else if (reason.status === 403) {
	                msg = that.$translate.instant('messages.error.forbidden');
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = { msg: msg, error: true };
	            that.massiveListFilterDetalladaGetObservable.onNext(failure);
	        });
	        return this.massiveListFilterDetalladaGetPromise;
	    };
	    ConsultingService.prototype.massiveListFilterExtendedGET = function (user) {
	        var that = this;
	        this.massiveListFilterExtendedGetPromise = this.Api.get('/consultas/masivas/?tipoConsulta=EXTENDIDA_FILTROS', '', 'application/json', true, false)
	            .then(function (promiseValue) {
	            try {
	                var jsonData = JSON.parse(JSON.stringify(promiseValue)).data;
	                var arrayDTO = [];
	                for (var _i = 0, jsonData_4 = jsonData; _i < jsonData_4.length; _i++) {
	                    var actual = jsonData_4[_i];
	                    arrayDTO.push(actual);
	                }
	                var success = { result: arrayDTO, error: false };
	                that.massiveListFilterExtendedGetObservable.onNext(success);
	                return arrayDTO;
	            }
	            catch (exception) {
	                that.massiveListFilterExtendedGetObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else if (reason.status === 401) {
	                msg = that.$translate.instant('messages.error.unauthorized');
	            }
	            else if (reason.status === 403) {
	                msg = that.$translate.instant('messages.error.forbidden');
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = { msg: msg, error: true };
	            that.massiveListFilterExtendedGetObservable.onNext(failure);
	        });
	        return this.massiveListFilterExtendedGetPromise;
	    };
	    ConsultingService.prototype.downloadResultsZipPersonaNatural = function (id) {
	        var that = this;
	        this.Api.get2('/consultas/masivas/personas/naturales/' + id, '', 'application/zip', false, false)
	            .then(function (promiseValue) {
	            var file;
	            var fileURL;
	            try {
	                file = new Blob([promiseValue.data], { type: 'application/zip' });
	                fileURL = URL.createObjectURL(file);
	                var success = {
	                    result: fileURL,
	                    error: false
	                };
	                that.downloadResultsZipObservable.onNext(success);
	            }
	            catch (exception) {
	                that.downloadResultsZipObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = {
	                msg: msg,
	                error: true
	            };
	            that.downloadResultsZipObservable.onNext(failure);
	        });
	    };
	    ConsultingService.prototype.downloadResultsZipPersonaJuridica = function (id) {
	        var that = this;
	        this.Api.get2('/consultas/masivas/personas/juridicas/' + id, '', 'application/zip', false, false)
	            .then(function (promiseValue) {
	            var file;
	            var fileURL;
	            try {
	                file = new Blob([promiseValue.data], { type: 'application/zip' });
	                fileURL = URL.createObjectURL(file);
	                var success = {
	                    result: fileURL,
	                    error: false
	                };
	                that.downloadResultsZipObservable.onNext(success);
	            }
	            catch (exception) {
	                that.downloadResultsZipObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = {
	                msg: msg,
	                error: true
	            };
	            that.downloadResultsZipObservable.onNext(failure);
	        });
	    };
	    ConsultingService.prototype.downloadResultsZip = function (id, isNaturalPerson) {
	        if (id) {
	            return this.downloadResultsZipPromise = this.Api.get2('/consultas/masivas/' + id, '', 'application/zip', false, false, 'arraybuffer');
	        }
	    };
	    ConsultingService.prototype.downloadResultsConsolidatedZip = function (id, isNaturalPerson) {
	        if (id) {
	            return this.downloadResultsConsolidatedZipPromise = this.Api.get2('/consultas/masivas/consolidada/naturales/' + id, '', 'application/zip', false, false, 'arraybuffer');
	        }
	    };
	    ConsultingService.prototype.downloadResultsFilterZip = function (id, isNaturalPerson) {
	        if (id) {
	            return this.downloadResultsFilterZipPromise = this.Api.get2('/consultas/masivas/natural/filtros/' + id, '', 'application/zip', false, false, 'arraybuffer');
	        }
	    };
	    ConsultingService.prototype.deleteMassiveQuery = function (id) {
	        if (id) {
	            return this.deleteMassiveQueryPromise = this.Api.del('/consultas/masivas/' + id, '');
	        }
	    };
	    ConsultingService.prototype.consultarExtendidaNaturalIndividual = function (tipoDocumento, numeroDocumento, periodo, ultimaPlanilla) {
	        var that = this;
	        if (tipoDocumento && numeroDocumento) {
	            this.naturalIndividualPromise = this.Api.get("/consultas/individuales/extendida/natural/" + (tipoDocumento + numeroDocumento) + "?historico=" + periodo + "&ultimaPlanilla=" + ultimaPlanilla, {}, 'application/pdf', false, false, 'arraybuffer')
	                .then(function (response) {
	                var file = new Blob([response.data], { type: 'application/pdf' });
	                var fileURL = URL.createObjectURL(file);
	                that.naturalRespuesta = {
	                    error: false,
	                    data: fileURL
	                };
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalIndividualPromise;
	    };
	    ConsultingService.prototype.consultarExtendidaNaturalMasiva = function (payload) {
	        return this.naturalMasivaExtendidaPromise = this.Api.post("/consultas/masivas/extendida/natural", payload, undefined);
	    };
	    ConsultingService.prototype.massiveListExtendedGET = function (user) {
	        var that = this;
	        this.massiveListExtendedGetPromise = this.Api.get('/consultas/masivas/?tipoConsulta=EXTENDIDA', '', 'application/json', true, false)
	            .then(function (promiseValue) {
	            try {
	                var jsonData = JSON.parse(JSON.stringify(promiseValue)).data;
	                var arrayDTO = [];
	                for (var _i = 0, jsonData_5 = jsonData; _i < jsonData_5.length; _i++) {
	                    var actual = jsonData_5[_i];
	                    arrayDTO.push(actual);
	                }
	                var success = { result: arrayDTO, error: false };
	                that.massiveListExtendedGetObservable.onNext(success);
	                return arrayDTO;
	            }
	            catch (exception) {
	                that.massiveListExtendedGetObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else if (reason.status === 401) {
	                msg = that.$translate.instant('messages.error.forbidden');
	                that.$state.go('login');
	            }
	            else if (reason.status === 403) {
	                msg = that.$translate.instant('messages.error.unauthorized');
	                that.$state.go('login');
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = { msg: msg, error: true };
	            that.massiveListExtendedGetObservable.onNext(failure);
	        });
	        return this.massiveListExtendedGetPromise;
	    };
	    ConsultingService.prototype.downloadResultsExtendedZip = function (id, isNaturalPerson) {
	        if (id) {
	            return this.downloadResultsConsolidatedZipPromise = this.Api.get2('/consultas/masivas/extendida/natural/' + id, '', 'application/zip', false, false, 'arraybuffer');
	        }
	    };
	    ConsultingService.prototype.loadListContributingTypes = function () {
	        return this.Api.get('/consultas/listas/relacionLaboral', '', 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            return jsonData;
	        }, function (error) {
	            console.log('error: ' + JSON.stringify(error));
	        });
	    };
	    ConsultingService.prototype.consultarJuridicaConsolidadaIndividualPDF = function (tipoDocumento, numeroDocumento, data) {
	        var that = this;
	        if (tipoDocumento && numeroDocumento) {
	            this.juridicaConsolidadaIndividualPromise = this.Api.post("/consultas/individuales/consolidada/juridicas/" + (tipoDocumento + numeroDocumento), data, 'application/json', false, 'blob')
	                .then(function (response) {
	                var file = new Blob([response.data], { type: 'application/pdf' });
	                var fileURL = URL.createObjectURL(file);
	                that.juridicaRespuesta = {
	                    error: false,
	                    data: fileURL,
	                    message: ""
	                };
	                return that.juridicaRespuesta;
	            }, function (error) {
	                that.juridicaRespuesta = {
	                    error: true,
	                    data: error.status,
	                    message: error.data.message
	                };
	                return that.juridicaRespuesta;
	            });
	        }
	        return this.juridicaConsolidadaIndividualPromise;
	    };
	    ConsultingService.prototype.consultarJuridicaConsolidadaIndividualJSON = function (tipoDocumento, numeroDocumento, data) {
	        var that = this;
	        if (tipoDocumento && numeroDocumento) {
	            this.juridicaConsolidadaIndividualPromise = this.Api.post("/consultas/individuales/consolidada/juridicas/" + (tipoDocumento + numeroDocumento), data, 'application/json', false)
	                .then(function (response) {
	                that.juridicaRespuesta = {
	                    error: false,
	                    data: response.data,
	                    message: ""
	                };
	                return that.juridicaRespuesta;
	            }, function (error) {
	                that.juridicaRespuesta = {
	                    error: true,
	                    data: error.status,
	                    message: error.data.message
	                };
	                return that.juridicaRespuesta;
	            });
	        }
	        return this.juridicaConsolidadaIndividualPromise;
	    };
	    ConsultingService.prototype.massiveListLegalConsolidatedGET = function (user) {
	        var that = this;
	        this.massiveListLegalConsolidatedGetPromise = this.Api.get('/consultas/masivas/?tipoConsulta=CONSOLIDADA_JURIDICA', '', 'application/json', true, false)
	            .then(function (promiseValue) {
	            try {
	                var jsonData = JSON.parse(JSON.stringify(promiseValue)).data;
	                var arrayDTO = [];
	                for (var _i = 0, jsonData_6 = jsonData; _i < jsonData_6.length; _i++) {
	                    var actual = jsonData_6[_i];
	                    arrayDTO.push(actual);
	                }
	                var success = { result: arrayDTO, error: false };
	                that.massiveListLegalConsolidatedGetObservable.onNext(success);
	                return arrayDTO;
	            }
	            catch (exception) {
	                that.massiveListLegalConsolidatedGetObservable.onError(exception);
	            }
	        }, function (reason) {
	            var msg;
	            if (reason.status === 503) {
	                msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	            }
	            else if (reason.status === 401) {
	                msg = that.$translate.instant('messages.error.forbidden');
	                that.$state.go('login');
	            }
	            else if (reason.status === 403) {
	                msg = that.$translate.instant('messages.error.unauthorized');
	                that.$state.go('login');
	            }
	            else {
	                if (reason.data && reason.data.message) {
	                    msg = reason.data.message;
	                }
	                else {
	                    msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                    console.error(msg, reason);
	                }
	            }
	            var failure = { msg: msg, error: true };
	            that.massiveListLegalConsolidatedGetObservable.onNext(failure);
	        });
	        return this.massiveListLegalConsolidatedGetPromise;
	    };
	    ConsultingService.prototype.downloadResultsLegalConsolidatedZip = function (id, isNaturalPerson) {
	        if (id) {
	            return this.downloadResultsConsolidatedZipPromise = this.Api.get2('/consultas/masivas/consolidada/juridicas/' + id, '', 'application/zip', false, false, 'arraybuffer');
	        }
	    };
	    ConsultingService.prototype.consultarConsolidadaEmpresasMasiva = function (payload) {
	        return this.naturalMasivaExtendidaPromise = this.Api.post("/consultas/masivas/consolidada/juridicas", payload, undefined);
	    };
	    return ConsultingService;
	}());
	exports.ConsultingService = ConsultingService;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	MasivasFileReader.$inject = ["ConsultingService"];
	function MasivasFileReader(ConsultingService) {
	    return {
	        restrict: 'EA',
	        scope: {
	            fileReader: '='
	        },
	        link: function (scope, element, attrs) {
	            $(element).on('change', function (changeEvent) {
	                var files = changeEvent.target.files;
	                if (files.length) {
	                    var name = files[0].name;
	                    var r = new FileReader();
	                    r.onload = function (e) {
	                        var txt = e.target.result;
	                        ConsultingService.setFileMasivas(txt, name, files.item(0));
	                    };
	                    r.readAsText(files[0]);
	                }
	            });
	        }
	    };
	}
	exports.MasivasFileReader = MasivasFileReader;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	isCodigovailable.$inject = ["$window", "$http", "$q", "environment"];
	isNitvailable.$inject = ["$window", "$http", "$q", "environment"];
	var parametro_1 = __webpack_require__(103);
	var ParametroSrv = (function () {
	    /** @ngInject */
	    ParametroSrv.$inject = ["$http", "$q"];
	    function ParametroSrv($http, $q) {
	        this.$http = $http;
	        this.$q = $q;
	    }
	    ParametroSrv.prototype.getAll = function () {
	        var deferred = this.$q.defer();
	        deferred.resolve(parametro_1.parametros);
	        return deferred.promise;
	    };
	    ParametroSrv.prototype.get = function (id) {
	        var deferred = this.$q.defer();
	        // es para crear un nuev parametro 
	        if (!id.replace(' ', '')) {
	            deferred.resolve({});
	            return deferred.promise;
	        }
	        // entidad existente
	        deferred.resolve(parametro_1.parametro);
	        return deferred.promise;
	    };
	    return ParametroSrv;
	}());
	exports.ParametroSrv = ParametroSrv;
	/** @ngInject */
	function isCodigovailable($window, $http, $q, environment) {
	    return function (codigo) {
	        var deferred = $q.defer();
	        var Codigo = String(codigo);
	        $http.get(environment.api + ':' + environment.port + environment.path + '/administracion/entidades/id/' + Codigo).then(function (response) {
	            var data = response.data;
	            if (data.length === 0) {
	                // user not found, therefore unique!
	                deferred.resolve();
	            }
	            else {
	                // found the user, therefore not unique.
	                deferred.reject();
	            }
	        }, function () {
	            deferred.reject();
	        });
	        return deferred.promise;
	    };
	}
	exports.isCodigovailable = isCodigovailable;
	;
	/** @ngInject */
	function isNitvailable($window, $http, $q, environment) {
	    return function (codigo) {
	        var deferred = $q.defer();
	        var Codigo = String(codigo);
	        $http.get(environment.api + ':' + environment.port + environment.path + '/administracion/entidades/nit/' + Codigo).then(function (response) {
	            var data = response.data;
	            if (data.length === 0) {
	                // user not found, therefore unique!
	                deferred.resolve();
	            }
	            else {
	                // found the user, therefore not unique.
	                deferred.reject();
	            }
	        }, function () {
	            deferred.reject();
	        });
	        return deferred.promise;
	    };
	}
	exports.isNitvailable = isNitvailable;
	;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	"use strict";
	var Parametro = (function () {
	    function Parametro() {
	    }
	    return Parametro;
	}());
	exports.Parametro = Parametro;
	exports.parametros = [];
	exports.parametro = { valorNumerico: 1, nombre: '' };


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var massiveListLegalConsolidated_controller_1 = __webpack_require__(105);
	exports.MassiveListLegalConsolidatedComponent = {
	    templateUrl: 'app/consulting/components/massiveListLegalConsolidated/massiveListLegalConsolidated.html',
	    controller: massiveListLegalConsolidated_controller_1.default
	};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	"use strict";
	var MassiveListLegalConsolidatedController = (function () {
	    /** @ngInject */
	    MassiveListLegalConsolidatedController.$inject = ["ConsultingService", "rx", "$window", "toastr", "$translate", "$timeout", "ngDialog", "$scope", "$state"];
	    function MassiveListLegalConsolidatedController(ConsultingService, rx, $window, toastr, $translate, $timeout, ngDialog, $scope, $state) {
	        this.ConsultingService = ConsultingService;
	        this.rx = rx;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.ngDialog = ngDialog;
	        this.$scope = $scope;
	        this.$state = $state;
	        this.results = [];
	        this.enableTimeOut = true;
	    }
	    MassiveListLegalConsolidatedController.prototype.$onInit = function () {
	        this.pulling();
	        this.enableTimeOut = true;
	    };
	    MassiveListLegalConsolidatedController.prototype.pulling = function () {
	        if (this.enableTimeOut) {
	            this.showResults();
	            this.ConsultingService.massiveListLegalConsolidatedGET('');
	            setTimeout(this.pulling.bind(this), 10000);
	        }
	    };
	    MassiveListLegalConsolidatedController.prototype.$onDestroy = function () {
	        this.massiveListLegalConsolidatedGetObservable.observers = [];
	        this.enableTimeOut = false;
	    };
	    MassiveListLegalConsolidatedController.prototype.showResults = function () {
	        var that = this;
	        this.massiveListLegalConsolidatedGetObservable = this.ConsultingService.massiveListLegalConsolidatedGetObservable;
	        this.massiveListLegalConsolidatedGetObservable.subscribe(function (value) {
	            if (!value.error && value.result) {
	                that.$timeout(function () {
	                    that.results = value.result;
	                }, 0);
	            }
	            else {
	                that.toastr.error(value.msg);
	                if (value.msg == that.$translate.instant('messages.error.unauthorized')) {
	                    that.$state.go('login');
	                }
	            }
	        }, function (exeption) {
	            if (exeption.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (exeption.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                var msg = that.$translate.instant('massive-queries.error.get-all-by-user.default');
	                that.toastr.error(msg);
	                console.error(msg, exeption);
	            }
	        });
	    };
	    MassiveListLegalConsolidatedController.prototype.downloadLegalConsolidatedResultsZip = function (dto) {
	        var that = this;
	        that.ngDialog.openConfirm({
	            template: '\  <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip') + '\</p>\
	              <p style = "text-align: center;">' + that.$translate.instant('massive-queries.warning.download-results-zip-disclaimer') + '\</p>\
	              <div class="ngdialog-buttons">\
	                  <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + that.$translate.instant('action.cancel') + '</button>\
	                  <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + that.$translate.instant('action.accept') + '</button>\
	              </div>',
	            plain: true,
	            className: 'ngdialog-theme-default custom-width-800'
	        }).then(function (confirm) {
	            that.ConsultingService.downloadResultsLegalConsolidatedZip(dto.id, dto.esNatural).then(function (promiseValue) {
	                try {
	                    var file = new Blob([promiseValue.data], { type: 'application/zip' });
	                    var fileURL = URL.createObjectURL(file);
	                    var downloadLink = document.createElement('a');
	                    downloadLink.href = fileURL;
	                    downloadLink.download = dto.nombreArchivoResultados;
	                    downloadLink.setAttribute('download', dto.nombreArchivoResultados);
	                    document.body.appendChild(downloadLink);
	                    downloadLink.click();
	                    window.URL.revokeObjectURL(downloadLink.href);
	                }
	                catch (exception) {
	                    var msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                    that.toastr.error(msg);
	                    console.error(msg, exception);
	                }
	            }, function (reason) {
	                var msg;
	                if (reason.status === 503) {
	                    msg = that.$translate.instant('messages.error.service.unavailable') + 'Consultas';
	                }
	                else {
	                    if (reason.data && reason.data.message) {
	                        msg = reason.data.message;
	                    }
	                    else {
	                        msg = that.$translate.instant('massive-queries.error.download-results-zip.default');
	                        console.error(msg, reason);
	                    }
	                }
	                that.toastr.error(msg);
	            }).finally(function () {
	                that.ConsultingService.massiveListLegalConsolidatedGET('');
	            });
	        });
	    };
	    return MassiveListLegalConsolidatedController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MassiveListLegalConsolidatedController;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var common_module_1 = __webpack_require__(2);
	var admin_routes_1 = __webpack_require__(107);
	var entidad_service_1 = __webpack_require__(108);
	var entidad_list_component_1 = __webpack_require__(110);
	var entidad_componet_1 = __webpack_require__(112);
	var entidad_filter_component_1 = __webpack_require__(114);
	var entidad_form_component_1 = __webpack_require__(116);
	var roles_list_component_1 = __webpack_require__(118);
	var roles_componet_1 = __webpack_require__(120);
	var roles_filter_component_1 = __webpack_require__(122);
	var roles_form_component_1 = __webpack_require__(124);
	var rol_service_1 = __webpack_require__(126);
	var usuarios_componet_1 = __webpack_require__(127);
	var usuarios_masivas_component_1 = __webpack_require__(129);
	var usuarios_filter_component_1 = __webpack_require__(131);
	var usuarios_form_component_1 = __webpack_require__(133);
	var usuarios_list_component_1 = __webpack_require__(135);
	var usuario_service_1 = __webpack_require__(137);
	var codigoEntidad_directive_1 = __webpack_require__(138);
	var lowerCaseCorreos_directive_1 = __webpack_require__(139);
	var validateTypeDocument_directive_1 = __webpack_require__(140);
	var fileReaderDirective_directive_1 = __webpack_require__(141);
	var dominio_componet_1 = __webpack_require__(142);
	var dominio_filter_component_1 = __webpack_require__(144);
	var dominio_form_component_1 = __webpack_require__(146);
	var dominio_list_component_1 = __webpack_require__(148);
	var dominio_service_1 = __webpack_require__(150);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.admin', [common_module_1.default.name])
	    .config(admin_routes_1.default)
	    .component('entidad', entidad_componet_1.EntidadComponent)
	    .component('entidadlist', entidad_list_component_1.EntidadListComponent)
	    .component('entidadForm', entidad_form_component_1.EntidadFormComponent)
	    .component('entidadFilter', entidad_filter_component_1.EntidadFilterComponent)
	    .component('roles', roles_componet_1.RolesComponent)
	    .component('roleslist', roles_list_component_1.RolesListComponent)
	    .component('rolesForm', roles_form_component_1.RolesFormComponent)
	    .component('rolesFilter', roles_filter_component_1.RolesFilterComponent)
	    .service('RolService', rol_service_1.RolService)
	    .component('usuarios', usuarios_componet_1.UsuariosComponent)
	    .component('usuariosForm', usuarios_form_component_1.UsuariosFormComponent)
	    .component('usuariosFilter', usuarios_filter_component_1.UsuariosFilterComponent)
	    .component('usuarioslist', usuarios_list_component_1.UsuariosListComponent)
	    .component('usuariosMasivas', usuarios_masivas_component_1.UsuariosMasivasComponent)
	    .factory('isCodigovailable', entidad_service_1.isCodigovailable)
	    .directive('uniqueCodigo', codigoEntidad_directive_1.uniqueCodigo)
	    .factory('isNitvailable', entidad_service_1.isNitvailable)
	    .directive('uniqueNit', codigoEntidad_directive_1.uniqueNit)
	    .directive('typeDocument', validateTypeDocument_directive_1.validateTypeDoc)
	    .directive('lowerCase', lowerCaseCorreos_directive_1.lowerCase)
	    .service('UsuarioService', usuario_service_1.UsuarioService)
	    .service('EntidadService', entidad_service_1.EntidadSrv)
	    .directive('usuariosFileReader', fileReaderDirective_directive_1.UsuariosFileReader)
	    .component('dominio', dominio_componet_1.DominioComponent)
	    .component('dominioForm', dominio_form_component_1.DominioFormComponent)
	    .component('dominioFilter', dominio_filter_component_1.DominioFilterComponent)
	    .component('dominiolist', dominio_list_component_1.DominioListComponent)
	    .service('DominioService', dominio_service_1.DominioService);


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.admin', {
	        abstract: true,
	        url: '/admin',
	        templateUrl: 'app/admin/root.admin.html',
	    })
	        .state('layout.admin.entidad', {
	        url: '',
	        template: '<entidad></entidad>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('usuarios.entidad');
	            }]
	        }
	    })
	        .state('layout.admin.entidadForm', {
	        url: '/entidad/:id',
	        template: '<entidad-form articlebinding="$resolve.article.data"   departamentosbinding="$resolve.departamentos.data" ></entidad-form>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.verifyAuth();
	            }],
	            article: ["Api", "$state", "$stateParams", function (Api, $state, $stateParams) {
	                var id = $stateParams.id;
	                if (!id.replace(' ', '')) {
	                    return {};
	                }
	                return Api.get('/administracion/entidades/id/' + id, {}, 'application/json').then(function (article) { return article; }, function (err) { return $state.go('login'); });
	            }],
	            departamentos: ["Api", "$state", "$stateParams", function (Api, $state, $stateParams) {
	                return Api.get('/administracion/departamentos', {}, 'application/json').then(function (departamentos) { return departamentos; }, function (err) { return $state.go('login'); });
	            }]
	        }
	    })
	        .state('layout.admin.roles', {
	        url: '/roles',
	        template: '<roles></roles>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('usuarios.rol');
	            }]
	        }
	    })
	        .state('layout.admin.rolesForm', {
	        url: '/roles/:id',
	        template: '<roles-form></roles-form>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.verifyAuth();
	            }]
	        }
	    })
	        .state('layout.admin.users', {
	        url: '/usuarios',
	        template: '<usuarios usuariosbinding="$resolve.usuarios.data" ></usuarios>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('usuarios.usuario');
	            }]
	        }
	    })
	        .state('layout.admin.usuariosMasivas', {
	        url: '/usuariosMasivas',
	        template: '<usuarios-masivas></usuarios-masivas>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('usuarios.usuario');
	            }]
	        }
	    })
	        .state('layout.admin.usuariosForm', {
	        url: '/usuarios/:id',
	        template: '<usuarios-form  usuariobinding="$resolve.usuario.data"  rolesbinding="$resolve.roles.data" usuariosb="$resolve.usuario.data"   entidadesbinding="$resolve.entidades.data" ></usuarios-form>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.verifyAuth();
	            }],
	            usuario: ["Api", "$state", "$stateParams", function (Api, $state, $stateParams) {
	                var id = $stateParams.id;
	                if (!id.replace(' ', '')) {
	                    return {};
	                }
	                return Api.get('/administracion/usuarios/id/' + id, {}, 'application/json').then(function (usuario) { return usuario; }, function (err) { return $state.go('login'); });
	            }],
	            entidades: ["Api", "$state", "$stateParams", "User", function (Api, $state, $stateParams, User) {
	                var id = $stateParams.id;
	                if (!id.replace(' ', '')) {
	                    var currentUserParam = User.current.tenant === 'ach' ? {} : { cod: User.current.tenant, isCreate: true };
	                    return Api.get('/administracion/listas/entidades', currentUserParam, 'application/json').then(function (entiades) { return entiades; }, function (err) { return $state.go('login'); });
	                }
	                else {
	                    var currentUserParam = User.current.tenant === 'ach' ? {} : { cod: User.current.tenant, isCreate: false };
	                    return Api.get('/administracion/listas/entidades', currentUserParam, 'application/json').then(function (entiades) { return entiades; }, function (err) { return $state.go('login'); });
	                }
	            }]
	        }
	    })
	        .state('layout.admin.dominio', {
	        url: '/dominios',
	        template: '<dominio dominiobinding="$resolve.usuarios.data" ></dominio>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('usuarios.usuario');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	isCodigovailable.$inject = ["$window", "$http", "$q", "environment"];
	isNitvailable.$inject = ["$window", "$http", "$q", "environment"];
	var entidad_1 = __webpack_require__(109);
	var EntidadSrv = (function () {
	    /** @ngInject */
	    EntidadSrv.$inject = ["$http", "$q"];
	    function EntidadSrv($http, $q) {
	        this.$http = $http;
	        this.$q = $q;
	    }
	    EntidadSrv.prototype.getAll = function () {
	        var deferred = this.$q.defer();
	        deferred.resolve(entidad_1.entidades);
	        return deferred.promise;
	    };
	    EntidadSrv.prototype.get = function (id) {
	        var deferred = this.$q.defer();
	        // es para crear una nueva entidad 
	        if (!id.replace(' ', '')) {
	            deferred.resolve({});
	            return deferred.promise;
	        }
	        // entidad existente
	        deferred.resolve(entidad_1.entidad);
	        return deferred.promise;
	    };
	    return EntidadSrv;
	}());
	exports.EntidadSrv = EntidadSrv;
	/** @ngInject */
	function isCodigovailable($window, $http, $q, environment) {
	    return function (codigo) {
	        var deferred = $q.defer();
	        var Codigo = String(codigo);
	        $http.get(environment.api + ':' + environment.port + environment.path + '/administracion/entidades/id/' + Codigo).then(function (response) {
	            var data = response.data;
	            if (data.length === 0) {
	                // user not found, therefore unique!
	                deferred.resolve();
	            }
	            else {
	                // found the user, therefore not unique.
	                deferred.reject();
	            }
	        }, function () {
	            deferred.reject();
	        });
	        return deferred.promise;
	    };
	}
	exports.isCodigovailable = isCodigovailable;
	;
	/** @ngInject */
	function isNitvailable($window, $http, $q, environment) {
	    return function (codigo) {
	        var deferred = $q.defer();
	        var Codigo = String(codigo);
	        $http.get(environment.api + ':' + environment.port + environment.path + '/administracion/entidades/nit/' + Codigo).then(function (response) {
	            var data = response.data;
	            if (data.length === 0) {
	                // user not found, therefore unique!
	                deferred.resolve();
	            }
	            else {
	                // found the user, therefore not unique.
	                deferred.reject();
	            }
	        }, function () {
	            deferred.reject();
	        });
	        return deferred.promise;
	    };
	}
	exports.isNitvailable = isNitvailable;
	;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	"use strict";
	var Entidad = (function () {
	    function Entidad() {
	    }
	    return Entidad;
	}());
	exports.Entidad = Entidad;
	exports.entidades = [
	    { id: 1, nombre: 'Bancolombia', NIT: '123' },
	    { id: 2, nombre: 'Caja social', NIT: '234' },
	    { id: 3, nombre: 'ACH', NIT: '325' },
	    { id: 4, nombre: 'BBVA', NIT: '456' },
	    { id: 5, nombre: 'Banco de bogota', NIT: '567' },
	    { id: 6, nombre: 'falabella', NIT: '689' }
	];
	exports.entidad = { id: 1, nombre: 'Bancolombia', NIT: '123' };


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var entidad_list_controller_1 = __webpack_require__(111);
	exports.EntidadListComponent = {
	    templateUrl: 'app/admin/components/entidad/components/entidadList/entidad-list.html',
	    controller: entidad_list_controller_1.default,
	    bindings: {
	        limit: '='
	    }
	};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	"use strict";
	var EntidadListController = (function () {
	    /** @ngInject */
	    EntidadListController.$inject = ["$scope", "_", "Api", "toastr"];
	    function EntidadListController($scope, _, Api, toastr) {
	        this.$scope = $scope;
	        this._ = _;
	        this.Api = Api;
	        this.toastr = toastr;
	        this.loading = true;
	    }
	    ;
	    // servicio para traer todas las entidades.
	    EntidadListController.prototype.getEntidades = function () {
	        var that = this;
	        that.loading = true;
	        that.Api.get('/administracion/entidades', {}, 'application/json')
	            .then(function (data) {
	            that.loading = false;
	            that.list = data.data;
	            that.originalList = data.data;
	        }, function (error) {
	            that.toastr.error('Error al enviar la consulta.');
	        });
	    };
	    // esta funcion es llamada desde el hijo para filtrar la lista
	    EntidadListController.prototype.filterEntidad = function (filtro, byItem) {
	        if (!filtro) {
	            this.list = this.originalList;
	        }
	        else {
	            this.list = this._.filter(this.originalList, function (obj) {
	                var item = obj[byItem].toUpperCase();
	                var newFilter = filtro.toUpperCase();
	                return ~item.indexOf(newFilter);
	            });
	        }
	    };
	    EntidadListController.prototype.$onInit = function () {
	        this.getEntidades();
	    };
	    return EntidadListController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntidadListController;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var entidad_controller_1 = __webpack_require__(113);
	exports.EntidadComponent = {
	    templateUrl: 'app/admin/components/entidad/components/entidad/entidad.html',
	    controller: entidad_controller_1.default
	};


/***/ }),
/* 113 */
/***/ (function(module, exports) {

	"use strict";
	var EntidadController = (function () {
	    function EntidadController() {
	    }
	    return EntidadController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntidadController;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var entidad_filter_controller_1 = __webpack_require__(115);
	exports.EntidadFilterComponent = {
	    require: {
	        'parent': '^entidadlist'
	    },
	    templateUrl: 'app/admin/components/entidad/components/entidadfilter/entidad.filter.html',
	    controller: entidad_filter_controller_1.default,
	};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

	"use strict";
	var EntidadFilterController = (function () {
	    /** @ngInject */
	    EntidadFilterController.$inject = ["EntidadService", "$state"];
	    function EntidadFilterController(EntidadService, $state) {
	        this.EntidadService = EntidadService;
	        this.$state = $state;
	        this.especifica = 'nombre';
	    }
	    EntidadFilterController.prototype.setfilter = function () {
	        this.parent.filterEntidad(this.filtro, this.especifica);
	    };
	    return EntidadFilterController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntidadFilterController;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var entidad_form_controller_1 = __webpack_require__(117);
	exports.EntidadFormComponent = {
	    templateUrl: 'app/admin/components/entidad/components/entidadform/entidad-form.html',
	    controller: entidad_form_controller_1.default,
	    bindings: {
	        articlebinding: '=',
	        departamentosbinding: '='
	    }
	};


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	"use strict";
	var EntidadFormController = (function () {
	    // this.entidadToSend.dominioCorreo = [];
	    /** @ngInject */
	    EntidadFormController.$inject = ["$state", "Api", "toastr"];
	    function EntidadFormController($state, Api, toastr) {
	        this.$state = $state;
	        this.Api = Api;
	        this.toastr = toastr;
	        this.title = 'CREAR';
	        this.edit = false;
	        this.checkRango = false;
	        this.EstadoEntidad = [
	            { name: 'Activo', value: 'activo' },
	            { name: 'Inactivo', value: 'inactivo' }
	        ];
	    }
	    EntidadFormController.prototype.setCiudad = function () {
	        var that = this;
	        that.Api.get('/administracion/ciudades/' + that.entidadToSend.departamento, {}, 'application/json').then(function (data) {
	            that.listciudades = data.data;
	        }, function (error) {
	            that.toastr.error('Error al enviar la consulta.');
	        });
	    };
	    EntidadFormController.prototype.setListAreas = function () {
	        var _this = this;
	        this.entidadToSend.areas.forEach(function (area) {
	            var areaAux;
	            areaAux = { codigoArea: area.codigoArea, nombreArea: area.nombreArea, estadoArea: false };
	            _this.listAreas.push(areaAux);
	        });
	    };
	    EntidadFormController.prototype.setAreas = function () {
	        var _this = this;
	        this.entidadToSend.areas = [];
	        this.listAreas.forEach(function (area) {
	            if (!area.estadoArea) {
	                var areaDTO = void 0;
	                areaDTO = { codigoArea: area.codigoArea, nombreArea: area.nombreArea };
	                _this.entidadToSend.areas.push(areaDTO);
	            }
	        });
	    };
	    EntidadFormController.prototype.MaysPrimera = function (string) {
	        return string.charAt(0).toUpperCase() + string.slice(1);
	    };
	    EntidadFormController.prototype.submitForm = function () {
	        var that = this;
	        var header;
	        var message = 'Entidad Guardada';
	        var texto = this.entidadToSend.nombre;
	        this.entidadToSend.nombre = this.MaysPrimera(texto.toLowerCase());
	        this.checkRango ? this.entidadToSend.consolidadaRango = 'true' : this.entidadToSend.consolidadaRango = 'false';
	        this.setAreas();
	        if (this.edit) {
	            header = { commandName: 'ActualizarEntidad', body: { entidadVieja: this.entidadToPre, entidadNueva: this.entidadToSend } };
	            message = 'La entidad ha sido editada con éxito';
	        }
	        else {
	            header = { commandName: 'CrearEntidad', body: this.entidadToSend };
	            message = 'La entidad ha sido creada con éxito';
	        }
	        that.Api.post('/administracion/commands', header, 'application/json').then(function (data) {
	            that.toastr.success(message);
	            that.$state.go('layout.admin.entidad');
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	    };
	    EntidadFormController.prototype.$onInit = function () {
	        this.listAreas = [];
	        if (this.articlebinding) {
	            this.title = 'EDITAR';
	            this.edit = true;
	            this.entidadToPre = angular.copy(this.articlebinding);
	            //  this.entidadToSend.dominioCorreo = [];
	            this.entidadToSend = this.articlebinding;
	            this.checkRango = this.articlebinding.consolidadaRango === 'true' ? true : false;
	            this.setCiudad();
	            this.setListAreas();
	        }
	        else {
	            this.entidadToSend = {
	                nombre: '',
	                nit: '',
	                codigoEntidad: '',
	                codigoAch: '',
	                dominioCorreo: [],
	                nombreContacto: '',
	                correoContacto: '',
	                direccionEntidad: '',
	                departamento: '',
	                ciudad: '',
	                estado: '',
	                areas: [],
	                consolidadaRango: 'false'
	            };
	        }
	    };
	    EntidadFormController.prototype.isValidDomain = function (mail) {
	        return /^\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
	    };
	    EntidadFormController.prototype.addDomain = function (domain) {
	        if (domain) {
	            if (!this.isValidDomain(domain)) {
	                this.toastr.error('Error en el Formato del dominio');
	                return false;
	            }
	            var continua = true;
	            var dominios = this.entidadToSend.dominioCorreo;
	            for (var i = 0; i < dominios.length; i++) {
	                if (dominios[i] === domain) {
	                    continua = false;
	                    break;
	                }
	            }
	            if (continua) {
	                var that = this;
	                that.Api.get('/administracion/entidades/dominio/' + domain, {}, 'application/json').then(function (response) {
	                    var data = response.data;
	                    if (data.length === 0) {
	                        that.entidadToSend.dominioCorreo.push(domain);
	                        that.domain = '';
	                    }
	                    else {
	                        that.toastr.error('Este dominio ya está registrado.');
	                    }
	                }, function (error) {
	                    that.toastr.error('Error al verificar el dominio');
	                });
	            }
	        }
	    };
	    EntidadFormController.prototype.addArea = function (codeArea, nameArea) {
	        var _this = this;
	        if (codeArea && nameArea) {
	            if (codeArea === '00') {
	                this.toastr.error('Este código de área no es válido porque debe estar en el rango 01-99.');
	                return false;
	            }
	            var continua = true;
	            this.listAreas.forEach(function (area) {
	                if (area.codigoArea === codeArea) {
	                    continua = false;
	                    _this.toastr.error('Este código de área ya está registrado.');
	                    return;
	                }
	            });
	            if (continua) {
	                var areaAux = void 0;
	                areaAux = { codigoArea: codeArea, nombreArea: nameArea, estadoArea: false };
	                this.listAreas.push(areaAux);
	                this.codeArea = '';
	                this.nameArea = '';
	            }
	        }
	        else if (codeArea && !nameArea) {
	            this.toastr.error('Debe ingresar un nombre de área válido.');
	            return false;
	        }
	        else if (!codeArea && nameArea) {
	            this.toastr.error('Debe ingresar un código de área válido.');
	            return false;
	        }
	        else {
	            this.toastr.error('Para asociar el área a la entidad, debe ingresar el código y el nombre del área.');
	        }
	    };
	    return EntidadFormController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntidadFormController;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by santiago on 28/10/16.
	 */
	var roles_list_controller_1 = __webpack_require__(119);
	exports.RolesListComponent = {
	    templateUrl: 'app/admin/components/roles/components/rolesList/roles-list.html',
	    controller: roles_list_controller_1.default,
	    bindings: {
	        limit: '='
	    }
	};


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	"use strict";
	var RolesListController = (function () {
	    /** @ngInject */
	    RolesListController.$inject = ["RolService", "rx", "toastr", "$state", "ngDialog", "$translate"];
	    function RolesListController(RolService, rx, toastr, $state, ngDialog, $translate) {
	        this.RolService = RolService;
	        this.rx = rx;
	        this.toastr = toastr;
	        this.$state = $state;
	        this.ngDialog = ngDialog;
	        this.$translate = $translate;
	        this.roles = [];
	    }
	    RolesListController.prototype.cargarRoles = function () {
	        var that = this;
	        this.observableRoles = this.RolService.observableRoles;
	        this.observableRoles.subscribe(function (success) {
	            that.roles = success;
	        }, function (err) {
	            that.roles = [];
	            that.toastr.error('No se pudieron cargar los roles');
	        }, function () {
	            console.log('Completed');
	        });
	    };
	    RolesListController.prototype.editarRol = function (rol) {
	        this.RolService.toggleEditarRol(rol.rol, true);
	        this.$state.go('layout.admin.rolesForm');
	    };
	    RolesListController.prototype.eliminarRol = function (rol) {
	        var that = this;
	        var promesa = this.RolService.hayUsuariosPorRol(rol.rol);
	        promesa.then(function (response) {
	            if (response) {
	                that.toastr.error('Este rol tiene usuarios asociados, por lo tanto no se podrá eliminar.');
	            }
	            else {
	                that.ngDialog.openConfirm({
	                    template: '\  <p>¿Está seguro que desea eliminar el rol?</p>\
	                <div class="ngdialog-buttons">\
	                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + 'Cancelar' + '</button>\
	                    <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + 'Aceptar' + '</button>\
	                </div>',
	                    plain: true
	                }).then(function (confirm) {
	                    that.RolService.eliminarRol(rol.rol).then(function (response) {
	                        that.toastr.success('El rol se ha eliminado con éxito.');
	                        that.RolService.cargarRoles();
	                    }, function (error) {
	                        that.toastr.error('Error al eliminar el rol.');
	                    });
	                });
	            }
	        }, function (error) {
	            that.toastr.error('Error al eliminar el rol.');
	        });
	    };
	    RolesListController.prototype.comprobarRol = function (nombre) {
	        if (nombre === 'administrador-ach' || nombre === 'administrador-entidad' || nombre === 'administrador-entidad-principal') {
	            return false;
	        }
	        else {
	            return true;
	        }
	    };
	    RolesListController.prototype.$onInit = function () {
	        this.cargarRoles();
	        this.RolService.cargarRoles();
	    };
	    RolesListController.prototype.$onDestroy = function () {
	        this.observableRoles.observers = [];
	    };
	    return RolesListController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RolesListController;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var roles_controller_1 = __webpack_require__(121);
	exports.RolesComponent = {
	    templateUrl: 'app/admin/components/roles/components/roles/roles.html',
	    controller: roles_controller_1.default
	};


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	"use strict";
	var RolesController = (function () {
	    /** @ngInject */
	    RolesController.$inject = ["RolService"];
	    function RolesController(RolService) {
	        this.RolService = RolService;
	    }
	    RolesController.prototype.toggleEditar = function () {
	        this.RolService.toggleEditarRol(undefined, false);
	    };
	    return RolesController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RolesController;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var roles_filter_controller_1 = __webpack_require__(123);
	exports.RolesFilterComponent = {
	    require: {
	        'parent': '^roleslist'
	    },
	    templateUrl: 'app/admin/components/roles/components/rolesfilter/roles.filter.html',
	    controller: roles_filter_controller_1.default,
	};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	"use strict";
	// import { RolDTO } from 'dto/rolDTO';
	var RolesFilterController = (function () {
	    /** @ngInject */
	    RolesFilterController.$inject = ["RolService"];
	    function RolesFilterController(RolService) {
	        this.RolService = RolService;
	    }
	    RolesFilterController.prototype.buscar = function () {
	        if (this.nombre) {
	            this.RolService.buscarRolesPorNombre(this.nombre.toLowerCase());
	        }
	        else {
	            this.RolService.buscarRolesPorNombre(undefined);
	        }
	    };
	    return RolesFilterController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RolesFilterController;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var roles_form_controller_1 = __webpack_require__(125);
	exports.RolesFormComponent = {
	    templateUrl: 'app/admin/components/roles/components/rolesform/roles-form.html',
	    controller: roles_form_controller_1.default,
	    bindings: {
	        'rol': '<'
	    }
	};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	"use strict";
	var RolesFormController = (function () {
	    /** @ngInject */
	    RolesFormController.$inject = ["RolService", "toastr", "$state", "$timeout", "User"];
	    function RolesFormController(RolService, toastr, $state, $timeout, User) {
	        this.RolService = RolService;
	        this.toastr = toastr;
	        this.$state = $state;
	        this.$timeout = $timeout;
	        this.User = User;
	        this.selectAll = false;
	        this.editar = false;
	    }
	    RolesFormController.prototype.$onInit = function () {
	        var that = this;
	        this.cargarPermisos().then(function (response) {
	            that.verificarEditar();
	            if (that.editar) {
	                that.llenarDatos();
	            }
	        }, function (error) {
	            console.log(JSON.stringify(error));
	        });
	    };
	    RolesFormController.prototype.llenarDatos = function () {
	        var that = this;
	        this.nombreRol = this.rol.nombre;
	        if (this.nombreRol === 'administrador-ach' || this.nombreRol === 'administrador-entidad' || this.nombreRol === 'administrador-entidad-principal') {
	            this.bloquear = true;
	            this.permisos = this.rol.permisos;
	        }
	        else {
	            this.bloquear = false;
	        }
	        angular.forEach(this.rol.permisos, function (actual) {
	            angular.forEach(that.permisos, function (permiso) {
	                if (actual.recurso === permiso.recurso) {
	                    permiso.seleccionado = true;
	                }
	            });
	        });
	    };
	    RolesFormController.prototype.verificarEditar = function () {
	        this.rol = this.RolService.darRolEditar();
	        if (this.rol) {
	            this.editar = true;
	        }
	    };
	    RolesFormController.prototype.cargarPermisos = function () {
	        var that = this;
	        return this.RolService.cargarPermisos().then(function (response) {
	            that.permisos = that.RolService.darPermisos();
	            angular.forEach(that.permisos, function (actual) {
	                if (!actual.seleccionado) {
	                    actual.seleccionado = false;
	                }
	            });
	        }, function (error) {
	            console.log(JSON.stringify(error));
	        });
	    };
	    RolesFormController.prototype.crearRol = function () {
	        this.nombreRol.toLowerCase();
	        if (!this.validarAlfanumerico()) {
	            this.toastr.error('El campo debe ser alfanumérico, sin espacios, con \"-\" como único caracter especial permitido.');
	            return false;
	        }
	        var that = this;
	        this.permisosSeleccionados = [];
	        angular.forEach(this.permisos, function (actual) {
	            if (actual.seleccionado) {
	                that.permisosSeleccionados.push(actual);
	            }
	        });
	        if (this.permisosSeleccionados.length === 0) {
	            if (this.editar) {
	                this.toastr.error('Debe seleccionar por lo menos un permiso para el rol que se está editando.');
	            }
	            else {
	                this.toastr.error('Debe seleccionar por lo menos un permiso para el rol que se está creando.');
	            }
	        }
	        else {
	            var rol = {
	                nombre: this.nombreRol.toLowerCase(),
	                permisos: this.permisosSeleccionados,
	                seleccionado: false,
	                entidad: this.User.current.tenant
	            };
	            var promesa;
	            if (this.editar) {
	                promesa = this.RolService.editarRol(rol);
	            }
	            else {
	                promesa = this.RolService.crearRol(rol);
	            }
	            promesa.then(function (response) {
	                if (response.status === 200) {
	                    if (that.editar) {
	                        that.toastr.success('Los cambios han sido guardados con éxito.');
	                    }
	                    else {
	                        that.toastr.success('Rol creado con éxito.');
	                    }
	                    that.RolService.toggleEditarRol(undefined, false);
	                    that.$state.go('layout.admin.roles');
	                }
	                else {
	                    that.toastr.error('Error al crear el rol: ' + response.data.message);
	                }
	            }, function (error) {
	                if (error.data) {
	                    that.toastr.error(error.data.message);
	                }
	                else {
	                    that.toastr.error('Error al crear el rol');
	                }
	            });
	        }
	    };
	    RolesFormController.prototype.seleccionarTodos = function () {
	        var that = this;
	        angular.forEach(this.permisos, function (actual) {
	            actual.seleccionado = that.selectAll;
	        });
	    };
	    RolesFormController.prototype.validarAlfanumerico = function () {
	        if (/^[a-z-0-9]+$/i.test(this.nombreRol)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    RolesFormController.prototype.cambioPermiso = function (cambio) {
	        if (this.selectAll) {
	            if (!cambio) {
	                this.selectAll = false;
	            }
	        }
	    };
	    return RolesFormController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RolesFormController;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

	"use strict";
	var RolService = (function () {
	    /** @ngInject */
	    RolService.$inject = ["Api", "rx", "User"];
	    function RolService(Api, rx, User) {
	        this.Api = Api;
	        this.rx = rx;
	        this.User = User;
	        this.observableRoles = new this.rx.Subject();
	        this.observableListas = new this.rx.Subject();
	        this.rolEditable = false;
	    }
	    RolService.prototype.cargarPermisos = function () {
	        var that = this;
	        return this.Api.get('/administracion/roles/permisos', '', 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var permisosArray = [];
	            for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
	                var permisoActual = jsonData_1[_i];
	                var permisoResp = permisoActual;
	                permisosArray.push(permisoResp);
	            }
	            that.permisos = permisosArray;
	            return that.permisos;
	        }, function (error) {
	            console.log(JSON.stringify(error));
	        });
	    };
	    RolService.prototype.darPermisos = function () {
	        return this.permisos;
	    };
	    RolService.prototype.crearRol = function (rol) {
	        if (rol) {
	            var comando = {
	                'commandName': 'CrearRol',
	                'body': rol
	            };
	            return this.crearRolPromise = this.Api.post('/administracion/commands', comando, 'application/json');
	        }
	    };
	    RolService.prototype.editarRol = function (rol) {
	        if (rol) {
	            var comando = {
	                'commandName': 'EditarRol',
	                'body': rol
	            };
	            return this.crearRolPromise = this.Api.post('/administracion/commands', comando, 'application/json');
	        }
	    };
	    RolService.prototype.cargarRoles = function () {
	        var params = {
	            entidad: this.User.current.tenant
	        };
	        var that = this;
	        return this.Api.get('/administracion/roles', params, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var rolesArray = [];
	            for (var _i = 0, jsonData_2 = jsonData; _i < jsonData_2.length; _i++) {
	                var rolActual = jsonData_2[_i];
	                var rolResp = rolActual;
	                rolesArray.push(rolResp);
	            }
	            that.roles = rolesArray;
	            that.observableRoles.onNext(that.roles);
	            return that.roles;
	        }, function (error) {
	            if (error.status === 404) {
	                that.roles = [];
	                that.observableRoles.onNext(that.roles);
	            }
	            else {
	                console.log('error: ' + JSON.stringify(error));
	            }
	        });
	    };
	    RolService.prototype.cargarRolesListas = function (lista, entidad) {
	        var params = {
	            entidad: entidad
	        };
	        var that = this;
	        return this.Api.get('/administracion/listas/roles/' + lista, params, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var rolesArray = [];
	            for (var _i = 0, jsonData_3 = jsonData; _i < jsonData_3.length; _i++) {
	                var rolActual = jsonData_3[_i];
	                var rolResp = rolActual;
	                rolesArray.push(rolResp);
	            }
	            that.roles = rolesArray;
	            that.observableListas.onNext(that.roles);
	            return that.roles;
	        }, function (error) {
	            if (error.status === 404) {
	                that.roles = [];
	                that.observableListas.onNext(that.roles);
	            }
	            else {
	                console.log('error: ' + JSON.stringify(error));
	            }
	        });
	    };
	    RolService.prototype.cargarRolesPorEntidad = function (entidad) {
	        var params = {
	            entidad: entidad
	        };
	        var that = this;
	        return this.Api.get('/administracion/roles', params, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var rolesArray = [];
	            for (var _i = 0, jsonData_4 = jsonData; _i < jsonData_4.length; _i++) {
	                var rolActual = jsonData_4[_i];
	                var rolResp = rolActual;
	                rolesArray.push(rolResp);
	            }
	            that.roles = rolesArray;
	            that.observableRoles.onNext(that.roles);
	            return that.roles;
	        }, function (error) {
	            if (error.status === 404) {
	                that.roles = [];
	                that.observableRoles.onNext(that.roles);
	            }
	            else {
	                console.log('error: ' + JSON.stringify(error));
	            }
	        });
	    };
	    RolService.prototype.buscarRolesPorNombre = function (nombre) {
	        var params = {
	            entidad: this.User.current.tenant,
	            rol: nombre
	        };
	        var that = this;
	        return this.Api.get('/administracion/roles', params, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var rolesArray = [];
	            for (var _i = 0, jsonData_5 = jsonData; _i < jsonData_5.length; _i++) {
	                var rolActual = jsonData_5[_i];
	                var rolResp = rolActual;
	                rolesArray.push(rolResp);
	            }
	            that.roles = rolesArray;
	            that.observableRoles.onNext(that.roles);
	            return that.roles;
	        }, function (error) {
	            if (!nombre) {
	                that.cargarRoles();
	            }
	            else {
	                that.roles = [];
	                that.observableRoles.onNext(that.roles);
	            }
	        });
	    };
	    RolService.prototype.darRoles = function () {
	        return this.roles;
	    };
	    RolService.prototype.toggleEditarRol = function (rol, editar) {
	        this.rolEditable = editar;
	        this.rol = rol;
	    };
	    RolService.prototype.darRolEditar = function () {
	        return this.rol;
	    };
	    RolService.prototype.hayUsuariosPorRol = function (rol) {
	        var params = {
	            rol: rol.nombre
	        };
	        return this.Api.get('/administracion/usuarios/admin/entidad', params, 'application/json')
	            .then(function (response) {
	            if (response.data.length > 0) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }, function (error) {
	            return true;
	        });
	    };
	    RolService.prototype.eliminarRol = function (rol) {
	        if (rol) {
	            var comando = {
	                'commandName': 'EliminarRol',
	                'body': rol
	            };
	            return this.Api.post('/administracion/commands', comando, 'application/json');
	        }
	    };
	    return RolService;
	}());
	exports.RolService = RolService;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var usuarios_controller_1 = __webpack_require__(128);
	exports.UsuariosComponent = {
	    templateUrl: 'app/admin/components/usuarios/components/usuarios/usuarios.html',
	    controller: usuarios_controller_1.default,
	    bindings: {
	        usuariosbinding: '='
	    }
	};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	"use strict";
	var UsuariosController = (function () {
	    /** @ngInject */
	    UsuariosController.$inject = ["$scope", "EntidadService", "_"];
	    function UsuariosController($scope, EntidadService, _) {
	        this.$scope = $scope;
	        this.EntidadService = EntidadService;
	        this._ = _;
	    }
	    return UsuariosController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = UsuariosController;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var usuarios_masivas_controller_1 = __webpack_require__(130);
	exports.UsuariosMasivasComponent = {
	    templateUrl: 'app/admin/components/usuarios/components/usuariosMasivas/usuarios-masivas.html',
	    controller: usuarios_masivas_controller_1.default
	};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	"use strict";
	var UsuariosMasivasController = (function () {
	    /** @ngInject */
	    UsuariosMasivasController.$inject = ["$timeout", "UsuarioService", "toastr", "$translate"];
	    function UsuariosMasivasController($timeout, UsuarioService, toastr, $translate) {
	        this.$timeout = $timeout;
	        this.UsuarioService = UsuarioService;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.nombreArchivo = 'Selecciona un archivo';
	    }
	    UsuariosMasivasController.prototype.observarNombre = function () {
	        var that = this;
	        this.observableNombre = this.UsuarioService.observableFileName;
	        this.observableNombre.subscribe(function (success) {
	            that.$timeout(function () {
	                if (success) {
	                    that.nombreArchivo = success;
	                }
	                else {
	                    that.nombreArchivo = 'Selecciona un archivo';
	                }
	            }, 0);
	        }, function (err) {
	            that.nombreArchivo = 'Selecciona un archivo';
	        }, function () {
	            that.nombreArchivo = 'Selecciona un archivo';
	        });
	    };
	    UsuariosMasivasController.prototype.$onInit = function () {
	        this.observarNombre();
	    };
	    UsuariosMasivasController.prototype.$onDestroy = function () {
	        this.observableNombre.observers = [];
	    };
	    UsuariosMasivasController.prototype.cargar = function () {
	        if (this.UsuarioService.getFileMasivas()) {
	            this.UsuarioService.crearUsuariosMasivamente(this.UsuarioService.getFileMasivas());
	        }
	        else {
	            this.toastr.error(this.$translate.instant('massive-users.error.file-not-selected'));
	        }
	    };
	    UsuariosMasivasController.prototype.descargarPlantilla = function () {
	        this.UsuarioService.descargarPlantilla();
	    };
	    return UsuariosMasivasController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = UsuariosMasivasController;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var usuarios_filter_controller_1 = __webpack_require__(132);
	exports.UsuariosFilterComponent = {
	    require: {
	        'parent': '^usuarioslist'
	    },
	    templateUrl: 'app/admin/components/usuarios/components/usuariosfilter/usuarios.filter.html',
	    controller: usuarios_filter_controller_1.default,
	    bindings: {
	        roles: '='
	    }
	};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

	"use strict";
	// import { RolDTO } from 'roles/dto/rolDTO';
	var UsuariosFilterController = (function () {
	    /** @ngInject */
	    UsuariosFilterController.$inject = ["UsuarioService", "RolService", "User"];
	    function UsuariosFilterController(UsuarioService, RolService, User) {
	        this.UsuarioService = UsuarioService;
	        this.RolService = RolService;
	        this.User = User;
	        this.especifica = 'entidad';
	        this.isEmpty = false;
	        this.tipoDocumetosList = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Carné Diplomático', value: 'CD' }
	        ];
	        this.estadosList = [
	            { name: 'Activo', value: 'Activo' },
	            { name: 'Inactivo', value: 'Inactivo' },
	            { name: 'Bloqueado por el sistema', value: 'Bloqueado por el sistema' },
	            { name: 'Bloqueado por el administrador', value: 'Bloqueado por el administrador' }
	        ];
	        this.tipoDocumento = 'CC';
	        this.estadoSelecionado = 'Activo';
	        this.listaRoles = [];
	        this.roleSeleccionado = '';
	    }
	    UsuariosFilterController.prototype.limpiarBusqueda = function () {
	        this.filtro = null;
	    };
	    UsuariosFilterController.prototype.limpiarBusquedaDocumento = function () {
	        this.filtro = null;
	        this.tipoDocumento = 'CC';
	    };
	    UsuariosFilterController.prototype.buscar = function () {
	        this.isEmpty = false;
	        if (this.filtro) {
	            switch (this.especifica) {
	                case 'entidad':
	                    this.UsuarioService.cargarUsuariosEntidad(this.filtro);
	                    break;
	                case 'usuario':
	                    this.UsuarioService.cargarUsuariosEntidadPorUsuario(this.filtro);
	                    break;
	                case 'identificacion':
	                    var conCa = this.tipoDocumento + this.filtro;
	                    this.UsuarioService.cargarUsuariosEntidadPorDocumento(conCa);
	                    break;
	                default:
	                    this.UsuarioService.cargarUsuariosEntidad();
	            }
	        }
	        else if (this.estadoSelecionado || this.roleSeleccionado) {
	            switch (this.especifica) {
	                case 'estado':
	                    this.UsuarioService.cargarUsuariosEntidadPorEstado(this.estadoSelecionado);
	                    break;
	                case 'rol':
	                    this.UsuarioService.cargarUsuariosEntidadPorRol(this.roleSeleccionado);
	                    break;
	                default:
	                    this.isEmpty = true;
	                    this.UsuarioService.cargarUsuariosEntidad();
	            }
	        }
	        else {
	            this.isEmpty = true;
	            this.UsuarioService.cargarUsuariosEntidad();
	        }
	    };
	    UsuariosFilterController.prototype.$onInit = function () {
	        var ctx = this;
	        this.RolService.cargarRolesListas('consultar', this.User.current.tenant).then(function (data) {
	            ctx.listaRoles = data;
	            if (data.length > 0) {
	                ctx.roleSeleccionado = data[0].nombre;
	            }
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    return UsuariosFilterController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = UsuariosFilterController;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var usuarios_form_controller_1 = __webpack_require__(134);
	exports.UsuariosFormComponent = {
	    templateUrl: 'app/admin/components/usuarios/components/usuariosform/usuarios-form.html',
	    controller: usuarios_form_controller_1.default,
	    bindings: {
	        usuariobinding: '=',
	        rolesbinding: '=',
	        entidadesbinding: '=',
	        usuariosb: '='
	    }
	};


/***/ }),
/* 134 */
/***/ (function(module, exports) {

	"use strict";
	var UsuariosFormController = (function () {
	    /** @ngInject */
	    UsuariosFormController.$inject = ["UsuarioService", "RolService", "toastr", "$state", "$timeout", "Api", "User"];
	    function UsuariosFormController(UsuarioService, RolService, toastr, $state, $timeout, Api, User) {
	        this.UsuarioService = UsuarioService;
	        this.RolService = RolService;
	        this.toastr = toastr;
	        this.$state = $state;
	        this.$timeout = $timeout;
	        this.Api = Api;
	        this.User = User;
	        this.edit = false;
	        this.usuarioRegex = /^[0-9]*$/;
	        this.msgErrorRegex = 'Este campo debe ser numérico.';
	        this.estadosList = [
	            { name: 'Activo', value: 'Activo' },
	            { name: 'Inactivo', value: 'Inactivo' },
	            { name: 'Bloqueado por el administrador', value: 'Bloqueado por el administrador' },
	            { name: 'Bloqueado por el sistema', value: 'Bloqueado por el sistema' }
	        ];
	        this.tipoDocumetosList = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Carné Diplomático', value: 'CD' }
	        ];
	    }
	    UsuariosFormController.prototype.getstate = function () {
	        var setValidate = false;
	        if (this.edit) {
	            if (this.usuariosPre.estado === 'Inactivo' && this.usuarioToSend.estado === 'Activo') {
	                setValidate = true;
	            }
	        }
	        return setValidate;
	    };
	    UsuariosFormController.prototype.submitForm = function () {
	        var that = this;
	        var header;
	        var message = 'El usuario ha sido creada con éxito.';
	        if (this.edit) {
	            if (this.usuarioToSend.observacion === '') {
	                delete this.usuarioToSend.observacion;
	            }
	            header = { commandName: 'ActualizarUsuario', body: { usuarioViejo: this.usuariosPre, usuarioNuevo: this.usuarioToSend } };
	            message = 'El usuario ha sido editado con éxito';
	        }
	        else {
	            header = { commandName: 'CrearUsuario', body: this.usuarioToSend };
	            message = 'El usuario ha sido creado con éxito.';
	        }
	        that.Api.post('/administracion/commands', header, 'application/json').then(function (data) {
	            that.toastr.success(message);
	            that.$state.go('layout.admin.users');
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	    };
	    UsuariosFormController.prototype.tipoDocumentoCambio = function () {
	        if (this.usuarioToSend.tipoDocumento === 'CC') {
	            this.usuarioRegex = /^[0-9]*$/;
	            this.msgErrorRegex = 'Este campo debe ser numérico.';
	        }
	        else {
	            this.usuarioRegex = /^[0-9-a-zA-Z-ñÑ]*$/;
	            this.msgErrorRegex = 'Este campo debe ser alfanumérico.';
	        }
	    };
	    UsuariosFormController.prototype.cambioEntidad = function () {
	        var entidadSeleccionada = this.usuarioToSend.entidad;
	        var that = this;
	        var lista = 'editar';
	        if (!this.edit) {
	            lista = 'crear';
	        }
	        this.RolService.cargarRolesListas(lista, entidadSeleccionada).then(function (response) {
	            that.rolesbinding = response;
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	        this.UsuarioService.cargarAreasPorEntidad(entidadSeleccionada).then(function (response) {
	            that.areasbinding = response;
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	    };
	    UsuariosFormController.prototype.cambioArea = function () {
	        var areaSeleccionada = this.usuarioToSend.nombreArea;
	        if (areaSeleccionada) {
	            for (var i = 0; i < this.areasbinding.length; i++) {
	                if (this.areasbinding[i].nombreArea === areaSeleccionada) {
	                    this.usuarioToSend.codigoArea = this.areasbinding[i].codigoArea;
	                }
	            }
	        }
	        else {
	            this.usuarioToSend.codigoArea = '';
	            this.usuarioToSend.nombreArea = '';
	        }
	    };
	    UsuariosFormController.prototype.$onInit = function () {
	        var that = this;
	        if (!Array.isArray(this.entidadesbinding)) {
	            var currentValue = this.entidadesbinding;
	            this.entidadesbinding = [currentValue];
	        }
	        if (this.usuariobinding) {
	            this.edit = true;
	            this.usuariosPre = angular.copy(this.usuariobinding);
	            this.usuarioToSend = this.usuariobinding;
	            this.tipoDocumentoCambio();
	            this.RolService.cargarRolesListas('editar', this.usuarioToSend.entidad).then(function (response) {
	                that.rolesbinding = response;
	            }, function (error) {
	                that.toastr.error(error.data.message);
	            });
	            this.UsuarioService.cargarAreasPorEntidad(this.usuarioToSend.entidad).then(function (response) {
	                that.areasbinding = response;
	            }, function (error) {
	                that.toastr.error(error.data.message);
	            });
	        }
	        else {
	            this.usuarioToSend = {
	                tipoDocumento: 'CC',
	                numeroDocumento: '',
	                entidad: '',
	                nombres: '',
	                apellidos: '',
	                numeroTelefonico: '',
	                extension: '',
	                correoElectronico: '',
	                rol: '',
	                observacion: '',
	                estado: 'Activo',
	                usuarioApi: false,
	                codigoArea: '',
	                nombreArea: ''
	            };
	        }
	        var lista = 'editar';
	        if (!this.edit) {
	            lista = 'crear';
	        }
	    };
	    return UsuariosFormController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = UsuariosFormController;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by santiago on 28/10/16.
	 */
	var usuarios_list_controller_1 = __webpack_require__(136);
	exports.UsuariosListComponent = {
	    templateUrl: 'app/admin/components/usuarios/components/usuariosList/usuarios-list.html',
	    controller: usuarios_list_controller_1.default,
	    bindings: {
	        limit: '=',
	        list: '=',
	        roles: '=',
	    }
	};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

	"use strict";
	var UsuariosListController = (function () {
	    /** @ngInject */
	    UsuariosListController.$inject = ["$scope", "UsuarioService", "rx", "toastr", "$state", "$window", "ngDialog"];
	    function UsuariosListController($scope, UsuarioService, rx, toastr, $state, $window, ngDialog) {
	        this.$scope = $scope;
	        this.UsuarioService = UsuarioService;
	        this.rx = rx;
	        this.toastr = toastr;
	        this.$state = $state;
	        this.$window = $window;
	        this.ngDialog = ngDialog;
	        this.infoCsv = [];
	        this.pagina = 1;
	        this.totalResultados = 0;
	        this.itemsPerPage = 8;
	        this.csvHeaders = ['Entidad', 'Identificación', 'Nombre', 'Usuario', 'Rol', 'Estado', 'Último Ingreso', 'Usuario API Client'];
	    }
	    UsuariosListController.prototype.observarUsuarios = function () {
	        var that = this;
	        this.observableUsuarios = this.UsuarioService.observableUsuarios;
	        this.observableUsuarios.subscribe(function (success) {
	            console.log('entro al observable success: ' + JSON.stringify(success.length));
	            that.usuarios = success;
	            that.pagina = 1;
	            that.resultados = success;
	            for (var i = 0; i < that.resultados.length; i++) {
	                if (that.resultados[i].usuarioApi) {
	                    var usuario = {
	                        entidad: success[i].entidad,
	                        identificacion: success[i].identificacion,
	                        nombre: success[i].nombre,
	                        usuario: success[i].usuario,
	                        estado: success[i].estado,
	                        rol: success[i].rol,
	                        ultimoIngreso: success[i].ultimoIngreso,
	                        usuarioApi: 'X'
	                    };
	                    that.infoCsv.push(usuario);
	                }
	                else {
	                    var usuario = {
	                        entidad: success[i].entidad,
	                        identificacion: success[i].identificacion,
	                        nombre: success[i].nombre,
	                        usuario: success[i].usuario,
	                        estado: success[i].estado,
	                        rol: success[i].rol,
	                        ultimoIngreso: success[i].ultimoIngreso,
	                        usuarioApi: ''
	                    };
	                    that.infoCsv.push(usuario);
	                }
	            }
	            that.resultadosPagina = that.resultados.slice(0, that.itemsPerPage);
	            that.totalResultados = success.length;
	        }, function (err) {
	            that.usuarios = [];
	            that.toastr.error('No se pudieron cargar los usuarios');
	            that.resultados = undefined;
	            that.resultadosPagina = undefined;
	            that.totalResultados = 0;
	            that.pagina = 1;
	        }, function () {
	            that.resultados = undefined;
	            that.resultadosPagina = undefined;
	            that.totalResultados = 0;
	            that.pagina = 1;
	            console.log('Completed');
	        });
	    };
	    UsuariosListController.prototype.changePage = function (actual) {
	        console.log('Page changed to: ' + actual.pagina);
	        var inicio = this.itemsPerPage * (actual.pagina - 1);
	        var final = this.itemsPerPage * (actual.pagina);
	        this.resultadosPagina = this.resultados.slice(inicio, final);
	        this.pagina = actual.pagina;
	    };
	    UsuariosListController.prototype.descargar = function () {
	        console.log('Descargando usuarios ....');
	        console.log(this.resultadosPagina);
	        /*this.UsuarioService.descargarUsuarios(this.resultadosPagina) .then(
	               function (response: any) {
	                   that.toastr.success('Descarga exitosa');
	                   console.log(response);
	                    that.$window.open(response);
	               },
	               function (error: any) {
	                   that.toastr.error('Error en la descarga');
	               }
	               );*/
	    };
	    UsuariosListController.prototype.obtenerUsuario = function (usuario, date) {
	        var that = this;
	        this.UsuarioService.getUsuario(usuario).then(function (response) {
	            that.eliminarUsuario(response.data, date);
	        }, function (error) {
	        });
	    };
	    UsuariosListController.prototype.eliminarUsuario = function (payload, date) {
	        if (date) {
	            payload["ultimoIngreso"] = new Date(date).toISOString();
	        }
	        var that = this;
	        that.ngDialog.openConfirm({
	            template: '\  <p>¿Está seguro que desea eliminar el usuario?</p>\
	          <div class="ngdialog-buttons">\
	              <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">' + 'Cancelar' + '</button>\
	              <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">' + 'Aceptar' + '</button>\
	          </div>',
	            plain: true
	        }).then(function (confirm) {
	            that.UsuarioService.eliminarUsuarios(payload, date).then(function (response) {
	                that.toastr.success('El usuario se ha eliminado con éxito.');
	                that.getUsuarios();
	            }, function (error) {
	                that.toastr.error(error.data.message);
	                that.getUsuarios();
	            });
	        });
	    };
	    UsuariosListController.prototype.$onInit = function () {
	        this.getUsuarios();
	    };
	    UsuariosListController.prototype.getUsuarios = function () {
	        this.observarUsuarios();
	        this.UsuarioService.cargarUsuariosAch('ach');
	    };
	    return UsuariosListController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = UsuariosListController;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

	"use strict";
	var UsuarioService = (function () {
	    /** @ngInject */
	    UsuarioService.$inject = ["User", "Api", "rx", "$translate", "toastr", "$window", "$state"];
	    function UsuarioService(User, Api, rx, $translate, toastr, $window, $state) {
	        this.User = User;
	        this.Api = Api;
	        this.rx = rx;
	        this.$translate = $translate;
	        this.toastr = toastr;
	        this.$window = $window;
	        this.$state = $state;
	        this.url = '/administracion/usuarios/admin/ach';
	        this.queryParamSelect = {};
	        this.observableUsuarios = new this.rx.Subject();
	        this.usuarioEditable = false;
	        this.queryParamSelect = User.current.tenant === 'ach' ? {} : { cod: User.current.tenant };
	        this.url = this.User.current.tenant === 'ach' ? '/administracion/usuarios/admin/ach' : '/administracion/usuarios/admin/entidad';
	        this.observableFileName = new this.rx.Subject();
	    }
	    UsuarioService.prototype.crearUsuario = function (usuario) {
	        if (usuario) {
	            var comando = {
	                'commandName': 'CrearUsuario',
	                'body': usuario
	            };
	            return this.crearUsuarioPromise = this.Api.post('/administracion/commands', comando, 'application/json');
	        }
	    };
	    UsuarioService.prototype.actualizarUsuario = function (usuarioViejo, usuarioNuevo) {
	        if (usuarioViejo && usuarioNuevo) {
	            var comando = {
	                'commandName': 'ActualizarUsuario',
	                'body': {
	                    'usuarioViejo': usuarioViejo,
	                    'usuarioNuevo': usuarioNuevo
	                }
	            };
	            return this.crearUsuarioPromise = this.Api.post('/administracion/commands', comando, 'application/json');
	        }
	    };
	    UsuarioService.prototype.cargarUsuariosEntidad = function (idEntidad) {
	        var that = this;
	        var sendEntidad = {};
	        if (idEntidad) {
	            sendEntidad = { idEntidad: idEntidad };
	        }
	        else {
	            sendEntidad = {};
	        }
	        return this.Api.get(this.url, sendEntidad, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var usuariosArray = [];
	            for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
	                var usuarioActual = jsonData_1[_i];
	                console.log("JSDJHDSJDSFDFSJDFSJDSFJDJKDFSJKDFS");
	                var rolResp = usuarioActual;
	                usuariosArray.push(rolResp);
	            }
	            that.usuarios = usuariosArray;
	            that.observableUsuarios.onNext(that.usuarios);
	            return that.usuarios;
	        }, function (error) {
	            console.log(JSON.stringify(error));
	            that.usuarios = [];
	            that.observableUsuarios.onNext(that.usuarios);
	        });
	    };
	    UsuarioService.prototype.cargarUsuariosEntidadPorDocumento = function (documento) {
	        var that = this;
	        return this.Api.get(this.url, { documento: documento }, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var usuariosArray = [];
	            if (!$.isArray(jsonData)) {
	                var userResp = jsonData;
	                usuariosArray.push(userResp);
	            }
	            that.usuarios = usuariosArray;
	            that.observableUsuarios.onNext(that.usuarios);
	            return that.usuarios;
	        }, function (error) {
	            if (!documento) {
	                that.cargarUsuariosEntidad();
	            }
	            else {
	                that.usuarios = [];
	                that.observableUsuarios.onNext(that.usuarios);
	            }
	        });
	    };
	    UsuarioService.prototype.cargarUsuariosEntidadPorUsuario = function (usuarioEmail) {
	        var that = this;
	        return this.Api.get(this.url, { usuario: usuarioEmail }, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var usuariosArray = [];
	            if (!$.isArray(jsonData)) {
	                var userResp = jsonData;
	                usuariosArray.push(userResp);
	            }
	            that.usuarios = usuariosArray;
	            that.observableUsuarios.onNext(that.usuarios);
	            return that.usuarios;
	        }, function (error) {
	            if (!usuarioEmail) {
	                that.cargarUsuariosEntidad();
	            }
	            else {
	                that.usuarios = [];
	                that.observableUsuarios.onNext(that.usuarios);
	            }
	        });
	    };
	    UsuarioService.prototype.cargarUsuariosEntidadPorRol = function (rol) {
	        var that = this;
	        return this.Api.get(this.url, { rol: rol }, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var usuariosArray = [];
	            for (var _i = 0, jsonData_2 = jsonData; _i < jsonData_2.length; _i++) {
	                var usuarioActual = jsonData_2[_i];
	                var rolResp = usuarioActual;
	                usuariosArray.push(rolResp);
	            }
	            that.usuarios = usuariosArray;
	            that.observableUsuarios.onNext(that.usuarios);
	            return that.usuarios;
	        }, function (error) {
	            if (!rol) {
	                that.cargarUsuariosEntidad();
	            }
	            else {
	                that.usuarios = [];
	                that.observableUsuarios.onNext(that.usuarios);
	            }
	        });
	    };
	    UsuarioService.prototype.cargarUsuariosEntidadPorEstado = function (estado) {
	        var that = this;
	        return this.Api.get(this.url, { estado: estado }, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var usuariosArray = [];
	            for (var _i = 0, jsonData_3 = jsonData; _i < jsonData_3.length; _i++) {
	                var usuarioActual = jsonData_3[_i];
	                var rolResp = usuarioActual;
	                usuariosArray.push(rolResp);
	            }
	            that.usuarios = usuariosArray;
	            that.observableUsuarios.onNext(that.usuarios);
	            return that.usuarios;
	        }, function (error) {
	            if (!estado) {
	                that.cargarUsuariosEntidad();
	            }
	            else {
	                that.usuarios = [];
	                that.observableUsuarios.onNext(that.usuarios);
	            }
	        });
	    };
	    // TODO: Desarrollar los otros filtros para busqueda ach
	    UsuarioService.prototype.cargarUsuariosAch = function (idEntidad) {
	        var that = this;
	        return this.Api.get(this.url, {}, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var usuariosArray = [];
	            for (var _i = 0, jsonData_4 = jsonData; _i < jsonData_4.length; _i++) {
	                var usuarioActual = jsonData_4[_i];
	                var rolResp = usuarioActual;
	                usuariosArray.push(rolResp);
	            }
	            that.usuarios = usuariosArray;
	            that.observableUsuarios.onNext(that.usuarios);
	            return that.usuarios;
	        }, function (error) {
	            console.log(JSON.stringify(error));
	        });
	    };
	    UsuarioService.prototype.eliminarUsuarios = function (usuarioEliminar, date) {
	        var comando = {
	            'commandName': 'EliminarUsuario',
	            'body': usuarioEliminar
	        };
	        return this.eliminarUsuarioPromise =
	            this.Api.post('/administracion/commands', comando, 'application/json');
	    };
	    UsuarioService.prototype.getUsuario = function (id) {
	        return this.getUsuarioPromise =
	            this.Api.get('/administracion/usuarios/id/' + id, '', 'application/json');
	    };
	    UsuarioService.prototype.descargarUsuarios = function (usuarios) {
	        return this.crearUsuarioPromise =
	            this.Api.post('/administracion/usuarios/descargar/ccv', usuarios, 'application/json');
	    };
	    UsuarioService.prototype.cargarEntidadparaCrear = function () {
	        return this.Api.get('/administracion/listas/entidades', this.queryParamSelect, 'application/json');
	    };
	    UsuarioService.prototype.cargarEntidadparaEditar = function (codigo) {
	        return this.Api.get('/administracion/listas/entidades', { cod: codigo }, 'application/json');
	    };
	    UsuarioService.prototype.setFileMasivasUsuarios = function (file, name) {
	        this.fileData = file;
	        this.fileName = name;
	        this.observableFileName.onNext(this.fileName);
	    };
	    UsuarioService.prototype.getFileMasivas = function () {
	        return this.fileData;
	    };
	    UsuarioService.prototype.getFileMasivasName = function () {
	        return this.fileName;
	    };
	    UsuarioService.prototype.setFileName = function (name) {
	        this.fileName = name;
	    };
	    UsuarioService.prototype.crearUsuariosMasivamente = function (csv) {
	        var formData = new FormData();
	        formData.append('csv', csv);
	        var ctx = this;
	        return this.Api
	            .post('/administracion/usuarios/masivas', formData, undefined, true, 'arraybuffer')
	            .then(function (httpResponseOK) {
	            try {
	                var file = new Blob([httpResponseOK.data], { type: 'application/octet-stream' });
	                ctx.setFileMasivasUsuarios(undefined, undefined);
	                var fileURL = (ctx.$window.URL || ctx.$window.webkitURL).createObjectURL(file);
	                var linkElem = $('#link');
	                var element = angular.element(linkElem);
	                element.attr({
	                    href: fileURL,
	                    target: '_self',
	                    download: httpResponseOK.headers('fileName')
	                })[0].click();
	            }
	            catch (exception) {
	                var msg = ctx.$translate.instant('massive-users.error.load-users');
	                console.error(msg, exception);
	                ctx.toastr.error(msg);
	            }
	        }, function (httpResponseFail) {
	            ctx.setFileMasivasUsuarios(undefined, undefined);
	            var msg;
	            var message = String.fromCharCode.apply(null, new Uint8Array(httpResponseFail.data));
	            if (httpResponseFail.status === 503) {
	                msg = ctx.$translate.instant('messages.error.service.unavailable') + 'Usuarios';
	            }
	            else {
	                if (httpResponseFail.status === 400) {
	                    msg = ctx.$translate.instant('massive-users.error.empty-file');
	                }
	                else if (httpResponseFail.status === 401) {
	                    ctx.$state.go('login');
	                    msg = ctx.$translate.instant('messages.error.unauthorized');
	                }
	                else if (httpResponseFail.status === 403) {
	                    ctx.$state.go('login');
	                    msg = ctx.$translate.instant('messages.error.forbidden');
	                }
	                else {
	                    msg = ctx.$translate.instant('massive-users.error.load-users');
	                    console.error(msg, httpResponseFail);
	                }
	            }
	            ctx.toastr.error(msg);
	        });
	    };
	    UsuarioService.prototype.descargarPlantilla = function () {
	        var _this = this;
	        var ctx = this;
	        // this.Api.get('/migracion/reversiones', fecha, 'application/json', true, false)
	        return this.Api.get('/administracion/usuarios/plantilla', undefined, 'text/csv', true, false)
	            .then(function (httpResponseOK) {
	            try {
	                var file = new Blob([httpResponseOK.data], { type: 'application/octet-stream' });
	                _this.setFileMasivasUsuarios(undefined, undefined);
	                var fileURL = (ctx.$window.URL || ctx.$window.webkitURL).createObjectURL(file);
	                var linkElem = $('#link');
	                var element = angular.element(linkElem);
	                var nombre = httpResponseOK.headers('Content-Disposition');
	                var nombreFormato = ctx.formatFileName(nombre);
	                element.attr({
	                    href: fileURL,
	                    target: '_self',
	                    download: nombreFormato
	                })[0].click();
	            }
	            catch (exception) {
	                var msg = ctx.$translate.instant('massive-users.error.download-template');
	                console.error(msg, exception);
	                ctx.toastr.error(msg);
	            }
	        }, function (httpResponseFail) {
	            var msg;
	            if (httpResponseFail.status === 503) {
	                msg = ctx.$translate.instant('messages.error.service.unavailable') + 'Usuarios';
	            }
	            else {
	                if (httpResponseFail.data && httpResponseFail.data.message) {
	                    msg = httpResponseFail.data.message;
	                }
	                else {
	                    msg = ctx.$translate.instant('massive-users.error.download-template');
	                    console.error(msg, httpResponseFail);
	                }
	            }
	            ctx.toastr.error(msg);
	        });
	    };
	    UsuarioService.prototype.showMessageError = function (msg) {
	        this.toastr.error(msg);
	    };
	    UsuarioService.prototype.formatFileName = function (name) {
	        var lista = name.split(';');
	        var cont = lista[1];
	        cont = cont.replace(' filename=\"', '');
	        cont = cont.substring(0, cont.length - 1);
	        return cont;
	    };
	    UsuarioService.prototype.cargarAreasPorEntidad = function (entidad) {
	        var that = this;
	        return this.Api.get('/administracion/entidades/areas/' + entidad, '', 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var areasArray = [];
	            for (var _i = 0, jsonData_5 = jsonData; _i < jsonData_5.length; _i++) {
	                var areaActual = jsonData_5[_i];
	                var areaResp = areaActual;
	                areasArray.push(areaResp);
	            }
	            that.areas = areasArray;
	            return that.areas;
	        }, function (error) {
	            if (error.status === 404) {
	                that.areas = [];
	            }
	            else {
	                console.log('error: ' + JSON.stringify(error));
	            }
	        });
	    };
	    return UsuarioService;
	}());
	exports.UsuarioService = UsuarioService;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	uniqueCodigo.$inject = ["isCodigovailable"];
	uniqueNit.$inject = ["isNitvailable"];
	function uniqueCodigo(isCodigovailable) {
	    return {
	        restrict: 'EA',
	        require: '^ngModel',
	        link: function (scope, element, attrs, ngModel) {
	            ngModel.$asyncValidators.unique = isCodigovailable;
	        }
	    };
	}
	exports.uniqueCodigo = uniqueCodigo;
	/** @ngInject */
	function uniqueNit(isNitvailable) {
	    return {
	        restrict: 'EA',
	        require: '^ngModel',
	        link: function (scope, element, attrs, ngModel) {
	            ngModel.$asyncValidators.unique = isNitvailable;
	        }
	    };
	}
	exports.uniqueNit = uniqueNit;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	function lowerCase() {
	    return {
	        restrict: 'EA',
	        require: '^ngModel',
	        link: function (scope, element, attrs, ngModelCtrl) {
	            var lowercase = function (inputValue) {
	                if (inputValue === undefined) {
	                    inputValue = '';
	                }
	                var lowercased = inputValue.toLowerCase();
	                if (lowercased !== inputValue) {
	                    ngModelCtrl.$setViewValue(lowercased);
	                    ngModelCtrl.$render();
	                }
	                return lowercased;
	            };
	            ngModelCtrl.$parsers.unshift(lowercase);
	            lowercase(scope[attrs.ngModel]);
	        }
	    };
	}
	exports.lowerCase = lowerCase;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	function validateTypeDoc() {
	    return {
	        restrict: 'EA',
	        require: '^ngModel',
	        link: function (scope, element, attrs, ngModelCtrl) {
	            scope.tipoDoc = attrs.typeDocument;
	            attrs.$observe('typeDocument', function (val) {
	            });
	        }
	    };
	}
	exports.validateTypeDoc = validateTypeDoc;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	UsuariosFileReader.$inject = ["UsuarioService"];
	function UsuariosFileReader(UsuarioService) {
	    return {
	        restrict: 'EA',
	        scope: {
	            fileReader: '='
	        },
	        link: function (scope, element, attrs) {
	            $(element).on('change', function (changeEvent) {
	                var files = changeEvent.target.files;
	                UsuarioService.setFileName('Cargando');
	                if (files.length) {
	                    if (files[0].type !== 'text/csv' && files[0].type !== 'application/vnd.ms-excel') {
	                        UsuarioService.setFileName(undefined);
	                        UsuarioService.showMessageError('La extensión del archivo no es válida, Por favor cargar un archivo con extensión CSV');
	                    }
	                    else if (files[0].size === 0) {
	                        UsuarioService.setFileName(undefined);
	                        UsuarioService.showMessageError('El archivo que se intenta cargar está vacío, valide e intente de nuevo');
	                    }
	                    else {
	                        var name = files[0].name;
	                        UsuarioService.setFileMasivasUsuarios(files[0], name);
	                    }
	                }
	                element.val(null);
	            });
	        }
	    };
	}
	exports.UsuariosFileReader = UsuariosFileReader;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var dominio_controller_1 = __webpack_require__(143);
	exports.DominioComponent = {
	    templateUrl: 'app/admin/components/dominio/components/dominio/dominio.html',
	    controller: dominio_controller_1.default,
	    bindings: {
	        dominiobinding: '='
	    }
	};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	"use strict";
	var DominioController = (function () {
	    /** @ngInject */
	    DominioController.$inject = ["$scope", "EntidadService", "_"];
	    function DominioController($scope, EntidadService, _) {
	        this.$scope = $scope;
	        this.EntidadService = EntidadService;
	        this._ = _;
	    }
	    return DominioController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DominioController;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var dominio_filter_controller_1 = __webpack_require__(145);
	exports.DominioFilterComponent = {
	    require: {
	        'parent': '^dominiolist'
	    },
	    templateUrl: 'app/admin/components/dominio/components/dominiofilter/dominio.filter.html',
	    controller: dominio_filter_controller_1.default,
	    bindings: {
	        roles: '='
	    }
	};


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	"use strict";
	// import { RolDTO } from 'roles/dto/rolDTO';
	var DominioFilterController = (function () {
	    /** @ngInject */
	    DominioFilterController.$inject = ["UsuarioService", "RolService", "User"];
	    function DominioFilterController(UsuarioService, RolService, User) {
	        this.UsuarioService = UsuarioService;
	        this.RolService = RolService;
	        this.User = User;
	        this.especifica = 'entidad';
	        this.isEmpty = false;
	        this.tipoDocumetosList = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Carné Diplomático', value: 'CD' }
	        ];
	        this.estadosList = [
	            { name: 'Activo', value: 'Activo' },
	            { name: 'Inactivo', value: 'Inactivo' },
	            { name: 'Bloqueado por el sistema', value: 'Bloqueado por el sistema' },
	            { name: 'Bloqueado por el administrador', value: 'Bloqueado por el administrador' }
	        ];
	        this.tipoDocumento = 'CC';
	        this.estadoSelecionado = 'Activo';
	        this.listaRoles = [];
	        this.roleSeleccionado = '';
	    }
	    DominioFilterController.prototype.limpiarBusqueda = function () {
	        this.filtro = null;
	    };
	    DominioFilterController.prototype.limpiarBusquedaDocumento = function () {
	        this.filtro = null;
	        this.tipoDocumento = 'CC';
	    };
	    DominioFilterController.prototype.$onInit = function () {
	        var ctx = this;
	    };
	    return DominioFilterController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DominioFilterController;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var dominio_form_controller_1 = __webpack_require__(147);
	exports.DominioFormComponent = {
	    templateUrl: 'app/admin/components/dominio/components/dominioform/dominio-form.html',
	    controller: dominio_form_controller_1.default,
	    bindings: {
	        dominiobinding: '=',
	        rolesbinding: '=',
	        entidadesbinding: '=',
	        usuariosb: '='
	    }
	};


/***/ }),
/* 147 */
/***/ (function(module, exports) {

	"use strict";
	var DominioFormController = (function () {
	    /** @ngInject */
	    DominioFormController.$inject = ["UsuarioService", "RolService", "toastr", "$state", "$timeout", "Api", "User"];
	    function DominioFormController(UsuarioService, RolService, toastr, $state, $timeout, Api, User) {
	        this.UsuarioService = UsuarioService;
	        this.RolService = RolService;
	        this.toastr = toastr;
	        this.$state = $state;
	        this.$timeout = $timeout;
	        this.Api = Api;
	        this.User = User;
	        this.edit = false;
	        this.usuarioRegex = /^[0-9]*$/;
	        this.msgErrorRegex = 'Este campo debe ser numérico.';
	        this.estadosList = [
	            { name: 'Activo', value: 'Activo' },
	            { name: 'Inactivo', value: 'Inactivo' },
	            { name: 'Bloqueado por el administrador', value: 'Bloqueado por el administrador' },
	            { name: 'Bloqueado por el sistema', value: 'Bloqueado por el sistema' }
	        ];
	        this.tipoDocumetosList = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Carné Diplomático', value: 'CD' }
	        ];
	    }
	    DominioFormController.prototype.getstate = function () {
	        var setValidate = false;
	        if (this.edit) {
	            if (this.usuariosPre.estado === 'Inactivo' && this.usuarioToSend.estado === 'Activo') {
	                setValidate = true;
	            }
	        }
	        return setValidate;
	    };
	    DominioFormController.prototype.submitForm = function () {
	        var that = this;
	        var header;
	        var message = 'El usuario ha sido creada con éxito.';
	        if (this.edit) {
	            if (this.usuarioToSend.observacion === '') {
	                delete this.usuarioToSend.observacion;
	            }
	            header = { commandName: 'ActualizarUsuario', body: { usuarioViejo: this.usuariosPre, usuarioNuevo: this.usuarioToSend } };
	            message = 'El usuario ha sido editado con éxito';
	        }
	        else {
	            header = { commandName: 'CrearUsuario', body: this.usuarioToSend };
	            message = 'El usuario ha sido creado con éxito.';
	        }
	        that.Api.post('/administracion/commands', header, 'application/json').then(function (data) {
	            that.toastr.success(message);
	            that.$state.go('layout.admin.users');
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	    };
	    DominioFormController.prototype.tipoDocumentoCambio = function () {
	        if (this.usuarioToSend.tipoDocumento === 'CC') {
	            this.usuarioRegex = /^[0-9]*$/;
	            this.msgErrorRegex = 'Este campo debe ser numérico.';
	        }
	        else {
	            this.usuarioRegex = /^[0-9-a-zA-Z-ñÑ]*$/;
	            this.msgErrorRegex = 'Este campo debe ser alfanumérico.';
	        }
	    };
	    DominioFormController.prototype.cambioEntidad = function () {
	        var entidadSeleccionada = this.usuarioToSend.entidad;
	        var that = this;
	        var lista = 'editar';
	        if (!this.edit) {
	            lista = 'crear';
	        }
	        this.RolService.cargarRolesListas(lista, entidadSeleccionada).then(function (response) {
	            that.rolesbinding = response;
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	    };
	    DominioFormController.prototype.$onInit = function () {
	        var that = this;
	        if (!Array.isArray(this.entidadesbinding)) {
	            var currentValue = this.entidadesbinding;
	            this.entidadesbinding = [currentValue];
	        }
	        if (this.usuariobinding) {
	            this.edit = true;
	            this.usuariosPre = angular.copy(this.usuariobinding);
	            this.usuarioToSend = this.usuariobinding;
	            this.tipoDocumentoCambio();
	            this.RolService.cargarRolesListas('editar', this.usuarioToSend.entidad).then(function (response) {
	                that.rolesbinding = response;
	            }, function (error) {
	                that.toastr.error(error.data.message);
	            });
	        }
	        else {
	            this.usuarioToSend = {
	                tipoDocumento: 'CC',
	                numeroDocumento: '',
	                entidad: '',
	                nombres: '',
	                apellidos: '',
	                numeroTelefonico: '',
	                extension: '',
	                correoElectronico: '',
	                rol: '',
	                observacion: '',
	                estado: 'Activo',
	                usuarioApi: false
	            };
	        }
	        var lista = 'editar';
	        if (!this.edit) {
	            lista = 'crear';
	        }
	    };
	    return DominioFormController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DominioFormController;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by santiago on 28/10/16.
	 */
	var dominio_list_controller_1 = __webpack_require__(149);
	exports.DominioListComponent = {
	    templateUrl: 'app/admin/components/dominio/components/dominioList/dominio-list.html',
	    controller: dominio_list_controller_1.default,
	    bindings: {
	        limit: '=',
	        list: '=',
	        roles: '=',
	    }
	};


/***/ }),
/* 149 */
/***/ (function(module, exports) {

	"use strict";
	var DominioListController = (function () {
	    /** @ngInject */
	    DominioListController.$inject = ["User", "$scope", "DominioService", "rx", "toastr", "$state", "$window", "ngDialog", "$translate"];
	    function DominioListController(User, $scope, DominioService, rx, toastr, $state, $window, ngDialog, $translate) {
	        this.User = User;
	        this.$scope = $scope;
	        this.DominioService = DominioService;
	        this.rx = rx;
	        this.toastr = toastr;
	        this.$state = $state;
	        this.$window = $window;
	        this.ngDialog = ngDialog;
	        this.$translate = $translate;
	        this.dominioAnterior = '';
	        this.dominioNuevo = '';
	        this.enableDomainList = false;
	        this.enableUpdateUsers = false;
	        this.cargue = false;
	        this.infoCsv = [];
	        this.datosActualizados = [];
	        this.tablaDominios = [];
	        this.listadoPrueba = [];
	        this.pagina = 1;
	        this.totalResultados = 0;
	        this.itemsPerPage = 8;
	        this.pagina1 = 1;
	        this.totalResultados1 = 0;
	        this.itemsPerPage1 = 8;
	    }
	    DominioListController.prototype.observarUsuarios = function () {
	        var that = this;
	        this.observableUsuarios = this.DominioService.observableUsuarios;
	        this.observableUsuarios.subscribe(function (success) {
	            console.log('entro al observable success: ' + JSON.stringify(success.length), success);
	            that.usuarios = success;
	            that.pagina = 1;
	            that.resultados = success;
	            for (var i = 0; i < that.resultados.length; i++) {
	                if (that.resultados[i].usuarioApi) {
	                    var usuario = {
	                        entidad: success[i].entidad,
	                        identificacion: success[i].identificacion,
	                        nombre: success[i].nombre,
	                        usuario: success[i].usuario,
	                        estado: success[i].estado,
	                        rol: success[i].rol,
	                        ultimoIngreso: success[i].ultimoIngreso,
	                        usuarioApi: 'X'
	                    };
	                    that.infoCsv.push(usuario);
	                }
	                else {
	                    var usuario = {
	                        entidad: success[i].entidad,
	                        identificacion: success[i].identificacion,
	                        nombre: success[i].nombre,
	                        usuario: success[i].usuario,
	                        estado: success[i].estado,
	                        rol: success[i].rol,
	                        ultimoIngreso: success[i].ultimoIngreso,
	                        usuarioApi: ''
	                    };
	                    that.infoCsv.push(usuario);
	                }
	            }
	        }, function (err) {
	            that.usuarios = [];
	            that.toastr.error('No se pudieron cargar los usuarios');
	            that.resultados = undefined;
	            that.resultadosPagina = undefined;
	            that.totalResultados = 0;
	            that.pagina = 1;
	            that.resultadosPagina1 = undefined;
	            that.totalResultados1 = 0;
	            that.pagina1 = 1;
	        }, function () {
	            that.resultados = undefined;
	            that.resultadosPagina = undefined;
	            that.totalResultados = 0;
	            that.pagina = 1;
	            that.resultadosPagina1 = undefined;
	            that.totalResultados1 = 0;
	            that.pagina1 = 1;
	            console.log('Completed');
	        });
	    };
	    DominioListController.prototype.changePage = function (actual) {
	        console.log('Page changed to: ' + actual.pagina);
	        var inicio = this.itemsPerPage * (actual.pagina - 1);
	        var final = this.itemsPerPage * (actual.pagina);
	        this.resultadosPagina = this.changedUsers.slice(inicio, final);
	        this.pagina = actual.pagina;
	    };
	    DominioListController.prototype.changePage1 = function (actual) {
	        var that = this;
	        console.log('Page changed to: ' + actual.pagina);
	        var inicio1 = this.itemsPerPage1 * (actual.pagina - 1);
	        var final1 = this.itemsPerPage1 * (actual.pagina);
	        this.resultadosPagina1 = this.datosActualizados.slice(inicio1, final1);
	        this.pagina1 = actual.pagina;
	    };
	    DominioListController.prototype.obtenerDominios = function () {
	        var that = this;
	        var datosDominio = [];
	        this.DominioService.getDominiosNuevo().then(function (response) {
	            datosDominio = response.data.dominioCorreo;
	            that.tablaDominios = response.data.codigoEntidad;
	            var objArray = [];
	            for (var i = 0; i < datosDominio.length; i++) {
	                var usuario = { dominioCorreoEntidad: datosDominio[i] };
	                objArray.push(usuario);
	            }
	            that.dominios = objArray;
	        }, function (error) {
	            that.toastr.error(error.data.message);
	        });
	    };
	    DominioListController.prototype.isNumeric = function (keyCode) {
	        return ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 32 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126));
	    };
	    DominioListController.prototype.changeDomain = function () {
	        var that = this;
	        if (this.dominioAnterior != '' && this.dominioAnterior != null) {
	            if (this.dominioNuevo != '' && this.dominioNuevo != null) {
	                if (this.dominioAnterior != this.dominioNuevo) {
	                    that.changedUsers = [];
	                    for (var i = 0; i < that.infoCsv.length; i++) {
	                        var name_1 = this.infoCsv[i].usuario.substring(0, this.infoCsv[i].usuario.indexOf("@"));
	                        var domain = this.infoCsv[i].usuario.substring(this.infoCsv[i].usuario.lastIndexOf("@") + 1);
	                        if (domain == this.dominioAnterior && this.User.current.tenant == that.tablaDominios && this.infoCsv[i].estado == 'Activo') {
	                            var usuario = {
	                                usuarioOld: this.infoCsv[i].usuario,
	                                usuarioNew: name_1 + '@' + this.dominioNuevo,
	                                nameNew: name_1,
	                                newDomain: this.dominioNuevo,
	                                oldDomain: domain
	                            };
	                            that.changedUsers.push(usuario);
	                        }
	                    }
	                    if (that.changedUsers != [] && that.changedUsers != null && that.changedUsers != undefined && that.changedUsers.length != 0) {
	                        this.enableDomainList = true;
	                        this.resultadosPagina = that.changedUsers.slice(0, this.itemsPerPage);
	                        this.totalResultados = that.changedUsers.length;
	                    }
	                    else {
	                        this.toastr.error('El dominio seleccionado para ser cambiado no tiene usuarios asociados');
	                    }
	                }
	                else {
	                    this.toastr.error('El dominio nuevo debe ser distinto al dominio anterior');
	                }
	            }
	            else {
	                this.toastr.error('Debe seleccionar un dominio nuevo');
	            }
	        }
	        else {
	            this.toastr.error('Debe seleccionar un dominio anterior');
	        }
	    };
	    DominioListController.prototype.changeBeforeDomain = function () {
	        this.enableDomainList = false;
	    };
	    DominioListController.prototype.changeAfterDomain = function () {
	        this.enableDomainList = false;
	    };
	    DominioListController.prototype.backDomain = function () {
	        this.enableDomainList = false;
	        this.enableUpdateUsers = false;
	        this.dominioAnterior = '';
	        this.dominioNuevo = '';
	        this.DominioService.cargarUsuariosAch('ach');
	        this.resultados = [];
	        this.infoCsv = [];
	        this.cargue = false;
	        this.obtenerDominios();
	    };
	    DominioListController.prototype.saveDomains = function () {
	        var that = this;
	        this.cargue = true;
	        this.mapa = {};
	        for (var i = 0; i < this.changedUsers.length; i++) {
	            this.mapa[this.changedUsers[i].usuarioOld] = this.changedUsers[i].nameNew + '@' + this.dominioNuevo;
	        }
	        this.DominioService.saveDomains(this.mapa).then(function (response) {
	            that.enableDomainList = false;
	            that.enableUpdateUsers = true;
	            that.cargue = false;
	            that.datosActualizados = response.data;
	            that.resultadosPagina1 = that.datosActualizados.slice(0, that.itemsPerPage1);
	            that.totalResultados1 = that.datosActualizados.length;
	        }, function (error) {
	            if (error.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	            }
	            else if (error.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	            }
	            else {
	                that.toastr.error('Ha ocurrido un error al realizar el cambio de dominio');
	            }
	            this.backDomain();
	        });
	    };
	    DominioListController.prototype.$onInit = function () {
	        this.getUsuarios();
	        this.obtenerDominios();
	    };
	    DominioListController.prototype.getUsuarios = function () {
	        this.observarUsuarios();
	        this.DominioService.cargarUsuariosAch('ach');
	    };
	    return DominioListController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DominioListController;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

	"use strict";
	var DominioService = (function () {
	    /** @ngInject */
	    DominioService.$inject = ["User", "Api", "rx", "$translate", "toastr", "$window", "$state"];
	    function DominioService(User, Api, rx, $translate, toastr, $window, $state) {
	        this.User = User;
	        this.Api = Api;
	        this.rx = rx;
	        this.$translate = $translate;
	        this.toastr = toastr;
	        this.$window = $window;
	        this.$state = $state;
	        this.url = '/administracion/usuarios/admin/ach';
	        this.queryParamSelect = {};
	        this.observableUsuarios = new this.rx.Subject();
	        this.usuarioEditable = false;
	        this.queryParamSelect = User.current.tenant === 'ach' ? {} : { cod: User.current.tenant };
	        this.url = this.User.current.tenant === 'ach' ? '/administracion/usuarios/admin/ach' : '/administracion/usuarios/admin/entidad';
	        this.observableFileName = new this.rx.Subject();
	    }
	    DominioService.prototype.getUsuario = function (id) {
	        return this.getUsuarioPromise =
	            this.Api.get('/administracion/entidades/id/' + id, '', 'application/json');
	    };
	    DominioService.prototype.showMessageError = function (msg) {
	        this.toastr.error(msg);
	    };
	    DominioService.prototype.getDominiosNuevo = function () {
	        return this.getDominioNuevoPromise =
	            this.Api.get('/administracion/entidades/id/' + this.User.current.tenant, '', 'application/json');
	    };
	    DominioService.prototype.cargarUsuariosAch = function (idEntidad) {
	        var that = this;
	        return this.Api.get(this.url, {}, 'application/json')
	            .then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            var usuariosArray = [];
	            for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
	                var usuarioActual = jsonData_1[_i];
	                var rolResp = usuarioActual;
	                usuariosArray.push(rolResp);
	            }
	            that.usuarios = usuariosArray;
	            that.observableUsuarios.onNext(that.usuarios);
	            return that.usuarios;
	        }, function (error) {
	            console.log(JSON.stringify(error));
	        });
	    };
	    DominioService.prototype.saveDomains = function (payload) {
	        var dominiosEnviar = {
	            'userMap': payload
	        };
	        return this.eliminarUsuarioPromise =
	            this.Api.post('/administracion/usuarios/admin/cambiarDominio', JSON.stringify(dominiosEnviar), 'application/json');
	    };
	    return DominioService;
	}());
	exports.DominioService = DominioService;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var common_module_1 = __webpack_require__(2);
	var statistics_routes_1 = __webpack_require__(152);
	var statistics_component_1 = __webpack_require__(153);
	var statisticsForm_component_1 = __webpack_require__(155);
	var statistics_service_ts_1 = __webpack_require__(157);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.statistics', [common_module_1.default.name])
	    .config(statistics_routes_1.default)
	    .component('statistics', statistics_component_1.StatisticsComponent)
	    .component('statisticsForm', statisticsForm_component_1.StatisticsFormComponent)
	    .service('StatisticsService', statistics_service_ts_1.StatisticsService);


/***/ }),
/* 152 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.statistics', {
	        url: '/estadisticas',
	        template: '<statistics></statistics>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.verifyAuth('estadisticas');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var statistics_controller_1 = __webpack_require__(154);
	exports.StatisticsComponent = {
	    templateUrl: 'app/statistics/components/statistics/statistics.html',
	    controller: statistics_controller_1.default
	};


/***/ }),
/* 154 */
/***/ (function(module, exports) {

	"use strict";
	var StatisticsController = (function () {
	    function StatisticsController() {
	    }
	    return StatisticsController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StatisticsController;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var statisticsForm_controller_1 = __webpack_require__(156);
	exports.StatisticsFormComponent = {
	    templateUrl: 'app/statistics/components/statisticsForm/statisticsForm.html',
	    controller: statisticsForm_controller_1.default
	};


/***/ }),
/* 156 */
/***/ (function(module, exports) {

	"use strict";
	var StatisticsFormController = (function () {
	    /** @ngInject */
	    StatisticsFormController.$inject = ["StatisticsService", "permissions", "toastr", "$window", "User", "$translate", "$timeout", "$state"];
	    function StatisticsFormController(StatisticsService, permissions, toastr, $window, User, $translate, $timeout, $state) {
	        this.StatisticsService = StatisticsService;
	        this.permissions = permissions;
	        this.toastr = toastr;
	        this.$window = $window;
	        this.User = User;
	        this.$translate = $translate;
	        this.$timeout = $timeout;
	        this.$state = $state;
	        this.dateOptions = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: new Date(1900, 1, 1),
	            startingDay: 1
	        };
	        this.dateOptions2 = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: this.fechaInicio,
	            startingDay: 1
	        };
	        this.maxDaysConsolidado = 183;
	        this.maxDaysDetallado = 31;
	        this.tipoReporte = 'Consolidado';
	        this.tipoFormato = 'CSV';
	        this.maxDays = this.maxDaysConsolidado;
	        this.showCalendar1 = false;
	        this.showCalendar2 = false;
	        this.listaEntidades = [];
	        this.mensajeError = '';
	        this.disableTenantsConsolidado = false;
	        this.disableTenantsDetallado = false;
	    }
	    StatisticsFormController.prototype.cambiarTipoReporte = function (tipo) {
	        var _this = this;
	        this.tipoReporte = '';
	        var tim = 240;
	        this.$timeout(function () {
	            _this.tipoReporte = tipo;
	            if (_this.tipoReporte === 'Detallado') {
	                _this.tipoFormato = 'CSV';
	                _this.maxDays = _this.maxDaysDetallado;
	            }
	            else {
	                _this.maxDays = _this.maxDaysConsolidado;
	            }
	            _this.isTenantDisabled();
	        }, tim);
	    };
	    StatisticsFormController.prototype.cambiarTipoFormato = function (tipo) {
	        this.tipoFormato = tipo;
	    };
	    StatisticsFormController.prototype.toggleCalendar1 = function () {
	        this.showCalendar1 = !this.showCalendar1;
	        this.dateOptions.maxDate = this.fechaFin;
	        if (this.fechaFin !== undefined && this.fechaFin !== null) {
	            var fechaLim = new Date(this.fechaFin.getTime())
	                .setDate(this.fechaFin.getDate() - (this.maxDays - 1));
	            this.dateOptions.minDate = new Date(fechaLim);
	        }
	        else {
	            this.dateOptions.minDate = new Date(1900, 1, 1);
	            this.dateOptions.maxDate = new Date();
	        }
	    };
	    StatisticsFormController.prototype.toggleCalendar2 = function () {
	        this.showCalendar2 = !this.showCalendar2;
	        this.dateOptions2.minDate = this.fechaInicio;
	        if (this.fechaInicio !== undefined && this.fechaInicio !== null) {
	            var fechaLim = new Date(this.fechaInicio.getTime())
	                .setDate(this.fechaInicio.getDate() + (this.maxDays - 1));
	            var actual = new Date().getTime();
	            if (fechaLim < actual) {
	                this.dateOptions2.maxDate = new Date(fechaLim);
	            }
	            else {
	                this.dateOptions2.maxDate = new Date();
	            }
	        }
	        else {
	            this.dateOptions2.maxDate = new Date();
	            this.dateOptions2.minDate = this.fechaInicio;
	        }
	    };
	    StatisticsFormController.prototype.descargar = function () {
	        if (!this.fechaInicio || !this.fechaFin) {
	            this.toastr.error('El rango de fechas es obligatorio');
	        }
	        else {
	            this.mensajeError = '';
	            var diff = this.fechaFin.getTime() - this.fechaInicio.getTime();
	            if (diff <= (this.maxDays - 1) * 24 * 60 * 60 * 1000) {
	                switch (this.tipoReporte) {
	                    case 'Consolidado': {
	                        switch (this.tipoFormato) {
	                            case 'CSV': return this.descargarConsolidado();
	                            case 'PDF': return this.descargarConsolidadoPDF();
	                        }
	                    }
	                    case 'Detallado':
	                        return this.descargarDetallado();
	                }
	            }
	            else {
	                this.toastr.error('El rango de fechas no debe ser mayor a (' + this.maxDays + ') días');
	            }
	        }
	        return null;
	    };
	    StatisticsFormController.prototype.descargarConsolidado = function () {
	        var that = this;
	        return this.StatisticsService.consultarConsolidadoCSV(this.entidadSeleccionada, this.formatDate(this.fechaInicio), this.formatDate(this.fechaFin)).then(function (response) {
	            try {
	                var file = new Blob([response.data], { type: 'application/zip' });
	                var fileURL = (that.$window.URL || that.$window.webkitURL).createObjectURL(file);
	                var linkElem = $('#link');
	                var element = angular.element(linkElem);
	                var nombre = response.headers('Content-Disposition');
	                var nombreFormato = that.formatFileName(nombre);
	                element.attr({
	                    href: fileURL,
	                    target: '_self',
	                    download: nombreFormato
	                })[0].click();
	            }
	            catch (exception) {
	                if (exception.status === 401) {
	                    that.$state.go('login');
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                }
	                else if (exception.status === 403) {
	                    that.$state.go('login');
	                    that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                }
	                that.toastr.error('Error al descargar el reporte: ' + exception.data.message);
	            }
	            /*console.log("el response es: " + JSON.stringify(response.headers('fileName')));
	              that.$window.open('data:attachment/csv;charset=utf-8,' + encodeURI(response.data),  'csv',);*/
	        }, function (error) {
	            if (error.status === 404) {
	                that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	            }
	            else if (error.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (error.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                that.toastr.error('Error al descargar el reporte');
	            }
	        });
	    };
	    StatisticsFormController.prototype.descargarConsolidadoPDF = function () {
	        var that = this;
	        return this.StatisticsService.consultarConsolidadoPDF(this.entidadSeleccionada, this.formatDate(this.fechaInicio), this.formatDate(this.fechaFin)).then(function (response) {
	            if (response.status === 404) {
	                that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	            }
	            else if (response.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (response.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                that.$window.open(response);
	            }
	        }, function (error) {
	            if (error.status === 404) {
	                that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	            }
	            else if (error.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (error.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	        });
	    };
	    StatisticsFormController.prototype.descargarDetallado = function () {
	        var that = this;
	        return this.StatisticsService.consultarDetallado(this.entidadSeleccionada, this.formatDate(this.fechaInicio), this.formatDate(this.fechaFin)).then(function (response) {
	            try {
	                var file = new Blob([response.data], { type: 'application/zip' });
	                var fileURL = (that.$window.URL || that.$window.webkitURL).createObjectURL(file);
	                var linkElem = $('#link');
	                var element = angular.element(linkElem);
	                var nombre = response.headers('Content-Disposition');
	                var nombreFormato = that.formatFileName(nombre);
	                element.attr({
	                    href: fileURL,
	                    target: '_self',
	                    download: nombreFormato
	                })[0].click();
	            }
	            catch (exception) {
	                if (exception.status === 401) {
	                    that.$state.go('login');
	                }
	                that.toastr.error('Error al descargar el reporte.');
	            }
	        }, function (error) {
	            if (error.status === 404) {
	                that.toastr.warning(that.$translate.instant('messages.noInfoPILA'));
	            }
	            else if (error.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (error.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                that.toastr.error('Error al descargar el reporte.');
	            }
	        });
	    };
	    StatisticsFormController.prototype.formatDate = function (inDate) {
	        return inDate.toISOString().split("T")[0];
	    };
	    StatisticsFormController.prototype.formatFileName = function (name) {
	        var lista = name.split(';');
	        var cont = lista[1];
	        cont = cont.replace(' filename=\"', '');
	        cont = cont.substring(0, cont.length - 1);
	        return cont;
	    };
	    StatisticsFormController.prototype.isTenantDisabled = function () {
	        if (this.tipoReporte === 'Consolidado') {
	            if (!this.permisoConsolidado) {
	                this.disableTenantsConsolidado = true;
	                this.entidadSeleccionada = 'Todas';
	            }
	            else if (!this.permisoConsolidadoACH) {
	                this.disableTenantsConsolidado = true;
	                this.entidadSeleccionada = this.User.current.tenant;
	            }
	            else {
	                this.disableTenantsConsolidado = false;
	            }
	        }
	        else if (this.tipoReporte === 'Detallado') {
	            if (!this.permisoDetallado) {
	                this.disableTenantsDetallado = true;
	                this.entidadSeleccionada = 'Todas';
	            }
	            else if (!this.permisoDetalladoACH) {
	                this.disableTenantsDetallado = true;
	                this.entidadSeleccionada = this.User.current.tenant;
	            }
	            else {
	                this.disableTenantsDetallado = false;
	            }
	        }
	    };
	    StatisticsFormController.prototype.$onInit = function () {
	        this.permisoConsolidado = this.permissions.havepermissions(this.User.current.permissions, '*:estadisticas.consolidado.generar');
	        this.permisoConsolidadoACH = this.permissions.havepermissions(this.User.current.permissions, 'ach:estadisticas.consolidado-ach.generar');
	        this.permisoDetallado = this.permissions.havepermissions(this.User.current.permissions, '*:estadisticas.detallado.generar');
	        this.permisoDetalladoACH = this.permissions.havepermissions(this.User.current.permissions, 'ach:estadisticas.detallado-ach.generar');
	        var that = this;
	        this.StatisticsService.consultarEntidades().then(function (response) {
	            if (response.status === 503) {
	                that.toastr.error('Servicio no disponible: Estadísticas');
	            }
	            else {
	                response = response.sort(function (a, b) {
	                    var nombreA = a.nombre.toUpperCase();
	                    var nombreB = b.nombre.toUpperCase();
	                    if (nombreA < nombreB) {
	                        return -1;
	                    }
	                    if (nombreA > nombreB) {
	                        return 1;
	                    }
	                    return 0;
	                });
	                that.listaEntidades = that.listaEntidades.concat(response);
	            }
	        }, function (error) {
	            that.toastr.error('Error al cargar las entidades.');
	        });
	        if (this.permisoConsolidado || this.permisoConsolidadoACH) {
	            this.tipoReporte = 'Consolidado';
	        }
	        else {
	            this.tipoReporte = 'Detallado';
	        }
	        if (!this.permisoDetalladoACH && !this.permisoConsolidadoACH) {
	            this.entidadSeleccionada = this.User.current.tenant;
	        }
	        else {
	            var todas = {
	                nombre: 'Todas',
	                nit: 'Todas',
	                codigo: 'Todas'
	            };
	            this.entidadSeleccionada = todas.nit;
	        }
	        this.listaEntidades.push(todas);
	        this.isTenantDisabled();
	    };
	    return StatisticsFormController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StatisticsFormController;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

	"use strict";
	var StatisticsService = (function () {
	    /** @ngInject */
	    StatisticsService.$inject = ["Api"];
	    function StatisticsService(Api) {
	        this.Api = Api;
	    }
	    StatisticsService.prototype.consultarEntidades = function () {
	        var that = this;
	        return this.Api.get('/estadisticas/entidades', '', 'application/json').then(function (response) {
	            var jsonData = JSON.parse(JSON.stringify(response)).data;
	            console.log(jsonData);
	            var entidades = [];
	            for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
	                var entidadActual = jsonData_1[_i];
	                var entidadResp = entidadActual;
	                entidades.push(entidadResp);
	            }
	            that.entidades = entidades;
	            return that.entidades;
	        }, function (error) {
	            return error;
	        });
	    };
	    StatisticsService.prototype.consultarConsolidadoCSV = function (entidad, fechaInicio, fechaFin) {
	        var entidadParam = '';
	        if (entidad !== 'Todas' && entidad) {
	            entidadParam = '/' + entidad;
	        }
	        var params = {
	            fechaInicio: fechaInicio,
	            fechaFin: fechaFin
	        };
	        return this.Api.get2('/estadisticas/tarifaciones' + entidadParam, params, 'text/csv', true, false, 'arraybuffer');
	    };
	    StatisticsService.prototype.consultarConsolidadoPDF = function (entidad, fechaInicio, fechaFin) {
	        var entidadParam = '';
	        if (entidad !== 'Todas' && entidad) {
	            entidadParam = '/' + entidad;
	        }
	        var params = {
	            fechaInicio: fechaInicio,
	            fechaFin: fechaFin
	        };
	        return this.Api.get2('/estadisticas/tarifaciones' + entidadParam, params, 'application/pdf', true, false, 'arraybuffer').then(function (response) {
	            var file = new Blob([response.data], { type: 'application/pdf' });
	            var fileURL = URL.createObjectURL(file);
	            return fileURL;
	        }, function (error) {
	            return error;
	        });
	    };
	    StatisticsService.prototype.consultarDetallado = function (entidad, fechaInicio, fechaFin) {
	        var entidadParam = '';
	        if (entidad !== 'Todas' && entidad) {
	            entidadParam = '/' + entidad;
	        }
	        var params = {
	            fechaInicio: fechaInicio,
	            fechaFin: fechaFin
	        };
	        return this.Api.get('/estadisticas/historicos' + entidadParam, params, 'text/csv', true, false, 'arraybuffer');
	    };
	    return StatisticsService;
	}());
	exports.StatisticsService = StatisticsService;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var common_module_1 = __webpack_require__(2);
	var audit_routes_1 = __webpack_require__(159);
	var audit_component_1 = __webpack_require__(160);
	var auditForm_component_1 = __webpack_require__(162);
	var audit_service_1 = __webpack_require__(164);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.auditoria', [common_module_1.default.name])
	    .config(audit_routes_1.default)
	    .component('audit', audit_component_1.AuditComponent)
	    .component('auditForm', auditForm_component_1.AuditFormComponent)
	    .service('AuditService', audit_service_1.AuditService);


/***/ }),
/* 159 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.audit', {
	        url: '/auditoria',
	        template: '<audit></audit>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('auditoria.reporte-auditoria');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var audit_controller_1 = __webpack_require__(161);
	exports.AuditComponent = {
	    templateUrl: 'app/audit/components/audit/audit.html',
	    controller: audit_controller_1.default
	};


/***/ }),
/* 161 */
/***/ (function(module, exports) {

	"use strict";
	var AuditController = (function () {
	    function AuditController() {
	    }
	    return AuditController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AuditController;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var auditForm_controller_1 = __webpack_require__(163);
	exports.AuditFormComponent = {
	    templateUrl: 'app/audit/components/auditForm/auditForm.html',
	    controller: auditForm_controller_1.default
	};


/***/ }),
/* 163 */
/***/ (function(module, exports) {

	"use strict";
	var AuditFormController = (function () {
	    /** @ngInject */
	    AuditFormController.$inject = ["AuditService", "toastr", "$window", "$translate", "$state"];
	    function AuditFormController(AuditService, toastr, $window, $translate, $state) {
	        this.AuditService = AuditService;
	        this.toastr = toastr;
	        this.$window = $window;
	        this.$translate = $translate;
	        this.$state = $state;
	        this.restriccionDias = 1000 * 60 * 60 * 24 * 30;
	        this.dateOptions = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: new Date(1900, 1, 1),
	            startingDay: 1
	        };
	        this.dateOptions2 = {
	            dateDisabled: false,
	            formatYear: 'yyyy',
	            maxDate: new Date(),
	            minDate: this.fechaInicio,
	            startingDay: 1
	        };
	        this.showCalendar1 = false;
	        this.showCalendar2 = false;
	        /*this.listaComponentes = [];
	        this.listaObjetos = [];
	        this.listaAcciones = [];*/
	    }
	    AuditFormController.prototype.$onInit = function () {
	        //this.listaComponentes = this.AuditService.consultarComponentes();
	        this.listaComponentesBack = this.AuditService.darComponentes();
	    };
	    AuditFormController.prototype.cargarObjetos = function () {
	        var _this = this;
	        if (this.componenteSeleccionado) {
	            //this.listaObjetos = this.AuditService.consultarObjetosLocal(this.componenteSeleccionado);
	            this.listaComponentesBack.map(function (x) {
	                if (x.id === _this.componenteSeleccionado) {
	                    _this.listaObjetosBack = x.objetos;
	                }
	            });
	        }
	        else {
	            this.listaObjetosBack = [];
	            this.listaAccionesBack = [];
	        }
	        this.objetoSeleccionado = '';
	        this.accionSeleccionada = '';
	    };
	    AuditFormController.prototype.cargarAcciones = function () {
	        var _this = this;
	        if (this.objetoSeleccionado) {
	            //this.listaAcciones = this.AuditService.consultarAcciones(this.objetoSeleccionado);
	            this.listaObjetosBack.map(function (x) {
	                if (x.id === _this.objetoSeleccionado) {
	                    _this.listaAccionesBack = x.acciones;
	                }
	            });
	        }
	        else {
	            this.listaAccionesBack = [];
	        }
	        this.accionSeleccionada = '';
	    };
	    AuditFormController.prototype.toggleCalendar1 = function () {
	        this.showCalendar1 = !this.showCalendar1;
	        if (this.fechaFin !== undefined && this.fechaFin !== null) {
	            var fechaLim = this.fechaFin.getTime() - this.restriccionDias;
	            this.dateOptions.minDate = new Date(fechaLim);
	            this.dateOptions.maxDate = this.fechaFin;
	        }
	        else {
	            this.dateOptions.minDate = new Date(1900, 1, 1);
	            this.dateOptions.maxDate = new Date();
	        }
	    };
	    AuditFormController.prototype.toggleCalendar2 = function () {
	        this.showCalendar2 = !this.showCalendar2;
	        if (this.fechaInicio !== undefined && this.fechaInicio !== null) {
	            var fechaLim = this.fechaInicio.getTime() + this.restriccionDias;
	            var actual = new Date().getTime();
	            if (fechaLim < actual) {
	                this.dateOptions2.maxDate = new Date(fechaLim);
	            }
	            else {
	                this.dateOptions2.maxDate = new Date();
	            }
	            this.dateOptions2.minDate = this.fechaInicio;
	        }
	        else {
	            this.dateOptions2.maxDate = new Date();
	            this.dateOptions2.minDate = this.fechaInicio;
	        }
	    };
	    AuditFormController.prototype.formatDate = function (inDate) {
	        var entrada = new Date(inDate);
	        var fecha = '';
	        if (entrada.getDate() < 10) {
	            fecha = '0' + entrada.getDate();
	        }
	        else {
	            fecha = '' + entrada.getDate();
	        }
	        return '' + entrada.getFullYear() + '-' + (entrada.getMonth() + 1) + '-' + fecha;
	    };
	    AuditFormController.prototype.formatFileName = function (name) {
	        var lista = name.split(';');
	        var cont = lista[1];
	        cont = cont.replace(' filename=\"', '');
	        cont = cont.substring(0, cont.length - 1);
	        return cont;
	    };
	    AuditFormController.prototype.descargar = function () {
	        var params = {
	            componente: this.componenteSeleccionado,
	        };
	        if (this.objetoSeleccionado) {
	            params.objeto = this.objetoSeleccionado;
	        }
	        if (this.accionSeleccionada) {
	            params.accion = this.accionSeleccionada;
	        }
	        if (this.fechaInicio && this.fechaFin) {
	            params.rangoFechaInicial = this.formatDate(this.fechaInicio);
	            params.rangoFechaFin = this.formatDate(this.fechaFin);
	        }
	        if (this.usuario) {
	            params.usuario = this.usuario;
	        }
	        if (this.ipOrigen) {
	            params.ip = this.ipOrigen;
	        }
	        var that = this;
	        return this.AuditService.consultaAuditoria(params).then(function (response) {
	            try {
	                var file = new Blob([response.data], { type: 'application/octet-stream' });
	                var fileURL = (that.$window.URL || that.$window.webkitURL).createObjectURL(file);
	                var linkElem = $('#link');
	                var element = angular.element(linkElem);
	                $.get(fileURL, function (data) {
	                    var sp = data.split('\n');
	                    if (sp.length > 1) {
	                        element.attr({
	                            href: fileURL,
	                            target: '_self',
	                            download: response.headers('fileName')
	                        })[0].click();
	                    }
	                    else {
	                        that.toastr.warning(that.$translate.instant('messages.noInfoFilters'));
	                    }
	                });
	            }
	            catch (exception) {
	                that.toastr.error('Error al descargar el reporte: ' + exception);
	            }
	        }, function (error) {
	            if (error.status === 404) {
	                that.toastr.warning(error.data.message);
	            }
	            else if (error.status === 401) {
	                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                that.$state.go('login');
	            }
	            else if (error.status === 403) {
	                that.toastr.error(that.$translate.instant('messages.error.forbidden'));
	                that.$state.go('login');
	            }
	            else {
	                that.toastr.error('Error al descargar el reporte');
	            }
	        });
	    };
	    return AuditFormController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AuditFormController;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

	"use strict";
	var AuditService = (function () {
	    /** @ngInject */
	    AuditService.$inject = ["Api"];
	    function AuditService(Api) {
	        this.Api = Api;
	        this.componentes = [];
	        this.componentesBack = [];
	        this.objetos = [];
	        this.acciones = [];
	        this.poblarComponentesLocal();
	        this.poblarObjetosLocal();
	        this.poblarAcciones();
	        this.poblarComponentes();
	    }
	    AuditService.prototype.darComponentes = function () {
	        return this.componentesBack;
	    };
	    AuditService.prototype.poblarComponentesLocal = function () {
	        var admin = {
	            id: 'Administracion',
	            nombre: 'Administración'
	        };
	        var monitoreo = {
	            id: 'Monitoreo',
	            nombre: 'Monitoreo'
	        };
	        var consultas = {
	            id: 'Consultas',
	            nombre: 'Consultas'
	        };
	        var estadisticas = {
	            id: 'Estadisticas',
	            nombre: 'Estadísticas'
	        };
	        var migracion = {
	            id: 'Migracion',
	            nombre: 'Migración'
	        };
	        var auditoria = {
	            id: 'Auditoria',
	            nombre: 'Auditoría'
	        };
	        this.componentes.push(admin);
	        this.componentes.push(monitoreo);
	        this.componentes.push(consultas);
	        this.componentes.push(estadisticas);
	        this.componentes.push(migracion);
	        this.componentes.push(auditoria);
	    };
	    AuditService.prototype.poblarObjetosLocal = function () {
	        var usuario = {
	            id: 'auditUserObject',
	            nombre: 'Usuarios',
	            componenteId: 'auditAdministrationComponent'
	        };
	        var entidad = {
	            id: 'auditTenantObject',
	            nombre: 'Entidad',
	            componenteId: 'auditAdministrationComponent'
	        };
	        var roles = {
	            id: 'auditRoleObject',
	            nombre: 'Roles',
	            componenteId: 'auditAdministrationComponent'
	        };
	        var contrasena = {
	            id: 'auditPasswordObject',
	            nombre: 'Contraseña',
	            componenteId: 'auditAdministrationComponent'
	        };
	        var planillas = {
	            id: 'auditPayrollObject',
	            nombre: 'Planillas',
	            componenteId: 'auditMonitoringComponent'
	        };
	        var estadisticas = {
	            id: 'auditStatisticsObject',
	            nombre: 'Estadísticas',
	            componenteId: 'auditStatisticsComponent'
	        };
	        var consultas = {
	            id: 'auditQueryObject',
	            nombre: 'Consultas',
	            componenteId: 'auditQueriesComponent'
	        };
	        var migracion = {
	            id: 'auditMigrationObject',
	            nombre: 'Migración',
	            componenteId: 'auditMigrationComponent'
	        };
	        var auditoria = {
	            id: 'auditObject',
	            nombre: 'Auditoría',
	            componenteId: 'auditComponent'
	        };
	        this.objetos.push(usuario);
	        this.objetos.push(entidad);
	        this.objetos.push(roles);
	        this.objetos.push(contrasena);
	        this.objetos.push(planillas);
	        this.objetos.push(consultas);
	        this.objetos.push(estadisticas);
	        this.objetos.push(migracion);
	        this.objetos.push(auditoria);
	    };
	    AuditService.prototype.corregirSimbolos = function (desc) {
	        desc = desc.replace('&aacute;', 'á');
	        desc = desc.replace('&eacute;', 'é');
	        desc = desc.replace('&iacute;', 'í');
	        desc = desc.replace('&oacute;', 'ó');
	        desc = desc.replace('&uacute;', 'ú');
	        desc = desc.replace('&ntilde;', 'ñ');
	        desc = desc.replace('&Aacute;', 'Á');
	        desc = desc.replace('&Eacute;', 'É');
	        desc = desc.replace('&Iacute;', 'Í');
	        desc = desc.replace('&Oacute;', 'Ó');
	        desc = desc.replace('&Uacute;', 'Ú');
	        desc = desc.replace('&Ntilde;', 'Ñ');
	        return desc;
	    };
	    AuditService.prototype.corregirComponente = function (comp) {
	        var _this = this;
	        comp.descripcion = this.corregirSimbolos(comp.descripcion);
	        comp.objetos.forEach(function (obj) {
	            obj.descripcion = _this.corregirSimbolos(obj.descripcion);
	            obj.acciones.forEach(function (acc) {
	                acc.descripcion = _this.corregirSimbolos(acc.descripcion);
	            });
	        });
	        return comp;
	    };
	    AuditService.prototype.poblarComponentes = function () {
	        var admin = 'Administracion';
	        var monitoreo = 'Monitoreo';
	        var consultas = 'Consultas';
	        var estadisticas = 'Estadisticas';
	        var migracion = 'Migracion';
	        var auditoria = 'Auditoria';
	        var that = this;
	        this.Api.get('/auditoria/componente/' + admin, '', 'application/json', true, false)
	            .then(function (response) {
	            var comp = response.data;
	            comp = that.corregirComponente(comp);
	            that.componentesBack.push(comp);
	        }, function (error) {
	            console.log(error);
	        });
	        this.Api.get('/auditoria/componente/' + monitoreo, '', 'application/json', true, false)
	            .then(function (response) {
	            var comp = response.data;
	            comp = that.corregirComponente(comp);
	            that.componentesBack.push(comp);
	        }, function (error) {
	            console.log(error);
	        });
	        this.Api.get('/auditoria/componente/' + consultas, '', 'application/json', true, false)
	            .then(function (response) {
	            var comp = response.data;
	            comp = that.corregirComponente(comp);
	            that.componentesBack.push(comp);
	        }, function (error) {
	            console.log(error);
	        });
	        this.Api.get('/auditoria/componente/' + estadisticas, '', 'application/json', true, false)
	            .then(function (response) {
	            var comp = response.data;
	            comp = that.corregirComponente(comp);
	            that.componentesBack.push(comp);
	        }, function (error) {
	            console.log(error);
	        });
	        this.Api.get('/auditoria/componente/' + migracion, '', 'application/json', true, false)
	            .then(function (response) {
	            var comp = response.data;
	            comp = that.corregirComponente(comp);
	            that.componentesBack.push(comp);
	        }, function (error) {
	            console.log(error);
	        });
	        this.Api.get('/auditoria/componente/' + auditoria, '', 'application/json', true, false)
	            .then(function (response) {
	            var comp = response.data;
	            comp = that.corregirComponente(comp);
	            that.componentesBack.push(comp);
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    AuditService.prototype.poblarAcciones = function () {
	        var crearUsuario = {
	            id: 'createUserAuditAction',
	            nombre: 'Crear Usuario',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditUserObject'
	        };
	        var editarUsuario = {
	            id: 'editUserAuditAction',
	            nombre: 'Editar Usuario',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditUserObject'
	        };
	        var login = {
	            id: 'logInUserAuditAction',
	            nombre: 'Login',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditUserObject'
	        };
	        var logout = {
	            id: 'logOutUserAuditAction',
	            nombre: 'Logout',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditUserObject'
	        };
	        var inactivarUsuario = {
	            id: 'disableUserAuditAction',
	            nombre: 'Inactivar Usuario',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditUserObject'
	        };
	        var activarUsuario = {
	            id: 'enableUserAuditAction',
	            nombre: 'Activar Usuario',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditUserObject'
	        };
	        var bloquearUsuario = {
	            id: 'blockUserAuditAction',
	            nombre: 'Bloquear Usuario',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditUserObject'
	        };
	        this.acciones.push(crearUsuario);
	        this.acciones.push(editarUsuario);
	        this.acciones.push(login);
	        this.acciones.push(logout);
	        this.acciones.push(inactivarUsuario);
	        this.acciones.push(activarUsuario);
	        this.acciones.push(bloquearUsuario);
	        var crearEntidad = {
	            id: 'createTenantAuditAction',
	            nombre: 'Crear Entidad',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditTenantObject'
	        };
	        var editarEntidad = {
	            id: 'editTenantAuditAction',
	            nombre: 'Editar Entidad',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditTenantObject'
	        };
	        var inactivarEntidad = {
	            id: 'disableTenantAuditAction',
	            nombre: 'Inactivar Entidad',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditTenantObject'
	        };
	        var activarEntidad = {
	            id: 'enableTenantAuditAction',
	            nombre: 'Activar Entidad',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditTenantObject'
	        };
	        this.acciones.push(crearEntidad);
	        this.acciones.push(editarEntidad);
	        this.acciones.push(inactivarEntidad);
	        this.acciones.push(activarEntidad);
	        var crearRol = {
	            id: 'createRoleAuditAction',
	            nombre: 'Crear Rol',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditRoleObject'
	        };
	        var editarRol = {
	            id: 'editRoleAuditAction',
	            nombre: 'Editar Rol',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditRoleObject'
	        };
	        var eliminarRol = {
	            id: 'deleteRoleAuditAction',
	            nombre: 'Eliminar Rol',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditRoleObject'
	        };
	        this.acciones.push(crearRol);
	        this.acciones.push(editarRol);
	        this.acciones.push(eliminarRol);
	        var establecerContrasena = {
	            id: 'setPasswordAuditAction',
	            nombre: 'Establecer Contraseña',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditPasswordObject'
	        };
	        var notificacionContrasena = {
	            id: 'blockUserAuditAction',
	            nombre: 'Notificación Establecer Contraseña',
	            componenteId: 'auditAdministrationComponent',
	            objetoId: 'auditPasswordObject'
	        };
	        this.acciones.push(establecerContrasena);
	        this.acciones.push(notificacionContrasena);
	        var consultarPlanillas = {
	            id: 'payrollQueryAuditAction',
	            nombre: 'Consultar Planillas',
	            componenteId: 'auditMonitoringComponent',
	            objetoId: 'auditPayrollObject'
	        };
	        var revertirPlanilla = {
	            id: 'payrollReversionAuditAction',
	            nombre: 'Revertir Planilla',
	            componenteId: 'auditMonitoringComponent',
	            objetoId: 'auditPayrollObject'
	        };
	        this.acciones.push(consultarPlanillas);
	        this.acciones.push(revertirPlanilla);
	        var iniciarMigracion = {
	            id: 'migrationStartAction',
	            nombre: 'Iniciar Migración',
	            componenteId: 'auditMigrationComponent',
	            objetoId: 'auditMigrationObject'
	        };
	        var detenerMigracion = {
	            id: 'migrationStopAction',
	            nombre: 'Detener Migración',
	            componenteId: 'auditMigrationComponent',
	            objetoId: 'auditMigrationObject'
	        };
	        this.acciones.push(iniciarMigracion);
	        this.acciones.push(detenerMigracion);
	        var consultaIndividual = {
	            id: 'executeIndividualQueryAuditAction',
	            nombre: 'Realizar Consulta Individual',
	            componenteId: 'auditQueriesComponent',
	            objetoId: 'auditQueryObject'
	        };
	        var consultaMasiva = {
	            id: 'executeMassiveQueryAuditAction',
	            nombre: 'Realizar Consulta Masiva',
	            componenteId: 'auditQueriesComponent',
	            objetoId: 'auditQueryObject'
	        };
	        var consultaMasivaDescarga = {
	            id: 'downloadMassiveQueryAuditAction',
	            nombre: 'Descargar Consulta Masiva',
	            componenteId: 'auditQueriesComponent',
	            objetoId: 'auditQueryObject'
	        };
	        this.acciones.push(consultaIndividual);
	        this.acciones.push(consultaMasiva);
	        this.acciones.push(consultaMasivaDescarga);
	        var estadisticasDetallado = {
	            id: 'generateStatisticsDetailReportAction',
	            nombre: 'Generar Estadísticas Detallado',
	            componenteId: 'auditStatisticsComponent',
	            objetoId: 'auditStatisticsObject'
	        };
	        var estadisticasConsolidado = {
	            id: 'generateStatisticsConsolidateReportAction',
	            nombre: 'Generar Estadísticas Consolidado',
	            componenteId: 'auditStatisticsComponent',
	            objetoId: 'auditStatisticsObject'
	        };
	        this.acciones.push(estadisticasDetallado);
	        this.acciones.push(estadisticasConsolidado);
	        var auditoria = {
	            id: 'downloadAuditReportAction',
	            nombre: 'Generar Reporte Auditoría',
	            componenteId: 'auditComponent',
	            objetoId: 'auditObject'
	        };
	        this.acciones.push(auditoria);
	    };
	    AuditService.prototype.consultarComponentes = function () {
	        return this.componentes;
	    };
	    AuditService.prototype.consultarObjetosLocal = function (componente) {
	        return this.objetos.filter(function (objeto) { return objeto.componenteId === componente; });
	    };
	    AuditService.prototype.consultarAcciones = function (objeto) {
	        return this.acciones.filter(function (accion) { return accion.objetoId === objeto; });
	    };
	    AuditService.prototype.consultaAuditoria = function (params) {
	        return this.Api.get('/auditoria/logs', params, 'text/csv', true, false, 'arraybuffer');
	    };
	    return AuditService;
	}());
	exports.AuditService = AuditService;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var common_module_1 = __webpack_require__(2);
	var manipulation_routes_1 = __webpack_require__(166);
	var principal_component_1 = __webpack_require__(167);
	var manipulation_service_1 = __webpack_require__(169);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('app.manipulation', [common_module_1.default.name])
	    .config(manipulation_routes_1.default)
	    .component('manipulation', principal_component_1.PrincipalComponent)
	    .service('ManipulationService', manipulation_service_1.ManipulationService);


/***/ }),
/* 166 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('layout.manipulation', {
	        url: '/usodatos',
	        template: '<manipulation></manipulation>',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.ensureAuthIs('autorizacion-datos-personales');
	            }]
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var principal_controller_1 = __webpack_require__(168);
	exports.PrincipalComponent = {
	    templateUrl: 'app/manipulation/components/principal/principal.html',
	    controller: principal_controller_1.default
	};


/***/ }),
/* 168 */
/***/ (function(module, exports) {

	"use strict";
	var PrinicipalController = (function () {
	    /** @ngInject */
	    PrinicipalController.$inject = ["environment", "ConsultingService", "ManipulationService", "$window", "toastr", "$translate", "permissions", "User", "$state"];
	    function PrinicipalController(environment, ConsultingService, ManipulationService, $window, toastr, $translate, permissions, User, $state) {
	        this.environment = environment;
	        this.ConsultingService = ConsultingService;
	        this.ManipulationService = ManipulationService;
	        this.$window = $window;
	        this.toastr = toastr;
	        this.$translate = $translate;
	        this.permissions = permissions;
	        this.User = User;
	        this.$state = $state;
	        this.tipoDocumentoNatural = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'Carné Diplomático', value: 'CD' },
	            { name: 'Tarjeta de Identidad', value: 'TI' },
	            { name: 'Registro Civil', value: 'RC' },
	            { name: 'Pasaporte', value: 'PA' },
	            { name: 'Salvo Conducto', value: 'SC' },
	            { name: 'Permiso Especial', value: 'PE' }
	        ];
	        this.tipoDocumentoJuridica = [
	            { name: 'Cédula de Ciudadanía', value: 'CC' },
	            { name: 'Cédula de Extranjería', value: 'CE' },
	            { name: 'NIT', value: 'NI' },
	            { name: 'Salvo Conducto', value: 'SC' },
	            { name: 'Permiso Especial', value: 'PE' }
	        ];
	        this.tipoIdentificacion = 'CC';
	        this.identificacionAlfanumerica = false;
	        this.porDefecto = true;
	        this.tituloLabel = 'CLIENTE A CONSULTAR';
	        this.documentos = this.tipoDocumentoNatural;
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.consultaImpar = true;
	        this.tipoAccion = 'Excluir';
	        this.permisoDatosPersonales = this.permissions.havepermissions(this.User.current.permissions, 'ach:autorizacion-datos-personales.gestionar');
	        this.verificarSeleccion();
	    }
	    PrinicipalController.prototype.setConsulta = function (tipo) {
	        this.tipoBusqueda = tipo;
	        this.tituloLabel = (tipo === 'Individual' ? 'CLIENTE A CONSULTAR' : 'DATOS ARCHIVO');
	    };
	    PrinicipalController.prototype.setAccion = function (tipo) {
	        this.tipoAccion = tipo;
	    };
	    PrinicipalController.prototype.cambiarTipoPersona = function (tipo) {
	        this.tipoPersona = tipo;
	        if (this.tipoPersona === 'Natural') {
	            this.documentos = this.tipoDocumentoNatural;
	        }
	        else {
	            this.documentos = this.tipoDocumentoJuridica;
	        }
	        this.tipoIdentificacion = 'CC';
	    };
	    PrinicipalController.prototype.sendConsulta = function () {
	        if (this.tipoBusqueda === 'Individual') {
	            this.consultarIndividual();
	        }
	        else {
	            this.consultarMasiva();
	        }
	    };
	    PrinicipalController.prototype.consultarMasiva = function () {
	        this.file = this.ConsultingService.getFileMasivas();
	        this.fileUpload = this.ConsultingService.getArchivo();
	        if (!this.file) {
	            if (this.nombreArchivo !== 'Selecciona un archivo') {
	                this.toastr.error(this.$translate.instant('El archivo para la consulta se encuentra vacío.'));
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor, seleccionar un archivo.'));
	            }
	            return false;
	        }
	        if (!this.verificarExtension()) {
	            this.toastr.error(this.$translate.instant('La extensión del archivo debe ser CSV.'));
	            return false;
	        }
	        var lines = this.file.split(/\r?\n|\r/);
	        var that = this;
	        if (lines.length >= 10 && lines.length <= 200) {
	            var body = {
	                nombreConsulta: this.nombreConsulta,
	                tipoPersona: this.tipoPersona === 'Natural' ? 'NATURAL' : 'JURIDICA',
	                entidad: this.User.current.tenant,
	                userId: this.User.current.email,
	                email: this.correoElectronico != undefined && this.correoElectronico != '' && this.correoElectronico != null ? this.correoElectronico : this.environment.correoUsoDatosPersonales
	            };
	            var fromData = new FormData();
	            var blob = new Blob([this.fileUpload], { type: "text/csv" });
	            fromData.append('file', blob);
	            if (this.nombreConsulta) {
	                if (this.tipoAccion === 'Excluir') {
	                    this.ManipulationService.excluirAutorizacionMasivo(body, fromData).then(function (response) {
	                        that.limpiarMasivas();
	                        if (!response.error) {
	                            that.porDefecto = false;
	                            that.toastr.success("" + response, { allowHtml: true });
	                        }
	                        else {
	                            if (response.data === 401) {
	                                that.toastr.error(that.$translate.instant(response.mensaje.message));
	                                that.$state.go('login');
	                            }
	                            else if (response.data === 403) {
	                                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                                that.$state.go('login');
	                            }
	                            else {
	                                that.toastr.error("" + response.mensaje, { allowHtml: true });
	                            }
	                        }
	                    }, function (error) {
	                        that.limpiarMasivas();
	                        that.toastr.error("" + error.mensaje, { allowHtml: true });
	                    });
	                }
	                else if (this.tipoAccion === 'Incluir') {
	                    this.ManipulationService.incluirAutorizacionMasivo(body, fromData).then(function (response) {
	                        that.limpiarMasivas();
	                        if (!response.error) {
	                            that.porDefecto = false;
	                            that.toastr.success("" + response, { allowHtml: true });
	                        }
	                        else {
	                            if (response.data === 401) {
	                                that.toastr.error(that.$translate.instant(response.mensaje.message));
	                                that.$state.go('login');
	                            }
	                            else if (response.data === 403) {
	                                that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                                that.$state.go('login');
	                            }
	                            else {
	                                that.toastr.error("" + response.mensaje, { allowHtml: true });
	                            }
	                        }
	                    }, function (error) {
	                        that.limpiarMasivas();
	                        that.toastr.error("" + error.mensaje, { allowHtml: true });
	                    });
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('Por favor ingrese un nombre para el cargue.'));
	            }
	        }
	        else {
	            that.limpiarMasivas();
	            this.toastr.error(this.$translate.instant('masivas.incorrectFileUsoDatos', { num: lines.length }));
	        }
	    };
	    PrinicipalController.prototype.consultarIndividual = function () {
	        if (this.validarNumeroIdentificacion()) {
	            if (this.validarAlfanumerico() && this.validarNumerico()) {
	                if (this.tipoAccion === 'Excluir') {
	                    this.servicioIndividualExcluir();
	                }
	                else if (this.tipoAccion === 'Incluir') {
	                    this.servicioIndividualIncluir();
	                }
	            }
	            else {
	                if (this.esAlfanumerico()) {
	                    this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                }
	                else if (this.esNumerico()) {
	                    this.toastr.error(this.$translate.instant('individuales.wrongIdType'));
	                }
	            }
	        }
	    };
	    PrinicipalController.prototype.servicioIndividualExcluir = function () {
	        var tipoPersonaSend = this.tipoPersona === 'Natural' ? 'NATURAL' : 'JURIDICA';
	        var correoSend = this.correoElectronico != undefined && this.correoElectronico != '' && this.correoElectronico != null ? this.correoElectronico : this.environment.correoUsoDatosPersonales;
	        var that = this;
	        this.ManipulationService.excluirAutorizacionIndividual(this.tipoIdentificacion, this.numeroIdentificacion, tipoPersonaSend, correoSend).then(function (response) {
	            if (!response.error) {
	                that.porDefecto = false;
	                that.toastr.success("" + response, { allowHtml: true });
	            }
	            else {
	                if (response.data === 401) {
	                    that.toastr.error(that.$translate.instant(response.mensaje.message));
	                    that.$state.go('login');
	                }
	                else if (response.data === 403) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	                else {
	                    that.toastr.error("" + response.mensaje, { allowHtml: true });
	                }
	            }
	        }, function (error) {
	            that.toastr.error("" + error.mensaje, { allowHtml: true });
	        });
	    };
	    PrinicipalController.prototype.servicioIndividualIncluir = function () {
	        var tipoPersonaSend = this.tipoPersona === 'Natural' ? 'NATURAL' : 'JURIDICA';
	        var correoSend = this.correoElectronico != undefined && this.correoElectronico != '' && this.correoElectronico != null ? this.correoElectronico : this.environment.correoUsoDatosPersonales;
	        var that = this;
	        this.ManipulationService.incluirAutorizacionIndividual(this.tipoIdentificacion, this.numeroIdentificacion, tipoPersonaSend, correoSend).then(function (response) {
	            if (!response.error) {
	                that.porDefecto = false;
	                that.toastr.success("" + response, { allowHtml: true });
	            }
	            else {
	                if (response.data === 401) {
	                    that.toastr.error(that.$translate.instant(response.mensaje.message));
	                    that.$state.go('login');
	                }
	                else if (response.data === 403) {
	                    that.toastr.error(that.$translate.instant('messages.error.unauthorized'));
	                    that.$state.go('login');
	                }
	                else {
	                    that.toastr.error("" + response.mensaje, { allowHtml: true });
	                }
	            }
	        }, function (error) {
	            // that.toastr.error(that.$translate.instant('messages.queryError') + ': ' + error);
	            that.toastr.error("" + error.mensaje, { allowHtml: true });
	        });
	    };
	    PrinicipalController.prototype.validarAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    PrinicipalController.prototype.validarNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            if (/^[0-9]+$/.test(this.numeroIdentificacion)) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    PrinicipalController.prototype.esNumerico = function () {
	        if (this.tipoIdentificacion === 'CC' || this.tipoIdentificacion === 'CE' || this.tipoIdentificacion === 'TI' || this.tipoIdentificacion === 'RC' || this.tipoIdentificacion === 'NI' || this.tipoIdentificacion === 'SC' || this.tipoIdentificacion === 'PE') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    PrinicipalController.prototype.esAlfanumerico = function () {
	        if (this.tipoIdentificacion === 'CD' || this.tipoIdentificacion === 'PA') {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    PrinicipalController.prototype.validarNumeroIdentificacion = function () {
	        if (this.numeroIdentificacion) {
	            if (this.numeroIdentificacion.length > 1) {
	                if (this.validarCaracteresEspeciales()) {
	                    return true;
	                }
	                else {
	                    this.toastr.error(this.$translate.instant('individuales.idSpecialChars'));
	                }
	            }
	            else {
	                this.toastr.error(this.$translate.instant('individuales.wrongId'));
	            }
	        }
	        else {
	        }
	        return false;
	    };
	    PrinicipalController.prototype.validarCaracteresEspeciales = function () {
	        if (/^[a-z0-9]+$/i.test(this.numeroIdentificacion)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    PrinicipalController.prototype.validarEmail = function () {
	        if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(this.correoElectronico)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    PrinicipalController.prototype.verificarExtension = function () {
	        if (this.nombreArchivo.length > 4) {
	            var ext = this.nombreArchivo.substring(this.nombreArchivo.length - 4, this.nombreArchivo.length);
	            if (ext === '.csv') {
	                return true;
	            }
	        }
	        return false;
	    };
	    PrinicipalController.prototype.verificarSize = function () {
	        if (this.fileUpload.size <= 31457280) {
	            return true;
	        }
	        return false;
	    };
	    PrinicipalController.prototype.limpiarMasivas = function () {
	        this.nombreArchivo = 'Selecciona un archivo';
	        this.ManipulationService.setFileMasivas('', '', '');
	        this.nombreConsulta = '';
	        this.periodoConsulta = undefined;
	        this.consultaImpar = !this.consultaImpar;
	        document.getElementById("file-1").setAttribute('value', '');
	    };
	    PrinicipalController.prototype.verificarSeleccion = function () {
	        if (this.permisoDatosPersonales) {
	            this.tipoBusqueda = 'Individual';
	            this.tipoPersona = 'Natural';
	        }
	        else {
	            this.toastr.error('No tiene los permisos necesarios para realizar consultas.');
	        }
	    };
	    return PrinicipalController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PrinicipalController;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

	"use strict";
	var ManipulationService = (function () {
	    /** @ngInject */
	    ManipulationService.$inject = ["Api", "rx", "$translate"];
	    function ManipulationService(Api, rx, $translate) {
	        this.Api = Api;
	        this.rx = rx;
	        this.$translate = $translate;
	        this.observableFileName = new this.rx.Subject();
	        this.massiveQueriesByUserGetObservable = new this.rx.Subject();
	        this.massiveListConsolidatedGetObservable = new this.rx.Subject();
	        this.downloadResultsZipObservable = new this.rx.Subject();
	    }
	    ManipulationService.prototype.consultarNaturalConsolidadoIndividual = function (tipoDocumento, numeroDocumento, periodo, ultimaPlanilla) {
	        var that = this;
	        var params = {
	            historico: periodo
	        };
	        if (tipoDocumento && numeroDocumento) {
	            this.naturalIndividualPromise = this.Api.get('/consultas/individuales/consolidada/naturales/' + tipoDocumento + numeroDocumento, params, 'application/pdf', false, false, 'arraybuffer')
	                .then(function (response) {
	                var file = new Blob([response.data], { type: 'application/pdf' });
	                var fileURL = URL.createObjectURL(file);
	                that.naturalRespuesta = {
	                    error: false,
	                    data: fileURL
	                };
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalIndividualPromise;
	    };
	    ManipulationService.prototype.excluirAutorizacionIndividual = function (tipoDocumento, numeroDocumento, tipoPersona, correo) {
	        var that = this;
	        var params = {
	            email: correo
	        };
	        if (tipoDocumento && numeroDocumento) {
	            this.naturalIndividualPromise = this.Api.post('/consultas/autorizacion-datos/individual/' + tipoDocumento + numeroDocumento + '/' + tipoPersona + '?email=' + correo, params, 'application/json', false)
	                .then(function (response) {
	                var jsonData = JSON.parse(JSON.stringify(response)).data;
	                that.naturalRespuesta = jsonData;
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status,
	                    mensaje: error.data
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalIndividualPromise;
	    };
	    ManipulationService.prototype.incluirAutorizacionIndividual = function (tipoDocumento, numeroDocumento, tipoPersona, correo) {
	        var that = this;
	        var params = {
	            email: correo
	        };
	        if (tipoDocumento && numeroDocumento) {
	            this.naturalIndividualPromise = this.Api.del('/consultas/autorizacion-datos/individual/' + tipoDocumento + numeroDocumento + '/' + tipoPersona + '?email=' + correo, false, false)
	                .then(function (response) {
	                var jsonData = JSON.parse(JSON.stringify(response)).data;
	                that.naturalRespuesta = jsonData;
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status,
	                    mensaje: error.data
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalIndividualPromise;
	    };
	    ManipulationService.prototype.consultarJuridicaIndividual = function (tipoDocumento, numeroDocumento, periodo, ultimaPlanilla) {
	        var that = this;
	        var params = {
	            historico: periodo,
	            ultimaPlanilla: ultimaPlanilla
	        };
	        if (tipoDocumento && numeroDocumento) {
	            this.juridicaIndividualPromise = this.Api.get('/consultas/individuales/personas/juridicas/' + tipoDocumento + numeroDocumento, params, 'application/pdf', false, false, 'arraybuffer')
	                .then(function (response) {
	                var file = new Blob([response.data], { type: 'application/pdf' });
	                var fileURL = URL.createObjectURL(file);
	                that.juridicaRespuesta = {
	                    error: false,
	                    data: fileURL
	                };
	                return that.juridicaRespuesta;
	            }, function (error) {
	                that.juridicaRespuesta = {
	                    error: true,
	                    data: error.status
	                };
	                return that.juridicaRespuesta;
	            });
	        }
	        return this.juridicaIndividualPromise;
	    };
	    ManipulationService.prototype.setFileMasivas = function (file, name, payload) {
	        this.fileData = file;
	        this.fileName = name;
	        this.fileMasivo = payload;
	        this.observableFileName.onNext(this.fileName);
	    };
	    ManipulationService.prototype.getFileMasivas = function () {
	        return this.fileData;
	    };
	    ManipulationService.prototype.getArchivo = function () {
	        return this.fileMasivo;
	    };
	    ManipulationService.prototype.getFileMasivasName = function () {
	        return this.fileName;
	    };
	    ManipulationService.prototype.excluirAutorizacionMasivo = function (body, payload) {
	        var that = this;
	        if (body) {
	            return this.naturalMasivaPromise = this.Api.post("/consultas/autorizacion-datos/masivo/" + body.tipoPersona + "?email=" + body.email, payload, undefined)
	                .then(function (response) {
	                var jsonData = JSON.parse(JSON.stringify(response)).data;
	                that.naturalRespuesta = jsonData;
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status,
	                    mensaje: error.data
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalMasivaPromise;
	    };
	    ManipulationService.prototype.incluirAutorizacionMasivo = function (body, payload) {
	        var that = this;
	        if (body) {
	            return this.naturalMasivaPromise = this.Api.del_auth("/consultas/autorizacion-datos/masivo/" + body.tipoPersona + "?email=" + body.email, payload, false)
	                .then(function (response) {
	                var jsonData = JSON.parse(JSON.stringify(response)).data;
	                that.naturalRespuesta = jsonData;
	                return that.naturalRespuesta;
	            }, function (error) {
	                that.naturalRespuesta = {
	                    error: true,
	                    data: error.status,
	                    mensaje: error.data
	                };
	                return that.naturalRespuesta;
	            });
	        }
	        return this.naturalMasivaPromise;
	    };
	    ManipulationService.prototype.consultaJuridicaMasiva = function (body, payload) {
	        if (body) {
	            return this.juridicaMasivaPromise = this.Api.post("/consultas/masivas/?nombreConsulta=" + body.nombreConsulta + "&historico=" + body.historico + "&tipo=" + body.tipo, payload, undefined);
	        }
	    };
	    return ManipulationService;
	}());
	exports.ManipulationService = ManipulationService;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	routes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "$logProvider", "$httpProvider"];
	function routes($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $httpProvider) {
	    $locationProvider.html5Mode(true);
	    $locationProvider.hashPrefix('!');
	    $logProvider.debugEnabled(true);
	    $stateProvider
	        .state('layout', {
	        abstract: true,
	        templateUrl: 'app/common/components/root/root.html',
	        resolve: {
	            auth: ["User", function (User) {
	                return User.verifyAuth('portal');
	            }]
	        }
	    });
	    $urlRouterProvider.otherwise('/');
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	translate.$inject = ["$translateProvider"];
	function translate($translateProvider) {
	    $translateProvider
	        .useSanitizeValueStrategy('sanitizeParameters')
	        .useStaticFilesLoader({
	        prefix: '/locales/',
	        suffix: '.json'
	    })
	        .preferredLanguage('es')
	        .fallbackLanguage('es')
	        .usePostCompiling(true);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = translate;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	forms.$inject = ["ngFabFormProvider"];
	function forms(ngFabFormProvider) {
	    ngFabFormProvider.extendConfig({
	        validationsTemplate: 'app/common/components/validations/validations.html',
	        preventInvalidSubmit: true,
	        preventDoubleSubmit: true,
	        preventDoubleSubmitTimeoutLength: 1000,
	        setFormDirtyOnSubmit: true,
	        scrollToAndFocusFirstErrorOnSubmit: true,
	        scrollAnimationTime: 500,
	        scrollOffset: -100,
	        disabledForms: true,
	        globalFabFormDisable: true,
	        setNovalidate: true,
	        setNamesByNgModel: true,
	        setAsteriskForRequiredLabel: false,
	        asteriskStr: '*',
	        validationMsgPrefix: 'validationMsg',
	        emailRegex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	        watchForFormCtrl: false,
	        formChangeEvent: 'NG_FAB_FORM_OPTIONS_CHANGED',
	        createMessageElTplFn: function (sanitizedKey, attr) {
	            return '<li ng-message="' + sanitizedKey + '">' + attr + '</li>';
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = forms;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

	"use strict";
	/** @ngInject */
	run.$inject = ["$log", "environment", "$http", "$cookies"];
	function run($log, environment, $http, $cookies) {
	    $log.debug("Application in " + environment.name + " mode");
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = run;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

	"use strict";
	var ApiCallInterceptor = (function () {
	    function ApiCallInterceptor($q, $injector) {
	        var _this = this;
	        this.$q = $q;
	        this.$injector = $injector;
	        // usar si queremos agregar algo por defecto en el request ejemplo  headers
	        /*request = (config:ng.IRequestConfig):ng.IRequestConfig => {
	          // console.info('Request:', config);
	          return config;
	        };
	      
	        // descomentar si queremos ver la respuesta de solicitudes http
	        response = <T>(
	          response: ng.IHttpPromiseCallbackArg<T>
	        ):ng.IPromise<T> => {
	          // modify response
	          return this.$q.when(response);
	        };*/
	        // intercetor all errors
	        this.responseError = function (responseError) {
	            console.log('response Error reported');
	            switch (responseError.status) {
	                case 401:
	                    console.log('401 Unauthorized');
	                    console.log(responseError.data.message);
	                    if (responseError.data.message === 'Su contraseña ha expirado por favor cambiela') {
	                        _this.$injector.get('$state').transitionTo('timeout');
	                    }
	                    if (responseError.data.message === 'El token ha expirado o es inválido') {
	                        _this.$injector.get('$state').transitionTo('login');
	                    }
	                    break;
	                case 403:
	                    // no permisos para usar este servicio
	                    console.log('403 error');
	                    console.log(responseError.data.message);
	                    // this.$injector.get('$state').transitionTo('login');
	                    break;
	                case 500:
	                    console.log('404 error');
	                    break;
	                case 503:
	                    console.log('503 forbidden');
	                    break;
	                case 404:
	                    console.log('404 not found');
	                    break;
	                default:
	                    console.log('ok');
	            }
	            return _this.$q.reject(responseError);
	        };
	    }
	    // @ngInject
	    ApiCallInterceptor.factory = function ($q, $injector) {
	        return new ApiCallInterceptor($q, $injector);
	    };
	    ApiCallInterceptor.factory.$inject = ["$q", "$injector"];
	    return ApiCallInterceptor;
	}());
	exports.ApiCallInterceptor = ApiCallInterceptor;


/***/ })
/******/ ]);
angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/admin/root.admin.html','<div class="content-body"><div class="titGen"><div class="volver" style="display:none;"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></div><h1>ADMINISTRACI\xD3N</h1></div><div class="container"><div class="adminUsu"><div ui-view=""></div></div></div></div>');
$templateCache.put('app/audit/root.audit.html','<div class="content-body"><div class="titGen"><div class="volver" style="display:none;"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></div><h1>AUDITOR\xCDA</h1></div><div class="container"><div class="adminUsu"><div ui-view=""></div></div></div></div>');
$templateCache.put('app/consulting/root.consulting.html','<nav class="navbar navbar-light"><div class="container"><ul class="nav navbar-nav pull-xs-right"><li class="nav-item"><a class="nav-link" ui-sref-active="active" ui-sref="layout.consulting.individuales">Individuales</a></li><li class="nav-item"><a class="nav-link" ui-sref-active="active" ui-sref="layout.consulting.masivas"><i class="ion-gear-a"></i>Masivas</a></li></ul></div></nav><div ui-view=""></div>');
$templateCache.put('app/manipulation/root.manipulation.html','<nav class="navbar navbar-light"><div class="container"><ul class="nav navbar-nav pull-xs-right"><li class="nav-item"><a class="nav-link" ui-sref-active="active" ui-sref="layout.manipulation.individuales">Individuales</a></li><li class="nav-item"><a class="nav-link" ui-sref-active="active" ui-sref="layout.manipulation.masivas"><i class="ion-gear-a"></i>Masivas</a></li></ul></div></nav><div ui-view=""></div>');
$templateCache.put('app/monitoring/root.monitoring.html','<div ui-view=""></div>');
$templateCache.put('app/home/components/home.html','<div class="ome"><div class="titu"><h1>Bienvenido a ACH Data</h1><p>Conoce de que se trata nuestro nuevo servicio</p></div><div class="container" ng-init="$ctrl.slide = 0"><div class="col-xs-12"><div class="tabHome"><ul class="navi"><li ng-click="$ctrl.slide = 0" ng-class="{\'active\': $ctrl.slide == 0}">\xBFQu\xE9 es?</li><li ng-click="$ctrl.slide = 1" ng-class="{\'active\': $ctrl.slide == 1}">\xBFPara qu\xE9 sirve?</li><li ng-click="$ctrl.slide = 2" ng-class="{\'active\': $ctrl.slide == 2}">\xBFC\xF3mo funciona?</li><li ng-click="$ctrl.slide = 3" ng-class="{\'active\': $ctrl.slide == 3}">\xBFPor qu\xE9 es mejor consultar en SOI data?</li><li ng-click="$ctrl.slide = 4" ng-class="{\'active\': $ctrl.slide == 4}">\xBFCu\xE1ndo puedo usarlo?</li><li ng-click="$ctrl.slide = 5" ng-class="{\'active\': $ctrl.slide == 5}">\xBFSobre qui\xE9nes puedo consultar?</li></ul><div class="tabBody" ng-if="$ctrl.slide == 0"><p>ACH Data es un nuevo servicio de ACH Colombia dirigido al sector financiero del pa\xEDs. Permite contrastar la informaci\xF3n de SOI, frente a la suministrada por los clientes de las entidades financieras, con el fin de prevenir y disminuir los impactos en materia de fraude por falsedad de documento. Por eso, podr\xE1n consultar la informaci\xF3n en l\xEDnea en la base de datos de ACH Data, cuyo contenido est\xE1 siempre actualizado.</p></div><div class="tabBody" ng-if="$ctrl.slide == 1"><p>El principal prop\xF3sito de ACH Data en proveer una informaci\xF3n m\xE1s clara y confiable, para mitigar el impacto en temas de suplantaci\xF3n y falsedad de documento al momento de otorgar un servicio financiero. De esta manera, ayudamos a las entidades financieras a ser m\xE1s acertadas al momento de confrontar la informaci\xF3n de sus clientes con ACH Data.</p></div><div class="tabBody" ng-if="$ctrl.slide == 2"><p><strong>Ofrecemos tres tipos de consulta:</strong><br><strong>1.</strong> Consulta por integraci\xF3n de datos en los sistemas de an\xE1lisis de riesgo.<br><strong>2.</strong> Consulta individual a trav\xE9s del portal ACH Data.<br><strong>3.</strong> Consulta masiva a trav\xE9s del portal ACH Data.</p></div><div class="tabBody" ng-if="$ctrl.slide == 3"><p><strong>Porque a diferencia del resto, SOI DATA ofrece los siguientes beneficios:</strong><br>Ayuda a las entidades financieras a prevenir el fraude.<br>(Suplantaci\xF3n de identidad, falsedad de documento, moralidad e idoneidad del cliente).<br>Mejora la precisi\xF3n de los an\xE1lisis crediticios.<br>Agiliza las aprobaciones crediticias y disminuye tr\xE1mites y papeleo.<br>Contribuye en el mejoramiento del perfil de la cartera actual.<br>Ayuda a mejorar la experiencia de usuarios de la entidades financieras.<br>Disminuye la entrega de informaci\xF3n f\xEDsica y tr\xE1mites para la solicitud de servicios financieros.<br>Hace que los otorgamientos de cr\xE9ditos sean mucho m\xE1s responsables.</p></div><div class="tabBody" ng-if="$ctrl.slide == 4"><p>El servicio muestra las consultas de los \xFAltimos 36 meses. La informaci\xF3n puede ser revisada todos los d\xEDas, a cualquier hora y cuentas veces sean necesarias.</p></div><div class="tabBody" ng-if="$ctrl.slide == 5"><p>Con este nuevo servicio, las entidades financieras podr\xE1n hacer consultas masivas e individuales de personas jur\xEDdicas, personas naturales ya sean activos o pensionados y de trabajadores dependientes e independientes.</p></div></div></div></div></div>');
$templateCache.put('app/auth/components/carousel/carousel.html','jklsadjlfasjlksadlkljadjkafdjkl<div class="info"><div class="cont"><div id="myCarousel" class="carousel slide"><div class="carousel-inner" role="listbox"><div ng-if="$ctrl.slide == 0" class="item"><h1><span>\xBFQu\xE9 es?</span></h1><p>ACH Data es un nuevo servicio de ACH Colombia dirigido al sector financiero del pa\xEDs. Permite contrastar la informaci\xF3n del SOI, frente a la suminstrada por los clientes de las entidades financieras, con el fin de prevenir y disminuir los impactos en materia de fraude por falsedad de documento. Po eso, podr\xE1n consultar la informaci\xF3n en l\xEDnea en la base de datos de ACH Data, cuyo contenido est\xE1 siempre actualizado.</p></div><div ng-if="$ctrl.slide == 1" class="item"><h1><span>\xBFPara qu\xE9 sirve?</span></h1><p>El principal prop\xF3sito de ACH Data en proveer una infomaci\xF3n m\xE1s clara y confiable, para mitigar el impato en temas de suplantaci\xF3n y falsedad de documento al momento de otorgar un servicio financiero. De esta manera, ayudamos a las entidades finacieras a se m\xE1s acertadas al momento de confrontar la informaci\xF3n de sus clientes con ACH Data.</p></div><div ng-if="$ctrl.slide == 2" class="item"><h1><span>\xBFC\xF3mo funciona?</span></h1><p><strong>Ofrecemos tres tipos de consulta:</strong><br><strong>1.</strong> Consulta por integraci\xF3n dew datos en los sistemas de an\xE1lisis de riesgo.<br><strong>2.</strong> Consulta individual a trav\xE9s del portal ACH Data.<br><strong>3.</strong> Consulta masiva a trav\xE9s del portal ACH Data.</p></div><div ng-if="$ctrl.slide == 3" class="item"><h1><span>\xBFPor qu\xE9 es mejor consultar en soi data?</span></h1><p><strong>Por que a diferencia del resto, SOI DAta ofrece los siguientes beneficios:</strong><br>Ayuda la precisi\xF3n de los an\xE1lisis crediticios.<br>Agiliza las aprobaciones crediticias y disminuye tr\xE1mites y papeleo.<br>Contribuye en el mejoramiento del perfil de la cartera actual.<br>Ayuda a mejorar la experiencia de usurios de la entidades financieras.<br>Disminuye la entrega de informaci\xF3n f\xEDsica y tr\xE1mites para la solicitud de servicios financieros.<br>Hace que los otorgamientos de cr\xE9ditos sean mucho m\xE1s responsables.</p></div><div ng-if="$ctrl.slide == 4" class="item"><h1><span>\xBFCu\xE1ndo puedo usarlo?</span></h1><p>El servicio muestra las consultas de los \xFAltimos 36 meses. La informaci\xF3n puede ser revisada todos los d\xEDas, a cualquier hora y cuentas veces sean necesarias.</p></div><div ng-if="$ctrl.slide == 5" class="item"><h1><span>\xBFSobre qui\xE9nes puedo consultar?</span></h1><p>Con este nuevo servicio, las entidades financieras podr\xE1n hacer consultas masivas e individuales de perosonas jur\xEDdicas, personas naturales ya sean activos o pensinados y de trabajadores dependientes e independientes.</p></div><ol class="carousel-indicators"><li ng-click="changeActive(0)" ng-class="{\'active\': $ctrl.slide == 0}"></li><li ng-click="changeActive(1)" ng-class="{\'active\': $ctrl.slide == 1}"></li><li ng-click="changeActive(2)" ng-class="{\'active\': $ctrl.slide == 2}"></li><li ng-click="changeActive(3)" ng-class="{\'active\': $ctrl.slide == 3}"></li><li ng-click="changeActive(4)" ng-class="{\'active\': $ctrl.slide == 4}"></li><li ng-click="changeActive(5)" ng-class="{\'active\': $ctrl.slide == 4}"></li></ol></div></div></div></div>');
$templateCache.put('app/auth/components/login/auth.html','<div><div class="logi"><div class="bgLogi"><div class="logo"><div class="img-login"></div></div><div class="formu"><div class="frase"><h1>NADIE PUEDE DARLE INFORMACI\xD3N TAN ACERTADA DE SUS CLIENTES COMO SOI DATA</h1></div><div class="contForm" ng-if="!$ctrl.olvidoPass"><form role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="form-group"><input class="form-control" placeholder="Entidad" type="text" ng-model="$ctrl.tenant" lower-case="" required=""></div><div class="form-group"><input class="form-control" placeholder="Usuario" popover-placement="top" uib-popover-template="\'infocuenta.html\'" lower-case="" popover-trigger="focus" type="email" ng-model="$ctrl.formData.email" required=""></div><div class="form-group"><input class="form-control" placeholder="Contrase\xF1a" type="password" ng-model="$ctrl.formData.password" required=""></div><div class="form-group"><button type="submit" ng-disabled="$ctrl.invalidButton" class="btn btn-primary btn-block">Ingresar</button></div><div class="olvido"><a href="#" ng-click="$ctrl.changePass()">\xBFOlvid\xF3 su contrase\xF1a?</a></div></form></div><div class="contForm" ng-if="$ctrl.olvidoPass"><form role="form" ng-submit="$ctrl.submitRecoverPass()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="form-group"><p style="color:white;">Para restablecer su contrase\xF1a ingrese el correo electr\xF3nico inscrito en ACH Data</p></div><div class="form-group"><input class="form-control" placeholder="Entidad" type="text" ng-model="$ctrl.tenant" lower-case="" required=""></div><div class="form-group"><input class="form-control" ng-model="$ctrl.recoverMail" placeholder="Correo electr\xF3nico" type="email" lower-case="" required=""></div><div class="form-group"><button type="submit" class="btn btn-primary btn-block">Enviar</button></div><div class="olvido"><a href="#" ng-click="$ctrl.changePass()">Regrese a inicio de sesi\xF3n</a></div></form></div></div><div class="fooLog"></div></div></div></div><script id="infocuenta.html" type="text/ng-template"><p> Su nombre de usuario corresponde a su cuenta de correo corporativa</p></script>');
$templateCache.put('app/auth/components/newpass/newpass.html','<div class="container"><div class="contra"><div class="row"><div class="col-sm-6 col-sm-offset-3"><div class="row"><div class="col-xs-12"><div class="tit"><h1>RECUERDE QUE LOS DATOS SON PRIVADOS E INTRANSFERIBLES</h1></div><div class="text"><p>La contrase\xF1a debe tener m\xEDnimo una may\xFAscula, m\xEDnimo una min\xFAscula, n\xFAmeros y letras y m\xEDnimo un car\xE1cter especial, con longitud de 8 caracteres</p></div></div></div><div class="row"><form name="formPass" role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="col-xs-12 validation"><div class="form-group"><label>Contrase\xF1a</label> <input class="form-control" name="pass1" id="pw1" type="password" ng-model="$ctrl.contrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$/" required=""></div><div class="form-group"><label>Confirmar contrase\xF1a</label> <input class="form-control" name="pass2" type="password" ng-model="$ctrl.confirmcontrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$/" matchd="" pw-check="pw1" required=""> <span class="help-block" data-ng-show="formPass.pass2.$error.matchs">Las contrase\xF1as ingresadas no coinciden.</span></div><div class="form-group"><button type="submit" class="btn btn-primary btn-block">ESTABLECER CONTRASE\xD1A</button></div></div></form></div></div></div></div></div>');
$templateCache.put('app/audit/components/audit/audit.html','<div class="content-body"><div class="titGen"><div class="volver" style="display:none;"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></div><h1>AUDITOR\xCDA</h1></div><audit-form></audit-form></div>');
$templateCache.put('app/audit/components/auditForm/auditForm.html','<a ng-hide="true" id="link"></a><div class="container"><div class="consul"><form role="form" ng-fab-form="" ng-fab-form-options="customFormOptions" ng-submit="$ctrl.descargar()"><div class="row"><div class="col-sm-4 col-sm-offset-4"><div class="tit"><h3>COMPONENTE</h3></div></div></div><div class="row"><div class="col-sm-4"><div class="box"><div class="form-group"><label class="label-audit">Componente</label><select class="form-control select-componente" ng-model="$ctrl.componenteSeleccionado" ng-options="componente.id as componente.descripcion for componente in $ctrl.listaComponentesBack | orderBy: \'componente.descripcion\'" ng-change="$ctrl.cargarObjetos()" required=""><option value="" disabled="" selected="">Seleccione un componente</option></select></div></div></div><div class="col-sm-4"><div class="box"><div class="form-group"><label class="label-audit">Objeto</label><select class="form-control select-componente" ng-model="$ctrl.objetoSeleccionado" ng-options="objeto.id as objeto.descripcion for objeto in $ctrl.listaObjetosBack | orderBy: \'objeto.descripcion\'" ng-readonly="!$ctrl.componenteSeleccionado" ng-change="$ctrl.cargarAcciones()"><option value="" selected="">Seleccione un objeto</option></select></div></div></div><div class="col-sm-4"><div class="box"><div class="form-group"><label class="label-audit">Acci\xF3n</label><select class="form-control select-componente" ng-model="$ctrl.accionSeleccionada" ng-options="accion.id as accion.descripcion for accion in $ctrl.listaAccionesBack | orderBy: \'accion.descripcion\'" ng-readonly="!$ctrl.objetoSeleccionado"><option value="" selected="">Seleccione una acci\xF3n</option></select></div></div></div></div><div class="row"><div class="col-sm-4"><div class="tit"><h3>FECHA</h3></div><div class="box"><div class="input-group form-group"><input type="text" class="form-control" uib-datepicker-popup="yyyy/MM/dd" ng-model="$ctrl.fechaInicio" is-open="$ctrl.showCalendar1" datepicker-options="$ctrl.dateOptions" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar1()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="{{\'consultas.initialDate\' | translate}}" popup-placement="bottom-left" readonly=""> <span class="input-group-btn"><button type="button" class="btn btn-default btn-calendar" ng-click="$ctrl.toggleCalendar1()"><i class="glyphicon glyphicon-calendar"></i></button></span></div><div class="input-group form-group"><input type="text" class="form-control" uib-datepicker-popup="yyyy/MM/dd" ng-model="$ctrl.fechaFin" is-open="$ctrl.showCalendar2" datepicker-options="$ctrl.dateOptions2" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar2()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="{{\'consultas.finalDate\' | translate}}" popup-placement="bottom-left" readonly=""> <span class="input-group-btn"><button type="button" class="btn btn-default btn-calendar" ng-click="$ctrl.toggleCalendar2()"><i class="glyphicon glyphicon-calendar"></i></button></span></div></div></div><div class="col-sm-4"><div class="tit"><h3>USUARIO</h3></div><div class="box"><div class="form-group"><div class="form-group"><input class="form-control" placeholder="Ingrese el usuario" type="text" lower-case="" ng-model="$ctrl.usuario" maxlength="50"></div></div></div></div><div class="col-sm-4"><div class="tit"><h3>IP P\xDABLICA</h3></div><div class="box"><div class="form-group"><div class="form-group"><input class="form-control" placeholder="Ingrese la IP p\xFAblica" type="text" ng-model="$ctrl.ipOrigen" maxlength="50"></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="btnConsul"><button class="btn btn-primary btn-block" type="submit">Descargar</button></div></div></div></form></div></div>');
$templateCache.put('app/common/components/header/header.html','<nav class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" ui-sref="layout.home"><div class="logoHeader"></div></a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li ng-class="{\'active\' : $ctrl.getClassPrincipal(\'manipulation\')}" show-authed="autorizacion-datos-personales.gestionar"><a ui-sref="layout.manipulation">Uso de Datos</a></li><li show-authed="consultas" ng-class="{\'active\' : $ctrl.getClassPrincipal(\'consulting\') || $ctrl.getClassPrincipal(\'naturales\') || $ctrl.getClassPrincipal(\'parametros\') || $ctrl.getClassPrincipal(\'extendida\')}" class="btn-group" uib-dropdown="" keyboard-nav=""><a id="simple-btn-keyboard-nav-3" type="button" uib-dropdown-toggle="">Consultas <span class="caret"></span></a><ul class="dropdown-menu" uib-dropdown-menu="" role="menu" aria-labelledby="simple-btn-keyboard-nav3"><li role="menuitem" ng-if="$ctrl.getDetalladaConsulting()" class-style="inherit"><a ui-sref="layout.consulting">Detallada Natural y Jur\xEDdica</a></li><li role="menuitem" show-authed="consultas.consolidada" class-style="inherit"><a ui-sref="layout.naturales">Consolidada Natural</a></li><li role="menuitem" ng-if="$ctrl.getConsJuridicaConsulting()" class-style="inherit"><a ui-sref="layout.juridicas">Consolidada Jur\xEDdica</a></li><li role="menuitem" show-authed="consultas.extendida" class-style="inherit"><a ui-sref="layout.extendida">Extendida Natural</a></li><li role="menuitem" ng-if="$ctrl.getMasivaFiltrosConsulting()" class-style="inherit"><a ui-sref="layout.masivas-filtros">Masivas con Filtros</a></li><li role="menuitem" show-authed="consultas.parametro" class-style="inherit"><a ui-sref="layout.parametros">Par\xE1metros Consultas</a></li></ul></li><li ng-class="{\'active\' : $ctrl.getClassPrincipal(\'admin\')}" show-authed="usuarios" class="btn-group" uib-dropdown="" keyboard-nav=""><a id="simple-btn-keyboard-nav" type="button" uib-dropdown-toggle="">Administraci\xF3n <span class="caret"></span></a><ul class="dropdown-menu" uib-dropdown-menu="" role="menu" aria-labelledby="simple-btn-keyboard-nav"><li role="menuitem" show-authed="usuarios.entidad" class-style="inherit"><a ui-sref="layout.admin.entidad">Entidades</a></li><li role="menuitem" show-authed="usuarios.usuario" class-style="inherit"><a ui-sref="layout.admin.users">Usuarios</a></li><li role="menuitem" show-authed="usuarios.rol" class-style="inherit"><a ui-sref="layout.admin.roles">Roles</a></li><li role="menuitem" show-authed="usuarios.usuario" class-style="inherit"><a ui-sref="layout.admin.usuariosMasivas">Carga Masiva de Usuarios</a></li><li role="menuitem" show-authed="usuarios.usuario" class-style="inherit"><a ui-sref="layout.admin.dominio">Cambio de Dominio a Usuarios</a></li></ul></li><li ng-class="{\'active\' : $ctrl.getClassPrincipal(\'monitoring\') || $ctrl.getClassPrincipal(\'migraciones\') || $ctrl.getClassPrincipal(\'reversiones\')}" show-authed="monitoreo" class="btn-group" uib-dropdown="" keyboard-nav=""><a id="simple-btn-keyboard-nav" type="button" uib-dropdown-toggle="">Monitoreo <span class="caret"></span></a><ul class="dropdown-menu" uib-dropdown-menu="" role="menu" aria-labelledby="simple-btn-keyboard-nav"><li role="menuitem" show-authed="monitoreo.tablero-control" class-style="inherit"><a ui-sref="layout.monitoring.main">Consultas</a></li><li role="menuitem" show-authed="monitoreo.proceso-migracion" class-style="inherit"><a ui-sref="layout.migraciones">Estado Migraci\xF3n</a></li><li role="menuitem" show-authed="monitoreo.planilla" class-style="inherit"><a ui-sref="layout.reversiones">Revertir / Remigrar</a></li><li role="menuitem" show-authed="monitoreo.procesamiento-archivo" class-style="inherit"><a ui-sref="layout.reintentar">Reintentar Migrar</a></li></ul></li><li ng-class="{\'active\' : $ctrl.getClassPrincipal(\'statistics\')}" show-authed="estadisticas"><a ui-sref="layout.statistics">Estad\xEDsticas</a></li><li ng-class="{\'active\' : $ctrl.getClassPrincipal(\'audit\')}" show-authed="auditoria.reporte-auditoria"><a ui-sref="layout.audit">Auditor\xEDa</a></li><li><a href="#" show-authed="contacto">Canales de contacto</a></li><li ng-class="{\'active\' : $ctrl.getClassPrincipal(\'contacto\')}" show-authed="usuarios" class="btn-group" uib-dropdown="" keyboard-nav=""><a id="simple-btn-keyboard-nav2" type="button" uib-dropdown-toggle="">Canales de contacto <span class="caret"></span></a><ul class="dropdown-menu canContac" uib-dropdown-menu="" role="menu" aria-labelledby="simple-btn-keyboard-nav"><li><p><strong>Horario de atenci\xF3n</strong></p></li><li><p>lunes a viernes de 7 am a 7 pm.</p></li><li><strong><p>Tel\xE9fono de contacto</p></strong></li><li><p>1-5938300 / extensi\xF3n - 2226</p></li><li role="separator" class="divider"></li><li><a type="button" href="https://mesadeayuda.achcolombia.com.co/sm/ess.do" target="_blank" class="btn btn-primary btn-block">Mesa de ayuda</a></li></ul></li><li class="dropdown" uib-dropdown="" is-open="status.isopen"><a id="single-button" class="dropdown-toggle" uib-dropdown-toggle=""><div class="userImg"></div></a><ul class="dropdown-menu"><li><div class="nameRol">{{$ctrl.currentUser.email}}<span></span></div></li><div ng-if="$ctrl.isCurrentUserAch()"><li><a type="button" ui-sref="layout.profile" class="btn btn-block">Cambiar contrase\xF1a</a></li></div><li role="separator" class="divider"></li><li><button type="button" ng-click="$ctrl.logout()" class="btn btn-primary btn-block">Cerrar sesi\xF3n</button></li></ul></li></ul></div></div></nav>');
$templateCache.put('app/common/components/footer/footer.html','<div class="container-fluid"><div class="logAch"><div class="ima"><div class="imgFooter"></div></div><div class="txt">Copyright \xA9 ACH Colombia</div></div></div>');
$templateCache.put('app/common/components/paginacion/paginacion.html','<div class="pag"><ul class="pagination"><uib-pagination boundary-links="true" total-items="$ctrl.totalResultados" ng-model="$ctrl.pagina" class="pagination-sm" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;" items-per-page="$ctrl.itemsPerPage" ng-change="$ctrl.changePage({pagina: $ctrl.pagina})"></uib-pagination><select class="select-error" ng-if="$ctrl.configurable === true" ng-model="$ctrl.itemsPerPage" ng-change="$ctrl.changeItemsPerPage({itemsPerPage: $ctrl.itemsPerPage})" style="font-size: 10px"><option value="10" selected="selected">10</option><option value="20">20</option><option value="50">50</option><option value="-1">Todos</option></select><div ng-if="$ctrl.configurable === true"><div class="container"></div></div></ul></div>');
$templateCache.put('app/common/components/validations/validations.html','<div role="alert" class="validation" ng-show="field.$invalid && (field.$touched || field.$dirty || form.$triedSubmit)" ng-messages="field.$error"><div ng-message="required" translate="">validation.required</div><div ng-message="email" translate="">validation.email</div><div ng-message="number" translate="">validation.numeric</div><div ng-message="pattern" translate="">validation.pattern</div><div ng-message="unique" translate="">{{attrs.name}} Repetido</div><div ng-message="emptylist" translate="">Agregar al menos un Dominio</div><div ng-message="match" translate="">las contrase\xF1as no son identicas</div><div ng-message="minlength" translate="">Se requieren m\xEDnimo {{attrs.minlength}} caracteres</div><div ng-message="min" translate="">{{\'validation.min.value\' | translate:\'{val: \'+ attrs.min +\'}\'}}</div><div ng-message="maxlength" translate="">Se requieren m\xE1ximo {{attrs.maxlength}} caracteres</div><div ng-message="max" translate="">{{\'validation.max.value\' | translate:\'{val: \'+ attrs.max +\'}\'}}</div></div>');
$templateCache.put('app/common/components/root/root.html','<div class="root"><header></header><div class="content" ui-view=""></div><footer></footer></div>');
$templateCache.put('app/consulting/components/consultas/consutas.html','<div class="content-body"><div class="titGen"><h1>CONSULTAS</h1></div><div class="container"><div class="consul"><div class="row"><div class="col-sm-4"><div class="tit"><h3>TIPO CONSULTA</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoBusqueda == \'Individual\'}" ng-if="$ctrl.permisoIndividualNatural || $ctrl.permisoIndividualJuridica"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.setConsulta(\'Individual\')">Individual</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoBusqueda == \'Masiva\'}" ng-if="$ctrl.permisoMasivaNatural || $ctrl.permisoMasivaJuridica"><input type="radio" name="options" id="option3" autocomplete="off" ng-click="$ctrl.setConsulta(\'Masiva\')"> Masiva</label></div></div></div><div class="col-sm-4"><div class="tit"><h3>TIPO PERSONA</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Natural\'}" ng-if="$ctrl.permisoIndividualNatural && $ctrl.permisoMasivaNatural"><input type="radio" name="options" id="option4" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Natural\')">Natural</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Natural\'}" ng-if="$ctrl.permisoIndividualNatural && !$ctrl.permisoMasivaNatural && $ctrl.tipoBusqueda === \'Individual\'"><input type="radio" name="options" id="option4" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Natural\')">Natural</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Natural\'}" ng-if="!$ctrl.permisoIndividualNatural && $ctrl.permisoMasivaNatural && $ctrl.tipoBusqueda === \'Masiva\'"><input type="radio" name="options" id="option4" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Natural\')">Natural</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Juridica\'}" ng-if="$ctrl.permisoIndividualJuridica && $ctrl.permisoMasivaJuridica"><input type="radio" name="options" id="option5" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Juridica\')">Jur\xEDdica</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Juridica\'}" ng-if="$ctrl.permisoIndividualJuridica && !$ctrl.permisoMasivaJuridica && $ctrl.tipoBusqueda === \'Individual\'"><input type="radio" name="options" id="option5" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Juridica\')">Jur\xEDdica</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Juridica\'}" ng-if="!$ctrl.permisoIndividualJuridica && $ctrl.permisoMasivaJuridica && $ctrl.tipoBusqueda === \'Masiva\'"><input type="radio" name="options" id="option5" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Juridica\')">Jur\xEDdica</label></div></div></div><div class="col-sm-4"><div class="tit"><h3 ng-bind="$ctrl.tituloLabel"></h3></div><div class="box" ng-if="$ctrl.tipoBusqueda == \'Individual\'"><individuales tipo-persona="$ctrl.tipoPersona" documentos="$ctrl.documentos" tipo-identificacion="$ctrl.tipoIdentificacion" numero-identificacion="$ctrl.numeroIdentificacion"></individuales></div><div class="box" ng-if="$ctrl.tipoBusqueda == \'Masiva\'"><masivas nombre-consulta="$ctrl.nombreConsulta" nombre-archivo="$ctrl.nombreArchivo" consulta-impar="$ctrl.consultaImpar"></masivas></div></div></div><div class="row"><div class="col-sm-12"><div class="boxPeri"><br><div class="row"><div class="col-sm-2 col-xs-offset-4"><div class="tit"><h3>PER\xCDODO CONSULTA</h3></div></div><div class="col-sm-2"><input class="form-control" placeholder="Per\xEDodo" type="text" ng-model="$ctrl.periodoConsulta" maxlength="2" ng-keyup="$ctrl.cambiarPeriodo($event)"></div><div class="col-sm-2"><div class="labelPeriodo"><h3>Meses</h3></div></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="btnConsul"><button ng-click="$ctrl.sendConsulta()" linked="{{$ctrl.tipoBusqueda}}" type="button" class="btn btn-primary">Consultar</button></div></div></div><div class="row" ng-if="$ctrl.tipoBusqueda === \'Masiva\'"><massive-queries-by-user></massive-queries-by-user></div></div></div></div>');
$templateCache.put('app/consulting/components/extendida/extendida.html','<div class="content-body"><div class="titGen"><h1>CONSULTA EXTENDIDA</h1></div><div class="container"><div class="consul"><div class="row"><div class="col-sm-4"><div class="tit"><h3>TIPO CONSULTA</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoConsulta == \'Individual\'}" ng-if="$ctrl.permisoIndividualNatural"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.setTipoConsulta(\'Individual\')">Individual</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoConsulta == \'Masiva\'}" ng-if="$ctrl.permisoMasivaNatural"><input type="radio" name="options" id="option2" autocomplete="off" ng-click="$ctrl.setTipoConsulta(\'Masiva\')"> Masiva</label></div></div></div><div class="col-sm-4"><div class="tit"><h3 ng-bind="$ctrl.tituloCliente"></h3></div><div class="box"><div ng-if="$ctrl.tipoConsulta == \'Individual\'"><form name="formIndividual" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="form-group"><select class="form-control" ng-model="$ctrl.tipoIdentificacion" ng-options="documento.value as documento.name for documento in $ctrl.documentos"></select></div><div class="form-group"><input class="form-control" placeholder="N\xFAmero" type="text" name="numeroDocumento" ng-model="$ctrl.numeroIdentificacion" maxlength="1000" required=""></div><div style="display : none;"><button type="submit" id="Individual">consultar</button></div></form></div><div ng-if="$ctrl.tipoConsulta == \'Masiva\'"><masivas nombre-consulta="$ctrl.nombreConsulta" nombre-archivo="$ctrl.nombreArchivo" consulta-impar="$ctrl.consultaImpar" is-extendida-natural="True"></masivas></div></div></div><div class="col-sm-4"><div class="tit"><h3>PER\xCDODO CONSULTA</h3></div><div class="box row"><div class="col-sm-8"><input class="form-control" placeholder="Per\xEDodo" type="text" name="periodoConsulta" ng-model="$ctrl.periodoConsulta" maxlength="2" ng-keyup="$ctrl.cambiarPeriodo($event)" required=""></div><div class="col-sm-4"><div class="labelPeriodo" style="margin-top: 5px;"><span class="css-label-range" style="font-weight: 300; font-size: 16px;">Meses</span></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="btnConsul"><button ng-click="$ctrl.sendConsulta()" linked="{{$ctrl.tipoConsulta}}" class="btn btn-primary" type="submit">Consultar</button></div></div></div><div class="row" ng-if="$ctrl.tipoConsulta === \'Masiva\'"><massive-list-extended></massive-list-extended></div></div></div></div>');
$templateCache.put('app/consulting/components/individuales/individuales.html','<form name="formIndividual" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="form-group"><select class="form-control" ng-model="$ctrl.tipoIdentificacion" ng-options="documento.value as documento.name for documento in $ctrl.documentos"></select></div><div class="form-group"><input class="form-control" placeholder="N\xFAmero" type="text" name="numeroDocumento" ng-model="$ctrl.numeroIdentificacion" maxlength="1000" required=""></div><div style="display : none;"><button type="submit" id="Individual">consultar</button></div></form>');
$templateCache.put('app/consulting/components/masivas/masivas.html','<div class="form-group"><input class="form-control" placeholder="Nombre de la consulta" type="text" ng-model="$ctrl.nombreConsulta" maxlength="20"></div><div class="row"><div class="col-sm-10 form-group"><input name="file" type="file" id="file-1" class="inputfile inputfile-1 ocul" masivas-file-reader="fileContent" ng-if="$ctrl.consultaImpar"> <input name="file" type="file" id="file-1" class="inputfile inputfile-1 ocul" masivas-file-reader="fileContent" ng-if="!$ctrl.consultaImpar"> <label for="file-1" class="form-control btn-primary"><i class="glyphicon glyphicon-download-alt"></i> <span ng-if="!$ctrl.nombreArchivo">Selecciona un archivo</span> <span ng-if="$ctrl.nombreArchivo" ng-bind="$ctrl.nombreArchivo" ng-model="$ctrl.nombreArchivo">{{$ctrl.nombreArchivo}}</span></label></div><div class="col-sm-2"><i class="dow tooltips help-file glyphicon glyphicon-question-sign" popover-placement="bottom-right" uib-popover-template="\'info.html\'" popover-trigger="mouseenter"></i></div></div><script id="info.html" type="text/ng-template"><p>El contenido debe tener por cada l\xEDnea, el tipo y el n\xFAmero de identificaci\xF3n a consultar en may\xFAscula y separados por una coma.</p> <p>Ejemplo:</p> <p>CC,1234567</p> <p>TI,495969696</p> <p>CE,4566</p> <p>RC,56536356</p></script>');
$templateCache.put('app/consulting/components/juridica/juridica.html','<div class="content-body"><div class="titGen"><h1>CONSOLIDADA PERSONA JUR\xCDDICA</h1></div><div class="container" style="width: 85%;"><div class="consul"><div class="row"><div class="col-sm-6"><div class="tit"><h3>TIPO CONSULTA</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoConsulta == \'Individual\'}"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.setConsulta(\'Individual\')">Individual</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoConsulta == \'Masiva\'}"><input type="radio" name="options" id="option3" autocomplete="off" ng-click="$ctrl.setConsulta(\'Masiva\')"> Masiva</label></div></div><div class="tit" style="padding-top: 3rem;"><h3 ng-bind="$ctrl.tituloLabel"></h3></div><div class="box" ng-if="$ctrl.tipoConsulta == \'Individual\'"><individuales tipo-persona="$ctrl.tipoPersona" documentos="$ctrl.documentos" tipo-identificacion="$ctrl.tipoIdentificacion" numero-identificacion="$ctrl.numeroIdentificacion"></individuales></div><div class="box" ng-if="$ctrl.tipoConsulta == \'Masiva\'"><masivas nombre-consulta="$ctrl.nombreConsulta" nombre-archivo="$ctrl.nombreArchivo" consulta-impar="$ctrl.consultaImpar"></masivas></div></div><div class="col-sm-6"><div class="tit" style="justify-content:space-between; display:flex"><h3>RANGOS SALARIOS</h3><span class="dow tooltips glyphicon glyphicon-trash" popover-placement="bottom-left" uib-popover-template="\'info-filtro-ingreso.html\'" popover-trigger="mouseenter" ng-click="$ctrl.setRangosSalarios()"></span><script id="info-filtro-ingreso.html" type="text/ng-template"><p>Borra los valores ingresados en los rangos de salarios.</p></script></div><div class="row"><div class="col-xs-6"><label class="font-filtros">L\xEDmite inferior</label></div><div class="col-xs-6"><label class="font-filtros">L\xEDmite superior</label></div></div><div class="row" ng-repeat="rango in $ctrl.rangosSalarios"><div class="col-xs-6"><input class="form-control" type="text" ng-model="rango.limiteInferior" style="font-weight: 300; margin-top: 10px;" ng-maxlength="16" ng-pattern="/^[0-9.$]*$/" validation-msg-pattern="Este campo debe ser num\xE9rico" disabled=""></div><div class="col-xs-6"><input class="form-control" type="text" ng-model="rango.limiteSuperior" ng-keyup="$ctrl.setLimiteSuperior(rango.indice)" style="font-weight: 300; margin-top: 10px;" ng-maxlength="16" ng-pattern="/^[0-9.$]*$/" validation-msg-pattern="Este campo debe ser num\xE9rico"></div></div></div></div><div class="row"><div class="col-sm-12" style="justify-content: center; display: flex;"><button ng-click="$ctrl.sendConsultaConsolidada()" linked="{{$ctrl.tipoConsulta}}" type="button" class="btn btn-primary">Consultar</button></div></div><div class="row" ng-if="$ctrl.tipoConsulta === \'Masiva\'"><massive-list-legal-consolidated></massive-list-legal-consolidated></div><div ng-if="$ctrl.mostrarInformacionIndividual"><div class="boxPeri"><div class="row"><div class="tit" style="padding-bottom: 1rem;"><h3 style="font-weight: 400">INFORMACI\xD3N EMPLEADOR</h3></div><div style="display: grid; grid-template-columns: auto auto auto auto; grid-gap: 5px;grid-auto-rows: minmax(50px, auto); padding-top: 1.5rem"><div><div><label style="font-weight: 400;">Raz\xF3n social</label></div><div><label class="font-filtros" ng-bind="$ctrl.informacionJuridicaConsolidada.razonSocial"></label></div></div><div><div><label style="font-weight: 400;">Periodo cotizaci\xF3n</label></div><div><label class="font-filtros" ng-bind="$ctrl.informacionJuridicaConsolidada.periodoCotizacion"></label></div></div><div><div><label style="font-weight: 400;">Actividad econ\xF3mica</label></div><div><label class="font-filtros" ng-bind="$ctrl.informacionJuridicaConsolidada.actividadEconomica"></label></div></div><div><div><label style="font-weight: 400;">Total empleados</label></div><div><label class="font-filtros" ng-bind="$ctrl.informacionJuridicaConsolidada.totalEmpleados"></label></div></div><div><div><label style="font-weight: 400">Tipo y n\xFAmero de documento</label></div><div><label style="text-transform: capitalize;" class="font-filtros" ng-bind="$ctrl.informacionJuridicaConsolidada.tipoDocumento + $ctrl.informacionJuridicaConsolidada.nroDocumento"></label></div></div><div><div><label style="font-weight: 400;">Tipo aportante</label></div><div><label class="font-filtros" ng-bind="$ctrl.informacionJuridicaConsolidada.tipoAportante"></label></div></div><div><div><label style="font-weight: 400;">Clase aportante</label></div><div><label class="font-filtros" ng-bind="$ctrl.informacionJuridicaConsolidada.claseAportante"></label></div></div><div><div><label style="font-weight: 400;">Total aportes</label></div><div><label class="font-filtros">{{$ctrl.informacionJuridicaConsolidada.totalAportes | currency}}</label></div></div></div><div class="tit" style="padding-bottom: 1rem;"><h3 style="font-weight: 400">DETALLE APORTES</h3></div><div class="col-lg-5" ng-if="$ctrl.informacionJuridicaConsolidada.detalleRangoIngreso.length > 0" style="padding: 0 0 0 0"><div class="tabla"><table class="table table-striped"><thead><tr><div style="background-color: #F1F1F1; border-bottom: #8BC441 1px solid; position:relative; display: flex; align-items: center; text-align: center;"><div style="width: 55%; display:inline-block;"><div><label class="font-filtros" style="font-weight: 400;">Rangos salario</label></div><div style="position:relative;"><div style="display:inline-block; margin-right: 2%;"><label class="font-filtros" style="font-weight: 400;">L\xEDmite inferior</label></div><div style="display:inline-block; margin-left: 2%"><label class="font-filtros" style="font-weight: 400;">L\xEDmite superior</label></div></div></div><div style="width: 20%; display:inline-block;"><label class="font-filtros" style="font-weight: 400;">Empleados</label></div><div style="width: 25%; display:inline-block;"><label class="font-filtros" style="font-weight: 400;">Participaci\xF3n</label></div></div></tr></thead><tbody><tr ng-repeat="result in $ctrl.informacionJuridicaConsolidada.detalleRangoIngreso"><td style="width: 26%;"><label class="font-filtros">{{result.limiteInferior | currency}}</label></td><td style="width: 29%;" ng-if="result.limiteSuperior !== 0"><label class="font-filtros">{{result.limiteSuperior | currency}}</label></td><td style="width: 29%;" ng-if="result.limiteSuperior === 0"></td><td style="text-align:center; width: 20%;"><label class="font-filtros">{{result.empleados}}</label></td><td style="text-align:center; width: 25%;"><label class="font-filtros">{{result.porcentajeParticipacion}}%</label></td></tr><tr><td><label class="font-filtros" style="font-weight: 400;">Totales</label></td><td></td><td style="text-align:center"><label class="font-filtros" style="font-weight: 400;">{{$ctrl.informacionJuridicaConsolidada.totalEmpleados}}</label></td><td style="text-align:center"><label class="font-filtros" style="font-weight: 400;">100%</label></td></tr></tbody></table></div></div><div class="col-lg-7" ng-if="$ctrl.informacionJuridicaConsolidada.detalleTipoPlanilla.length > 0" style="padding: 0 0 0 7rem"><div class="tabla" style="padding: 0 0 0 0"><table class="table table-striped"><thead><tr style="text-align: center;" "=""><th><label class="font-filtros" style="font-weight: 400;">Tipo de planilla</label></th><th><label class="font-filtros" style="font-weight: 400;">Fecha de pago</label></th><th><label class="font-filtros" style="font-weight: 400;">D\xEDas de mora</label></th><th><label class="font-filtros" style="font-weight: 400;">Valor aportes</label></th></tr></thead><tbody><tr ng-repeat="result in $ctrl.informacionJuridicaConsolidada.detalleTipoPlanilla"><td><label class="font-filtros">{{result.tipoPlanilla}}</label></td><td><label class="font-filtros">{{result.fechaPago}}</label></td><td style="text-align: center;"><label class="font-filtros">{{result.diasMora}}</label></td><td style="text-align: center;"><label class="font-filtros">{{result.valorAportes | currency}}</label></td></tr></tbody></table></div></div></div><div class="row"><div class="col-lg-12"><div class="btnConsul"><button ng-click="$ctrl.servicioJuridicaConsolidadaIndividualPDF()" linked="{{$ctrl.tipoConsulta}}" type="button" class="btn btn-primary">Descargar</button></div></div></div></div></div><div class="row" ng-if="$ctrl.tipoConsulta === \'Masiva\'"></div></div></div></div>');
$templateCache.put('app/consulting/components/masivasFiltros/masivasFiltros.html','<div class="content-body"><div class="titGen"><h1>CONSULTA MASIVA CON FILTROS</h1></div><div class="container"><div class="consul"><form role="form" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="row"><div class="col-sm-4"><div class="tit"><h3>TIPO CONSULTA</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoConsulta == \'Detallada\'}"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.setTipoConsulta(\'Detallada\')">Detallada</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoConsulta == \'Extendida\'}"><input type="radio" name="options" id="option2" autocomplete="off" ng-click="$ctrl.setTipoConsulta(\'Extendida\')">Extendida</label></div></div></div><div class="col-sm-4"><div class="tit"><h3>DATOS ARCHIVO</h3></div><div class="box"><masivas nombre-consulta="$ctrl.nombreConsulta" nombre-archivo="$ctrl.nombreArchivo" consulta-impar="$ctrl.consultaImpar"></masivas></div></div><div class="col-sm-4"><div class="tit"><h3>PER\xCDODO CONSULTA</h3></div><div class="box row"><div class="col-sm-8"><input class="form-control" placeholder="Per\xEDodo" type="text" ng-model="$ctrl.periodoConsulta" maxlength="2" ng-keyup="$ctrl.cambiarPeriodo($event)"></div><div class="col-sm-4"><div class="labelPeriodo" style="margin-top: 5px;"><span class="css-label-range" style="font-weight: 300; font-size: 16px;">Meses</span></div></div></div></div></div><div class="row" style="margin-top: 20px;"><div class="titulo-filtros contentCenter">FILTRAR <i class="dow tooltips help-file glyphicon glyphicon-question-sign" popover-placement="bottom-left" uib-popover-template="\'info-filtros.html\'" popover-trigger="mouseenter" style="margin-left: 10px; margin-top: -5px;"></i><script id="info-filtros.html" type="text/ng-template"><p>Los filtros de relaci\xF3n laboral, ingresos y novedad de retiro son opcionales. Sin embargo, se sugiere seleccionar al menos uno.</p></script></div><div class="row area-filtros"><div class="col-xs-6"><label class="font-filtros">Relaci\xF3n laboral</label><div class="row"><div class="col-xs-6"><ul class="list-group list-rl"><li class="list-rl-encabezado" ng-click="$ctrl.setListRelacionLaboralCompleta(\'Aux\')">>></li><div class="list-rl-containerScroll" style="height: 250px;"><li class="list-rl-cuerpo font-filtros" style="font-size: 14px;" ng-repeat="item in $ctrl.listRelacionLaboralAux" ng-click="$ctrl.setListRelacionLaboralElemento(\'Aux\', item)">{{item}}</li></div></ul></div><div class="col-xs-6"><ul class="list-group list-rl"><li class="list-rl-encabezado" ng-click="$ctrl.setListRelacionLaboralCompleta(\'Final\')"><<</li><div class="list-rl-containerScroll"><li class="list-rl-cuerpo font-filtros" style="font-size: 14px;" ng-repeat="item in $ctrl.listRelacionLaboral" ng-click="$ctrl.setListRelacionLaboralElemento(\'Final\', item)">{{item}}</li></div></ul></div></div></div><div class="col-xs-6" style="height: 235px;"><div class="contentCenter" style="text-align: left;"><label class="font-filtros">Ingresos</label> <span class="dow tooltips glyphicon glyphicon-trash" popover-placement="bottom-left" uib-popover-template="\'info-filtro-ingreso.html\'" popover-trigger="mouseenter" style="margin-top: 2px; margin-left: 10px;" ng-click="$ctrl.setLimitesIngresos()"></span><script id="info-filtro-ingreso.html" type="text/ng-template"><p>Borra los valores ingresados en los campos l\xEDmite inferior y l\xEDmite superior.</p></script></div><div class="row" style="margin-top: 20px;"><div class="col-xs-6"><div class="form-group"><label class="font-filtros">L\xEDmite inferior</label> <input class="form-control" type="text" ng-model="$ctrl.limiteInferiorIngresos" ng-keyup="$ctrl.setLimiteInferiorIngresos()" style="font-weight: 300;" ng-pattern="/^[0-9.$]*$/" validation-msg-pattern="Este campo debe ser num\xE9rico"></div></div><div class="col-xs-6"><div class="form-group"><label class="font-filtros">L\xEDmite superior</label> <input class="form-control" type="text" ng-model="$ctrl.limiteSuperiorIngresos" ng-keyup="$ctrl.setLimiteSuperiorIngresos()" style="font-weight: 300;" ng-pattern="/^[0-9.$]*$/" validation-msg-pattern="Este campo debe ser num\xE9rico"></div></div></div><div class="contentCenter" style="text-align: left;"><span class="dow tooltips glyphicon glyphicon-info-sign"></span> <label class="font-filtros" style="font-size: 12px; margin-top: 2px; margin-left: 7px;">Si no registra l\xEDmite superior, se valida que los ingresos sean mayores o iguales al l\xEDmite inferior</label></div><div class="contentCenter" style="bottom: 10px; position: absolute;"><input type="checkbox" class="css-check" ng-model="$ctrl.excluirNovedadRetiro"> <input type="checkbox" class="css-checkbox" ng-model="$ctrl.excluirNovedadRetiro"> <label class="css-label-range font-filtros" style="text-align: left;">Excluir las personas naturales con novedad Retiro en el per\xEDodo m\xE1s reciente consultado.</label></div></div></div></div><div class="row"><div class="col-lg-12"><div class="btnConsul"><button ng-click="$ctrl.sendConsulta()" linked="{{$ctrl.tipoBusqueda}}" type="button" class="btn btn-primary">Consultar</button></div></div></div></form><div class="row" style="margin-top: 10px;"><massive-list-filter-detallada ng-if="$ctrl.tipoConsulta == \'Detallada\'"></massive-list-filter-detallada><massive-list-filter-extended ng-if="$ctrl.tipoConsulta == \'Extendida\'"></massive-list-filter-extended></div></div></div></div>');
$templateCache.put('app/consulting/components/massiveListConsolidated/massiveListConsolidated.html','<style>\r\n/* Center the loader */\r\n#loader {\r\n  z-index: 1;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 4px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 4px solid #8cc63e;\r\n  width: 20px;\r\n  height: 20px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#myDiv {\r\n  display: none;\r\n  text-align: center;\r\n}\r\n</style><div class="tit"><h3>{{\'massive-queries.section-name\' | translate}}</h3></div><div class="col-lg-12" ng-if="$ctrl.results.length > 0"><div class="tabla"><table class="table table-striped"><thead><tr><th>{{\'massive-queries.query-type\' | translate}}</th><th>{{\'massive-queries.query-date\' | translate}}</th><th>{{\'massive-queries.query-name\' | translate}}</th><th>{{\'massive-queries.query-filename-loaded\' | translate}}</th><th>{{\'massive-queries.query-num-processed\' | translate}}</th><th>{{\'massive-queries.query-num-successful\' | translate}}</th><th>{{\'massive-queries.query-num-not-found\' | translate}}</th><th>{{\'massive-queries.query-num-not-valid\' | translate}}</th><th>{{\'massive-queries.actions\' | translate}}</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.results | orderBy: \'-fecha\' track by $index"><td>{{(result.esNatural)?(\'massive-queries.type-natural-person\'|translate):(\'massive-queries.type-legal-person\'|translate)}}</td><td>{{result.fecha | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.nombre}}</td><td>{{result.nombreArchivoCargado}}</td><td>{{result.procesados}}</td><td>{{result.exitosos}}</td><td>{{result.noEncontrados}}</td><td>{{result.noValidos}}</td><td ng-if="result.estadoConsulta == \'FINALIZADA\'"><a href="#" class="dow tooltips glyphicon glyphicon-download" ng-click="$ctrl.downloadConsolidatedResultsZip(result)"><span>{{\'action.download-file\' | translate}}</span></a></td><td ng-if="result.estadoConsulta != \'FINALIZADA\'"><div id="loader"></div></td></tr></tbody></table></div></div>');
$templateCache.put('app/consulting/components/massiveListExtended/massiveListExtended.html','<style>\r\n  /* Center the loader */\r\n  #loader {\r\n    z-index: 1;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 4px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 4px solid #8cc63e;\r\n    width: 20px;\r\n    height: 20px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n  \r\n  #myDiv {\r\n    display: none;\r\n    text-align: center;\r\n  }\r\n</style><div class="tit"><h3>{{\'massive-queries.section-name\' | translate}}</h3></div><div class="col-lg-12" ng-if="$ctrl.results.length > 0"><div class="tabla"><table class="table table-striped"><thead><tr><th>{{\'massive-queries.query-type\' | translate}}</th><th>{{\'massive-queries.query-date\' | translate}}</th><th>{{\'massive-queries.query-name\' | translate}}</th><th>{{\'massive-queries.query-filename-loaded\' | translate}}</th><th>{{\'massive-queries.query-num-processed\' | translate}}</th><th>{{\'massive-queries.query-num-successful\' | translate}}</th><th>{{\'massive-queries.query-num-not-found\' | translate}}</th><th>{{\'massive-queries.query-num-not-valid\' | translate}}</th><th>{{\'massive-queries.actions\' | translate}}</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.results | orderBy: \'-fecha\' track by $index"><td>{{(result.esNatural)?(\'massive-queries.type-natural-person\'|translate):(\'massive-queries.type-legal-person\'|translate)}}</td><td>{{result.fecha | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.nombre}}</td><td>{{result.nombreArchivoCargado}}</td><td>{{result.procesados}}</td><td>{{result.exitosos}}</td><td>{{result.noEncontrados}}</td><td>{{result.noValidos}}</td><td ng-if="result.estadoConsulta == \'FINALIZADA\'"><a href="#" class="dow tooltips glyphicon glyphicon-download" ng-click="$ctrl.downloadExtendedResultsZip(result)"><span>{{\'action.download-file\' | translate}}</span></a></td><td ng-if="result.estadoConsulta != \'FINALIZADA\'"><div id="loader"></div></td></tr></tbody></table></div></div>');
$templateCache.put('app/consulting/components/massiveListLegalConsolidated/massiveListLegalConsolidated.html','<style>\r\n    /* Center the loader */\r\n    #loader {\r\n      z-index: 1;\r\n      width: 20px;\r\n      height: 20px;\r\n      border: 4px solid #f3f3f3;\r\n      border-radius: 50%;\r\n      border-top: 4px solid #8cc63e;\r\n      width: 20px;\r\n      height: 20px;\r\n      -webkit-animation: spin 2s linear infinite;\r\n      animation: spin 2s linear infinite;\r\n    }\r\n    \r\n    @-webkit-keyframes spin {\r\n      0% { -webkit-transform: rotate(0deg); }\r\n      100% { -webkit-transform: rotate(360deg); }\r\n    }\r\n    \r\n    @keyframes spin {\r\n      0% { transform: rotate(0deg); }\r\n      100% { transform: rotate(360deg); }\r\n    }\r\n    \r\n    #myDiv {\r\n      display: none;\r\n      text-align: center;\r\n    }\r\n  </style><div class="tit"><h3>{{\'massive-queries.section-name\' | translate}}</h3></div><div class="col-lg-12" ng-if="$ctrl.results.length > 0"><div class="tabla"><table class="table table-striped"><thead><tr><th>{{\'massive-queries.query-type\' | translate}}</th><th>{{\'massive-queries.query-date\' | translate}}</th><th>{{\'massive-queries.query-name\' | translate}}</th><th>{{\'massive-queries.query-filename-loaded\' | translate}}</th><th>{{\'massive-queries.query-num-processed\' | translate}}</th><th>{{\'massive-queries.query-num-successful\' | translate}}</th><th>{{\'massive-queries.query-num-not-found\' | translate}}</th><th>{{\'massive-queries.query-num-not-valid\' | translate}}</th><th>{{\'massive-queries.actions\' | translate}}</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.results | orderBy: \'-fecha\' track by $index"><td>{{(result.esNatural)?(\'massive-queries.type-natural-person\'|translate):(\'massive-queries.type-legal-person\'|translate)}}</td><td>{{result.fecha | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.nombre}}</td><td>{{result.nombreArchivoCargado}}</td><td>{{result.procesados}}</td><td>{{result.exitosos}}</td><td>{{result.noEncontrados}}</td><td>{{result.noValidos}}</td><td ng-if="result.estadoConsulta == \'FINALIZADA\'"><a href="#" class="dow tooltips glyphicon glyphicon-download" ng-click="$ctrl.downloadLegalConsolidatedResultsZip(result)"><span>{{\'action.download-file\' | translate}}</span></a></td><td ng-if="result.estadoConsulta != \'FINALIZADA\'"><div id="loader"></div></td></tr></tbody></table></div></div>');
$templateCache.put('app/consulting/components/massiveListFilterDetallada/massiveListFilterDetallada.html','<style>\r\n/* Center the loader */\r\n#loader {\r\n  z-index: 1;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 4px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 4px solid #8cc63e;\r\n  width: 20px;\r\n  height: 20px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#myDiv {\r\n  display: none;\r\n  text-align: center;\r\n}\r\n</style><div class="tit"><h3>{{\'massive-queries.section-name\' | translate}}</h3></div><div class="col-lg-12" ng-if="$ctrl.results.length > 0"><div class="tabla"><table class="table table-striped"><thead><tr><th>{{\'massive-queries.query-type\' | translate}}</th><th>{{\'massive-queries.query-date\' | translate}}</th><th>{{\'massive-queries.query-name\' | translate}}</th><th>{{\'massive-queries.query-filename-loaded\' | translate}}</th><th>{{\'massive-queries.query-num-processed\' | translate}}</th><th>{{\'massive-queries.query-num-successful\' | translate}}</th><th>{{\'massive-queries.query-num-not-found\' | translate}}</th><th>{{\'massive-queries.query-num-not-valid\' | translate}}</th><th>{{\'massive-queries.actions\' | translate}}</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.results | orderBy: \'-fecha\' track by $index"><td>{{(result.esNatural)?(\'massive-queries.type-natural-person\'|translate):(\'massive-queries.type-legal-person\'|translate)}}</td><td>{{result.fecha | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.nombre}}</td><td>{{result.nombreArchivoCargado}}</td><td>{{result.procesados}}</td><td>{{result.exitosos}}</td><td>{{result.noEncontrados}}</td><td>{{result.noValidos}}</td><td ng-if="result.estadoConsulta == \'FINALIZADA\'"><a href="#" class="dow tooltips glyphicon glyphicon-download" ng-click="$ctrl.downloadResultsZip(result)"><span>{{\'action.download-file\' | translate}}</span></a></td><td ng-if="result.estadoConsulta != \'FINALIZADA\'"><div id="loader"></div></td></tr></tbody></table></div></div>');
$templateCache.put('app/consulting/components/massiveListFilterExtended/massiveListFilterExtended.html','<style>\r\n/* Center the loader */\r\n#loader {\r\n  z-index: 1;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 4px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 4px solid #8cc63e;\r\n  width: 20px;\r\n  height: 20px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#myDiv {\r\n  display: none;\r\n  text-align: center;\r\n}\r\n</style><div class="tit"><h3>{{\'massive-queries.section-name\' | translate}}</h3></div><div class="col-lg-12" ng-if="$ctrl.results.length > 0"><div class="tabla"><table class="table table-striped"><thead><tr><th>{{\'massive-queries.query-type\' | translate}}</th><th>{{\'massive-queries.query-date\' | translate}}</th><th>{{\'massive-queries.query-name\' | translate}}</th><th>{{\'massive-queries.query-filename-loaded\' | translate}}</th><th>{{\'massive-queries.query-num-processed\' | translate}}</th><th>{{\'massive-queries.query-num-successful\' | translate}}</th><th>{{\'massive-queries.query-num-not-found\' | translate}}</th><th>{{\'massive-queries.query-num-not-valid\' | translate}}</th><th>{{\'massive-queries.actions\' | translate}}</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.results | orderBy: \'-fecha\' track by $index"><td>{{(result.esNatural)?(\'massive-queries.type-natural-person\'|translate):(\'massive-queries.type-legal-person\'|translate)}}</td><td>{{result.fecha | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.nombre}}</td><td>{{result.nombreArchivoCargado}}</td><td>{{result.procesados}}</td><td>{{result.exitosos}}</td><td>{{result.noEncontrados}}</td><td>{{result.noValidos}}</td><td ng-if="result.estadoConsulta == \'FINALIZADA\'"><a href="#" class="dow tooltips glyphicon glyphicon-download" ng-click="$ctrl.downloadResultsZip(result)"><span>{{\'action.download-file\' | translate}}</span></a></td><td ng-if="result.estadoConsulta != \'FINALIZADA\'"><div id="loader"></div></td></tr></tbody></table></div></div>');
$templateCache.put('app/consulting/components/natural/natural.html','<div class="content-body"><div class="titGen"><h1>CONSULTAS CONSOLIDADAS PERSONA NATURAL</h1></div><div class="container"><div class="consul"><div class="row"><div class="col-sm-4"><div class="tit"><h3>TIPO CONSULTA</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoBusqueda == \'Individual\'}" ng-if="$ctrl.permisoIndividualNatural"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.setConsulta(\'Individual\')">Individual</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoBusqueda == \'Masiva\'}" ng-if="$ctrl.permisoMasivaNatural"><input type="radio" name="options" id="option3" autocomplete="off" ng-click="$ctrl.setConsulta(\'Masiva\')"> Masiva</label></div></div></div><div class="col-sm-4"><div class="tit"><h3 ng-bind="$ctrl.tituloLabel"></h3></div><div class="box" ng-if="$ctrl.tipoBusqueda == \'Individual\'"><individuales tipo-persona="$ctrl.tipoPersona" documentos="$ctrl.documentos" tipo-identificacion="$ctrl.tipoIdentificacion" numero-identificacion="$ctrl.numeroIdentificacion"></individuales></div><div class="box" ng-if="$ctrl.tipoBusqueda == \'Masiva\'"><masivas nombre-consulta="$ctrl.nombreConsulta" nombre-archivo="$ctrl.nombreArchivo" consulta-impar="$ctrl.consultaImpar"></masivas></div></div><div class="col-sm-4"><div class="tit"><h3>PER\xCDODO CONSULTA</h3></div><div class="box"></div><div class="box row"><div class="col-sm-8"><input class="form-control" placeholder="Per\xEDodo" type="text" ng-model="$ctrl.periodoConsulta" maxlength="2" ng-keyup="$ctrl.cambiarPeriodo($event)" required=""></div><div class="col-sm-4"><div class="labelPeriodo" style="margin-top: 5px;"><span class="css-label-range" style="font-weight: 300; font-size: 16px;">Meses</span></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="btnConsul"><button ng-click="$ctrl.sendConsultaConsolidada()" linked="{{$ctrl.tipoBusqueda}}" type="button" class="btn btn-primary">Consultar</button></div></div></div><div class="row" ng-if="$ctrl.tipoBusqueda === \'Masiva\'"><massive-list-consolidated></massive-list-consolidated></div></div></div></div>');
$templateCache.put('app/consulting/components/massiveQueriesByUser/massiveQueriesByUser.html','<style>\r\n/* Center the loader */\r\n#loader {\r\n  z-index: 1;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 4px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 4px solid #8cc63e;\r\n  width: 20px;\r\n  height: 20px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#myDiv {\r\n  display: none;\r\n  text-align: center;\r\n}\r\n</style><div class="tit"><h3>{{\'massive-queries.section-name\' | translate}}</h3></div><div class="col-lg-12" ng-if="$ctrl.results.length > 0"><div class="tabla"><table class="table table-striped"><thead><tr><th>{{\'massive-queries.query-type\' | translate}}</th><th>{{\'massive-queries.query-date\' | translate}}</th><th>{{\'massive-queries.query-name\' | translate}}</th><th>{{\'massive-queries.query-filename-loaded\' | translate}}</th><th>{{\'massive-queries.query-num-processed\' | translate}}</th><th>{{\'massive-queries.query-num-successful\' | translate}}</th><th>{{\'massive-queries.query-num-not-found\' | translate}}</th><th>{{\'massive-queries.query-num-not-valid\' | translate}}</th><th>{{\'massive-queries.actions\' | translate}}</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.results | orderBy: \'-fecha\' track by $index"><td>{{(result.esNatural)?(\'massive-queries.type-natural-person\'|translate):(\'massive-queries.type-legal-person\'|translate)}}</td><td>{{result.fecha | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.nombre}}</td><td>{{result.nombreArchivoCargado}}</td><td>{{result.procesados}}</td><td>{{result.exitosos}}</td><td>{{result.noEncontrados}}</td><td>{{result.noValidos}}</td><td ng-if="result.estadoConsulta == \'FINALIZADA\'"><a href="#" class="dow tooltips glyphicon glyphicon-download" ng-click="$ctrl.downloadResultsZip(result)"><span>{{\'action.download-file\' | translate}}</span></a></td><td ng-if="result.estadoConsulta != \'FINALIZADA\'"><div id="loader"></div></td></tr></tbody></table></div></div>');
$templateCache.put('app/manipulation/components/individuales/individuales.html','<form name="formIndividual" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="form-group"><select class="form-control" ng-model="$ctrl.tipoIdentificacion" ng-options="documento.value as documento.name for documento in $ctrl.documentos"></select></div><div class="form-group"><input class="form-control" placeholder="N\xFAmero" type="text" name="numeroDocumento" ng-model="$ctrl.numeroIdentificacion" maxlength="1000" required=""></div><div style="display : none;"><button type="submit" id="Individual">consultar</button></div></form>');
$templateCache.put('app/manipulation/components/masivas/masivas.html','<div class="form-group"><input class="form-control" placeholder="Nombre del cargue" type="text" ng-model="$ctrl.nombreConsulta" maxlength="20"></div><div class="row"><div class="col-sm-10 form-group"><input name="file" type="file" id="file-1" class="inputfile inputfile-1 ocul" masivas-file-reader="fileContent" ng-if="$ctrl.consultaImpar"> <input name="file" type="file" id="file-1" class="inputfile inputfile-1 ocul" masivas-file-reader="fileContent" ng-if="!$ctrl.consultaImpar"> <label for="file-1" class="form-control btn-primary"><i class="glyphicon glyphicon-download-alt"></i> <span ng-if="!$ctrl.nombreArchivo">Selecciona un archivo</span> <span ng-if="$ctrl.nombreArchivo" ng-bind="$ctrl.nombreArchivo" ng-model="$ctrl.nombreArchivo">{{$ctrl.nombreArchivo}}</span></label></div><div class="col-sm-2"><i class="dow tooltips help-file glyphicon glyphicon-question-sign" popover-placement="bottom-right" uib-popover-template="\'info.html\'" popover-trigger="mouseenter"></i></div></div><script id="info.html" type="text/ng-template"><p>El contenido debe tener por cada l\xEDnea, el tipo y el n\xFAmero de identificaci\xF3n a consultar en may\xFAscula y separados por una coma.</p> <p>Ejemplo:</p> <p>CC,1234567</p> <p>TI,495969696</p> <p>CE,4566</p> <p>RC,56536356</p></script>');
$templateCache.put('app/settings/components/profile/profile.html','<div class="container"><div class="contra"><div class="row"><div class="col-sm-6 col-sm-offset-3"><div class="row"><div class="col-xs-12"><div class="tit"><h1>RECUERDE QUE LOS DATOS SON PRIVADOS E INTRANSFERIBLES</h1></div><div class="text"><p>La contrase\xF1a debe tener m\xEDnimo una may\xFAscula, m\xEDnimo una min\xFAscula, n\xFAmeros y letras y m\xEDnimo un car\xE1cter especial, con longitud de 8 caracteres</p></div></div></div><div class="row"><form name="formPass" role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="col-xs-12 validation"><div class="form-group"><label>Contrase\xF1a actual</label> <input class="form-control" name="pass1" type="password" ng-model="$ctrl.oldcontrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$/" required=""></div><div class="form-group"><label>Nueva contrase\xF1a</label> <input class="form-control" id="pw1" name="contrasena" type="password" ng-model="$ctrl.contrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$/" required=""></div><div class="form-group"><label>Confirmar contrase\xF1a</label> <input class="form-control" name="pass2" type="password" ng-model="$ctrl.confirmcontrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." matchd="" pw-check="pw1" required=""> <span class="help-block" data-ng-show="formPass.pass2.$error.matchs">Las contrase\xF1as ingresadas no coinciden</span></div><div class="form-group"><button type="submit" class="btn btn-primary btn-block">ESTABLECER CONTRASE\xD1A</button></div></div></form></div></div></div></div></div>');
$templateCache.put('app/manipulation/components/principal/principal.html','<div class="content-body"><div class="titGen"><h1>GESTI\xD3N DE DATOS</h1></div><div class="container"><div class="consul"><div class="row"><div class="col-sm-3"><div class="tit"><h3>TIPO ACCI\xD3N</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoAccion == \'Excluir\'}"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.setAccion(\'Excluir\')">Excluir de consultas</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoAccion == \'Incluir\'}"><input type="radio" name="options" id="option3" autocomplete="off" ng-click="$ctrl.setAccion(\'Incluir\')"> Incluir en consultas</label></div></div></div><div class="col-sm-3"><div class="tit"><h3>TIPO CARGUE</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoBusqueda == \'Individual\'}"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.setConsulta(\'Individual\')">Individual</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoBusqueda == \'Masiva\'}"><input type="radio" name="options" id="option3" autocomplete="off" ng-click="$ctrl.setConsulta(\'Masiva\')"> Masivo</label></div></div></div><div class="col-sm-3"><div class="tit"><h3>TIPO PERSONA</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Natural\'}"><input type="radio" name="options" id="option4" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Natural\')">Natural</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoPersona == \'Juridica\'}"><input type="radio" name="options" id="option5" autocomplete="off" ng-click="$ctrl.cambiarTipoPersona(\'Juridica\')">Jur\xEDdica</label></div></div></div><div class="col-sm-3"><div class="tit"><h3 ng-bind="$ctrl.tituloLabel"></h3></div><div class="box" ng-if="$ctrl.tipoBusqueda == \'Individual\'"><individuales tipo-persona="$ctrl.tipoPersona" documentos="$ctrl.documentos" tipo-identificacion="$ctrl.tipoIdentificacion" numero-identificacion="$ctrl.numeroIdentificacion"></individuales></div><div class="box" ng-if="$ctrl.tipoBusqueda == \'Masiva\'"><masivas nombre-consulta="$ctrl.nombreConsulta" nombre-archivo="$ctrl.nombreArchivo" consulta-impar="$ctrl.consultaImpar"></masivas></div></div></div><form name="formIndividual" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="row"><div class="col-lg-12"><div class="forms"><div class="row"><div class="col-xs-6"><div class="form-group"><label>Correo de notificaci\xF3n</label> <input class="form-control" type="email" name="correoElectronico" placeholder="{{$ctrl.environment.correoUsoDatosPersonales}}" lower-case="" ng-maxlength="50" ng-pattern="/^[0-9-a-zA-Z-@-_-.]*$/" ng-disabled="$ctrl.edit" ng-model="$ctrl.correoElectronico" popover-placement="top" uib-popover-template="\'mail.html\'" popover-trigger="focus" required=""></div></div></div></div></div></div></form><div class="row"><div class="col-lg-12"><div class="btnConsul"><button ng-click="$ctrl.sendConsulta()" linked="{{$ctrl.tipoBusqueda}}" class="btn btn-primary">Guardar</button></div></div></div></div></div></div><script id="mail.html" type="text/ng-template"><p>El correo corresponde a la cuenta corporativa de su entidad.</p></script>');
$templateCache.put('app/settings/components/timeoutprofile/timeoutprofile.html','<div class="container"><div class="contra"><div class="row"><div class="col-sm-6 col-sm-offset-3"><div class="row"><div class="col-xs-12"><div class="text"><h1>CONTRASE\xD1A EXPIR\xD3</h1></div><div class="text"><p>La contrase\xF1a debe tener m\xEDnimo una may\xFAscula, m\xEDnimo una min\xFAscula, n\xFAmeros y letras y m\xEDnimo un car\xE1cter especial, con longitud de 8 caracteres</p></div></div></div><div class="row"><form name="formPass" role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="col-xs-12 validation"><div class="form-group"><label>Contrase\xF1a actual</label> <input class="form-control" name="pass1" type="password" ng-model="$ctrl.oldcontrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$/" required=""></div><div class="form-group"><label>Nueva contrase\xF1a</label> <input class="form-control" id="pw1" name="contrasena" type="password" ng-model="$ctrl.contrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$/" required=""></div><div class="form-group"><label>Confirmar contrase\xF1a</label> <input class="form-control" name="pass2" type="password" ng-model="$ctrl.confirmcontrasena" validation-msg-pattern="La contrase\xF1a ingresada no cumple con los est\xE1ndares de seguridad." matchd="" pw-check="pw1" required=""> <span class="help-block" data-ng-show="formPass.pass2.$error.matchs">Las contrase\xF1as ingresadas no coinciden</span></div><div class="form-group"><button type="submit" class="btn btn-primary btn-block">ESTABLECER CONTRASE\xD1A</button></div></div></form></div></div></div></div></div>');
$templateCache.put('app/statistics/components/statistics/statistics.html','<div class="content-body"><div class="titGen"><h1>ESTAD\xCDSTICAS</h1></div><statistics-form></statistics-form></div>');
$templateCache.put('app/statistics/components/statisticsForm/statisticsForm.html','<a ng-hide="true" id="link"></a><div class="container"><div class="consul"><form role="form" name="customOptionsForm" ng-submit="$ctrl.descargar()" promise-btn=""><div class="row"><div class="col-sm-3"><div class="tit"><h3>REPORTE</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoReporte == \'Consolidado\'}" show-authed="estadisticas.consolidado"><input type="radio" name="options" id="option1" autocomplete="off" ng-click="$ctrl.cambiarTipoReporte(\'Consolidado\')">Consolidado</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoReporte == \'Detallado\'}" show-authed="estadisticas.detallado"><input type="radio" name="options" id="option2" autocomplete="off" ng-click="$ctrl.cambiarTipoReporte(\'Detallado\')">Detallado</label></div></div></div><div class="col-sm-3"><div class="tit"><h3>FECHA</h3></div><div class="box"><div class="input-group form-group"><input type="text" class="form-control" uib-datepicker-popup="yyyy/MM/dd" ng-model="$ctrl.fechaInicio" is-open="$ctrl.showCalendar1" datepicker-options="$ctrl.dateOptions" ng-required="true" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar1()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="{{\'consultas.initialDate\' | translate}}" readonly="" required=""> <span class="input-group-btn"><button type="button" class="btn btn-default btn-calendar" ng-click="$ctrl.toggleCalendar1()"><i class="glyphicon glyphicon-calendar"></i></button></span></div><div class="input-group form-group"><input type="text" class="form-control" uib-datepicker-popup="yyyy/MM/dd" ng-model="$ctrl.fechaFin" is-open="$ctrl.showCalendar2" datepicker-options="$ctrl.dateOptions2" ng-required="true" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar2()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="{{\'consultas.finalDate\' | translate}}" readonly="" required=""> <span class="input-group-btn"><button type="button" class="btn btn-default btn-calendar" ng-click="$ctrl.toggleCalendar2()"><i class="glyphicon glyphicon-calendar"></i></button></span></div></div></div><div class="col-sm-3"><div class="tit"><h3>ENTIDAD</h3></div><div class="box"><div class="form-group"><select class="form-control" ng-model="$ctrl.entidadSeleccionada" ng-options="entidad.codigo as entidad.nombre for entidad in $ctrl.listaEntidades | orderBy: \'entidad.nombre\'" ng-disabled="$ctrl.disableTenantsConsolidado" ng-if="$ctrl.tipoReporte === \'Consolidado\'"></select><select class="form-control" ng-model="$ctrl.entidadSeleccionada" ng-options="entidad.codigo as entidad.nombre for entidad in $ctrl.listaEntidades | orderBy: \'entidad.nombre\'" ng-disabled="$ctrl.disableTenantsDetallado" ng-if="$ctrl.tipoReporte === \'Detallado\'"></select></div></div></div><div class="col-sm-3"><div class="tit"><h3>FORMATO</h3></div><div class="box"><div class="rad" data-toggle="buttons"><label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoFormato == \'CSV\'}"><input type="radio" name="options" id="option3" autocomplete="off" ng-click="$ctrl.cambiarTipoFormato(\'CSV\')">CSV</label> <label class="btn btn-rad btn-block" ng-class="{\'active\': $ctrl.tipoFormato == \'PDF\'}" ng-if="$ctrl.tipoReporte === \'Consolidado\'"><input type="radio" name="options" id="option4" autocomplete="off" ng-click="$ctrl.cambiarTipoFormato(\'PDF\')">PDF</label></div></div></div></div><div class="row"><div class="col-lg-12"><div class="btnConsul"><div class="tit fechas-error" ng-if="$ctrl.mensajeError != \'\'"><h3>{{$ctrl.mensajeError}}</h3></div><button class="btn btn-primary btn-block" type="submit">Descargar</button></div></div></div></form></div></div>');
$templateCache.put('app/admin/components/dominio/components/dominio/dominio.html','<div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3>CAMBIO DE DOMINIO A USUARIOS</h3></div></div></div></div><dominiolist limit="10" list="$ctrl.dominiobinding" roles="$ctrl.rolesbinding"></dominiolist>');
$templateCache.put('app/admin/components/dominio/components/dominiofilter/dominio.filter.html','<div class="boxAd"><form><div class="form-group"></div><div class="form-group"><div class="fil"><div class="titFil">Filtrar DOMINIO</div><ul><li><input type="radio" name="especifica" value="identificacion" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusquedaDocumento()"> <label for="especifica" class="css-label2">Identificaci\xF3n</label></li><div ng-if="$ctrl.especifica == \'identificacion\'"><li><label>Tipo de documento</label><select class="form-control" ng-model="$ctrl.tipoDocumento" ng-options="tipo.value as tipo.name for tipo in $ctrl.tipoDocumetosList"></select></li><li><input class="form-control" ng-class="{\'is-empty\':$ctrl.isEmpty}" placeholder="N\xFAmero de documento" lower-case="" type="text" ng-model="$ctrl.filtro" required=""></li></div><li><input type="radio" name="especifica" value="entidad" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusqueda()"> <label for="especifica" class="css-label2">Entidad</label></li><li ng-if="$ctrl.especifica == \'entidad\'"><input class="form-control" placeholder="Buscar" type="text" ng-model="$ctrl.filtro" required=""></li><li><input type="radio" name="especifica" value="usuario" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusqueda()"> <label for="especifica" class="css-label2">Usuario</label></li><li ng-if="$ctrl.especifica == \'usuario\'"><input class="form-control" placeholder="Buscar" type="text" ng-model="$ctrl.filtro" lower-case="" required=""></li><li><input type="radio" name="especifica" value="rol" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusquedaDocumento()"> <label for="especifica" class="css-label2">Rol</label></li><li ng-if="$ctrl.especifica == \'rol\'"><select class="form-control" ng-model="$ctrl.roleSeleccionado" ng-options="tipo.nombre as tipo.nombre for tipo in $ctrl.listaRoles"></select></li><li><input type="radio" name="especifica" value="estado" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusquedaDocumento()"> <label for="especifica" class="css-label2">Estado</label></li><li ng-if="$ctrl.especifica == \'estado\'"><select class="form-control" ng-model="$ctrl.estadoSelecionado" ng-options="estado.value as estado.name for estado in $ctrl.estadosList"></select></li></ul></div></div><div class="form-group"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.buscar()">Buscar</button></div></form></div>');
$templateCache.put('app/admin/components/dominio/components/dominioform/dominio-form.html','<div class="ti"><h2>USUARIOS</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3 ng-if="!$ctrl.edit">CREAR USUARIO</h3><h3 ng-if="$ctrl.edit">EDITAR USUARIO</h3></div></div></div></div><form role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="row"><div class="col-lg-12"><div class="forms"><div class="row"><div class="col-xs-6"><div class="form-group"><label>Tipo de documento</label><select class="form-control" ng-model="$ctrl.usuarioToSend.tipoDocumento" ng-change="$ctrl.tipoDocumentoCambio()" ng-options="tipo.value as tipo.name for tipo in $ctrl.tipoDocumetosList" ng-disabled="$ctrl.edit" ng-required="!$ctrl.edit"></select></div></div><div class="col-xs-6"><div class="form-group"><label>N\xFAmero de documento</label> <input class="form-control" name="numeroDocumento" ng-model="$ctrl.usuarioToSend.numeroDocumento" type="text" ng-pattern="$ctrl.usuarioRegex" ng-maxlength="15" ng-disabled="$ctrl.edit" lower-case="" ng-required="!$ctrl.edit"></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Nombres</label> <input class="form-control" name="nombres" ng-model="$ctrl.usuarioToSend.nombres" type="text" ng-maxlength="40" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" required=""></div></div><div class="col-xs-6"><div class="form-group"><label>Apellidos</label> <input class="form-control" name="apellidos" ng-model="$ctrl.usuarioToSend.apellidos" type="text" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" ng-maxlength="40" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>N\xFAmero telef\xF3nico</label> <input class="form-control" name="numeroTelefonico" ng-pattern="/^[0-9]*$/" ng-minlength="7" ng-maxlength="15" validation-msg-pattern="Este campo debe ser num\xE9rico." ng-model="$ctrl.usuarioToSend.numeroTelefonico" type="text" required=""></div></div><div class="col-xs-6"><div class="form-group"><label>Extensi\xF3n</label> <input class="form-control" ng-pattern="/^[0-9]*$/" ng-maxlength="7" validation-msg-pattern="Este campo debe ser num\xE9rico." name="extension" ng-model="$ctrl.usuarioToSend.extension" type="text"></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Entidad</label><select class="form-control" ng-model="$ctrl.usuarioToSend.entidad" ng-options="entidad.codigo as entidad.nombre for entidad in $ctrl.entidadesbinding" ng-disabled="$ctrl.edit" ng-required="!$ctrl.edit" ng-change="$ctrl.cambioEntidad()"><option value="">Seleccione</option></select></div></div><div class="col-xs-6"><div class="form-group"><label>Correo electr\xF3nico</label> <input class="form-control" type="email" name="correoElectronico" lower-case="" ng-maxlength="50" ng-pattern="/^[0-9-a-zA-Z-@-_-.]*$/" ng-disabled="$ctrl.edit" ng-model="$ctrl.usuarioToSend.correoElectronico" popover-placement="top" uib-popover-template="\'mail.html\'" popover-trigger="focus" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Rol</label><select class="form-control" ng-model="$ctrl.usuarioToSend.rol" ng-options="roles.nombre as roles.nombre for roles in $ctrl.rolesbinding" required=""><option value="">Seleccione</option></select></div></div><div class="col-xs-6"><div class="form-group"><label>Estado</label><select class="form-control" ng-model="$ctrl.usuarioToSend.estado" ng-options="estado.name as estado.name for estado in $ctrl.estadosList" required=""><option value="">Seleccione</option></select></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><input type="checkbox" name="usuarioApi" id="usuarioApi" class="css-checkbox" ng-model="$ctrl.usuarioToSend.usuarioApi"> <label for="usuarioApi" class="css-label btn-block" style="font-size: 16px; font-weight: bold;">Usuario API Client</label> <label style="font-size: 12px;"><span class="dow tooltips glyphicon glyphicon-info-sign"></span> Se debe marcar \xFAnicamente para usuarios de aplicaciones de software integradas a trav\xE9s del API de ACH Data.</label></div></div><div class="col-xs-6" ng-if="$ctrl.edit"><div class="form-group"><label>Observaci\xF3n</label> <input class="form-control" type="text" name="Observaci\xF3n" ng-model="$ctrl.usuarioToSend.observacion" ng-minlength="30" ng-maxlength="150" ng-required="$ctrl.getstate()" popover-placement="top" uib-popover-template="\'obs.html\'" popover-trigger="focus" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" maxlength="150"></div></div></div></div></div></div><div class="row"><div class="col-lg-12 text-center"><div class="btn-group"><button type="submit" class="btn btn-primary btn-block">Guardar</button></div></div></div></form><script id="mail.html" type="text/ng-template"><p>El correo corresponde a la cuenta corporativa de su entidad.</p></script><script id="obs.html" type="text/ng-template"><p>Este campo s\xF3lo es obligatorio al cambiar de estado inactivo a activo.</p></script>');
$templateCache.put('app/admin/components/dominio/components/dominioList/dominio-list.html','<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="boxAd center-block"><div class="row" ng-hide="$ctrl.enableUpdateUsers"><div class="col-sm-3"></div><div class="col-sm-3"><div class="form-group"><label class="text-right spaceDominio">Anterior dominio correo electr\xF3nico</label><select class="form-control" ng-model="$ctrl.dominioAnterior" ng-options="entidad.dominioCorreoEntidad as entidad.dominioCorreoEntidad for entidad in $ctrl.dominios" ng-change="$ctrl.changeBeforeDomain()"><option value="">Listado dominios anterior</option></select><div role="alert" class="validation ng-scope ng-inactive ng-hide" ng-show="field.$invalid &amp;&amp; (field.$touched || field.$dirty || form.$triedSubmit)" ng-messages="field.$error" aria-live="assertive" aria-hidden="true"></div></div></div><div class="col-sm-3"><div class="form-group"><label class="spaceDominio">Nuevo dominio correo electr\xF3nico</label><select class="form-control" ng-model="$ctrl.dominioNuevo" ng-options="entidad.dominioCorreoEntidad as entidad.dominioCorreoEntidad for entidad in $ctrl.dominios" ng-change="$ctrl.changeAfterDomain()"><option value="">Listado dominios nuevo</option></select></div></div><div class="col-sm-3"></div></div><div class="row" ng-hide="$ctrl.enableUpdateUsers"><div class="center-block centerSize"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.changeDomain()">Continuar</button></div></div><div class="row" ng-hide="!$ctrl.enableDomainList"><div class="col-sm-2"></div><div class="col-sm-8"><form role="form" ng-submit="$ctrl.saveDomains()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="subTit"><h4>Listado de Usuarios</h4></div><div class="tablaAd table-responsive"><table class="table table-striped" ng-show="$ctrl.usuarios.length"><thead><tr><th class="dominioTh">Anterior dominio</th><th class="dominioTh">Nuevo dominio</th></tr></thead><tbody><tr ng-repeat="article in $ctrl.resultadosPagina"><td ng-bind="article.usuarioOld" class="dominioTd" width="30%"></td><td class="dominioTd" width="70%"><div class="form-group col-sm-7"><input class="form-control" name="{{(($index + 1) + ($ctrl.pagina - 1) * 8) -1}}" type="text" id="{{(($index + 1) + ($ctrl.pagina - 1) * 8) -1}}" ng-model="$ctrl.changedUsers[(($index + 1) + ($ctrl.pagina - 1) * 8) -1].nameNew" ng-value="article.nameNew" ng-pattern="/^[0-9-a-zA-Z-_.]+$/" validation-msg-pattern="Para este campo, solo se permiten letras (a-z), n\xFAmeros (0-9), caracteres (- _ ) y puntos (.)." required=""></div><div class="col-sm-5 form-domain">@{{article.newDomain}}</div></td></tr></tbody></table><div class="" ng-hide="!$ctrl.loading">Cargando ...</div><div class="" ng-show="!$ctrl.loading && !$ctrl.usuarios.length"><p>No se encontr\xF3 informaci\xF3n asociada al usuario consultado. <strong></strong></p></div></div><paginacion pagina="$ctrl.pagina" change-page="$ctrl.changePage({pagina: pagina})" total-resultados="$ctrl.totalResultados" items-per-page="$ctrl.itemsPerPage"></paginacion><div class="row" ng-hide="!$ctrl.enableDomainList"><div class="center-block centerSize"><button type="submit" class="btn btn-primary btn-block"><i ng-hide="!$ctrl.cargue" class="glyphicon glyphicon-refresh glyphicon-spin"></i>&nbsp; Cambiar dominio</button></div></div></form></div><div class="col-sm-2"></div></div><div class="row" ng-hide="!$ctrl.enableUpdateUsers"><div class="col-sm-2"></div><div class="col-sm-8"><div class="subTit"><h4>Usuarios Actualizados</h4></div><div class="tablaAd table-responsive"><table class="table table-striped"><thead><tr><th class="dominioTh" width="20%">Entidad</th><th class="dominioTh" width="20%">Usuario</th><th class="dominioTh" width="20%">Estado</th><th class="dominioTh" width="40%">Mensaje</th></tr></thead><tbody><tr ng-repeat="article in $ctrl.resultadosPagina1"><td ng-bind="article.entidad" class="dominioTd"></td><td ng-bind="article.email" class="dominioTd"></td><td class="dominioTd"><span class="{{article.creado? \'badge-sucess\' : \'badge-error\'}}">{{article.creado? \'Actualizado\' : \'Error\'}}</span></td><td ng-bind="article.detalle" class="dominioTd"></td></tr></tbody></table><div class="" ng-hide="!$ctrl.loading">Cargando ...</div><div class="" ng-show="!$ctrl.loading && !$ctrl.infoCsv.length"><p>No se encontr\xF3 informaci\xF3n asociada al usuario consultado. <strong></strong></p></div></div><paginacion pagina="$ctrl.pagina1" change-page="$ctrl.changePage1({pagina: pagina})" total-resultados="$ctrl.totalResultados1" items-per-page="$ctrl.itemsPerPage1"></paginacion></div><div class="col-sm-2"></div></div><div class="row" ng-hide="!$ctrl.enableUpdateUsers"><div class="center-block centerSize"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.backDomain()">Regresar</button></div></div></div></div></div><script id="infocuenta.html" type="text/ng-template"><p> Su nombre de usuario corresponde a su cuenta de correo corporativa</p></script>');
$templateCache.put('app/admin/components/roles/components/roles/roles.html','<div class="ti"><h2>ROLES</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3>CONSULTAR ROLES</h3></div><div class="btnAd"><button show-authed="usuarios.rol.crear" type="button" class="btn btn-primary btn-block" ui-sref-active="active" ui-sref="layout.admin.rolesForm({ id: null })" ng-click="$ctrl.toggleEditar()"><span class="glyphicon glyphicon-plus"></span> Crear nuevo rol</button></div></div></div></div><roleslist limit="10"></roleslist>');
$templateCache.put('app/admin/components/roles/components/rolesfilter/roles.filter.html','<div class="boxAd"><form><div class="form-group"><input class="form-control" placeholder="Buscar" type="text" ng-model="$ctrl.nombre" required=""></div><div class="form-group"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.buscar()">Buscar</button></div></form></div>');
$templateCache.put('app/admin/components/roles/components/rolesList/roles-list.html','<div class="row"><div class="col-xs-3"><roles-filter></roles-filter></div><div class="col-xs-9"><div class="boxAd"><div class="subTit"><h4>Roles creados</h4></div><div class="tablaAd table-responsive" ng-show="$ctrl.roles.length"><table class="table table-striped"><thead><tr><th class="bold">Nombre del rol</th><th class="bold">Acciones</th></tr></thead><tbody><tr ng-repeat="rol in $ctrl.roles | orderBy:\'nombre\'"><td ng-bind="rol.nombre"></td><td><a show-authed="usuarios.rol.editar" ng-click="$ctrl.editarRol({rol: rol})" class="dow tooltips glyphicon glyphicon-eye-open" ng-if="!$ctrl.comprobarRol(rol.nombre)"><span>Ver Rol</span></a> <a show-authed="usuarios.rol.editar" ng-click="$ctrl.editarRol({rol: rol})" class="dow tooltips glyphicon glyphicon-pencil" ng-if="$ctrl.comprobarRol(rol.nombre)"><span>Editar Rol</span></a> &nbsp; <a show-authed="usuarios.rol.eliminar" ng-click="$ctrl.eliminarRol({rol: rol})" class="dow tooltips glyphicon glyphicon-remove" ng-if="$ctrl.comprobarRol(rol.nombre)"><span>Eliminar Rol</span></a></td></tr></tbody></table></div><div class="" ng-show="!$ctrl.roles.length"><p>No se encontr\xF3 informaci\xF3n relacionada con el nombre del rol ingresado.</p></div></div></div></div>');
$templateCache.put('app/admin/components/roles/components/rolesform/roles-form.html','<form role="form" ng-submit="$ctrl.crearRol()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="ti"><h2>ROLES</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3 ng-show="!$ctrl.editar">CREAR ROL</h3><h3 ng-show="$ctrl.editar && !$ctrl.bloquear">EDITAR ROL</h3><h3 ng-show="$ctrl.editar && $ctrl.bloquear">VER ROL</h3></div></div></div></div><div class="row"><div class="col-xs-5"><input class="form-control" placeholder="Escribe el nombre del rol" ng-model="$ctrl.nombreRol" ng-readonly="$ctrl.editar" maxlength="60" required=""></div><div class="col-xs-7"><div class="todos" ng-if="!$ctrl.bloquear"><div class="tx">Seleccionar todo</div><span><div class="onOff"><div class="switchCont"><label class="switch"><input type="checkbox" name="sel-todos" id="sel-todos" class="css-checkbox" ng-model="$ctrl.selectAll" ng-change="$ctrl.seleccionarTodos()"><div class="slider round"></div></label></div></div></span></div></div></div><div class="row"><div class="col-xs-12"><ul class="cheLi"><ng-repeat ng-repeat="permiso in $ctrl.permisos | orderBy: \'nombre\' track by permiso.recurso"><li><input type="checkbox" name="{{permiso.recurso}}" id="{{permiso.recurso}}" class="css-checkbox" ng-model="permiso.seleccionado" ng-change="$ctrl.cambioPermiso(permiso.seleccionado)" ng-disabled="$ctrl.bloquear"> <label for="{{permiso.recurso}}" class="no-cursor css-label btn-block" ng-if="$ctrl.bloquear">{{permiso.nombre}}</label> <label for="{{permiso.recurso}}" class="css-label btn-block" ng-if="!$ctrl.bloquear">{{permiso.nombre}}</label></li></ng-repeat></ul></div></div><div class="row"><div class="col-lg-12 text-center"><div class="btn-group"><button type="submit" class="btn btn-primary btn-block" ng-if="!$ctrl.bloquear">Guardar</button> <button ui-sref="layout.admin.roles" class="btn btn-primary btn-block" ng-if="$ctrl.bloquear">Volver</button></div></div></div></form>');
$templateCache.put('app/admin/components/entidad/components/entidad/entidad.html','<div class="ti"><h2>ENTIDADES</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3>CONSULTAR ENTIDADES</h3></div><div class="btnAd"><button show-authed="usuarios.entidad.crear" type="button" class="btn btn-primary btn-block" ui-sref-active="active" ui-sref="layout.admin.entidadForm({ id: null })"><span class="glyphicon glyphicon-plus"></span> Crear nueva entidad</button></div></div></div></div><entidadlist limit="10"></entidadlist>');
$templateCache.put('app/admin/components/entidad/components/entidadform/entidad-form.html','<div class="ti"><h2>ENTIDADES</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3><span ng-bind="$ctrl.title"></span> ENTIDAD</h3></div></div></div></div><form role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="row"><div class="col-lg-12"><div class="forms"><div class="row"><div class="col-xs-4"><div class="form-group"><label>Nombre Entidad</label> <input class="form-control" name="Nombre entidad" ng-pattern="/^[a-zA-Z0-9_ ]*$/" ng-model="$ctrl.entidadToSend.nombre" type="text" ng-maxlength="50" required=""></div></div><div class="col-xs-2"><div class="form-group"><label>C\xF3digo de Entidad</label><div ng-if="!$ctrl.edit"><input class="form-control" name="c\xF3digo entidad" ng-model="$ctrl.entidadToSend.codigoEntidad" type="text" ng-pattern="/^[a-zA-Z0-9-]*$/" ng-maxlength="20" unique-codigo="" ng-disabled="$ctrl.edit" required=""></div><div ng-if="$ctrl.edit"><input class="form-control" name="Codigo entidad" ng-model="$ctrl.entidadToSend.codigoEntidad" popover-placement="top" uib-popover-template="\'CodigoEntidad.html\'" popover-trigger="focus" type="text" ng-disabled="$ctrl.edit" required=""></div></div></div><div class="col-xs-2"><div class="form-group"><label>C\xF3digo ACH</label> <input class="form-control" name="Codigo ach" ng-model="$ctrl.entidadToSend.codigoAch" ng-model-options="{ debounce: 400 }" type="text" validation-msg-pattern="Este campo debe ser num\xE9rico." ng-pattern="/^[0-9]*$/" ng-maxlength="10" required=""></div></div><div class="col-xs-2"><div class="form-group" ng-if="!$ctrl.edit"><label>NIT Entidad</label> <input class="form-control" name="NIT Entidad" ng-pattern="/^[0-9]*$/" ng-model="$ctrl.entidadToSend.nit" ng-model-options="{ debounce: 400 }" unique-nit="" type="text" ng-disabled="$ctrl.edit" validation-msg-pattern="Este campo debe ser num\xE9rico." ng-maxlength="15" required=""></div><div class="form-group" ng-if="$ctrl.edit"><label>NIT Entidad</label> <input class="form-control" name="NIT Entidad" ng-model="$ctrl.entidadToSend.nit" type="text" ng-disabled="$ctrl.edit" ng-maxlength="15" required=""></div></div><div class="col-xs-2"><div class="form-group"><label>D\xEDgito de verificaci\xF3n</label> <input class="form-control" name="d\xEDgito de verificaci\xF3n" type="number" ng-model="$ctrl.entidadToSend.digitoVerificacion" ng-min="0" ng-max="9" ng-disabled="$ctrl.edit" required=""></div></div></div><div class="row"><div class="col-xs-3"><div class="form-group"><label>Departamento</label><select class="form-control" unique-codigo="" popover-placement="top" uib-popover-template="\'departamento.html\'" popover-trigger="focus" ng-change="$ctrl.setCiudad()" ng-model="$ctrl.entidadToSend.departamento" ng-options="departamento.codigoDepartamento as departamento.nombre for departamento in $ctrl.departamentosbinding" required=""><option value="">Seleccione</option></select></div></div><div class="col-xs-3"><div class="form-group"><label>Ciudad</label><select class="form-control" unique-codigo="" popover-placement="top" uib-popover-template="\'ciudad.html\'" popover-trigger="focus" ng-model="$ctrl.entidadToSend.ciudad" ng-options="ciudad.codigoCiudad as ciudad.nombre for ciudad in $ctrl.listciudades" required=""><option value="">Seleccione</option></select></div></div><div class="col-xs-6"><div class="form-group"><label>Direcci\xF3n Entidad</label> <input class="form-control" ng-model="$ctrl.entidadToSend.direccionEntidad" ng-maxlength="120" type="text" ng-pattern="/^[0-9-a-zA-Z-#-.-_ ]*$/" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Nombre Contacto</label> <input class="form-control" ng-model="$ctrl.entidadToSend.nombreContacto" type="text" ng-maxlength="100" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" required=""></div></div><div class="col-xs-4"><div class="form-group"><label>Correo electr\xF3nico contacto</label> <input class="form-control" ng-model="$ctrl.entidadToSend.correoContacto" ng-maxlength="45" type="email" lower-case="" required=""></div></div><div class="col-xs-2"><div class="form-group"><label>Tel\xE9fono contacto</label> <input class="form-control" ng-pattern="/^[0-9]*$/" ng-model="$ctrl.entidadToSend.telefonoContacto" ng-minlength="7" ng-maxlength="15" type="text" validation-msg-pattern="Este campo debe ser num\xE9rico." required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Estado</label><select class="form-control" ng-model="$ctrl.entidadToSend.estado" ng-options="tipo.value as tipo.name for tipo in $ctrl.EstadoEntidad" required=""><option value="">Seleccione</option></select></div></div><div class="col-xs-6"><div class="form-group" style="margin-top: 5%;"><input type="checkbox" name="checkRango" id="checkRango" class="css-checkbox" ng-model="$ctrl.checkRango"> <label for="checkRango" class="css-label-range btn-block">Visualizar salario/IBC por rangos en consultas consolidadas</label></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Dominio de correo electr\xF3nico entidad</label><div class="input-group"><input type="text" class="form-control" name="domain" ng-model="$ctrl.domain" ng-required="!$ctrl.entidadToSend.dominioCorreo.length" lower-case="" validation-msg-required="Agregar m\xEDnimo un dominio." aria-describedby="basic-addon2"> <span class="input-group-addon contAdd" id="basic-addon2"><div class="btnAdd btn" ng-click="$ctrl.addDomain($ctrl.domain)"><a class="prue"><i class="glyphicon glyphicon-plus iconW"></i></a></div></span></div></div></div><div class="col-xs-2"><div class="form-group"><label>C\xF3digo \xE1rea</label> <input class="form-control" ng-pattern="/^[0-9]*$/" name="codeArea" ng-model="$ctrl.codeArea" type="text" ng-minlength="2" ng-maxlength="2" validation-msg-pattern="Este campo debe estar en el rango 01-99."></div></div><div class="col-xs-4" style="padding-left: 0;"><div class="form-group"><label>Nombre \xE1rea</label><div class="input-group"><input class="form-control" name="Nombre \xE1rea o descripci\xF3n" ng-pattern="/^[0-9-a-zA-Z-\xF1\xD1_\xC1\xC9\xCD\xD3\xDA\xE1\xE9\xED\xF3\xFA-_-.]*$/" ng-model="$ctrl.nameArea" type="text" ng-maxlength="20"> <span class="input-group-addon contAdd"><div class="btnAdd btn" ng-click="$ctrl.addArea($ctrl.codeArea, $ctrl.nameArea)"><a class="prue"><i class="glyphicon glyphicon-plus iconW"></i></a></div></span></div></div></div></div><div class="row"><div class="col-xs-6"><ul class="list-group containerScroll"><li class="list-group-item" ng-repeat="domain in $ctrl.entidadToSend.dominioCorreo">{{domain}}</li></ul></div><div class="col-xs-6"><ul class="list-group containerScroll" ng-show="$ctrl.listAreas.length"><li class="list-group-item contentCenter" style="background-color: #F1F1F1;"><div class="elementArea">C\xF3digo \xE1rea</div><div class="elementArea">Nombre \xE1rea</div><div class="elementArea">Eliminar</div></li><li class="list-group-item contentCenter" ng-repeat="area in $ctrl.listAreas track by area.codigoArea | orderBy:\'codigoArea\'"><div class="elementArea">{{area.codigoArea}}</div><div class="elementArea" style="text-align: left;">{{area.nombreArea}}</div><div class="elementArea"><input type="checkbox" class="css-check" ng-model="area.estadoArea"> <input type="checkbox" class="css-checkbox" ng-model="area.estadoArea"> <label class="css-label-range"></label></div></li></ul></div></div></div></div></div><div class="row"><div class="col-lg-12 text-center"><div class="btn-group"><button ng-click="$ctrl.domain = \'\'" type="submit" class="btn btn-primary btn-block">Guardar</button></div></div></div></form><script id="CodigoEntidad.html" type="text/ng-template"><p> info </p></script><script id="departamento.html" type="text/ng-template"><p> Por favor colocar Departamento de la sede principal.</p></script><script id="ciudad.html" type="text/ng-template"><p>Por favor colocar Ciudad de la sede principal.</p></script>');
$templateCache.put('app/admin/components/entidad/components/entidadList/entidad-list.html','<div class="row"><div class="col-xs-3"><entidad-filter></entidad-filter></div><div class="col-xs-9"><div class="boxAd"><div class="subTit"><h4>Entidades creadas</h4></div><div class="tablaAd table-responsive"><table class="table table-striped" ng-show="$ctrl.list.length"><thead><tr><th>Nombre Entidad</th><th>NIT Entidad</th><th>C\xF3digo de Entidad</th><th>Acciones</th></tr></thead><tbody><tr ng-repeat="article in $ctrl.list track by article.codigo | orderBy:\'nombre\'"><td ng-bind="article.nombre"></td><td ng-bind="article.nit"></td><td ng-bind="article.codigo"></td><td><a show-authed="usuarios.entidad.editar" ui-sref="layout.admin.entidadForm({ id: article.codigo })" class="dow tooltips glyphicon glyphicon-pencil"><span>Editar Entidad</span></a></td></tr></tbody></table><div class="" ng-hide="!$ctrl.loading">Cargando ...</div><div class="" ng-show="!$ctrl.loading && !$ctrl.list.length"><p>No se encontraron resultados para la b\xFAsqueda realizada.<strong></strong></p></div></div></div></div></div><script id="editar.html" type="text/ng-template"><p>Editar</p></script>');
$templateCache.put('app/admin/components/entidad/components/entidadfilter/entidad.filter.html','<div class="boxAd"><form><div class="form-group"><input class="form-control" placeholder="Buscar" type="text" ng-model="$ctrl.filtro" required=""></div><div class="form-group"><div class="fil"><div class="titFil">Filtrar</div><ul><li><input type="radio" name="especifica" value="nombre" ng-model="$ctrl.especifica"> <label for="especifica" class="css-label2">Nombre entidad</label></li><li><input type="radio" name="especifica" value="nit" ng-model="$ctrl.especifica"> <label for="especifica" class="css-label2">NIT Entidad</label></li><li><input type="radio" name="especifica" value="codigo" ng-model="$ctrl.especifica"> <label for="especifica" class="css-label2">C\xF3digo de Entidad</label></li></ul></div></div><div class="form-group"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.setfilter()">Buscar</button></div></form></div>');
$templateCache.put('app/admin/components/usuarios/components/usuarios/usuarios.html','<div class="ti"><h2>USUARIOS</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3>CONSULTAR USUARIOS</h3></div><div class="btnAd"><button show-authed="usuarios.usuario.crear" type="button" class="btn btn-primary btn-block" ui-sref-active="active" ui-sref="layout.admin.usuariosForm({ id: null })"><span class="glyphicon glyphicon-plus"></span> Crear nuevo usuario</button></div></div></div></div><usuarioslist limit="10" list="$ctrl.usuariosbinding" roles="$ctrl.rolesbinding"></usuarioslist>');
$templateCache.put('app/admin/components/usuarios/components/usuariosfilter/usuarios.filter.html','<div class="boxAd"><form><div class="form-group"></div><div class="form-group"><div class="fil"><div class="titFil">Filtrar</div><ul><li><input type="radio" name="especifica" value="identificacion" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusquedaDocumento()"> <label for="especifica" class="css-label2">Identificaci\xF3n</label></li><div ng-if="$ctrl.especifica == \'identificacion\'"><li><label>Tipo de documento</label><select class="form-control" ng-model="$ctrl.tipoDocumento" ng-options="tipo.value as tipo.name for tipo in $ctrl.tipoDocumetosList"></select></li><li><input class="form-control" ng-class="{\'is-empty\':$ctrl.isEmpty}" placeholder="N\xFAmero de documento" lower-case="" type="text" ng-model="$ctrl.filtro" required=""></li></div><li><input type="radio" name="especifica" value="entidad" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusqueda()"> <label for="especifica" class="css-label2">Entidad</label></li><li ng-if="$ctrl.especifica == \'entidad\'"><input class="form-control" placeholder="Buscar" type="text" ng-model="$ctrl.filtro" required=""></li><li><input type="radio" name="especifica" value="usuario" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusqueda()"> <label for="especifica" class="css-label2">Usuario</label></li><li ng-if="$ctrl.especifica == \'usuario\'"><input class="form-control" placeholder="Buscar" type="text" ng-model="$ctrl.filtro" lower-case="" required=""></li><li><input type="radio" name="especifica" value="rol" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusquedaDocumento()"> <label for="especifica" class="css-label2">Rol</label></li><li ng-if="$ctrl.especifica == \'rol\'"><select class="form-control" ng-model="$ctrl.roleSeleccionado" ng-options="tipo.nombre as tipo.nombre for tipo in $ctrl.listaRoles"></select></li><li><input type="radio" name="especifica" value="estado" ng-model="$ctrl.especifica" ng-click="$ctrl.limpiarBusquedaDocumento()"> <label for="especifica" class="css-label2">Estado</label></li><li ng-if="$ctrl.especifica == \'estado\'"><select class="form-control" ng-model="$ctrl.estadoSelecionado" ng-options="estado.value as estado.name for estado in $ctrl.estadosList"></select></li></ul></div></div><div class="form-group"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.buscar()">Buscar</button></div></form></div>');
$templateCache.put('app/admin/components/usuarios/components/usuariosform/usuarios-form.html','<div class="ti"><h2>USUARIOS</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3 ng-if="!$ctrl.edit">CREAR USUARIO</h3><h3 ng-if="$ctrl.edit">EDITAR USUARIO</h3></div></div></div></div><form role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="row"><div class="col-lg-12"><div class="forms"><div class="row"><div class="col-xs-6"><div class="form-group"><label>Tipo de documento</label><select class="form-control" ng-model="$ctrl.usuarioToSend.tipoDocumento" ng-change="$ctrl.tipoDocumentoCambio()" ng-options="tipo.value as tipo.name for tipo in $ctrl.tipoDocumetosList" ng-disabled="$ctrl.edit" ng-required="!$ctrl.edit"></select></div></div><div class="col-xs-6"><div class="form-group"><label>N\xFAmero de documento</label> <input class="form-control" name="numeroDocumento" ng-model="$ctrl.usuarioToSend.numeroDocumento" type="text" ng-pattern="$ctrl.usuarioRegex" ng-maxlength="15" ng-disabled="$ctrl.edit" lower-case="" ng-required="!$ctrl.edit"></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Nombres</label> <input class="form-control" name="nombres" ng-model="$ctrl.usuarioToSend.nombres" type="text" ng-maxlength="40" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" required=""></div></div><div class="col-xs-6"><div class="form-group"><label>Apellidos</label> <input class="form-control" name="apellidos" ng-model="$ctrl.usuarioToSend.apellidos" type="text" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" ng-maxlength="40" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>N\xFAmero telef\xF3nico</label> <input class="form-control" name="numeroTelefonico" ng-pattern="/^[0-9]*$/" ng-minlength="7" ng-maxlength="15" validation-msg-pattern="Este campo debe ser num\xE9rico." ng-model="$ctrl.usuarioToSend.numeroTelefonico" type="text" required=""></div></div><div class="col-xs-6"><div class="form-group"><label>Extensi\xF3n</label> <input class="form-control" ng-pattern="/^[0-9]*$/" ng-maxlength="7" validation-msg-pattern="Este campo debe ser num\xE9rico." name="extension" ng-model="$ctrl.usuarioToSend.extension" type="text"></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Entidad</label><select class="form-control" ng-model="$ctrl.usuarioToSend.entidad" ng-options="entidad.codigo as entidad.nombre for entidad in $ctrl.entidadesbinding" ng-disabled="$ctrl.edit" ng-required="!$ctrl.edit" ng-change="$ctrl.cambioEntidad()"><option value="">Seleccione</option></select></div></div><div class="col-xs-6"><div class="form-group"><label>Correo electr\xF3nico</label> <input class="form-control" type="email" name="correoElectronico" lower-case="" ng-maxlength="50" ng-pattern="/^[0-9-a-zA-Z-@-_-.]*$/" ng-disabled="$ctrl.edit" ng-model="$ctrl.usuarioToSend.correoElectronico" popover-placement="top" uib-popover-template="\'mail.html\'" popover-trigger="focus" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Rol</label><select class="form-control" ng-model="$ctrl.usuarioToSend.rol" ng-options="roles.nombre as roles.nombre for roles in $ctrl.rolesbinding" required=""><option value="">Seleccione</option></select></div></div><div class="col-xs-6"><div class="form-group"><label>Estado</label><select class="form-control" ng-model="$ctrl.usuarioToSend.estado" ng-options="estado.name as estado.name for estado in $ctrl.estadosList" required=""><option value="">Seleccione</option></select></div></div></div><div class="row"><div class="col-xs-2"><div class="form-group"><label>C\xF3digo \xE1rea</label> <input class="form-control" name="codeArea" ng-model="$ctrl.usuarioToSend.codigoArea" type="text" ng-pattern="/^[0-9]*$/" ng-minlength="2" ng-maxlength="2" ng-disabled="true" validation-msg-pattern="Este campo debe estar en el rango 01-99."></div></div><div class="col-xs-4" style="padding-left: 0;"><div class="form-group"><label>Nombre \xE1rea</label><select class="form-control" ng-model="$ctrl.usuarioToSend.nombreArea" ng-options="area.nombreArea as area.nombreArea for area in $ctrl.areasbinding" ng-change="$ctrl.cambioArea()"><option value="">Seleccione</option></select></div></div><div class="col-xs-6" ng-if="$ctrl.edit"><div class="form-group"><label>Observaci\xF3n</label> <input class="form-control" type="text" name="Observaci\xF3n" ng-model="$ctrl.usuarioToSend.observacion" ng-minlength="30" ng-maxlength="150" ng-required="$ctrl.getstate()" popover-placement="top" uib-popover-template="\'obs.html\'" popover-trigger="focus" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" maxlength="150"></div></div><div class="col-xs-6" style="margin-top: 7px;"><div class="form-group"><input type="checkbox" name="usuarioApi" id="usuarioApi" class="css-checkbox" ng-model="$ctrl.usuarioToSend.usuarioApi"> <label for="usuarioApi" class="css-label btn-block" style="font-size: 16px; font-weight: bold;">Usuario API Client</label> <label style="font-size: 12px;"><span class="dow tooltips glyphicon glyphicon-info-sign"></span> Se debe marcar \xFAnicamente para usuarios de aplicaciones de software integradas a trav\xE9s del API de ACH Data.</label></div></div></div></div></div></div><div class="row"><div class="col-lg-12 text-center"><div class="btn-group"><button type="submit" class="btn btn-primary btn-block">Guardar</button></div></div></div></form><script id="mail.html" type="text/ng-template"><p>El correo corresponde a la cuenta corporativa de su entidad.</p></script><script id="obs.html" type="text/ng-template"><p>Este campo s\xF3lo es obligatorio al cambiar de estado inactivo a activo.</p></script>');
$templateCache.put('app/admin/components/usuarios/components/usuariosMasivas/usuarios-masivas.html','<div class="ti"><h2>USUARIOS</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3>CARGA MASIVA DE USUARIOS</h3></div><div class="btnAd"><a href="#" ng-click="$ctrl.descargarPlantilla()">{{\'action.download-template\' | translate}}</a></div></div></div></div><div class="boxPeri"><div class="row"><div class="col-md-3 col-md-offset-4"><input type="file" name="file" id="file" class="inputfile inputfile-1 ocul" accept=".csv" usuarios-file-reader="fileContent"> <label for="file" class="form-control btn-primary"><i class="glyphicon glyphicon-download-alt"></i><span ng-if="!$ctrl.nombreArchivo">Seleccione un archivo</span> <span ng-if="$ctrl.nombreArchivo" ng-bind="$ctrl.nombreArchivo">{{$ctrl.nombreArchivo}}</span></label></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><div class="btnConsul"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.cargar()">Cargar</button> <a ng-hide="true" id="link"></a></div></div></div></div>');
$templateCache.put('app/admin/components/usuarios/components/usuariosList/usuarios-list.html','<div class="row"><div class="col-xs-3"><usuarios-filter></usuarios-filter></div><div class="col-xs-9"><div class="boxAd"><div class="row"><div class="col-xs-10"><div class="subTit"><h4>Usuarios creados</h4></div></div><div class="col-xs-2"><button type="button" class="btn btn-primary btn-block" add-bom="true" ng-csv="$ctrl.infoCsv" filename="usuarios.csv" csv-header="$ctrl.csvHeaders">Descargar</button></div></div><div class="tablaAd table-responsive"><table class="table table-striped" ng-show="$ctrl.usuarios.length"><thead><tr><th>Entidad</th><th>Identificaci\xF3n</th><th>Nombre</th><th>Usuario</th><th>Rol</th><th>Estado</th><th>\xDAltimo Ingreso</th><th>Usuario API Client</th><th>Acciones</th></tr></thead><tbody><tr ng-repeat="article in $ctrl.resultadosPagina"><td ng-bind="article.entidad"></td><td ng-bind="article.identificacion"></td><td ng-bind="article.nombre"></td><td ng-bind="article.usuario"></td><td ng-bind="article.rol"></td><td ng-bind="article.estado"></td><td ng-bind="article.ultimoIngreso"></td><td><input type="checkbox" name="usuarioApi" id="usuarioApi" class="css-checkbox" ng-model="article.usuarioApi" disabled="true"> <label for="usuarioApi" class="css-label btn-block" style="max-width: 1px;"></label></td><td><a show-authed="usuarios.usuario.editar" ui-sref="layout.admin.usuariosForm({ id: article.identificacion})" class="dow tooltips glyphicon glyphicon-pencil"><span>Editar Usuario</span></a> <a show-authed="usuarios.usuario.crear" ng-click="$ctrl.obtenerUsuario(article.identificacion, article.ultimoIngreso )" class="dow tooltips glyphicon glyphicon-remove iconDelete"><span>Eliminar Usuario</span></a></td></tr></tbody></table><div class="" ng-hide="!$ctrl.loading">Cargando ...</div><div class="" ng-show="!$ctrl.loading && !$ctrl.usuarios.length"><p>No se encontr\xF3 informaci\xF3n asociada al usuario consultado. <strong></strong></p></div></div><paginacion pagina="$ctrl.pagina" change-page="$ctrl.changePage({pagina: pagina})" total-resultados="$ctrl.totalResultados" items-per-page="$ctrl.itemsPerPage"></paginacion></div></div></div>');
$templateCache.put('app/consulting/components/parametros/components/parametro/parametro.html','<div class="content-body"><div class="titGen"><h1>PAR\xC1METROS</h1></div><div class="container"><div class="adminUsu"><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3>PAR\xC1METROS CONSULTAS</h3></div></div></div></div><parametrolist limit="10"></parametrolist></div></div></div>');
$templateCache.put('app/consulting/components/parametros/components/parametroform/parametro-form.html','<div class="ti"><h2>PARAMETROS</h2></div><div class="row"><div class="col-lg-12"><div class="titBtn"><div class="titAd"><h3><span ng-bind="$ctrl.title"></span> ENTIDAD</h3></div></div></div></div><form role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="row"><div class="col-lg-12"><div class="forms"><div class="row"><div class="col-xs-4"><div class="form-group"><label>Nombre Entidad</label> <input class="form-control" name="Nombre entidad" ng-pattern="/^[a-zA-Z0-9_ ]*$/" ng-model="$ctrl.entidadToSend.nombre" type="text" ng-maxlength="50" required=""></div></div><div class="col-xs-4"><div class="form-group" ng-if="!$ctrl.edit"><label>NIT Entidad</label> <input class="form-control" name="NIT Entidad" ng-pattern="/^[0-9]*$/" ng-model="$ctrl.entidadToSend.nit" ng-model-options="{ debounce: 400 }" unique-nit="" type="text" ng-disabled="$ctrl.edit" validation-msg-pattern="Este campo debe ser num\xE9rico." ng-maxlength="15" required=""></div><div class="form-group" ng-if="$ctrl.edit"><label>NIT Entidad</label> <input class="form-control" name="NIT Entidad" ng-model="$ctrl.entidadToSend.nit" type="text" ng-disabled="$ctrl.edit" ng-maxlength="15" required=""></div></div><div class="col-xs-2"><div class="form-group"><label>D\xEDgito de verificaci\xF3n</label> <input class="form-control" name="d\xEDgito de verificaci\xF3n" type="number" ng-model="$ctrl.entidadToSend.digitoVerificacion" ng-min="0" ng-max="9" ng-disabled="$ctrl.edit" required=""></div></div></div><div class="row"><div class="col-xs-3"><div class="form-group"><label>C\xF3digo de Entidad</label><div class="input-group" ng-if="!$ctrl.edit"><input class="form-control" name="c\xF3digo entidad" ng-model="$ctrl.entidadToSend.codigoEntidad" type="text" ng-pattern="/^[a-zA-Z0-9-]*$/" ng-maxlength="20" unique-codigo="" ng-disabled="$ctrl.edit" required=""></div><div class="input-group" ng-if="$ctrl.edit"><input class="form-control" name="Codigo entidad" ng-model="$ctrl.entidadToSend.codigoEntidad" popover-placement="top" uib-popover-template="\'CodigoEntidad.html\'" popover-trigger="focus" type="text" ng-disabled="$ctrl.edit" required=""></div></div></div><div class="col-xs-3"><div class="form-group"><label>C\xF3digo ACH</label><div class="input-group" ng-if="!$ctrl.edit"><input class="form-control" name="c\xF3digo ach" ng-model="$ctrl.entidadToSend.codigoAch" ng-model-options="{ debounce: 400 }" type="text" ng-pattern="/^[a-zA-Z0-9-]*$/" ng-maxlength="20" unique-codigo="" required=""></div><div class="input-group" ng-if="$ctrl.edit"><input class="form-control" name="Codigo ach" ng-model="$ctrl.entidadToSend.codigoAch" popover-placement="top" uib-popover-template="\'CodigoAch.html\'" popover-trigger="focus" type="text" ng-disabled="$ctrl.edit" required=""></div></div></div><div class="col-xs-6"><div class="form-group"><label>Estado</label><select class="form-control" ng-model="$ctrl.entidadToSend.estado" ng-options="tipo.value as tipo.name for tipo in $ctrl.EstadoEntidad" required=""><option value="">Seleccione</option></select></div></div></div><div class="row"><div class="col-xs-3"><div class="form-group"><label>Departamento</label><select class="form-control" unique-codigo="" popover-placement="top" uib-popover-template="\'departamento.html\'" popover-trigger="focus" ng-change="$ctrl.setCiudad()" ng-model="$ctrl.entidadToSend.departamento" ng-options="departamento.codigoDepartamento as departamento.nombre for departamento in $ctrl.departamentosbinding" required=""><option value="">Seleccione</option></select></div></div><div class="col-xs-3"><div class="form-group"><label>Ciudad</label><select class="form-control" unique-codigo="" popover-placement="top" uib-popover-template="\'ciudad.html\'" popover-trigger="focus" ng-model="$ctrl.entidadToSend.ciudad" ng-options="ciudad.codigoCiudad as ciudad.nombre for ciudad in $ctrl.listciudades" required=""><option value="">Seleccione</option></select></div></div><div class="col-xs-6"><div class="form-group"><label>Direcci\xF3n Entidad</label> <input class="form-control" ng-model="$ctrl.entidadToSend.direccionEntidad" ng-maxlength="120" type="text" ng-pattern="/^[0-9-a-zA-Z-#-.-_ ]*$/" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Nombre Contacto</label> <input class="form-control" ng-model="$ctrl.entidadToSend.nombreContacto" type="text" ng-maxlength="100" ng-pattern="/^[a-zA-Z-\xF1\xD1_\xE1\xE9\xED\xF3\xFA ]*$/" required=""></div></div><div class="col-xs-4"><div class="form-group"><label>Correo electr\xF3nico contacto</label> <input class="form-control" ng-model="$ctrl.entidadToSend.correoContacto" ng-maxlength="45" type="email" lower-case="" required=""></div></div><div class="col-xs-2"><div class="form-group"><label>Tel\xE9fono contacto</label> <input class="form-control" ng-pattern="/^[0-9]*$/" ng-model="$ctrl.entidadToSend.telefonoContacto" ng-minlength="7" ng-maxlength="15" type="text" validation-msg-pattern="Este campo debe ser num\xE9rico." required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Dominio de correo electr\xF3nico entidad</label><div class="input-group"><input type="text" class="form-control" name="domain" ng-model="$ctrl.domain" ng-required="!$ctrl.entidadToSend.dominioCorreo.length" lower-case="" validation-msg-required="Agregar m\xEDnimo un dominio." aria-describedby="basic-addon2"> <span class="input-group-addon contAdd" id="basic-addon2"><div class="btnAdd btn" ng-click="$ctrl.addDomain($ctrl.domain)"><a class="prue"><i class="glyphicon glyphicon-plus iconW"></i></a></div></span></div></div></div></div><div class="row"><div class="col-xs-6"><ul class="list-group"><li class="list-group-item" ng-repeat="domain in $ctrl.entidadToSend.dominioCorreo">{{domain}}</li></ul></div><div class="col-xs-6"><div class="form-group"><input type="checkbox" name="usuarioApi" id="usuarioApi" class="css-checkbox" ng-model="$ctrl.checkRango"> <label for="usuarioApi" class="css-label btn-block">Visualizar salario/IBC por rangos en consultas consolidadas</label></div></div></div></div></div></div><div class="row"><div class="col-lg-12 text-center"><div class="btn-group"><button ng-click="$ctrl.domain = \'\'" type="submit" class="btn btn-primary btn-block">Guardar</button></div></div></div></form><script id="CodigoEntidad.html" type="text/ng-template"><p> info </p></script><script id="departamento.html" type="text/ng-template"><p> Por favor colocar Departamento de la sede principal.</p></script><script id="ciudad.html" type="text/ng-template"><p>Por favor colocar Ciudad de la sede principal.</p></script>');
$templateCache.put('app/consulting/components/parametros/components/parametrofilter/parametro.filter.html','<div class="boxAd"><form><div class="form-group"><input class="form-control" placeholder="Buscar" type="text" ng-model="$ctrl.filtro" required=""></div><div class="form-group"><div class="fil"><div class="titFil">Filtrar</div><ul><li><input type="radio" name="especifica" value="nombre" ng-model="$ctrl.especifica"> <label for="especifica" class="css-label2">Nombre entidad</label></li><li><input type="radio" name="especifica" value="nit" ng-model="$ctrl.especifica"> <label for="especifica" class="css-label2">NIT Entidad</label></li><li><input type="radio" name="especifica" value="codigo" ng-model="$ctrl.especifica"> <label for="especifica" class="css-label2">C\xF3digo de Entidad</label></li></ul></div></div><div class="form-group"><button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.setfilter()">Buscar</button></div></form></div>');
$templateCache.put('app/consulting/components/parametros/components/parametroList/parametro-list.html','<div class="row"><div class="col-md-8 col-md-offset-4"><form role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="row"><div class="col-lg-12"><div class="forms"><div class="row"><div class="col-xs-6"><div class="form-group"><label>Umbral rangos Salario e IBC (%)</label> <input class="form-control" name="umbralIBC" ng-model="$ctrl.umbrales.UMBRAL_RANGO_SALARIO_IBC" type="text" ng-maxlength="2" ng-pattern="/^[0-9]*$/" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><label>Umbral variaci\xF3n significativa de Salario (%)</label> <input class="form-control" name="umbralSalario" ng-model="$ctrl.umbrales.UMBRAL_VARIACION_SALARIAL" type="text" ng-maxlength="2" ng-pattern="/^[0-9]*$/" required=""></div></div></div><div class="row"><div class="col-xs-6"><div class="form-group"><div class="form-text"><label>Salario m\xEDnimo mensual legal vigente ($)</label> <input class="form-control" name="salarioMinimo" ng-model="$ctrl.umbrales.SMMLV" type="text" ng-pattern="/^[0-9]*$/" required=""></div></div></div></div><div class="row"><div class="col-xs-6"><label>Lista emails notificaci\xF3n</label><div class="form-group"><textarea class="form-control" name="listCorreos" ng-model="$ctrl.umbrales.LISTA_CORREOS_NOTIFICACION" type="text" ng-maxlength="240" ng-pattern="/^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]+)(, ?[\\w+-.%]+@[\\w-.]+\\.[A-Za-z]+)*$/" required="" rows="4"></textarea></div><label style="font-size: 12px;"><span class="dow tooltips glyphicon glyphicon-info-sign"></span> Ingrese los emails a los que desea enviar notificaci\xF3n de actualizaci\xF3n de par\xE1metros separados por coma y un espacio. Ejemplo: prueba1@ach.com.co, prueba2@gmail.com</label></div></div></div></div></div><div class="row"><div class="col-lg-6 text-center"><div class="btn-group"><button show-authed="consultas.parametro.editar" type="submit" class="btn btn-primary btn-block">Guardar</button></div></div></div></form></div></div><script id="editar.html" type="text/ng-template"><p>Editar</p></script>');
$templateCache.put('app/monitoring/components/migraciones/components/migraciones/migraciones.html','<div class="content-body"><div class="titGen"><h1>ESTADO PROCESO DE MIGRACI\xD3N</h1></div><div class="container"><div class="consul"><div class="row"><estado-migraciones></estado-migraciones></div></div></div></div>');
$templateCache.put('app/monitoring/components/migraciones/components/estado/estado.html','<style>\r\n    /* Center the loader */\r\n    #loader {\r\n    z-index: 1;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 4px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 4px solid #8cc63e;\r\n    width: 20px;\r\n    height: 20px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n    }\r\n    @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n    }\r\n    @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n    }\r\n    #myDiv {\r\n    display: none;\r\n    text-align: center;\r\n    }\r\n</style><div class="container"><div class="consul"><div class="row"><div class="col-lg-12"><div class="tabla"><table class="table table-striped"><thead><tr><th width="25%">Nombre</th><th width="55%">Informaci\xF3n</th><th width="10%" class="text-center">Refrescar</th><th width="10%" class="text-center">Estado</th></tr></thead><tbody ng-if="$ctrl.estadoError"><tr ng-if="!$ctrl.estadoSuccess"><td>Migraci\xF3n</td><td>Ingesti\xF3n desde SOI y cargue en base de datos ACH Data</td><td class="text-center"><a href="#" class="dow glyphicon glyphicon-refresh" ng-click="$ctrl.consultarProceso()"></a></td><td class="text-center"><div class="todos"><span><div class="onOff"><div class="switchCont"><label class="switch"><input type="checkbox" name="sel-todos" id="sel-todos" class="css-checkbox" ng-model="$ctrl.selectAll" ng-change="$ctrl.cambiarProceso($ctrl.selectAll)"><div class="slider round" ng-class="{\'on-checkbox\':$ctrl.selectAll, \'off-checkbox\': !$ctrl.selectAll }"></div></label></div></div></span></div></td></tr><tr ng-if="$ctrl.estadoSuccess" class="text-center"><td colspan="4"><i class="glyphicon glyphicon-remove-sign" aria-hidden="true"></i>&nbsp;&nbsp;No hay procesos disponibles</td></tr></tbody></table></div></div></div></div></div>');
$templateCache.put('app/monitoring/components/reintentar/components/reintentar/reintentar.html','<consulta-reintentar></consulta-reintentar>');
$templateCache.put('app/monitoring/components/reintentar/components/consultaReintentar/consultaReintentar.html','<div class="content-body"><div class="titGen"><h1>Consulta de Archivos de Planillas Migradas con Error</h1></div><div class="container"><div class="consul"><div class="row"><div class="col-md-10 col-md-offset-1"><form name="formIndividual" role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="col-sm-4"><div class="tit"><h3>Fecha de Referencia</h3></div><div class="box"><div class="form-group"><select class="form-control" ng-model="$ctrl.tipoArchivo" required="" ng-change="$ctrl.cambiarReferencia($ctrl.masterSelected)"><option value="pago" selected="selected">De Pago</option><option value="creacionSOI">De Creaci\xF3n SOI</option></select></div></div></div><div class="col-sm-8"><div class="tit"><h3>Periodo de Consulta</h3></div><div class="row"><div class="col-sm-6"><div class="box-reintentar"><div class="input-group form-group"><input type="text" class="form-control" uib-datepicker-popup="yyyy/MM/dd" ng-model="$ctrl.fechaInicio" is-open="$ctrl.showCalendar1" datepicker-options="$ctrl.dateOptions" ng-required="true" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar1()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="Ingrese fecha inicial" readonly="" required=""> <span class="input-group-btn"><button type="button" class="btn btn-default btn-calendar" ng-click="$ctrl.toggleCalendar1()"><i class="glyphicon glyphicon-calendar"></i></button></span></div></div></div><div class="col-sm-6"><div class="box-reintentar"><div class="input-group form-group"><input type="text" class="form-control" uib-datepicker-popup="yyyy/MM/dd" ng-model="$ctrl.fechaFin" is-open="$ctrl.showCalendar2" datepicker-options="$ctrl.dateOptions2" ng-required="true" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar2()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="Ingrese fecha final" readonly="" required=""> <span class="input-group-btn"><button type="button" class="btn btn-default btn-calendar" ng-click="$ctrl.toggleCalendar2()"><i class="glyphicon glyphicon-calendar"></i></button></span></div></div></div></div></div><div class="col-sm-4 col-md-offset-4"><div class="box"><div class="form-group"><button type="submit" class="btn btn-rad btn-block btn-primary">Buscar</button></div></div></div></form></div></div><div class="row"><div class="col-lg-12"><div class="form-group text-right boxDownload"><button ng-click="$ctrl.reintentarPlanilla(true, result)" type="button" class="btn btn-primary ml-4" ng-if="!$ctrl.estadoSuccess">Reintentar Migraci\xF3n</button> <button ng-click="$ctrl.descargarPlanilla()" type="button" class="btn btn-primary" ng-if="!$ctrl.estadoSuccess">Descargar</button></div></div></div><div class="row"><div class="col-lg-12"><div class="tabla table-responsive"><table class="table table-striped" ng-if="!$ctrl.estadoSuccess"><thead><tr><th class="text-center"><input type="checkbox" ng-model="$ctrl.masterSelected" name="list_name" class="css-checkboxd" value="m1" ng-change="$ctrl.checkUncheckAll($ctrl.masterSelected)"> <label for="list_name" class="css-label btn-block" style="max-width: 1px;"></label></th><th class="text-center">N\xFAmero<br>Planilla</th><th class="text-center">Tipo<br>Archivo</th><th class="text-center">ID<br>Aportante</th><th class="text-center">Fecha Pago</th><th class="text-center">Fecha Creaci\xF3n<br>SOI</th><th class="text-left">Nombre Archivo<br>Tipo I</th><th class="text-left">Nombre Archivo<br>Tipo A</th><th class="text-left">Descripci\xF3n<br>Error</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.resultadosPagina | orderBy: \'-numeroPlanilla\' track by $index"><td width="8%" class="text-center"><input type="checkbox" ng-model="result.isSelected" class="css-checkboxd" id="registry{{$index}}" value="{{result.isSelected}}" ng-change="$ctrl.isAllSelected(result.isSelected)"></td><td width="8%" class="text-center">{{result.numeroPlanilla}}</td><td width="8%" class="text-center">{{result.tipoArchivo}}</td><td width="8%" class="text-center">{{result.tpDocAportante}}{{result.nroDocAportante}}</td><td width="8%" class="text-center">{{result.fechaPago | date:\'yyyy-MM-dd\'}}</td><td width="10%" class="text-center">{{result.fechaCreacionSOI | date:\'yyyy-MM-dd\'}}</td><td width="15%" class="text-left">{{result.rutaArchivoI}}</td><td width="15%" class="text-left">{{result.rutaArchivoA}}</td><td width="20%" class="text-left"><div class="box-ellipsis"><p class="ellipsis">{{result.descripcionError}}</p><input type="text" value="{{result.descripcionError}}" id="myInput{{$index}}" style="display:none;"> <a href="#" ngclipboard="" class="dow tooltips glyphicon glyphicon glyphicon-copy" data-clipboard-text="{{result.descripcionError}}" ng-click="$ctrl.copyText($index)" ng-mouseout="$ctrl.outFunc($index)"><span id="myTooltip{{$index}}">Copiar</span></a></div></td></tr></tbody></table></div><paginacion pagina="$ctrl.pagina" change-page="$ctrl.changePage({pagina: pagina})" total-resultados="$ctrl.totalResultados" ng-if="!$ctrl.estadoSuccess" items-per-page="$ctrl.itemsPerPage"></paginacion></div></div></div></div></div><a ng-hide="true" id="link"></a>');
$templateCache.put('app/monitoring/components/reintentar/components/consultaReintentar/template.html','<p>\xBFEst\xE1 seguro que desea reintentar la migraci\xF3n de lo(s) archivo(s) seleccionado(s)?</p><br><p>Por favor ingrese una justificaci\xF3n.</p><input type="text" class="form-control" id="inputModalEliminar"><br><div class="ngdialog-buttons"><button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">Cancelar</button> <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">Aceptar</button></div>');
$templateCache.put('app/monitoring/components/consultas/components/consultas/consultas.html','<div class="content-body"><div class="titGen"><h1>CONSULTAS MONITOREO</h1></div><div class="container"><div class="consul"><div class="row"><div class="contMain"><div class="bg"></div><app-header selected="consultas"></app-header><consultas-formulario></consultas-formulario></div><div class="contGen"><div class="container"><consultas-resultados></consultas-resultados></div></div></div></div></div></div>');
$templateCache.put('app/monitoring/components/consultas/components/erroresConsulta/erroresConsulta.html','<div class="fadeAnimated" ng-if="$ctrl.mostrarErrores===true"><div class="er"><div class="row"><div class="col-sm-7"><div class="titGreen">{{\'consultas.errorDetail\' | translate}} {{$ctrl.proceso}}</div><div class="titGray">{{\'consultas.date\' | translate}} {{$ctrl.fecha}}</div></div><div class="col-sm-5"><div class="btnEr"><button type="button" class="btn btn-default" ng-click="$ctrl.descargarErrores()">{{\'action.download\' | translate}}</button> <button type="button" class="btn btn-primary" ng-click="$ctrl.reintentarErrores()" promise-btn="">{{\'action.retry\' | translate}}</button></div></div></div><div class="tableEr"><div class="table-responsive"><table class="table"><thead><tr><th><input type="checkbox" ng-model="$ctrl.selectAll" ng-change="$ctrl.seleccionarTodos()"></th><th>{{\'consultas.payrollNumber\' | translate}}</th><th ng-if="$ctrl.proceso === \'MINPS\'">{{\'consultas.payrollType\' | translate}}</th><th>{{\'consultas.routeI\' | translate}}</th><th>{{\'consultas.routeA\' | translate}}</th><th>{{\'consultas.errorDescription\' | translate}}</th><th ng-if="$ctrl.proceso === \'OINF\'">{{\'consultas.migrated\' | translate}}</th><th ng-if="$ctrl.proceso === \'MINPS\'">{{\'consultas.observation\' | translate}}</th><th ng-if="$ctrl.proceso === \'MINPS\'"></th><th></th></tr></thead><tbody><tr ng-repeat="error in $ctrl.erroresPagina track by $index"><td><input type="checkbox" ng-model="error.seleccionado" ng-checked="$ctrl.selectAll" ng-if="error.migrada === \'\' || error.migrada === null || error.migrada === undefined"></td><td>{{error.numeroPlanilla}}</td><td ng-if="$ctrl.proceso === \'MINPS\'">{{error.tipoPlanilla}}</td><td>{{error.rutaArchivoI}}</td><td>{{error.rutaArchivoA}}</td><td>{{error.descripcionError}}</td><td ng-if="$ctrl.proceso === \'OINF\'">{{error.migrada}}</td><td ng-if="$ctrl.proceso === \'MINPS\'"><textarea class="form-control" rows="1" ng-model="error.observacion"></textarea></td><td ng-if="$ctrl.proceso === \'MINPS\'"><button type="submit" class="btn btn-primary" ng-click="$ctrl.guardarObservacion(error, $ctrl.proceso)" promise-btn="">{{\'action.save\' | translate}}</button></td></tr></tbody></table></div><paginacion pagina="$ctrl.pagina" change-page="$ctrl.changePage({pagina: pagina})" total-resultados="$ctrl.totalResultados" items-per-page="$ctrl.itemsPerPage" configurable="true" change-items-per-page="$ctrl.changeItemsPerPage({itemsPerPage: itemsPerPage})"></paginacion></div></div></div>');
$templateCache.put('app/monitoring/components/consultas/components/formularioConsultas/formularioConsultas.html','<div class="headCont"><div class="tit" translate="">consultas.title</div><div class="busca"><div class="container"><div class="cont"><form role="form" name="customOptionsForm" ng-submit="$ctrl.submit()" ng-fab-form-options="customFormOptions" promise-btn=""><div class="form-group"><div class="campo"><select ng-model="$ctrl.tipoProceso" required="" ng-change="$ctrl.cambioProceso()"><option value="MINPS" selected="selected">MINPS</option><option value="OINF">OINF</option></select></div><div class="campo"><p class="input-group"><input type="text" class="form-control" uib-datepicker-popup="dd/MM/yyyy" ng-model="$ctrl.fechaInicio" is-open="$ctrl.showCalendar1" datepicker-options="$ctrl.dateOptions" ng-required="true" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar1()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="{{\'consultas.initialDate\' | translate}}" readonly="" required=""> <span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="$ctrl.toggleCalendar1()"><i class="glyphicon glyphicon-calendar"></i></button></span></p></div><div class="campo"><p class="input-group"><input type="text" class="form-control" uib-datepicker-popup="dd/MM/yyyy" ng-model="$ctrl.fechaFin" is-open="$ctrl.showCalendar2" datepicker-options="$ctrl.dateOptions2" ng-required="true" alt-input-formats="altInputFormats" ng-click="$ctrl.toggleCalendar2()" current-text="{{\'action.today\' | translate}}" clear-text="{{\'action.delete\' | translate}}" close-text="{{\'action.close\' | translate}}" placeholder="{{\'consultas.finalDate\' | translate}}" readonly="" required=""> <span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="$ctrl.toggleCalendar2()"><i class="glyphicon glyphicon-calendar"></i></button></span></p></div><div class="campo"><button type="submit" class="btn btn-primary"><img src="/assets/images/ico_busca.png" alt=""></button></div></div></form></div></div></div></div>');
$templateCache.put('app/monitoring/components/consultas/components/resultadoIndividual/resultadoIndividual.html','<li class="gridder-list" data-griddercontent="#gridder-content-1"><div class="itemCont"><div class="titulo" ng-if="$ctrl.resultado.tipoProceso===\'MINPS\'"><div class="fecha">{{\'consultas.minpsDate\' | translate}}</div><div class="dia">{{$ctrl.formatDate($ctrl.resultado.fechaPagoPlanillas)}}</div></div><div class="titulo" ng-if="$ctrl.resultado.tipoProceso!==\'MINPS\'"><div class="fecha">{{\'consultas.oinfDate\' | translate}}</div><div class="dia">{{$ctrl.formatDate($ctrl.resultado.fechaProcesado)}}</div></div><div class="fail" ng-if="$ctrl.resultado.tipoProceso===\'MINPS\'" ng-click="$ctrl.descargarMINPS()"><div class="text">MINPS {{\'consultas.available\' | translate}}</div><div class="num">{{$ctrl.resultado.disponibles}}</div></div><div class="fail" ng-if="$ctrl.resultado.tipoProceso!==\'MINPS\'"><div class="text">OINF {{\'consultas.available\' | translate}}</div><div class="text">{{$ctrl.resultado.disponibles}}</div></div><div class="fail"><div class="text">{{\'consultas.processed\' | translate}}</div><div class="text">{{$ctrl.resultado.procesados}}</div></div><div ng-if="$ctrl.resultado.tipoProceso===\'MINPS\'"><div class="fail" ng-if="$ctrl.resultado.revertidas>0" ng-click="$ctrl.toggleRevertidas()"><div class="text">{{\'consultas.reverted\' | translate}}</div><div class="num">{{$ctrl.resultado.revertidas}}</div></div><div class="fail" ng-if="$ctrl.resultado.revertidas===0"><div class="text">{{\'consultas.reverted\' | translate}}</div><div class="text">{{$ctrl.resultado.revertidas}}</div></div></div><div class="fail" ng-click="$ctrl.toggleErrores()" ng-if="$ctrl.resultado.conError>0" promise-btn=""><div class="text">{{\'consultas.errors\' | translate}}</div><div class="num">{{$ctrl.resultado.conError}}</div></div><div class="fail" ng-if="$ctrl.resultado.conError===0"><div class="text">{{\'consultas.errors\' | translate}}</div><div class="text">{{$ctrl.resultado.conError}}</div></div></div></li>');
$templateCache.put('app/monitoring/components/consultas/components/reversionesConsulta/reversionesConsulta.html','<div class="fadeAnimated" ng-if="$ctrl.mostrarRevertidas===true"><div class="er"><div class="row"><div class="col-sm-7"><div class="titGreen">{{\'consultas.revertionDetail\' | translate}} MINPS</div><div class="titGray">{{\'consultas.date\' | translate}} {{$ctrl.fecha}}</div></div></div><div class="tableEr"><div class="table-responsive"><table class="table"><thead><tr><th>{{\'consultas.payrollNumber\' | translate}}</th><th>{{\'consultas.contributorId\' | translate}}</th><th>{{\'consultas.motive\' | translate}}</th></tr></thead><tbody><tr ng-repeat="reversion in $ctrl.reversiones track by reversion.numeroDocumentoAportante || reversion.idPlanilla"><td style="color: #8cc63e">{{reversion.idPlanilla}}</td><td style="color: #444444">{{reversion.tipoDocumentoAportante}}{{reversion.numeroDocumentoAportante}}</td><td style="color: #444444">{{reversion.motivoReversion}}</td></tr></tbody></table></div></div></div></div>');
$templateCache.put('app/monitoring/components/consultas/components/resultados/resultados.html','<div class="exp"><div class="bot"><a href="#" class="tooltips"><span>{{\'action.download\' | translate}} PDF</span><img src="assets/images/ico_exp2.png" alt=""></a></div><div class="bot" ng-click="$ctrl.descargarCSV()"><a href="#" class="tooltips"><span>{{\'action.download\' | translate}} CSV</span><img src="assets/images/ico_exp.png" alt=""></a></div><div class="bot2">{{\'action.export\' | translate}}</div></div><div class="box"><ul class="gridder"><ng-repeat ng-repeat="resultado in $ctrl.resultadosPagina track by resultado.fechaPagoPlanillas || resultado.fechaProcesado"><consultas-resultado-individual resultado="resultado" indice="$index"></consultas-resultado-individual><div ng-if="($index +1) % 3 === 0 || $ctrl.totalResultados === (($index+1) + (($ctrl.pagina-1) * $ctrl.itemsPerPage))"><div><consultas-errores ng-if="resultado.tipoProceso!==\'MINPS\'" errores="$ctrl.errores" proceso="resultado.tipoProceso" fecha="resultado.fechaProcesado" indice="$index" global="$ctrl.totalResultados" items-per-page-global="$ctrl.itemsPerPage"></consultas-errores><consultas-errores ng-if="resultado.tipoProceso===\'MINPS\'" errores="$ctrl.errores" proceso="resultado.tipoProceso" fecha="resultado.fechaPagoPlanillas" indice="$index" global="$ctrl.totalResultados" items-per-page-global="$ctrl.itemsPerPage"></consultas-errores></div><div><consultas-reversiones ng-if="resultado.tipoProceso===\'MINPS\'" reversiones="$ctrl.revertidas" fecha="$resultado.fechaPagoPlanillas" indice="$index" global="$ctrl.totalResultados" items-per-page-global="$ctrl.itemsPerPage"></consultas-reversiones></div></div></ng-repeat></ul><paginacion pagina="$ctrl.pagina" change-page="$ctrl.changePage({pagina: pagina})" total-resultados="$ctrl.totalResultados" items-per-page="$ctrl.itemsPerPage"></paginacion></div>');
$templateCache.put('app/monitoring/components/reversiones/components/reversiones/reversiones.html','<consulta-reversiones></consulta-reversiones>');
$templateCache.put('app/monitoring/components/reversiones/components/consultaReversiones/consultaReversiones.html','<div class="content-body"><div class="titGen"><h1>Consulta de Archivos de Planilla Procesados</h1></div><div class="container"><div class="consul"><div class="row"><div class="col-md-8 col-md-offset-2"><form name="formIndividual" role="form" ng-submit="$ctrl.submitForm()" ng-fab-form="" ng-fab-form-options="customFormOptions" autocomplete="off"><div class="col-sm-6"><div class="tit"><h3>Tipo Archivo</h3></div><div class="box"><div class="form-group"><select class="form-control" ng-model="$ctrl.tipoArchivo" required=""><option value="MINPS" selected="selected">MINPS</option><option value="OINF">OINF</option></select></div></div></div><div class="col-sm-6"><div class="tit"><h3>N\xFAmero Planilla</h3></div><div class="box"><div class="form-group"><input class="form-control" placeholder="N\xFAmero" type="text" name="numeroDocumento" ng-model="$ctrl.numeroPlanilla" maxlength="1000" only-numbers="" required=""></div></div></div><div class="col-sm-4 col-md-offset-4"><div class="box"><div class="form-group"><button type="submit" class="btn btn-rad btn-block btn-primary">Buscar</button></div></div></div></form></div></div><div class="row"><div class="col-lg-12"><div class="form-group text-right boxDownload"><button ng-click="$ctrl.descargarPlanilla()" type="button" class="btn btn-primary" ng-if="!$ctrl.estadoSuccess">Descargar</button></div></div></div><div class="row"><div class="col-lg-12"><div class="tabla"><table class="table table-striped" ng-if="!$ctrl.estadoSuccess"><thead><tr><th class="text-center">N\xFAmero<br>Planilla</th><th class="text-center">Estado<br>Migraci\xF3n</th><th class="text-center">Tipo<br>Archivo</th><th class="text-center">ID<br>Aportante</th><th class="text-center">Valor<br>Planilla</th><th class="text-center">Fecha Pago</th><th class="text-center">Fecha Creaci\xF3n<br>SOI</th><th class="text-center">Fecha<br>Procesamiento</th><th class="text-center">Nombre Archivo<br>Tipo I</th><th class="text-center">Nombre Archivo<br>Tipo A</th><th class="text-center">Acciones</th></tr></thead><tbody><tr ng-repeat="result in $ctrl.resultsPlanillas | orderBy: \'-numeroPlanilla\' track by $index"><td style="width: 5%" class="text-center">{{result.numeroPlanilla}}</td><td style="width: 5%" class="text-center">{{result.estadoMigracion}}</td><td style="width: 14%" class="text-center">{{result.tipoArchivo}}</td><td style="width: 5%" class="text-center">{{result.tpDocAportante}}{{result.nroDocAportante}}</td><td style="width: 7%" class="text-center">{{result.valorPlanilla | currency:"$":0}}</td><td style="width: 8%" class="text-center">{{result.fechaPago | date:\'yyyy-MM-dd\'}}</td><td style="width: 8%" class="text-center">{{result.fechaCreacionSOI | date:\'yyyy-MM-dd\'}}</td><td style="width: 7%" class="text-center">{{result.fechaProcesamiento | date:\'yyyy-MM-dd\'}}</td><td style="width: 18%" class="text-left">{{result.rutaArchivoI}}</td><td style="width: 18%" class="text-left">{{result.rutaArchivoA}}</td><td class="text-center" style="width: 5%"><a href="#" ng-if="result.estadoMigracion == \'OK\'" class="dow tooltips glyphicon glyphicon-remove-sign" ng-click="$ctrl.eliminarPlanilla(true, result)"><span>Eliminar</span></a></td></tr></tbody></table></div></div></div></div></div></div><a ng-hide="true" id="link"></a>');
$templateCache.put('app/monitoring/components/reversiones/components/consultaReversiones/template.html','<p>\xBFEst\xE1 seguro que desea eliminar el archivo seleccionado?</p><br><p>Por favor ingrese una justificaci\xF3n.</p><input type="text" class="form-control" id="inputModalEliminar"><br><div class="ngdialog-buttons"><button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">Cancelar</button> <button type="button" class="ngdialog-button btn btn-primary" ng-click="confirm(1)">Aceptar</button></div>');}]);
//# sourceMappingURL=../maps/scripts/app-3860854158.js.map
