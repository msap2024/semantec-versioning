/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/inversify/es/annotation/decorator_utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/decorator_utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaggedDecorator": () => (/* binding */ createTaggedDecorator),
/* harmony export */   "decorate": () => (/* binding */ decorate),
/* harmony export */   "tagParameter": () => (/* binding */ tagParameter),
/* harmony export */   "tagProperty": () => (/* binding */ tagProperty)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/js */ "./node_modules/inversify/es/utils/js.js");



function targetIsConstructorFunction(target) {
    return target.prototype !== undefined;
}
function _throwIfMethodParameter(parameterName) {
    if (parameterName !== undefined) {
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.INVALID_DECORATOR_OPERATION);
    }
}
function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
    _throwIfMethodParameter(parameterName);
    _tagParameterOrProperty(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.TAGGED, annotationTarget, parameterIndex.toString(), metadata);
}
function tagProperty(annotationTarget, propertyName, metadata) {
    if (targetIsConstructorFunction(annotationTarget)) {
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.INVALID_DECORATOR_OPERATION);
    }
    _tagParameterOrProperty(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
}
function _ensureNoMetadataKeyDuplicates(metadata) {
    var metadatas = [];
    if (Array.isArray(metadata)) {
        metadatas = metadata;
        var duplicate = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getFirstArrayDuplicate)(metadatas.map(function (md) { return md.key; }));
        if (duplicate !== undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.DUPLICATED_METADATA + " " + duplicate.toString());
        }
    }
    else {
        metadatas = [metadata];
    }
    return metadatas;
}
function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
    var metadatas = _ensureNoMetadataKeyDuplicates(metadata);
    var paramsOrPropertiesMetadata = {};
    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
    }
    var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
    if (paramOrPropertyMetadata === undefined) {
        paramOrPropertyMetadata = [];
    }
    else {
        var _loop_1 = function (m) {
            if (metadatas.some(function (md) { return md.key === m.key; })) {
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.DUPLICATED_METADATA + " " + m.key.toString());
            }
        };
        for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
            var m = paramOrPropertyMetadata_1[_i];
            _loop_1(m);
        }
    }
    paramOrPropertyMetadata.push.apply(paramOrPropertyMetadata, metadatas);
    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}
function createTaggedDecorator(metadata) {
    return function (target, targetKey, indexOrPropertyDescriptor) {
        if (typeof indexOrPropertyDescriptor === "number") {
            tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
        }
        else {
            tagProperty(target, targetKey, metadata);
        }
    };
}
function _decorate(decorators, target) {
    Reflect.decorate(decorators, target);
}
function _param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function decorate(decorator, target, parameterIndexOrProperty) {
    if (typeof parameterIndexOrProperty === "number") {
        _decorate([_param(parameterIndexOrProperty, decorator)], target);
    }
    else if (typeof parameterIndexOrProperty === "string") {
        Reflect.decorate([decorator], target, parameterIndexOrProperty);
    }
    else {
        _decorate([decorator], target);
    }
}

//# sourceMappingURL=decorator_utils.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/inject.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/inject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inject": () => (/* binding */ inject)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _inject_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject_base */ "./node_modules/inversify/es/annotation/inject_base.js");


var inject = (0,_inject_base__WEBPACK_IMPORTED_MODULE_0__.injectBase)(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.INJECT_TAG);

//# sourceMappingURL=inject.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/inject_base.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/inject_base.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectBase": () => (/* binding */ injectBase)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function injectBase(metadataKey) {
    return function (serviceIdentifier) {
        return function (target, targetKey, indexOrPropertyDescriptor) {
            if (serviceIdentifier === undefined) {
                var className = typeof target === "function" ? target.name : target.constructor.name;
                throw new Error((0,_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.UNDEFINED_INJECT_ANNOTATION)(className));
            }
            return (0,_decorator_utils__WEBPACK_IMPORTED_MODULE_1__.createTaggedDecorator)(new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__.Metadata(metadataKey, serviceIdentifier))(target, targetKey, indexOrPropertyDescriptor);
        };
    };
}
//# sourceMappingURL=inject_base.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/injectable.js":
/*!************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/injectable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectable": () => (/* binding */ injectable)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");


function injectable() {
    return function (target) {
        if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.PARAM_TYPES, target)) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__.DUPLICATED_INJECTABLE_DECORATOR);
        }
        var types = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.DESIGN_PARAM_TYPES, target) || [];
        Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.PARAM_TYPES, types, target);
        return target;
    };
}

//# sourceMappingURL=injectable.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/lazy_service_identifier.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/lazy_service_identifier.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyServiceIdentifer": () => (/* binding */ LazyServiceIdentifer)
/* harmony export */ });
var LazyServiceIdentifer = (function () {
    function LazyServiceIdentifer(cb) {
        this._cb = cb;
    }
    LazyServiceIdentifer.prototype.unwrap = function () {
        return this._cb();
    };
    return LazyServiceIdentifer;
}());

//# sourceMappingURL=lazy_service_identifier.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/multi_inject.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/multi_inject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "multiInject": () => (/* binding */ multiInject)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _inject_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject_base */ "./node_modules/inversify/es/annotation/inject_base.js");


var multiInject = (0,_inject_base__WEBPACK_IMPORTED_MODULE_0__.injectBase)(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.MULTI_INJECT_TAG);

//# sourceMappingURL=multi_inject.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/named.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/annotation/named.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "named": () => (/* binding */ named)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function named(name) {
    return (0,_decorator_utils__WEBPACK_IMPORTED_MODULE_0__.createTaggedDecorator)(new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__.NAMED_TAG, name));
}

//# sourceMappingURL=named.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/optional.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/optional.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optional": () => (/* binding */ optional)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function optional() {
    return (0,_decorator_utils__WEBPACK_IMPORTED_MODULE_0__.createTaggedDecorator)(new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__.OPTIONAL_TAG, true));
}

//# sourceMappingURL=optional.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/post_construct.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/post_construct.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postConstruct": () => (/* binding */ postConstruct)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _property_event_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property_event_decorator */ "./node_modules/inversify/es/annotation/property_event_decorator.js");



var postConstruct = (0,_property_event_decorator__WEBPACK_IMPORTED_MODULE_0__.propertyEventDecorator)(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.POST_CONSTRUCT, _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__.MULTIPLE_POST_CONSTRUCT_METHODS);

//# sourceMappingURL=post_construct.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/pre_destroy.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/pre_destroy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preDestroy": () => (/* binding */ preDestroy)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _property_event_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property_event_decorator */ "./node_modules/inversify/es/annotation/property_event_decorator.js");



var preDestroy = (0,_property_event_decorator__WEBPACK_IMPORTED_MODULE_0__.propertyEventDecorator)(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.PRE_DESTROY, _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__.MULTIPLE_PRE_DESTROY_METHODS);

//# sourceMappingURL=pre_destroy.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/property_event_decorator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/property_event_decorator.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "propertyEventDecorator": () => (/* binding */ propertyEventDecorator)
/* harmony export */ });
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");

function propertyEventDecorator(eventKey, errorMessage) {
    return function () {
        return function (target, propertyKey) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata(eventKey, propertyKey);
            if (Reflect.hasOwnMetadata(eventKey, target.constructor)) {
                throw new Error(errorMessage);
            }
            Reflect.defineMetadata(eventKey, metadata, target.constructor);
        };
    };
}

//# sourceMappingURL=property_event_decorator.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/tagged.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/tagged.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagged": () => (/* binding */ tagged)
/* harmony export */ });
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");


function tagged(metadataKey, metadataValue) {
    return (0,_decorator_utils__WEBPACK_IMPORTED_MODULE_0__.createTaggedDecorator)(new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(metadataKey, metadataValue));
}

//# sourceMappingURL=tagged.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/target_name.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/target_name.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "targetName": () => (/* binding */ targetName)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function targetName(name) {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.NAME_TAG, name);
        (0,_decorator_utils__WEBPACK_IMPORTED_MODULE_2__.tagParameter)(target, targetKey, index, metadata);
    };
}

//# sourceMappingURL=target_name.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/unmanaged.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/unmanaged.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unmanaged": () => (/* binding */ unmanaged)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function unmanaged() {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.UNMANAGED_TAG, true);
        (0,_decorator_utils__WEBPACK_IMPORTED_MODULE_2__.tagParameter)(target, targetKey, index, metadata);
    };
}

//# sourceMappingURL=unmanaged.js.map

/***/ }),

/***/ "./node_modules/inversify/es/bindings/binding.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/bindings/binding.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Binding": () => (/* binding */ Binding)
/* harmony export */ });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");


var Binding = (function () {
    function Binding(serviceIdentifier, scope) {
        this.id = (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__.id)();
        this.activated = false;
        this.serviceIdentifier = serviceIdentifier;
        this.scope = scope;
        this.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.BindingTypeEnum.Invalid;
        this.constraint = function (request) { return true; };
        this.implementationType = null;
        this.cache = null;
        this.factory = null;
        this.provider = null;
        this.onActivation = null;
        this.onDeactivation = null;
        this.dynamicValue = null;
    }
    Binding.prototype.clone = function () {
        var clone = new Binding(this.serviceIdentifier, this.scope);
        clone.activated = (clone.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.BindingScopeEnum.Singleton) ? this.activated : false;
        clone.implementationType = this.implementationType;
        clone.dynamicValue = this.dynamicValue;
        clone.scope = this.scope;
        clone.type = this.type;
        clone.factory = this.factory;
        clone.provider = this.provider;
        clone.constraint = this.constraint;
        clone.onActivation = this.onActivation;
        clone.onDeactivation = this.onDeactivation;
        clone.cache = this.cache;
        return clone;
    };
    return Binding;
}());

//# sourceMappingURL=binding.js.map

/***/ }),

/***/ "./node_modules/inversify/es/bindings/binding_count.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/bindings/binding_count.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingCount": () => (/* binding */ BindingCount)
/* harmony export */ });
var BindingCount = {
    MultipleBindingsAvailable: 2,
    NoBindingsAvailable: 0,
    OnlyOneBindingAvailable: 1
};

//# sourceMappingURL=binding_count.js.map

/***/ }),

/***/ "./node_modules/inversify/es/constants/error_msgs.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/es/constants/error_msgs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMBIGUOUS_MATCH": () => (/* binding */ AMBIGUOUS_MATCH),
/* harmony export */   "ARGUMENTS_LENGTH_MISMATCH": () => (/* binding */ ARGUMENTS_LENGTH_MISMATCH),
/* harmony export */   "ASYNC_UNBIND_REQUIRED": () => (/* binding */ ASYNC_UNBIND_REQUIRED),
/* harmony export */   "CANNOT_UNBIND": () => (/* binding */ CANNOT_UNBIND),
/* harmony export */   "CIRCULAR_DEPENDENCY": () => (/* binding */ CIRCULAR_DEPENDENCY),
/* harmony export */   "CIRCULAR_DEPENDENCY_IN_FACTORY": () => (/* binding */ CIRCULAR_DEPENDENCY_IN_FACTORY),
/* harmony export */   "CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE": () => (/* binding */ CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE),
/* harmony export */   "CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE": () => (/* binding */ CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE),
/* harmony export */   "CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK": () => (/* binding */ CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK),
/* harmony export */   "CONTAINER_OPTIONS_MUST_BE_AN_OBJECT": () => (/* binding */ CONTAINER_OPTIONS_MUST_BE_AN_OBJECT),
/* harmony export */   "DUPLICATED_INJECTABLE_DECORATOR": () => (/* binding */ DUPLICATED_INJECTABLE_DECORATOR),
/* harmony export */   "DUPLICATED_METADATA": () => (/* binding */ DUPLICATED_METADATA),
/* harmony export */   "INVALID_BINDING_TYPE": () => (/* binding */ INVALID_BINDING_TYPE),
/* harmony export */   "INVALID_DECORATOR_OPERATION": () => (/* binding */ INVALID_DECORATOR_OPERATION),
/* harmony export */   "INVALID_FUNCTION_BINDING": () => (/* binding */ INVALID_FUNCTION_BINDING),
/* harmony export */   "INVALID_MIDDLEWARE_RETURN": () => (/* binding */ INVALID_MIDDLEWARE_RETURN),
/* harmony export */   "INVALID_TO_SELF_VALUE": () => (/* binding */ INVALID_TO_SELF_VALUE),
/* harmony export */   "KEY_NOT_FOUND": () => (/* binding */ KEY_NOT_FOUND),
/* harmony export */   "LAZY_IN_SYNC": () => (/* binding */ LAZY_IN_SYNC),
/* harmony export */   "MISSING_INJECTABLE_ANNOTATION": () => (/* binding */ MISSING_INJECTABLE_ANNOTATION),
/* harmony export */   "MISSING_INJECT_ANNOTATION": () => (/* binding */ MISSING_INJECT_ANNOTATION),
/* harmony export */   "MULTIPLE_POST_CONSTRUCT_METHODS": () => (/* binding */ MULTIPLE_POST_CONSTRUCT_METHODS),
/* harmony export */   "MULTIPLE_PRE_DESTROY_METHODS": () => (/* binding */ MULTIPLE_PRE_DESTROY_METHODS),
/* harmony export */   "NOT_IMPLEMENTED": () => (/* binding */ NOT_IMPLEMENTED),
/* harmony export */   "NOT_REGISTERED": () => (/* binding */ NOT_REGISTERED),
/* harmony export */   "NO_MORE_SNAPSHOTS_AVAILABLE": () => (/* binding */ NO_MORE_SNAPSHOTS_AVAILABLE),
/* harmony export */   "NULL_ARGUMENT": () => (/* binding */ NULL_ARGUMENT),
/* harmony export */   "ON_DEACTIVATION_ERROR": () => (/* binding */ ON_DEACTIVATION_ERROR),
/* harmony export */   "POST_CONSTRUCT_ERROR": () => (/* binding */ POST_CONSTRUCT_ERROR),
/* harmony export */   "PRE_DESTROY_ERROR": () => (/* binding */ PRE_DESTROY_ERROR),
/* harmony export */   "STACK_OVERFLOW": () => (/* binding */ STACK_OVERFLOW),
/* harmony export */   "UNDEFINED_INJECT_ANNOTATION": () => (/* binding */ UNDEFINED_INJECT_ANNOTATION)
/* harmony export */ });
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
var DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
var NULL_ARGUMENT = "NULL argument";
var KEY_NOT_FOUND = "Key Not Found";
var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
var UNDEFINED_INJECT_ANNOTATION = function (name) {
    return "@inject called with undefined this could mean that the class " + name + " has " +
        "a circular dependency problem. You can use a LazyServiceIdentifer to  " +
        "overcome this limitation.";
};
var CIRCULAR_DEPENDENCY = "Circular dependency found:";
var NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
var INVALID_BINDING_TYPE = "Invalid binding type:";
var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
var LAZY_IN_SYNC = function (key) { return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies."; };
var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " +
    "used as service identifier";
var INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " +
    "must be applied to the parameters of a class constructor or a class property.";
var ARGUMENTS_LENGTH_MISMATCH = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "The number of constructor arguments in the derived class " +
        (values[0] + " must be >= than the number of constructor arguments of its base class.");
};
var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " +
    "must be an object.";
var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " +
    "be a string ('singleton' or 'transient').";
var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " +
    "be a boolean";
var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must " +
    "be a boolean";
var MULTIPLE_PRE_DESTROY_METHODS = "Cannot apply @preDestroy decorator multiple times in the same class";
var MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
var ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
var POST_CONSTRUCT_ERROR = function (clazz, errorMessage) { return "@postConstruct error in class " + clazz + ": " + errorMessage; };
var PRE_DESTROY_ERROR = function (clazz, errorMessage) { return "@preDestroy error in class " + clazz + ": " + errorMessage; };
var ON_DEACTIVATION_ERROR = function (clazz, errorMessage) { return "onDeactivation() error in class " + clazz + ": " + errorMessage; };
var CIRCULAR_DEPENDENCY_IN_FACTORY = function (factoryType, serviceIdentifier) {
    return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with" +
        ("service identifier '" + serviceIdentifier + "'.");
};
var STACK_OVERFLOW = "Maximum call stack size exceeded";
//# sourceMappingURL=error_msgs.js.map

/***/ }),

/***/ "./node_modules/inversify/es/constants/literal_types.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/constants/literal_types.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingScopeEnum": () => (/* binding */ BindingScopeEnum),
/* harmony export */   "BindingTypeEnum": () => (/* binding */ BindingTypeEnum),
/* harmony export */   "TargetTypeEnum": () => (/* binding */ TargetTypeEnum)
/* harmony export */ });
var BindingScopeEnum = {
    Request: "Request",
    Singleton: "Singleton",
    Transient: "Transient"
};
var BindingTypeEnum = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider"
};
var TargetTypeEnum = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable"
};

//# sourceMappingURL=literal_types.js.map

/***/ }),

/***/ "./node_modules/inversify/es/constants/metadata_keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/constants/metadata_keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DESIGN_PARAM_TYPES": () => (/* binding */ DESIGN_PARAM_TYPES),
/* harmony export */   "INJECT_TAG": () => (/* binding */ INJECT_TAG),
/* harmony export */   "MULTI_INJECT_TAG": () => (/* binding */ MULTI_INJECT_TAG),
/* harmony export */   "NAMED_TAG": () => (/* binding */ NAMED_TAG),
/* harmony export */   "NAME_TAG": () => (/* binding */ NAME_TAG),
/* harmony export */   "NON_CUSTOM_TAG_KEYS": () => (/* binding */ NON_CUSTOM_TAG_KEYS),
/* harmony export */   "OPTIONAL_TAG": () => (/* binding */ OPTIONAL_TAG),
/* harmony export */   "PARAM_TYPES": () => (/* binding */ PARAM_TYPES),
/* harmony export */   "POST_CONSTRUCT": () => (/* binding */ POST_CONSTRUCT),
/* harmony export */   "PRE_DESTROY": () => (/* binding */ PRE_DESTROY),
/* harmony export */   "TAGGED": () => (/* binding */ TAGGED),
/* harmony export */   "TAGGED_PROP": () => (/* binding */ TAGGED_PROP),
/* harmony export */   "UNMANAGED_TAG": () => (/* binding */ UNMANAGED_TAG)
/* harmony export */ });
var NAMED_TAG = "named";
var NAME_TAG = "name";
var UNMANAGED_TAG = "unmanaged";
var OPTIONAL_TAG = "optional";
var INJECT_TAG = "inject";
var MULTI_INJECT_TAG = "multi_inject";
var TAGGED = "inversify:tagged";
var TAGGED_PROP = "inversify:tagged_props";
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";
var POST_CONSTRUCT = "post_construct";
var PRE_DESTROY = "pre_destroy";
function getNonCustomTagKeys() {
    return [
        INJECT_TAG,
        MULTI_INJECT_TAG,
        NAME_TAG,
        UNMANAGED_TAG,
        NAMED_TAG,
        OPTIONAL_TAG,
    ];
}
var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();
//# sourceMappingURL=metadata_keys.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/container.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/container/container.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _bindings_binding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bindings/binding */ "./node_modules/inversify/es/bindings/binding.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../planning/metadata_reader */ "./node_modules/inversify/es/planning/metadata_reader.js");
/* harmony import */ var _planning_planner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../planning/planner */ "./node_modules/inversify/es/planning/planner.js");
/* harmony import */ var _resolution_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resolution/resolver */ "./node_modules/inversify/es/resolution/resolver.js");
/* harmony import */ var _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../syntax/binding_to_syntax */ "./node_modules/inversify/es/syntax/binding_to_syntax.js");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/async */ "./node_modules/inversify/es/utils/async.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _container_snapshot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container_snapshot */ "./node_modules/inversify/es/container/container_snapshot.js");
/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lookup */ "./node_modules/inversify/es/container/lookup.js");
/* harmony import */ var _module_activation_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module_activation_store */ "./node_modules/inversify/es/container/module_activation_store.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};














var Container = (function () {
    function Container(containerOptions) {
        var options = containerOptions || {};
        if (typeof options !== "object") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
        }
        if (options.defaultScope === undefined) {
            options.defaultScope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.BindingScopeEnum.Transient;
        }
        else if (options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.BindingScopeEnum.Singleton &&
            options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.BindingScopeEnum.Transient &&
            options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.BindingScopeEnum.Request) {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
        }
        if (options.autoBindInjectable === undefined) {
            options.autoBindInjectable = false;
        }
        else if (typeof options.autoBindInjectable !== "boolean") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
        }
        if (options.skipBaseClassChecks === undefined) {
            options.skipBaseClassChecks = false;
        }
        else if (typeof options.skipBaseClassChecks !== "boolean") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
        }
        this.options = {
            autoBindInjectable: options.autoBindInjectable,
            defaultScope: options.defaultScope,
            skipBaseClassChecks: options.skipBaseClassChecks
        };
        this.id = (0,_utils_id__WEBPACK_IMPORTED_MODULE_2__.id)();
        this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_3__.Lookup();
        this._snapshots = [];
        this._middleware = null;
        this._activations = new _lookup__WEBPACK_IMPORTED_MODULE_3__.Lookup();
        this._deactivations = new _lookup__WEBPACK_IMPORTED_MODULE_3__.Lookup();
        this.parent = null;
        this._metadataReader = new _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_4__.MetadataReader();
        this._moduleActivationStore = new _module_activation_store__WEBPACK_IMPORTED_MODULE_5__.ModuleActivationStore();
    }
    Container.merge = function (container1, container2) {
        var containers = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            containers[_i - 2] = arguments[_i];
        }
        var container = new Container();
        var targetContainers = __spreadArray([container1, container2], containers, true).map(function (targetContainer) { return (0,_planning_planner__WEBPACK_IMPORTED_MODULE_6__.getBindingDictionary)(targetContainer); });
        var bindingDictionary = (0,_planning_planner__WEBPACK_IMPORTED_MODULE_6__.getBindingDictionary)(container);
        function copyDictionary(origin, destination) {
            origin.traverse(function (_key, value) {
                value.forEach(function (binding) {
                    destination.add(binding.serviceIdentifier, binding.clone());
                });
            });
        }
        targetContainers.forEach(function (targetBindingDictionary) {
            copyDictionary(targetBindingDictionary, bindingDictionary);
        });
        return container;
    };
    Container.prototype.load = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var getHelpers = this._getContainerModuleHelpersFactory();
        for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
            var currentModule = modules_1[_a];
            var containerModuleHelpers = getHelpers(currentModule.id);
            currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
        }
    };
    Container.prototype.loadAsync = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        getHelpers = this._getContainerModuleHelpersFactory();
                        _a = 0, modules_2 = modules;
                        _b.label = 1;
                    case 1:
                        if (!(_a < modules_2.length)) return [3, 4];
                        currentModule = modules_2[_a];
                        containerModuleHelpers = getHelpers(currentModule.id);
                        return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _a++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    Container.prototype.unload = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        modules.forEach(function (module) {
            var deactivations = _this._removeModuleBindings(module.id);
            _this._deactivateSingletons(deactivations);
            _this._removeModuleHandlers(module.id);
        });
    };
    Container.prototype.unloadAsync = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, modules_3, module_1, deactivations;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = 0, modules_3 = modules;
                        _b.label = 1;
                    case 1:
                        if (!(_a < modules_3.length)) return [3, 4];
                        module_1 = modules_3[_a];
                        deactivations = this._removeModuleBindings(module_1.id);
                        return [4, this._deactivateSingletonsAsync(deactivations)];
                    case 2:
                        _b.sent();
                        this._removeModuleHandlers(module_1.id);
                        _b.label = 3;
                    case 3:
                        _a++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    Container.prototype.bind = function (serviceIdentifier) {
        var scope = this.options.defaultScope || _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.BindingScopeEnum.Transient;
        var binding = new _bindings_binding__WEBPACK_IMPORTED_MODULE_7__.Binding(serviceIdentifier, scope);
        this._bindingDictionary.add(serviceIdentifier, binding);
        return new _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__.BindingToSyntax(binding);
    };
    Container.prototype.rebind = function (serviceIdentifier) {
        this.unbind(serviceIdentifier);
        return this.bind(serviceIdentifier);
    };
    Container.prototype.rebindAsync = function (serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.unbindAsync(serviceIdentifier)];
                    case 1:
                        _a.sent();
                        return [2, this.bind(serviceIdentifier)];
                }
            });
        });
    };
    Container.prototype.unbind = function (serviceIdentifier) {
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            this._deactivateSingletons(bindings);
        }
        this._removeServiceFromDictionary(serviceIdentifier);
    };
    Container.prototype.unbindAsync = function (serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            var bindings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._bindingDictionary.hasKey(serviceIdentifier)) return [3, 2];
                        bindings = this._bindingDictionary.get(serviceIdentifier);
                        return [4, this._deactivateSingletonsAsync(bindings)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this._removeServiceFromDictionary(serviceIdentifier);
                        return [2];
                }
            });
        });
    };
    Container.prototype.unbindAll = function () {
        var _this = this;
        this._bindingDictionary.traverse(function (_key, value) {
            _this._deactivateSingletons(value);
        });
        this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_3__.Lookup();
    };
    Container.prototype.unbindAllAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        this._bindingDictionary.traverse(function (_key, value) {
                            promises.push(_this._deactivateSingletonsAsync(value));
                        });
                        return [4, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_3__.Lookup();
                        return [2];
                }
            });
        });
    };
    Container.prototype.onActivation = function (serviceIdentifier, onActivation) {
        this._activations.add(serviceIdentifier, onActivation);
    };
    Container.prototype.onDeactivation = function (serviceIdentifier, onDeactivation) {
        this._deactivations.add(serviceIdentifier, onDeactivation);
    };
    Container.prototype.isBound = function (serviceIdentifier) {
        var bound = this._bindingDictionary.hasKey(serviceIdentifier);
        if (!bound && this.parent) {
            bound = this.parent.isBound(serviceIdentifier);
        }
        return bound;
    };
    Container.prototype.isCurrentBound = function (serviceIdentifier) {
        return this._bindingDictionary.hasKey(serviceIdentifier);
    };
    Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
        return this.isBoundTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__.NAMED_TAG, named);
    };
    Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
        var bound = false;
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            var request_1 = (0,_planning_planner__WEBPACK_IMPORTED_MODULE_6__.createMockRequest)(this, serviceIdentifier, key, value);
            bound = bindings.some(function (b) { return b.constraint(request_1); });
        }
        if (!bound && this.parent) {
            bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
        }
        return bound;
    };
    Container.prototype.snapshot = function () {
        this._snapshots.push(_container_snapshot__WEBPACK_IMPORTED_MODULE_10__.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
    };
    Container.prototype.restore = function () {
        var snapshot = this._snapshots.pop();
        if (snapshot === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.NO_MORE_SNAPSHOTS_AVAILABLE);
        }
        this._bindingDictionary = snapshot.bindings;
        this._activations = snapshot.activations;
        this._deactivations = snapshot.deactivations;
        this._middleware = snapshot.middleware;
        this._moduleActivationStore = snapshot.moduleActivationStore;
    };
    Container.prototype.createChild = function (containerOptions) {
        var child = new Container(containerOptions || this.options);
        child.parent = this;
        return child;
    };
    Container.prototype.applyMiddleware = function () {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        var initial = (this._middleware) ? this._middleware : this._planAndResolve();
        this._middleware = middlewares.reduce(function (prev, curr) { return curr(prev); }, initial);
    };
    Container.prototype.applyCustomMetadataReader = function (metadataReader) {
        this._metadataReader = metadataReader;
    };
    Container.prototype.get = function (serviceIdentifier) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, false);
        return this._getButThrowIfAsync(getArgs);
    };
    Container.prototype.getAsync = function (serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            var getArgs;
            return __generator(this, function (_a) {
                getArgs = this._getNotAllArgs(serviceIdentifier, false);
                return [2, this._get(getArgs)];
            });
        });
    };
    Container.prototype.getTagged = function (serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
        return this._getButThrowIfAsync(getArgs);
    };
    Container.prototype.getTaggedAsync = function (serviceIdentifier, key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var getArgs;
            return __generator(this, function (_a) {
                getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
                return [2, this._get(getArgs)];
            });
        });
    };
    Container.prototype.getNamed = function (serviceIdentifier, named) {
        return this.getTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__.NAMED_TAG, named);
    };
    Container.prototype.getNamedAsync = function (serviceIdentifier, named) {
        return this.getTaggedAsync(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__.NAMED_TAG, named);
    };
    Container.prototype.getAll = function (serviceIdentifier) {
        var getArgs = this._getAllArgs(serviceIdentifier);
        return this._getButThrowIfAsync(getArgs);
    };
    Container.prototype.getAllAsync = function (serviceIdentifier) {
        var getArgs = this._getAllArgs(serviceIdentifier);
        return this._getAll(getArgs);
    };
    Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
        return this._getButThrowIfAsync(getArgs);
    };
    Container.prototype.getAllTaggedAsync = function (serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
        return this._getAll(getArgs);
    };
    Container.prototype.getAllNamed = function (serviceIdentifier, named) {
        return this.getAllTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__.NAMED_TAG, named);
    };
    Container.prototype.getAllNamedAsync = function (serviceIdentifier, named) {
        return this.getAllTaggedAsync(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__.NAMED_TAG, named);
    };
    Container.prototype.resolve = function (constructorFunction) {
        var isBound = this.isBound(constructorFunction);
        if (!isBound) {
            this.bind(constructorFunction).toSelf();
        }
        var resolved = this.get(constructorFunction);
        if (!isBound) {
            this.unbind(constructorFunction);
        }
        return resolved;
    };
    Container.prototype._preDestroy = function (constructor, instance) {
        if (Reflect.hasMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__.PRE_DESTROY, constructor)) {
            var data = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_9__.PRE_DESTROY, constructor);
            return instance[data.value]();
        }
    };
    Container.prototype._removeModuleHandlers = function (moduleId) {
        var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
        this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
        this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
    };
    Container.prototype._removeModuleBindings = function (moduleId) {
        return this._bindingDictionary.removeByCondition(function (binding) { return binding.moduleId === moduleId; });
    };
    Container.prototype._deactivate = function (binding, instance) {
        var _this = this;
        var constructor = Object.getPrototypeOf(instance).constructor;
        try {
            if (this._deactivations.hasKey(binding.serviceIdentifier)) {
                var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
                if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_11__.isPromise)(result)) {
                    return this._handleDeactivationError(result.then(function () { return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor); }), constructor);
                }
            }
            var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
            if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_11__.isPromise)(propagateDeactivationResult)) {
                return this._handleDeactivationError(propagateDeactivationResult, constructor);
            }
        }
        catch (ex) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.ON_DEACTIVATION_ERROR(constructor.name, ex.message));
        }
    };
    Container.prototype._handleDeactivationError = function (asyncResult, constructor) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, asyncResult];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        ex_1 = _a.sent();
                        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
                    case 3: return [2];
                }
            });
        });
    };
    Container.prototype._deactivateContainer = function (instance, deactivationsIterator) {
        var _this = this;
        var deactivation = deactivationsIterator.next();
        while (deactivation.value) {
            var result = deactivation.value(instance);
            if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_11__.isPromise)(result)) {
                return result.then(function () {
                    return _this._deactivateContainerAsync(instance, deactivationsIterator);
                });
            }
            deactivation = deactivationsIterator.next();
        }
    };
    Container.prototype._deactivateContainerAsync = function (instance, deactivationsIterator) {
        return __awaiter(this, void 0, void 0, function () {
            var deactivation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deactivation = deactivationsIterator.next();
                        _a.label = 1;
                    case 1:
                        if (!deactivation.value) return [3, 3];
                        return [4, deactivation.value(instance)];
                    case 2:
                        _a.sent();
                        deactivation = deactivationsIterator.next();
                        return [3, 1];
                    case 3: return [2];
                }
            });
        });
    };
    Container.prototype._getContainerModuleHelpersFactory = function () {
        var _this = this;
        var setModuleId = function (bindingToSyntax, moduleId) {
            bindingToSyntax._binding.moduleId = moduleId;
        };
        var getBindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var bindingToSyntax = _this.bind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        var getUnbindFunction = function () {
            return function (serviceIdentifier) {
                return _this.unbind(serviceIdentifier);
            };
        };
        var getUnbindAsyncFunction = function () {
            return function (serviceIdentifier) {
                return _this.unbindAsync(serviceIdentifier);
            };
        };
        var getIsboundFunction = function () {
            return function (serviceIdentifier) {
                return _this.isBound(serviceIdentifier);
            };
        };
        var getRebindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var bindingToSyntax = _this.rebind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        var getOnActivationFunction = function (moduleId) {
            return function (serviceIdentifier, onActivation) {
                _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
                _this.onActivation(serviceIdentifier, onActivation);
            };
        };
        var getOnDeactivationFunction = function (moduleId) {
            return function (serviceIdentifier, onDeactivation) {
                _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
                _this.onDeactivation(serviceIdentifier, onDeactivation);
            };
        };
        return function (mId) { return ({
            bindFunction: getBindFunction(mId),
            isboundFunction: getIsboundFunction(),
            onActivationFunction: getOnActivationFunction(mId),
            onDeactivationFunction: getOnDeactivationFunction(mId),
            rebindFunction: getRebindFunction(mId),
            unbindFunction: getUnbindFunction(),
            unbindAsyncFunction: getUnbindAsyncFunction()
        }); };
    };
    Container.prototype._getAll = function (getArgs) {
        return Promise.all(this._get(getArgs));
    };
    Container.prototype._get = function (getArgs) {
        var planAndResolveArgs = __assign(__assign({}, getArgs), { contextInterceptor: function (context) { return context; }, targetType: _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__.TargetTypeEnum.Variable });
        if (this._middleware) {
            var middlewareResult = this._middleware(planAndResolveArgs);
            if (middlewareResult === undefined || middlewareResult === null) {
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.INVALID_MIDDLEWARE_RETURN);
            }
            return middlewareResult;
        }
        return this._planAndResolve()(planAndResolveArgs);
    };
    Container.prototype._getButThrowIfAsync = function (getArgs) {
        var result = this._get(getArgs);
        if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_11__.isPromiseOrContainsPromise)(result)) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.LAZY_IN_SYNC(getArgs.serviceIdentifier));
        }
        return result;
    };
    Container.prototype._getAllArgs = function (serviceIdentifier) {
        var getAllArgs = {
            avoidConstraints: true,
            isMultiInject: true,
            serviceIdentifier: serviceIdentifier,
        };
        return getAllArgs;
    };
    Container.prototype._getNotAllArgs = function (serviceIdentifier, isMultiInject, key, value) {
        var getNotAllArgs = {
            avoidConstraints: false,
            isMultiInject: isMultiInject,
            serviceIdentifier: serviceIdentifier,
            key: key,
            value: value,
        };
        return getNotAllArgs;
    };
    Container.prototype._planAndResolve = function () {
        var _this = this;
        return function (args) {
            var context = (0,_planning_planner__WEBPACK_IMPORTED_MODULE_6__.plan)(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
            context = args.contextInterceptor(context);
            var result = (0,_resolution_resolver__WEBPACK_IMPORTED_MODULE_12__.resolve)(context);
            return result;
        };
    };
    Container.prototype._deactivateIfSingleton = function (binding) {
        var _this = this;
        if (!binding.activated) {
            return;
        }
        if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_11__.isPromise)(binding.cache)) {
            return binding.cache.then(function (resolved) { return _this._deactivate(binding, resolved); });
        }
        return this._deactivate(binding, binding.cache);
    };
    Container.prototype._deactivateSingletons = function (bindings) {
        for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
            var binding = bindings_1[_i];
            var result = this._deactivateIfSingleton(binding);
            if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_11__.isPromise)(result)) {
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.ASYNC_UNBIND_REQUIRED);
            }
        }
    };
    Container.prototype._deactivateSingletonsAsync = function (bindings) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Promise.all(bindings.map(function (b) { return _this._deactivateIfSingleton(b); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Container.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function (binding, instance, constructor) {
        if (this.parent) {
            return this._deactivate.bind(this.parent)(binding, instance);
        }
        else {
            return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
        }
    };
    Container.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function (binding, instance, constructor) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.parent) return [3, 2];
                        return [4, this._deactivate.bind(this.parent)(binding, instance)];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    Container.prototype._removeServiceFromDictionary = function (serviceIdentifier) {
        try {
            this._bindingDictionary.remove(serviceIdentifier);
        }
        catch (e) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.CANNOT_UNBIND + " " + (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_13__.getServiceIdentifierAsString)(serviceIdentifier));
        }
    };
    Container.prototype._bindingDeactivationAndPreDestroy = function (binding, instance, constructor) {
        var _this = this;
        if (typeof binding.onDeactivation === "function") {
            var result = binding.onDeactivation(instance);
            if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_11__.isPromise)(result)) {
                return result.then(function () { return _this._preDestroy(constructor, instance); });
            }
        }
        return this._preDestroy(constructor, instance);
    };
    Container.prototype._bindingDeactivationAndPreDestroyAsync = function (binding, instance, constructor) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof binding.onDeactivation === "function")) return [3, 2];
                        return [4, binding.onDeactivation(instance)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this._preDestroy(constructor, instance)];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return Container;
}());

//# sourceMappingURL=container.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/container_module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/container/container_module.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncContainerModule": () => (/* binding */ AsyncContainerModule),
/* harmony export */   "ContainerModule": () => (/* binding */ ContainerModule)
/* harmony export */ });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");

var ContainerModule = (function () {
    function ContainerModule(registry) {
        this.id = (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__.id)();
        this.registry = registry;
    }
    return ContainerModule;
}());

var AsyncContainerModule = (function () {
    function AsyncContainerModule(registry) {
        this.id = (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__.id)();
        this.registry = registry;
    }
    return AsyncContainerModule;
}());

//# sourceMappingURL=container_module.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/container_snapshot.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inversify/es/container/container_snapshot.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerSnapshot": () => (/* binding */ ContainerSnapshot)
/* harmony export */ });
var ContainerSnapshot = (function () {
    function ContainerSnapshot() {
    }
    ContainerSnapshot.of = function (bindings, middleware, activations, deactivations, moduleActivationStore) {
        var snapshot = new ContainerSnapshot();
        snapshot.bindings = bindings;
        snapshot.middleware = middleware;
        snapshot.deactivations = deactivations;
        snapshot.activations = activations;
        snapshot.moduleActivationStore = moduleActivationStore;
        return snapshot;
    };
    return ContainerSnapshot;
}());

//# sourceMappingURL=container_snapshot.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/lookup.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/container/lookup.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lookup": () => (/* binding */ Lookup)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _utils_clonable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/clonable */ "./node_modules/inversify/es/utils/clonable.js");


var Lookup = (function () {
    function Lookup() {
        this._map = new Map();
    }
    Lookup.prototype.getMap = function () {
        return this._map;
    };
    Lookup.prototype.add = function (serviceIdentifier, value) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.NULL_ARGUMENT);
        }
        if (value === null || value === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            entry.push(value);
        }
        else {
            this._map.set(serviceIdentifier, [value]);
        }
    };
    Lookup.prototype.get = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            return entry;
        }
        else {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.remove = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.NULL_ARGUMENT);
        }
        if (!this._map.delete(serviceIdentifier)) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.removeIntersection = function (lookup) {
        var _this = this;
        this.traverse(function (serviceIdentifier, value) {
            var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : undefined;
            if (lookupActivations !== undefined) {
                var filteredValues = value.filter(function (lookupValue) {
                    return !lookupActivations.some(function (moduleActivation) { return lookupValue === moduleActivation; });
                });
                _this._setValue(serviceIdentifier, filteredValues);
            }
        });
    };
    Lookup.prototype.removeByCondition = function (condition) {
        var _this = this;
        var removals = [];
        this._map.forEach(function (entries, key) {
            var updatedEntries = [];
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                var remove = condition(entry);
                if (remove) {
                    removals.push(entry);
                }
                else {
                    updatedEntries.push(entry);
                }
            }
            _this._setValue(key, updatedEntries);
        });
        return removals;
    };
    Lookup.prototype.hasKey = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.NULL_ARGUMENT);
        }
        return this._map.has(serviceIdentifier);
    };
    Lookup.prototype.clone = function () {
        var copy = new Lookup();
        this._map.forEach(function (value, key) {
            value.forEach(function (b) { return copy.add(key, (0,_utils_clonable__WEBPACK_IMPORTED_MODULE_1__.isClonable)(b) ? b.clone() : b); });
        });
        return copy;
    };
    Lookup.prototype.traverse = function (func) {
        this._map.forEach(function (value, key) {
            func(key, value);
        });
    };
    Lookup.prototype._setValue = function (serviceIdentifier, value) {
        if (value.length > 0) {
            this._map.set(serviceIdentifier, value);
        }
        else {
            this._map.delete(serviceIdentifier);
        }
    };
    return Lookup;
}());

//# sourceMappingURL=lookup.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/module_activation_store.js":
/*!************************************************************************!*\
  !*** ./node_modules/inversify/es/container/module_activation_store.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleActivationStore": () => (/* binding */ ModuleActivationStore)
/* harmony export */ });
/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup */ "./node_modules/inversify/es/container/lookup.js");

var ModuleActivationStore = (function () {
    function ModuleActivationStore() {
        this._map = new Map();
    }
    ModuleActivationStore.prototype.remove = function (moduleId) {
        if (this._map.has(moduleId)) {
            var handlers = this._map.get(moduleId);
            this._map.delete(moduleId);
            return handlers;
        }
        return this._getEmptyHandlersStore();
    };
    ModuleActivationStore.prototype.addDeactivation = function (moduleId, serviceIdentifier, onDeactivation) {
        this._getModuleActivationHandlers(moduleId)
            .onDeactivations.add(serviceIdentifier, onDeactivation);
    };
    ModuleActivationStore.prototype.addActivation = function (moduleId, serviceIdentifier, onActivation) {
        this._getModuleActivationHandlers(moduleId)
            .onActivations.add(serviceIdentifier, onActivation);
    };
    ModuleActivationStore.prototype.clone = function () {
        var clone = new ModuleActivationStore();
        this._map.forEach(function (handlersStore, moduleId) {
            clone._map.set(moduleId, {
                onActivations: handlersStore.onActivations.clone(),
                onDeactivations: handlersStore.onDeactivations.clone(),
            });
        });
        return clone;
    };
    ModuleActivationStore.prototype._getModuleActivationHandlers = function (moduleId) {
        var moduleActivationHandlers = this._map.get(moduleId);
        if (moduleActivationHandlers === undefined) {
            moduleActivationHandlers = this._getEmptyHandlersStore();
            this._map.set(moduleId, moduleActivationHandlers);
        }
        return moduleActivationHandlers;
    };
    ModuleActivationStore.prototype._getEmptyHandlersStore = function () {
        var handlersStore = {
            onActivations: new _lookup__WEBPACK_IMPORTED_MODULE_0__.Lookup(),
            onDeactivations: new _lookup__WEBPACK_IMPORTED_MODULE_0__.Lookup()
        };
        return handlersStore;
    };
    return ModuleActivationStore;
}());

//# sourceMappingURL=module_activation_store.js.map

/***/ }),

/***/ "./node_modules/inversify/es/interfaces/interfaces.js":
/*!************************************************************!*\
  !*** ./node_modules/inversify/es/interfaces/interfaces.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interfaces": () => (/* binding */ interfaces)
/* harmony export */ });
var interfaces;
(function (interfaces) {
    ;
})(interfaces || (interfaces = {}));

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "./node_modules/inversify/es/inversify.js":
/*!************************************************!*\
  !*** ./node_modules/inversify/es/inversify.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncContainerModule": () => (/* reexport safe */ _container_container_module__WEBPACK_IMPORTED_MODULE_3__.AsyncContainerModule),
/* harmony export */   "BindingScopeEnum": () => (/* reexport safe */ _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__.BindingScopeEnum),
/* harmony export */   "BindingTypeEnum": () => (/* reexport safe */ _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__.BindingTypeEnum),
/* harmony export */   "Container": () => (/* reexport safe */ _container_container__WEBPACK_IMPORTED_MODULE_1__.Container),
/* harmony export */   "ContainerModule": () => (/* reexport safe */ _container_container_module__WEBPACK_IMPORTED_MODULE_3__.ContainerModule),
/* harmony export */   "LazyServiceIdentifer": () => (/* reexport safe */ _annotation_lazy_service_identifier__WEBPACK_IMPORTED_MODULE_9__.LazyServiceIdentifer),
/* harmony export */   "METADATA_KEY": () => (/* binding */ METADATA_KEY),
/* harmony export */   "MetadataReader": () => (/* reexport safe */ _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_16__.MetadataReader),
/* harmony export */   "TargetTypeEnum": () => (/* reexport safe */ _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__.TargetTypeEnum),
/* harmony export */   "createTaggedDecorator": () => (/* reexport safe */ _annotation_decorator_utils__WEBPACK_IMPORTED_MODULE_4__.createTaggedDecorator),
/* harmony export */   "decorate": () => (/* reexport safe */ _annotation_decorator_utils__WEBPACK_IMPORTED_MODULE_4__.decorate),
/* harmony export */   "getServiceIdentifierAsString": () => (/* reexport safe */ _utils_serialization__WEBPACK_IMPORTED_MODULE_20__.getServiceIdentifierAsString),
/* harmony export */   "id": () => (/* reexport safe */ _utils_id__WEBPACK_IMPORTED_MODULE_17__.id),
/* harmony export */   "inject": () => (/* reexport safe */ _annotation_inject__WEBPACK_IMPORTED_MODULE_8__.inject),
/* harmony export */   "injectable": () => (/* reexport safe */ _annotation_injectable__WEBPACK_IMPORTED_MODULE_5__.injectable),
/* harmony export */   "interfaces": () => (/* reexport safe */ _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_18__.interfaces),
/* harmony export */   "multiBindToService": () => (/* reexport safe */ _utils_binding_utils__WEBPACK_IMPORTED_MODULE_21__.multiBindToService),
/* harmony export */   "multiInject": () => (/* reexport safe */ _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_12__.multiInject),
/* harmony export */   "named": () => (/* reexport safe */ _annotation_named__WEBPACK_IMPORTED_MODULE_7__.named),
/* harmony export */   "namedConstraint": () => (/* reexport safe */ _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_19__.namedConstraint),
/* harmony export */   "optional": () => (/* reexport safe */ _annotation_optional__WEBPACK_IMPORTED_MODULE_10__.optional),
/* harmony export */   "postConstruct": () => (/* reexport safe */ _annotation_post_construct__WEBPACK_IMPORTED_MODULE_14__.postConstruct),
/* harmony export */   "preDestroy": () => (/* reexport safe */ _annotation_pre_destroy__WEBPACK_IMPORTED_MODULE_15__.preDestroy),
/* harmony export */   "tagged": () => (/* reexport safe */ _annotation_tagged__WEBPACK_IMPORTED_MODULE_6__.tagged),
/* harmony export */   "taggedConstraint": () => (/* reexport safe */ _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_19__.taggedConstraint),
/* harmony export */   "targetName": () => (/* reexport safe */ _annotation_target_name__WEBPACK_IMPORTED_MODULE_13__.targetName),
/* harmony export */   "traverseAncerstors": () => (/* reexport safe */ _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_19__.traverseAncerstors),
/* harmony export */   "typeConstraint": () => (/* reexport safe */ _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_19__.typeConstraint),
/* harmony export */   "unmanaged": () => (/* reexport safe */ _annotation_unmanaged__WEBPACK_IMPORTED_MODULE_11__.unmanaged)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container */ "./node_modules/inversify/es/container/container.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container_module */ "./node_modules/inversify/es/container/container_module.js");
/* harmony import */ var _annotation_decorator_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotation/decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");
/* harmony import */ var _annotation_injectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./annotation/injectable */ "./node_modules/inversify/es/annotation/injectable.js");
/* harmony import */ var _annotation_tagged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./annotation/tagged */ "./node_modules/inversify/es/annotation/tagged.js");
/* harmony import */ var _annotation_named__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./annotation/named */ "./node_modules/inversify/es/annotation/named.js");
/* harmony import */ var _annotation_inject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./annotation/inject */ "./node_modules/inversify/es/annotation/inject.js");
/* harmony import */ var _annotation_lazy_service_identifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./annotation/lazy_service_identifier */ "./node_modules/inversify/es/annotation/lazy_service_identifier.js");
/* harmony import */ var _annotation_optional__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./annotation/optional */ "./node_modules/inversify/es/annotation/optional.js");
/* harmony import */ var _annotation_unmanaged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./annotation/unmanaged */ "./node_modules/inversify/es/annotation/unmanaged.js");
/* harmony import */ var _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./annotation/multi_inject */ "./node_modules/inversify/es/annotation/multi_inject.js");
/* harmony import */ var _annotation_target_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./annotation/target_name */ "./node_modules/inversify/es/annotation/target_name.js");
/* harmony import */ var _annotation_post_construct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./annotation/post_construct */ "./node_modules/inversify/es/annotation/post_construct.js");
/* harmony import */ var _annotation_pre_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./annotation/pre_destroy */ "./node_modules/inversify/es/annotation/pre_destroy.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./planning/metadata_reader */ "./node_modules/inversify/es/planning/metadata_reader.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interfaces/interfaces */ "./node_modules/inversify/es/interfaces/interfaces.js");
/* harmony import */ var _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./syntax/constraint_helpers */ "./node_modules/inversify/es/syntax/constraint_helpers.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _utils_binding_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/binding_utils */ "./node_modules/inversify/es/utils/binding_utils.js");

var METADATA_KEY = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__;






















//# sourceMappingURL=inversify.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/context.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/context.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");

var Context = (function () {
    function Context(container) {
        this.id = (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__.id)();
        this.container = container;
    }
    Context.prototype.addPlan = function (plan) {
        this.plan = plan;
    };
    Context.prototype.setCurrentRequest = function (currentRequest) {
        this.currentRequest = currentRequest;
    };
    return Context;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/metadata.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/planning/metadata.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metadata": () => (/* binding */ Metadata)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");

var Metadata = (function () {
    function Metadata(key, value) {
        this.key = key;
        this.value = value;
    }
    Metadata.prototype.toString = function () {
        if (this.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.NAMED_TAG) {
            return "named: " + String(this.value).toString() + " ";
        }
        else {
            return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
        }
    };
    return Metadata;
}());

//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/metadata_reader.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/planning/metadata_reader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetadataReader": () => (/* binding */ MetadataReader)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");

var MetadataReader = (function () {
    function MetadataReader() {
    }
    MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
        var compilerGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.PARAM_TYPES, constructorFunc);
        var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.TAGGED, constructorFunc);
        return {
            compilerGeneratedMetadata: compilerGeneratedMetadata,
            userGeneratedMetadata: userGeneratedMetadata || {}
        };
    };
    MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
        var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.TAGGED_PROP, constructorFunc) || [];
        return userGeneratedMetadata;
    };
    return MetadataReader;
}());

//# sourceMappingURL=metadata_reader.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/plan.js":
/*!****************************************************!*\
  !*** ./node_modules/inversify/es/planning/plan.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plan": () => (/* binding */ Plan)
/* harmony export */ });
var Plan = (function () {
    function Plan(parentContext, rootRequest) {
        this.parentContext = parentContext;
        this.rootRequest = rootRequest;
    }
    return Plan;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/planner.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/planner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMockRequest": () => (/* binding */ createMockRequest),
/* harmony export */   "getBindingDictionary": () => (/* binding */ getBindingDictionary),
/* harmony export */   "plan": () => (/* binding */ plan)
/* harmony export */ });
/* harmony import */ var _bindings_binding_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings/binding_count */ "./node_modules/inversify/es/bindings/binding_count.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/es/utils/exceptions.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reflection_utils */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ "./node_modules/inversify/es/planning/context.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _plan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plan */ "./node_modules/inversify/es/planning/plan.js");
/* harmony import */ var _reflection_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reflection_utils */ "./node_modules/inversify/es/planning/reflection_utils.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./node_modules/inversify/es/planning/request.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ "./node_modules/inversify/es/planning/target.js");












function getBindingDictionary(cntnr) {
    return cntnr._bindingDictionary;
}
function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
    var metadataKey = isMultiInject ? _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.MULTI_INJECT_TAG : _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__.INJECT_TAG;
    var injectMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(metadataKey, serviceIdentifier);
    var target = new _target__WEBPACK_IMPORTED_MODULE_2__.Target(targetType, name, serviceIdentifier, injectMetadata);
    if (key !== undefined) {
        var tagMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(key, value);
        target.metadata.push(tagMetadata);
    }
    return target;
}
function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
    var bindings = getBindings(context.container, target.serviceIdentifier);
    var activeBindings = [];
    if (bindings.length === _bindings_binding_count__WEBPACK_IMPORTED_MODULE_3__.BindingCount.NoBindingsAvailable &&
        context.container.options.autoBindInjectable &&
        typeof target.serviceIdentifier === "function" &&
        metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
        context.container.bind(target.serviceIdentifier).toSelf();
        bindings = getBindings(context.container, target.serviceIdentifier);
    }
    if (!avoidConstraints) {
        activeBindings = bindings.filter(function (binding) {
            var request = new _request__WEBPACK_IMPORTED_MODULE_4__.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
            return binding.constraint(request);
        });
    }
    else {
        activeBindings = bindings;
    }
    _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
    return activeBindings;
}
function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
    switch (bindings.length) {
        case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_3__.BindingCount.NoBindingsAvailable:
            if (target.isOptional()) {
                return bindings;
            }
            else {
                var serviceIdentifierString = (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_5__.getServiceIdentifierAsString)(serviceIdentifier);
                var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_6__.NOT_REGISTERED;
                msg += (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_5__.listMetadataForTarget)(serviceIdentifierString, target);
                msg += (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_5__.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
        case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_3__.BindingCount.OnlyOneBindingAvailable:
            return bindings;
        case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_3__.BindingCount.MultipleBindingsAvailable:
        default:
            if (!target.isArray()) {
                var serviceIdentifierString = (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_5__.getServiceIdentifierAsString)(serviceIdentifier);
                var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_6__.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
                msg += (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_5__.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
            else {
                return bindings;
            }
    }
}
function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
    var activeBindings;
    var childRequest;
    if (parentRequest === null) {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
        childRequest = new _request__WEBPACK_IMPORTED_MODULE_4__.Request(serviceIdentifier, context, null, activeBindings, target);
        var thePlan = new _plan__WEBPACK_IMPORTED_MODULE_7__.Plan(context, childRequest);
        context.addPlan(thePlan);
    }
    else {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
        childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
    }
    activeBindings.forEach(function (binding) {
        var subChildRequest = null;
        if (target.isArray()) {
            subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
        }
        else {
            if (binding.cache) {
                return;
            }
            subChildRequest = childRequest;
        }
        if (binding.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_8__.BindingTypeEnum.Instance && binding.implementationType !== null) {
            var dependencies = (0,_reflection_utils__WEBPACK_IMPORTED_MODULE_9__.getDependencies)(metadataReader, binding.implementationType);
            if (!context.container.options.skipBaseClassChecks) {
                var baseClassDependencyCount = (0,_reflection_utils__WEBPACK_IMPORTED_MODULE_9__.getBaseClassDependencyCount)(metadataReader, binding.implementationType);
                if (dependencies.length < baseClassDependencyCount) {
                    var error = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_6__.ARGUMENTS_LENGTH_MISMATCH((0,_utils_serialization__WEBPACK_IMPORTED_MODULE_5__.getFunctionName)(binding.implementationType));
                    throw new Error(error);
                }
            }
            dependencies.forEach(function (dependency) {
                _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
            });
        }
    });
}
function getBindings(container, serviceIdentifier) {
    var bindings = [];
    var bindingDictionary = getBindingDictionary(container);
    if (bindingDictionary.hasKey(serviceIdentifier)) {
        bindings = bindingDictionary.get(serviceIdentifier);
    }
    else if (container.parent !== null) {
        bindings = getBindings(container.parent, serviceIdentifier);
    }
    return bindings;
}
function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
    if (avoidConstraints === void 0) { avoidConstraints = false; }
    var context = new _context__WEBPACK_IMPORTED_MODULE_10__.Context(container);
    var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
    try {
        _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
        return context;
    }
    catch (error) {
        if ((0,_utils_exceptions__WEBPACK_IMPORTED_MODULE_11__.isStackOverflowExeption)(error)) {
            (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_5__.circularDependencyToException)(context.plan.rootRequest);
        }
        throw error;
    }
}
function createMockRequest(container, serviceIdentifier, key, value) {
    var target = new _target__WEBPACK_IMPORTED_MODULE_2__.Target(_constants_literal_types__WEBPACK_IMPORTED_MODULE_8__.TargetTypeEnum.Variable, "", serviceIdentifier, new _metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(key, value));
    var context = new _context__WEBPACK_IMPORTED_MODULE_10__.Context(container);
    var request = new _request__WEBPACK_IMPORTED_MODULE_4__.Request(serviceIdentifier, context, null, [], target);
    return request;
}

//# sourceMappingURL=planner.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/queryable_string.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/planning/queryable_string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryableString": () => (/* binding */ QueryableString)
/* harmony export */ });
var QueryableString = (function () {
    function QueryableString(str) {
        this.str = str;
    }
    QueryableString.prototype.startsWith = function (searchString) {
        return this.str.indexOf(searchString) === 0;
    };
    QueryableString.prototype.endsWith = function (searchString) {
        var reverseString = "";
        var reverseSearchString = searchString.split("").reverse().join("");
        reverseString = this.str.split("").reverse().join("");
        return this.startsWith.call({ str: reverseString }, reverseSearchString);
    };
    QueryableString.prototype.contains = function (searchString) {
        return (this.str.indexOf(searchString) !== -1);
    };
    QueryableString.prototype.equals = function (compareString) {
        return this.str === compareString;
    };
    QueryableString.prototype.value = function () {
        return this.str;
    };
    return QueryableString;
}());

//# sourceMappingURL=queryable_string.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/reflection_utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/planning/reflection_utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBaseClassDependencyCount": () => (/* binding */ getBaseClassDependencyCount),
/* harmony export */   "getDependencies": () => (/* binding */ getDependencies),
/* harmony export */   "getFunctionName": () => (/* reexport safe */ _utils_serialization__WEBPACK_IMPORTED_MODULE_0__.getFunctionName)
/* harmony export */ });
/* harmony import */ var _annotation_lazy_service_identifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../annotation/lazy_service_identifier */ "./node_modules/inversify/es/annotation/lazy_service_identifier.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./target */ "./node_modules/inversify/es/planning/target.js");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};






function getDependencies(metadataReader, func) {
    var constructorName = (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_0__.getFunctionName)(func);
    return getTargets(metadataReader, constructorName, func, false);
}
function getTargets(metadataReader, constructorName, func, isBaseClass) {
    var metadata = metadataReader.getConstructorMetadata(func);
    var serviceIdentifiers = metadata.compilerGeneratedMetadata;
    if (serviceIdentifiers === undefined) {
        var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
        throw new Error(msg);
    }
    var constructorArgsMetadata = metadata.userGeneratedMetadata;
    var keys = Object.keys(constructorArgsMetadata);
    var hasUserDeclaredUnknownInjections = (func.length === 0 && keys.length > 0);
    var hasOptionalParameters = keys.length > func.length;
    var iterations = (hasUserDeclaredUnknownInjections || hasOptionalParameters) ? keys.length : func.length;
    var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
    var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
    var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets, true);
    return targets;
}
function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
    var targetMetadata = constructorArgsMetadata[index.toString()] || [];
    var metadata = formatTargetMetadata(targetMetadata);
    var isManaged = metadata.unmanaged !== true;
    var serviceIdentifier = serviceIdentifiers[index];
    var injectIdentifier = (metadata.inject || metadata.multiInject);
    serviceIdentifier = (injectIdentifier) ? (injectIdentifier) : serviceIdentifier;
    if (serviceIdentifier instanceof _annotation_lazy_service_identifier__WEBPACK_IMPORTED_MODULE_2__.LazyServiceIdentifer) {
        serviceIdentifier = serviceIdentifier.unwrap();
    }
    if (isManaged) {
        var isObject = serviceIdentifier === Object;
        var isFunction = serviceIdentifier === Function;
        var isUndefined = serviceIdentifier === undefined;
        var isUnknownType = (isObject || isFunction || isUndefined);
        if (!isBaseClass && isUnknownType) {
            var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
            throw new Error(msg);
        }
        var target = new _target__WEBPACK_IMPORTED_MODULE_3__.Target(_constants_literal_types__WEBPACK_IMPORTED_MODULE_4__.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        return target;
    }
    return null;
}
function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
    var targets = [];
    for (var i = 0; i < iterations; i++) {
        var index = i;
        var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
        if (target !== null) {
            targets.push(target);
        }
    }
    return targets;
}
function _getServiceIdentifierForProperty(inject, multiInject, propertyName, className) {
    var serviceIdentifier = (inject || multiInject);
    if (serviceIdentifier === undefined) {
        var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__.MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
        throw new Error(msg);
    }
    return serviceIdentifier;
}
function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
    var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
    var targets = [];
    var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
    var stringKeys = Object.keys(classPropsMetadata);
    var keys = stringKeys.concat(symbolKeys);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var targetMetadata = classPropsMetadata[key];
        var metadata = formatTargetMetadata(targetMetadata);
        var identifier = metadata.targetName || key;
        var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
        var target = new _target__WEBPACK_IMPORTED_MODULE_3__.Target(_constants_literal_types__WEBPACK_IMPORTED_MODULE_4__.TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
        target.metadata = targetMetadata;
        targets.push(target);
    }
    var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
        targets = __spreadArray(__spreadArray([], targets, true), baseTargets, true);
    }
    return targets;
}
function getBaseClassDependencyCount(metadataReader, func) {
    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseConstructorName = (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_0__.getFunctionName)(baseConstructor);
        var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
        var metadata = targets.map(function (t) { return t.metadata.filter(function (m) { return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_5__.UNMANAGED_TAG; }); });
        var unmanagedCount = [].concat.apply([], metadata).length;
        var dependencyCount = targets.length - unmanagedCount;
        if (dependencyCount > 0) {
            return dependencyCount;
        }
        else {
            return getBaseClassDependencyCount(metadataReader, baseConstructor);
        }
    }
    else {
        return 0;
    }
}
function formatTargetMetadata(targetMetadata) {
    var targetMetadataMap = {};
    targetMetadata.forEach(function (m) {
        targetMetadataMap[m.key.toString()] = m.value;
    });
    return {
        inject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_5__.INJECT_TAG],
        multiInject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_5__.MULTI_INJECT_TAG],
        targetName: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_5__.NAME_TAG],
        unmanaged: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_5__.UNMANAGED_TAG]
    };
}

//# sourceMappingURL=reflection_utils.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/request.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/request.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Request": () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");

var Request = (function () {
    function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
        this.id = (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__.id)();
        this.serviceIdentifier = serviceIdentifier;
        this.parentContext = parentContext;
        this.parentRequest = parentRequest;
        this.target = target;
        this.childRequests = [];
        this.bindings = (Array.isArray(bindings) ? bindings : [bindings]);
        this.requestScope = parentRequest === null
            ? new Map()
            : null;
    }
    Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
        var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
        this.childRequests.push(child);
        return child;
    };
    return Request;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/target.js":
/*!******************************************************!*\
  !*** ./node_modules/inversify/es/planning/target.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Target": () => (/* binding */ Target)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _queryable_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryable_string */ "./node_modules/inversify/es/planning/queryable_string.js");





var Target = (function () {
    function Target(type, identifier, serviceIdentifier, namedOrTagged) {
        this.id = (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__.id)();
        this.type = type;
        this.serviceIdentifier = serviceIdentifier;
        var queryableName = typeof identifier === 'symbol' ? (0,_utils_serialization__WEBPACK_IMPORTED_MODULE_1__.getSymbolDescription)(identifier) : identifier;
        this.name = new _queryable_string__WEBPACK_IMPORTED_MODULE_2__.QueryableString(queryableName || "");
        this.identifier = identifier;
        this.metadata = new Array();
        var metadataItem = null;
        if (typeof namedOrTagged === 'string') {
            metadataItem = new _metadata__WEBPACK_IMPORTED_MODULE_3__.Metadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.NAMED_TAG, namedOrTagged);
        }
        else if (namedOrTagged instanceof _metadata__WEBPACK_IMPORTED_MODULE_3__.Metadata) {
            metadataItem = namedOrTagged;
        }
        if (metadataItem !== null) {
            this.metadata.push(metadataItem);
        }
    }
    Target.prototype.hasTag = function (key) {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key) {
                return true;
            }
        }
        return false;
    };
    Target.prototype.isArray = function () {
        return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.MULTI_INJECT_TAG);
    };
    Target.prototype.matchesArray = function (name) {
        return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.MULTI_INJECT_TAG)(name);
    };
    Target.prototype.isNamed = function () {
        return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.NAMED_TAG);
    };
    Target.prototype.isTagged = function () {
        return this.metadata.some(function (metadata) { return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.NON_CUSTOM_TAG_KEYS.every(function (key) { return metadata.key !== key; }); });
    };
    Target.prototype.isOptional = function () {
        return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.OPTIONAL_TAG)(true);
    };
    Target.prototype.getNamedTag = function () {
        if (this.isNamed()) {
            return this.metadata.filter(function (m) { return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.NAMED_TAG; })[0];
        }
        return null;
    };
    Target.prototype.getCustomTags = function () {
        if (this.isTagged()) {
            return this.metadata.filter(function (metadata) { return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.NON_CUSTOM_TAG_KEYS.every(function (key) { return metadata.key !== key; }); });
        }
        else {
            return null;
        }
    };
    Target.prototype.matchesNamedTag = function (name) {
        return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__.NAMED_TAG)(name);
    };
    Target.prototype.matchesTag = function (key) {
        var _this = this;
        return function (value) {
            for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.key === key && m.value === value) {
                    return true;
                }
            }
            return false;
        };
    };
    return Target;
}());

//# sourceMappingURL=target.js.map

/***/ }),

/***/ "./node_modules/inversify/es/resolution/instantiation.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/resolution/instantiation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveInstance": () => (/* binding */ resolveInstance)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/async */ "./node_modules/inversify/es/utils/async.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




function _resolveRequests(childRequests, resolveRequest) {
    return childRequests.reduce(function (resolvedRequests, childRequest) {
        var injection = resolveRequest(childRequest);
        var targetType = childRequest.target.type;
        if (targetType === _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.TargetTypeEnum.ConstructorArgument) {
            resolvedRequests.constructorInjections.push(injection);
        }
        else {
            resolvedRequests.propertyRequests.push(childRequest);
            resolvedRequests.propertyInjections.push(injection);
        }
        if (!resolvedRequests.isAsync) {
            resolvedRequests.isAsync = (0,_utils_async__WEBPACK_IMPORTED_MODULE_1__.isPromiseOrContainsPromise)(injection);
        }
        return resolvedRequests;
    }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
}
function _createInstance(constr, childRequests, resolveRequest) {
    var result;
    if (childRequests.length > 0) {
        var resolved = _resolveRequests(childRequests, resolveRequest);
        var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), { constr: constr });
        if (resolved.isAsync) {
            result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
        }
        else {
            result = createInstanceWithInjections(createInstanceWithInjectionsArg);
        }
    }
    else {
        result = new constr();
    }
    return result;
}
function createInstanceWithInjections(args) {
    var _a;
    var instance = new ((_a = args.constr).bind.apply(_a, __spreadArray([void 0], args.constructorInjections, false)))();
    args.propertyRequests.forEach(function (r, index) {
        var property = r.target.identifier;
        var injection = args.propertyInjections[index];
        instance[property] = injection;
    });
    return instance;
}
function createInstanceWithInjectionsAsync(args) {
    return __awaiter(this, void 0, void 0, function () {
        var constructorInjections, propertyInjections;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, possiblyWaitInjections(args.constructorInjections)];
                case 1:
                    constructorInjections = _a.sent();
                    return [4, possiblyWaitInjections(args.propertyInjections)];
                case 2:
                    propertyInjections = _a.sent();
                    return [2, createInstanceWithInjections(__assign(__assign({}, args), { constructorInjections: constructorInjections, propertyInjections: propertyInjections }))];
            }
        });
    });
}
function possiblyWaitInjections(possiblePromiseinjections) {
    return __awaiter(this, void 0, void 0, function () {
        var injections, _i, possiblePromiseinjections_1, injection;
        return __generator(this, function (_a) {
            injections = [];
            for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
                injection = possiblePromiseinjections_1[_i];
                if (Array.isArray(injection)) {
                    injections.push(Promise.all(injection));
                }
                else {
                    injections.push(injection);
                }
            }
            return [2, Promise.all(injections)];
        });
    });
}
function _getInstanceAfterPostConstruct(constr, result) {
    var postConstructResult = _postConstruct(constr, result);
    if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_1__.isPromise)(postConstructResult)) {
        return postConstructResult.then(function () { return result; });
    }
    else {
        return result;
    }
}
function _postConstruct(constr, instance) {
    var _a, _b;
    if (Reflect.hasMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__.POST_CONSTRUCT, constr)) {
        var data = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__.POST_CONSTRUCT, constr);
        try {
            return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        catch (e) {
            throw new Error((0,_constants_error_msgs__WEBPACK_IMPORTED_MODULE_3__.POST_CONSTRUCT_ERROR)(constr.name, e.message));
        }
    }
}
function _validateInstanceResolution(binding, constr) {
    if (binding.scope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton) {
        _throwIfHandlingDeactivation(binding, constr);
    }
}
function _throwIfHandlingDeactivation(binding, constr) {
    var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Request ?
        "request" :
        "transient") + " scope.";
    if (typeof binding.onDeactivation === "function") {
        throw new Error((0,_constants_error_msgs__WEBPACK_IMPORTED_MODULE_3__.ON_DEACTIVATION_ERROR)(constr.name, scopeErrorMessage));
    }
    if (Reflect.hasMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__.PRE_DESTROY, constr)) {
        throw new Error((0,_constants_error_msgs__WEBPACK_IMPORTED_MODULE_3__.PRE_DESTROY_ERROR)(constr.name, scopeErrorMessage));
    }
}
function resolveInstance(binding, constr, childRequests, resolveRequest) {
    _validateInstanceResolution(binding, constr);
    var result = _createInstance(constr, childRequests, resolveRequest);
    if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_1__.isPromise)(result)) {
        return result.then(function (resolvedResult) { return _getInstanceAfterPostConstruct(constr, resolvedResult); });
    }
    else {
        return _getInstanceAfterPostConstruct(constr, result);
    }
}

//# sourceMappingURL=instantiation.js.map

/***/ }),

/***/ "./node_modules/inversify/es/resolution/resolver.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/resolution/resolver.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolve": () => (/* binding */ resolve)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _planning_planner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../planning/planner */ "./node_modules/inversify/es/planning/planner.js");
/* harmony import */ var _scope_scope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scope/scope */ "./node_modules/inversify/es/scope/scope.js");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/async */ "./node_modules/inversify/es/utils/async.js");
/* harmony import */ var _utils_binding_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/binding_utils */ "./node_modules/inversify/es/utils/binding_utils.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/es/utils/exceptions.js");
/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instantiation */ "./node_modules/inversify/es/resolution/instantiation.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var _resolveRequest = function (requestScope) {
    return function (request) {
        request.parentContext.setCurrentRequest(request);
        var bindings = request.bindings;
        var childRequests = request.childRequests;
        var targetIsAnArray = request.target && request.target.isArray();
        var targetParentIsNotAnArray = !request.parentRequest ||
            !request.parentRequest.target ||
            !request.target ||
            !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
        if (targetIsAnArray && targetParentIsNotAnArray) {
            return childRequests.map(function (childRequest) {
                var _f = _resolveRequest(requestScope);
                return _f(childRequest);
            });
        }
        else {
            if (request.target.isOptional() && bindings.length === 0) {
                return undefined;
            }
            var binding = bindings[0];
            return _resolveBinding(requestScope, request, binding);
        }
    };
};
var _resolveFactoryFromBinding = function (binding, context) {
    var factoryDetails = (0,_utils_binding_utils__WEBPACK_IMPORTED_MODULE_0__.getFactoryDetails)(binding);
    return (0,_utils_exceptions__WEBPACK_IMPORTED_MODULE_1__.tryAndThrowErrorIfStackOverflow)(function () { return factoryDetails.factory.bind(binding)(context); }, function () { return new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context.currentRequest.serviceIdentifier.toString())); });
};
var _getResolvedFromBinding = function (requestScope, request, binding) {
    var result;
    var childRequests = request.childRequests;
    (0,_utils_binding_utils__WEBPACK_IMPORTED_MODULE_0__.ensureFullyBound)(binding);
    switch (binding.type) {
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__.BindingTypeEnum.ConstantValue:
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__.BindingTypeEnum.Function:
            result = binding.cache;
            break;
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__.BindingTypeEnum.Constructor:
            result = binding.implementationType;
            break;
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__.BindingTypeEnum.Instance:
            result = (0,_instantiation__WEBPACK_IMPORTED_MODULE_4__.resolveInstance)(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
            break;
        default:
            result = _resolveFactoryFromBinding(binding, request.parentContext);
    }
    return result;
};
var _resolveInScope = function (requestScope, binding, resolveFromBinding) {
    var result = (0,_scope_scope__WEBPACK_IMPORTED_MODULE_5__.tryGetFromScope)(requestScope, binding);
    if (result !== null) {
        return result;
    }
    result = resolveFromBinding();
    (0,_scope_scope__WEBPACK_IMPORTED_MODULE_5__.saveToScope)(requestScope, binding, result);
    return result;
};
var _resolveBinding = function (requestScope, request, binding) {
    return _resolveInScope(requestScope, binding, function () {
        var result = _getResolvedFromBinding(requestScope, request, binding);
        if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_6__.isPromise)(result)) {
            result = result.then(function (resolved) { return _onActivation(request, binding, resolved); });
        }
        else {
            result = _onActivation(request, binding, result);
        }
        return result;
    });
};
function _onActivation(request, binding, resolved) {
    var result = _bindingActivation(request.parentContext, binding, resolved);
    var containersIterator = _getContainersIterator(request.parentContext.container);
    var container;
    var containersIteratorResult = containersIterator.next();
    do {
        container = containersIteratorResult.value;
        var context_1 = request.parentContext;
        var serviceIdentifier = request.serviceIdentifier;
        var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
        if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_6__.isPromise)(result)) {
            result = _activateContainerAsync(activationsIterator, context_1, result);
        }
        else {
            result = _activateContainer(activationsIterator, context_1, result);
        }
        containersIteratorResult = containersIterator.next();
    } while (containersIteratorResult.done !== true && !(0,_planning_planner__WEBPACK_IMPORTED_MODULE_7__.getBindingDictionary)(container).hasKey(request.serviceIdentifier));
    return result;
}
var _bindingActivation = function (context, binding, previousResult) {
    var result;
    if (typeof binding.onActivation === "function") {
        result = binding.onActivation(context, previousResult);
    }
    else {
        result = previousResult;
    }
    return result;
};
var _activateContainer = function (activationsIterator, context, result) {
    var activation = activationsIterator.next();
    while (!activation.done) {
        result = activation.value(context, result);
        if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_6__.isPromise)(result)) {
            return _activateContainerAsync(activationsIterator, context, result);
        }
        activation = activationsIterator.next();
    }
    return result;
};
var _activateContainerAsync = function (activationsIterator, context, resultPromise) { return __awaiter(void 0, void 0, void 0, function () {
    var result, activation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, resultPromise];
            case 1:
                result = _a.sent();
                activation = activationsIterator.next();
                _a.label = 2;
            case 2:
                if (!!activation.done) return [3, 4];
                return [4, activation.value(context, result)];
            case 3:
                result = _a.sent();
                activation = activationsIterator.next();
                return [3, 2];
            case 4: return [2, result];
        }
    });
}); };
var _getContainerActivationsForService = function (container, serviceIdentifier) {
    var activations = container._activations;
    return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
};
var _getContainersIterator = function (container) {
    var containersStack = [container];
    var parent = container.parent;
    while (parent !== null) {
        containersStack.push(parent);
        parent = parent.parent;
    }
    var getNextContainer = function () {
        var nextContainer = containersStack.pop();
        if (nextContainer !== undefined) {
            return { done: false, value: nextContainer };
        }
        else {
            return { done: true, value: undefined };
        }
    };
    var containersIterator = {
        next: getNextContainer,
    };
    return containersIterator;
};
function resolve(context) {
    var _f = _resolveRequest(context.plan.rootRequest.requestScope);
    return _f(context.plan.rootRequest);
}

//# sourceMappingURL=resolver.js.map

/***/ }),

/***/ "./node_modules/inversify/es/scope/scope.js":
/*!**************************************************!*\
  !*** ./node_modules/inversify/es/scope/scope.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveToScope": () => (/* binding */ saveToScope),
/* harmony export */   "tryGetFromScope": () => (/* binding */ tryGetFromScope)
/* harmony export */ });
/* harmony import */ var _inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inversify */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/async */ "./node_modules/inversify/es/utils/async.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var tryGetFromScope = function (requestScope, binding) {
    if ((binding.scope === _inversify__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton) && binding.activated) {
        return binding.cache;
    }
    if (binding.scope === _inversify__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Request &&
        requestScope.has(binding.id)) {
        return requestScope.get(binding.id);
    }
    return null;
};
var saveToScope = function (requestScope, binding, result) {
    if (binding.scope === _inversify__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton) {
        _saveToSingletonScope(binding, result);
    }
    if (binding.scope === _inversify__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Request) {
        _saveToRequestScope(requestScope, binding, result);
    }
};
var _saveToRequestScope = function (requestScope, binding, result) {
    if (!requestScope.has(binding.id)) {
        requestScope.set(binding.id, result);
    }
};
var _saveToSingletonScope = function (binding, result) {
    binding.cache = result;
    binding.activated = true;
    if ((0,_utils_async__WEBPACK_IMPORTED_MODULE_1__.isPromise)(result)) {
        void _saveAsyncResultToSingletonScope(binding, result);
    }
};
var _saveAsyncResultToSingletonScope = function (binding, asyncResult) { return __awaiter(void 0, void 0, void 0, function () {
    var result, ex_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, asyncResult];
            case 1:
                result = _a.sent();
                binding.cache = result;
                return [3, 3];
            case 2:
                ex_1 = _a.sent();
                binding.cache = null;
                binding.activated = false;
                throw ex_1;
            case 3: return [2];
        }
    });
}); };
//# sourceMappingURL=scope.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_in_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_in_syntax.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingInSyntax": () => (/* binding */ BindingInSyntax)
/* harmony export */ });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js");


var BindingInSyntax = (function () {
    function BindingInSyntax(binding) {
        this._binding = binding;
    }
    BindingInSyntax.prototype.inRequestScope = function () {
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Request;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inSingletonScope = function () {
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inTransientScope = function () {
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Transient;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__.BindingWhenOnSyntax(this._binding);
    };
    return BindingInSyntax;
}());

//# sourceMappingURL=binding_in_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingInWhenOnSyntax": () => (/* binding */ BindingInWhenOnSyntax)
/* harmony export */ });
/* harmony import */ var _binding_in_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_in_syntax */ "./node_modules/inversify/es/syntax/binding_in_syntax.js");
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");



var BindingInWhenOnSyntax = (function () {
    function BindingInWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__.BindingOnSyntax(this._binding);
        this._bindingInSyntax = new _binding_in_syntax__WEBPACK_IMPORTED_MODULE_2__.BindingInSyntax(binding);
    }
    BindingInWhenOnSyntax.prototype.inRequestScope = function () {
        return this._bindingInSyntax.inRequestScope();
    };
    BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
        return this._bindingInSyntax.inSingletonScope();
    };
    BindingInWhenOnSyntax.prototype.inTransientScope = function () {
        return this._bindingInSyntax.inTransientScope();
    };
    BindingInWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    BindingInWhenOnSyntax.prototype.onDeactivation = function (handler) {
        return this._bindingOnSyntax.onDeactivation(handler);
    };
    return BindingInWhenOnSyntax;
}());

//# sourceMappingURL=binding_in_when_on_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_on_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_on_syntax.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingOnSyntax": () => (/* binding */ BindingOnSyntax)
/* harmony export */ });
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");

var BindingOnSyntax = (function () {
    function BindingOnSyntax(binding) {
        this._binding = binding;
    }
    BindingOnSyntax.prototype.onActivation = function (handler) {
        this._binding.onActivation = handler;
        return new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingWhenSyntax(this._binding);
    };
    BindingOnSyntax.prototype.onDeactivation = function (handler) {
        this._binding.onDeactivation = handler;
        return new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingWhenSyntax(this._binding);
    };
    return BindingOnSyntax;
}());

//# sourceMappingURL=binding_on_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_to_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_to_syntax.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingToSyntax": () => (/* binding */ BindingToSyntax)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_in_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js");




var BindingToSyntax = (function () {
    function BindingToSyntax(binding) {
        this._binding = binding;
    }
    BindingToSyntax.prototype.to = function (constructor) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Instance;
        this._binding.implementationType = constructor;
        return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toSelf = function () {
        if (typeof this._binding.serviceIdentifier !== "function") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__.INVALID_TO_SELF_VALUE);
        }
        var self = this._binding.serviceIdentifier;
        return this.to(self);
    };
    BindingToSyntax.prototype.toConstantValue = function (value) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.ConstantValue;
        this._binding.cache = value;
        this._binding.dynamicValue = null;
        this._binding.implementationType = null;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toDynamicValue = function (func) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.DynamicValue;
        this._binding.cache = null;
        this._binding.dynamicValue = func;
        this._binding.implementationType = null;
        return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toConstructor = function (constructor) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Constructor;
        this._binding.implementationType = constructor;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFactory = function (factory) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Factory;
        this._binding.factory = factory;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFunction = function (func) {
        if (typeof func !== "function") {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__.INVALID_FUNCTION_BINDING);
        }
        var bindingWhenOnSyntax = this.toConstantValue(func);
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Function;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton;
        return bindingWhenOnSyntax;
    };
    BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Factory;
        this._binding.factory = function (context) {
            var autofactory = function () { return context.container.get(serviceIdentifier); };
            return autofactory;
        };
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toAutoNamedFactory = function (serviceIdentifier) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Factory;
        this._binding.factory = function (context) {
            return function (named) { return context.container.getNamed(serviceIdentifier, named); };
        };
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toProvider = function (provider) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Provider;
        this._binding.provider = provider;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingScopeEnum.Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toService = function (service) {
        this.toDynamicValue(function (context) { return context.container.get(service); });
    };
    return BindingToSyntax;
}());

//# sourceMappingURL=binding_to_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js":
/*!********************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_when_on_syntax.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingWhenOnSyntax": () => (/* binding */ BindingWhenOnSyntax)
/* harmony export */ });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");


var BindingWhenOnSyntax = (function () {
    function BindingWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__.BindingOnSyntax(this._binding);
    }
    BindingWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    BindingWhenOnSyntax.prototype.onDeactivation = function (handler) {
        return this._bindingOnSyntax.onDeactivation(handler);
    };
    return BindingWhenOnSyntax;
}());

//# sourceMappingURL=binding_when_on_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_when_syntax.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_when_syntax.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingWhenSyntax": () => (/* binding */ BindingWhenSyntax)
/* harmony export */ });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _constraint_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraint_helpers */ "./node_modules/inversify/es/syntax/constraint_helpers.js");


var BindingWhenSyntax = (function () {
    function BindingWhenSyntax(binding) {
        this._binding = binding;
    }
    BindingWhenSyntax.prototype.when = function (constraint) {
        this._binding.constraint = constraint;
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
        this._binding.constraint = (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.namedConstraint)(name);
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
        this._binding.constraint = function (request) {
            if (request === null) {
                return false;
            }
            var targetIsDefault = (request.target !== null) &&
                (!request.target.isNamed()) &&
                (!request.target.isTagged());
            return targetIsDefault;
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
        this._binding.constraint = (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.taggedConstraint)(tag)(value);
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
        this._binding.constraint = function (request) {
            return request !== null && (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.typeConstraint)(parent)(request.parentRequest);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentNamed = function (name) {
        this._binding.constraint = function (request) {
            return request !== null && (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.namedConstraint)(name)(request.parentRequest);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return request !== null && (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.taggedConstraint)(tag)(value)(request.parentRequest);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return request !== null && (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.typeConstraint)(ancestor));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return request !== null && !(0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.typeConstraint)(ancestor));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return request !== null && (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.namedConstraint)(name));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return request !== null && !(0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.namedConstraint)(name));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return request !== null && (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.taggedConstraint)(tag)(value));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return request !== null && !(0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.taggedConstraint)(tag)(value));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return request !== null && (0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, constraint);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return request !== null && !(0,_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__.traverseAncerstors)(request, constraint);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__.BindingOnSyntax(this._binding);
    };
    return BindingWhenSyntax;
}());

//# sourceMappingURL=binding_when_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/constraint_helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/constraint_helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "namedConstraint": () => (/* binding */ namedConstraint),
/* harmony export */   "taggedConstraint": () => (/* binding */ taggedConstraint),
/* harmony export */   "traverseAncerstors": () => (/* binding */ traverseAncerstors),
/* harmony export */   "typeConstraint": () => (/* binding */ typeConstraint)
/* harmony export */ });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");


var traverseAncerstors = function (request, constraint) {
    var parent = request.parentRequest;
    if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
    }
    else {
        return false;
    }
};
var taggedConstraint = function (key) { return function (value) {
    var constraint = function (request) {
        return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };
    constraint.metaData = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata(key, value);
    return constraint;
}; };
var namedConstraint = taggedConstraint(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__.NAMED_TAG);
var typeConstraint = function (type) { return function (request) {
    var binding = null;
    if (request !== null) {
        binding = request.bindings[0];
        if (typeof type === "string") {
            var serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
        }
        else {
            var constructor = request.bindings[0].implementationType;
            return type === constructor;
        }
    }
    return false;
}; };

//# sourceMappingURL=constraint_helpers.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/async.js":
/*!**************************************************!*\
  !*** ./node_modules/inversify/es/utils/async.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isPromiseOrContainsPromise": () => (/* binding */ isPromiseOrContainsPromise)
/* harmony export */ });
function isPromise(object) {
    var isObjectOrFunction = (typeof object === 'object' && object !== null) || typeof object === 'function';
    return isObjectOrFunction && typeof object.then === "function";
}
function isPromiseOrContainsPromise(object) {
    if (isPromise(object)) {
        return true;
    }
    return Array.isArray(object) && object.some(isPromise);
}

//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/binding_utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/utils/binding_utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ensureFullyBound": () => (/* binding */ ensureFullyBound),
/* harmony export */   "getFactoryDetails": () => (/* binding */ getFactoryDetails),
/* harmony export */   "multiBindToService": () => (/* binding */ multiBindToService)
/* harmony export */ });
/* harmony import */ var _inversify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inversify */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _factory_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory_type */ "./node_modules/inversify/es/utils/factory_type.js");




var multiBindToService = function (container) {
    return function (service) {
        return function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            return types.forEach(function (t) { return container.bind(t).toService(service); });
        };
    };
};
var ensureFullyBound = function (binding) {
    var boundValue = null;
    switch (binding.type) {
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.ConstantValue:
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Function:
            boundValue = binding.cache;
            break;
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Constructor:
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Instance:
            boundValue = binding.implementationType;
            break;
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.DynamicValue:
            boundValue = binding.dynamicValue;
            break;
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Provider:
            boundValue = binding.provider;
            break;
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Factory:
            boundValue = binding.factory;
            break;
    }
    if (boundValue === null) {
        var serviceIdentifierAsString = (0,_inversify__WEBPACK_IMPORTED_MODULE_1__.getServiceIdentifierAsString)(binding.serviceIdentifier);
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__.INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
    }
};
var getFactoryDetails = function (binding) {
    switch (binding.type) {
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Factory:
            return { factory: binding.factory, factoryType: _factory_type__WEBPACK_IMPORTED_MODULE_3__.FactoryType.Factory };
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.Provider:
            return { factory: binding.provider, factoryType: _factory_type__WEBPACK_IMPORTED_MODULE_3__.FactoryType.Provider };
        case _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__.BindingTypeEnum.DynamicValue:
            return { factory: binding.dynamicValue, factoryType: _factory_type__WEBPACK_IMPORTED_MODULE_3__.FactoryType.DynamicValue };
        default:
            throw new Error("Unexpected factory type " + binding.type);
    }
};
//# sourceMappingURL=binding_utils.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/clonable.js":
/*!*****************************************************!*\
  !*** ./node_modules/inversify/es/utils/clonable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isClonable": () => (/* binding */ isClonable)
/* harmony export */ });
function isClonable(obj) {
    return (typeof obj === 'object')
        && (obj !== null)
        && ('clone' in obj)
        && typeof obj.clone === 'function';
}

//# sourceMappingURL=clonable.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/exceptions.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/utils/exceptions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isStackOverflowExeption": () => (/* binding */ isStackOverflowExeption),
/* harmony export */   "tryAndThrowErrorIfStackOverflow": () => (/* binding */ tryAndThrowErrorIfStackOverflow)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");

function isStackOverflowExeption(error) {
    return (error instanceof RangeError ||
        error.message === _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.STACK_OVERFLOW);
}
var tryAndThrowErrorIfStackOverflow = function (fn, errorCallback) {
    try {
        return fn();
    }
    catch (error) {
        if (isStackOverflowExeption(error)) {
            error = errorCallback();
        }
        throw error;
    }
};
//# sourceMappingURL=exceptions.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/factory_type.js":
/*!*********************************************************!*\
  !*** ./node_modules/inversify/es/utils/factory_type.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactoryType": () => (/* binding */ FactoryType)
/* harmony export */ });
var FactoryType;
(function (FactoryType) {
    FactoryType["DynamicValue"] = "toDynamicValue";
    FactoryType["Factory"] = "toFactory";
    FactoryType["Provider"] = "toProvider";
})(FactoryType || (FactoryType = {}));
//# sourceMappingURL=factory_type.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/id.js":
/*!***********************************************!*\
  !*** ./node_modules/inversify/es/utils/id.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
var idCounter = 0;
function id() {
    return idCounter++;
}

//# sourceMappingURL=id.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/js.js":
/*!***********************************************!*\
  !*** ./node_modules/inversify/es/utils/js.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstArrayDuplicate": () => (/* binding */ getFirstArrayDuplicate)
/* harmony export */ });
function getFirstArrayDuplicate(array) {
    var seenValues = new Set();
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var entry = array_1[_i];
        if (seenValues.has(entry)) {
            return entry;
        }
        else {
            seenValues.add(entry);
        }
    }
    return undefined;
}
//# sourceMappingURL=js.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/serialization.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/utils/serialization.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circularDependencyToException": () => (/* binding */ circularDependencyToException),
/* harmony export */   "getFunctionName": () => (/* binding */ getFunctionName),
/* harmony export */   "getServiceIdentifierAsString": () => (/* binding */ getServiceIdentifierAsString),
/* harmony export */   "getSymbolDescription": () => (/* binding */ getSymbolDescription),
/* harmony export */   "listMetadataForTarget": () => (/* binding */ listMetadataForTarget),
/* harmony export */   "listRegisteredBindingsForServiceIdentifier": () => (/* binding */ listRegisteredBindingsForServiceIdentifier)
/* harmony export */ });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");

function getServiceIdentifierAsString(serviceIdentifier) {
    if (typeof serviceIdentifier === "function") {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier.name;
    }
    else if (typeof serviceIdentifier === "symbol") {
        return serviceIdentifier.toString();
    }
    else {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier;
    }
}
function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
    var registeredBindingsList = "";
    var registeredBindings = getBindings(container, serviceIdentifier);
    if (registeredBindings.length !== 0) {
        registeredBindingsList = "\nRegistered bindings:";
        registeredBindings.forEach(function (binding) {
            var name = "Object";
            if (binding.implementationType !== null) {
                name = getFunctionName(binding.implementationType);
            }
            registeredBindingsList = registeredBindingsList + "\n " + name;
            if (binding.constraint.metaData) {
                registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
            }
        });
    }
    return registeredBindingsList;
}
function alreadyDependencyChain(request, serviceIdentifier) {
    if (request.parentRequest === null) {
        return false;
    }
    else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
        return true;
    }
    else {
        return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
    }
}
function dependencyChainToString(request) {
    function _createStringArr(req, result) {
        if (result === void 0) { result = []; }
        var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
        result.push(serviceIdentifier);
        if (req.parentRequest !== null) {
            return _createStringArr(req.parentRequest, result);
        }
        return result;
    }
    var stringArr = _createStringArr(request);
    return stringArr.reverse().join(" --> ");
}
function circularDependencyToException(request) {
    request.childRequests.forEach(function (childRequest) {
        if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
            var services = dependencyChainToString(childRequest);
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__.CIRCULAR_DEPENDENCY + " " + services);
        }
        else {
            circularDependencyToException(childRequest);
        }
    });
}
function listMetadataForTarget(serviceIdentifierString, target) {
    if (target.isTagged() || target.isNamed()) {
        var m_1 = "";
        var namedTag = target.getNamedTag();
        var otherTags = target.getCustomTags();
        if (namedTag !== null) {
            m_1 += namedTag.toString() + "\n";
        }
        if (otherTags !== null) {
            otherTags.forEach(function (tag) {
                m_1 += tag.toString() + "\n";
            });
        }
        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
    }
    else {
        return " " + serviceIdentifierString;
    }
}
function getFunctionName(func) {
    if (func.name) {
        return func.name;
    }
    else {
        var name_1 = func.toString();
        var match = name_1.match(/^function\s*([^\s(]+)/);
        return match ? match[1] : "Anonymous function: " + name_1;
    }
}
function getSymbolDescription(symbol) {
    return symbol.toString().slice(7, -1);
}

//# sourceMappingURL=serialization.js.map

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/reflect-metadata/Reflect.js":
/*!**************************************************!*\
  !*** ./node_modules/reflect-metadata/Reflect.js ***!
  \**************************************************/
/***/ (() => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ "./node_modules/semver-compare/index.js":
/*!**********************************************!*\
  !*** ./node_modules/semver-compare/index.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = function cmp (a, b) {
    var pa = a.split('.');
    var pb = b.split('.');
    for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return 1;
        if (nb > na) return -1;
        if (!isNaN(na) && isNaN(nb)) return 1;
        if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
};


/***/ }),

/***/ "./node_modules/semver/semver.js":
/*!***************************************!*\
  !*** ./node_modules/semver/semver.js ***!
  \***************************************/
/***/ ((module, exports) => {

exports = module.exports = SemVer

var debug
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    args.unshift('SEMVER')
    console.log.apply(console, args)
  }
} else {
  debug = function () {}
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0'

var MAX_LENGTH = 256
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16

// The actual regexps go on exports.re
var re = exports.re = []
var src = exports.src = []
var R = 0

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*'
var NUMERICIDENTIFIERLOOSE = R++
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')'

var MAINVERSIONLOOSE = R++
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')'

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')'

var PRERELEASEIDENTIFIERLOOSE = R++
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')'

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))'

var PRERELEASELOOSE = R++
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?'

src[FULL] = '^' + FULLPLAIN + '$'

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?'

var LOOSE = R++
src[LOOSE] = '^' + LOOSEPLAIN + '$'

var GTLT = R++
src[GTLT] = '((?:<|>)?=?)'

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
var XRANGEIDENTIFIER = R++
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*'

var XRANGEPLAIN = R++
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?'

var XRANGEPLAINLOOSE = R++
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?'

var XRANGE = R++
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$'
var XRANGELOOSE = R++
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])'

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++
src[LONETILDE] = '(?:~>?)'

var TILDETRIM = R++
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+'
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g')
var tildeTrimReplace = '$1~'

var TILDE = R++
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$'
var TILDELOOSE = R++
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++
src[LONECARET] = '(?:\\^)'

var CARETTRIM = R++
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+'
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g')
var caretTrimReplace = '$1^'

var CARET = R++
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$'
var CARETLOOSE = R++
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$'
var COMPARATOR = R++
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g')
var comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$'

var HYPHENRANGELOOSE = R++
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$'

// Star ranges basically just allow anything at all.
var STAR = R++
src[STAR] = '(<|>)?=?\\s*\\*'

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i])
  if (!re[i]) {
    re[i] = new RegExp(src[i])
  }
}

exports.parse = parse
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[LOOSE] : re[FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid
function valid (version, options) {
  var v = parse(version, options)
  return v ? v.version : null
}

exports.clean = clean
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}

exports.SemVer = SemVer

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options)
  this.options = options
  this.loose = !!options.loose

  var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL])

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version

  // these are actually numbers
  this.major = +m[1]
  this.minor = +m[2]
  this.patch = +m[3]

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = []
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
    })
  }

  this.build = m[5] ? m[5].split('.') : []
  this.format()
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch
  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.')
  }
  return this.version
}

SemVer.prototype.toString = function () {
  return this.version
}

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other)
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return this.compareMain(other) || this.comparePre(other)
}

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
}

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0
  do {
    var a = this.prerelease[i]
    var b = other.prerelease[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor = 0
      this.major++
      this.inc('pre', identifier)
      break
    case 'preminor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor++
      this.inc('pre', identifier)
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0
      this.inc('patch', identifier)
      this.inc('pre', identifier)
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier)
      }
      this.inc('pre', identifier)
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++
      }
      this.minor = 0
      this.patch = 0
      this.prerelease = []
      break
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++
      }
      this.patch = 0
      this.prerelease = []
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++
      }
      this.prerelease = []
      break
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0]
      } else {
        var i = this.prerelease.length
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++
            i = -2
          }
        }
        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0)
        }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0]
          }
        } else {
          this.prerelease = [identifier, 0]
        }
      }
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format()
  this.raw = this.version
  return this
}

exports.inc = inc
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose
    loose = undefined
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
  } else {
    var v1 = parse(version1)
    var v2 = parse(version2)
    var prefix = ''
    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre'
      var defaultResult = 'prerelease'
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers

var numeric = /^[0-9]+$/
function compareIdentifiers (a, b) {
  var anum = numeric.test(a)
  var bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.rcompare = rcompare
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose)
  })
}

exports.rsort = rsort
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose)
  })
}

exports.gt = gt
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
  }

  debug('comparator', comp, options)
  this.options = options
  this.loose = !!options.loose
  this.parse(comp)

  if (this.semver === ANY) {
    this.value = ''
  } else {
    this.value = this.operator + this.semver.version
  }

  debug('comp', this)
}

var ANY = {}
Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var m = comp.match(r)

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1]
  if (this.operator === '=') {
    this.operator = ''
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY
  } else {
    this.semver = new SemVer(m[2], this.options.loose)
  }
}

Comparator.prototype.toString = function () {
  return this.value
}

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose)

  if (this.semver === ANY) {
    return true
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  return cmp(version, this.operator, this.semver, this.options)
}

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  var rangeTmp

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, options)
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, options)
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>')
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<')
  var sameSemVer = this.semver.version === comp.semver.version
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=')
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'))
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'))

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
}

exports.Range = Range
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options
  this.loose = !!options.loose
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  })

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format()
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim()
  return this.range
}

Range.prototype.toString = function () {
  return this.range
}

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose
  range = range.trim()
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE]
  range = range.replace(hr, hyphenReplace)
  debug('hyphen replace', range)
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace)
  debug('comparator trim', range, re[COMPARATORTRIM])

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace)

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace)

  // normalize spaces
  range = range.split(/\s+/).join(' ')

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/)
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    })
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this)

  return set
}

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, options)
        })
      })
    })
  })
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
  var r = options.loose ? re[TILDELOOSE] : re[TILDE]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0'
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
  debug('caret', comp, options)
  var r = options.loose ? re[CARETLOOSE] : re[CARET]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0'
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'
      }
    }

    debug('caret return', ret)
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
  comp = comp.trim()
  var r = options.loose ? re[XRANGELOOSE] : re[XRANGE]
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    var xM = isX(M)
    var xm = xM || isX(m)
    var xp = xm || isX(p)
    var anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      ret = gtlt + M + '.' + m + '.' + p
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '')
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0'
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0'
  } else {
    from = '>=' + from
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0'
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0'
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
  } else {
    to = '<=' + to
  }

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
}

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies
function satisfies (version, range, options) {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying
function maxSatisfying (versions, range, options) {
  var max = null
  var maxSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}

exports.minSatisfying = minSatisfying
function minSatisfying (versions, range, options) {
  var min = null
  var minSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}

exports.minVersion = minVersion
function minVersion (range, loose) {
  range = new Range(range, loose)

  var minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    })
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside
function outside (version, range, hilo, options) {
  version = new SemVer(version, options)
  range = new Range(range, options)

  var gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    var high = null
    var low = null

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease
function prerelease (version, options) {
  var parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects
function intersects (r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce
function coerce (version) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  var match = version.match(re[COERCE])

  if (match == null) {
    return null
  }

  return parse(match[1] +
    '.' + (match[2] || '0') +
    '.' + (match[3] || '0'))
}


/***/ }),

/***/ "./src/agent/mock/build-agent.ts":
/*!***************************************!*\
  !*** ./src/agent/mock/build-agent.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuildAgent = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/es/inversify.js");
let BuildAgent = class BuildAgent {
    proxyConfiguration(url) {
        console.log('proxyConfiguration');
        return undefined;
    }
    get agentName() {
        console.log('getAgentName');
        return 'Mock';
    }
    find(toolName, versionSpec, arch) {
        console.log('find');
        return 'find';
    }
    cacheDir(sourceDir, tool, version, arch) {
        console.log('cacheDir');
        return Promise.resolve('cacheDir');
    }
    createTempDir() {
        console.log('createTempDir');
        return Promise.resolve('createTempDir');
    }
    debug(message) {
        console.log('debug');
    }
    setFailed(message, done) {
        console.log('setFailed');
    }
    setSucceeded(message, done) {
        console.log('setSucceeded');
    }
    exportVariable(name, val) {
        console.log('exportVariable');
    }
    getVariable(name) {
        console.log('getVariable');
        return 'getVariable';
    }
    addPath(inputPath) {
        console.log('addPath');
    }
    which(tool, check) {
        console.log('which');
        return Promise.resolve('which');
    }
    exec(exec, args) {
        return Promise.resolve({
            code: 0,
            error: null,
            stderr: 'result.stderr',
            stdout: 'result.stdout'
        });
    }
    getSourceDir() {
        console.log('getSourceDir');
        return 'getSourceDir';
    }
    setOutput(name, value) {
        console.log('setOutput');
    }
    getInput(input, required) {
        console.log('getInput');
        return 'getInput';
    }
    getListInput(input, required) {
        console.log('getListInput');
        return ['getInput'];
    }
    getBooleanInput(input, required) {
        console.log('getBooleanInput');
        return false;
    }
    isValidInputFile(input, file) {
        console.log('isValidInputFile');
        return false;
    }
    fileExists(file) {
        console.log('fileExists');
        return false;
    }
    directoryExists(file) {
        console.log('directoryExists');
        return false;
    }
};
BuildAgent = __decorate([
    (0, inversify_1.injectable)()
], BuildAgent);
exports.BuildAgent = BuildAgent;


/***/ }),

/***/ "./src/core/dotnet-tool.ts":
/*!*********************************!*\
  !*** ./src/core/dotnet-tool.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var DotnetTool_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DotnetTool = void 0;
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const os = __importStar(__webpack_require__(/*! os */ "os"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const http = __importStar(__webpack_require__(/*! typed-rest-client/HttpClient */ "./node_modules/typed-rest-client/HttpClient.js"));
const inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/es/inversify.js");
const models_1 = __webpack_require__(/*! ./models */ "./src/core/models.ts");
let DotnetTool = DotnetTool_1 = class DotnetTool {
    constructor(buildAgent, versionManager) {
        this.buildAgent = buildAgent;
        this.versionManager = versionManager;
        this.httpClient = new http.HttpClient('dotnet', undefined, this.buildAgent.proxyConfiguration(DotnetTool_1.nugetRoot));
    }
    disableTelemetry() {
        this.buildAgent.exportVariable('DOTNET_CLI_TELEMETRY_OPTOUT', 'true');
        this.buildAgent.exportVariable('DOTNET_NOLOGO', 'true');
    }
    execute(cmd, args) {
        console.log(`Command: ${cmd} ${args.join(' ')}`);
        return this.buildAgent.exec(cmd, args);
    }
    toolInstall(toolName, checkLatest, setupSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('');
            console.log('--------------------------');
            console.log(`Installing ${toolName} version ` + setupSettings.versionSpec);
            console.log('--------------------------');
            if (this.versionManager.isExplicitVersion(setupSettings.versionSpec)) {
                checkLatest = false; // check latest doesn't make sense when explicit version
            }
            let toolPath;
            if (!checkLatest) {
                //
                // Let's try and resolve the version spec locally first
                //
                toolPath = this.buildAgent.find(toolName, setupSettings.versionSpec);
            }
            if (!toolPath) {
                let version;
                if (this.versionManager.isExplicitVersion(setupSettings.versionSpec)) {
                    //
                    // Explicit version was specified. No need to query for list of versions.
                    //
                    version = setupSettings.versionSpec;
                }
                else {
                    //
                    // Let's query and resolve the latest version for the versionSpec.
                    // If the version is an explicit version (1.1.1 or v1.1.1) then no need to query.
                    // If your tool doesn't offer a mechanism to query,
                    // then it can only support exact version inputs.
                    //
                    version = yield this.queryLatestMatch(toolName, setupSettings.versionSpec, setupSettings.includePrerelease);
                    if (!version) {
                        throw new Error(`Unable to find ${toolName} version '${setupSettings.versionSpec}'.`);
                    }
                    //
                    // Check the cache for the resolved version.
                    //
                    toolPath = this.buildAgent.find(toolName, version);
                }
                if (!toolPath) {
                    //
                    // Download, extract, cache
                    //
                    toolPath = yield this.acquireTool(toolName, version, setupSettings.ignoreFailedSources);
                }
            }
            //
            // Prepend the tools path. This prepends the PATH for the current process and
            // instructs the agent to prepend for each task that follows.
            //
            this.buildAgent.debug(`toolPath: ${toolPath}`);
            if (os.platform() !== 'win32' &&
                !this.buildAgent.getVariable('DOTNET_ROOT')) {
                let dotnetPath = yield this.buildAgent.which('dotnet');
                dotnetPath = fs.readlinkSync(dotnetPath) || dotnetPath;
                const dotnetRoot = path.dirname(dotnetPath);
                this.buildAgent.exportVariable('DOTNET_ROOT', dotnetRoot);
            }
            this.buildAgent.addPath(toolPath);
            return toolPath;
        });
    }
    queryLatestMatch(toolName, versionSpec, includePrerelease) {
        return __awaiter(this, void 0, void 0, function* () {
            this.buildAgent.debug(`querying tool versions for ${toolName}${versionSpec ? `@${versionSpec}` : ''} ${includePrerelease ? 'including pre-releases' : ''}`);
            const downloadPath = `${DotnetTool_1.nugetRoot}query?q=${encodeURIComponent(toolName.toLowerCase())}&prerelease=${includePrerelease ? 'true' : 'false'}&semVerLevel=2.0.0`;
            const res = yield this.httpClient.get(downloadPath);
            if (!res || res.message.statusCode !== 200) {
                return null;
            }
            const body = yield res.readBody();
            const data = JSON.parse(body).data;
            const versions = data[0].versions.map(x => x.version);
            if (!versions || !versions.length) {
                return null;
            }
            this.buildAgent.debug(`got versions: ${versions.join(', ')}`);
            return this.versionManager.evaluateVersions(versions, versionSpec);
        });
    }
    acquireTool(toolName, version, ignoreFailedSources) {
        return __awaiter(this, void 0, void 0, function* () {
            const tempDirectory = yield this.buildAgent.createTempDir();
            let args = ['tool', 'install', toolName, '--tool-path', tempDirectory];
            if (ignoreFailedSources) {
                args.push('--ignore-failed-sources');
            }
            if (version) {
                version = this.versionManager.cleanVersion(version);
                args = args.concat(['--version', version]);
            }
            const result = yield this.execute('dotnet', args);
            const status = result.code === 0 ? 'success' : 'failure';
            const message = result.code === 0 ? result.stdout : result.stderr;
            this.buildAgent.debug(`tool install result: ${status} ${message}`);
            if (result.code) {
                throw new Error('Error installing tool');
            }
            return yield this.buildAgent.cacheDir(tempDirectory, toolName, version);
        });
    }
};
DotnetTool.nugetRoot = 'https://api-v2v3search-0.nuget.org/';
DotnetTool = DotnetTool_1 = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(models_1.TYPES.IBuildAgent)),
    __param(1, (0, inversify_1.inject)(models_1.TYPES.IVersionManager)),
    __metadata("design:paramtypes", [Object, Object])
], DotnetTool);
exports.DotnetTool = DotnetTool;


/***/ }),

/***/ "./src/core/ioc.ts":
/*!*************************!*\
  !*** ./src/core/ioc.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/es/inversify.js");
const versionManager_1 = __webpack_require__(/*! ./versionManager */ "./src/core/versionManager.ts");
const models_1 = __webpack_require__(/*! ./models */ "./src/core/models.ts");
const build_agent_1 = __webpack_require__(/*! ../agent/mock/build-agent */ "./src/agent/mock/build-agent.ts");
const container = new inversify_1.Container();
container.bind(models_1.TYPES.IVersionManager).to(versionManager_1.VersionManager);
container.bind(models_1.TYPES.IBuildAgent).to(build_agent_1.BuildAgent);
exports["default"] = container;


/***/ }),

/***/ "./src/core/models.ts":
/*!****************************!*\
  !*** ./src/core/models.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetupFields = exports.TYPES = void 0;
exports.TYPES = {
    IBuildAgent: Symbol.for('BuildAgent'),
    IDotnetTool: Symbol.for('DotnetTool'),
    IGitVersionTool: Symbol.for('GitVersionTool'),
    IGitReleaseManagerTool: Symbol.for('GitReleaseManagerTool'),
    IVersionManager: Symbol.for('VersionManager')
};
var SetupFields;
(function (SetupFields) {
    SetupFields["includePrerelease"] = "includePrerelease";
    SetupFields["versionSpec"] = "versionSpec";
    SetupFields["ignoreFailedSources"] = "ignoreFailedSources";
})(SetupFields = exports.SetupFields || (exports.SetupFields = {}));


/***/ }),

/***/ "./src/core/settings.ts":
/*!******************************!*\
  !*** ./src/core/settings.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Settings = void 0;
const models_1 = __webpack_require__(/*! ./models */ "./src/core/models.ts");
class Settings {
    static getSetupSettings(buildAgent) {
        const versionSpec = buildAgent.getInput(models_1.SetupFields.versionSpec);
        const includePrerelease = buildAgent.getBooleanInput(models_1.SetupFields.includePrerelease);
        const ignoreFailedSources = buildAgent.getBooleanInput(models_1.SetupFields.ignoreFailedSources);
        return {
            versionSpec,
            includePrerelease,
            ignoreFailedSources
        };
    }
}
exports.Settings = Settings;


/***/ }),

/***/ "./src/core/versionManager.ts":
/*!************************************!*\
  !*** ./src/core/versionManager.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VersionManager = void 0;
const semver_compare_1 = __importDefault(__webpack_require__(/*! semver-compare */ "./node_modules/semver-compare/index.js"));
const semver = __importStar(__webpack_require__(/*! semver */ "./node_modules/semver/semver.js"));
const inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/es/inversify.js");
const models_1 = __webpack_require__(/*! ./models */ "./src/core/models.ts");
let VersionManager = class VersionManager {
    constructor(buildAgent) {
        this.buildAgent = buildAgent;
    }
    isExplicitVersion(versionSpec) {
        const c = semver.clean(versionSpec);
        this.buildAgent.debug('isExplicit: ' + c);
        const valid = semver.valid(c) != null;
        this.buildAgent.debug('explicit? ' + valid);
        return valid;
    }
    evaluateVersions(versions, versionSpec) {
        let version;
        this.buildAgent.debug('evaluating ' + versions.length + ' versions');
        versions = versions.sort(semver_compare_1.default);
        for (let i = versions.length - 1; i >= 0; i--) {
            const potential = versions[i];
            const satisfied = semver.satisfies(potential, versionSpec);
            if (satisfied) {
                version = potential;
                break;
            }
        }
        if (version) {
            this.buildAgent.debug('matched: ' + version);
        }
        else {
            this.buildAgent.debug('match not found');
        }
        return version;
    }
    cleanVersion(version) {
        this.buildAgent.debug('cleaning: ' + version);
        return semver.clean(version);
    }
};
VersionManager = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(models_1.TYPES.IBuildAgent)),
    __metadata("design:paramtypes", [Object])
], VersionManager);
exports.VersionManager = VersionManager;


/***/ }),

/***/ "./src/tasks/gitversion/main.ts":
/*!**************************************!*\
  !*** ./src/tasks/gitversion/main.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.run = exports.setup = void 0;
const models_1 = __webpack_require__(/*! ../../core/models */ "./src/core/models.ts");
const settings_1 = __webpack_require__(/*! ../../core/settings */ "./src/core/settings.ts");
const settings_2 = __webpack_require__(/*! ../../tools/gitversion/settings */ "./src/tools/gitversion/settings.ts");
const tool_1 = __webpack_require__(/*! ../../tools/gitversion/tool */ "./src/tools/gitversion/tool.ts");
const ioc_1 = __importDefault(__webpack_require__(/*! ../../core/ioc */ "./src/core/ioc.ts"));
ioc_1.default.bind(models_1.TYPES.IGitVersionTool).to(tool_1.GitVersionTool);
const gitVersionTool = ioc_1.default.get(models_1.TYPES.IGitVersionTool);
const buildAgent = ioc_1.default.get(models_1.TYPES.IBuildAgent);
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            gitVersionTool.disableTelemetry();
            const settings = settings_1.Settings.getSetupSettings(buildAgent);
            yield gitVersionTool.install(settings);
            buildAgent.setSucceeded('GitVersion installed successfully', true);
        }
        catch (error) {
            buildAgent.setFailed(error.message, true);
        }
    });
}
exports.setup = setup;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            gitVersionTool.disableTelemetry();
            const settings = settings_2.Settings.getGitVersionSettings(buildAgent);
            const result = yield gitVersionTool.run(settings);
            const { stdout } = result;
            const jsonOutput = stdout.substring(stdout.lastIndexOf('{'), stdout.lastIndexOf('}') + 1);
            const gitversion = JSON.parse(jsonOutput);
            gitVersionTool.writeGitVersionToAgent(gitversion);
            if (result.code === 0) {
                buildAgent.setSucceeded('GitVersion executed successfully', true);
            }
            else {
                buildAgent.setFailed(result.error.message, true);
            }
        }
        catch (error) {
            buildAgent.setFailed(error, true);
        }
    });
}
exports.run = run;


/***/ }),

/***/ "./src/tools/gitversion/models.ts":
/*!****************************************!*\
  !*** ./src/tools/gitversion/models.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecuteFields = void 0;
var ExecuteFields;
(function (ExecuteFields) {
    ExecuteFields["targetPath"] = "targetPath";
    ExecuteFields["useConfigFile"] = "useConfigFile";
    ExecuteFields["configFilePath"] = "configFilePath";
    ExecuteFields["updateAssemblyInfo"] = "updateAssemblyInfo";
    ExecuteFields["updateAssemblyInfoFilename"] = "updateAssemblyInfoFilename";
    ExecuteFields["additionalArguments"] = "additionalArguments";
    ExecuteFields["srcDir"] = "srcDir";
})(ExecuteFields = exports.ExecuteFields || (exports.ExecuteFields = {}));


/***/ }),

/***/ "./src/tools/gitversion/settings.ts":
/*!******************************************!*\
  !*** ./src/tools/gitversion/settings.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Settings = void 0;
const models_1 = __webpack_require__(/*! ./models */ "./src/tools/gitversion/models.ts");
class Settings {
    static getGitVersionSettings(buildAgent) {
        var _a;
        const targetPath = buildAgent.getInput(models_1.ExecuteFields.targetPath);
        const useConfigFile = buildAgent.getBooleanInput(models_1.ExecuteFields.useConfigFile);
        const configFilePath = buildAgent.getInput(models_1.ExecuteFields.configFilePath);
        const updateAssemblyInfo = buildAgent.getBooleanInput(models_1.ExecuteFields.updateAssemblyInfo);
        const updateAssemblyInfoFilename = buildAgent.getInput(models_1.ExecuteFields.updateAssemblyInfoFilename);
        const additionalArguments = buildAgent.getInput(models_1.ExecuteFields.additionalArguments);
        const srcDir = (_a = buildAgent.getSourceDir()) === null || _a === void 0 ? void 0 : _a.replace(/\\/g, '/');
        return {
            targetPath,
            useConfigFile,
            configFilePath,
            updateAssemblyInfo,
            updateAssemblyInfoFilename,
            additionalArguments,
            srcDir
        };
    }
}
exports.Settings = Settings;


/***/ }),

/***/ "./src/tools/gitversion/tool.ts":
/*!**************************************!*\
  !*** ./src/tools/gitversion/tool.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitVersionTool = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/es/inversify.js");
const models_1 = __webpack_require__(/*! ../../core/models */ "./src/core/models.ts");
const dotnet_tool_1 = __webpack_require__(/*! ../../core/dotnet-tool */ "./src/core/dotnet-tool.ts");
let GitVersionTool = class GitVersionTool extends dotnet_tool_1.DotnetTool {
    constructor(buildAgent, versionManager) {
        super(buildAgent, versionManager);
    }
    install(setupSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.toolInstall('GitVersion.Tool', false, setupSettings);
        });
    }
    run(options) {
        const workDir = this.getRepoDir(options.targetPath);
        const args = this.getArguments(workDir, options);
        return this.execute('dotnet-gitversion', args);
    }
    getRepoDir(targetPath) {
        let workDir;
        const srcDir = this.buildAgent.getSourceDir() || '.';
        if (!targetPath) {
            workDir = srcDir;
        }
        else {
            if (this.buildAgent.directoryExists(targetPath)) {
                workDir = targetPath;
            }
            else {
                throw new Error('Directory not found at ' + targetPath);
            }
        }
        return workDir.replace(/\\/g, '/');
    }
    getArguments(workDir, options) {
        let args = [workDir, '/output', 'json', '/output', 'buildserver'];
        const { useConfigFile, configFilePath, updateAssemblyInfo, updateAssemblyInfoFilename, additionalArguments } = options;
        if (useConfigFile) {
            if (this.buildAgent.isValidInputFile('configFilePath', configFilePath)) {
                args.push('/config', configFilePath);
            }
            else {
                throw new Error('GitVersion configuration file not found at ' +
                    configFilePath);
            }
        }
        if (updateAssemblyInfo) {
            args.push('/updateassemblyinfo');
            // You can specify 'updateAssemblyInfo' without 'updateAssemblyInfoFilename'.
            if ((updateAssemblyInfoFilename === null || updateAssemblyInfoFilename === void 0 ? void 0 : updateAssemblyInfoFilename.length) > 0) {
                if (this.buildAgent.isValidInputFile('updateAssemblyInfoFilename', updateAssemblyInfoFilename)) {
                    args.push(updateAssemblyInfoFilename);
                }
                else {
                    throw new Error('AssemblyInfoFilename file not found at ' +
                        updateAssemblyInfoFilename);
                }
            }
        }
        if (additionalArguments) {
            args = args.concat(this.argStringToArray(additionalArguments));
        }
        return args;
    }
    writeGitVersionToAgent(gitversion) {
        let properties = Object.keys(gitversion);
        let gitversionOutput = gitversion;
        properties.forEach(property => {
            const name = this.toCamelCase(property);
            const value = gitversionOutput[property];
            this.buildAgent.setOutput(name, value);
        });
    }
    argStringToArray(argString) {
        var args = [];
        var inQuotes = false;
        var escaped = false;
        var lastCharWasSpace = true;
        var arg = '';
        var append = function (c) {
            // we only escape double quotes.
            if (escaped && c !== '"') {
                arg += '\\';
            }
            arg += c;
            escaped = false;
        };
        for (var i = 0; i < argString.length; i++) {
            var c = argString.charAt(i);
            if (c === ' ' && !inQuotes) {
                if (!lastCharWasSpace) {
                    args.push(arg);
                    arg = '';
                }
                lastCharWasSpace = true;
                continue;
            }
            else {
                lastCharWasSpace = false;
            }
            if (c === '"') {
                if (!escaped) {
                    inQuotes = !inQuotes;
                }
                else {
                    append(c);
                }
                continue;
            }
            if (c === '\\' && escaped) {
                append(c);
                continue;
            }
            if (c === '\\' && inQuotes) {
                escaped = true;
                continue;
            }
            append(c);
            lastCharWasSpace = false;
        }
        if (!lastCharWasSpace) {
            args.push(arg.trim());
        }
        return args;
    }
    toCamelCase(input) {
        return input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0)
                return ''; // or if (/\s+/.test(match)) for white spaces
            return index == 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }
};
GitVersionTool = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(models_1.TYPES.IBuildAgent)),
    __param(1, (0, inversify_1.inject)(models_1.TYPES.IVersionManager)),
    __metadata("design:paramtypes", [Object, Object])
], GitVersionTool);
exports.GitVersionTool = GitVersionTool;


/***/ }),

/***/ "./node_modules/tunnel/index.js":
/*!**************************************!*\
  !*** ./node_modules/tunnel/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/tunnel */ "./node_modules/tunnel/lib/tunnel.js");


/***/ }),

/***/ "./node_modules/tunnel/lib/tunnel.js":
/*!*******************************************!*\
  !*** ./node_modules/tunnel/lib/tunnel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var net = __webpack_require__(/*! net */ "net");
var tls = __webpack_require__(/*! tls */ "tls");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var events = __webpack_require__(/*! events */ "events");
var assert = __webpack_require__(/*! assert */ "assert");
var util = __webpack_require__(/*! util */ "util");


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ "./node_modules/typed-rest-client/HttpClient.js":
/*!******************************************************!*\
  !*** ./node_modules/typed-rest-client/HttpClient.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const url = __webpack_require__(/*! url */ "url");
const http = __webpack_require__(/*! http */ "http");
const https = __webpack_require__(/*! https */ "https");
const util = __webpack_require__(/*! ./Util */ "./node_modules/typed-rest-client/Util.js");
let fs;
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
const HttpRedirectCodes = [HttpCodes.MovedPermanently, HttpCodes.ResourceMoved, HttpCodes.SeeOther, HttpCodes.TemporaryRedirect, HttpCodes.PermanentRedirect];
const HttpResponseRetryCodes = [HttpCodes.BadGateway, HttpCodes.ServiceUnavailable, HttpCodes.GatewayTimeout];
const NetworkRetryErrors = ['ECONNRESET', 'ENOTFOUND', 'ESOCKETTIMEDOUT', 'ETIMEDOUT', 'ECONNREFUSED'];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let buffer = Buffer.alloc(0);
            const encodingCharset = util.obtainContentCharset(this);
            // Extract Encoding from header: 'content-encoding'
            // Match `gzip`, `gzip, deflate` variations of GZIP encoding
            const contentEncoding = this.message.headers['content-encoding'] || '';
            const isGzippedEncoded = new RegExp('(gzip$)|(gzip, *deflate)').test(contentEncoding);
            this.message.on('data', function (data) {
                const chunk = (typeof data === 'string') ? Buffer.from(data, encodingCharset) : data;
                buffer = Buffer.concat([buffer, chunk]);
            }).on('end', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isGzippedEncoded) { // Process GZipped Response Body HERE
                        const gunzippedBody = yield util.decompressGzippedContent(buffer, encodingCharset);
                        resolve(gunzippedBody);
                    }
                    else {
                        resolve(buffer.toString(encodingCharset));
                    }
                });
            }).on('error', function (err) {
                reject(err);
            });
        }));
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = url.parse(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
var EnvironmentVariables;
(function (EnvironmentVariables) {
    EnvironmentVariables["HTTP_PROXY"] = "HTTP_PROXY";
    EnvironmentVariables["HTTPS_PROXY"] = "HTTPS_PROXY";
    EnvironmentVariables["NO_PROXY"] = "NO_PROXY";
})(EnvironmentVariables || (EnvironmentVariables = {}));
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        let no_proxy = process.env[EnvironmentVariables.NO_PROXY];
        if (no_proxy) {
            this._httpProxyBypassHosts = [];
            no_proxy.split(',').forEach(bypass => {
                this._httpProxyBypassHosts.push(util.buildProxyBypassRegexFromEnv(bypass));
            });
        }
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            this._httpProxy = requestOptions.proxy;
            if (requestOptions.proxy && requestOptions.proxy.proxyBypassHosts) {
                this._httpProxyBypassHosts = [];
                requestOptions.proxy.proxyBypassHosts.forEach(bypass => {
                    this._httpProxyBypassHosts.push(new RegExp(bypass, 'i'));
                });
            }
            this._certConfig = requestOptions.cert;
            if (this._certConfig) {
                // If using cert, need fs
                fs = __webpack_require__(/*! fs */ "fs");
                // cache the cert content into memory, so we don't have to read it from disk every time
                if (this._certConfig.caFile && fs.existsSync(this._certConfig.caFile)) {
                    this._ca = fs.readFileSync(this._certConfig.caFile, 'utf8');
                }
                if (this._certConfig.certFile && fs.existsSync(this._certConfig.certFile)) {
                    this._cert = fs.readFileSync(this._certConfig.certFile, 'utf8');
                }
                if (this._certConfig.keyFile && fs.existsSync(this._certConfig.keyFile)) {
                    this._key = fs.readFileSync(this._certConfig.keyFile, 'utf8');
                }
            }
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error("Client has already been disposed.");
            }
            let parsedUrl = url.parse(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            let maxTries = (this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1) ? this._maxRetries + 1 : 1;
            let numTries = 0;
            let response;
            while (numTries < maxTries) {
                try {
                    response = yield this.requestRaw(info, data);
                }
                catch (err) {
                    numTries++;
                    if (err && err.code && NetworkRetryErrors.indexOf(err.code) > -1 && numTries < maxTries) {
                        yield this._performExponentialBackoff(numTries);
                        continue;
                    }
                    throw err;
                }
                // Check if it's an authentication challenge
                if (response && response.message && response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (let i = 0; i < this.handlers.length; i++) {
                        if (this.handlers[i].canHandleAuthentication(response)) {
                            authenticationHandler = this.handlers[i];
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1
                    && this._allowRedirects
                    && redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers["location"];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    let parsedRedirectUrl = url.parse(redirectUrl);
                    if (parsedUrl.protocol == 'https:' && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) {
                        throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            }
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof (data) === 'string') {
            info.options.headers["Content-Length"] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', (sock) => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.destroy();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof (data) === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof (data) !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
        info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.timeout = (this.requestOptions && this.requestOptions.socketTimeout) || this._socketTimeout;
        this._socketTimeout = info.options.timeout;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers["user-agent"] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers && !this._isPresigned(url.format(requestUrl))) {
            this.handlers.forEach((handler) => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _isPresigned(requestUrl) {
        if (this.requestOptions && this.requestOptions.presignedUrlPatterns) {
            const patterns = this.requestOptions.presignedUrlPatterns;
            for (let i = 0; i < patterns.length; i++) {
                if (requestUrl.match(patterns[i])) {
                    return true;
                }
            }
        }
        return false;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => (c[k.toLowerCase()] = obj[k], c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxy = this._getProxy(parsedUrl);
        let useProxy = proxy.proxyUrl && proxy.proxyUrl.hostname && !this._isMatchInBypassProxyList(parsedUrl);
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __webpack_require__(/*! tunnel */ "./node_modules/tunnel/index.js");
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    proxyAuth: proxy.proxyAuth,
                    host: proxy.proxyUrl.hostname,
                    port: proxy.proxyUrl.port
                },
            };
            let tunnelAgent;
            const overHttps = proxy.proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, { rejectUnauthorized: false });
        }
        if (usingSsl && this._certConfig) {
            agent.options = Object.assign(agent.options || {}, { ca: this._ca, cert: this._cert, key: this._key, passphrase: this._certConfig.passphrase });
        }
        return agent;
    }
    _getProxy(parsedUrl) {
        let usingSsl = parsedUrl.protocol === 'https:';
        let proxyConfig = this._httpProxy;
        // fallback to http_proxy and https_proxy env
        let https_proxy = process.env[EnvironmentVariables.HTTPS_PROXY];
        let http_proxy = process.env[EnvironmentVariables.HTTP_PROXY];
        if (!proxyConfig) {
            if (https_proxy && usingSsl) {
                proxyConfig = {
                    proxyUrl: https_proxy
                };
            }
            else if (http_proxy) {
                proxyConfig = {
                    proxyUrl: http_proxy
                };
            }
        }
        let proxyUrl;
        let proxyAuth;
        if (proxyConfig) {
            if (proxyConfig.proxyUrl.length > 0) {
                proxyUrl = url.parse(proxyConfig.proxyUrl);
            }
            if (proxyConfig.proxyUsername || proxyConfig.proxyPassword) {
                proxyAuth = proxyConfig.proxyUsername + ":" + proxyConfig.proxyPassword;
            }
        }
        return { proxyUrl: proxyUrl, proxyAuth: proxyAuth };
    }
    _isMatchInBypassProxyList(parsedUrl) {
        if (!this._httpProxyBypassHosts) {
            return false;
        }
        let bypass = false;
        this._httpProxyBypassHosts.forEach(bypassHost => {
            if (bypassHost.test(parsedUrl.href)) {
                bypass = true;
            }
        });
        return bypass;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ "./node_modules/typed-rest-client/Util.js":
/*!************************************************!*\
  !*** ./node_modules/typed-rest-client/Util.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
const url = __webpack_require__(/*! url */ "url");
const path = __webpack_require__(/*! path */ "path");
const zlib = __webpack_require__(/*! zlib */ "zlib");
/**
 * creates an url from a request url and optional base url (http://server:8080)
 * @param {string} resource - a fully qualified url or relative path
 * @param {string} baseUrl - an optional baseUrl (http://server:8080)
 * @param {IRequestOptions} options - an optional options object, could include QueryParameters e.g.
 * @return {string} - resultant url
 */
function getUrl(resource, baseUrl, queryParams) {
    const pathApi = path.posix || path;
    let requestUrl = '';
    if (!baseUrl) {
        requestUrl = resource;
    }
    else if (!resource) {
        requestUrl = baseUrl;
    }
    else {
        const base = url.parse(baseUrl);
        const resultantUrl = url.parse(resource);
        // resource (specific per request) elements take priority
        resultantUrl.protocol = resultantUrl.protocol || base.protocol;
        resultantUrl.auth = resultantUrl.auth || base.auth;
        resultantUrl.host = resultantUrl.host || base.host;
        resultantUrl.pathname = pathApi.resolve(base.pathname, resultantUrl.pathname);
        if (!resultantUrl.pathname.endsWith('/') && resource.endsWith('/')) {
            resultantUrl.pathname += '/';
        }
        requestUrl = url.format(resultantUrl);
    }
    return queryParams ?
        getUrlWithParsedQueryParams(requestUrl, queryParams) :
        requestUrl;
}
exports.getUrl = getUrl;
/**
 *
 * @param {string} requestUrl
 * @param {IRequestQueryParams} queryParams
 * @return {string} - Request's URL with Query Parameters appended/parsed.
 */
function getUrlWithParsedQueryParams(requestUrl, queryParams) {
    const url = requestUrl.replace(/\?$/g, ''); // Clean any extra end-of-string "?" character
    const parsedQueryParams = qs.stringify(queryParams.params, buildParamsStringifyOptions(queryParams));
    return `${url}${parsedQueryParams}`;
}
/**
 * Build options for QueryParams Stringifying.
 *
 * @param {IRequestQueryParams} queryParams
 * @return {object}
 */
function buildParamsStringifyOptions(queryParams) {
    let options = {
        addQueryPrefix: true,
        delimiter: (queryParams.options || {}).separator || '&',
        allowDots: (queryParams.options || {}).shouldAllowDots || false,
        arrayFormat: (queryParams.options || {}).arrayFormat || 'repeat',
        encodeValuesOnly: (queryParams.options || {}).shouldOnlyEncodeValues || true
    };
    return options;
}
/**
 * Decompress/Decode gzip encoded JSON
 * Using Node.js built-in zlib module
 *
 * @param {Buffer} buffer
 * @param {string} charset? - optional; defaults to 'utf-8'
 * @return {Promise<string>}
 */
function decompressGzippedContent(buffer, charset) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            zlib.gunzip(buffer, function (error, buffer) {
                if (error) {
                    reject(error);
                }
                resolve(buffer.toString(charset || 'utf-8'));
            });
        }));
    });
}
exports.decompressGzippedContent = decompressGzippedContent;
/**
 * Builds a RegExp to test urls against for deciding
 * wether to bypass proxy from an entry of the
 * environment variable setting NO_PROXY
 *
 * @param {string} bypass
 * @return {RegExp}
 */
function buildProxyBypassRegexFromEnv(bypass) {
    try {
        // We need to keep this around for back-compat purposes
        return new RegExp(bypass, 'i');
    }
    catch (err) {
        if (err instanceof SyntaxError && (bypass || "").startsWith("*")) {
            let wildcardEscaped = bypass.replace('*', '(.*)');
            return new RegExp(wildcardEscaped, 'i');
        }
        throw err;
    }
}
exports.buildProxyBypassRegexFromEnv = buildProxyBypassRegexFromEnv;
/**
 * Obtain Response's Content Charset.
 * Through inspecting `content-type` response header.
 * It Returns 'utf-8' if NO charset specified/matched.
 *
 * @param {IHttpClientResponse} response
 * @return {string} - Content Encoding Charset; Default=utf-8
 */
function obtainContentCharset(response) {
    // Find the charset, if specified.
    // Search for the `charset=CHARSET` string, not including `;,\r\n`
    // Example: content-type: 'application/json;charset=utf-8'
    // |__ matches would be ['charset=utf-8', 'utf-8', index: 18, input: 'application/json; charset=utf-8']
    // |_____ matches[1] would have the charset :tada: , in our example it's utf-8
    // However, if the matches Array was empty or no charset found, 'utf-8' would be returned by default.
    const nodeSupportedEncodings = ['ascii', 'utf8', 'utf16le', 'ucs2', 'base64', 'binary', 'hex'];
    const contentType = response.message.headers['content-type'] || '';
    const matches = contentType.match(/charset=([^;,\r\n]+)/i);
    return (matches && matches[1] && nodeSupportedEncodings.indexOf(matches[1]) != -1) ? matches[1] : 'utf-8';
}
exports.obtainContentCharset = obtainContentCharset;


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./src/tasks/gitversion/setup.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
const main_1 = __webpack_require__(/*! ./main */ "./src/tasks/gitversion/main.ts");
(0, main_1.setup)();

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RSYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFFBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsdUJBQXVCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDBCQUEwQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNaQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLFVBQVU7QUFDbkIsVUFBVSxXQUFXO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQ0FBb0M7QUFDeEQsMEJBQTBCLG9DQUFvQztBQUM5RCwwQkFBMEIsb0NBQW9DO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJHQUEyRztBQUMzRztBQUNBLG1DQUFtQztBQUNuQztBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsOENBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSwwRkFBeUI7QUFDekIsbUZBQThCO0FBRTlCLGdCQUFLLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9hbm5vdGF0aW9uL2RlY29yYXRvcl91dGlscy5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9hbm5vdGF0aW9uL2luamVjdC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9hbm5vdGF0aW9uL2luamVjdF9iYXNlLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL2Fubm90YXRpb24vaW5qZWN0YWJsZS5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9hbm5vdGF0aW9uL2xhenlfc2VydmljZV9pZGVudGlmaWVyLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL2Fubm90YXRpb24vbXVsdGlfaW5qZWN0LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL2Fubm90YXRpb24vbmFtZWQuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvYW5ub3RhdGlvbi9vcHRpb25hbC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9hbm5vdGF0aW9uL3Bvc3RfY29uc3RydWN0LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL2Fubm90YXRpb24vcHJlX2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvYW5ub3RhdGlvbi9wcm9wZXJ0eV9ldmVudF9kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvYW5ub3RhdGlvbi90YWdnZWQuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvYW5ub3RhdGlvbi90YXJnZXRfbmFtZS5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9hbm5vdGF0aW9uL3VubWFuYWdlZC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9iaW5kaW5ncy9iaW5kaW5nLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL2JpbmRpbmdzL2JpbmRpbmdfY291bnQuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvY29uc3RhbnRzL2Vycm9yX21zZ3MuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvY29uc3RhbnRzL2xpdGVyYWxfdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvY29uc3RhbnRzL21ldGFkYXRhX2tleXMuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvY29udGFpbmVyL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9jb250YWluZXIvY29udGFpbmVyX21vZHVsZS5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9jb250YWluZXIvY29udGFpbmVyX3NuYXBzaG90LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL2NvbnRhaW5lci9sb29rdXAuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvY29udGFpbmVyL21vZHVsZV9hY3RpdmF0aW9uX3N0b3JlLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL2ludGVyZmFjZXMvaW50ZXJmYWNlcy5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9pbnZlcnNpZnkuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvcGxhbm5pbmcvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9wbGFubmluZy9tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9wbGFubmluZy9tZXRhZGF0YV9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvcGxhbm5pbmcvcGxhbi5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9wbGFubmluZy9wbGFubmVyLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL3BsYW5uaW5nL3F1ZXJ5YWJsZV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvcGxhbm5pbmcvcmVmbGVjdGlvbl91dGlscy5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9wbGFubmluZy9yZXF1ZXN0LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL3BsYW5uaW5nL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9yZXNvbHV0aW9uL2luc3RhbnRpYXRpb24uanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvcmVzb2x1dGlvbi9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9zY29wZS9zY29wZS5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9zeW50YXgvYmluZGluZ19pbl9zeW50YXguanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvc3ludGF4L2JpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXguanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvc3ludGF4L2JpbmRpbmdfb25fc3ludGF4LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL3N5bnRheC9iaW5kaW5nX3RvX3N5bnRheC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9zeW50YXgvYmluZGluZ193aGVuX29uX3N5bnRheC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9zeW50YXgvYmluZGluZ193aGVuX3N5bnRheC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy9zeW50YXgvY29uc3RyYWludF9oZWxwZXJzLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL3V0aWxzL2FzeW5jLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2VzL3V0aWxzL2JpbmRpbmdfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvdXRpbHMvY2xvbmFibGUuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvdXRpbHMvZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9lcy91dGlscy9mYWN0b3J5X3R5cGUuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvdXRpbHMvaWQuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvdXRpbHMvanMuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvZXMvdXRpbHMvc2VyaWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3NlbXZlci1jb21wYXJlL2luZGV4LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vc3JjL2FnZW50L21vY2svYnVpbGQtYWdlbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL3NyYy9jb3JlL2RvdG5ldC10b29sLnRzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9zcmMvY29yZS9pb2MudHMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL3NyYy9jb3JlL21vZGVscy50cyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zLy4vc3JjL2NvcmUvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL3NyYy9jb3JlL3ZlcnNpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9zcmMvdGFza3MvZ2l0dmVyc2lvbi9tYWluLnRzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9zcmMvdG9vbHMvZ2l0dmVyc2lvbi9tb2RlbHMudHMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL3NyYy90b29scy9naXR2ZXJzaW9uL3NldHRpbmdzLnRzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9zcmMvdG9vbHMvZ2l0dmVyc2lvbi90b29sLnRzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvdHVubmVsL2luZGV4LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvdHVubmVsL2xpYi90dW5uZWwuanMiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy8uL25vZGVfbW9kdWxlcy90eXBlZC1yZXN0LWNsaWVudC9IdHRwQ2xpZW50LmpzIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9ub2RlX21vZHVsZXMvdHlwZWQtcmVzdC1jbGllbnQvVXRpbC5qcyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJldmVudHNcIiIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwc1wiIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5ldFwiIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm9zXCIiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInRsc1wiIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInVybFwiIiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInV0aWxcIiIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXR0b29scy1hY3Rpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0dG9vbHMtYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdHRvb2xzLWFjdGlvbnMvLi9zcmMvdGFza3MvZ2l0dmVyc2lvbi9zZXR1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFUlJPUl9NU0dTIGZyb20gXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiO1xuaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiO1xuaW1wb3J0IHsgZ2V0Rmlyc3RBcnJheUR1cGxpY2F0ZSB9IGZyb20gXCIuLi91dGlscy9qc1wiO1xuZnVuY3Rpb24gdGFyZ2V0SXNDb25zdHJ1Y3RvckZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQucHJvdG90eXBlICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBfdGhyb3dJZk1ldGhvZFBhcmFtZXRlcihwYXJhbWV0ZXJOYW1lKSB7XG4gICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5JTlZBTElEX0RFQ09SQVRPUl9PUEVSQVRJT04pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRhZ1BhcmFtZXRlcihhbm5vdGF0aW9uVGFyZ2V0LCBwYXJhbWV0ZXJOYW1lLCBwYXJhbWV0ZXJJbmRleCwgbWV0YWRhdGEpIHtcbiAgICBfdGhyb3dJZk1ldGhvZFBhcmFtZXRlcihwYXJhbWV0ZXJOYW1lKTtcbiAgICBfdGFnUGFyYW1ldGVyT3JQcm9wZXJ0eShNRVRBREFUQV9LRVkuVEFHR0VELCBhbm5vdGF0aW9uVGFyZ2V0LCBwYXJhbWV0ZXJJbmRleC50b1N0cmluZygpLCBtZXRhZGF0YSk7XG59XG5mdW5jdGlvbiB0YWdQcm9wZXJ0eShhbm5vdGF0aW9uVGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHRhcmdldElzQ29uc3RydWN0b3JGdW5jdGlvbihhbm5vdGF0aW9uVGFyZ2V0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5JTlZBTElEX0RFQ09SQVRPUl9PUEVSQVRJT04pO1xuICAgIH1cbiAgICBfdGFnUGFyYW1ldGVyT3JQcm9wZXJ0eShNRVRBREFUQV9LRVkuVEFHR0VEX1BST1AsIGFubm90YXRpb25UYXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSwgbWV0YWRhdGEpO1xufVxuZnVuY3Rpb24gX2Vuc3VyZU5vTWV0YWRhdGFLZXlEdXBsaWNhdGVzKG1ldGFkYXRhKSB7XG4gICAgdmFyIG1ldGFkYXRhcyA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1ldGFkYXRhKSkge1xuICAgICAgICBtZXRhZGF0YXMgPSBtZXRhZGF0YTtcbiAgICAgICAgdmFyIGR1cGxpY2F0ZSA9IGdldEZpcnN0QXJyYXlEdXBsaWNhdGUobWV0YWRhdGFzLm1hcChmdW5jdGlvbiAobWQpIHsgcmV0dXJuIG1kLmtleTsgfSkpO1xuICAgICAgICBpZiAoZHVwbGljYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLkRVUExJQ0FURURfTUVUQURBVEEgKyBcIiBcIiArIGR1cGxpY2F0ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWV0YWRhdGFzID0gW21ldGFkYXRhXTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGFkYXRhcztcbn1cbmZ1bmN0aW9uIF90YWdQYXJhbWV0ZXJPclByb3BlcnR5KG1ldGFkYXRhS2V5LCBhbm5vdGF0aW9uVGFyZ2V0LCBrZXksIG1ldGFkYXRhKSB7XG4gICAgdmFyIG1ldGFkYXRhcyA9IF9lbnN1cmVOb01ldGFkYXRhS2V5RHVwbGljYXRlcyhtZXRhZGF0YSk7XG4gICAgdmFyIHBhcmFtc09yUHJvcGVydGllc01ldGFkYXRhID0ge307XG4gICAgaWYgKFJlZmxlY3QuaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFubm90YXRpb25UYXJnZXQpKSB7XG4gICAgICAgIHBhcmFtc09yUHJvcGVydGllc01ldGFkYXRhID0gUmVmbGVjdC5nZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5ub3RhdGlvblRhcmdldCk7XG4gICAgfVxuICAgIHZhciBwYXJhbU9yUHJvcGVydHlNZXRhZGF0YSA9IHBhcmFtc09yUHJvcGVydGllc01ldGFkYXRhW2tleV07XG4gICAgaWYgKHBhcmFtT3JQcm9wZXJ0eU1ldGFkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1PclByb3BlcnR5TWV0YWRhdGEgPSBbXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YXMuc29tZShmdW5jdGlvbiAobWQpIHsgcmV0dXJuIG1kLmtleSA9PT0gbS5rZXk7IH0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuRFVQTElDQVRFRF9NRVRBREFUQSArIFwiIFwiICsgbS5rZXkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcGFyYW1PclByb3BlcnR5TWV0YWRhdGFfMSA9IHBhcmFtT3JQcm9wZXJ0eU1ldGFkYXRhOyBfaSA8IHBhcmFtT3JQcm9wZXJ0eU1ldGFkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbSA9IHBhcmFtT3JQcm9wZXJ0eU1ldGFkYXRhXzFbX2ldO1xuICAgICAgICAgICAgX2xvb3BfMShtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJhbU9yUHJvcGVydHlNZXRhZGF0YS5wdXNoLmFwcGx5KHBhcmFtT3JQcm9wZXJ0eU1ldGFkYXRhLCBtZXRhZGF0YXMpO1xuICAgIHBhcmFtc09yUHJvcGVydGllc01ldGFkYXRhW2tleV0gPSBwYXJhbU9yUHJvcGVydHlNZXRhZGF0YTtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBwYXJhbXNPclByb3BlcnRpZXNNZXRhZGF0YSwgYW5ub3RhdGlvblRhcmdldCk7XG59XG5mdW5jdGlvbiBjcmVhdGVUYWdnZWREZWNvcmF0b3IobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0S2V5LCBpbmRleE9yUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhPclByb3BlcnR5RGVzY3JpcHRvciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGFnUGFyYW1ldGVyKHRhcmdldCwgdGFyZ2V0S2V5LCBpbmRleE9yUHJvcGVydHlEZXNjcmlwdG9yLCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YWdQcm9wZXJ0eSh0YXJnZXQsIHRhcmdldEtleSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQpIHtcbiAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCk7XG59XG5mdW5jdGlvbiBfcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9O1xufVxuZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9yLCB0YXJnZXQsIHBhcmFtZXRlckluZGV4T3JQcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW1ldGVySW5kZXhPclByb3BlcnR5ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIF9kZWNvcmF0ZShbX3BhcmFtKHBhcmFtZXRlckluZGV4T3JQcm9wZXJ0eSwgZGVjb3JhdG9yKV0sIHRhcmdldCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJhbWV0ZXJJbmRleE9yUHJvcGVydHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShbZGVjb3JhdG9yXSwgdGFyZ2V0LCBwYXJhbWV0ZXJJbmRleE9yUHJvcGVydHkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgX2RlY29yYXRlKFtkZWNvcmF0b3JdLCB0YXJnZXQpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGRlY29yYXRlLCB0YWdQYXJhbWV0ZXIsIHRhZ1Byb3BlcnR5LCBjcmVhdGVUYWdnZWREZWNvcmF0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcl91dGlscy5qcy5tYXAiLCJpbXBvcnQgKiBhcyBNRVRBREFUQV9LRVkgZnJvbSBcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCI7XG5pbXBvcnQgeyBpbmplY3RCYXNlIH0gZnJvbSBcIi4vaW5qZWN0X2Jhc2VcIjtcbnZhciBpbmplY3QgPSBpbmplY3RCYXNlKE1FVEFEQVRBX0tFWS5JTkpFQ1RfVEFHKTtcbmV4cG9ydCB7IGluamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0LmpzLm1hcCIsImltcG9ydCB7IFVOREVGSU5FRF9JTkpFQ1RfQU5OT1RBVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tIFwiLi4vcGxhbm5pbmcvbWV0YWRhdGFcIjtcbmltcG9ydCB7IGNyZWF0ZVRhZ2dlZERlY29yYXRvciB9IGZyb20gXCIuL2RlY29yYXRvcl91dGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdEJhc2UobWV0YWRhdGFLZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4T3JQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlSWRlbnRpZmllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHR5cGVvZiB0YXJnZXQgPT09IFwiZnVuY3Rpb25cIiA/IHRhcmdldC5uYW1lIDogdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFVOREVGSU5FRF9JTkpFQ1RfQU5OT1RBVElPTihjbGFzc05hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVUYWdnZWREZWNvcmF0b3IobmV3IE1ldGFkYXRhKG1ldGFkYXRhS2V5LCBzZXJ2aWNlSWRlbnRpZmllcikpKHRhcmdldCwgdGFyZ2V0S2V5LCBpbmRleE9yUHJvcGVydHlEZXNjcmlwdG9yKTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0X2Jhc2UuanMubWFwIiwiaW1wb3J0ICogYXMgRVJST1JTX01TR1MgZnJvbSBcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCI7XG5pbXBvcnQgKiBhcyBNRVRBREFUQV9LRVkgZnJvbSBcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCI7XG5mdW5jdGlvbiBpbmplY3RhYmxlKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmIChSZWZsZWN0Lmhhc093bk1ldGFkYXRhKE1FVEFEQVRBX0tFWS5QQVJBTV9UWVBFUywgdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SU19NU0dTLkRVUExJQ0FURURfSU5KRUNUQUJMRV9ERUNPUkFUT1IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlcyA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoTUVUQURBVEFfS0VZLkRFU0lHTl9QQVJBTV9UWVBFUywgdGFyZ2V0KSB8fCBbXTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShNRVRBREFUQV9LRVkuUEFSQU1fVFlQRVMsIHR5cGVzLCB0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG59XG5leHBvcnQgeyBpbmplY3RhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RhYmxlLmpzLm1hcCIsInZhciBMYXp5U2VydmljZUlkZW50aWZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGF6eVNlcnZpY2VJZGVudGlmZXIoY2IpIHtcbiAgICAgICAgdGhpcy5fY2IgPSBjYjtcbiAgICB9XG4gICAgTGF6eVNlcnZpY2VJZGVudGlmZXIucHJvdG90eXBlLnVud3JhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NiKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTGF6eVNlcnZpY2VJZGVudGlmZXI7XG59KCkpO1xuZXhwb3J0IHsgTGF6eVNlcnZpY2VJZGVudGlmZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxhenlfc2VydmljZV9pZGVudGlmaWVyLmpzLm1hcCIsImltcG9ydCAqIGFzIE1FVEFEQVRBX0tFWSBmcm9tIFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIjtcbmltcG9ydCB7IGluamVjdEJhc2UgfSBmcm9tIFwiLi9pbmplY3RfYmFzZVwiO1xudmFyIG11bHRpSW5qZWN0ID0gaW5qZWN0QmFzZShNRVRBREFUQV9LRVkuTVVMVElfSU5KRUNUX1RBRyk7XG5leHBvcnQgeyBtdWx0aUluamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXVsdGlfaW5qZWN0LmpzLm1hcCIsImltcG9ydCAqIGFzIE1FVEFEQVRBX0tFWSBmcm9tIFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIjtcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSBcIi4uL3BsYW5uaW5nL21ldGFkYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWdnZWREZWNvcmF0b3IgfSBmcm9tIFwiLi9kZWNvcmF0b3JfdXRpbHNcIjtcbmZ1bmN0aW9uIG5hbWVkKG5hbWUpIHtcbiAgICByZXR1cm4gY3JlYXRlVGFnZ2VkRGVjb3JhdG9yKG5ldyBNZXRhZGF0YShNRVRBREFUQV9LRVkuTkFNRURfVEFHLCBuYW1lKSk7XG59XG5leHBvcnQgeyBuYW1lZCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmFtZWQuanMubWFwIiwiaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tIFwiLi4vcGxhbm5pbmcvbWV0YWRhdGFcIjtcbmltcG9ydCB7IGNyZWF0ZVRhZ2dlZERlY29yYXRvciB9IGZyb20gXCIuL2RlY29yYXRvcl91dGlsc1wiO1xuZnVuY3Rpb24gb3B0aW9uYWwoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVRhZ2dlZERlY29yYXRvcihuZXcgTWV0YWRhdGEoTUVUQURBVEFfS0VZLk9QVElPTkFMX1RBRywgdHJ1ZSkpO1xufVxuZXhwb3J0IHsgb3B0aW9uYWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wdGlvbmFsLmpzLm1hcCIsImltcG9ydCAqIGFzIEVSUk9SU19NU0dTIGZyb20gXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiO1xuaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiO1xuaW1wb3J0IHsgcHJvcGVydHlFdmVudERlY29yYXRvciB9IGZyb20gXCIuL3Byb3BlcnR5X2V2ZW50X2RlY29yYXRvclwiO1xudmFyIHBvc3RDb25zdHJ1Y3QgPSBwcm9wZXJ0eUV2ZW50RGVjb3JhdG9yKE1FVEFEQVRBX0tFWS5QT1NUX0NPTlNUUlVDVCwgRVJST1JTX01TR1MuTVVMVElQTEVfUE9TVF9DT05TVFJVQ1RfTUVUSE9EUyk7XG5leHBvcnQgeyBwb3N0Q29uc3RydWN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3N0X2NvbnN0cnVjdC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBFUlJPUlNfTVNHUyBmcm9tIFwiLi4vY29uc3RhbnRzL2Vycm9yX21zZ3NcIjtcbmltcG9ydCAqIGFzIE1FVEFEQVRBX0tFWSBmcm9tIFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIjtcbmltcG9ydCB7IHByb3BlcnR5RXZlbnREZWNvcmF0b3IgfSBmcm9tIFwiLi9wcm9wZXJ0eV9ldmVudF9kZWNvcmF0b3JcIjtcbnZhciBwcmVEZXN0cm95ID0gcHJvcGVydHlFdmVudERlY29yYXRvcihNRVRBREFUQV9LRVkuUFJFX0RFU1RST1ksIEVSUk9SU19NU0dTLk1VTFRJUExFX1BSRV9ERVNUUk9ZX01FVEhPRFMpO1xuZXhwb3J0IHsgcHJlRGVzdHJveSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlX2Rlc3Ryb3kuanMubWFwIiwiaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tIFwiLi4vcGxhbm5pbmcvbWV0YWRhdGFcIjtcbmZ1bmN0aW9uIHByb3BlcnR5RXZlbnREZWNvcmF0b3IoZXZlbnRLZXksIGVycm9yTWVzc2FnZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0gbmV3IE1ldGFkYXRhKGV2ZW50S2V5LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICBpZiAoUmVmbGVjdC5oYXNPd25NZXRhZGF0YShldmVudEtleSwgdGFyZ2V0LmNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShldmVudEtleSwgbWV0YWRhdGEsIHRhcmdldC5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbmV4cG9ydCB7IHByb3BlcnR5RXZlbnREZWNvcmF0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BlcnR5X2V2ZW50X2RlY29yYXRvci5qcy5tYXAiLCJpbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4uL3BsYW5uaW5nL21ldGFkYXRhJztcbmltcG9ydCB7IGNyZWF0ZVRhZ2dlZERlY29yYXRvciB9IGZyb20gJy4vZGVjb3JhdG9yX3V0aWxzJztcbmZ1bmN0aW9uIHRhZ2dlZChtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVUYWdnZWREZWNvcmF0b3IobmV3IE1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSk7XG59XG5leHBvcnQgeyB0YWdnZWQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhZ2dlZC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBNRVRBREFUQV9LRVkgZnJvbSBcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCI7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gXCIuLi9wbGFubmluZy9tZXRhZGF0YVwiO1xuaW1wb3J0IHsgdGFnUGFyYW1ldGVyIH0gZnJvbSBcIi4vZGVjb3JhdG9yX3V0aWxzXCI7XG5mdW5jdGlvbiB0YXJnZXROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0S2V5LCBpbmRleCkge1xuICAgICAgICB2YXIgbWV0YWRhdGEgPSBuZXcgTWV0YWRhdGEoTUVUQURBVEFfS0VZLk5BTUVfVEFHLCBuYW1lKTtcbiAgICAgICAgdGFnUGFyYW1ldGVyKHRhcmdldCwgdGFyZ2V0S2V5LCBpbmRleCwgbWV0YWRhdGEpO1xuICAgIH07XG59XG5leHBvcnQgeyB0YXJnZXROYW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXJnZXRfbmFtZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBNRVRBREFUQV9LRVkgZnJvbSBcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCI7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gXCIuLi9wbGFubmluZy9tZXRhZGF0YVwiO1xuaW1wb3J0IHsgdGFnUGFyYW1ldGVyIH0gZnJvbSBcIi4vZGVjb3JhdG9yX3V0aWxzXCI7XG5mdW5jdGlvbiB1bm1hbmFnZWQoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gbmV3IE1ldGFkYXRhKE1FVEFEQVRBX0tFWS5VTk1BTkFHRURfVEFHLCB0cnVlKTtcbiAgICAgICAgdGFnUGFyYW1ldGVyKHRhcmdldCwgdGFyZ2V0S2V5LCBpbmRleCwgbWV0YWRhdGEpO1xuICAgIH07XG59XG5leHBvcnQgeyB1bm1hbmFnZWQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVubWFuYWdlZC5qcy5tYXAiLCJpbXBvcnQgeyBCaW5kaW5nU2NvcGVFbnVtLCBCaW5kaW5nVHlwZUVudW0gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIjtcbmltcG9ydCB7IGlkIH0gZnJvbSBcIi4uL3V0aWxzL2lkXCI7XG52YXIgQmluZGluZyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZyhzZXJ2aWNlSWRlbnRpZmllciwgc2NvcGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkKCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VydmljZUlkZW50aWZpZXIgPSBzZXJ2aWNlSWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnR5cGUgPSBCaW5kaW5nVHlwZUVudW0uSW52YWxpZDtcbiAgICAgICAgdGhpcy5jb25zdHJhaW50ID0gZnVuY3Rpb24gKHJlcXVlc3QpIHsgcmV0dXJuIHRydWU7IH07XG4gICAgICAgIHRoaXMuaW1wbGVtZW50YXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub25EZWFjdGl2YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmR5bmFtaWNWYWx1ZSA9IG51bGw7XG4gICAgfVxuICAgIEJpbmRpbmcucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2xvbmUgPSBuZXcgQmluZGluZyh0aGlzLnNlcnZpY2VJZGVudGlmaWVyLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgY2xvbmUuYWN0aXZhdGVkID0gKGNsb25lLnNjb3BlID09PSBCaW5kaW5nU2NvcGVFbnVtLlNpbmdsZXRvbikgPyB0aGlzLmFjdGl2YXRlZCA6IGZhbHNlO1xuICAgICAgICBjbG9uZS5pbXBsZW1lbnRhdGlvblR5cGUgPSB0aGlzLmltcGxlbWVudGF0aW9uVHlwZTtcbiAgICAgICAgY2xvbmUuZHluYW1pY1ZhbHVlID0gdGhpcy5keW5hbWljVmFsdWU7XG4gICAgICAgIGNsb25lLnNjb3BlID0gdGhpcy5zY29wZTtcbiAgICAgICAgY2xvbmUudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY2xvbmUuZmFjdG9yeSA9IHRoaXMuZmFjdG9yeTtcbiAgICAgICAgY2xvbmUucHJvdmlkZXIgPSB0aGlzLnByb3ZpZGVyO1xuICAgICAgICBjbG9uZS5jb25zdHJhaW50ID0gdGhpcy5jb25zdHJhaW50O1xuICAgICAgICBjbG9uZS5vbkFjdGl2YXRpb24gPSB0aGlzLm9uQWN0aXZhdGlvbjtcbiAgICAgICAgY2xvbmUub25EZWFjdGl2YXRpb24gPSB0aGlzLm9uRGVhY3RpdmF0aW9uO1xuICAgICAgICBjbG9uZS5jYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9O1xuICAgIHJldHVybiBCaW5kaW5nO1xufSgpKTtcbmV4cG9ydCB7IEJpbmRpbmcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmRpbmcuanMubWFwIiwidmFyIEJpbmRpbmdDb3VudCA9IHtcbiAgICBNdWx0aXBsZUJpbmRpbmdzQXZhaWxhYmxlOiAyLFxuICAgIE5vQmluZGluZ3NBdmFpbGFibGU6IDAsXG4gICAgT25seU9uZUJpbmRpbmdBdmFpbGFibGU6IDFcbn07XG5leHBvcnQgeyBCaW5kaW5nQ291bnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmRpbmdfY291bnQuanMubWFwIiwiZXhwb3J0IHZhciBEVVBMSUNBVEVEX0lOSkVDVEFCTEVfREVDT1JBVE9SID0gXCJDYW5ub3QgYXBwbHkgQGluamVjdGFibGUgZGVjb3JhdG9yIG11bHRpcGxlIHRpbWVzLlwiO1xuZXhwb3J0IHZhciBEVVBMSUNBVEVEX01FVEFEQVRBID0gXCJNZXRhZGF0YSBrZXkgd2FzIHVzZWQgbW9yZSB0aGFuIG9uY2UgaW4gYSBwYXJhbWV0ZXI6XCI7XG5leHBvcnQgdmFyIE5VTExfQVJHVU1FTlQgPSBcIk5VTEwgYXJndW1lbnRcIjtcbmV4cG9ydCB2YXIgS0VZX05PVF9GT1VORCA9IFwiS2V5IE5vdCBGb3VuZFwiO1xuZXhwb3J0IHZhciBBTUJJR1VPVVNfTUFUQ0ggPSBcIkFtYmlndW91cyBtYXRjaCBmb3VuZCBmb3Igc2VydmljZUlkZW50aWZpZXI6XCI7XG5leHBvcnQgdmFyIENBTk5PVF9VTkJJTkQgPSBcIkNvdWxkIG5vdCB1bmJpbmQgc2VydmljZUlkZW50aWZpZXI6XCI7XG5leHBvcnQgdmFyIE5PVF9SRUdJU1RFUkVEID0gXCJObyBtYXRjaGluZyBiaW5kaW5ncyBmb3VuZCBmb3Igc2VydmljZUlkZW50aWZpZXI6XCI7XG5leHBvcnQgdmFyIE1JU1NJTkdfSU5KRUNUQUJMRV9BTk5PVEFUSU9OID0gXCJNaXNzaW5nIHJlcXVpcmVkIEBpbmplY3RhYmxlIGFubm90YXRpb24gaW46XCI7XG5leHBvcnQgdmFyIE1JU1NJTkdfSU5KRUNUX0FOTk9UQVRJT04gPSBcIk1pc3NpbmcgcmVxdWlyZWQgQGluamVjdCBvciBAbXVsdGlJbmplY3QgYW5ub3RhdGlvbiBpbjpcIjtcbmV4cG9ydCB2YXIgVU5ERUZJTkVEX0lOSkVDVF9BTk5PVEFUSU9OID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXCJAaW5qZWN0IGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB0aGlzIGNvdWxkIG1lYW4gdGhhdCB0aGUgY2xhc3MgXCIgKyBuYW1lICsgXCIgaGFzIFwiICtcbiAgICAgICAgXCJhIGNpcmN1bGFyIGRlcGVuZGVuY3kgcHJvYmxlbS4gWW91IGNhbiB1c2UgYSBMYXp5U2VydmljZUlkZW50aWZlciB0byAgXCIgK1xuICAgICAgICBcIm92ZXJjb21lIHRoaXMgbGltaXRhdGlvbi5cIjtcbn07XG5leHBvcnQgdmFyIENJUkNVTEFSX0RFUEVOREVOQ1kgPSBcIkNpcmN1bGFyIGRlcGVuZGVuY3kgZm91bmQ6XCI7XG5leHBvcnQgdmFyIE5PVF9JTVBMRU1FTlRFRCA9IFwiU29ycnksIHRoaXMgZmVhdHVyZSBpcyBub3QgZnVsbHkgaW1wbGVtZW50ZWQgeWV0LlwiO1xuZXhwb3J0IHZhciBJTlZBTElEX0JJTkRJTkdfVFlQRSA9IFwiSW52YWxpZCBiaW5kaW5nIHR5cGU6XCI7XG5leHBvcnQgdmFyIE5PX01PUkVfU05BUFNIT1RTX0FWQUlMQUJMRSA9IFwiTm8gc25hcHNob3QgYXZhaWxhYmxlIHRvIHJlc3RvcmUuXCI7XG5leHBvcnQgdmFyIElOVkFMSURfTUlERExFV0FSRV9SRVRVUk4gPSBcIkludmFsaWQgcmV0dXJuIHR5cGUgaW4gbWlkZGxld2FyZS4gTWlkZGxld2FyZSBtdXN0IHJldHVybiFcIjtcbmV4cG9ydCB2YXIgSU5WQUxJRF9GVU5DVElPTl9CSU5ESU5HID0gXCJWYWx1ZSBwcm92aWRlZCB0byBmdW5jdGlvbiBiaW5kaW5nIG11c3QgYmUgYSBmdW5jdGlvbiFcIjtcbmV4cG9ydCB2YXIgTEFaWV9JTl9TWU5DID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gXCJZb3UgYXJlIGF0dGVtcHRpbmcgdG8gY29uc3RydWN0ICdcIiArIGtleSArIFwiJyBpbiBhIHN5bmNocm9ub3VzIHdheVxcbiBidXQgaXQgaGFzIGFzeW5jaHJvbm91cyBkZXBlbmRlbmNpZXMuXCI7IH07XG5leHBvcnQgdmFyIElOVkFMSURfVE9fU0VMRl9WQUxVRSA9IFwiVGhlIHRvU2VsZiBmdW5jdGlvbiBjYW4gb25seSBiZSBhcHBsaWVkIHdoZW4gYSBjb25zdHJ1Y3RvciBpcyBcIiArXG4gICAgXCJ1c2VkIGFzIHNlcnZpY2UgaWRlbnRpZmllclwiO1xuZXhwb3J0IHZhciBJTlZBTElEX0RFQ09SQVRPUl9PUEVSQVRJT04gPSBcIlRoZSBAaW5qZWN0IEBtdWx0aUluamVjdCBAdGFnZ2VkIGFuZCBAbmFtZWQgZGVjb3JhdG9ycyBcIiArXG4gICAgXCJtdXN0IGJlIGFwcGxpZWQgdG8gdGhlIHBhcmFtZXRlcnMgb2YgYSBjbGFzcyBjb25zdHJ1Y3RvciBvciBhIGNsYXNzIHByb3BlcnR5LlwiO1xuZXhwb3J0IHZhciBBUkdVTUVOVFNfTEVOR1RIX01JU01BVENIID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YWx1ZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIFwiVGhlIG51bWJlciBvZiBjb25zdHJ1Y3RvciBhcmd1bWVudHMgaW4gdGhlIGRlcml2ZWQgY2xhc3MgXCIgK1xuICAgICAgICAodmFsdWVzWzBdICsgXCIgbXVzdCBiZSA+PSB0aGFuIHRoZSBudW1iZXIgb2YgY29uc3RydWN0b3IgYXJndW1lbnRzIG9mIGl0cyBiYXNlIGNsYXNzLlwiKTtcbn07XG5leHBvcnQgdmFyIENPTlRBSU5FUl9PUFRJT05TX01VU1RfQkVfQU5fT0JKRUNUID0gXCJJbnZhbGlkIENvbnRhaW5lciBjb25zdHJ1Y3RvciBhcmd1bWVudC4gQ29udGFpbmVyIG9wdGlvbnMgXCIgK1xuICAgIFwibXVzdCBiZSBhbiBvYmplY3QuXCI7XG5leHBvcnQgdmFyIENPTlRBSU5FUl9PUFRJT05TX0lOVkFMSURfREVGQVVMVF9TQ09QRSA9IFwiSW52YWxpZCBDb250YWluZXIgb3B0aW9uLiBEZWZhdWx0IHNjb3BlIG11c3QgXCIgK1xuICAgIFwiYmUgYSBzdHJpbmcgKCdzaW5nbGV0b24nIG9yICd0cmFuc2llbnQnKS5cIjtcbmV4cG9ydCB2YXIgQ09OVEFJTkVSX09QVElPTlNfSU5WQUxJRF9BVVRPX0JJTkRfSU5KRUNUQUJMRSA9IFwiSW52YWxpZCBDb250YWluZXIgb3B0aW9uLiBBdXRvIGJpbmQgaW5qZWN0YWJsZSBtdXN0IFwiICtcbiAgICBcImJlIGEgYm9vbGVhblwiO1xuZXhwb3J0IHZhciBDT05UQUlORVJfT1BUSU9OU19JTlZBTElEX1NLSVBfQkFTRV9DSEVDSyA9IFwiSW52YWxpZCBDb250YWluZXIgb3B0aW9uLiBTa2lwIGJhc2UgY2hlY2sgbXVzdCBcIiArXG4gICAgXCJiZSBhIGJvb2xlYW5cIjtcbmV4cG9ydCB2YXIgTVVMVElQTEVfUFJFX0RFU1RST1lfTUVUSE9EUyA9IFwiQ2Fubm90IGFwcGx5IEBwcmVEZXN0cm95IGRlY29yYXRvciBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgc2FtZSBjbGFzc1wiO1xuZXhwb3J0IHZhciBNVUxUSVBMRV9QT1NUX0NPTlNUUlVDVF9NRVRIT0RTID0gXCJDYW5ub3QgYXBwbHkgQHBvc3RDb25zdHJ1Y3QgZGVjb3JhdG9yIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIGNsYXNzXCI7XG5leHBvcnQgdmFyIEFTWU5DX1VOQklORF9SRVFVSVJFRCA9IFwiQXR0ZW1wdGluZyB0byB1bmJpbmQgZGVwZW5kZW5jeSB3aXRoIGFzeW5jaHJvbm91cyBkZXN0cnVjdGlvbiAoQHByZURlc3Ryb3kgb3Igb25EZWFjdGl2YXRpb24pXCI7XG5leHBvcnQgdmFyIFBPU1RfQ09OU1RSVUNUX0VSUk9SID0gZnVuY3Rpb24gKGNsYXp6LCBlcnJvck1lc3NhZ2UpIHsgcmV0dXJuIFwiQHBvc3RDb25zdHJ1Y3QgZXJyb3IgaW4gY2xhc3MgXCIgKyBjbGF6eiArIFwiOiBcIiArIGVycm9yTWVzc2FnZTsgfTtcbmV4cG9ydCB2YXIgUFJFX0RFU1RST1lfRVJST1IgPSBmdW5jdGlvbiAoY2xhenosIGVycm9yTWVzc2FnZSkgeyByZXR1cm4gXCJAcHJlRGVzdHJveSBlcnJvciBpbiBjbGFzcyBcIiArIGNsYXp6ICsgXCI6IFwiICsgZXJyb3JNZXNzYWdlOyB9O1xuZXhwb3J0IHZhciBPTl9ERUFDVElWQVRJT05fRVJST1IgPSBmdW5jdGlvbiAoY2xhenosIGVycm9yTWVzc2FnZSkgeyByZXR1cm4gXCJvbkRlYWN0aXZhdGlvbigpIGVycm9yIGluIGNsYXNzIFwiICsgY2xhenogKyBcIjogXCIgKyBlcnJvck1lc3NhZ2U7IH07XG5leHBvcnQgdmFyIENJUkNVTEFSX0RFUEVOREVOQ1lfSU5fRkFDVE9SWSA9IGZ1bmN0aW9uIChmYWN0b3J5VHlwZSwgc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gXCJJdCBsb29rcyBsaWtlIHRoZXJlIGlzIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSBpbiBvbmUgb2YgdGhlICdcIiArIGZhY3RvcnlUeXBlICsgXCInIGJpbmRpbmdzLiBQbGVhc2UgaW52ZXN0aWdhdGUgYmluZGluZ3Mgd2l0aFwiICtcbiAgICAgICAgKFwic2VydmljZSBpZGVudGlmaWVyICdcIiArIHNlcnZpY2VJZGVudGlmaWVyICsgXCInLlwiKTtcbn07XG5leHBvcnQgdmFyIFNUQUNLX09WRVJGTE9XID0gXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JfbXNncy5qcy5tYXAiLCJ2YXIgQmluZGluZ1Njb3BlRW51bSA9IHtcbiAgICBSZXF1ZXN0OiBcIlJlcXVlc3RcIixcbiAgICBTaW5nbGV0b246IFwiU2luZ2xldG9uXCIsXG4gICAgVHJhbnNpZW50OiBcIlRyYW5zaWVudFwiXG59O1xudmFyIEJpbmRpbmdUeXBlRW51bSA9IHtcbiAgICBDb25zdGFudFZhbHVlOiBcIkNvbnN0YW50VmFsdWVcIixcbiAgICBDb25zdHJ1Y3RvcjogXCJDb25zdHJ1Y3RvclwiLFxuICAgIER5bmFtaWNWYWx1ZTogXCJEeW5hbWljVmFsdWVcIixcbiAgICBGYWN0b3J5OiBcIkZhY3RvcnlcIixcbiAgICBGdW5jdGlvbjogXCJGdW5jdGlvblwiLFxuICAgIEluc3RhbmNlOiBcIkluc3RhbmNlXCIsXG4gICAgSW52YWxpZDogXCJJbnZhbGlkXCIsXG4gICAgUHJvdmlkZXI6IFwiUHJvdmlkZXJcIlxufTtcbnZhciBUYXJnZXRUeXBlRW51bSA9IHtcbiAgICBDbGFzc1Byb3BlcnR5OiBcIkNsYXNzUHJvcGVydHlcIixcbiAgICBDb25zdHJ1Y3RvckFyZ3VtZW50OiBcIkNvbnN0cnVjdG9yQXJndW1lbnRcIixcbiAgICBWYXJpYWJsZTogXCJWYXJpYWJsZVwiXG59O1xuZXhwb3J0IHsgQmluZGluZ1Njb3BlRW51bSwgQmluZGluZ1R5cGVFbnVtLCBUYXJnZXRUeXBlRW51bSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0ZXJhbF90eXBlcy5qcy5tYXAiLCJleHBvcnQgdmFyIE5BTUVEX1RBRyA9IFwibmFtZWRcIjtcbmV4cG9ydCB2YXIgTkFNRV9UQUcgPSBcIm5hbWVcIjtcbmV4cG9ydCB2YXIgVU5NQU5BR0VEX1RBRyA9IFwidW5tYW5hZ2VkXCI7XG5leHBvcnQgdmFyIE9QVElPTkFMX1RBRyA9IFwib3B0aW9uYWxcIjtcbmV4cG9ydCB2YXIgSU5KRUNUX1RBRyA9IFwiaW5qZWN0XCI7XG5leHBvcnQgdmFyIE1VTFRJX0lOSkVDVF9UQUcgPSBcIm11bHRpX2luamVjdFwiO1xuZXhwb3J0IHZhciBUQUdHRUQgPSBcImludmVyc2lmeTp0YWdnZWRcIjtcbmV4cG9ydCB2YXIgVEFHR0VEX1BST1AgPSBcImludmVyc2lmeTp0YWdnZWRfcHJvcHNcIjtcbmV4cG9ydCB2YXIgUEFSQU1fVFlQRVMgPSBcImludmVyc2lmeTpwYXJhbXR5cGVzXCI7XG5leHBvcnQgdmFyIERFU0lHTl9QQVJBTV9UWVBFUyA9IFwiZGVzaWduOnBhcmFtdHlwZXNcIjtcbmV4cG9ydCB2YXIgUE9TVF9DT05TVFJVQ1QgPSBcInBvc3RfY29uc3RydWN0XCI7XG5leHBvcnQgdmFyIFBSRV9ERVNUUk9ZID0gXCJwcmVfZGVzdHJveVwiO1xuZnVuY3Rpb24gZ2V0Tm9uQ3VzdG9tVGFnS2V5cygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBJTkpFQ1RfVEFHLFxuICAgICAgICBNVUxUSV9JTkpFQ1RfVEFHLFxuICAgICAgICBOQU1FX1RBRyxcbiAgICAgICAgVU5NQU5BR0VEX1RBRyxcbiAgICAgICAgTkFNRURfVEFHLFxuICAgICAgICBPUFRJT05BTF9UQUcsXG4gICAgXTtcbn1cbmV4cG9ydCB2YXIgTk9OX0NVU1RPTV9UQUdfS0VZUyA9IGdldE5vbkN1c3RvbVRhZ0tleXMoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1ldGFkYXRhX2tleXMuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSBcIi4uL2JpbmRpbmdzL2JpbmRpbmdcIjtcbmltcG9ydCAqIGFzIEVSUk9SX01TR1MgZnJvbSBcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCI7XG5pbXBvcnQgeyBCaW5kaW5nU2NvcGVFbnVtLCBUYXJnZXRUeXBlRW51bSB9IGZyb20gXCIuLi9jb25zdGFudHMvbGl0ZXJhbF90eXBlc1wiO1xuaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiO1xuaW1wb3J0IHsgTWV0YWRhdGFSZWFkZXIgfSBmcm9tIFwiLi4vcGxhbm5pbmcvbWV0YWRhdGFfcmVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNb2NrUmVxdWVzdCwgZ2V0QmluZGluZ0RpY3Rpb25hcnksIHBsYW4gfSBmcm9tIFwiLi4vcGxhbm5pbmcvcGxhbm5lclwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCIuLi9yZXNvbHV0aW9uL3Jlc29sdmVyXCI7XG5pbXBvcnQgeyBCaW5kaW5nVG9TeW50YXggfSBmcm9tIFwiLi4vc3ludGF4L2JpbmRpbmdfdG9fc3ludGF4XCI7XG5pbXBvcnQgeyBpc1Byb21pc2UsIGlzUHJvbWlzZU9yQ29udGFpbnNQcm9taXNlIH0gZnJvbSBcIi4uL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBpZCB9IGZyb20gXCIuLi91dGlscy9pZFwiO1xuaW1wb3J0IHsgZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZyB9IGZyb20gXCIuLi91dGlscy9zZXJpYWxpemF0aW9uXCI7XG5pbXBvcnQgeyBDb250YWluZXJTbmFwc2hvdCB9IGZyb20gXCIuL2NvbnRhaW5lcl9zbmFwc2hvdFwiO1xuaW1wb3J0IHsgTG9va3VwIH0gZnJvbSBcIi4vbG9va3VwXCI7XG5pbXBvcnQgeyBNb2R1bGVBY3RpdmF0aW9uU3RvcmUgfSBmcm9tIFwiLi9tb2R1bGVfYWN0aXZhdGlvbl9zdG9yZVwiO1xudmFyIENvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyKGNvbnRhaW5lck9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBjb250YWluZXJPcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiICsgRVJST1JfTVNHUy5DT05UQUlORVJfT1BUSU9OU19NVVNUX0JFX0FOX09CSkVDVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdFNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdFNjb3BlID0gQmluZGluZ1Njb3BlRW51bS5UcmFuc2llbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5kZWZhdWx0U2NvcGUgIT09IEJpbmRpbmdTY29wZUVudW0uU2luZ2xldG9uICYmXG4gICAgICAgICAgICBvcHRpb25zLmRlZmF1bHRTY29wZSAhPT0gQmluZGluZ1Njb3BlRW51bS5UcmFuc2llbnQgJiZcbiAgICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdFNjb3BlICE9PSBCaW5kaW5nU2NvcGVFbnVtLlJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiICsgRVJST1JfTVNHUy5DT05UQUlORVJfT1BUSU9OU19JTlZBTElEX0RFRkFVTFRfU0NPUEUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9CaW5kSW5qZWN0YWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zLmF1dG9CaW5kSW5qZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmF1dG9CaW5kSW5qZWN0YWJsZSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiICsgRVJST1JfTVNHUy5DT05UQUlORVJfT1BUSU9OU19JTlZBTElEX0FVVE9fQklORF9JTkpFQ1RBQkxFKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5za2lwQmFzZUNsYXNzQ2hlY2tzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2tpcEJhc2VDbGFzc0NoZWNrcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnNraXBCYXNlQ2xhc3NDaGVja3MgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIiArIEVSUk9SX01TR1MuQ09OVEFJTkVSX09QVElPTlNfSU5WQUxJRF9TS0lQX0JBU0VfQ0hFQ0spO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGF1dG9CaW5kSW5qZWN0YWJsZTogb3B0aW9ucy5hdXRvQmluZEluamVjdGFibGUsXG4gICAgICAgICAgICBkZWZhdWx0U2NvcGU6IG9wdGlvbnMuZGVmYXVsdFNjb3BlLFxuICAgICAgICAgICAgc2tpcEJhc2VDbGFzc0NoZWNrczogb3B0aW9ucy5za2lwQmFzZUNsYXNzQ2hlY2tzXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaWQgPSBpZCgpO1xuICAgICAgICB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeSA9IG5ldyBMb29rdXAoKTtcbiAgICAgICAgdGhpcy5fc25hcHNob3RzID0gW107XG4gICAgICAgIHRoaXMuX21pZGRsZXdhcmUgPSBudWxsO1xuICAgICAgICB0aGlzLl9hY3RpdmF0aW9ucyA9IG5ldyBMb29rdXAoKTtcbiAgICAgICAgdGhpcy5fZGVhY3RpdmF0aW9ucyA9IG5ldyBMb29rdXAoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVJlYWRlciA9IG5ldyBNZXRhZGF0YVJlYWRlcigpO1xuICAgICAgICB0aGlzLl9tb2R1bGVBY3RpdmF0aW9uU3RvcmUgPSBuZXcgTW9kdWxlQWN0aXZhdGlvblN0b3JlKCk7XG4gICAgfVxuICAgIENvbnRhaW5lci5tZXJnZSA9IGZ1bmN0aW9uIChjb250YWluZXIxLCBjb250YWluZXIyKSB7XG4gICAgICAgIHZhciBjb250YWluZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb250YWluZXJzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHZhciB0YXJnZXRDb250YWluZXJzID0gX19zcHJlYWRBcnJheShbY29udGFpbmVyMSwgY29udGFpbmVyMl0sIGNvbnRhaW5lcnMsIHRydWUpLm1hcChmdW5jdGlvbiAodGFyZ2V0Q29udGFpbmVyKSB7IHJldHVybiBnZXRCaW5kaW5nRGljdGlvbmFyeSh0YXJnZXRDb250YWluZXIpOyB9KTtcbiAgICAgICAgdmFyIGJpbmRpbmdEaWN0aW9uYXJ5ID0gZ2V0QmluZGluZ0RpY3Rpb25hcnkoY29udGFpbmVyKTtcbiAgICAgICAgZnVuY3Rpb24gY29weURpY3Rpb25hcnkob3JpZ2luLCBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgb3JpZ2luLnRyYXZlcnNlKGZ1bmN0aW9uIChfa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uYWRkKGJpbmRpbmcuc2VydmljZUlkZW50aWZpZXIsIGJpbmRpbmcuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEJpbmRpbmdEaWN0aW9uYXJ5KSB7XG4gICAgICAgICAgICBjb3B5RGljdGlvbmFyeSh0YXJnZXRCaW5kaW5nRGljdGlvbmFyeSwgYmluZGluZ0RpY3Rpb25hcnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vZHVsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1vZHVsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2V0SGVscGVycyA9IHRoaXMuX2dldENvbnRhaW5lck1vZHVsZUhlbHBlcnNGYWN0b3J5KCk7XG4gICAgICAgIGZvciAodmFyIF9hID0gMCwgbW9kdWxlc18xID0gbW9kdWxlczsgX2EgPCBtb2R1bGVzXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudE1vZHVsZSA9IG1vZHVsZXNfMVtfYV07XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyTW9kdWxlSGVscGVycyA9IGdldEhlbHBlcnMoY3VycmVudE1vZHVsZS5pZCk7XG4gICAgICAgICAgICBjdXJyZW50TW9kdWxlLnJlZ2lzdHJ5KGNvbnRhaW5lck1vZHVsZUhlbHBlcnMuYmluZEZ1bmN0aW9uLCBjb250YWluZXJNb2R1bGVIZWxwZXJzLnVuYmluZEZ1bmN0aW9uLCBjb250YWluZXJNb2R1bGVIZWxwZXJzLmlzYm91bmRGdW5jdGlvbiwgY29udGFpbmVyTW9kdWxlSGVscGVycy5yZWJpbmRGdW5jdGlvbiwgY29udGFpbmVyTW9kdWxlSGVscGVycy51bmJpbmRBc3luY0Z1bmN0aW9uLCBjb250YWluZXJNb2R1bGVIZWxwZXJzLm9uQWN0aXZhdGlvbkZ1bmN0aW9uLCBjb250YWluZXJNb2R1bGVIZWxwZXJzLm9uRGVhY3RpdmF0aW9uRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmxvYWRBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vZHVsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1vZHVsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZ2V0SGVscGVycywgX2EsIG1vZHVsZXNfMiwgY3VycmVudE1vZHVsZSwgY29udGFpbmVyTW9kdWxlSGVscGVycztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEhlbHBlcnMgPSB0aGlzLl9nZXRDb250YWluZXJNb2R1bGVIZWxwZXJzRmFjdG9yeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSAwLCBtb2R1bGVzXzIgPSBtb2R1bGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfYSA8IG1vZHVsZXNfMi5sZW5ndGgpKSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vZHVsZSA9IG1vZHVsZXNfMltfYV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJNb2R1bGVIZWxwZXJzID0gZ2V0SGVscGVycyhjdXJyZW50TW9kdWxlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY3VycmVudE1vZHVsZS5yZWdpc3RyeShjb250YWluZXJNb2R1bGVIZWxwZXJzLmJpbmRGdW5jdGlvbiwgY29udGFpbmVyTW9kdWxlSGVscGVycy51bmJpbmRGdW5jdGlvbiwgY29udGFpbmVyTW9kdWxlSGVscGVycy5pc2JvdW5kRnVuY3Rpb24sIGNvbnRhaW5lck1vZHVsZUhlbHBlcnMucmViaW5kRnVuY3Rpb24sIGNvbnRhaW5lck1vZHVsZUhlbHBlcnMudW5iaW5kQXN5bmNGdW5jdGlvbiwgY29udGFpbmVyTW9kdWxlSGVscGVycy5vbkFjdGl2YXRpb25GdW5jdGlvbiwgY29udGFpbmVyTW9kdWxlSGVscGVycy5vbkRlYWN0aXZhdGlvbkZ1bmN0aW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2ErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZHVsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1vZHVsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgdmFyIGRlYWN0aXZhdGlvbnMgPSBfdGhpcy5fcmVtb3ZlTW9kdWxlQmluZGluZ3MobW9kdWxlLmlkKTtcbiAgICAgICAgICAgIF90aGlzLl9kZWFjdGl2YXRlU2luZ2xldG9ucyhkZWFjdGl2YXRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLl9yZW1vdmVNb2R1bGVIYW5kbGVycyhtb2R1bGUuaWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUudW5sb2FkQXN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb2R1bGVzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBtb2R1bGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBtb2R1bGVzXzMsIG1vZHVsZV8xLCBkZWFjdGl2YXRpb25zO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSAwLCBtb2R1bGVzXzMgPSBtb2R1bGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfYSA8IG1vZHVsZXNfMy5sZW5ndGgpKSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlXzEgPSBtb2R1bGVzXzNbX2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0aW9ucyA9IHRoaXMuX3JlbW92ZU1vZHVsZUJpbmRpbmdzKG1vZHVsZV8xLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5fZGVhY3RpdmF0ZVNpbmdsZXRvbnNBc3luYyhkZWFjdGl2YXRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZU1vZHVsZUhhbmRsZXJzKG1vZHVsZV8xLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2ErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcy5vcHRpb25zLmRlZmF1bHRTY29wZSB8fCBCaW5kaW5nU2NvcGVFbnVtLlRyYW5zaWVudDtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSBuZXcgQmluZGluZyhzZXJ2aWNlSWRlbnRpZmllciwgc2NvcGUpO1xuICAgICAgICB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeS5hZGQoc2VydmljZUlkZW50aWZpZXIsIGJpbmRpbmcpO1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdUb1N5bnRheChiaW5kaW5nKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUucmViaW5kID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLnJlYmluZEFzeW5jID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCB0aGlzLnVuYmluZEFzeW5jKHNlcnZpY2VJZGVudGlmaWVyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5iaW5kKHNlcnZpY2VJZGVudGlmaWVyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5Lmhhc0tleShzZXJ2aWNlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIHZhciBiaW5kaW5ncyA9IHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5LmdldChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB0aGlzLl9kZWFjdGl2YXRlU2luZ2xldG9ucyhiaW5kaW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVtb3ZlU2VydmljZUZyb21EaWN0aW9uYXJ5KHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUudW5iaW5kQXN5bmMgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJpbmRpbmdzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9iaW5kaW5nRGljdGlvbmFyeS5oYXNLZXkoc2VydmljZUlkZW50aWZpZXIpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZ3MgPSB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeS5nZXQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLl9kZWFjdGl2YXRlU2luZ2xldG9uc0FzeW5jKGJpbmRpbmdzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU2VydmljZUZyb21EaWN0aW9uYXJ5KHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5LnRyYXZlcnNlKGZ1bmN0aW9uIChfa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMuX2RlYWN0aXZhdGVTaW5nbGV0b25zKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5ID0gbmV3IExvb2t1cCgpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS51bmJpbmRBbGxBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb21pc2VzO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeS50cmF2ZXJzZShmdW5jdGlvbiAoX2tleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKF90aGlzLl9kZWFjdGl2YXRlU2luZ2xldG9uc0FzeW5jKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgUHJvbWlzZS5hbGwocHJvbWlzZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ0RpY3Rpb25hcnkgPSBuZXcgTG9va3VwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUub25BY3RpdmF0aW9uID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCBvbkFjdGl2YXRpb24pIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGlvbnMuYWRkKHNlcnZpY2VJZGVudGlmaWVyLCBvbkFjdGl2YXRpb24pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5vbkRlYWN0aXZhdGlvbiA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwgb25EZWFjdGl2YXRpb24pIHtcbiAgICAgICAgdGhpcy5fZGVhY3RpdmF0aW9ucy5hZGQoc2VydmljZUlkZW50aWZpZXIsIG9uRGVhY3RpdmF0aW9uKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuaXNCb3VuZCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICB2YXIgYm91bmQgPSB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeS5oYXNLZXkoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICBpZiAoIWJvdW5kICYmIHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICBib3VuZCA9IHRoaXMucGFyZW50LmlzQm91bmQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZDtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuaXNDdXJyZW50Qm91bmQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5Lmhhc0tleShzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmlzQm91bmROYW1lZCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwgbmFtZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNCb3VuZFRhZ2dlZChzZXJ2aWNlSWRlbnRpZmllciwgTUVUQURBVEFfS0VZLk5BTUVEX1RBRywgbmFtZWQpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5pc0JvdW5kVGFnZ2VkID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBib3VuZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYmluZGluZ0RpY3Rpb25hcnkuaGFzS2V5KHNlcnZpY2VJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgdmFyIGJpbmRpbmdzID0gdGhpcy5fYmluZGluZ0RpY3Rpb25hcnkuZ2V0KHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0XzEgPSBjcmVhdGVNb2NrUmVxdWVzdCh0aGlzLCBzZXJ2aWNlSWRlbnRpZmllciwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBib3VuZCA9IGJpbmRpbmdzLnNvbWUoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGIuY29uc3RyYWludChyZXF1ZXN0XzEpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJvdW5kICYmIHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICBib3VuZCA9IHRoaXMucGFyZW50LmlzQm91bmRUYWdnZWQoc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZDtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuc25hcHNob3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3NuYXBzaG90cy5wdXNoKENvbnRhaW5lclNuYXBzaG90Lm9mKHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5LmNsb25lKCksIHRoaXMuX21pZGRsZXdhcmUsIHRoaXMuX2FjdGl2YXRpb25zLmNsb25lKCksIHRoaXMuX2RlYWN0aXZhdGlvbnMuY2xvbmUoKSwgdGhpcy5fbW9kdWxlQWN0aXZhdGlvblN0b3JlLmNsb25lKCkpKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fc25hcHNob3RzLnBvcCgpO1xuICAgICAgICBpZiAoc25hcHNob3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuTk9fTU9SRV9TTkFQU0hPVFNfQVZBSUxBQkxFKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeSA9IHNuYXBzaG90LmJpbmRpbmdzO1xuICAgICAgICB0aGlzLl9hY3RpdmF0aW9ucyA9IHNuYXBzaG90LmFjdGl2YXRpb25zO1xuICAgICAgICB0aGlzLl9kZWFjdGl2YXRpb25zID0gc25hcHNob3QuZGVhY3RpdmF0aW9ucztcbiAgICAgICAgdGhpcy5fbWlkZGxld2FyZSA9IHNuYXBzaG90Lm1pZGRsZXdhcmU7XG4gICAgICAgIHRoaXMuX21vZHVsZUFjdGl2YXRpb25TdG9yZSA9IHNuYXBzaG90Lm1vZHVsZUFjdGl2YXRpb25TdG9yZTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuY3JlYXRlQ2hpbGQgPSBmdW5jdGlvbiAoY29udGFpbmVyT3B0aW9ucykge1xuICAgICAgICB2YXIgY2hpbGQgPSBuZXcgQ29udGFpbmVyKGNvbnRhaW5lck9wdGlvbnMgfHwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5hcHBseU1pZGRsZXdhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtaWRkbGV3YXJlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbWlkZGxld2FyZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdGlhbCA9ICh0aGlzLl9taWRkbGV3YXJlKSA/IHRoaXMuX21pZGRsZXdhcmUgOiB0aGlzLl9wbGFuQW5kUmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9taWRkbGV3YXJlID0gbWlkZGxld2FyZXMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7IHJldHVybiBjdXJyKHByZXYpOyB9LCBpbml0aWFsKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuYXBwbHlDdXN0b21NZXRhZGF0YVJlYWRlciA9IGZ1bmN0aW9uIChtZXRhZGF0YVJlYWRlcikge1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVJlYWRlciA9IG1ldGFkYXRhUmVhZGVyO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIGdldEFyZ3MgPSB0aGlzLl9nZXROb3RBbGxBcmdzKHNlcnZpY2VJZGVudGlmaWVyLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCdXRUaHJvd0lmQXN5bmMoZ2V0QXJncyk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmdldEFzeW5jID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBnZXRBcmdzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGdldEFyZ3MgPSB0aGlzLl9nZXROb3RBbGxBcmdzKHNlcnZpY2VJZGVudGlmaWVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLl9nZXQoZ2V0QXJncyldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXRUYWdnZWQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGdldEFyZ3MgPSB0aGlzLl9nZXROb3RBbGxBcmdzKHNlcnZpY2VJZGVudGlmaWVyLCBmYWxzZSwga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCdXRUaHJvd0lmQXN5bmMoZ2V0QXJncyk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmdldFRhZ2dlZEFzeW5jID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBnZXRBcmdzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGdldEFyZ3MgPSB0aGlzLl9nZXROb3RBbGxBcmdzKHNlcnZpY2VJZGVudGlmaWVyLCBmYWxzZSwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLl9nZXQoZ2V0QXJncyldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXROYW1lZCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwgbmFtZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFnZ2VkKHNlcnZpY2VJZGVudGlmaWVyLCBNRVRBREFUQV9LRVkuTkFNRURfVEFHLCBuYW1lZCk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmdldE5hbWVkQXN5bmMgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIG5hbWVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhZ2dlZEFzeW5jKHNlcnZpY2VJZGVudGlmaWVyLCBNRVRBREFUQV9LRVkuTkFNRURfVEFHLCBuYW1lZCk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICB2YXIgZ2V0QXJncyA9IHRoaXMuX2dldEFsbEFyZ3Moc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QnV0VGhyb3dJZkFzeW5jKGdldEFyZ3MpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXRBbGxBc3luYyA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICB2YXIgZ2V0QXJncyA9IHRoaXMuX2dldEFsbEFyZ3Moc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QWxsKGdldEFyZ3MpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXRBbGxUYWdnZWQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGdldEFyZ3MgPSB0aGlzLl9nZXROb3RBbGxBcmdzKHNlcnZpY2VJZGVudGlmaWVyLCB0cnVlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJ1dFRocm93SWZBc3luYyhnZXRBcmdzKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuZ2V0QWxsVGFnZ2VkQXN5bmMgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGdldEFyZ3MgPSB0aGlzLl9nZXROb3RBbGxBcmdzKHNlcnZpY2VJZGVudGlmaWVyLCB0cnVlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEFsbChnZXRBcmdzKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuZ2V0QWxsTmFtZWQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIG5hbWVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbFRhZ2dlZChzZXJ2aWNlSWRlbnRpZmllciwgTUVUQURBVEFfS0VZLk5BTUVEX1RBRywgbmFtZWQpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXRBbGxOYW1lZEFzeW5jID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCBuYW1lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxUYWdnZWRBc3luYyhzZXJ2aWNlSWRlbnRpZmllciwgTUVUQURBVEFfS0VZLk5BTUVEX1RBRywgbmFtZWQpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIGlzQm91bmQgPSB0aGlzLmlzQm91bmQoY29uc3RydWN0b3JGdW5jdGlvbik7XG4gICAgICAgIGlmICghaXNCb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKGNvbnN0cnVjdG9yRnVuY3Rpb24pLnRvU2VsZigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXNvbHZlZCA9IHRoaXMuZ2V0KGNvbnN0cnVjdG9yRnVuY3Rpb24pO1xuICAgICAgICBpZiAoIWlzQm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kKGNvbnN0cnVjdG9yRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX3ByZURlc3Ryb3kgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IsIGluc3RhbmNlKSB7XG4gICAgICAgIGlmIChSZWZsZWN0Lmhhc01ldGFkYXRhKE1FVEFEQVRBX0tFWS5QUkVfREVTVFJPWSwgY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoTUVUQURBVEFfS0VZLlBSRV9ERVNUUk9ZLCBjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbZGF0YS52YWx1ZV0oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fcmVtb3ZlTW9kdWxlSGFuZGxlcnMgPSBmdW5jdGlvbiAobW9kdWxlSWQpIHtcbiAgICAgICAgdmFyIG1vZHVsZUFjdGl2YXRpb25zSGFuZGxlcnMgPSB0aGlzLl9tb2R1bGVBY3RpdmF0aW9uU3RvcmUucmVtb3ZlKG1vZHVsZUlkKTtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGlvbnMucmVtb3ZlSW50ZXJzZWN0aW9uKG1vZHVsZUFjdGl2YXRpb25zSGFuZGxlcnMub25BY3RpdmF0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlYWN0aXZhdGlvbnMucmVtb3ZlSW50ZXJzZWN0aW9uKG1vZHVsZUFjdGl2YXRpb25zSGFuZGxlcnMub25EZWFjdGl2YXRpb25zKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX3JlbW92ZU1vZHVsZUJpbmRpbmdzID0gZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeS5yZW1vdmVCeUNvbmRpdGlvbihmdW5jdGlvbiAoYmluZGluZykgeyByZXR1cm4gYmluZGluZy5tb2R1bGVJZCA9PT0gbW9kdWxlSWQ7IH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uIChiaW5kaW5nLCBpbnN0YW5jZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UpLmNvbnN0cnVjdG9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RlYWN0aXZhdGlvbnMuaGFzS2V5KGJpbmRpbmcuc2VydmljZUlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2RlYWN0aXZhdGVDb250YWluZXIoaW5zdGFuY2UsIHRoaXMuX2RlYWN0aXZhdGlvbnMuZ2V0KGJpbmRpbmcuc2VydmljZUlkZW50aWZpZXIpLnZhbHVlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZURlYWN0aXZhdGlvbkVycm9yKHJlc3VsdC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9wcm9wYWdhdGVDb250YWluZXJEZWFjdGl2YXRpb25UaGVuQmluZGluZ0FuZFByZURlc3Ryb3lBc3luYyhiaW5kaW5nLCBpbnN0YW5jZSwgY29uc3RydWN0b3IpOyB9KSwgY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wYWdhdGVEZWFjdGl2YXRpb25SZXN1bHQgPSB0aGlzLl9wcm9wYWdhdGVDb250YWluZXJEZWFjdGl2YXRpb25UaGVuQmluZGluZ0FuZFByZURlc3Ryb3koYmluZGluZywgaW5zdGFuY2UsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UocHJvcGFnYXRlRGVhY3RpdmF0aW9uUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVEZWFjdGl2YXRpb25FcnJvcihwcm9wYWdhdGVEZWFjdGl2YXRpb25SZXN1bHQsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLk9OX0RFQUNUSVZBVElPTl9FUlJPUihjb25zdHJ1Y3Rvci5uYW1lLCBleC5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2hhbmRsZURlYWN0aXZhdGlvbkVycm9yID0gZnVuY3Rpb24gKGFzeW5jUmVzdWx0LCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXhfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGFzeW5jUmVzdWx0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLk9OX0RFQUNUSVZBVElPTl9FUlJPUihjb25zdHJ1Y3Rvci5uYW1lLCBleF8xLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2RlYWN0aXZhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGRlYWN0aXZhdGlvbnNJdGVyYXRvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGVhY3RpdmF0aW9uID0gZGVhY3RpdmF0aW9uc0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgd2hpbGUgKGRlYWN0aXZhdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGRlYWN0aXZhdGlvbi52YWx1ZShpbnN0YW5jZSk7XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX2RlYWN0aXZhdGVDb250YWluZXJBc3luYyhpbnN0YW5jZSwgZGVhY3RpdmF0aW9uc0l0ZXJhdG9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYWN0aXZhdGlvbiA9IGRlYWN0aXZhdGlvbnNJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2RlYWN0aXZhdGVDb250YWluZXJBc3luYyA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgZGVhY3RpdmF0aW9uc0l0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkZWFjdGl2YXRpb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWFjdGl2YXRpb24gPSBkZWFjdGl2YXRpb25zSXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlYWN0aXZhdGlvbi52YWx1ZSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZGVhY3RpdmF0aW9uLnZhbHVlKGluc3RhbmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYWN0aXZhdGlvbiA9IGRlYWN0aXZhdGlvbnNJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fZ2V0Q29udGFpbmVyTW9kdWxlSGVscGVyc0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZXRNb2R1bGVJZCA9IGZ1bmN0aW9uIChiaW5kaW5nVG9TeW50YXgsIG1vZHVsZUlkKSB7XG4gICAgICAgICAgICBiaW5kaW5nVG9TeW50YXguX2JpbmRpbmcubW9kdWxlSWQgPSBtb2R1bGVJZDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldEJpbmRGdW5jdGlvbiA9IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nVG9TeW50YXggPSBfdGhpcy5iaW5kKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICBzZXRNb2R1bGVJZChiaW5kaW5nVG9TeW50YXgsIG1vZHVsZUlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ1RvU3ludGF4O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFVuYmluZEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy51bmJpbmQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFVuYmluZEFzeW5jRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVuYmluZEFzeW5jKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRJc2JvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlzQm91bmQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFJlYmluZEZ1bmN0aW9uID0gZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmRpbmdUb1N5bnRheCA9IF90aGlzLnJlYmluZChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgc2V0TW9kdWxlSWQoYmluZGluZ1RvU3ludGF4LCBtb2R1bGVJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdUb1N5bnRheDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRPbkFjdGl2YXRpb25GdW5jdGlvbiA9IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwgb25BY3RpdmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX21vZHVsZUFjdGl2YXRpb25TdG9yZS5hZGRBY3RpdmF0aW9uKG1vZHVsZUlkLCBzZXJ2aWNlSWRlbnRpZmllciwgb25BY3RpdmF0aW9uKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkFjdGl2YXRpb24oc2VydmljZUlkZW50aWZpZXIsIG9uQWN0aXZhdGlvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0T25EZWFjdGl2YXRpb25GdW5jdGlvbiA9IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwgb25EZWFjdGl2YXRpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbW9kdWxlQWN0aXZhdGlvblN0b3JlLmFkZERlYWN0aXZhdGlvbihtb2R1bGVJZCwgc2VydmljZUlkZW50aWZpZXIsIG9uRGVhY3RpdmF0aW9uKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRlYWN0aXZhdGlvbihzZXJ2aWNlSWRlbnRpZmllciwgb25EZWFjdGl2YXRpb24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtSWQpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICBiaW5kRnVuY3Rpb246IGdldEJpbmRGdW5jdGlvbihtSWQpLFxuICAgICAgICAgICAgaXNib3VuZEZ1bmN0aW9uOiBnZXRJc2JvdW5kRnVuY3Rpb24oKSxcbiAgICAgICAgICAgIG9uQWN0aXZhdGlvbkZ1bmN0aW9uOiBnZXRPbkFjdGl2YXRpb25GdW5jdGlvbihtSWQpLFxuICAgICAgICAgICAgb25EZWFjdGl2YXRpb25GdW5jdGlvbjogZ2V0T25EZWFjdGl2YXRpb25GdW5jdGlvbihtSWQpLFxuICAgICAgICAgICAgcmViaW5kRnVuY3Rpb246IGdldFJlYmluZEZ1bmN0aW9uKG1JZCksXG4gICAgICAgICAgICB1bmJpbmRGdW5jdGlvbjogZ2V0VW5iaW5kRnVuY3Rpb24oKSxcbiAgICAgICAgICAgIHVuYmluZEFzeW5jRnVuY3Rpb246IGdldFVuYmluZEFzeW5jRnVuY3Rpb24oKVxuICAgICAgICB9KTsgfTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2dldEFsbCA9IGZ1bmN0aW9uIChnZXRBcmdzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl9nZXQoZ2V0QXJncykpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fZ2V0ID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcbiAgICAgICAgdmFyIHBsYW5BbmRSZXNvbHZlQXJncyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBnZXRBcmdzKSwgeyBjb250ZXh0SW50ZXJjZXB0b3I6IGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBjb250ZXh0OyB9LCB0YXJnZXRUeXBlOiBUYXJnZXRUeXBlRW51bS5WYXJpYWJsZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuX21pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgIHZhciBtaWRkbGV3YXJlUmVzdWx0ID0gdGhpcy5fbWlkZGxld2FyZShwbGFuQW5kUmVzb2x2ZUFyZ3MpO1xuICAgICAgICAgICAgaWYgKG1pZGRsZXdhcmVSZXN1bHQgPT09IHVuZGVmaW5lZCB8fCBtaWRkbGV3YXJlUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuSU5WQUxJRF9NSURETEVXQVJFX1JFVFVSTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWlkZGxld2FyZVJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGxhbkFuZFJlc29sdmUoKShwbGFuQW5kUmVzb2x2ZUFyZ3MpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fZ2V0QnV0VGhyb3dJZkFzeW5jID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2dldChnZXRBcmdzKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZU9yQ29udGFpbnNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLkxBWllfSU5fU1lOQyhnZXRBcmdzLnNlcnZpY2VJZGVudGlmaWVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2dldEFsbEFyZ3MgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIGdldEFsbEFyZ3MgPSB7XG4gICAgICAgICAgICBhdm9pZENvbnN0cmFpbnRzOiB0cnVlLFxuICAgICAgICAgICAgaXNNdWx0aUluamVjdDogdHJ1ZSxcbiAgICAgICAgICAgIHNlcnZpY2VJZGVudGlmaWVyOiBzZXJ2aWNlSWRlbnRpZmllcixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGdldEFsbEFyZ3M7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLl9nZXROb3RBbGxBcmdzID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCBpc011bHRpSW5qZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBnZXROb3RBbGxBcmdzID0ge1xuICAgICAgICAgICAgYXZvaWRDb25zdHJhaW50czogZmFsc2UsXG4gICAgICAgICAgICBpc011bHRpSW5qZWN0OiBpc011bHRpSW5qZWN0LFxuICAgICAgICAgICAgc2VydmljZUlkZW50aWZpZXI6IHNlcnZpY2VJZGVudGlmaWVyLFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBnZXROb3RBbGxBcmdzO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fcGxhbkFuZFJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBwbGFuKF90aGlzLl9tZXRhZGF0YVJlYWRlciwgX3RoaXMsIGFyZ3MuaXNNdWx0aUluamVjdCwgYXJncy50YXJnZXRUeXBlLCBhcmdzLnNlcnZpY2VJZGVudGlmaWVyLCBhcmdzLmtleSwgYXJncy52YWx1ZSwgYXJncy5hdm9pZENvbnN0cmFpbnRzKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBhcmdzLmNvbnRleHRJbnRlcmNlcHRvcihjb250ZXh0KTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXNvbHZlKGNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2RlYWN0aXZhdGVJZlNpbmdsZXRvbiA9IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghYmluZGluZy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlKGJpbmRpbmcuY2FjaGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZy5jYWNoZS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZCkgeyByZXR1cm4gX3RoaXMuX2RlYWN0aXZhdGUoYmluZGluZywgcmVzb2x2ZWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVhY3RpdmF0ZShiaW5kaW5nLCBiaW5kaW5nLmNhY2hlKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2RlYWN0aXZhdGVTaW5nbGV0b25zID0gZnVuY3Rpb24gKGJpbmRpbmdzKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgYmluZGluZ3NfMSA9IGJpbmRpbmdzOyBfaSA8IGJpbmRpbmdzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmluZGluZyA9IGJpbmRpbmdzXzFbX2ldO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2RlYWN0aXZhdGVJZlNpbmdsZXRvbihiaW5kaW5nKTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLkFTWU5DX1VOQklORF9SRVFVSVJFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2RlYWN0aXZhdGVTaW5nbGV0b25zQXN5bmMgPSBmdW5jdGlvbiAoYmluZGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBQcm9taXNlLmFsbChiaW5kaW5ncy5tYXAoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIF90aGlzLl9kZWFjdGl2YXRlSWZTaW5nbGV0b24oYik7IH0pKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fcHJvcGFnYXRlQ29udGFpbmVyRGVhY3RpdmF0aW9uVGhlbkJpbmRpbmdBbmRQcmVEZXN0cm95ID0gZnVuY3Rpb24gKGJpbmRpbmcsIGluc3RhbmNlLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWFjdGl2YXRlLmJpbmQodGhpcy5wYXJlbnQpKGJpbmRpbmcsIGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nRGVhY3RpdmF0aW9uQW5kUHJlRGVzdHJveShiaW5kaW5nLCBpbnN0YW5jZSwgY29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLl9wcm9wYWdhdGVDb250YWluZXJEZWFjdGl2YXRpb25UaGVuQmluZGluZ0FuZFByZURlc3Ryb3lBc3luYyA9IGZ1bmN0aW9uIChiaW5kaW5nLCBpbnN0YW5jZSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5fZGVhY3RpdmF0ZS5iaW5kKHRoaXMucGFyZW50KShiaW5kaW5nLCBpbnN0YW5jZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCwgdGhpcy5fYmluZGluZ0RlYWN0aXZhdGlvbkFuZFByZURlc3Ryb3lBc3luYyhiaW5kaW5nLCBpbnN0YW5jZSwgY29uc3RydWN0b3IpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fcmVtb3ZlU2VydmljZUZyb21EaWN0aW9uYXJ5ID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5nRGljdGlvbmFyeS5yZW1vdmUoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5DQU5OT1RfVU5CSU5EICsgXCIgXCIgKyBnZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nKHNlcnZpY2VJZGVudGlmaWVyKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX2JpbmRpbmdEZWFjdGl2YXRpb25BbmRQcmVEZXN0cm95ID0gZnVuY3Rpb24gKGJpbmRpbmcsIGluc3RhbmNlLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGJpbmRpbmcub25EZWFjdGl2YXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGJpbmRpbmcub25EZWFjdGl2YXRpb24oaW5zdGFuY2UpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9wcmVEZXN0cm95KGNvbnN0cnVjdG9yLCBpbnN0YW5jZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVEZXN0cm95KGNvbnN0cnVjdG9yLCBpbnN0YW5jZSk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLl9iaW5kaW5nRGVhY3RpdmF0aW9uQW5kUHJlRGVzdHJveUFzeW5jID0gZnVuY3Rpb24gKGJpbmRpbmcsIGluc3RhbmNlLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgYmluZGluZy5vbkRlYWN0aXZhdGlvbiA9PT0gXCJmdW5jdGlvblwiKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgYmluZGluZy5vbkRlYWN0aXZhdGlvbihpbnN0YW5jZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFs0LCB0aGlzLl9wcmVEZXN0cm95KGNvbnN0cnVjdG9yLCBpbnN0YW5jZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb250YWluZXI7XG59KCkpO1xuZXhwb3J0IHsgQ29udGFpbmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250YWluZXIuanMubWFwIiwiaW1wb3J0IHsgaWQgfSBmcm9tIFwiLi4vdXRpbHMvaWRcIjtcbnZhciBDb250YWluZXJNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRhaW5lck1vZHVsZShyZWdpc3RyeSkge1xuICAgICAgICB0aGlzLmlkID0gaWQoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgIH1cbiAgICByZXR1cm4gQ29udGFpbmVyTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IENvbnRhaW5lck1vZHVsZSB9O1xudmFyIEFzeW5jQ29udGFpbmVyTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBc3luY0NvbnRhaW5lck1vZHVsZShyZWdpc3RyeSkge1xuICAgICAgICB0aGlzLmlkID0gaWQoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgIH1cbiAgICByZXR1cm4gQXN5bmNDb250YWluZXJNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgQXN5bmNDb250YWluZXJNb2R1bGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhaW5lcl9tb2R1bGUuanMubWFwIiwidmFyIENvbnRhaW5lclNuYXBzaG90ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250YWluZXJTbmFwc2hvdCgpIHtcbiAgICB9XG4gICAgQ29udGFpbmVyU25hcHNob3Qub2YgPSBmdW5jdGlvbiAoYmluZGluZ3MsIG1pZGRsZXdhcmUsIGFjdGl2YXRpb25zLCBkZWFjdGl2YXRpb25zLCBtb2R1bGVBY3RpdmF0aW9uU3RvcmUpIHtcbiAgICAgICAgdmFyIHNuYXBzaG90ID0gbmV3IENvbnRhaW5lclNuYXBzaG90KCk7XG4gICAgICAgIHNuYXBzaG90LmJpbmRpbmdzID0gYmluZGluZ3M7XG4gICAgICAgIHNuYXBzaG90Lm1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlO1xuICAgICAgICBzbmFwc2hvdC5kZWFjdGl2YXRpb25zID0gZGVhY3RpdmF0aW9ucztcbiAgICAgICAgc25hcHNob3QuYWN0aXZhdGlvbnMgPSBhY3RpdmF0aW9ucztcbiAgICAgICAgc25hcHNob3QubW9kdWxlQWN0aXZhdGlvblN0b3JlID0gbW9kdWxlQWN0aXZhdGlvblN0b3JlO1xuICAgICAgICByZXR1cm4gc25hcHNob3Q7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGFpbmVyU25hcHNob3Q7XG59KCkpO1xuZXhwb3J0IHsgQ29udGFpbmVyU25hcHNob3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhaW5lcl9zbmFwc2hvdC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBFUlJPUl9NU0dTIGZyb20gXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiO1xuaW1wb3J0IHsgaXNDbG9uYWJsZSB9IGZyb20gXCIuLi91dGlscy9jbG9uYWJsZVwiO1xudmFyIExvb2t1cCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9va3VwKCkge1xuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIExvb2t1cC5wcm90b3R5cGUuZ2V0TWFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH07XG4gICAgTG9va3VwLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIHZhbHVlKSB7XG4gICAgICAgIGlmIChzZXJ2aWNlSWRlbnRpZmllciA9PT0gbnVsbCB8fCBzZXJ2aWNlSWRlbnRpZmllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5OVUxMX0FSR1VNRU5UKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuTlVMTF9BUkdVTUVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fbWFwLmdldChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIGlmIChlbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbnRyeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21hcC5zZXQoc2VydmljZUlkZW50aWZpZXIsIFt2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb29rdXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICBpZiAoc2VydmljZUlkZW50aWZpZXIgPT09IG51bGwgfHwgc2VydmljZUlkZW50aWZpZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuTlVMTF9BUkdVTUVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fbWFwLmdldChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIGlmIChlbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5LRVlfTk9UX0ZPVU5EKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9va3VwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgaWYgKHNlcnZpY2VJZGVudGlmaWVyID09PSBudWxsIHx8IHNlcnZpY2VJZGVudGlmaWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLk5VTExfQVJHVU1FTlQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fbWFwLmRlbGV0ZShzZXJ2aWNlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLktFWV9OT1RfRk9VTkQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb29rdXAucHJvdG90eXBlLnJlbW92ZUludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChsb29rdXApIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbG9va3VwQWN0aXZhdGlvbnMgPSBsb29rdXAuaGFzS2V5KHNlcnZpY2VJZGVudGlmaWVyKSA/IGxvb2t1cC5nZXQoc2VydmljZUlkZW50aWZpZXIpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGxvb2t1cEFjdGl2YXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWRWYWx1ZXMgPSB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGxvb2t1cFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhbG9va3VwQWN0aXZhdGlvbnMuc29tZShmdW5jdGlvbiAobW9kdWxlQWN0aXZhdGlvbikgeyByZXR1cm4gbG9va3VwVmFsdWUgPT09IG1vZHVsZUFjdGl2YXRpb247IH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF90aGlzLl9zZXRWYWx1ZShzZXJ2aWNlSWRlbnRpZmllciwgZmlsdGVyZWRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvb2t1cC5wcm90b3R5cGUucmVtb3ZlQnlDb25kaXRpb24gPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZW1vdmFscyA9IFtdO1xuICAgICAgICB0aGlzLl9tYXAuZm9yRWFjaChmdW5jdGlvbiAoZW50cmllcywga2V5KSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlZEVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZW50cmllc18xID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gZW50cmllc18xW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlID0gY29uZGl0aW9uKGVudHJ5KTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92YWxzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuX3NldFZhbHVlKGtleSwgdXBkYXRlZEVudHJpZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlbW92YWxzO1xuICAgIH07XG4gICAgTG9va3VwLnByb3RvdHlwZS5oYXNLZXkgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgaWYgKHNlcnZpY2VJZGVudGlmaWVyID09PSBudWxsIHx8IHNlcnZpY2VJZGVudGlmaWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLk5VTExfQVJHVU1FTlQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAuaGFzKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICB9O1xuICAgIExvb2t1cC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb3B5ID0gbmV3IExvb2t1cCgpO1xuICAgICAgICB0aGlzLl9tYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoYikgeyByZXR1cm4gY29weS5hZGQoa2V5LCBpc0Nsb25hYmxlKGIpID8gYi5jbG9uZSgpIDogYik7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfTtcbiAgICBMb29rdXAucHJvdG90eXBlLnRyYXZlcnNlID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGZ1bmMoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9va3VwLnByb3RvdHlwZS5fc2V0VmFsdWUgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0KHNlcnZpY2VJZGVudGlmaWVyLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuZGVsZXRlKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExvb2t1cDtcbn0oKSk7XG5leHBvcnQgeyBMb29rdXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvb2t1cC5qcy5tYXAiLCJpbXBvcnQgeyBMb29rdXAgfSBmcm9tIFwiLi9sb29rdXBcIjtcbnZhciBNb2R1bGVBY3RpdmF0aW9uU3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZHVsZUFjdGl2YXRpb25TdG9yZSgpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBNb2R1bGVBY3RpdmF0aW9uU3RvcmUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuICAgICAgICBpZiAodGhpcy5fbWFwLmhhcyhtb2R1bGVJZCkpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuX21hcC5nZXQobW9kdWxlSWQpO1xuICAgICAgICAgICAgdGhpcy5fbWFwLmRlbGV0ZShtb2R1bGVJZCk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEVtcHR5SGFuZGxlcnNTdG9yZSgpO1xuICAgIH07XG4gICAgTW9kdWxlQWN0aXZhdGlvblN0b3JlLnByb3RvdHlwZS5hZGREZWFjdGl2YXRpb24gPSBmdW5jdGlvbiAobW9kdWxlSWQsIHNlcnZpY2VJZGVudGlmaWVyLCBvbkRlYWN0aXZhdGlvbikge1xuICAgICAgICB0aGlzLl9nZXRNb2R1bGVBY3RpdmF0aW9uSGFuZGxlcnMobW9kdWxlSWQpXG4gICAgICAgICAgICAub25EZWFjdGl2YXRpb25zLmFkZChzZXJ2aWNlSWRlbnRpZmllciwgb25EZWFjdGl2YXRpb24pO1xuICAgIH07XG4gICAgTW9kdWxlQWN0aXZhdGlvblN0b3JlLnByb3RvdHlwZS5hZGRBY3RpdmF0aW9uID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBzZXJ2aWNlSWRlbnRpZmllciwgb25BY3RpdmF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2dldE1vZHVsZUFjdGl2YXRpb25IYW5kbGVycyhtb2R1bGVJZClcbiAgICAgICAgICAgIC5vbkFjdGl2YXRpb25zLmFkZChzZXJ2aWNlSWRlbnRpZmllciwgb25BY3RpdmF0aW9uKTtcbiAgICB9O1xuICAgIE1vZHVsZUFjdGl2YXRpb25TdG9yZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbG9uZSA9IG5ldyBNb2R1bGVBY3RpdmF0aW9uU3RvcmUoKTtcbiAgICAgICAgdGhpcy5fbWFwLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXJzU3RvcmUsIG1vZHVsZUlkKSB7XG4gICAgICAgICAgICBjbG9uZS5fbWFwLnNldChtb2R1bGVJZCwge1xuICAgICAgICAgICAgICAgIG9uQWN0aXZhdGlvbnM6IGhhbmRsZXJzU3RvcmUub25BY3RpdmF0aW9ucy5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIG9uRGVhY3RpdmF0aW9uczogaGFuZGxlcnNTdG9yZS5vbkRlYWN0aXZhdGlvbnMuY2xvbmUoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH07XG4gICAgTW9kdWxlQWN0aXZhdGlvblN0b3JlLnByb3RvdHlwZS5fZ2V0TW9kdWxlQWN0aXZhdGlvbkhhbmRsZXJzID0gZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4gICAgICAgIHZhciBtb2R1bGVBY3RpdmF0aW9uSGFuZGxlcnMgPSB0aGlzLl9tYXAuZ2V0KG1vZHVsZUlkKTtcbiAgICAgICAgaWYgKG1vZHVsZUFjdGl2YXRpb25IYW5kbGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtb2R1bGVBY3RpdmF0aW9uSGFuZGxlcnMgPSB0aGlzLl9nZXRFbXB0eUhhbmRsZXJzU3RvcmUoKTtcbiAgICAgICAgICAgIHRoaXMuX21hcC5zZXQobW9kdWxlSWQsIG1vZHVsZUFjdGl2YXRpb25IYW5kbGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZHVsZUFjdGl2YXRpb25IYW5kbGVycztcbiAgICB9O1xuICAgIE1vZHVsZUFjdGl2YXRpb25TdG9yZS5wcm90b3R5cGUuX2dldEVtcHR5SGFuZGxlcnNTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzU3RvcmUgPSB7XG4gICAgICAgICAgICBvbkFjdGl2YXRpb25zOiBuZXcgTG9va3VwKCksXG4gICAgICAgICAgICBvbkRlYWN0aXZhdGlvbnM6IG5ldyBMb29rdXAoKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaGFuZGxlcnNTdG9yZTtcbiAgICB9O1xuICAgIHJldHVybiBNb2R1bGVBY3RpdmF0aW9uU3RvcmU7XG59KCkpO1xuZXhwb3J0IHsgTW9kdWxlQWN0aXZhdGlvblN0b3JlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGVfYWN0aXZhdGlvbl9zdG9yZS5qcy5tYXAiLCJ2YXIgaW50ZXJmYWNlcztcbihmdW5jdGlvbiAoaW50ZXJmYWNlcykge1xuICAgIDtcbn0pKGludGVyZmFjZXMgfHwgKGludGVyZmFjZXMgPSB7fSkpO1xuZXhwb3J0IHsgaW50ZXJmYWNlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXAiLCJpbXBvcnQgKiBhcyBrZXlzIGZyb20gXCIuL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCI7XG5leHBvcnQgdmFyIE1FVEFEQVRBX0tFWSA9IGtleXM7XG5leHBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi9jb250YWluZXIvY29udGFpbmVyXCI7XG5leHBvcnQgeyBCaW5kaW5nU2NvcGVFbnVtLCBCaW5kaW5nVHlwZUVudW0sIFRhcmdldFR5cGVFbnVtIH0gZnJvbSBcIi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIjtcbmV4cG9ydCB7IEFzeW5jQ29udGFpbmVyTW9kdWxlLCBDb250YWluZXJNb2R1bGUgfSBmcm9tIFwiLi9jb250YWluZXIvY29udGFpbmVyX21vZHVsZVwiO1xuZXhwb3J0IHsgY3JlYXRlVGFnZ2VkRGVjb3JhdG9yIH0gZnJvbSBcIi4vYW5ub3RhdGlvbi9kZWNvcmF0b3JfdXRpbHNcIjtcbmV4cG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiLi9hbm5vdGF0aW9uL2luamVjdGFibGVcIjtcbmV4cG9ydCB7IHRhZ2dlZCB9IGZyb20gXCIuL2Fubm90YXRpb24vdGFnZ2VkXCI7XG5leHBvcnQgeyBuYW1lZCB9IGZyb20gXCIuL2Fubm90YXRpb24vbmFtZWRcIjtcbmV4cG9ydCB7IGluamVjdCB9IGZyb20gXCIuL2Fubm90YXRpb24vaW5qZWN0XCI7XG5leHBvcnQgeyBMYXp5U2VydmljZUlkZW50aWZlciB9IGZyb20gXCIuL2Fubm90YXRpb24vbGF6eV9zZXJ2aWNlX2lkZW50aWZpZXJcIjtcbmV4cG9ydCB7IG9wdGlvbmFsIH0gZnJvbSBcIi4vYW5ub3RhdGlvbi9vcHRpb25hbFwiO1xuZXhwb3J0IHsgdW5tYW5hZ2VkIH0gZnJvbSBcIi4vYW5ub3RhdGlvbi91bm1hbmFnZWRcIjtcbmV4cG9ydCB7IG11bHRpSW5qZWN0IH0gZnJvbSBcIi4vYW5ub3RhdGlvbi9tdWx0aV9pbmplY3RcIjtcbmV4cG9ydCB7IHRhcmdldE5hbWUgfSBmcm9tIFwiLi9hbm5vdGF0aW9uL3RhcmdldF9uYW1lXCI7XG5leHBvcnQgeyBwb3N0Q29uc3RydWN0IH0gZnJvbSBcIi4vYW5ub3RhdGlvbi9wb3N0X2NvbnN0cnVjdFwiO1xuZXhwb3J0IHsgcHJlRGVzdHJveSB9IGZyb20gXCIuL2Fubm90YXRpb24vcHJlX2Rlc3Ryb3lcIjtcbmV4cG9ydCB7IE1ldGFkYXRhUmVhZGVyIH0gZnJvbSBcIi4vcGxhbm5pbmcvbWV0YWRhdGFfcmVhZGVyXCI7XG5leHBvcnQgeyBpZCB9IGZyb20gXCIuL3V0aWxzL2lkXCI7XG5leHBvcnQgeyBpbnRlcmZhY2VzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5leHBvcnQgeyBkZWNvcmF0ZSB9IGZyb20gXCIuL2Fubm90YXRpb24vZGVjb3JhdG9yX3V0aWxzXCI7XG5leHBvcnQgeyB0cmF2ZXJzZUFuY2Vyc3RvcnMsIHRhZ2dlZENvbnN0cmFpbnQsIG5hbWVkQ29uc3RyYWludCwgdHlwZUNvbnN0cmFpbnQgfSBmcm9tIFwiLi9zeW50YXgvY29uc3RyYWludF9oZWxwZXJzXCI7XG5leHBvcnQgeyBnZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbHMvc2VyaWFsaXphdGlvblwiO1xuZXhwb3J0IHsgbXVsdGlCaW5kVG9TZXJ2aWNlIH0gZnJvbSBcIi4vdXRpbHMvYmluZGluZ191dGlsc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW52ZXJzaWZ5LmpzLm1hcCIsImltcG9ydCB7IGlkIH0gZnJvbSBcIi4uL3V0aWxzL2lkXCI7XG52YXIgQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udGV4dChjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cbiAgICBDb250ZXh0LnByb3RvdHlwZS5hZGRQbGFuID0gZnVuY3Rpb24gKHBsYW4pIHtcbiAgICAgICAgdGhpcy5wbGFuID0gcGxhbjtcbiAgICB9O1xuICAgIENvbnRleHQucHJvdG90eXBlLnNldEN1cnJlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGN1cnJlbnRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3QgPSBjdXJyZW50UmVxdWVzdDtcbiAgICB9O1xuICAgIHJldHVybiBDb250ZXh0O1xufSgpKTtcbmV4cG9ydCB7IENvbnRleHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQuanMubWFwIiwiaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiO1xudmFyIE1ldGFkYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZXRhZGF0YShrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIE1ldGFkYXRhLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5ID09PSBNRVRBREFUQV9LRVkuTkFNRURfVEFHKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJuYW1lZDogXCIgKyBTdHJpbmcodGhpcy52YWx1ZSkudG9TdHJpbmcoKSArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwidGFnZ2VkOiB7IGtleTpcIiArIHRoaXMua2V5LnRvU3RyaW5nKCkgKyBcIiwgdmFsdWU6IFwiICsgU3RyaW5nKHRoaXMudmFsdWUpICsgXCIgfVwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWV0YWRhdGE7XG59KCkpO1xuZXhwb3J0IHsgTWV0YWRhdGEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1ldGFkYXRhLmpzLm1hcCIsImltcG9ydCAqIGFzIE1FVEFEQVRBX0tFWSBmcm9tIFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIjtcbnZhciBNZXRhZGF0YVJlYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWV0YWRhdGFSZWFkZXIoKSB7XG4gICAgfVxuICAgIE1ldGFkYXRhUmVhZGVyLnByb3RvdHlwZS5nZXRDb25zdHJ1Y3Rvck1ldGFkYXRhID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yRnVuYykge1xuICAgICAgICB2YXIgY29tcGlsZXJHZW5lcmF0ZWRNZXRhZGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoTUVUQURBVEFfS0VZLlBBUkFNX1RZUEVTLCBjb25zdHJ1Y3RvckZ1bmMpO1xuICAgICAgICB2YXIgdXNlckdlbmVyYXRlZE1ldGFkYXRhID0gUmVmbGVjdC5nZXRNZXRhZGF0YShNRVRBREFUQV9LRVkuVEFHR0VELCBjb25zdHJ1Y3RvckZ1bmMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcGlsZXJHZW5lcmF0ZWRNZXRhZGF0YTogY29tcGlsZXJHZW5lcmF0ZWRNZXRhZGF0YSxcbiAgICAgICAgICAgIHVzZXJHZW5lcmF0ZWRNZXRhZGF0YTogdXNlckdlbmVyYXRlZE1ldGFkYXRhIHx8IHt9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNZXRhZGF0YVJlYWRlci5wcm90b3R5cGUuZ2V0UHJvcGVydGllc01ldGFkYXRhID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yRnVuYykge1xuICAgICAgICB2YXIgdXNlckdlbmVyYXRlZE1ldGFkYXRhID0gUmVmbGVjdC5nZXRNZXRhZGF0YShNRVRBREFUQV9LRVkuVEFHR0VEX1BST1AsIGNvbnN0cnVjdG9yRnVuYykgfHwgW107XG4gICAgICAgIHJldHVybiB1c2VyR2VuZXJhdGVkTWV0YWRhdGE7XG4gICAgfTtcbiAgICByZXR1cm4gTWV0YWRhdGFSZWFkZXI7XG59KCkpO1xuZXhwb3J0IHsgTWV0YWRhdGFSZWFkZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1ldGFkYXRhX3JlYWRlci5qcy5tYXAiLCJ2YXIgUGxhbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxhbihwYXJlbnRDb250ZXh0LCByb290UmVxdWVzdCkge1xuICAgICAgICB0aGlzLnBhcmVudENvbnRleHQgPSBwYXJlbnRDb250ZXh0O1xuICAgICAgICB0aGlzLnJvb3RSZXF1ZXN0ID0gcm9vdFJlcXVlc3Q7XG4gICAgfVxuICAgIHJldHVybiBQbGFuO1xufSgpKTtcbmV4cG9ydCB7IFBsYW4gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsYW4uanMubWFwIiwiaW1wb3J0IHsgQmluZGluZ0NvdW50IH0gZnJvbSBcIi4uL2JpbmRpbmdzL2JpbmRpbmdfY291bnRcIjtcbmltcG9ydCAqIGFzIEVSUk9SX01TR1MgZnJvbSBcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCI7XG5pbXBvcnQgeyBCaW5kaW5nVHlwZUVudW0sIFRhcmdldFR5cGVFbnVtIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9saXRlcmFsX3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBNRVRBREFUQV9LRVkgZnJvbSBcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCI7XG5pbXBvcnQgeyBpc1N0YWNrT3ZlcmZsb3dFeGVwdGlvbiB9IGZyb20gXCIuLi91dGlscy9leGNlcHRpb25zXCI7XG5pbXBvcnQgeyBjaXJjdWxhckRlcGVuZGVuY3lUb0V4Y2VwdGlvbiwgZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZywgbGlzdE1ldGFkYXRhRm9yVGFyZ2V0LCBsaXN0UmVnaXN0ZXJlZEJpbmRpbmdzRm9yU2VydmljZUlkZW50aWZpZXIgfSBmcm9tIFwiLi4vdXRpbHMvc2VyaWFsaXphdGlvblwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSBcIi4vbWV0YWRhdGFcIjtcbmltcG9ydCB7IFBsYW4gfSBmcm9tIFwiLi9wbGFuXCI7XG5pbXBvcnQgeyBnZXRCYXNlQ2xhc3NEZXBlbmRlbmN5Q291bnQsIGdldERlcGVuZGVuY2llcywgZ2V0RnVuY3Rpb25OYW1lIH0gZnJvbSBcIi4vcmVmbGVjdGlvbl91dGlsc1wiO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3RhcmdldFwiO1xuZnVuY3Rpb24gZ2V0QmluZGluZ0RpY3Rpb25hcnkoY250bnIpIHtcbiAgICByZXR1cm4gY250bnIuX2JpbmRpbmdEaWN0aW9uYXJ5O1xufVxuZnVuY3Rpb24gX2NyZWF0ZVRhcmdldChpc011bHRpSW5qZWN0LCB0YXJnZXRUeXBlLCBzZXJ2aWNlSWRlbnRpZmllciwgbmFtZSwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBtZXRhZGF0YUtleSA9IGlzTXVsdGlJbmplY3QgPyBNRVRBREFUQV9LRVkuTVVMVElfSU5KRUNUX1RBRyA6IE1FVEFEQVRBX0tFWS5JTkpFQ1RfVEFHO1xuICAgIHZhciBpbmplY3RNZXRhZGF0YSA9IG5ldyBNZXRhZGF0YShtZXRhZGF0YUtleSwgc2VydmljZUlkZW50aWZpZXIpO1xuICAgIHZhciB0YXJnZXQgPSBuZXcgVGFyZ2V0KHRhcmdldFR5cGUsIG5hbWUsIHNlcnZpY2VJZGVudGlmaWVyLCBpbmplY3RNZXRhZGF0YSk7XG4gICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB0YWdNZXRhZGF0YSA9IG5ldyBNZXRhZGF0YShrZXksIHZhbHVlKTtcbiAgICAgICAgdGFyZ2V0Lm1ldGFkYXRhLnB1c2godGFnTWV0YWRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2dldEFjdGl2ZUJpbmRpbmdzKG1ldGFkYXRhUmVhZGVyLCBhdm9pZENvbnN0cmFpbnRzLCBjb250ZXh0LCBwYXJlbnRSZXF1ZXN0LCB0YXJnZXQpIHtcbiAgICB2YXIgYmluZGluZ3MgPSBnZXRCaW5kaW5ncyhjb250ZXh0LmNvbnRhaW5lciwgdGFyZ2V0LnNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICB2YXIgYWN0aXZlQmluZGluZ3MgPSBbXTtcbiAgICBpZiAoYmluZGluZ3MubGVuZ3RoID09PSBCaW5kaW5nQ291bnQuTm9CaW5kaW5nc0F2YWlsYWJsZSAmJlxuICAgICAgICBjb250ZXh0LmNvbnRhaW5lci5vcHRpb25zLmF1dG9CaW5kSW5qZWN0YWJsZSAmJlxuICAgICAgICB0eXBlb2YgdGFyZ2V0LnNlcnZpY2VJZGVudGlmaWVyID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgbWV0YWRhdGFSZWFkZXIuZ2V0Q29uc3RydWN0b3JNZXRhZGF0YSh0YXJnZXQuc2VydmljZUlkZW50aWZpZXIpLmNvbXBpbGVyR2VuZXJhdGVkTWV0YWRhdGEpIHtcbiAgICAgICAgY29udGV4dC5jb250YWluZXIuYmluZCh0YXJnZXQuc2VydmljZUlkZW50aWZpZXIpLnRvU2VsZigpO1xuICAgICAgICBiaW5kaW5ncyA9IGdldEJpbmRpbmdzKGNvbnRleHQuY29udGFpbmVyLCB0YXJnZXQuc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBpZiAoIWF2b2lkQ29uc3RyYWludHMpIHtcbiAgICAgICAgYWN0aXZlQmluZGluZ3MgPSBiaW5kaW5ncy5maWx0ZXIoZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllciwgY29udGV4dCwgcGFyZW50UmVxdWVzdCwgYmluZGluZywgdGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLmNvbnN0cmFpbnQocmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0aXZlQmluZGluZ3MgPSBiaW5kaW5ncztcbiAgICB9XG4gICAgX3ZhbGlkYXRlQWN0aXZlQmluZGluZ0NvdW50KHRhcmdldC5zZXJ2aWNlSWRlbnRpZmllciwgYWN0aXZlQmluZGluZ3MsIHRhcmdldCwgY29udGV4dC5jb250YWluZXIpO1xuICAgIHJldHVybiBhY3RpdmVCaW5kaW5ncztcbn1cbmZ1bmN0aW9uIF92YWxpZGF0ZUFjdGl2ZUJpbmRpbmdDb3VudChzZXJ2aWNlSWRlbnRpZmllciwgYmluZGluZ3MsIHRhcmdldCwgY29udGFpbmVyKSB7XG4gICAgc3dpdGNoIChiaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSBCaW5kaW5nQ291bnQuTm9CaW5kaW5nc0F2YWlsYWJsZTpcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaXNPcHRpb25hbCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2VJZGVudGlmaWVyU3RyaW5nID0gZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZyhzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IEVSUk9SX01TR1MuTk9UX1JFR0lTVEVSRUQ7XG4gICAgICAgICAgICAgICAgbXNnICs9IGxpc3RNZXRhZGF0YUZvclRhcmdldChzZXJ2aWNlSWRlbnRpZmllclN0cmluZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBtc2cgKz0gbGlzdFJlZ2lzdGVyZWRCaW5kaW5nc0ZvclNlcnZpY2VJZGVudGlmaWVyKGNvbnRhaW5lciwgc2VydmljZUlkZW50aWZpZXJTdHJpbmcsIGdldEJpbmRpbmdzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBCaW5kaW5nQ291bnQuT25seU9uZUJpbmRpbmdBdmFpbGFibGU6XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3M7XG4gICAgICAgIGNhc2UgQmluZGluZ0NvdW50Lk11bHRpcGxlQmluZGluZ3NBdmFpbGFibGU6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5pc0FycmF5KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VydmljZUlkZW50aWZpZXJTdHJpbmcgPSBnZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gRVJST1JfTVNHUy5BTUJJR1VPVVNfTUFUQ0ggKyBcIiBcIiArIHNlcnZpY2VJZGVudGlmaWVyU3RyaW5nO1xuICAgICAgICAgICAgICAgIG1zZyArPSBsaXN0UmVnaXN0ZXJlZEJpbmRpbmdzRm9yU2VydmljZUlkZW50aWZpZXIoY29udGFpbmVyLCBzZXJ2aWNlSWRlbnRpZmllclN0cmluZywgZ2V0QmluZGluZ3MpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzO1xuICAgICAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVTdWJSZXF1ZXN0cyhtZXRhZGF0YVJlYWRlciwgYXZvaWRDb25zdHJhaW50cywgc2VydmljZUlkZW50aWZpZXIsIGNvbnRleHQsIHBhcmVudFJlcXVlc3QsIHRhcmdldCkge1xuICAgIHZhciBhY3RpdmVCaW5kaW5ncztcbiAgICB2YXIgY2hpbGRSZXF1ZXN0O1xuICAgIGlmIChwYXJlbnRSZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgIGFjdGl2ZUJpbmRpbmdzID0gX2dldEFjdGl2ZUJpbmRpbmdzKG1ldGFkYXRhUmVhZGVyLCBhdm9pZENvbnN0cmFpbnRzLCBjb250ZXh0LCBudWxsLCB0YXJnZXQpO1xuICAgICAgICBjaGlsZFJlcXVlc3QgPSBuZXcgUmVxdWVzdChzZXJ2aWNlSWRlbnRpZmllciwgY29udGV4dCwgbnVsbCwgYWN0aXZlQmluZGluZ3MsIHRhcmdldCk7XG4gICAgICAgIHZhciB0aGVQbGFuID0gbmV3IFBsYW4oY29udGV4dCwgY2hpbGRSZXF1ZXN0KTtcbiAgICAgICAgY29udGV4dC5hZGRQbGFuKHRoZVBsYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0aXZlQmluZGluZ3MgPSBfZ2V0QWN0aXZlQmluZGluZ3MobWV0YWRhdGFSZWFkZXIsIGF2b2lkQ29uc3RyYWludHMsIGNvbnRleHQsIHBhcmVudFJlcXVlc3QsIHRhcmdldCk7XG4gICAgICAgIGNoaWxkUmVxdWVzdCA9IHBhcmVudFJlcXVlc3QuYWRkQ2hpbGRSZXF1ZXN0KHRhcmdldC5zZXJ2aWNlSWRlbnRpZmllciwgYWN0aXZlQmluZGluZ3MsIHRhcmdldCk7XG4gICAgfVxuICAgIGFjdGl2ZUJpbmRpbmdzLmZvckVhY2goZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgdmFyIHN1YkNoaWxkUmVxdWVzdCA9IG51bGw7XG4gICAgICAgIGlmICh0YXJnZXQuaXNBcnJheSgpKSB7XG4gICAgICAgICAgICBzdWJDaGlsZFJlcXVlc3QgPSBjaGlsZFJlcXVlc3QuYWRkQ2hpbGRSZXF1ZXN0KGJpbmRpbmcuc2VydmljZUlkZW50aWZpZXIsIGJpbmRpbmcsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYmluZGluZy5jYWNoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YkNoaWxkUmVxdWVzdCA9IGNoaWxkUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmluZGluZy50eXBlID09PSBCaW5kaW5nVHlwZUVudW0uSW5zdGFuY2UgJiYgYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMobWV0YWRhdGFSZWFkZXIsIGJpbmRpbmcuaW1wbGVtZW50YXRpb25UeXBlKTtcbiAgICAgICAgICAgIGlmICghY29udGV4dC5jb250YWluZXIub3B0aW9ucy5za2lwQmFzZUNsYXNzQ2hlY2tzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2VDbGFzc0RlcGVuZGVuY3lDb3VudCA9IGdldEJhc2VDbGFzc0RlcGVuZGVuY3lDb3VudChtZXRhZGF0YVJlYWRlciwgYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmNpZXMubGVuZ3RoIDwgYmFzZUNsYXNzRGVwZW5kZW5jeUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IEVSUk9SX01TR1MuQVJHVU1FTlRTX0xFTkdUSF9NSVNNQVRDSChnZXRGdW5jdGlvbk5hbWUoYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgICAgIF9jcmVhdGVTdWJSZXF1ZXN0cyhtZXRhZGF0YVJlYWRlciwgZmFsc2UsIGRlcGVuZGVuY3kuc2VydmljZUlkZW50aWZpZXIsIGNvbnRleHQsIHN1YkNoaWxkUmVxdWVzdCwgZGVwZW5kZW5jeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0QmluZGluZ3MoY29udGFpbmVyLCBzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgIHZhciBiaW5kaW5ncyA9IFtdO1xuICAgIHZhciBiaW5kaW5nRGljdGlvbmFyeSA9IGdldEJpbmRpbmdEaWN0aW9uYXJ5KGNvbnRhaW5lcik7XG4gICAgaWYgKGJpbmRpbmdEaWN0aW9uYXJ5Lmhhc0tleShzZXJ2aWNlSWRlbnRpZmllcikpIHtcbiAgICAgICAgYmluZGluZ3MgPSBiaW5kaW5nRGljdGlvbmFyeS5nZXQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250YWluZXIucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGJpbmRpbmdzID0gZ2V0QmluZGluZ3MoY29udGFpbmVyLnBhcmVudCwgc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH1cbiAgICByZXR1cm4gYmluZGluZ3M7XG59XG5mdW5jdGlvbiBwbGFuKG1ldGFkYXRhUmVhZGVyLCBjb250YWluZXIsIGlzTXVsdGlJbmplY3QsIHRhcmdldFR5cGUsIHNlcnZpY2VJZGVudGlmaWVyLCBrZXksIHZhbHVlLCBhdm9pZENvbnN0cmFpbnRzKSB7XG4gICAgaWYgKGF2b2lkQ29uc3RyYWludHMgPT09IHZvaWQgMCkgeyBhdm9pZENvbnN0cmFpbnRzID0gZmFsc2U7IH1cbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KGNvbnRhaW5lcik7XG4gICAgdmFyIHRhcmdldCA9IF9jcmVhdGVUYXJnZXQoaXNNdWx0aUluamVjdCwgdGFyZ2V0VHlwZSwgc2VydmljZUlkZW50aWZpZXIsIFwiXCIsIGtleSwgdmFsdWUpO1xuICAgIHRyeSB7XG4gICAgICAgIF9jcmVhdGVTdWJSZXF1ZXN0cyhtZXRhZGF0YVJlYWRlciwgYXZvaWRDb25zdHJhaW50cywgc2VydmljZUlkZW50aWZpZXIsIGNvbnRleHQsIG51bGwsIHRhcmdldCk7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGlzU3RhY2tPdmVyZmxvd0V4ZXB0aW9uKGVycm9yKSkge1xuICAgICAgICAgICAgY2lyY3VsYXJEZXBlbmRlbmN5VG9FeGNlcHRpb24oY29udGV4dC5wbGFuLnJvb3RSZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVNb2NrUmVxdWVzdChjb250YWluZXIsIHNlcnZpY2VJZGVudGlmaWVyLCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIHRhcmdldCA9IG5ldyBUYXJnZXQoVGFyZ2V0VHlwZUVudW0uVmFyaWFibGUsIFwiXCIsIHNlcnZpY2VJZGVudGlmaWVyLCBuZXcgTWV0YWRhdGEoa2V5LCB2YWx1ZSkpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoY29udGFpbmVyKTtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHNlcnZpY2VJZGVudGlmaWVyLCBjb250ZXh0LCBudWxsLCBbXSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cbmV4cG9ydCB7IHBsYW4sIGNyZWF0ZU1vY2tSZXF1ZXN0LCBnZXRCaW5kaW5nRGljdGlvbmFyeSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhbm5lci5qcy5tYXAiLCJ2YXIgUXVlcnlhYmxlU3RyaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeWFibGVTdHJpbmcoc3RyKSB7XG4gICAgICAgIHRoaXMuc3RyID0gc3RyO1xuICAgIH1cbiAgICBRdWVyeWFibGVTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0ci5pbmRleE9mKHNlYXJjaFN0cmluZykgPT09IDA7XG4gICAgfTtcbiAgICBRdWVyeWFibGVTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZykge1xuICAgICAgICB2YXIgcmV2ZXJzZVN0cmluZyA9IFwiXCI7XG4gICAgICAgIHZhciByZXZlcnNlU2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICAgICAgICByZXZlcnNlU3RyaW5nID0gdGhpcy5zdHIuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0c1dpdGguY2FsbCh7IHN0cjogcmV2ZXJzZVN0cmluZyB9LCByZXZlcnNlU2VhcmNoU3RyaW5nKTtcbiAgICB9O1xuICAgIFF1ZXJ5YWJsZVN0cmluZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcpICE9PSAtMSk7XG4gICAgfTtcbiAgICBRdWVyeWFibGVTdHJpbmcucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChjb21wYXJlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0ciA9PT0gY29tcGFyZVN0cmluZztcbiAgICB9O1xuICAgIFF1ZXJ5YWJsZVN0cmluZy5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cjtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeWFibGVTdHJpbmc7XG59KCkpO1xuZXhwb3J0IHsgUXVlcnlhYmxlU3RyaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeWFibGVfc3RyaW5nLmpzLm1hcCIsInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCB7IExhenlTZXJ2aWNlSWRlbnRpZmVyIH0gZnJvbSBcIi4uL2Fubm90YXRpb24vbGF6eV9zZXJ2aWNlX2lkZW50aWZpZXJcIjtcbmltcG9ydCAqIGFzIEVSUk9SX01TR1MgZnJvbSBcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCI7XG5pbXBvcnQgeyBUYXJnZXRUeXBlRW51bSB9IGZyb20gXCIuLi9jb25zdGFudHMvbGl0ZXJhbF90eXBlc1wiO1xuaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiO1xuaW1wb3J0IHsgZ2V0RnVuY3Rpb25OYW1lIH0gZnJvbSBcIi4uL3V0aWxzL3NlcmlhbGl6YXRpb25cIjtcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3RhcmdldFwiO1xuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKG1ldGFkYXRhUmVhZGVyLCBmdW5jKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yTmFtZSA9IGdldEZ1bmN0aW9uTmFtZShmdW5jKTtcbiAgICByZXR1cm4gZ2V0VGFyZ2V0cyhtZXRhZGF0YVJlYWRlciwgY29uc3RydWN0b3JOYW1lLCBmdW5jLCBmYWxzZSk7XG59XG5mdW5jdGlvbiBnZXRUYXJnZXRzKG1ldGFkYXRhUmVhZGVyLCBjb25zdHJ1Y3Rvck5hbWUsIGZ1bmMsIGlzQmFzZUNsYXNzKSB7XG4gICAgdmFyIG1ldGFkYXRhID0gbWV0YWRhdGFSZWFkZXIuZ2V0Q29uc3RydWN0b3JNZXRhZGF0YShmdW5jKTtcbiAgICB2YXIgc2VydmljZUlkZW50aWZpZXJzID0gbWV0YWRhdGEuY29tcGlsZXJHZW5lcmF0ZWRNZXRhZGF0YTtcbiAgICBpZiAoc2VydmljZUlkZW50aWZpZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1zZyA9IEVSUk9SX01TR1MuTUlTU0lOR19JTkpFQ1RBQkxFX0FOTk9UQVRJT04gKyBcIiBcIiArIGNvbnN0cnVjdG9yTmFtZSArIFwiLlwiO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG4gICAgdmFyIGNvbnN0cnVjdG9yQXJnc01ldGFkYXRhID0gbWV0YWRhdGEudXNlckdlbmVyYXRlZE1ldGFkYXRhO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uc3RydWN0b3JBcmdzTWV0YWRhdGEpO1xuICAgIHZhciBoYXNVc2VyRGVjbGFyZWRVbmtub3duSW5qZWN0aW9ucyA9IChmdW5jLmxlbmd0aCA9PT0gMCAmJiBrZXlzLmxlbmd0aCA+IDApO1xuICAgIHZhciBoYXNPcHRpb25hbFBhcmFtZXRlcnMgPSBrZXlzLmxlbmd0aCA+IGZ1bmMubGVuZ3RoO1xuICAgIHZhciBpdGVyYXRpb25zID0gKGhhc1VzZXJEZWNsYXJlZFVua25vd25JbmplY3Rpb25zIHx8IGhhc09wdGlvbmFsUGFyYW1ldGVycykgPyBrZXlzLmxlbmd0aCA6IGZ1bmMubGVuZ3RoO1xuICAgIHZhciBjb25zdHJ1Y3RvclRhcmdldHMgPSBnZXRDb25zdHJ1Y3RvckFyZ3NBc1RhcmdldHMoaXNCYXNlQ2xhc3MsIGNvbnN0cnVjdG9yTmFtZSwgc2VydmljZUlkZW50aWZpZXJzLCBjb25zdHJ1Y3RvckFyZ3NNZXRhZGF0YSwgaXRlcmF0aW9ucyk7XG4gICAgdmFyIHByb3BlcnR5VGFyZ2V0cyA9IGdldENsYXNzUHJvcHNBc1RhcmdldHMobWV0YWRhdGFSZWFkZXIsIGZ1bmMsIGNvbnN0cnVjdG9yTmFtZSk7XG4gICAgdmFyIHRhcmdldHMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIGNvbnN0cnVjdG9yVGFyZ2V0cywgdHJ1ZSksIHByb3BlcnR5VGFyZ2V0cywgdHJ1ZSk7XG4gICAgcmV0dXJuIHRhcmdldHM7XG59XG5mdW5jdGlvbiBnZXRDb25zdHJ1Y3RvckFyZ3NBc1RhcmdldChpbmRleCwgaXNCYXNlQ2xhc3MsIGNvbnN0cnVjdG9yTmFtZSwgc2VydmljZUlkZW50aWZpZXJzLCBjb25zdHJ1Y3RvckFyZ3NNZXRhZGF0YSkge1xuICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IGNvbnN0cnVjdG9yQXJnc01ldGFkYXRhW2luZGV4LnRvU3RyaW5nKCldIHx8IFtdO1xuICAgIHZhciBtZXRhZGF0YSA9IGZvcm1hdFRhcmdldE1ldGFkYXRhKHRhcmdldE1ldGFkYXRhKTtcbiAgICB2YXIgaXNNYW5hZ2VkID0gbWV0YWRhdGEudW5tYW5hZ2VkICE9PSB0cnVlO1xuICAgIHZhciBzZXJ2aWNlSWRlbnRpZmllciA9IHNlcnZpY2VJZGVudGlmaWVyc1tpbmRleF07XG4gICAgdmFyIGluamVjdElkZW50aWZpZXIgPSAobWV0YWRhdGEuaW5qZWN0IHx8IG1ldGFkYXRhLm11bHRpSW5qZWN0KTtcbiAgICBzZXJ2aWNlSWRlbnRpZmllciA9IChpbmplY3RJZGVudGlmaWVyKSA/IChpbmplY3RJZGVudGlmaWVyKSA6IHNlcnZpY2VJZGVudGlmaWVyO1xuICAgIGlmIChzZXJ2aWNlSWRlbnRpZmllciBpbnN0YW5jZW9mIExhenlTZXJ2aWNlSWRlbnRpZmVyKSB7XG4gICAgICAgIHNlcnZpY2VJZGVudGlmaWVyID0gc2VydmljZUlkZW50aWZpZXIudW53cmFwKCk7XG4gICAgfVxuICAgIGlmIChpc01hbmFnZWQpIHtcbiAgICAgICAgdmFyIGlzT2JqZWN0ID0gc2VydmljZUlkZW50aWZpZXIgPT09IE9iamVjdDtcbiAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSBzZXJ2aWNlSWRlbnRpZmllciA9PT0gRnVuY3Rpb247XG4gICAgICAgIHZhciBpc1VuZGVmaW5lZCA9IHNlcnZpY2VJZGVudGlmaWVyID09PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc1Vua25vd25UeXBlID0gKGlzT2JqZWN0IHx8IGlzRnVuY3Rpb24gfHwgaXNVbmRlZmluZWQpO1xuICAgICAgICBpZiAoIWlzQmFzZUNsYXNzICYmIGlzVW5rbm93blR5cGUpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBFUlJPUl9NU0dTLk1JU1NJTkdfSU5KRUNUX0FOTk9UQVRJT04gKyBcIiBhcmd1bWVudCBcIiArIGluZGV4ICsgXCIgaW4gY2xhc3MgXCIgKyBjb25zdHJ1Y3Rvck5hbWUgKyBcIi5cIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXQgPSBuZXcgVGFyZ2V0KFRhcmdldFR5cGVFbnVtLkNvbnN0cnVjdG9yQXJndW1lbnQsIG1ldGFkYXRhLnRhcmdldE5hbWUsIHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgdGFyZ2V0Lm1ldGFkYXRhID0gdGFyZ2V0TWV0YWRhdGE7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3JBcmdzQXNUYXJnZXRzKGlzQmFzZUNsYXNzLCBjb25zdHJ1Y3Rvck5hbWUsIHNlcnZpY2VJZGVudGlmaWVycywgY29uc3RydWN0b3JBcmdzTWV0YWRhdGEsIGl0ZXJhdGlvbnMpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBnZXRDb25zdHJ1Y3RvckFyZ3NBc1RhcmdldChpbmRleCwgaXNCYXNlQ2xhc3MsIGNvbnN0cnVjdG9yTmFtZSwgc2VydmljZUlkZW50aWZpZXJzLCBjb25zdHJ1Y3RvckFyZ3NNZXRhZGF0YSk7XG4gICAgICAgIGlmICh0YXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRzO1xufVxuZnVuY3Rpb24gX2dldFNlcnZpY2VJZGVudGlmaWVyRm9yUHJvcGVydHkoaW5qZWN0LCBtdWx0aUluamVjdCwgcHJvcGVydHlOYW1lLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgc2VydmljZUlkZW50aWZpZXIgPSAoaW5qZWN0IHx8IG11bHRpSW5qZWN0KTtcbiAgICBpZiAoc2VydmljZUlkZW50aWZpZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbXNnID0gRVJST1JfTVNHUy5NSVNTSU5HX0lOSkVDVEFCTEVfQU5OT1RBVElPTiArIFwiIGZvciBwcm9wZXJ0eSBcIiArIFN0cmluZyhwcm9wZXJ0eU5hbWUpICsgXCIgaW4gY2xhc3MgXCIgKyBjbGFzc05hbWUgKyBcIi5cIjtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlSWRlbnRpZmllcjtcbn1cbmZ1bmN0aW9uIGdldENsYXNzUHJvcHNBc1RhcmdldHMobWV0YWRhdGFSZWFkZXIsIGNvbnN0cnVjdG9yRnVuYywgY29uc3RydWN0b3JOYW1lKSB7XG4gICAgdmFyIGNsYXNzUHJvcHNNZXRhZGF0YSA9IG1ldGFkYXRhUmVhZGVyLmdldFByb3BlcnRpZXNNZXRhZGF0YShjb25zdHJ1Y3RvckZ1bmMpO1xuICAgIHZhciB0YXJnZXRzID0gW107XG4gICAgdmFyIHN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGNsYXNzUHJvcHNNZXRhZGF0YSk7XG4gICAgdmFyIHN0cmluZ0tleXMgPSBPYmplY3Qua2V5cyhjbGFzc1Byb3BzTWV0YWRhdGEpO1xuICAgIHZhciBrZXlzID0gc3RyaW5nS2V5cy5jb25jYXQoc3ltYm9sS2V5cyk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBrZXlzXzEgPSBrZXlzOyBfaSA8IGtleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNfMVtfaV07XG4gICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IGNsYXNzUHJvcHNNZXRhZGF0YVtrZXldO1xuICAgICAgICB2YXIgbWV0YWRhdGEgPSBmb3JtYXRUYXJnZXRNZXRhZGF0YSh0YXJnZXRNZXRhZGF0YSk7XG4gICAgICAgIHZhciBpZGVudGlmaWVyID0gbWV0YWRhdGEudGFyZ2V0TmFtZSB8fCBrZXk7XG4gICAgICAgIHZhciBzZXJ2aWNlSWRlbnRpZmllciA9IF9nZXRTZXJ2aWNlSWRlbnRpZmllckZvclByb3BlcnR5KG1ldGFkYXRhLmluamVjdCwgbWV0YWRhdGEubXVsdGlJbmplY3QsIGtleSwgY29uc3RydWN0b3JOYW1lKTtcbiAgICAgICAgdmFyIHRhcmdldCA9IG5ldyBUYXJnZXQoVGFyZ2V0VHlwZUVudW0uQ2xhc3NQcm9wZXJ0eSwgaWRlbnRpZmllciwgc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICB0YXJnZXQubWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YTtcbiAgICAgICAgdGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBiYXNlQ29uc3RydWN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29uc3RydWN0b3JGdW5jLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG4gICAgaWYgKGJhc2VDb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB7XG4gICAgICAgIHZhciBiYXNlVGFyZ2V0cyA9IGdldENsYXNzUHJvcHNBc1RhcmdldHMobWV0YWRhdGFSZWFkZXIsIGJhc2VDb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lKTtcbiAgICAgICAgdGFyZ2V0cyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgdGFyZ2V0cywgdHJ1ZSksIGJhc2VUYXJnZXRzLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldHM7XG59XG5mdW5jdGlvbiBnZXRCYXNlQ2xhc3NEZXBlbmRlbmN5Q291bnQobWV0YWRhdGFSZWFkZXIsIGZ1bmMpIHtcbiAgICB2YXIgYmFzZUNvbnN0cnVjdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGZ1bmMucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYmFzZUNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcbiAgICAgICAgdmFyIGJhc2VDb25zdHJ1Y3Rvck5hbWUgPSBnZXRGdW5jdGlvbk5hbWUoYmFzZUNvbnN0cnVjdG9yKTtcbiAgICAgICAgdmFyIHRhcmdldHMgPSBnZXRUYXJnZXRzKG1ldGFkYXRhUmVhZGVyLCBiYXNlQ29uc3RydWN0b3JOYW1lLCBiYXNlQ29uc3RydWN0b3IsIHRydWUpO1xuICAgICAgICB2YXIgbWV0YWRhdGEgPSB0YXJnZXRzLm1hcChmdW5jdGlvbiAodCkgeyByZXR1cm4gdC5tZXRhZGF0YS5maWx0ZXIoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ua2V5ID09PSBNRVRBREFUQV9LRVkuVU5NQU5BR0VEX1RBRzsgfSk7IH0pO1xuICAgICAgICB2YXIgdW5tYW5hZ2VkQ291bnQgPSBbXS5jb25jYXQuYXBwbHkoW10sIG1ldGFkYXRhKS5sZW5ndGg7XG4gICAgICAgIHZhciBkZXBlbmRlbmN5Q291bnQgPSB0YXJnZXRzLmxlbmd0aCAtIHVubWFuYWdlZENvdW50O1xuICAgICAgICBpZiAoZGVwZW5kZW5jeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3lDb3VudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCYXNlQ2xhc3NEZXBlbmRlbmN5Q291bnQobWV0YWRhdGFSZWFkZXIsIGJhc2VDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZvcm1hdFRhcmdldE1ldGFkYXRhKHRhcmdldE1ldGFkYXRhKSB7XG4gICAgdmFyIHRhcmdldE1ldGFkYXRhTWFwID0ge307XG4gICAgdGFyZ2V0TWV0YWRhdGEuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICB0YXJnZXRNZXRhZGF0YU1hcFttLmtleS50b1N0cmluZygpXSA9IG0udmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5qZWN0OiB0YXJnZXRNZXRhZGF0YU1hcFtNRVRBREFUQV9LRVkuSU5KRUNUX1RBR10sXG4gICAgICAgIG11bHRpSW5qZWN0OiB0YXJnZXRNZXRhZGF0YU1hcFtNRVRBREFUQV9LRVkuTVVMVElfSU5KRUNUX1RBR10sXG4gICAgICAgIHRhcmdldE5hbWU6IHRhcmdldE1ldGFkYXRhTWFwW01FVEFEQVRBX0tFWS5OQU1FX1RBR10sXG4gICAgICAgIHVubWFuYWdlZDogdGFyZ2V0TWV0YWRhdGFNYXBbTUVUQURBVEFfS0VZLlVOTUFOQUdFRF9UQUddXG4gICAgfTtcbn1cbmV4cG9ydCB7IGdldERlcGVuZGVuY2llcywgZ2V0QmFzZUNsYXNzRGVwZW5kZW5jeUNvdW50LCBnZXRGdW5jdGlvbk5hbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZmxlY3Rpb25fdXRpbHMuanMubWFwIiwiaW1wb3J0IHsgaWQgfSBmcm9tIFwiLi4vdXRpbHMvaWRcIjtcbnZhciBSZXF1ZXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXF1ZXN0KHNlcnZpY2VJZGVudGlmaWVyLCBwYXJlbnRDb250ZXh0LCBwYXJlbnRSZXF1ZXN0LCBiaW5kaW5ncywgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCgpO1xuICAgICAgICB0aGlzLnNlcnZpY2VJZGVudGlmaWVyID0gc2VydmljZUlkZW50aWZpZXI7XG4gICAgICAgIHRoaXMucGFyZW50Q29udGV4dCA9IHBhcmVudENvbnRleHQ7XG4gICAgICAgIHRoaXMucGFyZW50UmVxdWVzdCA9IHBhcmVudFJlcXVlc3Q7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNoaWxkUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IChBcnJheS5pc0FycmF5KGJpbmRpbmdzKSA/IGJpbmRpbmdzIDogW2JpbmRpbmdzXSk7XG4gICAgICAgIHRoaXMucmVxdWVzdFNjb3BlID0gcGFyZW50UmVxdWVzdCA9PT0gbnVsbFxuICAgICAgICAgICAgPyBuZXcgTWFwKClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG4gICAgUmVxdWVzdC5wcm90b3R5cGUuYWRkQ2hpbGRSZXF1ZXN0ID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCBiaW5kaW5ncywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5ldyBSZXF1ZXN0KHNlcnZpY2VJZGVudGlmaWVyLCB0aGlzLnBhcmVudENvbnRleHQsIHRoaXMsIGJpbmRpbmdzLCB0YXJnZXQpO1xuICAgICAgICB0aGlzLmNoaWxkUmVxdWVzdHMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9O1xuICAgIHJldHVybiBSZXF1ZXN0O1xufSgpKTtcbmV4cG9ydCB7IFJlcXVlc3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QuanMubWFwIiwiaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gJy4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzJztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xuaW1wb3J0IHsgZ2V0U3ltYm9sRGVzY3JpcHRpb24gfSBmcm9tICcuLi91dGlscy9zZXJpYWxpemF0aW9uJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBRdWVyeWFibGVTdHJpbmcgfSBmcm9tICcuL3F1ZXJ5YWJsZV9zdHJpbmcnO1xudmFyIFRhcmdldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFyZ2V0KHR5cGUsIGlkZW50aWZpZXIsIHNlcnZpY2VJZGVudGlmaWVyLCBuYW1lZE9yVGFnZ2VkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCgpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnNlcnZpY2VJZGVudGlmaWVyID0gc2VydmljZUlkZW50aWZpZXI7XG4gICAgICAgIHZhciBxdWVyeWFibGVOYW1lID0gdHlwZW9mIGlkZW50aWZpZXIgPT09ICdzeW1ib2wnID8gZ2V0U3ltYm9sRGVzY3JpcHRpb24oaWRlbnRpZmllcikgOiBpZGVudGlmaWVyO1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXcgUXVlcnlhYmxlU3RyaW5nKHF1ZXJ5YWJsZU5hbWUgfHwgXCJcIik7XG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdmFyIG1ldGFkYXRhSXRlbSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZWRPclRhZ2dlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhSXRlbSA9IG5ldyBNZXRhZGF0YShNRVRBREFUQV9LRVkuTkFNRURfVEFHLCBuYW1lZE9yVGFnZ2VkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lZE9yVGFnZ2VkIGluc3RhbmNlb2YgTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhSXRlbSA9IG5hbWVkT3JUYWdnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGFkYXRhSXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YS5wdXNoKG1ldGFkYXRhSXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5oYXNUYWcgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLm1ldGFkYXRhOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIG0gPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAobS5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFRhcmdldC5wcm90b3R5cGUuaXNBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzVGFnKE1FVEFEQVRBX0tFWS5NVUxUSV9JTkpFQ1RfVEFHKTtcbiAgICB9O1xuICAgIFRhcmdldC5wcm90b3R5cGUubWF0Y2hlc0FycmF5ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hlc1RhZyhNRVRBREFUQV9LRVkuTVVMVElfSU5KRUNUX1RBRykobmFtZSk7XG4gICAgfTtcbiAgICBUYXJnZXQucHJvdG90eXBlLmlzTmFtZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1RhZyhNRVRBREFUQV9LRVkuTkFNRURfVEFHKTtcbiAgICB9O1xuICAgIFRhcmdldC5wcm90b3R5cGUuaXNUYWdnZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLnNvbWUoZnVuY3Rpb24gKG1ldGFkYXRhKSB7IHJldHVybiBNRVRBREFUQV9LRVkuTk9OX0NVU1RPTV9UQUdfS0VZUy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBtZXRhZGF0YS5rZXkgIT09IGtleTsgfSk7IH0pO1xuICAgIH07XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5pc09wdGlvbmFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGVzVGFnKE1FVEFEQVRBX0tFWS5PUFRJT05BTF9UQUcpKHRydWUpO1xuICAgIH07XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5nZXROYW1lZFRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOYW1lZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5maWx0ZXIoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ua2V5ID09PSBNRVRBREFUQV9LRVkuTkFNRURfVEFHOyB9KVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIFRhcmdldC5wcm90b3R5cGUuZ2V0Q3VzdG9tVGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUYWdnZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEuZmlsdGVyKGZ1bmN0aW9uIChtZXRhZGF0YSkgeyByZXR1cm4gTUVUQURBVEFfS0VZLk5PTl9DVVNUT01fVEFHX0tFWVMuZXZlcnkoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gbWV0YWRhdGEua2V5ICE9PSBrZXk7IH0pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUYXJnZXQucHJvdG90eXBlLm1hdGNoZXNOYW1lZFRhZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoZXNUYWcoTUVUQURBVEFfS0VZLk5BTUVEX1RBRykobmFtZSk7XG4gICAgfTtcbiAgICBUYXJnZXQucHJvdG90eXBlLm1hdGNoZXNUYWcgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBfdGhpcy5tZXRhZGF0YTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAobS5rZXkgPT09IGtleSAmJiBtLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gVGFyZ2V0O1xufSgpKTtcbmV4cG9ydCB7IFRhcmdldCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFyZ2V0LmpzLm1hcCIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuaW1wb3J0IHsgT05fREVBQ1RJVkFUSU9OX0VSUk9SLCBQT1NUX0NPTlNUUlVDVF9FUlJPUiwgUFJFX0RFU1RST1lfRVJST1IgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Vycm9yX21zZ3NcIjtcbmltcG9ydCB7IEJpbmRpbmdTY29wZUVudW0sIFRhcmdldFR5cGVFbnVtIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9saXRlcmFsX3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBNRVRBREFUQV9LRVkgZnJvbSBcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCI7XG5pbXBvcnQgeyBpc1Byb21pc2UsIGlzUHJvbWlzZU9yQ29udGFpbnNQcm9taXNlIH0gZnJvbSBcIi4uL3V0aWxzL2FzeW5jXCI7XG5mdW5jdGlvbiBfcmVzb2x2ZVJlcXVlc3RzKGNoaWxkUmVxdWVzdHMsIHJlc29sdmVSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIGNoaWxkUmVxdWVzdHMucmVkdWNlKGZ1bmN0aW9uIChyZXNvbHZlZFJlcXVlc3RzLCBjaGlsZFJlcXVlc3QpIHtcbiAgICAgICAgdmFyIGluamVjdGlvbiA9IHJlc29sdmVSZXF1ZXN0KGNoaWxkUmVxdWVzdCk7XG4gICAgICAgIHZhciB0YXJnZXRUeXBlID0gY2hpbGRSZXF1ZXN0LnRhcmdldC50eXBlO1xuICAgICAgICBpZiAodGFyZ2V0VHlwZSA9PT0gVGFyZ2V0VHlwZUVudW0uQ29uc3RydWN0b3JBcmd1bWVudCkge1xuICAgICAgICAgICAgcmVzb2x2ZWRSZXF1ZXN0cy5jb25zdHJ1Y3RvckluamVjdGlvbnMucHVzaChpbmplY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZWRSZXF1ZXN0cy5wcm9wZXJ0eVJlcXVlc3RzLnB1c2goY2hpbGRSZXF1ZXN0KTtcbiAgICAgICAgICAgIHJlc29sdmVkUmVxdWVzdHMucHJvcGVydHlJbmplY3Rpb25zLnB1c2goaW5qZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc29sdmVkUmVxdWVzdHMuaXNBc3luYykge1xuICAgICAgICAgICAgcmVzb2x2ZWRSZXF1ZXN0cy5pc0FzeW5jID0gaXNQcm9taXNlT3JDb250YWluc1Byb21pc2UoaW5qZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZWRSZXF1ZXN0cztcbiAgICB9LCB7IGNvbnN0cnVjdG9ySW5qZWN0aW9uczogW10sIHByb3BlcnR5SW5qZWN0aW9uczogW10sIHByb3BlcnR5UmVxdWVzdHM6IFtdLCBpc0FzeW5jOiBmYWxzZSB9KTtcbn1cbmZ1bmN0aW9uIF9jcmVhdGVJbnN0YW5jZShjb25zdHIsIGNoaWxkUmVxdWVzdHMsIHJlc29sdmVSZXF1ZXN0KSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoY2hpbGRSZXF1ZXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IF9yZXNvbHZlUmVxdWVzdHMoY2hpbGRSZXF1ZXN0cywgcmVzb2x2ZVJlcXVlc3QpO1xuICAgICAgICB2YXIgY3JlYXRlSW5zdGFuY2VXaXRoSW5qZWN0aW9uc0FyZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNvbHZlZCksIHsgY29uc3RyOiBjb25zdHIgfSk7XG4gICAgICAgIGlmIChyZXNvbHZlZC5pc0FzeW5jKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjcmVhdGVJbnN0YW5jZVdpdGhJbmplY3Rpb25zQXN5bmMoY3JlYXRlSW5zdGFuY2VXaXRoSW5qZWN0aW9uc0FyZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjcmVhdGVJbnN0YW5jZVdpdGhJbmplY3Rpb25zKGNyZWF0ZUluc3RhbmNlV2l0aEluamVjdGlvbnNBcmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBuZXcgY29uc3RyKCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVdpdGhJbmplY3Rpb25zKGFyZ3MpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3ICgoX2EgPSBhcmdzLmNvbnN0cikuYmluZC5hcHBseShfYSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJncy5jb25zdHJ1Y3RvckluamVjdGlvbnMsIGZhbHNlKSkpKCk7XG4gICAgYXJncy5wcm9wZXJ0eVJlcXVlc3RzLmZvckVhY2goZnVuY3Rpb24gKHIsIGluZGV4KSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHIudGFyZ2V0LmlkZW50aWZpZXI7XG4gICAgICAgIHZhciBpbmplY3Rpb24gPSBhcmdzLnByb3BlcnR5SW5qZWN0aW9uc1tpbmRleF07XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IGluamVjdGlvbjtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVdpdGhJbmplY3Rpb25zQXN5bmMoYXJncykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ySW5qZWN0aW9ucywgcHJvcGVydHlJbmplY3Rpb25zO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIHBvc3NpYmx5V2FpdEluamVjdGlvbnMoYXJncy5jb25zdHJ1Y3RvckluamVjdGlvbnMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9ySW5qZWN0aW9ucyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwb3NzaWJseVdhaXRJbmplY3Rpb25zKGFyZ3MucHJvcGVydHlJbmplY3Rpb25zKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUluamVjdGlvbnMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgY3JlYXRlSW5zdGFuY2VXaXRoSW5qZWN0aW9ucyhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYXJncyksIHsgY29uc3RydWN0b3JJbmplY3Rpb25zOiBjb25zdHJ1Y3RvckluamVjdGlvbnMsIHByb3BlcnR5SW5qZWN0aW9uczogcHJvcGVydHlJbmplY3Rpb25zIH0pKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcG9zc2libHlXYWl0SW5qZWN0aW9ucyhwb3NzaWJsZVByb21pc2VpbmplY3Rpb25zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5qZWN0aW9ucywgX2ksIHBvc3NpYmxlUHJvbWlzZWluamVjdGlvbnNfMSwgaW5qZWN0aW9uO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBpbmplY3Rpb25zID0gW107XG4gICAgICAgICAgICBmb3IgKF9pID0gMCwgcG9zc2libGVQcm9taXNlaW5qZWN0aW9uc18xID0gcG9zc2libGVQcm9taXNlaW5qZWN0aW9uczsgX2kgPCBwb3NzaWJsZVByb21pc2VpbmplY3Rpb25zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0aW9uID0gcG9zc2libGVQcm9taXNlaW5qZWN0aW9uc18xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGluamVjdGlvbnMucHVzaChQcm9taXNlLmFsbChpbmplY3Rpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluamVjdGlvbnMucHVzaChpbmplY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbMiwgUHJvbWlzZS5hbGwoaW5qZWN0aW9ucyldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIF9nZXRJbnN0YW5jZUFmdGVyUG9zdENvbnN0cnVjdChjb25zdHIsIHJlc3VsdCkge1xuICAgIHZhciBwb3N0Q29uc3RydWN0UmVzdWx0ID0gX3Bvc3RDb25zdHJ1Y3QoY29uc3RyLCByZXN1bHQpO1xuICAgIGlmIChpc1Byb21pc2UocG9zdENvbnN0cnVjdFJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHBvc3RDb25zdHJ1Y3RSZXN1bHQudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXN1bHQ7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5mdW5jdGlvbiBfcG9zdENvbnN0cnVjdChjb25zdHIsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAoUmVmbGVjdC5oYXNNZXRhZGF0YShNRVRBREFUQV9LRVkuUE9TVF9DT05TVFJVQ1QsIGNvbnN0cikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBSZWZsZWN0LmdldE1ldGFkYXRhKE1FVEFEQVRBX0tFWS5QT1NUX0NPTlNUUlVDVCwgY29uc3RyKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSBpbnN0YW5jZSlbZGF0YS52YWx1ZV0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFBPU1RfQ09OU1RSVUNUX0VSUk9SKGNvbnN0ci5uYW1lLCBlLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIF92YWxpZGF0ZUluc3RhbmNlUmVzb2x1dGlvbihiaW5kaW5nLCBjb25zdHIpIHtcbiAgICBpZiAoYmluZGluZy5zY29wZSAhPT0gQmluZGluZ1Njb3BlRW51bS5TaW5nbGV0b24pIHtcbiAgICAgICAgX3Rocm93SWZIYW5kbGluZ0RlYWN0aXZhdGlvbihiaW5kaW5nLCBjb25zdHIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF90aHJvd0lmSGFuZGxpbmdEZWFjdGl2YXRpb24oYmluZGluZywgY29uc3RyKSB7XG4gICAgdmFyIHNjb3BlRXJyb3JNZXNzYWdlID0gXCJDbGFzcyBjYW5ub3QgYmUgaW5zdGFudGlhdGVkIGluIFwiICsgKGJpbmRpbmcuc2NvcGUgPT09IEJpbmRpbmdTY29wZUVudW0uUmVxdWVzdCA/XG4gICAgICAgIFwicmVxdWVzdFwiIDpcbiAgICAgICAgXCJ0cmFuc2llbnRcIikgKyBcIiBzY29wZS5cIjtcbiAgICBpZiAodHlwZW9mIGJpbmRpbmcub25EZWFjdGl2YXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoT05fREVBQ1RJVkFUSU9OX0VSUk9SKGNvbnN0ci5uYW1lLCBzY29wZUVycm9yTWVzc2FnZSkpO1xuICAgIH1cbiAgICBpZiAoUmVmbGVjdC5oYXNNZXRhZGF0YShNRVRBREFUQV9LRVkuUFJFX0RFU1RST1ksIGNvbnN0cikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFBSRV9ERVNUUk9ZX0VSUk9SKGNvbnN0ci5uYW1lLCBzY29wZUVycm9yTWVzc2FnZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVJbnN0YW5jZShiaW5kaW5nLCBjb25zdHIsIGNoaWxkUmVxdWVzdHMsIHJlc29sdmVSZXF1ZXN0KSB7XG4gICAgX3ZhbGlkYXRlSW5zdGFuY2VSZXNvbHV0aW9uKGJpbmRpbmcsIGNvbnN0cik7XG4gICAgdmFyIHJlc3VsdCA9IF9jcmVhdGVJbnN0YW5jZShjb25zdHIsIGNoaWxkUmVxdWVzdHMsIHJlc29sdmVSZXF1ZXN0KTtcbiAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZFJlc3VsdCkgeyByZXR1cm4gX2dldEluc3RhbmNlQWZ0ZXJQb3N0Q29uc3RydWN0KGNvbnN0ciwgcmVzb2x2ZWRSZXN1bHQpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBfZ2V0SW5zdGFuY2VBZnRlclBvc3RDb25zdHJ1Y3QoY29uc3RyLCByZXN1bHQpO1xuICAgIH1cbn1cbmV4cG9ydCB7IHJlc29sdmVJbnN0YW5jZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5zdGFudGlhdGlvbi5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0ICogYXMgRVJST1JfTVNHUyBmcm9tIFwiLi4vY29uc3RhbnRzL2Vycm9yX21zZ3NcIjtcbmltcG9ydCB7IEJpbmRpbmdUeXBlRW51bSB9IGZyb20gXCIuLi9jb25zdGFudHMvbGl0ZXJhbF90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0QmluZGluZ0RpY3Rpb25hcnkgfSBmcm9tIFwiLi4vcGxhbm5pbmcvcGxhbm5lclwiO1xuaW1wb3J0IHsgc2F2ZVRvU2NvcGUsIHRyeUdldEZyb21TY29wZSB9IGZyb20gXCIuLi9zY29wZS9zY29wZVwiO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSBcIi4uL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBnZXRGYWN0b3J5RGV0YWlscywgZW5zdXJlRnVsbHlCb3VuZCB9IGZyb20gXCIuLi91dGlscy9iaW5kaW5nX3V0aWxzXCI7XG5pbXBvcnQgeyB0cnlBbmRUaHJvd0Vycm9ySWZTdGFja092ZXJmbG93IH0gZnJvbSBcIi4uL3V0aWxzL2V4Y2VwdGlvbnNcIjtcbmltcG9ydCB7IHJlc29sdmVJbnN0YW5jZSB9IGZyb20gXCIuL2luc3RhbnRpYXRpb25cIjtcbnZhciBfcmVzb2x2ZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxdWVzdFNjb3BlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgIHJlcXVlc3QucGFyZW50Q29udGV4dC5zZXRDdXJyZW50UmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgdmFyIGJpbmRpbmdzID0gcmVxdWVzdC5iaW5kaW5ncztcbiAgICAgICAgdmFyIGNoaWxkUmVxdWVzdHMgPSByZXF1ZXN0LmNoaWxkUmVxdWVzdHM7XG4gICAgICAgIHZhciB0YXJnZXRJc0FuQXJyYXkgPSByZXF1ZXN0LnRhcmdldCAmJiByZXF1ZXN0LnRhcmdldC5pc0FycmF5KCk7XG4gICAgICAgIHZhciB0YXJnZXRQYXJlbnRJc05vdEFuQXJyYXkgPSAhcmVxdWVzdC5wYXJlbnRSZXF1ZXN0IHx8XG4gICAgICAgICAgICAhcmVxdWVzdC5wYXJlbnRSZXF1ZXN0LnRhcmdldCB8fFxuICAgICAgICAgICAgIXJlcXVlc3QudGFyZ2V0IHx8XG4gICAgICAgICAgICAhcmVxdWVzdC5wYXJlbnRSZXF1ZXN0LnRhcmdldC5tYXRjaGVzQXJyYXkocmVxdWVzdC50YXJnZXQuc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICBpZiAodGFyZ2V0SXNBbkFycmF5ICYmIHRhcmdldFBhcmVudElzTm90QW5BcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUmVxdWVzdHMubWFwKGZ1bmN0aW9uIChjaGlsZFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2YgPSBfcmVzb2x2ZVJlcXVlc3QocmVxdWVzdFNjb3BlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2YoY2hpbGRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QudGFyZ2V0LmlzT3B0aW9uYWwoKSAmJiBiaW5kaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGJpbmRpbmcgPSBiaW5kaW5nc1swXTtcbiAgICAgICAgICAgIHJldHVybiBfcmVzb2x2ZUJpbmRpbmcocmVxdWVzdFNjb3BlLCByZXF1ZXN0LCBiaW5kaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xudmFyIF9yZXNvbHZlRmFjdG9yeUZyb21CaW5kaW5nID0gZnVuY3Rpb24gKGJpbmRpbmcsIGNvbnRleHQpIHtcbiAgICB2YXIgZmFjdG9yeURldGFpbHMgPSBnZXRGYWN0b3J5RGV0YWlscyhiaW5kaW5nKTtcbiAgICByZXR1cm4gdHJ5QW5kVGhyb3dFcnJvcklmU3RhY2tPdmVyZmxvdyhmdW5jdGlvbiAoKSB7IHJldHVybiBmYWN0b3J5RGV0YWlscy5mYWN0b3J5LmJpbmQoYmluZGluZykoY29udGV4dCk7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBFcnJvcihFUlJPUl9NU0dTLkNJUkNVTEFSX0RFUEVOREVOQ1lfSU5fRkFDVE9SWShmYWN0b3J5RGV0YWlscy5mYWN0b3J5VHlwZSwgY29udGV4dC5jdXJyZW50UmVxdWVzdC5zZXJ2aWNlSWRlbnRpZmllci50b1N0cmluZygpKSk7IH0pO1xufTtcbnZhciBfZ2V0UmVzb2x2ZWRGcm9tQmluZGluZyA9IGZ1bmN0aW9uIChyZXF1ZXN0U2NvcGUsIHJlcXVlc3QsIGJpbmRpbmcpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBjaGlsZFJlcXVlc3RzID0gcmVxdWVzdC5jaGlsZFJlcXVlc3RzO1xuICAgIGVuc3VyZUZ1bGx5Qm91bmQoYmluZGluZyk7XG4gICAgc3dpdGNoIChiaW5kaW5nLnR5cGUpIHtcbiAgICAgICAgY2FzZSBCaW5kaW5nVHlwZUVudW0uQ29uc3RhbnRWYWx1ZTpcbiAgICAgICAgY2FzZSBCaW5kaW5nVHlwZUVudW0uRnVuY3Rpb246XG4gICAgICAgICAgICByZXN1bHQgPSBiaW5kaW5nLmNhY2hlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQmluZGluZ1R5cGVFbnVtLkNvbnN0cnVjdG9yOlxuICAgICAgICAgICAgcmVzdWx0ID0gYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBCaW5kaW5nVHlwZUVudW0uSW5zdGFuY2U6XG4gICAgICAgICAgICByZXN1bHQgPSByZXNvbHZlSW5zdGFuY2UoYmluZGluZywgYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUsIGNoaWxkUmVxdWVzdHMsIF9yZXNvbHZlUmVxdWVzdChyZXF1ZXN0U2NvcGUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzdWx0ID0gX3Jlc29sdmVGYWN0b3J5RnJvbUJpbmRpbmcoYmluZGluZywgcmVxdWVzdC5wYXJlbnRDb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX3Jlc29sdmVJblNjb3BlID0gZnVuY3Rpb24gKHJlcXVlc3RTY29wZSwgYmluZGluZywgcmVzb2x2ZUZyb21CaW5kaW5nKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUdldEZyb21TY29wZShyZXF1ZXN0U2NvcGUsIGJpbmRpbmcpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmVzdWx0ID0gcmVzb2x2ZUZyb21CaW5kaW5nKCk7XG4gICAgc2F2ZVRvU2NvcGUocmVxdWVzdFNjb3BlLCBiaW5kaW5nLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9yZXNvbHZlQmluZGluZyA9IGZ1bmN0aW9uIChyZXF1ZXN0U2NvcGUsIHJlcXVlc3QsIGJpbmRpbmcpIHtcbiAgICByZXR1cm4gX3Jlc29sdmVJblNjb3BlKHJlcXVlc3RTY29wZSwgYmluZGluZywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gX2dldFJlc29sdmVkRnJvbUJpbmRpbmcocmVxdWVzdFNjb3BlLCByZXF1ZXN0LCBiaW5kaW5nKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQudGhlbihmdW5jdGlvbiAocmVzb2x2ZWQpIHsgcmV0dXJuIF9vbkFjdGl2YXRpb24ocmVxdWVzdCwgYmluZGluZywgcmVzb2x2ZWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IF9vbkFjdGl2YXRpb24ocmVxdWVzdCwgYmluZGluZywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIF9vbkFjdGl2YXRpb24ocmVxdWVzdCwgYmluZGluZywgcmVzb2x2ZWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gX2JpbmRpbmdBY3RpdmF0aW9uKHJlcXVlc3QucGFyZW50Q29udGV4dCwgYmluZGluZywgcmVzb2x2ZWQpO1xuICAgIHZhciBjb250YWluZXJzSXRlcmF0b3IgPSBfZ2V0Q29udGFpbmVyc0l0ZXJhdG9yKHJlcXVlc3QucGFyZW50Q29udGV4dC5jb250YWluZXIpO1xuICAgIHZhciBjb250YWluZXI7XG4gICAgdmFyIGNvbnRhaW5lcnNJdGVyYXRvclJlc3VsdCA9IGNvbnRhaW5lcnNJdGVyYXRvci5uZXh0KCk7XG4gICAgZG8ge1xuICAgICAgICBjb250YWluZXIgPSBjb250YWluZXJzSXRlcmF0b3JSZXN1bHQudmFsdWU7XG4gICAgICAgIHZhciBjb250ZXh0XzEgPSByZXF1ZXN0LnBhcmVudENvbnRleHQ7XG4gICAgICAgIHZhciBzZXJ2aWNlSWRlbnRpZmllciA9IHJlcXVlc3Quc2VydmljZUlkZW50aWZpZXI7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uc0l0ZXJhdG9yID0gX2dldENvbnRhaW5lckFjdGl2YXRpb25zRm9yU2VydmljZShjb250YWluZXIsIHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfYWN0aXZhdGVDb250YWluZXJBc3luYyhhY3RpdmF0aW9uc0l0ZXJhdG9yLCBjb250ZXh0XzEsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfYWN0aXZhdGVDb250YWluZXIoYWN0aXZhdGlvbnNJdGVyYXRvciwgY29udGV4dF8xLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lcnNJdGVyYXRvclJlc3VsdCA9IGNvbnRhaW5lcnNJdGVyYXRvci5uZXh0KCk7XG4gICAgfSB3aGlsZSAoY29udGFpbmVyc0l0ZXJhdG9yUmVzdWx0LmRvbmUgIT09IHRydWUgJiYgIWdldEJpbmRpbmdEaWN0aW9uYXJ5KGNvbnRhaW5lcikuaGFzS2V5KHJlcXVlc3Quc2VydmljZUlkZW50aWZpZXIpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxudmFyIF9iaW5kaW5nQWN0aXZhdGlvbiA9IGZ1bmN0aW9uIChjb250ZXh0LCBiaW5kaW5nLCBwcmV2aW91c1Jlc3VsdCkge1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKHR5cGVvZiBiaW5kaW5nLm9uQWN0aXZhdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlc3VsdCA9IGJpbmRpbmcub25BY3RpdmF0aW9uKGNvbnRleHQsIHByZXZpb3VzUmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHByZXZpb3VzUmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfYWN0aXZhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoYWN0aXZhdGlvbnNJdGVyYXRvciwgY29udGV4dCwgcmVzdWx0KSB7XG4gICAgdmFyIGFjdGl2YXRpb24gPSBhY3RpdmF0aW9uc0l0ZXJhdG9yLm5leHQoKTtcbiAgICB3aGlsZSAoIWFjdGl2YXRpb24uZG9uZSkge1xuICAgICAgICByZXN1bHQgPSBhY3RpdmF0aW9uLnZhbHVlKGNvbnRleHQsIHJlc3VsdCk7XG4gICAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIF9hY3RpdmF0ZUNvbnRhaW5lckFzeW5jKGFjdGl2YXRpb25zSXRlcmF0b3IsIGNvbnRleHQsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvbiA9IGFjdGl2YXRpb25zSXRlcmF0b3IubmV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfYWN0aXZhdGVDb250YWluZXJBc3luYyA9IGZ1bmN0aW9uIChhY3RpdmF0aW9uc0l0ZXJhdG9yLCBjb250ZXh0LCByZXN1bHRQcm9taXNlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQsIGFjdGl2YXRpb247XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgcmVzdWx0UHJvbWlzZV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGFjdGl2YXRpb24gPSBhY3RpdmF0aW9uc0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKCEhYWN0aXZhdGlvbi5kb25lKSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCwgYWN0aXZhdGlvbi52YWx1ZShjb250ZXh0LCByZXN1bHQpXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvbiA9IGFjdGl2YXRpb25zSXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiwgcmVzdWx0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgX2dldENvbnRhaW5lckFjdGl2YXRpb25zRm9yU2VydmljZSA9IGZ1bmN0aW9uIChjb250YWluZXIsIHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgdmFyIGFjdGl2YXRpb25zID0gY29udGFpbmVyLl9hY3RpdmF0aW9ucztcbiAgICByZXR1cm4gYWN0aXZhdGlvbnMuaGFzS2V5KHNlcnZpY2VJZGVudGlmaWVyKSA/IGFjdGl2YXRpb25zLmdldChzZXJ2aWNlSWRlbnRpZmllcikudmFsdWVzKCkgOiBbXS52YWx1ZXMoKTtcbn07XG52YXIgX2dldENvbnRhaW5lcnNJdGVyYXRvciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICB2YXIgY29udGFpbmVyc1N0YWNrID0gW2NvbnRhaW5lcl07XG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnQ7XG4gICAgd2hpbGUgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250YWluZXJzU3RhY2sucHVzaChwYXJlbnQpO1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cbiAgICB2YXIgZ2V0TmV4dENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5leHRDb250YWluZXIgPSBjb250YWluZXJzU3RhY2sucG9wKCk7XG4gICAgICAgIGlmIChuZXh0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogbmV4dENvbnRhaW5lciB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgY29udGFpbmVyc0l0ZXJhdG9yID0ge1xuICAgICAgICBuZXh0OiBnZXROZXh0Q29udGFpbmVyLFxuICAgIH07XG4gICAgcmV0dXJuIGNvbnRhaW5lcnNJdGVyYXRvcjtcbn07XG5mdW5jdGlvbiByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB2YXIgX2YgPSBfcmVzb2x2ZVJlcXVlc3QoY29udGV4dC5wbGFuLnJvb3RSZXF1ZXN0LnJlcXVlc3RTY29wZSk7XG4gICAgcmV0dXJuIF9mKGNvbnRleHQucGxhbi5yb290UmVxdWVzdCk7XG59XG5leHBvcnQgeyByZXNvbHZlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNvbHZlci5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgQmluZGluZ1Njb3BlRW51bSB9IGZyb20gXCIuLi9pbnZlcnNpZnlcIjtcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gXCIuLi91dGlscy9hc3luY1wiO1xuZXhwb3J0IHZhciB0cnlHZXRGcm9tU2NvcGUgPSBmdW5jdGlvbiAocmVxdWVzdFNjb3BlLCBiaW5kaW5nKSB7XG4gICAgaWYgKChiaW5kaW5nLnNjb3BlID09PSBCaW5kaW5nU2NvcGVFbnVtLlNpbmdsZXRvbikgJiYgYmluZGluZy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmcuY2FjaGU7XG4gICAgfVxuICAgIGlmIChiaW5kaW5nLnNjb3BlID09PSBCaW5kaW5nU2NvcGVFbnVtLlJlcXVlc3QgJiZcbiAgICAgICAgcmVxdWVzdFNjb3BlLmhhcyhiaW5kaW5nLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdFNjb3BlLmdldChiaW5kaW5nLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IHZhciBzYXZlVG9TY29wZSA9IGZ1bmN0aW9uIChyZXF1ZXN0U2NvcGUsIGJpbmRpbmcsIHJlc3VsdCkge1xuICAgIGlmIChiaW5kaW5nLnNjb3BlID09PSBCaW5kaW5nU2NvcGVFbnVtLlNpbmdsZXRvbikge1xuICAgICAgICBfc2F2ZVRvU2luZ2xldG9uU2NvcGUoYmluZGluZywgcmVzdWx0KTtcbiAgICB9XG4gICAgaWYgKGJpbmRpbmcuc2NvcGUgPT09IEJpbmRpbmdTY29wZUVudW0uUmVxdWVzdCkge1xuICAgICAgICBfc2F2ZVRvUmVxdWVzdFNjb3BlKHJlcXVlc3RTY29wZSwgYmluZGluZywgcmVzdWx0KTtcbiAgICB9XG59O1xudmFyIF9zYXZlVG9SZXF1ZXN0U2NvcGUgPSBmdW5jdGlvbiAocmVxdWVzdFNjb3BlLCBiaW5kaW5nLCByZXN1bHQpIHtcbiAgICBpZiAoIXJlcXVlc3RTY29wZS5oYXMoYmluZGluZy5pZCkpIHtcbiAgICAgICAgcmVxdWVzdFNjb3BlLnNldChiaW5kaW5nLmlkLCByZXN1bHQpO1xuICAgIH1cbn07XG52YXIgX3NhdmVUb1NpbmdsZXRvblNjb3BlID0gZnVuY3Rpb24gKGJpbmRpbmcsIHJlc3VsdCkge1xuICAgIGJpbmRpbmcuY2FjaGUgPSByZXN1bHQ7XG4gICAgYmluZGluZy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICB2b2lkIF9zYXZlQXN5bmNSZXN1bHRUb1NpbmdsZXRvblNjb3BlKGJpbmRpbmcsIHJlc3VsdCk7XG4gICAgfVxufTtcbnZhciBfc2F2ZUFzeW5jUmVzdWx0VG9TaW5nbGV0b25TY29wZSA9IGZ1bmN0aW9uIChiaW5kaW5nLCBhc3luY1Jlc3VsdCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0LCBleF8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBhc3luY1Jlc3VsdF07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuY2FjaGUgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBleF8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuY2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXhfMTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY29wZS5qcy5tYXAiLCJpbXBvcnQgeyBCaW5kaW5nU2NvcGVFbnVtIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9saXRlcmFsX3R5cGVzXCI7XG5pbXBvcnQgeyBCaW5kaW5nV2hlbk9uU3ludGF4IH0gZnJvbSBcIi4vYmluZGluZ193aGVuX29uX3N5bnRheFwiO1xudmFyIEJpbmRpbmdJblN5bnRheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZ0luU3ludGF4KGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZyA9IGJpbmRpbmc7XG4gICAgfVxuICAgIEJpbmRpbmdJblN5bnRheC5wcm90b3R5cGUuaW5SZXF1ZXN0U2NvcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuc2NvcGUgPSBCaW5kaW5nU2NvcGVFbnVtLlJlcXVlc3Q7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ1doZW5PblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJblN5bnRheC5wcm90b3R5cGUuaW5TaW5nbGV0b25TY29wZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy5zY29wZSA9IEJpbmRpbmdTY29wZUVudW0uU2luZ2xldG9uO1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdXaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5TeW50YXgucHJvdG90eXBlLmluVHJhbnNpZW50U2NvcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuc2NvcGUgPSBCaW5kaW5nU2NvcGVFbnVtLlRyYW5zaWVudDtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgcmV0dXJuIEJpbmRpbmdJblN5bnRheDtcbn0oKSk7XG5leHBvcnQgeyBCaW5kaW5nSW5TeW50YXggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmRpbmdfaW5fc3ludGF4LmpzLm1hcCIsImltcG9ydCB7IEJpbmRpbmdJblN5bnRheCB9IGZyb20gXCIuL2JpbmRpbmdfaW5fc3ludGF4XCI7XG5pbXBvcnQgeyBCaW5kaW5nT25TeW50YXggfSBmcm9tIFwiLi9iaW5kaW5nX29uX3N5bnRheFwiO1xuaW1wb3J0IHsgQmluZGluZ1doZW5TeW50YXggfSBmcm9tIFwiLi9iaW5kaW5nX3doZW5fc3ludGF4XCI7XG52YXIgQmluZGluZ0luV2hlbk9uU3ludGF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaW5kaW5nSW5XaGVuT25TeW50YXgoYmluZGluZykge1xuICAgICAgICB0aGlzLl9iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgdGhpcy5fYmluZGluZ1doZW5TeW50YXggPSBuZXcgQmluZGluZ1doZW5TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdPblN5bnRheCA9IG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdJblN5bnRheCA9IG5ldyBCaW5kaW5nSW5TeW50YXgoYmluZGluZyk7XG4gICAgfVxuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUuaW5SZXF1ZXN0U2NvcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nSW5TeW50YXguaW5SZXF1ZXN0U2NvcGUoKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUuaW5TaW5nbGV0b25TY29wZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdJblN5bnRheC5pblNpbmdsZXRvblNjb3BlKCk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLmluVHJhbnNpZW50U2NvcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nSW5TeW50YXguaW5UcmFuc2llbnRTY29wZSgpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuID0gZnVuY3Rpb24gKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW4oY29uc3RyYWludCk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuVGFyZ2V0TmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXRJc0RlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuVGFyZ2V0SXNEZWZhdWx0KCk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXRUYWdnZWQgPSBmdW5jdGlvbiAodGFnLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlblRhcmdldFRhZ2dlZCh0YWcsIHZhbHVlKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlbkluamVjdGVkSW50byA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5JbmplY3RlZEludG8ocGFyZW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlblBhcmVudE5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5QYXJlbnROYW1lZChuYW1lKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlblBhcmVudFRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuUGFyZW50VGFnZ2VkKHRhZywgdmFsdWUpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9ySXMoYW5jZXN0b3IpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3RvcklzID0gZnVuY3Rpb24gKGFuY2VzdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuTm9BbmNlc3RvcklzKGFuY2VzdG9yKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlbkFueUFuY2VzdG9yTmFtZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9yTmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3RvclRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuQW55QW5jZXN0b3JUYWdnZWQodGFnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5Ob0FuY2VzdG9yTmFtZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbk5vQW5jZXN0b3JOYW1lZChuYW1lKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JUYWdnZWQgPSBmdW5jdGlvbiAodGFnLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbk5vQW5jZXN0b3JUYWdnZWQodGFnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3Rvck1hdGNoZXMgPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9yTWF0Y2hlcyhjb25zdHJhaW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JNYXRjaGVzID0gZnVuY3Rpb24gKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5Ob0FuY2VzdG9yTWF0Y2hlcyhjb25zdHJhaW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUub25BY3RpdmF0aW9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdPblN5bnRheC5vbkFjdGl2YXRpb24oaGFuZGxlcik7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLm9uRGVhY3RpdmF0aW9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdPblN5bnRheC5vbkRlYWN0aXZhdGlvbihoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBCaW5kaW5nSW5XaGVuT25TeW50YXg7XG59KCkpO1xuZXhwb3J0IHsgQmluZGluZ0luV2hlbk9uU3ludGF4IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5kaW5nX2luX3doZW5fb25fc3ludGF4LmpzLm1hcCIsImltcG9ydCB7IEJpbmRpbmdXaGVuU3ludGF4IH0gZnJvbSBcIi4vYmluZGluZ193aGVuX3N5bnRheFwiO1xudmFyIEJpbmRpbmdPblN5bnRheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZ09uU3ludGF4KGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZyA9IGJpbmRpbmc7XG4gICAgfVxuICAgIEJpbmRpbmdPblN5bnRheC5wcm90b3R5cGUub25BY3RpdmF0aW9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy5vbkFjdGl2YXRpb24gPSBoYW5kbGVyO1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdXaGVuU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ09uU3ludGF4LnByb3RvdHlwZS5vbkRlYWN0aXZhdGlvbiA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcub25EZWFjdGl2YXRpb24gPSBoYW5kbGVyO1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdXaGVuU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgcmV0dXJuIEJpbmRpbmdPblN5bnRheDtcbn0oKSk7XG5leHBvcnQgeyBCaW5kaW5nT25TeW50YXggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmRpbmdfb25fc3ludGF4LmpzLm1hcCIsImltcG9ydCAqIGFzIEVSUk9SX01TR1MgZnJvbSBcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCI7XG5pbXBvcnQgeyBCaW5kaW5nU2NvcGVFbnVtLCBCaW5kaW5nVHlwZUVudW0gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIjtcbmltcG9ydCB7IEJpbmRpbmdJbldoZW5PblN5bnRheCB9IGZyb20gXCIuL2JpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXhcIjtcbmltcG9ydCB7IEJpbmRpbmdXaGVuT25TeW50YXggfSBmcm9tIFwiLi9iaW5kaW5nX3doZW5fb25fc3ludGF4XCI7XG52YXIgQmluZGluZ1RvU3ludGF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaW5kaW5nVG9TeW50YXgoYmluZGluZykge1xuICAgICAgICB0aGlzLl9iaW5kaW5nID0gYmluZGluZztcbiAgICB9XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnR5cGUgPSBCaW5kaW5nVHlwZUVudW0uSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuaW1wbGVtZW50YXRpb25UeXBlID0gY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ0luV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50b1NlbGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIiArIEVSUk9SX01TR1MuSU5WQUxJRF9UT19TRUxGX1ZBTFVFKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMuX2JpbmRpbmcuc2VydmljZUlkZW50aWZpZXI7XG4gICAgICAgIHJldHVybiB0aGlzLnRvKHNlbGYpO1xuICAgIH07XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50b0NvbnN0YW50VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gQmluZGluZ1R5cGVFbnVtLkNvbnN0YW50VmFsdWU7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY2FjaGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fYmluZGluZy5keW5hbWljVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuc2NvcGUgPSBCaW5kaW5nU2NvcGVFbnVtLlNpbmdsZXRvbjtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50b0R5bmFtaWNWYWx1ZSA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcudHlwZSA9IEJpbmRpbmdUeXBlRW51bS5EeW5hbWljVmFsdWU7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY2FjaGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmR5bmFtaWNWYWx1ZSA9IGZ1bmM7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuaW1wbGVtZW50YXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nSW5XaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gQmluZGluZ1R5cGVFbnVtLkNvbnN0cnVjdG9yO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZSA9IGNvbnN0cnVjdG9yO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnNjb3BlID0gQmluZGluZ1Njb3BlRW51bS5TaW5nbGV0b247XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ1doZW5PblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdUb1N5bnRheC5wcm90b3R5cGUudG9GYWN0b3J5ID0gZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gQmluZGluZ1R5cGVFbnVtLkZhY3Rvcnk7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuc2NvcGUgPSBCaW5kaW5nU2NvcGVFbnVtLlNpbmdsZXRvbjtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50b0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLklOVkFMSURfRlVOQ1RJT05fQklORElORyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJpbmRpbmdXaGVuT25TeW50YXggPSB0aGlzLnRvQ29uc3RhbnRWYWx1ZShmdW5jKTtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gQmluZGluZ1R5cGVFbnVtLkZ1bmN0aW9uO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnNjb3BlID0gQmluZGluZ1Njb3BlRW51bS5TaW5nbGV0b247XG4gICAgICAgIHJldHVybiBiaW5kaW5nV2hlbk9uU3ludGF4O1xuICAgIH07XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50b0F1dG9GYWN0b3J5ID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcudHlwZSA9IEJpbmRpbmdUeXBlRW51bS5GYWN0b3J5O1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmZhY3RvcnkgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGF1dG9mYWN0b3J5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udGV4dC5jb250YWluZXIuZ2V0KHNlcnZpY2VJZGVudGlmaWVyKTsgfTtcbiAgICAgICAgICAgIHJldHVybiBhdXRvZmFjdG9yeTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fYmluZGluZy5zY29wZSA9IEJpbmRpbmdTY29wZUVudW0uU2luZ2xldG9uO1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdXaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvQXV0b05hbWVkRmFjdG9yeSA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnR5cGUgPSBCaW5kaW5nVHlwZUVudW0uRmFjdG9yeTtcbiAgICAgICAgdGhpcy5fYmluZGluZy5mYWN0b3J5ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobmFtZWQpIHsgcmV0dXJuIGNvbnRleHQuY29udGFpbmVyLmdldE5hbWVkKHNlcnZpY2VJZGVudGlmaWVyLCBuYW1lZCk7IH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ1doZW5PblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdUb1N5bnRheC5wcm90b3R5cGUudG9Qcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnR5cGUgPSBCaW5kaW5nVHlwZUVudW0uUHJvdmlkZXI7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcucHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICAgICAgdGhpcy5fYmluZGluZy5zY29wZSA9IEJpbmRpbmdTY29wZUVudW0uU2luZ2xldG9uO1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdXaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvU2VydmljZSA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudG9EeW5hbWljVmFsdWUoZnVuY3Rpb24gKGNvbnRleHQpIHsgcmV0dXJuIGNvbnRleHQuY29udGFpbmVyLmdldChzZXJ2aWNlKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmluZGluZ1RvU3ludGF4O1xufSgpKTtcbmV4cG9ydCB7IEJpbmRpbmdUb1N5bnRheCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmluZGluZ190b19zeW50YXguanMubWFwIiwiaW1wb3J0IHsgQmluZGluZ09uU3ludGF4IH0gZnJvbSBcIi4vYmluZGluZ19vbl9zeW50YXhcIjtcbmltcG9ydCB7IEJpbmRpbmdXaGVuU3ludGF4IH0gZnJvbSBcIi4vYmluZGluZ193aGVuX3N5bnRheFwiO1xudmFyIEJpbmRpbmdXaGVuT25TeW50YXggPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJpbmRpbmdXaGVuT25TeW50YXgoYmluZGluZykge1xuICAgICAgICB0aGlzLl9iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgdGhpcy5fYmluZGluZ1doZW5TeW50YXggPSBuZXcgQmluZGluZ1doZW5TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdPblN5bnRheCA9IG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfVxuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW4gPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbihjb25zdHJhaW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuVGFyZ2V0TmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuVGFyZ2V0SXNEZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlblRhcmdldElzRGVmYXVsdCgpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5PblN5bnRheC5wcm90b3R5cGUud2hlblRhcmdldFRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuVGFyZ2V0VGFnZ2VkKHRhZywgdmFsdWUpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5PblN5bnRheC5wcm90b3R5cGUud2hlbkluamVjdGVkSW50byA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5JbmplY3RlZEludG8ocGFyZW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5QYXJlbnROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuUGFyZW50TmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuUGFyZW50VGFnZ2VkID0gZnVuY3Rpb24gKHRhZywgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5QYXJlbnRUYWdnZWQodGFnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9ySXMoYW5jZXN0b3IpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5PblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbk5vQW5jZXN0b3JJcyhhbmNlc3Rvcik7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JOYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuQW55QW5jZXN0b3JOYW1lZChuYW1lKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3RvclRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuQW55QW5jZXN0b3JUYWdnZWQodGFnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3Rvck5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5Ob0FuY2VzdG9yTmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3RvclRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuTm9BbmNlc3RvclRhZ2dlZCh0YWcsIHZhbHVlKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3Rvck1hdGNoZXMgPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9yTWF0Y2hlcyhjb25zdHJhaW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5Ob0FuY2VzdG9yTWF0Y2hlcyA9IGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuTm9BbmNlc3Rvck1hdGNoZXMoY29uc3RyYWludCk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS5vbkFjdGl2YXRpb24gPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ09uU3ludGF4Lm9uQWN0aXZhdGlvbihoYW5kbGVyKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLm9uRGVhY3RpdmF0aW9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdPblN5bnRheC5vbkRlYWN0aXZhdGlvbihoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBCaW5kaW5nV2hlbk9uU3ludGF4O1xufSgpKTtcbmV4cG9ydCB7IEJpbmRpbmdXaGVuT25TeW50YXggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmRpbmdfd2hlbl9vbl9zeW50YXguanMubWFwIiwiaW1wb3J0IHsgQmluZGluZ09uU3ludGF4IH0gZnJvbSBcIi4vYmluZGluZ19vbl9zeW50YXhcIjtcbmltcG9ydCB7IG5hbWVkQ29uc3RyYWludCwgdGFnZ2VkQ29uc3RyYWludCwgdHJhdmVyc2VBbmNlcnN0b3JzLCB0eXBlQ29uc3RyYWludCB9IGZyb20gXCIuL2NvbnN0cmFpbnRfaGVscGVyc1wiO1xudmFyIEJpbmRpbmdXaGVuU3ludGF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaW5kaW5nV2hlblN5bnRheChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcgPSBiaW5kaW5nO1xuICAgIH1cbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlbiA9IGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGNvbnN0cmFpbnQ7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IG5hbWVkQ29uc3RyYWludChuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlblRhcmdldElzRGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy5jb25zdHJhaW50ID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRhcmdldElzRGVmYXVsdCA9IChyZXF1ZXN0LnRhcmdldCAhPT0gbnVsbCkgJiZcbiAgICAgICAgICAgICAgICAoIXJlcXVlc3QudGFyZ2V0LmlzTmFtZWQoKSkgJiZcbiAgICAgICAgICAgICAgICAoIXJlcXVlc3QudGFyZ2V0LmlzVGFnZ2VkKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldElzRGVmYXVsdDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlblRhcmdldFRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IHRhZ2dlZENvbnN0cmFpbnQodGFnKSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5JbmplY3RlZEludG8gPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiB0eXBlQ29uc3RyYWludChwYXJlbnQpKHJlcXVlc3QucGFyZW50UmVxdWVzdCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5QYXJlbnROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiBuYW1lZENvbnN0cmFpbnQobmFtZSkocmVxdWVzdC5wYXJlbnRSZXF1ZXN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlblBhcmVudFRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiB0YWdnZWRDb25zdHJhaW50KHRhZykodmFsdWUpKHJlcXVlc3QucGFyZW50UmVxdWVzdCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3RvcklzID0gZnVuY3Rpb24gKGFuY2VzdG9yKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiB0cmF2ZXJzZUFuY2Vyc3RvcnMocmVxdWVzdCwgdHlwZUNvbnN0cmFpbnQoYW5jZXN0b3IpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmNvbnN0cmFpbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QgIT09IG51bGwgJiYgIXRyYXZlcnNlQW5jZXJzdG9ycyhyZXF1ZXN0LCB0eXBlQ29uc3RyYWludChhbmNlc3RvcikpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdPblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JOYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiB0cmF2ZXJzZUFuY2Vyc3RvcnMocmVxdWVzdCwgbmFtZWRDb25zdHJhaW50KG5hbWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JOYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiAhdHJhdmVyc2VBbmNlcnN0b3JzKHJlcXVlc3QsIG5hbWVkQ29uc3RyYWludChuYW1lKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3RvclRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiB0cmF2ZXJzZUFuY2Vyc3RvcnMocmVxdWVzdCwgdGFnZ2VkQ29uc3RyYWludCh0YWcpKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5Ob0FuY2VzdG9yVGFnZ2VkID0gZnVuY3Rpb24gKHRhZywgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy5jb25zdHJhaW50ID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0ICE9PSBudWxsICYmICF0cmF2ZXJzZUFuY2Vyc3RvcnMocmVxdWVzdCwgdGFnZ2VkQ29uc3RyYWludCh0YWcpKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3Rvck1hdGNoZXMgPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmNvbnN0cmFpbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QgIT09IG51bGwgJiYgdHJhdmVyc2VBbmNlcnN0b3JzKHJlcXVlc3QsIGNvbnN0cmFpbnQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdPblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3Rvck1hdGNoZXMgPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmNvbnN0cmFpbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QgIT09IG51bGwgJiYgIXRyYXZlcnNlQW5jZXJzdG9ycyhyZXF1ZXN0LCBjb25zdHJhaW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICByZXR1cm4gQmluZGluZ1doZW5TeW50YXg7XG59KCkpO1xuZXhwb3J0IHsgQmluZGluZ1doZW5TeW50YXggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmRpbmdfd2hlbl9zeW50YXguanMubWFwIiwiaW1wb3J0ICogYXMgTUVUQURBVEFfS0VZIGZyb20gXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tIFwiLi4vcGxhbm5pbmcvbWV0YWRhdGFcIjtcbnZhciB0cmF2ZXJzZUFuY2Vyc3RvcnMgPSBmdW5jdGlvbiAocmVxdWVzdCwgY29uc3RyYWludCkge1xuICAgIHZhciBwYXJlbnQgPSByZXF1ZXN0LnBhcmVudFJlcXVlc3Q7XG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludChwYXJlbnQpID8gdHJ1ZSA6IHRyYXZlcnNlQW5jZXJzdG9ycyhwYXJlbnQsIGNvbnN0cmFpbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG52YXIgdGFnZ2VkQ29uc3RyYWludCA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBjb25zdHJhaW50ID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QgIT09IG51bGwgJiYgcmVxdWVzdC50YXJnZXQgIT09IG51bGwgJiYgcmVxdWVzdC50YXJnZXQubWF0Y2hlc1RhZyhrZXkpKHZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0cmFpbnQubWV0YURhdGEgPSBuZXcgTWV0YWRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIGNvbnN0cmFpbnQ7XG59OyB9O1xudmFyIG5hbWVkQ29uc3RyYWludCA9IHRhZ2dlZENvbnN0cmFpbnQoTUVUQURBVEFfS0VZLk5BTUVEX1RBRyk7XG52YXIgdHlwZUNvbnN0cmFpbnQgPSBmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICB2YXIgYmluZGluZyA9IG51bGw7XG4gICAgaWYgKHJlcXVlc3QgIT09IG51bGwpIHtcbiAgICAgICAgYmluZGluZyA9IHJlcXVlc3QuYmluZGluZ3NbMF07XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFyIHNlcnZpY2VJZGVudGlmaWVyID0gYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllcjtcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlSWRlbnRpZmllciA9PT0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHJlcXVlc3QuYmluZGluZ3NbMF0uaW1wbGVtZW50YXRpb25UeXBlO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT09IGNvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07IH07XG5leHBvcnQgeyB0cmF2ZXJzZUFuY2Vyc3RvcnMsIHRhZ2dlZENvbnN0cmFpbnQsIG5hbWVkQ29uc3RyYWludCwgdHlwZUNvbnN0cmFpbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0cmFpbnRfaGVscGVycy5qcy5tYXAiLCJmdW5jdGlvbiBpc1Byb21pc2Uob2JqZWN0KSB7XG4gICAgdmFyIGlzT2JqZWN0T3JGdW5jdGlvbiA9ICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHx8IHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIGlzT2JqZWN0T3JGdW5jdGlvbiAmJiB0eXBlb2Ygb2JqZWN0LnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzUHJvbWlzZU9yQ29udGFpbnNQcm9taXNlKG9iamVjdCkge1xuICAgIGlmIChpc1Byb21pc2Uob2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiBvYmplY3Quc29tZShpc1Byb21pc2UpO1xufVxuZXhwb3J0IHsgaXNQcm9taXNlLCBpc1Byb21pc2VPckNvbnRhaW5zUHJvbWlzZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMuanMubWFwIiwiaW1wb3J0IHsgZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZyB9IGZyb20gXCIuLi9pbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIEVSUk9SX01TR1MgZnJvbSBcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCI7XG5pbXBvcnQgeyBCaW5kaW5nVHlwZUVudW0gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIjtcbmltcG9ydCB7IEZhY3RvcnlUeXBlIH0gZnJvbSBcIi4vZmFjdG9yeV90eXBlXCI7XG5leHBvcnQgdmFyIG11bHRpQmluZFRvU2VydmljZSA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0eXBlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB0eXBlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHQpIHsgcmV0dXJuIGNvbnRhaW5lci5iaW5kKHQpLnRvU2VydmljZShzZXJ2aWNlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5leHBvcnQgdmFyIGVuc3VyZUZ1bGx5Qm91bmQgPSBmdW5jdGlvbiAoYmluZGluZykge1xuICAgIHZhciBib3VuZFZhbHVlID0gbnVsbDtcbiAgICBzd2l0Y2ggKGJpbmRpbmcudHlwZSkge1xuICAgICAgICBjYXNlIEJpbmRpbmdUeXBlRW51bS5Db25zdGFudFZhbHVlOlxuICAgICAgICBjYXNlIEJpbmRpbmdUeXBlRW51bS5GdW5jdGlvbjpcbiAgICAgICAgICAgIGJvdW5kVmFsdWUgPSBiaW5kaW5nLmNhY2hlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQmluZGluZ1R5cGVFbnVtLkNvbnN0cnVjdG9yOlxuICAgICAgICBjYXNlIEJpbmRpbmdUeXBlRW51bS5JbnN0YW5jZTpcbiAgICAgICAgICAgIGJvdW5kVmFsdWUgPSBiaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEJpbmRpbmdUeXBlRW51bS5EeW5hbWljVmFsdWU6XG4gICAgICAgICAgICBib3VuZFZhbHVlID0gYmluZGluZy5keW5hbWljVmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBCaW5kaW5nVHlwZUVudW0uUHJvdmlkZXI6XG4gICAgICAgICAgICBib3VuZFZhbHVlID0gYmluZGluZy5wcm92aWRlcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEJpbmRpbmdUeXBlRW51bS5GYWN0b3J5OlxuICAgICAgICAgICAgYm91bmRWYWx1ZSA9IGJpbmRpbmcuZmFjdG9yeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYm91bmRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICB2YXIgc2VydmljZUlkZW50aWZpZXJBc1N0cmluZyA9IGdldFNlcnZpY2VJZGVudGlmaWVyQXNTdHJpbmcoYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLklOVkFMSURfQklORElOR19UWVBFICsgXCIgXCIgKyBzZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nKTtcbiAgICB9XG59O1xuZXhwb3J0IHZhciBnZXRGYWN0b3J5RGV0YWlscyA9IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgc3dpdGNoIChiaW5kaW5nLnR5cGUpIHtcbiAgICAgICAgY2FzZSBCaW5kaW5nVHlwZUVudW0uRmFjdG9yeTpcbiAgICAgICAgICAgIHJldHVybiB7IGZhY3Rvcnk6IGJpbmRpbmcuZmFjdG9yeSwgZmFjdG9yeVR5cGU6IEZhY3RvcnlUeXBlLkZhY3RvcnkgfTtcbiAgICAgICAgY2FzZSBCaW5kaW5nVHlwZUVudW0uUHJvdmlkZXI6XG4gICAgICAgICAgICByZXR1cm4geyBmYWN0b3J5OiBiaW5kaW5nLnByb3ZpZGVyLCBmYWN0b3J5VHlwZTogRmFjdG9yeVR5cGUuUHJvdmlkZXIgfTtcbiAgICAgICAgY2FzZSBCaW5kaW5nVHlwZUVudW0uRHluYW1pY1ZhbHVlOlxuICAgICAgICAgICAgcmV0dXJuIHsgZmFjdG9yeTogYmluZGluZy5keW5hbWljVmFsdWUsIGZhY3RvcnlUeXBlOiBGYWN0b3J5VHlwZS5EeW5hbWljVmFsdWUgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZmFjdG9yeSB0eXBlIFwiICsgYmluZGluZy50eXBlKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmluZGluZ191dGlscy5qcy5tYXAiLCJmdW5jdGlvbiBpc0Nsb25hYmxlKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpXG4gICAgICAgICYmIChvYmogIT09IG51bGwpXG4gICAgICAgICYmICgnY2xvbmUnIGluIG9iailcbiAgICAgICAgJiYgdHlwZW9mIG9iai5jbG9uZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCB7IGlzQ2xvbmFibGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsb25hYmxlLmpzLm1hcCIsImltcG9ydCAqIGFzIEVSUk9SX01TR1MgZnJvbSBcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNTdGFja092ZXJmbG93RXhlcHRpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gKGVycm9yIGluc3RhbmNlb2YgUmFuZ2VFcnJvciB8fFxuICAgICAgICBlcnJvci5tZXNzYWdlID09PSBFUlJPUl9NU0dTLlNUQUNLX09WRVJGTE9XKTtcbn1cbmV4cG9ydCB2YXIgdHJ5QW5kVGhyb3dFcnJvcklmU3RhY2tPdmVyZmxvdyA9IGZ1bmN0aW9uIChmbiwgZXJyb3JDYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGlzU3RhY2tPdmVyZmxvd0V4ZXB0aW9uKGVycm9yKSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvckNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4Y2VwdGlvbnMuanMubWFwIiwiZXhwb3J0IHZhciBGYWN0b3J5VHlwZTtcbihmdW5jdGlvbiAoRmFjdG9yeVR5cGUpIHtcbiAgICBGYWN0b3J5VHlwZVtcIkR5bmFtaWNWYWx1ZVwiXSA9IFwidG9EeW5hbWljVmFsdWVcIjtcbiAgICBGYWN0b3J5VHlwZVtcIkZhY3RvcnlcIl0gPSBcInRvRmFjdG9yeVwiO1xuICAgIEZhY3RvcnlUeXBlW1wiUHJvdmlkZXJcIl0gPSBcInRvUHJvdmlkZXJcIjtcbn0pKEZhY3RvcnlUeXBlIHx8IChGYWN0b3J5VHlwZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWN0b3J5X3R5cGUuanMubWFwIiwidmFyIGlkQ291bnRlciA9IDA7XG5mdW5jdGlvbiBpZCgpIHtcbiAgICByZXR1cm4gaWRDb3VudGVyKys7XG59XG5leHBvcnQgeyBpZCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWQuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0QXJyYXlEdXBsaWNhdGUoYXJyYXkpIHtcbiAgICB2YXIgc2VlblZhbHVlcyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFycmF5XzEgPSBhcnJheTsgX2kgPCBhcnJheV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZW50cnkgPSBhcnJheV8xW19pXTtcbiAgICAgICAgaWYgKHNlZW5WYWx1ZXMuaGFzKGVudHJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VlblZhbHVlcy5hZGQoZW50cnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qcy5qcy5tYXAiLCJpbXBvcnQgKiBhcyBFUlJPUl9NU0dTIGZyb20gXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiO1xuZnVuY3Rpb24gZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZyhzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgIGlmICh0eXBlb2Ygc2VydmljZUlkZW50aWZpZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgX3NlcnZpY2VJZGVudGlmaWVyID0gc2VydmljZUlkZW50aWZpZXI7XG4gICAgICAgIHJldHVybiBfc2VydmljZUlkZW50aWZpZXIubmFtZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHNlcnZpY2VJZGVudGlmaWVyID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlSWRlbnRpZmllci50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIF9zZXJ2aWNlSWRlbnRpZmllciA9IHNlcnZpY2VJZGVudGlmaWVyO1xuICAgICAgICByZXR1cm4gX3NlcnZpY2VJZGVudGlmaWVyO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3RSZWdpc3RlcmVkQmluZGluZ3NGb3JTZXJ2aWNlSWRlbnRpZmllcihjb250YWluZXIsIHNlcnZpY2VJZGVudGlmaWVyLCBnZXRCaW5kaW5ncykge1xuICAgIHZhciByZWdpc3RlcmVkQmluZGluZ3NMaXN0ID0gXCJcIjtcbiAgICB2YXIgcmVnaXN0ZXJlZEJpbmRpbmdzID0gZ2V0QmluZGluZ3MoY29udGFpbmVyLCBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgaWYgKHJlZ2lzdGVyZWRCaW5kaW5ncy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzTGlzdCA9IFwiXFxuUmVnaXN0ZXJlZCBiaW5kaW5nczpcIjtcbiAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzLmZvckVhY2goZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJPYmplY3RcIjtcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBnZXRGdW5jdGlvbk5hbWUoYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzTGlzdCA9IHJlZ2lzdGVyZWRCaW5kaW5nc0xpc3QgKyBcIlxcbiBcIiArIG5hbWU7XG4gICAgICAgICAgICBpZiAoYmluZGluZy5jb25zdHJhaW50Lm1ldGFEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzTGlzdCA9IHJlZ2lzdGVyZWRCaW5kaW5nc0xpc3QgKyBcIiAtIFwiICsgYmluZGluZy5jb25zdHJhaW50Lm1ldGFEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ2lzdGVyZWRCaW5kaW5nc0xpc3Q7XG59XG5mdW5jdGlvbiBhbHJlYWR5RGVwZW5kZW5jeUNoYWluKHJlcXVlc3QsIHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgaWYgKHJlcXVlc3QucGFyZW50UmVxdWVzdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlcXVlc3QucGFyZW50UmVxdWVzdC5zZXJ2aWNlSWRlbnRpZmllciA9PT0gc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWxyZWFkeURlcGVuZGVuY3lDaGFpbihyZXF1ZXN0LnBhcmVudFJlcXVlc3QsIHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXBlbmRlbmN5Q2hhaW5Ub1N0cmluZyhyZXF1ZXN0KSB7XG4gICAgZnVuY3Rpb24gX2NyZWF0ZVN0cmluZ0FycihyZXEsIHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsgcmVzdWx0ID0gW107IH1cbiAgICAgICAgdmFyIHNlcnZpY2VJZGVudGlmaWVyID0gZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZyhyZXEuc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICByZXN1bHQucHVzaChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIGlmIChyZXEucGFyZW50UmVxdWVzdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jcmVhdGVTdHJpbmdBcnIocmVxLnBhcmVudFJlcXVlc3QsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgdmFyIHN0cmluZ0FyciA9IF9jcmVhdGVTdHJpbmdBcnIocmVxdWVzdCk7XG4gICAgcmV0dXJuIHN0cmluZ0Fyci5yZXZlcnNlKCkuam9pbihcIiAtLT4gXCIpO1xufVxuZnVuY3Rpb24gY2lyY3VsYXJEZXBlbmRlbmN5VG9FeGNlcHRpb24ocmVxdWVzdCkge1xuICAgIHJlcXVlc3QuY2hpbGRSZXF1ZXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGFscmVhZHlEZXBlbmRlbmN5Q2hhaW4oY2hpbGRSZXF1ZXN0LCBjaGlsZFJlcXVlc3Quc2VydmljZUlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICB2YXIgc2VydmljZXMgPSBkZXBlbmRlbmN5Q2hhaW5Ub1N0cmluZyhjaGlsZFJlcXVlc3QpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuQ0lSQ1VMQVJfREVQRU5ERU5DWSArIFwiIFwiICsgc2VydmljZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2lyY3VsYXJEZXBlbmRlbmN5VG9FeGNlcHRpb24oY2hpbGRSZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gbGlzdE1ldGFkYXRhRm9yVGFyZ2V0KHNlcnZpY2VJZGVudGlmaWVyU3RyaW5nLCB0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0LmlzVGFnZ2VkKCkgfHwgdGFyZ2V0LmlzTmFtZWQoKSkge1xuICAgICAgICB2YXIgbV8xID0gXCJcIjtcbiAgICAgICAgdmFyIG5hbWVkVGFnID0gdGFyZ2V0LmdldE5hbWVkVGFnKCk7XG4gICAgICAgIHZhciBvdGhlclRhZ3MgPSB0YXJnZXQuZ2V0Q3VzdG9tVGFncygpO1xuICAgICAgICBpZiAobmFtZWRUYWcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1fMSArPSBuYW1lZFRhZy50b1N0cmluZygpICsgXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJUYWdzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvdGhlclRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgbV8xICs9IHRhZy50b1N0cmluZygpICsgXCJcXG5cIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIiBcIiArIHNlcnZpY2VJZGVudGlmaWVyU3RyaW5nICsgXCJcXG4gXCIgKyBzZXJ2aWNlSWRlbnRpZmllclN0cmluZyArIFwiIC0gXCIgKyBtXzE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIgXCIgKyBzZXJ2aWNlSWRlbnRpZmllclN0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWUoZnVuYykge1xuICAgIGlmIChmdW5jLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMubmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBuYW1lXzEgPSBmdW5jLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBtYXRjaCA9IG5hbWVfMS5tYXRjaCgvXmZ1bmN0aW9uXFxzKihbXlxccyhdKykvKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiBcIkFub255bW91cyBmdW5jdGlvbjogXCIgKyBuYW1lXzE7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0U3ltYm9sRGVzY3JpcHRpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHN5bWJvbC50b1N0cmluZygpLnNsaWNlKDcsIC0xKTtcbn1cbmV4cG9ydCB7IGdldEZ1bmN0aW9uTmFtZSwgZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZywgbGlzdFJlZ2lzdGVyZWRCaW5kaW5nc0ZvclNlcnZpY2VJZGVudGlmaWVyLCBsaXN0TWV0YWRhdGFGb3JUYXJnZXQsIGNpcmN1bGFyRGVwZW5kZW5jeVRvRXhjZXB0aW9uLCBnZXRTeW1ib2xEZXNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VyaWFsaXphdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsLmFzc2lnbihcbiAgICB7XG4gICAgICAgICdkZWZhdWx0JzogRm9ybWF0LlJGQzM5ODYsXG4gICAgICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgRm9ybWF0XG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHM6IGZvcm1hdHMsXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIHN0cmluZ2lmeTogc3RyaW5naWZ5XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBhbGxvd1Byb3RvdHlwZXM6IGZhbHNlLFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBjb21tYTogZmFsc2UsXG4gICAgZGVjb2RlcjogdXRpbHMuZGVjb2RlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IGZhbHNlLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwLFxuICAgIHBhcnNlQXJyYXlzOiB0cnVlLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGludGVycHJldE51bWVyaWNFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbiAoJDAsIG51bWJlclN0cikge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChudW1iZXJTdHIsIDEwKSk7XG4gICAgfSk7XG59O1xuXG52YXIgcGFyc2VBcnJheVZhbHVlID0gZnVuY3Rpb24gKHZhbCwgb3B0aW9ucykge1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5jb21tYSAmJiB2YWwuaW5kZXhPZignLCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG59O1xuXG52YXIgbWF5YmVNYXAgPSBmdW5jdGlvbiBtYXliZU1hcCh2YWwsIGZuKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YXIgbWFwcGVkID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBtYXBwZWQucHVzaChmbih2YWxbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgIH1cbiAgICByZXR1cm4gZm4odmFsKTtcbn07XG5cbi8vIFRoaXMgaXMgd2hhdCBicm93c2VycyB3aWxsIHN1Ym1pdCB3aGVuIHRoZSDinJMgY2hhcmFjdGVyIG9jY3VycyBpbiBhblxuLy8gYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIGJvZHkgYW5kIHRoZSBlbmNvZGluZyBvZiB0aGUgcGFnZSBjb250YWluaW5nXG4vLyB0aGUgZm9ybSBpcyBpc28tODg1OS0xLCBvciB3aGVuIHRoZSBzdWJtaXR0ZWQgZm9ybSBoYXMgYW4gYWNjZXB0LWNoYXJzZXRcbi8vIGF0dHJpYnV0ZSBvZiBpc28tODg1OS0xLiBQcmVzdW1hYmx5IGFsc28gd2l0aCBvdGhlciBjaGFyc2V0cyB0aGF0IGRvIG5vdCBjb250YWluXG4vLyB0aGUg4pyTIGNoYXJhY3Rlciwgc3VjaCBhcyB1cy1hc2NpaS5cbnZhciBpc29TZW50aW5lbCA9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCcmIzEwMDAzOycpXG5cbi8vIFRoZXNlIGFyZSB0aGUgcGVyY2VudC1lbmNvZGVkIHV0Zi04IG9jdGV0cyByZXByZXNlbnRpbmcgYSBjaGVja21hcmssIGluZGljYXRpbmcgdGhhdCB0aGUgcmVxdWVzdCBhY3R1YWxseSBpcyB1dGYtOCBlbmNvZGVkLlxudmFyIGNoYXJzZXRTZW50aW5lbCA9ICd1dGY4PSVFMiU5QyU5Myc7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgn4pyTJylcblxudmFyIHBhcnNlVmFsdWVzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ1ZhbHVlcyhzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIGNsZWFuU3RyID0gb3B0aW9ucy5pZ25vcmVRdWVyeVByZWZpeCA/IHN0ci5yZXBsYWNlKC9eXFw/LywgJycpIDogc3RyO1xuICAgIHZhciBsaW1pdCA9IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdDtcbiAgICB2YXIgcGFydHMgPSBjbGVhblN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgbGltaXQpO1xuICAgIHZhciBza2lwSW5kZXggPSAtMTsgLy8gS2VlcCB0cmFjayBvZiB3aGVyZSB0aGUgdXRmOCBzZW50aW5lbCB3YXMgZm91bmRcbiAgICB2YXIgaTtcblxuICAgIHZhciBjaGFyc2V0ID0gb3B0aW9ucy5jaGFyc2V0O1xuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXS5pbmRleE9mKCd1dGY4PScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzW2ldID09PSBjaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0c1tpXSA9PT0gaXNvU2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICdpc28tODg1OS0xJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2tpcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBpID0gcGFydHMubGVuZ3RoOyAvLyBUaGUgZXNsaW50IHNldHRpbmdzIGRvIG5vdCBhbGxvdyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoaSA9PT0gc2tpcEluZGV4KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuXG4gICAgICAgIHZhciBicmFja2V0RXF1YWxzUG9zID0gcGFydC5pbmRleE9mKCddPScpO1xuICAgICAgICB2YXIgcG9zID0gYnJhY2tldEVxdWFsc1BvcyA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IGJyYWNrZXRFcXVhbHNQb3MgKyAxO1xuXG4gICAgICAgIHZhciBrZXksIHZhbDtcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0LCAna2V5Jyk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA/IG51bGwgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKDAsIHBvcyksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHZhbCA9IG1heWJlTWFwKFxuICAgICAgICAgICAgICAgIHBhcnNlQXJyYXlWYWx1ZShwYXJ0LnNsaWNlKHBvcyArIDEpLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZW5jb2RlZFZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kZWNvZGVyKGVuY29kZWRWYWwsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICd2YWx1ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIG9wdGlvbnMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzICYmIGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAgICAgdmFsID0gaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzKHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydC5pbmRleE9mKCdbXT0nKSA+IC0xKSB7XG4gICAgICAgICAgICB2YWwgPSBpc0FycmF5KHZhbCkgPyBbdmFsXSA6IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdXRpbHMuY29tYmluZShvYmpba2V5XSwgdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBwYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zLCB2YWx1ZXNQYXJzZWQpIHtcbiAgICB2YXIgbGVhZiA9IHZhbHVlc1BhcnNlZCA/IHZhbCA6IHBhcnNlQXJyYXlWYWx1ZSh2YWwsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaSA9IGNoYWluLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciByb290ID0gY2hhaW5baV07XG5cbiAgICAgICAgaWYgKHJvb3QgPT09ICdbXScgJiYgb3B0aW9ucy5wYXJzZUFycmF5cykge1xuICAgICAgICAgICAgb2JqID0gW10uY29uY2F0KGxlYWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJzZUFycmF5cyAmJiBjbGVhblJvb3QgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb2JqID0geyAwOiBsZWFmIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFpc05hTihpbmRleClcbiAgICAgICAgICAgICAgICAmJiByb290ICE9PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICAgICAgb2JqW2luZGV4XSA9IGxlYWY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gbGVhZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxlYWYgPSBvYmo7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG5cbiAgICByZXR1cm4gbGVhZjtcbn07XG5cbnZhciBwYXJzZUtleXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nS2V5cyhnaXZlbktleSwgdmFsLCBvcHRpb25zLCB2YWx1ZXNQYXJzZWQpIHtcbiAgICBpZiAoIWdpdmVuS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZG90IG5vdGF0aW9uIHRvIGJyYWNrZXQgbm90YXRpb25cbiAgICB2YXIga2V5ID0gb3B0aW9ucy5hbGxvd0RvdHMgPyBnaXZlbktleS5yZXBsYWNlKC9cXC4oW14uW10rKS9nLCAnWyQxXScpIDogZ2l2ZW5LZXk7XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgYnJhY2tldHMgPSAvKFxcW1teW1xcXV0qXSkvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15bXFxdXSpdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gb3B0aW9ucy5kZXB0aCA+IDAgJiYgYnJhY2tldHMuZXhlYyhrZXkpO1xuICAgIHZhciBwYXJlbnQgPSBzZWdtZW50ID8ga2V5LnNsaWNlKDAsIHNlZ21lbnQuaW5kZXgpIDoga2V5O1xuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgdXNpbmcgcGxhaW4gb2JqZWN0cywgb3B0aW9uYWxseSBwcmVmaXgga2V5cyB0aGF0IHdvdWxkIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBwYXJlbnQpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga2V5cy5wdXNoKHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKG9wdGlvbnMuZGVwdGggPiAwICYmIChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc2VnbWVudFsxXS5zbGljZSgxLCAtMSkpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zLCB2YWx1ZXNQYXJzZWQpO1xufTtcblxudmFyIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5kZWNvZGVyICE9PSBudWxsICYmIG9wdHMuZGVjb2RlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRzLmRlY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGVjb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHZhciBjaGFyc2V0ID0gdHlwZW9mIG9wdHMuY2hhcnNldCA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5jaGFyc2V0IDogb3B0cy5jaGFyc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgYWxsb3dQcm90b3R5cGVzOiB0eXBlb2Ygb3B0cy5hbGxvd1Byb3RvdHlwZXMgPT09ICdib29sZWFuJyA/IG9wdHMuYWxsb3dQcm90b3R5cGVzIDogZGVmYXVsdHMuYWxsb3dQcm90b3R5cGVzLFxuICAgICAgICBhcnJheUxpbWl0OiB0eXBlb2Ygb3B0cy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMuYXJyYXlMaW1pdCA6IGRlZmF1bHRzLmFycmF5TGltaXQsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgY29tbWE6IHR5cGVvZiBvcHRzLmNvbW1hID09PSAnYm9vbGVhbicgPyBvcHRzLmNvbW1hIDogZGVmYXVsdHMuY29tbWEsXG4gICAgICAgIGRlY29kZXI6IHR5cGVvZiBvcHRzLmRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmRlY29kZXIgOiBkZWZhdWx0cy5kZWNvZGVyLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgdXRpbHMuaXNSZWdFeHAob3B0cy5kZWxpbWl0ZXIpID8gb3B0cy5kZWxpbWl0ZXIgOiBkZWZhdWx0cy5kZWxpbWl0ZXIsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvbiwgbm8tZXh0cmEtcGFyZW5zXG4gICAgICAgIGRlcHRoOiAodHlwZW9mIG9wdHMuZGVwdGggPT09ICdudW1iZXInIHx8IG9wdHMuZGVwdGggPT09IGZhbHNlKSA/ICtvcHRzLmRlcHRoIDogZGVmYXVsdHMuZGVwdGgsXG4gICAgICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBvcHRzLmlnbm9yZVF1ZXJ5UHJlZml4ID09PSB0cnVlLFxuICAgICAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IHR5cGVvZiBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgOiBkZWZhdWx0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMsXG4gICAgICAgIHBhcmFtZXRlckxpbWl0OiB0eXBlb2Ygb3B0cy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLnBhcmFtZXRlckxpbWl0IDogZGVmYXVsdHMucGFyYW1ldGVyTGltaXQsXG4gICAgICAgIHBhcnNlQXJyYXlzOiBvcHRzLnBhcnNlQXJyYXlzICE9PSBmYWxzZSxcbiAgICAgICAgcGxhaW5PYmplY3RzOiB0eXBlb2Ygb3B0cy5wbGFpbk9iamVjdHMgPT09ICdib29sZWFuJyA/IG9wdHMucGxhaW5PYmplY3RzIDogZGVmYXVsdHMucGxhaW5PYmplY3RzLFxuICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IHR5cGVvZiBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmdcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cyk7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwgfHwgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBwYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gcGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zLCB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7XG4gICAgICAgIG9iaiA9IHV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuY29tcGFjdChvYmopO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIHB1c2hUb0FycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWVPckFycmF5KSB7XG4gICAgcHVzaC5hcHBseShhcnIsIGlzQXJyYXkodmFsdWVPckFycmF5KSA/IHZhbHVlT3JBcnJheSA6IFt2YWx1ZU9yQXJyYXldKTtcbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdEZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhZGRRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gICAgZm9ybWF0dGVyOiBmb3JtYXRzLmZvcm1hdHRlcnNbZGVmYXVsdEZvcm1hdF0sXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGluZGljZXM6IGZhbHNlLFxuICAgIHNlcmlhbGl6ZURhdGU6IGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGUoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdG9JU08uY2FsbChkYXRlKTtcbiAgICB9LFxuICAgIHNraXBOdWxsczogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ3N5bWJvbCdcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdiaWdpbnQnO1xufTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgIGNoYXJzZXRcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknKSA6IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmIChpc05vbk51bGxpc2hQcmltaXRpdmUob2JqKSB8fCB1dGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBlbmNvZGVWYWx1ZXNPbmx5ID8gcHJlZml4IDogZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ3ZhbHVlJykpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnZnVuY3Rpb24nID8gZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSkgOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRzLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChvcHRpb25zLnNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzZXRcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG52YXIgY29tcGFjdFF1ZXVlID0gZnVuY3Rpb24gY29tcGFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9iai5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2pdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5vYmpbaXRlbS5wcm9wXSA9IGNvbXBhY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBhcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gYXJyYXlUb09iamVjdChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmICFpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBhcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSB0YXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEl0ZW0gJiYgdHlwZW9mIHRhcmdldEl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG1lcmdlKHRhcmdldEl0ZW0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoaGFzLmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxudmFyIGFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnblNpbmdsZVNvdXJjZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0YXJnZXQpO1xufTtcblxudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIsIGRlY29kZXIsIGNoYXJzZXQpIHtcbiAgICB2YXIgc3RyV2l0aG91dFBsdXMgPSBzdHIucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAvLyB1bmVzY2FwZSBuZXZlciB0aHJvd3MsIG5vIHRyeS4uLmNhdGNoIG5lZWRlZDpcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzLnJlcGxhY2UoLyVbMC05YS1mXXsyfS9naSwgdW5lc2NhcGUpO1xuICAgIH1cbiAgICAvLyB1dGYtOFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyV2l0aG91dFBsdXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzO1xuICAgIH1cbn07XG5cbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoc3RyLCBkZWZhdWx0RW5jb2RlciwgY2hhcnNldCkge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gc3RyO1xuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3ltYm9sJykge1xuICAgICAgICBzdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0cmluZyA9IFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShzdHJpbmcpLnJlcGxhY2UoLyV1WzAtOWEtZl17NH0vZ2ksIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAgICAgcmV0dXJuICclMjYlMjMnICsgcGFyc2VJbnQoJDAuc2xpY2UoMiksIDE2KSArICclM0InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIC8vIC1cbiAgICAgICAgICAgIHx8IGMgPT09IDB4MkUgLy8gLlxuICAgICAgICAgICAgfHwgYyA9PT0gMHg1RiAvLyBfXG4gICAgICAgICAgICB8fCBjID09PSAweDdFIC8vIH5cbiAgICAgICAgICAgIHx8IChjID49IDB4MzAgJiYgYyA8PSAweDM5KSAvLyAwLTlcbiAgICAgICAgICAgIHx8IChjID49IDB4NDEgJiYgYyA8PSAweDVBKSAvLyBhLXpcbiAgICAgICAgICAgIHx8IChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIG91dCArPSBoZXhUYWJsZVsweEYwIHwgKGMgPj4gMTgpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDEyKSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxudmFyIGNvbXBhY3QgPSBmdW5jdGlvbiBjb21wYWN0KHZhbHVlKSB7XG4gICAgdmFyIHF1ZXVlID0gW3sgb2JqOiB7IG86IHZhbHVlIH0sIHByb3A6ICdvJyB9XTtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlW2ldO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal07XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsICYmIHJlZnMuaW5kZXhPZih2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goeyBvYmo6IG9iaiwgcHJvcDoga2V5IH0pO1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFjdFF1ZXVlKHF1ZXVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBpc1JlZ0V4cCA9IGZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcblxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiBjb21iaW5lKGEsIGIpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGEsIGIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtZXJnZTogbWVyZ2Vcbn07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoQykgTWljcm9zb2Z0LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXG5cblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbnZhciBSZWZsZWN0O1xuKGZ1bmN0aW9uIChSZWZsZWN0KSB7XG4gICAgLy8gTWV0YWRhdGEgUHJvcG9zYWxcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhL1xuICAgIChmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgICAgICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICAgICAgICAgICAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDpcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcyA9PT0gXCJvYmplY3RcIiA/IHRoaXMgOlxuICAgICAgICAgICAgICAgICAgICBGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpO1xuICAgICAgICB2YXIgZXhwb3J0ZXIgPSBtYWtlRXhwb3J0ZXIoUmVmbGVjdCk7XG4gICAgICAgIGlmICh0eXBlb2Ygcm9vdC5SZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByb290LlJlZmxlY3QgPSBSZWZsZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXhwb3J0ZXIgPSBtYWtlRXhwb3J0ZXIocm9vdC5SZWZsZWN0LCBleHBvcnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZmFjdG9yeShleHBvcnRlcik7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VFeHBvcnRlcih0YXJnZXQsIHByZXZpb3VzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyhrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KShmdW5jdGlvbiAoZXhwb3J0ZXIpIHtcbiAgICAgICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gICAgICAgIC8vIGZlYXR1cmUgdGVzdCBmb3IgU3ltYm9sIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnRzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB2YXIgdG9QcmltaXRpdmVTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLnRvUHJpbWl0aXZlIDogXCJAQHRvUHJpbWl0aXZlXCI7XG4gICAgICAgIHZhciBpdGVyYXRvclN5bWJvbCA9IHN1cHBvcnRzU3ltYm9sICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wuaXRlcmF0b3IgOiBcIkBAaXRlcmF0b3JcIjtcbiAgICAgICAgdmFyIHN1cHBvcnRzQ3JlYXRlID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIjsgLy8gZmVhdHVyZSB0ZXN0IGZvciBPYmplY3QuY3JlYXRlIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJvdG8gPSB7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5OyAvLyBmZWF0dXJlIHRlc3QgZm9yIF9fcHJvdG9fXyBzdXBwb3J0XG4gICAgICAgIHZhciBkb3duTGV2ZWwgPSAhc3VwcG9ydHNDcmVhdGUgJiYgIXN1cHBvcnRzUHJvdG87XG4gICAgICAgIHZhciBIYXNoTWFwID0ge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIG9iamVjdCBpbiBkaWN0aW9uYXJ5IG1vZGUgKGEuay5hLiBcInNsb3dcIiBtb2RlIGluIHY4KVxuICAgICAgICAgICAgY3JlYXRlOiBzdXBwb3J0c0NyZWF0ZVxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoT2JqZWN0LmNyZWF0ZShudWxsKSk7IH1cbiAgICAgICAgICAgICAgICA6IHN1cHBvcnRzUHJvdG9cbiAgICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7IF9fcHJvdG9fXzogbnVsbCB9KTsgfVxuICAgICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KHt9KTsgfSxcbiAgICAgICAgICAgIGhhczogZG93bkxldmVsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBrZXkgaW4gbWFwOyB9LFxuICAgICAgICAgICAgZ2V0OiBkb3duTGV2ZWxcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gaGFzT3duLmNhbGwobWFwLCBrZXkpID8gbWFwW2tleV0gOiB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gbWFwW2tleV07IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIExvYWQgZ2xvYmFsIG9yIHNoaW0gdmVyc2lvbnMgb2YgTWFwLCBTZXQsIGFuZCBXZWFrTWFwXG4gICAgICAgIHZhciBmdW5jdGlvblByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbik7XG4gICAgICAgIHZhciB1c2VQb2x5ZmlsbCA9IHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52W1wiUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMXCJdID09PSBcInRydWVcIjtcbiAgICAgICAgdmFyIF9NYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXMgPT09IFwiZnVuY3Rpb25cIiA/IE1hcCA6IENyZWF0ZU1hcFBvbHlmaWxsKCk7XG4gICAgICAgIHZhciBfU2V0ID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBTZXQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBTZXQgOiBDcmVhdGVTZXRQb2x5ZmlsbCgpO1xuICAgICAgICB2YXIgX1dlYWtNYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIFdlYWtNYXAgPT09IFwiZnVuY3Rpb25cIiA/IFdlYWtNYXAgOiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKTtcbiAgICAgICAgLy8gW1tNZXRhZGF0YV1dIGludGVybmFsIHNsb3RcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnktb2JqZWN0LWludGVybmFsLW1ldGhvZHMtYW5kLWludGVybmFsLXNsb3RzXG4gICAgICAgIHZhciBNZXRhZGF0YSA9IG5ldyBfV2Vha01hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gZGVjb3JhdG9ycyBBbiBhcnJheSBvZiBkZWNvcmF0b3JzLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IHRvIGRlY29yYXRlLlxuICAgICAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciB0aGUgdGFyZ2V0IGtleS5cbiAgICAgICAgICogQHJlbWFya3MgRGVjb3JhdG9ycyBhcmUgYXBwbGllZCBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBFeGFtcGxlID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcbiAgICAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpKSk7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoYXR0cmlidXRlcykgJiYgIUlzVW5kZWZpbmVkKGF0dHJpYnV0ZXMpICYmICFJc051bGwoYXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoSXNOdWxsKGF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlUHJvcGVydHkoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWNvcmF0ZVwiLCBkZWNvcmF0ZSk7XG4gICAgICAgIC8vIDQuMS4yIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI3JlZmxlY3QubWV0YWRhdGFcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZGVmYXVsdCBtZXRhZGF0YSBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGNhbiBiZSB1c2VkIG9uIGEgY2xhc3MsIGNsYXNzIG1lbWJlciwgb3IgcGFyYW1ldGVyLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgVGhlIGtleSBmb3IgdGhlIG1ldGFkYXRhIGVudHJ5LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cbiAgICAgICAgICogQHJldHVybnMgQSBkZWNvcmF0b3IgZnVuY3Rpb24uXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIElmIGBtZXRhZGF0YUtleWAgaXMgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGUgdGFyZ2V0IGFuZCB0YXJnZXQga2V5LCB0aGVcbiAgICAgICAgICogbWV0YWRhdGFWYWx1ZSBmb3IgdGhhdCBrZXkgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IsIFR5cGVTY3JpcHQgb25seSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSwgVHlwZVNjcmlwdCBvbmx5KVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBwcm9wZXJ0eTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QoKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBtZXRob2QoKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpICYmICFJc1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcIm1ldGFkYXRhXCIsIG1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZSBhIHVuaXF1ZSBtZXRhZGF0YSBlbnRyeSBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0byBkZWZpbmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBkZWNvcmF0b3IgZmFjdG9yeSBhcyBtZXRhZGF0YS1wcm9kdWNpbmcgYW5ub3RhdGlvbi5cbiAgICAgICAgICogICAgIGZ1bmN0aW9uIE15QW5ub3RhdGlvbihvcHRpb25zKTogRGVjb3JhdG9yIHtcbiAgICAgICAgICogICAgICAgICByZXR1cm4gKHRhcmdldCwga2V5PykgPT4gUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIHRhcmdldCwga2V5KTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImRlZmluZU1ldGFkYXRhXCIsIGRlZmluZU1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbiBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW47IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImhhc01ldGFkYXRhXCIsIGhhc01ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3QgaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiaGFzT3duTWV0YWRhdGFcIiwgaGFzT3duTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRNZXRhZGF0YVwiLCBnZXRNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRPd25NZXRhZGF0YVwiLCBnZXRPd25NZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5TWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0TWV0YWRhdGFLZXlzXCIsIGdldE1ldGFkYXRhS2V5cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSB1bmlxdWUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRPd25NZXRhZGF0YUtleXNcIiwgZ2V0T3duTWV0YWRhdGFLZXlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGVudHJ5IGZyb20gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQga2V5LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEgZW50cnkgd2FzIGZvdW5kIGFuZCBkZWxldGVkOyBvdGhlcndpc2UsIGZhbHNlLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHByb3BlcnR5S2V5LCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFtZXRhZGF0YU1hcC5kZWxldGUobWV0YWRhdGFLZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YU1hcC5zaXplID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IE1ldGFkYXRhLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEuZGVsZXRlKHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRNZXRhZGF0YS5zaXplID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIE1ldGFkYXRhLmRlbGV0ZSh0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWxldGVNZXRhZGF0YVwiLCBkZWxldGVNZXRhZGF0YSk7XG4gICAgICAgIGZ1bmN0aW9uIERlY29yYXRlQ29uc3RydWN0b3IoZGVjb3JhdG9ycywgdGFyZ2V0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkgJiYgIUlzTnVsbChkZWNvcmF0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3RvcihkZWNvcmF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBkZWNvcmF0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBEZWNvcmF0ZVByb3BlcnR5KGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkgJiYgIUlzTnVsbChkZWNvcmF0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoZGVjb3JhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIENyZWF0ZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gTWV0YWRhdGEuZ2V0KE8pO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKHRhcmdldE1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmICghQ3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICBNZXRhZGF0YS5zZXQoTywgdGFyZ2V0TWV0YWRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KFApO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSkge1xuICAgICAgICAgICAgICAgIGlmICghQ3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhTWFwID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5zZXQoUCwgbWV0YWRhdGFNYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4xLjEgT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNtZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICBpZiAoaGFzT3duKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAoIUlzTnVsbChwYXJlbnQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4yLjEgT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gVG9Cb29sZWFuKG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4zLjEgT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRtZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICBpZiAoaGFzT3duKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjQuMSBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWdldG93bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNS4xIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5ZGVmaW5lb3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIHRydWUpO1xuICAgICAgICAgICAgbWV0YWRhdGFNYXAuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNi4xIE9yZGluYXJ5TWV0YWRhdGFLZXlzKE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5bWV0YWRhdGFrZXlzXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5TWV0YWRhdGFLZXlzKE8sIFApIHtcbiAgICAgICAgICAgIHZhciBvd25LZXlzID0gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XG4gICAgICAgICAgICB2YXIgcGFyZW50S2V5cyA9IE9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XG4gICAgICAgICAgICBpZiAocGFyZW50S2V5cy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gb3duS2V5cztcbiAgICAgICAgICAgIGlmIChvd25LZXlzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRLZXlzO1xuICAgICAgICAgICAgdmFyIHNldCA9IG5ldyBfU2V0KCk7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBvd25LZXlzXzEgPSBvd25LZXlzOyBfaSA8IG93bktleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gb3duS2V5c18xW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBwYXJlbnRLZXlzXzEgPSBwYXJlbnRLZXlzOyBfYSA8IHBhcmVudEtleXNfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcGFyZW50S2V5c18xW19hXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjcuMSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeW93bm1ldGFkYXRha2V5c1xuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgICB2YXIga2V5c09iaiA9IG1ldGFkYXRhTWFwLmtleXMoKTtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IEdldEl0ZXJhdG9yKGtleXNPYmopO1xuICAgICAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IEl0ZXJhdG9yU3RlcChpdGVyYXRvcik7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMubGVuZ3RoID0gaztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBJdGVyYXRvclZhbHVlKG5leHQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXNba10gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDYgRUNNQVNjcmlwdCBEYXRhIFR5cDBlcyBhbmQgVmFsdWVzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtZGF0YS10eXBlcy1hbmQtdmFsdWVzXG4gICAgICAgIGZ1bmN0aW9uIFR5cGUoeCkge1xuICAgICAgICAgICAgaWYgKHggPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLyogTnVsbCAqLztcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6IHJldHVybiAwIC8qIFVuZGVmaW5lZCAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOiByZXR1cm4gMiAvKiBCb29sZWFuICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIDMgLyogU3RyaW5nICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzeW1ib2xcIjogcmV0dXJuIDQgLyogU3ltYm9sICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjogcmV0dXJuIDUgLyogTnVtYmVyICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjogcmV0dXJuIHggPT09IG51bGwgPyAxIC8qIE51bGwgKi8gOiA2IC8qIE9iamVjdCAqLztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gNiAvKiBPYmplY3QgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjEgVGhlIFVuZGVmaW5lZCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtdW5kZWZpbmVkLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNVbmRlZmluZWQoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuMiBUaGUgTnVsbCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtbnVsbC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzTnVsbCh4KSB7XG4gICAgICAgICAgICByZXR1cm4geCA9PT0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuNSBUaGUgU3ltYm9sIFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1zeW1ib2wtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc1N5bWJvbCh4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjcgVGhlIE9iamVjdCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzT2JqZWN0KHgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiA/IHggIT09IG51bGwgOiB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMSBUeXBlIENvbnZlcnNpb25cbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZS1jb252ZXJzaW9uXG4gICAgICAgIC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuICAgICAgICBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuICAgICAgICAgICAgc3dpdGNoIChUeXBlKGlucHV0KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMCAvKiBVbmRlZmluZWQgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDEgLyogTnVsbCAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBCb29sZWFuICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAzIC8qIFN0cmluZyAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBTeW1ib2wgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDUgLyogTnVtYmVyICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGludCA9IFByZWZlcnJlZFR5cGUgPT09IDMgLyogU3RyaW5nICovID8gXCJzdHJpbmdcIiA6IFByZWZlcnJlZFR5cGUgPT09IDUgLyogTnVtYmVyICovID8gXCJudW1iZXJcIiA6IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgdmFyIGV4b3RpY1RvUHJpbSA9IEdldE1ldGhvZChpbnB1dCwgdG9QcmltaXRpdmVTeW1ib2wpO1xuICAgICAgICAgICAgaWYgKGV4b3RpY1RvUHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcbiAgICAgICAgICAgICAgICBpZiAoSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgaGludCA9PT0gXCJkZWZhdWx0XCIgPyBcIm51bWJlclwiIDogaGludCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjEuMSBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG4gICAgICAgICAgICBpZiAoaGludCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhciB0b1N0cmluZ18xID0gTy50b1N0cmluZztcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh0b1N0cmluZ18xKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9TdHJpbmdfMS5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVPZiA9IE8udmFsdWVPZjtcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh2YWx1ZU9mKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVPZi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZU9mID0gTy52YWx1ZU9mO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZU9mLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0b1N0cmluZ18yID0gTy50b1N0cmluZztcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh0b1N0cmluZ18yKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9TdHJpbmdfMi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMiBUb0Jvb2xlYW4oYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8yMDE2LyNzZWMtdG9ib29sZWFuXG4gICAgICAgIGZ1bmN0aW9uIFRvQm9vbGVhbihhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuICEhYXJndW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjEyIFRvU3RyaW5nKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3N0cmluZ1xuICAgICAgICBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhcmd1bWVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMTQgVG9Qcm9wZXJ0eUtleShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxuICAgICAgICBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gVG9QcmltaXRpdmUoYXJndW1lbnQsIDMgLyogU3RyaW5nICovKTtcbiAgICAgICAgICAgIGlmIChJc1N5bWJvbChrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICByZXR1cm4gVG9TdHJpbmcoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIgVGVzdGluZyBhbmQgQ29tcGFyaXNvbiBPcGVyYXRpb25zXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRlc3RpbmctYW5kLWNvbXBhcmlzb24tb3BlcmF0aW9uc1xuICAgICAgICAvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4gICAgICAgIGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5XG4gICAgICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGFyZ3VtZW50KVxuICAgICAgICAgICAgICAgIDogYXJndW1lbnQgaW5zdGFuY2VvZiBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgPyBhcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi4zIElzQ2FsbGFibGUoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbiAgICAgICAgZnVuY3Rpb24gSXNDYWxsYWJsZShhcmd1bWVudCkge1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBpcyBhbiBhcHByb3hpbWF0aW9uIGFzIHdlIGNhbm5vdCBjaGVjayBmb3IgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi40IElzQ29uc3RydWN0b3IoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY29uc3RydWN0b3JcbiAgICAgICAgZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBpcyBhbiBhcHByb3hpbWF0aW9uIGFzIHdlIGNhbm5vdCBjaGVjayBmb3IgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yLjcgSXNQcm9wZXJ0eUtleShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNwcm9wZXJ0eWtleVxuICAgICAgICBmdW5jdGlvbiBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKFR5cGUoYXJndW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzIC8qIFN0cmluZyAqLzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgY2FzZSA0IC8qIFN5bWJvbCAqLzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDcuMyBPcGVyYXRpb25zIG9uIE9iamVjdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1vYmplY3RzXG4gICAgICAgIC8vIDcuMy45IEdldE1ldGhvZChWLCBQKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRtZXRob2RcbiAgICAgICAgZnVuY3Rpb24gR2V0TWV0aG9kKFYsIFApIHtcbiAgICAgICAgICAgIHZhciBmdW5jID0gVltQXTtcbiAgICAgICAgICAgIGlmIChmdW5jID09PSB1bmRlZmluZWQgfHwgZnVuYyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCFJc0NhbGxhYmxlKGZ1bmMpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNCBPcGVyYXRpb25zIG9uIEl0ZXJhdG9yIE9iamVjdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1pdGVyYXRvci1vYmplY3RzXG4gICAgICAgIGZ1bmN0aW9uIEdldEl0ZXJhdG9yKG9iaikge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IEdldE1ldGhvZChvYmosIGl0ZXJhdG9yU3ltYm9sKTtcbiAgICAgICAgICAgIGlmICghSXNDYWxsYWJsZShtZXRob2QpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTsgLy8gZnJvbSBDYWxsXG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBtZXRob2QuY2FsbChvYmopO1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdChpdGVyYXRvcikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC40IEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLzIwMTYvI3NlYy1pdGVyYXRvcnZhbHVlXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjUgSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pdGVyYXRvcnN0ZXBcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gZmFsc2UgOiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JjbG9zZVxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGl0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKGYpXG4gICAgICAgICAgICAgICAgZi5jYWxsKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA5LjEgT3JkaW5hcnkgT2JqZWN0IEludGVybmFsIE1ldGhvZHMgYW5kIEludGVybmFsIFNsb3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5LW9iamVjdC1pbnRlcm5hbC1tZXRob2RzLWFuZC1pbnRlcm5hbC1zbG90c1xuICAgICAgICAvLyA5LjEuMS4xIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTylcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnlnZXRwcm90b3R5cGVvZlxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pIHtcbiAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgTyAhPT0gXCJmdW5jdGlvblwiIHx8IE8gPT09IGZ1bmN0aW9uUHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgZG9lc24ndCBzZXQgX19wcm90b19fIGluIEVTNSwgYXMgaXQncyBub24tc3RhbmRhcmQuXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIHRoZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLiBDb21wYXRpYmxlIGltcGxlbWVudGF0aW9uc1xuICAgICAgICAgICAgLy8gbXVzdCBlaXRoZXIgc2V0IF9fcHJvdG9fXyBvbiBhIHN1YmNsYXNzIGNvbnN0cnVjdG9yIHRvIHRoZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgLy8gb3IgZW5zdXJlIGVhY2ggY2xhc3MgaGFzIGEgdmFsaWQgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSBvbiBpdHMgcHJvdG90eXBlIHRoYXRcbiAgICAgICAgICAgIC8vIHBvaW50cyBiYWNrIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBzYW1lIGFzIEZ1bmN0aW9uLltbUHJvdG90eXBlXV0sIHRoZW4gdGhpcyBpcyBkZWZpbmF0ZWx5IGluaGVyaXRlZC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2Ugd2hlbiBpbiBFUzYgb3Igd2hlbiB1c2luZyBfX3Byb3RvX18gaW4gYSBjb21wYXRpYmxlIGJyb3dzZXIuXG4gICAgICAgICAgICBpZiAocHJvdG8gIT09IGZ1bmN0aW9uUHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHRoZSBzdXBlciBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZSwgbnVsbCwgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IE8ucHJvdG90eXBlO1xuICAgICAgICAgICAgdmFyIHByb3RvdHlwZVByb3RvID0gcHJvdG90eXBlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZVByb3RvID09IG51bGwgfHwgcHJvdG90eXBlUHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGNvbnN0cnVjdG9yIHdhcyBub3QgYSBmdW5jdGlvbiwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvdHlwZVByb3RvLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgc29tZSBraW5kIG9mIHNlbGYtcmVmZXJlbmNlLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09PSBPKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBwcmV0dHkgZ29vZCBndWVzcyBhdCB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgTWFwIHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlTWFwUG9seWZpbGwoKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVTZW50aW5lbCA9IHt9O1xuICAgICAgICAgICAgdmFyIGFycmF5U2VudGluZWwgPSBbXTtcbiAgICAgICAgICAgIHZhciBNYXBJdGVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXBJdGVyYXRvcihrZXlzLCB2YWx1ZXMsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGtleXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX2tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fc2VsZWN0b3IodGhpcy5fa2V5c1tpbmRleF0sIHRoaXMuX3ZhbHVlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA+PSB0aGlzLl9rZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdWx0LCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwSXRlcmF0b3I7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9rZXlzLmxlbmd0aDsgfSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSkgPj0gMDsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IHRoaXMuX3ZhbHVlc1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZXggKyAxOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5c1tpIC0gMV0gPSB0aGlzLl9rZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpIC0gMV0gPSB0aGlzLl92YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fY2FjaGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRLZXkpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0VmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldEVudHJ5KTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5fZmluZCA9IGZ1bmN0aW9uIChrZXksIGluc2VydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVLZXkgIT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleSA9IGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlSW5kZXggPCAwICYmIGluc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUluZGV4O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRLZXkoa2V5LCBfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKF8sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RW50cnkoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgU2V0IHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlU2V0UG9seWZpbGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFNldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFwID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnNpemU7IH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuaGFzKHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLnNldCh2YWx1ZSwgdmFsdWUpLCB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuZGVsZXRlKHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9tYXAuY2xlYXIoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBTZXQ7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIFdlYWtNYXAgc2hpbVxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKSB7XG4gICAgICAgICAgICB2YXIgVVVJRF9TSVpFID0gMTY7XG4gICAgICAgICAgICB2YXIga2V5cyA9IEhhc2hNYXAuY3JlYXRlKCk7XG4gICAgICAgICAgICB2YXIgcm9vdEtleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuaGFzKHRhYmxlLCB0aGlzLl9rZXkpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5nZXQodGFibGUsIHRoaXMuX2tleSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlW3RoaXMuX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gZGVsZXRlIHRhYmxlW3RoaXMuX2tleV0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBub3QgYSByZWFsIGNsZWFyLCBqdXN0IG1ha2VzIHRoZSBwcmV2aW91cyBkYXRhIHVucmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFdlYWtNYXA7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVW5pcXVlS2V5KCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXk7XG4gICAgICAgICAgICAgICAgZG9cbiAgICAgICAgICAgICAgICAgICAga2V5ID0gXCJAQFdlYWtNYXBAQFwiICsgQ3JlYXRlVVVJRCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChIYXNoTWFwLmhhcyhrZXlzLCBrZXkpKTtcbiAgICAgICAgICAgICAgICBrZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIGNyZWF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwodGFyZ2V0LCByb290S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHJvb3RLZXksIHsgdmFsdWU6IEhhc2hNYXAuY3JlYXRlKCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcm9vdEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBGaWxsUmFuZG9tQnl0ZXMoYnVmZmVyLCBzaXplKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCkgKiAweGZmIHwgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gR2VuUmFuZG9tQnl0ZXMoc2l6ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1zQ3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSksIHNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gRmlsbFJhbmRvbUJ5dGVzKG5ldyBBcnJheShzaXplKSwgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVVVUlEKCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gR2VuUmFuZG9tQnl0ZXMoVVVJRF9TSVpFKTtcbiAgICAgICAgICAgICAgICAvLyBtYXJrIGFzIHJhbmRvbSAtIFJGQyA0MTIyIMKnIDQuNFxuICAgICAgICAgICAgICAgIGRhdGFbNl0gPSBkYXRhWzZdICYgMHg0ZiB8IDB4NDA7XG4gICAgICAgICAgICAgICAgZGF0YVs4XSA9IGRhdGFbOF0gJiAweGJmIHwgMHg4MDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBVVUlEX1NJWkU7ICsrb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBieXRlID0gZGF0YVtvZmZzZXRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSA0IHx8IG9mZnNldCA9PT0gNiB8fCBvZmZzZXQgPT09IDgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCItXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChieXRlIDwgMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBieXRlLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVzZXMgYSBoZXVyaXN0aWMgdXNlZCBieSB2OCBhbmQgY2hha3JhIHRvIGZvcmNlIGFuIG9iamVjdCBpbnRvIGRpY3Rpb25hcnkgbW9kZS5cbiAgICAgICAgZnVuY3Rpb24gTWFrZURpY3Rpb25hcnkob2JqKSB7XG4gICAgICAgICAgICBvYmouX18gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBkZWxldGUgb2JqLl9fO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoUmVmbGVjdCB8fCAoUmVmbGVjdCA9IHt9KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNtcCAoYSwgYikge1xuICAgIHZhciBwYSA9IGEuc3BsaXQoJy4nKTtcbiAgICB2YXIgcGIgPSBiLnNwbGl0KCcuJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgdmFyIG5hID0gTnVtYmVyKHBhW2ldKTtcbiAgICAgICAgdmFyIG5iID0gTnVtYmVyKHBiW2ldKTtcbiAgICAgICAgaWYgKG5hID4gbmIpIHJldHVybiAxO1xuICAgICAgICBpZiAobmIgPiBuYSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoIWlzTmFOKG5hKSAmJiBpc05hTihuYikpIHJldHVybiAxO1xuICAgICAgICBpZiAoaXNOYU4obmEpICYmICFpc05hTihuYikpIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyXG5cbnZhciBkZWJ1Z1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICBwcm9jZXNzLmVudiAmJlxuICAgIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSkge1xuICBkZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICBhcmdzLnVuc2hpZnQoJ1NFTVZFUicpXG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncylcbiAgfVxufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7fVxufVxuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnXG5cbnZhciBNQVhfTEVOR1RIID0gMjU2XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIDkwMDcxOTkyNTQ3NDA5OTFcblxuLy8gTWF4IHNhZmUgc2VnbWVudCBsZW5ndGggZm9yIGNvZXJjaW9uLlxudmFyIE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggPSAxNlxuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdXG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXVxudmFyIFIgPSAwXG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrK1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJ1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKytcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrK1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJ1xuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrXG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSdcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKytcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJ1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrK1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJ1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrK1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJ1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrXG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJ1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrXG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJ1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrXG5zcmNbQlVJTERJREVOVElGSUVSXSA9ICdbMC05QS1aYS16LV0rJ1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrXG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrK1xudmFyIEZVTExQTEFJTiA9ICd2PycgKyBzcmNbTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPydcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnXG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nXG5cbnZhciBMT09TRSA9IFIrK1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCdcblxudmFyIEdUTFQgPSBSKytcbnNyY1tHVExUXSA9ICcoKD86PHw+KT89PyknXG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKytcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConXG52YXIgWFJBTkdFSURFTlRJRklFUiA9IFIrK1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJ1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKytcbnNyY1tYUkFOR0VQTEFJTl0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nXG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrXG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nXG5cbnZhciBYUkFOR0UgPSBSKytcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnXG52YXIgWFJBTkdFTE9PU0UgPSBSKytcbnNyY1tYUkFOR0VMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJ1xuXG4vLyBDb2VyY2lvbi5cbi8vIEV4dHJhY3QgYW55dGhpbmcgdGhhdCBjb3VsZCBjb25jZWl2YWJseSBiZSBhIHBhcnQgb2YgYSB2YWxpZCBzZW12ZXJcbnZhciBDT0VSQ0UgPSBSKytcbnNyY1tDT0VSQ0VdID0gJyg/Ol58W15cXFxcZF0pJyArXG4gICAgICAgICAgICAgICcoXFxcXGR7MSwnICsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCArICd9KScgK1xuICAgICAgICAgICAgICAnKD86XFxcXC4oXFxcXGR7MSwnICsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCArICd9KSk/JyArXG4gICAgICAgICAgICAgICcoPzpcXFxcLihcXFxcZHsxLCcgKyBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIICsgJ30pKT8nICtcbiAgICAgICAgICAgICAgJyg/OiR8W15cXFxcZF0pJ1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrK1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSdcblxudmFyIFRJTERFVFJJTSA9IFIrK1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJ1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJylcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfidcblxudmFyIFRJTERFID0gUisrXG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnXG52YXIgVElMREVMT09TRSA9IFIrK1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCdcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKytcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSdcblxudmFyIENBUkVUVFJJTSA9IFIrK1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJ1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJylcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXidcblxudmFyIENBUkVUID0gUisrXG5zcmNbQ0FSRVRdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnXG52YXIgQ0FSRVRMT09TRSA9IFIrK1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCdcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbnZhciBDT01QQVJBVE9STE9PU0UgPSBSKytcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCdcbnZhciBDT01QQVJBVE9SID0gUisrXG5zcmNbQ09NUEFSQVRPUl0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBGVUxMUExBSU4gKyAnKSR8XiQnXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG52YXIgQ09NUEFSQVRPUlRSSU0gPSBSKytcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJ1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJylcbnZhciBjb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJ1xuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxudmFyIEhZUEhFTlJBTkdFID0gUisrXG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnXG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrXG5zcmNbSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnXG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrXG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKidcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKVxuICBpZiAoIXJlW2ldKSB7XG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSlcbiAgfVxufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmZ1bmN0aW9uIHBhcnNlICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgcmV0dXJuIHZlcnNpb25cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB2YXIgciA9IG9wdGlvbnMubG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXVxuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWRcbmZ1bmN0aW9uIHZhbGlkICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsXG59XG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhblxuZnVuY3Rpb24gY2xlYW4gKHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIG9wdGlvbnMpXG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbFxufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlclxuXG5mdW5jdGlvbiBTZW1WZXIgKHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBsb29zZTogISFvcHRpb25zLFxuICAgICAgaW5jbHVkZVByZXJlbGVhc2U6IGZhbHNlXG4gICAgfVxuICB9XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IG9wdGlvbnMubG9vc2UpIHtcbiAgICAgIHJldHVybiB2ZXJzaW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb25cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbilcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICcgKyBNQVhfTEVOR1RIICsgJyBjaGFyYWN0ZXJzJylcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgfVxuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBvcHRpb25zKVxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcblxuICB2YXIgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKG9wdGlvbnMubG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSlcblxuICBpZiAoIW0pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKVxuICB9XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uXG5cbiAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgdGhpcy5tYWpvciA9ICttWzFdXG4gIHRoaXMubWlub3IgPSArbVsyXVxuICB0aGlzLnBhdGNoID0gK21bM11cblxuICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuICB9XG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcbiAgfVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG4gIH1cblxuICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgaWYgKCFtWzRdKSB7XG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgdmFyIG51bSA9ICtpZFxuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgICAgIHJldHVybiBudW1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlkXG4gICAgfSlcbiAgfVxuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW11cbiAgdGhpcy5mb3JtYXQoKVxufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJylcbiAgfVxuICByZXR1cm4gdGhpcy52ZXJzaW9uXG59XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb25cbn1cblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5vcHRpb25zLCBvdGhlcilcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKVxufVxuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaClcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIHJldHVybiAtMVxuICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgcmV0dXJuIDFcbiAgfSBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXVxuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXVxuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKVxuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICB9XG4gIH0gd2hpbGUgKCsraSlcbn1cblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbiAocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICB0aGlzLm1ham9yKytcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgIHRoaXMubWlub3IrK1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKVxuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICBicmVha1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcilcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucGF0Y2ggIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgfVxuICAgICAgdGhpcy5taW5vciA9IDBcbiAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm1pbm9yKytcbiAgICAgIH1cbiAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucGF0Y2grK1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgIGJyZWFrXG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKytcbiAgICAgICAgICAgIGkgPSAtMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrXG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpXG4gIH1cbiAgdGhpcy5mb3JtYXQoKVxuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvblxuICByZXR1cm4gdGhpc1xufVxuXG5leHBvcnRzLmluYyA9IGluY1xuZnVuY3Rpb24gaW5jICh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mIChsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlXG4gICAgbG9vc2UgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmXG5mdW5jdGlvbiBkaWZmICh2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKVxuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKVxuICAgIHZhciBwcmVmaXggPSAnJ1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcHJlZml4ID0gJ3ByZSdcbiAgICAgIHZhciBkZWZhdWx0UmVzdWx0ID0gJ3ByZXJlbGVhc2UnXG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCArIGtleVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0IC8vIG1heSBiZSB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVyc1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC9cbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyAoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKVxuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKVxuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2FcbiAgICBiID0gK2JcbiAgfVxuXG4gIHJldHVybiBhID09PSBiID8gMFxuICAgIDogKGFudW0gJiYgIWJudW0pID8gLTFcbiAgICA6IChibnVtICYmICFhbnVtKSA/IDFcbiAgICA6IGEgPCBiID8gLTFcbiAgICA6IDFcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVyc1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyAoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpXG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvclxuZnVuY3Rpb24gbWFqb3IgKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvclxufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3JcbmZ1bmN0aW9uIG1pbm9yIChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3Jcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoXG5mdW5jdGlvbiBwYXRjaCAoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoXG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmVcbmZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKG5ldyBTZW1WZXIoYiwgbG9vc2UpKVxufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZVxuZnVuY3Rpb24gY29tcGFyZUxvb3NlIChhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpXG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZVxuZnVuY3Rpb24gcmNvbXBhcmUgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKVxufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0XG5mdW5jdGlvbiBzb3J0IChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSlcbiAgfSlcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0XG5mdW5jdGlvbiByc29ydCAobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKVxuICB9KVxufVxuXG5leHBvcnRzLmd0ID0gZ3RcbmZ1bmN0aW9uIGd0IChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwXG59XG5cbmV4cG9ydHMubHQgPSBsdFxuZnVuY3Rpb24gbHQgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDBcbn1cblxuZXhwb3J0cy5lcSA9IGVxXG5mdW5jdGlvbiBlcSAoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwXG59XG5cbmV4cG9ydHMubmVxID0gbmVxXG5mdW5jdGlvbiBuZXEgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMFxufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZVxuZnVuY3Rpb24gZ3RlIChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMFxufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZVxuZnVuY3Rpb24gbHRlIChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMFxufVxuXG5leHBvcnRzLmNtcCA9IGNtcFxuZnVuY3Rpb24gY21wIChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKVxuICAgICAgICBhID0gYS52ZXJzaW9uXG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKVxuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICByZXR1cm4gYSA9PT0gYlxuXG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpXG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpXG4gICAgICAgIGIgPSBiLnZlcnNpb25cbiAgICAgIHJldHVybiBhICE9PSBiXG5cbiAgICBjYXNlICcnOlxuICAgIGNhc2UgJz0nOlxuICAgIGNhc2UgJz09JzpcbiAgICAgIHJldHVybiBlcShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJyE9JzpcbiAgICAgIHJldHVybiBuZXEoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc+JzpcbiAgICAgIHJldHVybiBndChhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJz49JzpcbiAgICAgIHJldHVybiBndGUoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc8JzpcbiAgICAgIHJldHVybiBsdChhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJzw9JzpcbiAgICAgIHJldHVybiBsdGUoYSwgYiwgbG9vc2UpXG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKVxuICB9XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3JcbmZ1bmN0aW9uIENvbXBhcmF0b3IgKGNvbXAsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBsb29zZTogISFvcHRpb25zLFxuICAgICAgaW5jbHVkZVByZXJlbGVhc2U6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSkge1xuICAgICAgcmV0dXJuIGNvbXBcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcCA9IGNvbXAudmFsdWVcbiAgICB9XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgb3B0aW9ucylcbiAgfVxuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgb3B0aW9ucylcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gIHRoaXMucGFyc2UoY29tcClcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSkge1xuICAgIHRoaXMudmFsdWUgPSAnJ1xuICB9IGVsc2Uge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvblxuICB9XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKVxufVxuXG52YXIgQU5ZID0ge31cbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLm9wdGlvbnMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl1cbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpXG5cbiAgaWYgKCFtKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcClcbiAgfVxuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdXG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpIHtcbiAgICB0aGlzLm9wZXJhdG9yID0gJydcbiAgfVxuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pIHtcbiAgICB0aGlzLnNlbXZlciA9IEFOWVxuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLm9wdGlvbnMubG9vc2UpXG4gIH1cbn1cblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlXG59XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5vcHRpb25zLmxvb3NlKVxuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLm9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLm9wdGlvbnMpXG59XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLmludGVyc2VjdHMgPSBmdW5jdGlvbiAoY29tcCwgb3B0aW9ucykge1xuICBpZiAoIShjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIENvbXBhcmF0b3IgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBsb29zZTogISFvcHRpb25zLFxuICAgICAgaW5jbHVkZVByZXJlbGVhc2U6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdmFyIHJhbmdlVG1wXG5cbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgcmFuZ2VUbXAgPSBuZXcgUmFuZ2UoY29tcC52YWx1ZSwgb3B0aW9ucylcbiAgICByZXR1cm4gc2F0aXNmaWVzKHRoaXMudmFsdWUsIHJhbmdlVG1wLCBvcHRpb25zKVxuICB9IGVsc2UgaWYgKGNvbXAub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgcmFuZ2VUbXAgPSBuZXcgUmFuZ2UodGhpcy52YWx1ZSwgb3B0aW9ucylcbiAgICByZXR1cm4gc2F0aXNmaWVzKGNvbXAuc2VtdmVyLCByYW5nZVRtcCwgb3B0aW9ucylcbiAgfVxuXG4gIHZhciBzYW1lRGlyZWN0aW9uSW5jcmVhc2luZyA9XG4gICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJz4nKSAmJlxuICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc+JylcbiAgdmFyIHNhbWVEaXJlY3Rpb25EZWNyZWFzaW5nID1cbiAgICAodGhpcy5vcGVyYXRvciA9PT0gJzw9JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPCcpICYmXG4gICAgKGNvbXAub3BlcmF0b3IgPT09ICc8PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJzwnKVxuICB2YXIgc2FtZVNlbVZlciA9IHRoaXMuc2VtdmVyLnZlcnNpb24gPT09IGNvbXAuc2VtdmVyLnZlcnNpb25cbiAgdmFyIGRpZmZlcmVudERpcmVjdGlvbnNJbmNsdXNpdmUgPVxuICAgICh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8PScpICYmXG4gICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJzw9JylcbiAgdmFyIG9wcG9zaXRlRGlyZWN0aW9uc0xlc3NUaGFuID1cbiAgICBjbXAodGhpcy5zZW12ZXIsICc8JywgY29tcC5zZW12ZXIsIG9wdGlvbnMpICYmXG4gICAgKCh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc+JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJzw9JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPCcpKVxuICB2YXIgb3Bwb3NpdGVEaXJlY3Rpb25zR3JlYXRlclRoYW4gPVxuICAgIGNtcCh0aGlzLnNlbXZlciwgJz4nLCBjb21wLnNlbXZlciwgb3B0aW9ucykgJiZcbiAgICAoKHRoaXMub3BlcmF0b3IgPT09ICc8PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzwnKSAmJlxuICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc+JykpXG5cbiAgcmV0dXJuIHNhbWVEaXJlY3Rpb25JbmNyZWFzaW5nIHx8IHNhbWVEaXJlY3Rpb25EZWNyZWFzaW5nIHx8XG4gICAgKHNhbWVTZW1WZXIgJiYgZGlmZmVyZW50RGlyZWN0aW9uc0luY2x1c2l2ZSkgfHxcbiAgICBvcHBvc2l0ZURpcmVjdGlvbnNMZXNzVGhhbiB8fCBvcHBvc2l0ZURpcmVjdGlvbnNHcmVhdGVyVGhhblxufVxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2VcbmZ1bmN0aW9uIFJhbmdlIChyYW5nZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGxvb3NlOiAhIW9wdGlvbnMsXG4gICAgICBpbmNsdWRlUHJlcmVsZWFzZTogZmFsc2VcbiAgICB9XG4gIH1cblxuICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkge1xuICAgIGlmIChyYW5nZS5sb29zZSA9PT0gISFvcHRpb25zLmxvb3NlICYmXG4gICAgICAgIHJhbmdlLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgIHJldHVybiByYW5nZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnJhdywgb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICBpZiAocmFuZ2UgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZS52YWx1ZSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpIHtcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9XG5cbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlXG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKVxuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoXG4gIH0pXG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKVxuICB9XG5cbiAgdGhpcy5mb3JtYXQoKVxufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uIChjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpXG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpXG4gIHJldHVybiB0aGlzLnJhbmdlXG59XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2Vcbn1cblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5vcHRpb25zLmxvb3NlXG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpXG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSlcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpXG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpXG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKVxuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSlcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpXG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpXG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl1cbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpXG4gIH0sIHRoaXMpLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pXG4gIGlmICh0aGlzLm9wdGlvbnMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24gKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKVxuICAgIH0pXG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbiAoY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpXG4gIH0sIHRoaXMpXG5cbiAgcmV0dXJuIHNldFxufVxuXG5SYW5nZS5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChyYW5nZSwgb3B0aW9ucykge1xuICBpZiAoIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgUmFuZ2UgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuc2V0LnNvbWUoZnVuY3Rpb24gKHRoaXNDb21wYXJhdG9ycykge1xuICAgIHJldHVybiB0aGlzQ29tcGFyYXRvcnMuZXZlcnkoZnVuY3Rpb24gKHRoaXNDb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gcmFuZ2Uuc2V0LnNvbWUoZnVuY3Rpb24gKHJhbmdlQ29tcGFyYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlQ29tcGFyYXRvcnMuZXZlcnkoZnVuY3Rpb24gKHJhbmdlQ29tcGFyYXRvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzQ29tcGFyYXRvci5pbnRlcnNlY3RzKHJhbmdlQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9yc1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykuc2V0Lm1hcChmdW5jdGlvbiAoY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMudmFsdWVcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJylcbiAgfSlcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yIChjb21wLCBvcHRpb25zKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCwgb3B0aW9ucylcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ2NhcmV0JywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygneHJhbmdlJywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBvcHRpb25zKVxuICBkZWJ1Zygnc3RhcnMnLCBjb21wKVxuICByZXR1cm4gY29tcFxufVxuXG5mdW5jdGlvbiBpc1ggKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKidcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMgKGNvbXAsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uIChjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBvcHRpb25zKVxuICB9KS5qb2luKCcgJylcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlIChjb21wLCBvcHRpb25zKSB7XG4gIHZhciByID0gb3B0aW9ucy5sb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24gKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgdmFyIHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgJy0nICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnXG4gICAgfVxuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyAoY29tcCwgb3B0aW9ucykge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24gKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQgKGNvbXAsIG9wdGlvbnMpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgb3B0aW9ucylcbiAgdmFyIHIgPSBvcHRpb25zLmxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbiAoXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcilcbiAgICB2YXIgcmV0XG5cbiAgICBpZiAoaXNYKE0pKSB7XG4gICAgICByZXQgPSAnJ1xuICAgIH0gZWxzZSBpZiAoaXNYKG0pKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCdcbiAgICB9IGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcilcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyAnLScgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgJy0nICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyAnLScgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKVxuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKSB7XG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzIChjb21wLCBvcHRpb25zKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uIChjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UgKGNvbXAsIG9wdGlvbnMpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpXG4gIHZhciByID0gb3B0aW9ucy5sb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV1cbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbiAocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKVxuICAgIHZhciB4TSA9IGlzWChNKVxuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKVxuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKVxuICAgIHZhciBhbnlYID0geHBcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WCkge1xuICAgICAgZ3RsdCA9ICcnXG4gICAgfVxuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyB3ZSBrbm93IHBhdGNoIGlzIGFuIHgsIGJlY2F1c2Ugd2UgaGF2ZSBhbnkgeCBhdCBhbGwuXG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pIHtcbiAgICAgICAgbSA9IDBcbiAgICAgIH1cbiAgICAgIHAgPSAwXG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgICBtID0gMFxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICAgIHAgPSAwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8J1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHBcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCdcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnXG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpXG5cbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMgKGNvbXAsIG9wdGlvbnMpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIG9wdGlvbnMpXG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlICgkMCxcbiAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcbiAgaWYgKGlzWChmTSkpIHtcbiAgICBmcm9tID0gJydcbiAgfSBlbHNlIGlmIChpc1goZm0pKSB7XG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJ1xuICB9IGVsc2UgaWYgKGlzWChmcCkpIHtcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnXG4gIH0gZWxzZSB7XG4gICAgZnJvbSA9ICc+PScgKyBmcm9tXG4gIH1cblxuICBpZiAoaXNYKHRNKSkge1xuICAgIHRvID0gJydcbiAgfSBlbHNlIGlmIChpc1godG0pKSB7XG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCdcbiAgfSBlbHNlIGlmIChpc1godHApKSB7XG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCdcbiAgfSBlbHNlIGlmICh0cHIpIHtcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHJcbiAgfSBlbHNlIHtcbiAgICB0byA9ICc8PScgKyB0b1xuICB9XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKVxufVxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbiwgdGhpcy5vcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHRlc3RTZXQgKHNldCwgdmVyc2lvbiwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoICYmICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcilcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlclxuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzXG5mdW5jdGlvbiBzYXRpc2ZpZXMgKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbilcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZ1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSB7XG4gIHZhciBtYXggPSBudWxsXG4gIHZhciBtYXhTViA9IG51bGxcbiAgdHJ5IHtcbiAgICB2YXIgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWF4IHx8IG1heFNWLmNvbXBhcmUodikgPT09IC0xKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWF4LCB2LCB0cnVlKVxuICAgICAgICBtYXggPSB2XG4gICAgICAgIG1heFNWID0gbmV3IFNlbVZlcihtYXgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWF4XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmdcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcgKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykge1xuICB2YXIgbWluID0gbnVsbFxuICB2YXIgbWluU1YgPSBudWxsXG4gIHRyeSB7XG4gICAgdmFyIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7XG4gICAgICAvLyBzYXRpc2ZpZXModiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgICBpZiAoIW1pbiB8fCBtaW5TVi5jb21wYXJlKHYpID09PSAxKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWluLCB2LCB0cnVlKVxuICAgICAgICBtaW4gPSB2XG4gICAgICAgIG1pblNWID0gbmV3IFNlbVZlcihtaW4sIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWluXG59XG5cbmV4cG9ydHMubWluVmVyc2lvbiA9IG1pblZlcnNpb25cbmZ1bmN0aW9uIG1pblZlcnNpb24gKHJhbmdlLCBsb29zZSkge1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpXG5cbiAgdmFyIG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wLTAnKVxuICBpZiAocmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgbWludmVyID0gbnVsbFxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29tcGFyYXRvcikge1xuICAgICAgLy8gQ2xvbmUgdG8gYXZvaWQgbWFuaXB1bGF0aW5nIHRoZSBjb21wYXJhdG9yJ3Mgc2VtdmVyIG9iamVjdC5cbiAgICAgIHZhciBjb21wdmVyID0gbmV3IFNlbVZlcihjb21wYXJhdG9yLnNlbXZlci52ZXJzaW9uKVxuICAgICAgc3dpdGNoIChjb21wYXJhdG9yLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChjb21wdmVyLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb21wdmVyLnBhdGNoKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHZlci5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcHZlci5yYXcgPSBjb21wdmVyLmZvcm1hdCgpXG4gICAgICAgICAgLyogZmFsbHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgIGlmICghbWludmVyIHx8IGd0KG1pbnZlciwgY29tcHZlcikpIHtcbiAgICAgICAgICAgIG1pbnZlciA9IGNvbXB2ZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAvKiBJZ25vcmUgbWF4aW11bSB2ZXJzaW9ucyAqL1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIG9wZXJhdGlvbjogJyArIGNvbXBhcmF0b3Iub3BlcmF0b3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlmIChtaW52ZXIgJiYgcmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZVxuZnVuY3Rpb24gdmFsaWRSYW5nZSAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykucmFuZ2UgfHwgJyonXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyXG5mdW5jdGlvbiBsdHIgKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIG9wdGlvbnMpXG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyXG5mdW5jdGlvbiBndHIgKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIG9wdGlvbnMpXG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGVcbmZ1bmN0aW9uIG91dHNpZGUgKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBvcHRpb25zKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXBcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3RcbiAgICAgIGx0ZWZuID0gbHRlXG4gICAgICBsdGZuID0gbHRcbiAgICAgIGNvbXAgPSAnPidcbiAgICAgIGVjb21wID0gJz49J1xuICAgICAgYnJlYWtcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdFxuICAgICAgbHRlZm4gPSBndGVcbiAgICAgIGx0Zm4gPSBndFxuICAgICAgY29tcCA9ICc8J1xuICAgICAgZWNvbXAgPSAnPD0nXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpXG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICB2YXIgaGlnaCA9IG51bGxcbiAgICB2YXIgbG93ID0gbnVsbFxuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3JcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yXG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yXG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3JcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlXG5mdW5jdGlvbiBwcmVyZWxlYXNlICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBvcHRpb25zKVxuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsXG59XG5cbmV4cG9ydHMuaW50ZXJzZWN0cyA9IGludGVyc2VjdHNcbmZ1bmN0aW9uIGludGVyc2VjdHMgKHIxLCByMiwgb3B0aW9ucykge1xuICByMSA9IG5ldyBSYW5nZShyMSwgb3B0aW9ucylcbiAgcjIgPSBuZXcgUmFuZ2UocjIsIG9wdGlvbnMpXG4gIHJldHVybiByMS5pbnRlcnNlY3RzKHIyKVxufVxuXG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZVxuZnVuY3Rpb24gY29lcmNlICh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgcmV0dXJuIHZlcnNpb25cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdmFyIG1hdGNoID0gdmVyc2lvbi5tYXRjaChyZVtDT0VSQ0VdKVxuXG4gIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBwYXJzZShtYXRjaFsxXSArXG4gICAgJy4nICsgKG1hdGNoWzJdIHx8ICcwJykgK1xuICAgICcuJyArIChtYXRjaFszXSB8fCAnMCcpKVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSdcblxuaW1wb3J0IHsgSUJ1aWxkQWdlbnQsIElFeGVjUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbHMnXG5pbXBvcnQgeyBJUmVxdWVzdE9wdGlvbnMgfSBmcm9tICd0eXBlZC1yZXN0LWNsaWVudC9JbnRlcmZhY2VzJ1xuXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBCdWlsZEFnZW50IGltcGxlbWVudHMgSUJ1aWxkQWdlbnQge1xuICAgIHByb3h5Q29uZmlndXJhdGlvbih1cmw6IHN0cmluZyk6IElSZXF1ZXN0T3B0aW9ucyB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm94eUNvbmZpZ3VyYXRpb24nKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYWdlbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRBZ2VudE5hbWUnKVxuICAgICAgICByZXR1cm4gJ01vY2snXG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQodG9vbE5hbWU6IHN0cmluZywgdmVyc2lvblNwZWM6IHN0cmluZywgYXJjaD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmaW5kJylcbiAgICAgICAgcmV0dXJuICdmaW5kJ1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWNoZURpcihcbiAgICAgICAgc291cmNlRGlyOiBzdHJpbmcsXG4gICAgICAgIHRvb2w6IHN0cmluZyxcbiAgICAgICAgdmVyc2lvbjogc3RyaW5nLFxuICAgICAgICBhcmNoPzogc3RyaW5nXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlRGlyJylcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnY2FjaGVEaXInKVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVUZW1wRGlyKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVUZW1wRGlyJylcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnY3JlYXRlVGVtcERpcicpXG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnZGVidWcnKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGYWlsZWQobWVzc2FnZTogc3RyaW5nLCBkb25lPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0RmFpbGVkJylcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3VjY2VlZGVkKG1lc3NhZ2U6IHN0cmluZywgZG9uZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldFN1Y2NlZWRlZCcpXG4gICAgfVxuXG4gICAgcHVibGljIGV4cG9ydFZhcmlhYmxlKG5hbWU6IHN0cmluZywgdmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4cG9ydFZhcmlhYmxlJylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFyaWFibGUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFZhcmlhYmxlJylcbiAgICAgICAgcmV0dXJuICdnZXRWYXJpYWJsZSdcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGF0aChpbnB1dFBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkUGF0aCcpXG4gICAgfVxuXG4gICAgcHVibGljIHdoaWNoKHRvb2w6IHN0cmluZywgY2hlY2s/OiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3doaWNoJylcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnd2hpY2gnKVxuICAgIH1cblxuICAgIHB1YmxpYyBleGVjKGV4ZWM6IHN0cmluZywgYXJnczogc3RyaW5nW10pOiBQcm9taXNlPElFeGVjUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgY29kZTogMCxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc3RkZXJyOiAncmVzdWx0LnN0ZGVycicsXG4gICAgICAgICAgICBzdGRvdXQ6ICdyZXN1bHQuc3Rkb3V0J1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTb3VyY2VEaXIoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFNvdXJjZURpcicpXG4gICAgICAgIHJldHVybiAnZ2V0U291cmNlRGlyJ1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPdXRwdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXRPdXRwdXQnKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnB1dChpbnB1dDogc3RyaW5nLCByZXF1aXJlZD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0SW5wdXQnKVxuICAgICAgICByZXR1cm4gJ2dldElucHV0J1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMaXN0SW5wdXQoaW5wdXQ6IHN0cmluZywgcmVxdWlyZWQ/OiBib29sZWFuKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0TGlzdElucHV0JylcbiAgICAgICAgcmV0dXJuIFsnZ2V0SW5wdXQnXVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb29sZWFuSW5wdXQoaW5wdXQ6IHN0cmluZywgcmVxdWlyZWQ/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRCb29sZWFuSW5wdXQnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNWYWxpZElucHV0RmlsZShpbnB1dDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2lzVmFsaWRJbnB1dEZpbGUnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlsZUV4aXN0cyhmaWxlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGVFeGlzdHMnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlyZWN0b3J5RXhpc3RzKGZpbGU6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZygnZGlyZWN0b3J5RXhpc3RzJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgeyBCdWlsZEFnZW50IH1cbiIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcydcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ3R5cGVkLXJlc3QtY2xpZW50L0h0dHBDbGllbnQnXHJcblxyXG5pbXBvcnQgeyBpbmplY3QsIGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IFRZUEVTLCBJRXhlY1Jlc3VsdCwgSUJ1aWxkQWdlbnQsIElTZXR1cFNldHRpbmdzIH0gZnJvbSAnLi9tb2RlbHMnXHJcbmltcG9ydCB7IElWZXJzaW9uTWFuYWdlciB9IGZyb20gJy4vdmVyc2lvbk1hbmFnZXInXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEb3RuZXRUb29sIHtcclxuICAgIGRpc2FibGVUZWxlbWV0cnkoKTogdm9pZFxyXG4gICAgdG9vbEluc3RhbGwoXHJcbiAgICAgICAgdG9vbE5hbWU6IHN0cmluZyxcclxuICAgICAgICBjaGVja0xhdGVzdDogYm9vbGVhbixcclxuICAgICAgICBzZXR1cFNldHRpbmdzOiBJU2V0dXBTZXR0aW5nc1xyXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+XHJcbn1cclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERvdG5ldFRvb2wgaW1wbGVtZW50cyBJRG90bmV0VG9vbCB7XHJcbiAgICBwcm90ZWN0ZWQgYnVpbGRBZ2VudDogSUJ1aWxkQWdlbnRcclxuICAgIHByb3RlY3RlZCB2ZXJzaW9uTWFuYWdlcjogSVZlcnNpb25NYW5hZ2VyXHJcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IGh0dHAuSHR0cENsaWVudFxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IG51Z2V0Um9vdDogc3RyaW5nID1cclxuICAgICAgICAnaHR0cHM6Ly9hcGktdjJ2M3NlYXJjaC0wLm51Z2V0Lm9yZy8nXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5JQnVpbGRBZ2VudCkgYnVpbGRBZ2VudDogSUJ1aWxkQWdlbnQsXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5JVmVyc2lvbk1hbmFnZXIpIHZlcnNpb25NYW5hZ2VyOiBJVmVyc2lvbk1hbmFnZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRBZ2VudCA9IGJ1aWxkQWdlbnRcclxuICAgICAgICB0aGlzLnZlcnNpb25NYW5hZ2VyID0gdmVyc2lvbk1hbmFnZXJcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBuZXcgaHR0cC5IdHRwQ2xpZW50KFxyXG4gICAgICAgICAgICAnZG90bmV0JyxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkQWdlbnQucHJveHlDb25maWd1cmF0aW9uKERvdG5ldFRvb2wubnVnZXRSb290KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZVRlbGVtZXRyeSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ1aWxkQWdlbnQuZXhwb3J0VmFyaWFibGUoJ0RPVE5FVF9DTElfVEVMRU1FVFJZX09QVE9VVCcsICd0cnVlJylcclxuICAgICAgICB0aGlzLmJ1aWxkQWdlbnQuZXhwb3J0VmFyaWFibGUoJ0RPVE5FVF9OT0xPR08nLCAndHJ1ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWN1dGUoY21kOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxJRXhlY1Jlc3VsdD4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDb21tYW5kOiAke2NtZH0gJHthcmdzLmpvaW4oJyAnKX1gKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQWdlbnQuZXhlYyhjbWQsIGFyZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHRvb2xJbnN0YWxsKFxyXG4gICAgICAgIHRvb2xOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgY2hlY2tMYXRlc3Q6IGJvb2xlYW4sXHJcbiAgICAgICAgc2V0dXBTZXR0aW5nczogSVNldHVwU2V0dGluZ3NcclxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJycpXHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYEluc3RhbGxpbmcgJHt0b29sTmFtZX0gdmVyc2lvbiBgICsgc2V0dXBTZXR0aW5ncy52ZXJzaW9uU3BlY1xyXG4gICAgICAgIClcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxyXG5cclxuICAgICAgICBpZiAodGhpcy52ZXJzaW9uTWFuYWdlci5pc0V4cGxpY2l0VmVyc2lvbihzZXR1cFNldHRpbmdzLnZlcnNpb25TcGVjKSkge1xyXG4gICAgICAgICAgICBjaGVja0xhdGVzdCA9IGZhbHNlIC8vIGNoZWNrIGxhdGVzdCBkb2Vzbid0IG1ha2Ugc2Vuc2Ugd2hlbiBleHBsaWNpdCB2ZXJzaW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9vbFBhdGg6IHN0cmluZ1xyXG4gICAgICAgIGlmICghY2hlY2tMYXRlc3QpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gTGV0J3MgdHJ5IGFuZCByZXNvbHZlIHRoZSB2ZXJzaW9uIHNwZWMgbG9jYWxseSBmaXJzdFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB0b29sUGF0aCA9IHRoaXMuYnVpbGRBZ2VudC5maW5kKHRvb2xOYW1lLCBzZXR1cFNldHRpbmdzLnZlcnNpb25TcGVjKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b29sUGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgdmVyc2lvbjogc3RyaW5nXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbk1hbmFnZXIuaXNFeHBsaWNpdFZlcnNpb24oc2V0dXBTZXR0aW5ncy52ZXJzaW9uU3BlYylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gRXhwbGljaXQgdmVyc2lvbiB3YXMgc3BlY2lmaWVkLiBObyBuZWVkIHRvIHF1ZXJ5IGZvciBsaXN0IG9mIHZlcnNpb25zLlxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHZlcnNpb24gPSBzZXR1cFNldHRpbmdzLnZlcnNpb25TcGVjXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gTGV0J3MgcXVlcnkgYW5kIHJlc29sdmUgdGhlIGxhdGVzdCB2ZXJzaW9uIGZvciB0aGUgdmVyc2lvblNwZWMuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmVyc2lvbiBpcyBhbiBleHBsaWNpdCB2ZXJzaW9uICgxLjEuMSBvciB2MS4xLjEpIHRoZW4gbm8gbmVlZCB0byBxdWVyeS5cclxuICAgICAgICAgICAgICAgIC8vIElmIHlvdXIgdG9vbCBkb2Vzbid0IG9mZmVyIGEgbWVjaGFuaXNtIHRvIHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBpdCBjYW4gb25seSBzdXBwb3J0IGV4YWN0IHZlcnNpb24gaW5wdXRzLlxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHZlcnNpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5TGF0ZXN0TWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBTZXR0aW5ncy52ZXJzaW9uU3BlYyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR1cFNldHRpbmdzLmluY2x1ZGVQcmVyZWxlYXNlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBpZiAoIXZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gZmluZCAke3Rvb2xOYW1lfSB2ZXJzaW9uICcke3NldHVwU2V0dGluZ3MudmVyc2lvblNwZWN9Jy5gXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGUgY2FjaGUgZm9yIHRoZSByZXNvbHZlZCB2ZXJzaW9uLlxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRvb2xQYXRoID0gdGhpcy5idWlsZEFnZW50LmZpbmQodG9vbE5hbWUsIHZlcnNpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0b29sUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIERvd25sb2FkLCBleHRyYWN0LCBjYWNoZVxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHRvb2xQYXRoID0gYXdhaXQgdGhpcy5hY3F1aXJlVG9vbChcclxuICAgICAgICAgICAgICAgICAgICB0b29sTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHVwU2V0dGluZ3MuaWdub3JlRmFpbGVkU291cmNlc1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFByZXBlbmQgdGhlIHRvb2xzIHBhdGguIFRoaXMgcHJlcGVuZHMgdGhlIFBBVEggZm9yIHRoZSBjdXJyZW50IHByb2Nlc3MgYW5kXHJcbiAgICAgICAgLy8gaW5zdHJ1Y3RzIHRoZSBhZ2VudCB0byBwcmVwZW5kIGZvciBlYWNoIHRhc2sgdGhhdCBmb2xsb3dzLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5idWlsZEFnZW50LmRlYnVnKGB0b29sUGF0aDogJHt0b29sUGF0aH1gKVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG9zLnBsYXRmb3JtKCkgIT09ICd3aW4zMicgJiZcclxuICAgICAgICAgICAgIXRoaXMuYnVpbGRBZ2VudC5nZXRWYXJpYWJsZSgnRE9UTkVUX1JPT1QnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBsZXQgZG90bmV0UGF0aCA9IGF3YWl0IHRoaXMuYnVpbGRBZ2VudC53aGljaCgnZG90bmV0JylcclxuICAgICAgICAgICAgZG90bmV0UGF0aCA9IGZzLnJlYWRsaW5rU3luYyhkb3RuZXRQYXRoKSB8fCBkb3RuZXRQYXRoXHJcbiAgICAgICAgICAgIGNvbnN0IGRvdG5ldFJvb3QgPSBwYXRoLmRpcm5hbWUoZG90bmV0UGF0aClcclxuICAgICAgICAgICAgdGhpcy5idWlsZEFnZW50LmV4cG9ydFZhcmlhYmxlKCdET1RORVRfUk9PVCcsIGRvdG5ldFJvb3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVpbGRBZ2VudC5hZGRQYXRoKHRvb2xQYXRoKVxyXG5cclxuICAgICAgICByZXR1cm4gdG9vbFBhdGhcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHF1ZXJ5TGF0ZXN0TWF0Y2goXHJcbiAgICAgICAgdG9vbE5hbWU6IHN0cmluZyxcclxuICAgICAgICB2ZXJzaW9uU3BlYzogc3RyaW5nLFxyXG4gICAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHRoaXMuYnVpbGRBZ2VudC5kZWJ1ZyhcclxuICAgICAgICAgICAgYHF1ZXJ5aW5nIHRvb2wgdmVyc2lvbnMgZm9yICR7dG9vbE5hbWV9JHtcclxuICAgICAgICAgICAgICAgIHZlcnNpb25TcGVjID8gYEAke3ZlcnNpb25TcGVjfWAgOiAnJ1xyXG4gICAgICAgICAgICB9ICR7aW5jbHVkZVByZXJlbGVhc2UgPyAnaW5jbHVkaW5nIHByZS1yZWxlYXNlcycgOiAnJ31gXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCBkb3dubG9hZFBhdGggPSBgJHtcclxuICAgICAgICAgICAgRG90bmV0VG9vbC5udWdldFJvb3RcclxuICAgICAgICB9cXVlcnk/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh0b29sTmFtZS50b0xvd2VyQ2FzZSgpKX0mcHJlcmVsZWFzZT0ke1xyXG4gICAgICAgICAgICBpbmNsdWRlUHJlcmVsZWFzZSA/ICd0cnVlJyA6ICdmYWxzZSdcclxuICAgICAgICB9JnNlbVZlckxldmVsPTIuMC4wYFxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0KGRvd25sb2FkUGF0aClcclxuXHJcbiAgICAgICAgaWYgKCFyZXMgfHwgcmVzLm1lc3NhZ2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5OiBzdHJpbmcgPSBhd2FpdCByZXMucmVhZEJvZHkoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGJvZHkpLmRhdGFcclxuXHJcbiAgICAgICAgY29uc3QgdmVyc2lvbnMgPSAoZGF0YVswXS52ZXJzaW9ucyBhcyB7IHZlcnNpb246IHN0cmluZyB9W10pLm1hcChcclxuICAgICAgICAgICAgeCA9PiB4LnZlcnNpb25cclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKCF2ZXJzaW9ucyB8fCAhdmVyc2lvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkQWdlbnQuZGVidWcoYGdvdCB2ZXJzaW9uczogJHt2ZXJzaW9ucy5qb2luKCcsICcpfWApXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcnNpb25NYW5hZ2VyLmV2YWx1YXRlVmVyc2lvbnModmVyc2lvbnMsIHZlcnNpb25TcGVjKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYWNxdWlyZVRvb2woXHJcbiAgICAgICAgdG9vbE5hbWU6IHN0cmluZyxcclxuICAgICAgICB2ZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgaWdub3JlRmFpbGVkU291cmNlczogYm9vbGVhblxyXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCB0ZW1wRGlyZWN0b3J5ID0gYXdhaXQgdGhpcy5idWlsZEFnZW50LmNyZWF0ZVRlbXBEaXIoKVxyXG4gICAgICAgIGxldCBhcmdzID0gWyd0b29sJywgJ2luc3RhbGwnLCB0b29sTmFtZSwgJy0tdG9vbC1wYXRoJywgdGVtcERpcmVjdG9yeV1cclxuXHJcbiAgICAgICAgaWYgKGlnbm9yZUZhaWxlZFNvdXJjZXMpIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKCctLWlnbm9yZS1mYWlsZWQtc291cmNlcycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmVyc2lvbikge1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdGhpcy52ZXJzaW9uTWFuYWdlci5jbGVhblZlcnNpb24odmVyc2lvbilcclxuICAgICAgICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFsnLS12ZXJzaW9uJywgdmVyc2lvbl0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmV4ZWN1dGUoJ2RvdG5ldCcsIGFyZ3MpXHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzdWx0LmNvZGUgPT09IDAgPyAnc3VjY2VzcycgOiAnZmFpbHVyZSdcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzdWx0LmNvZGUgPT09IDAgPyByZXN1bHQuc3Rkb3V0IDogcmVzdWx0LnN0ZGVyclxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkQWdlbnQuZGVidWcoYHRvb2wgaW5zdGFsbCByZXN1bHQ6ICR7c3RhdHVzfSAke21lc3NhZ2V9YClcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgaW5zdGFsbGluZyB0b29sJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmJ1aWxkQWdlbnQuY2FjaGVEaXIodGVtcERpcmVjdG9yeSwgdG9vbE5hbWUsIHZlcnNpb24pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnaW52ZXJzaWZ5J1xuaW1wb3J0IHsgSVZlcnNpb25NYW5hZ2VyLCBWZXJzaW9uTWFuYWdlciB9IGZyb20gJy4vdmVyc2lvbk1hbmFnZXInXG5pbXBvcnQgeyBUWVBFUywgSUJ1aWxkQWdlbnQgfSBmcm9tICcuL21vZGVscydcbmltcG9ydCB7IEJ1aWxkQWdlbnQgfSBmcm9tICcuLi9hZ2VudC9tb2NrL2J1aWxkLWFnZW50J1xuXG5jb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKClcblxuY29udGFpbmVyLmJpbmQ8SVZlcnNpb25NYW5hZ2VyPihUWVBFUy5JVmVyc2lvbk1hbmFnZXIpLnRvKFZlcnNpb25NYW5hZ2VyKVxuY29udGFpbmVyLmJpbmQ8SUJ1aWxkQWdlbnQ+KFRZUEVTLklCdWlsZEFnZW50KS50byhCdWlsZEFnZW50KVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWluZXJcbiIsImltcG9ydCB7IElSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ3R5cGVkLXJlc3QtY2xpZW50L0ludGVyZmFjZXMnXHJcblxyXG5leHBvcnQgY29uc3QgVFlQRVMgPSB7XHJcbiAgICBJQnVpbGRBZ2VudDogU3ltYm9sLmZvcignQnVpbGRBZ2VudCcpLFxyXG4gICAgSURvdG5ldFRvb2w6IFN5bWJvbC5mb3IoJ0RvdG5ldFRvb2wnKSxcclxuICAgIElHaXRWZXJzaW9uVG9vbDogU3ltYm9sLmZvcignR2l0VmVyc2lvblRvb2wnKSxcclxuICAgIElHaXRSZWxlYXNlTWFuYWdlclRvb2w6IFN5bWJvbC5mb3IoJ0dpdFJlbGVhc2VNYW5hZ2VyVG9vbCcpLFxyXG4gICAgSVZlcnNpb25NYW5hZ2VyOiBTeW1ib2wuZm9yKCdWZXJzaW9uTWFuYWdlcicpXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNldHVwRmllbGRzIHtcclxuICAgIGluY2x1ZGVQcmVyZWxlYXNlID0gJ2luY2x1ZGVQcmVyZWxlYXNlJyxcclxuICAgIHZlcnNpb25TcGVjID0gJ3ZlcnNpb25TcGVjJyxcclxuICAgIGlnbm9yZUZhaWxlZFNvdXJjZXMgPSAnaWdub3JlRmFpbGVkU291cmNlcydcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2V0dXBTZXR0aW5ncyB7XHJcbiAgICBbU2V0dXBGaWVsZHMudmVyc2lvblNwZWNdOiBzdHJpbmdcclxuICAgIFtTZXR1cEZpZWxkcy5pbmNsdWRlUHJlcmVsZWFzZV06IGJvb2xlYW5cclxuICAgIFtTZXR1cEZpZWxkcy5pZ25vcmVGYWlsZWRTb3VyY2VzXTogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFeGVjUmVzdWx0IHtcclxuICAgIHN0ZG91dDogc3RyaW5nXHJcbiAgICBzdGRlcnI6IHN0cmluZ1xyXG4gICAgY29kZTogbnVtYmVyXHJcbiAgICBlcnJvcjogRXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQnVpbGRBZ2VudCB7XHJcbiAgICBhZ2VudE5hbWU6IHN0cmluZ1xyXG4gICAgcHJveHlDb25maWd1cmF0aW9uKHVybDogc3RyaW5nKTogSVJlcXVlc3RPcHRpb25zXHJcbiAgICBmaW5kKHRvb2xOYW1lOiBzdHJpbmcsIHZlcnNpb25TcGVjOiBzdHJpbmcsIGFyY2g/OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIGNhY2hlRGlyKFxyXG4gICAgICAgIHNvdXJjZURpcjogc3RyaW5nLFxyXG4gICAgICAgIHRvb2w6IHN0cmluZyxcclxuICAgICAgICB2ZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgYXJjaD86IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+XHJcbiAgICBjcmVhdGVUZW1wRGlyKCk6IFByb21pc2U8c3RyaW5nPlxyXG4gICAgZGVidWcobWVzc2FnZTogc3RyaW5nKTogdm9pZFxyXG4gICAgc2V0RmFpbGVkKG1lc3NhZ2U6IHN0cmluZywgZG9uZT86IGJvb2xlYW4pOiB2b2lkXHJcbiAgICBzZXRTdWNjZWVkZWQobWVzc2FnZTogc3RyaW5nLCBkb25lPzogYm9vbGVhbik6IHZvaWRcclxuICAgIGV4cG9ydFZhcmlhYmxlKG5hbWU6IHN0cmluZywgdmFsOiBzdHJpbmcpOiB2b2lkXHJcbiAgICBnZXRWYXJpYWJsZShuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIGFkZFBhdGgoaW5wdXRQYXRoOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB3aGljaCh0b29sOiBzdHJpbmcsIGNoZWNrPzogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPlxyXG4gICAgZXhlYyhleGVjOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxJRXhlY1Jlc3VsdD5cclxuXHJcbiAgICBnZXRTb3VyY2VEaXIoKTogc3RyaW5nXHJcbiAgICBpc1ZhbGlkSW5wdXRGaWxlKGlucHV0OiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IGJvb2xlYW5cclxuICAgIGZpbGVFeGlzdHMoZmlsZTogc3RyaW5nKTogYm9vbGVhblxyXG4gICAgZGlyZWN0b3J5RXhpc3RzKGZpbGU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHJcbiAgICBzZXRPdXRwdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZFxyXG4gICAgZ2V0SW5wdXQoaW5wdXQ6IHN0cmluZywgcmVxdWlyZWQ/OiBib29sZWFuKTogc3RyaW5nXHJcbiAgICBnZXRMaXN0SW5wdXQoaW5wdXQ6IHN0cmluZywgcmVxdWlyZWQ/OiBib29sZWFuKTogc3RyaW5nW11cclxuICAgIGdldEJvb2xlYW5JbnB1dChpbnB1dDogc3RyaW5nLCByZXF1aXJlZD86IGJvb2xlYW4pOiBib29sZWFuXHJcbn1cclxuIiwiaW1wb3J0IHsgSUJ1aWxkQWdlbnQsIFNldHVwRmllbGRzLCBJU2V0dXBTZXR0aW5ncyB9IGZyb20gJy4vbW9kZWxzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2V0dXBTZXR0aW5ncyhidWlsZEFnZW50OiBJQnVpbGRBZ2VudCk6IElTZXR1cFNldHRpbmdzIHtcclxuICAgICAgICBjb25zdCB2ZXJzaW9uU3BlYyA9IGJ1aWxkQWdlbnQuZ2V0SW5wdXQoU2V0dXBGaWVsZHMudmVyc2lvblNwZWMpXHJcbiAgICAgICAgY29uc3QgaW5jbHVkZVByZXJlbGVhc2UgPSBidWlsZEFnZW50LmdldEJvb2xlYW5JbnB1dChcclxuICAgICAgICAgICAgU2V0dXBGaWVsZHMuaW5jbHVkZVByZXJlbGVhc2VcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc3QgaWdub3JlRmFpbGVkU291cmNlcyA9IGJ1aWxkQWdlbnQuZ2V0Qm9vbGVhbklucHV0KFxyXG4gICAgICAgICAgICBTZXR1cEZpZWxkcy5pZ25vcmVGYWlsZWRTb3VyY2VzXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2ZXJzaW9uU3BlYyxcclxuICAgICAgICAgICAgaW5jbHVkZVByZXJlbGVhc2UsXHJcbiAgICAgICAgICAgIGlnbm9yZUZhaWxlZFNvdXJjZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGNtcCBmcm9tICdzZW12ZXItY29tcGFyZSdcbmltcG9ydCAqIGFzIHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXG5cbmltcG9ydCB7IElCdWlsZEFnZW50LCBUWVBFUyB9IGZyb20gJy4vbW9kZWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElWZXJzaW9uTWFuYWdlciB7XG4gICAgaXNFeHBsaWNpdFZlcnNpb24odmVyc2lvblNwZWM6IHN0cmluZyk6IGJvb2xlYW5cbiAgICBldmFsdWF0ZVZlcnNpb25zKHZlcnNpb25zOiBzdHJpbmdbXSwgdmVyc2lvblNwZWM6IHN0cmluZyk6IHN0cmluZ1xuICAgIGNsZWFuVmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmdcbn1cblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnNpb25NYW5hZ2VyIGltcGxlbWVudHMgSVZlcnNpb25NYW5hZ2VyIHtcbiAgICBwcml2YXRlIGJ1aWxkQWdlbnQ6IElCdWlsZEFnZW50XG4gICAgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5JQnVpbGRBZ2VudCkgYnVpbGRBZ2VudDogSUJ1aWxkQWdlbnQpIHtcbiAgICAgICAgdGhpcy5idWlsZEFnZW50ID0gYnVpbGRBZ2VudFxuICAgIH1cblxuICAgIHB1YmxpYyBpc0V4cGxpY2l0VmVyc2lvbih2ZXJzaW9uU3BlYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGMgPSBzZW12ZXIuY2xlYW4odmVyc2lvblNwZWMpXG4gICAgICAgIHRoaXMuYnVpbGRBZ2VudC5kZWJ1ZygnaXNFeHBsaWNpdDogJyArIGMpXG5cbiAgICAgICAgY29uc3QgdmFsaWQgPSBzZW12ZXIudmFsaWQoYykgIT0gbnVsbFxuICAgICAgICB0aGlzLmJ1aWxkQWdlbnQuZGVidWcoJ2V4cGxpY2l0PyAnICsgdmFsaWQpXG5cbiAgICAgICAgcmV0dXJuIHZhbGlkXG4gICAgfVxuXG4gICAgcHVibGljIGV2YWx1YXRlVmVyc2lvbnModmVyc2lvbnM6IHN0cmluZ1tdLCB2ZXJzaW9uU3BlYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHZlcnNpb246IHN0cmluZ1xuICAgICAgICB0aGlzLmJ1aWxkQWdlbnQuZGVidWcoJ2V2YWx1YXRpbmcgJyArIHZlcnNpb25zLmxlbmd0aCArICcgdmVyc2lvbnMnKVxuICAgICAgICB2ZXJzaW9ucyA9IHZlcnNpb25zLnNvcnQoY21wKVxuICAgICAgICBmb3IgKGxldCBpID0gdmVyc2lvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBvdGVudGlhbDogc3RyaW5nID0gdmVyc2lvbnNbaV1cbiAgICAgICAgICAgIGNvbnN0IHNhdGlzZmllZDogYm9vbGVhbiA9IHNlbXZlci5zYXRpc2ZpZXMocG90ZW50aWFsLCB2ZXJzaW9uU3BlYylcbiAgICAgICAgICAgIGlmIChzYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uID0gcG90ZW50aWFsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkQWdlbnQuZGVidWcoJ21hdGNoZWQ6ICcgKyB2ZXJzaW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWlsZEFnZW50LmRlYnVnKCdtYXRjaCBub3QgZm91bmQnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnNpb25cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYW5WZXJzaW9uKHZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMuYnVpbGRBZ2VudC5kZWJ1ZygnY2xlYW5pbmc6ICcgKyB2ZXJzaW9uKVxuICAgICAgICByZXR1cm4gc2VtdmVyLmNsZWFuKHZlcnNpb24pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSUJ1aWxkQWdlbnQsIFRZUEVTIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbHMnXHJcbmltcG9ydCB7IFNldHRpbmdzIGFzIENvbW1vblNldHRpbmdzIH0gZnJvbSAnLi4vLi4vY29yZS9zZXR0aW5ncydcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi90b29scy9naXR2ZXJzaW9uL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJR2l0VmVyc2lvblRvb2wsIEdpdFZlcnNpb25Ub29sIH0gZnJvbSAnLi4vLi4vdG9vbHMvZ2l0dmVyc2lvbi90b29sJ1xyXG5pbXBvcnQge1xyXG4gICAgR2l0VmVyc2lvblNldHRpbmdzLFxyXG4gICAgR2l0VmVyc2lvbk91dHB1dFxyXG59IGZyb20gJy4uLy4uL3Rvb2xzL2dpdHZlcnNpb24vbW9kZWxzJ1xyXG5cclxuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi8uLi9jb3JlL2lvYydcclxuXHJcbmNvbnRhaW5lci5iaW5kPElHaXRWZXJzaW9uVG9vbD4oVFlQRVMuSUdpdFZlcnNpb25Ub29sKS50byhHaXRWZXJzaW9uVG9vbClcclxuXHJcbmNvbnN0IGdpdFZlcnNpb25Ub29sID0gY29udGFpbmVyLmdldDxJR2l0VmVyc2lvblRvb2w+KFRZUEVTLklHaXRWZXJzaW9uVG9vbClcclxuY29uc3QgYnVpbGRBZ2VudCA9IGNvbnRhaW5lci5nZXQ8SUJ1aWxkQWdlbnQ+KFRZUEVTLklCdWlsZEFnZW50KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBnaXRWZXJzaW9uVG9vbC5kaXNhYmxlVGVsZW1ldHJ5KClcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBDb21tb25TZXR0aW5ncy5nZXRTZXR1cFNldHRpbmdzKGJ1aWxkQWdlbnQpXHJcblxyXG4gICAgICAgIGF3YWl0IGdpdFZlcnNpb25Ub29sLmluc3RhbGwoc2V0dGluZ3MpXHJcblxyXG4gICAgICAgIGJ1aWxkQWdlbnQuc2V0U3VjY2VlZGVkKCdHaXRWZXJzaW9uIGluc3RhbGxlZCBzdWNjZXNzZnVsbHknLCB0cnVlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBidWlsZEFnZW50LnNldEZhaWxlZChlcnJvci5tZXNzYWdlLCB0cnVlKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBnaXRWZXJzaW9uVG9vbC5kaXNhYmxlVGVsZW1ldHJ5KClcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3M6IEdpdFZlcnNpb25TZXR0aW5ncyA9IFNldHRpbmdzLmdldEdpdFZlcnNpb25TZXR0aW5ncyhcclxuICAgICAgICAgICAgYnVpbGRBZ2VudFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2l0VmVyc2lvblRvb2wucnVuKHNldHRpbmdzKVxyXG4gICAgICAgIGNvbnN0IHsgc3Rkb3V0IH0gPSByZXN1bHRcclxuICAgICAgICBjb25zdCBqc29uT3V0cHV0ID0gc3Rkb3V0LnN1YnN0cmluZyhcclxuICAgICAgICAgICAgc3Rkb3V0Lmxhc3RJbmRleE9mKCd7JyksXHJcbiAgICAgICAgICAgIHN0ZG91dC5sYXN0SW5kZXhPZignfScpICsgMVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgZ2l0dmVyc2lvbiA9IEpTT04ucGFyc2UoanNvbk91dHB1dCkgYXMgR2l0VmVyc2lvbk91dHB1dFxyXG4gICAgICAgIGdpdFZlcnNpb25Ub29sLndyaXRlR2l0VmVyc2lvblRvQWdlbnQoZ2l0dmVyc2lvbilcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkQWdlbnQuc2V0U3VjY2VlZGVkKCdHaXRWZXJzaW9uIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseScsIHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnVpbGRBZ2VudC5zZXRGYWlsZWQocmVzdWx0LmVycm9yLm1lc3NhZ2UsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBidWlsZEFnZW50LnNldEZhaWxlZChlcnJvciwgdHJ1ZSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBFeGVjdXRlRmllbGRzIHtcbiAgICB0YXJnZXRQYXRoID0gJ3RhcmdldFBhdGgnLFxuICAgIHVzZUNvbmZpZ0ZpbGUgPSAndXNlQ29uZmlnRmlsZScsXG4gICAgY29uZmlnRmlsZVBhdGggPSAnY29uZmlnRmlsZVBhdGgnLFxuICAgIHVwZGF0ZUFzc2VtYmx5SW5mbyA9ICd1cGRhdGVBc3NlbWJseUluZm8nLFxuICAgIHVwZGF0ZUFzc2VtYmx5SW5mb0ZpbGVuYW1lID0gJ3VwZGF0ZUFzc2VtYmx5SW5mb0ZpbGVuYW1lJyxcbiAgICBhZGRpdGlvbmFsQXJndW1lbnRzID0gJ2FkZGl0aW9uYWxBcmd1bWVudHMnLFxuICAgIHNyY0RpciA9ICdzcmNEaXInXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0VmVyc2lvblNldHRpbmdzIHtcbiAgICBbRXhlY3V0ZUZpZWxkcy50YXJnZXRQYXRoXTogc3RyaW5nXG4gICAgW0V4ZWN1dGVGaWVsZHMudXNlQ29uZmlnRmlsZV06IGJvb2xlYW5cbiAgICBbRXhlY3V0ZUZpZWxkcy5jb25maWdGaWxlUGF0aF06IHN0cmluZ1xuICAgIFtFeGVjdXRlRmllbGRzLnVwZGF0ZUFzc2VtYmx5SW5mb106IGJvb2xlYW5cbiAgICBbRXhlY3V0ZUZpZWxkcy51cGRhdGVBc3NlbWJseUluZm9GaWxlbmFtZV06IHN0cmluZ1xuICAgIFtFeGVjdXRlRmllbGRzLmFkZGl0aW9uYWxBcmd1bWVudHNdOiBzdHJpbmdcbiAgICBbRXhlY3V0ZUZpZWxkcy5zcmNEaXJdOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHaXRWZXJzaW9uT3V0cHV0IHtcbiAgICBNYWpvcjogbnVtYmVyXG4gICAgTWlub3I6IG51bWJlclxuICAgIFBhdGNoOiBudW1iZXJcbiAgICBQcmVSZWxlYXNlVGFnOiBzdHJpbmdcbiAgICBQcmVSZWxlYXNlVGFnV2l0aERhc2g6IHN0cmluZ1xuICAgIFByZVJlbGVhc2VMYWJlbDogc3RyaW5nXG4gICAgUHJlUmVsZWFzZU51bWJlcjogbnVtYmVyXG4gICAgV2VpZ2h0ZWRQcmVSZWxlYXNlTnVtYmVyOiBudW1iZXJcbiAgICBCdWlsZE1ldGFEYXRhOiBudW1iZXJcbiAgICBCdWlsZE1ldGFEYXRhUGFkZGVkOiBzdHJpbmdcbiAgICBGdWxsQnVpbGRNZXRhRGF0YTogc3RyaW5nXG4gICAgTWFqb3JNaW5vclBhdGNoOiBzdHJpbmdcbiAgICBTZW1WZXI6IHN0cmluZ1xuICAgIExlZ2FjeVNlbVZlcjogc3RyaW5nXG4gICAgTGVnYWN5U2VtVmVyUGFkZGVkOiBzdHJpbmdcbiAgICBBc3NlbWJseVNlbVZlcjogc3RyaW5nXG4gICAgQXNzZW1ibHlTZW1GaWxlVmVyOiBzdHJpbmdcbiAgICBGdWxsU2VtVmVyOiBzdHJpbmdcbiAgICBJbmZvcm1hdGlvbmFsVmVyc2lvbjogc3RyaW5nXG4gICAgQnJhbmNoTmFtZTogc3RyaW5nXG4gICAgRXNjYXBlZEJyYW5jaE5hbWU6IHN0cmluZ1xuICAgIFNoYTogc3RyaW5nXG4gICAgU2hvcnRTaGE6IHN0cmluZ1xuICAgIE51R2V0VmVyc2lvblYyOiBzdHJpbmdcbiAgICBOdUdldFZlcnNpb246IHN0cmluZ1xuICAgIE51R2V0UHJlUmVsZWFzZVRhZ1YyOiBzdHJpbmdcbiAgICBOdUdldFByZVJlbGVhc2VUYWc6IHN0cmluZ1xuICAgIFZlcnNpb25Tb3VyY2VTaGE6IHN0cmluZ1xuICAgIENvbW1pdHNTaW5jZVZlcnNpb25Tb3VyY2U6IG51bWJlclxuICAgIENvbW1pdHNTaW5jZVZlcnNpb25Tb3VyY2VQYWRkZWQ6IHN0cmluZ1xuICAgIFVuY29tbWl0dGVkQ2hhbmdlczogbnVtYmVyXG4gICAgQ29tbWl0RGF0ZTogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJQnVpbGRBZ2VudCB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWxzJ1xuXG5pbXBvcnQgeyBHaXRWZXJzaW9uU2V0dGluZ3MsIEV4ZWN1dGVGaWVsZHMgfSBmcm9tICcuL21vZGVscydcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldEdpdFZlcnNpb25TZXR0aW5ncyhcbiAgICAgICAgYnVpbGRBZ2VudDogSUJ1aWxkQWdlbnRcbiAgICApOiBHaXRWZXJzaW9uU2V0dGluZ3Mge1xuICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gYnVpbGRBZ2VudC5nZXRJbnB1dChFeGVjdXRlRmllbGRzLnRhcmdldFBhdGgpXG5cbiAgICAgICAgY29uc3QgdXNlQ29uZmlnRmlsZSA9IGJ1aWxkQWdlbnQuZ2V0Qm9vbGVhbklucHV0KFxuICAgICAgICAgICAgRXhlY3V0ZUZpZWxkcy51c2VDb25maWdGaWxlXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgY29uZmlnRmlsZVBhdGggPSBidWlsZEFnZW50LmdldElucHV0KEV4ZWN1dGVGaWVsZHMuY29uZmlnRmlsZVBhdGgpXG5cbiAgICAgICAgY29uc3QgdXBkYXRlQXNzZW1ibHlJbmZvID0gYnVpbGRBZ2VudC5nZXRCb29sZWFuSW5wdXQoXG4gICAgICAgICAgICBFeGVjdXRlRmllbGRzLnVwZGF0ZUFzc2VtYmx5SW5mb1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFzc2VtYmx5SW5mb0ZpbGVuYW1lID0gYnVpbGRBZ2VudC5nZXRJbnB1dChcbiAgICAgICAgICAgIEV4ZWN1dGVGaWVsZHMudXBkYXRlQXNzZW1ibHlJbmZvRmlsZW5hbWVcbiAgICAgICAgKVxuXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxBcmd1bWVudHMgPSBidWlsZEFnZW50LmdldElucHV0KFxuICAgICAgICAgICAgRXhlY3V0ZUZpZWxkcy5hZGRpdGlvbmFsQXJndW1lbnRzXG4gICAgICAgIClcblxuICAgICAgICBjb25zdCBzcmNEaXIgPSBidWlsZEFnZW50LmdldFNvdXJjZURpcigpPy5yZXBsYWNlKC9cXFxcL2csICcvJylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0UGF0aCxcbiAgICAgICAgICAgIHVzZUNvbmZpZ0ZpbGUsXG4gICAgICAgICAgICBjb25maWdGaWxlUGF0aCxcbiAgICAgICAgICAgIHVwZGF0ZUFzc2VtYmx5SW5mbyxcbiAgICAgICAgICAgIHVwZGF0ZUFzc2VtYmx5SW5mb0ZpbGVuYW1lLFxuICAgICAgICAgICAgYWRkaXRpb25hbEFyZ3VtZW50cyxcbiAgICAgICAgICAgIHNyY0RpclxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSUV4ZWNSZXN1bHQsIElCdWlsZEFnZW50LCBUWVBFUywgSVNldHVwU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVscydcclxuaW1wb3J0IHsgRG90bmV0VG9vbCwgSURvdG5ldFRvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2RvdG5ldC10b29sJ1xyXG5pbXBvcnQgeyBHaXRWZXJzaW9uU2V0dGluZ3MsIEdpdFZlcnNpb25PdXRwdXQgfSBmcm9tICcuL21vZGVscydcclxuaW1wb3J0IHsgSVZlcnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vY29yZS92ZXJzaW9uTWFuYWdlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdpdFZlcnNpb25Ub29sIGV4dGVuZHMgSURvdG5ldFRvb2wge1xyXG4gICAgaW5zdGFsbChzZXR1cFNldHRpbmdzOiBJU2V0dXBTZXR0aW5ncyk6IFByb21pc2U8dm9pZD5cclxuICAgIHJ1bihvcHRpb25zOiBHaXRWZXJzaW9uU2V0dGluZ3MpOiBQcm9taXNlPElFeGVjUmVzdWx0PlxyXG4gICAgd3JpdGVHaXRWZXJzaW9uVG9BZ2VudChnaXR2ZXJzaW9uOiBHaXRWZXJzaW9uT3V0cHV0KTogdm9pZFxyXG59XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHaXRWZXJzaW9uVG9vbCBleHRlbmRzIERvdG5ldFRvb2wgaW1wbGVtZW50cyBJR2l0VmVyc2lvblRvb2wge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5JQnVpbGRBZ2VudCkgYnVpbGRBZ2VudDogSUJ1aWxkQWdlbnQsXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5JVmVyc2lvbk1hbmFnZXIpIHZlcnNpb25NYW5hZ2VyOiBJVmVyc2lvbk1hbmFnZXJcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGJ1aWxkQWdlbnQsIHZlcnNpb25NYW5hZ2VyKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbnN0YWxsKHNldHVwU2V0dGluZ3M6IElTZXR1cFNldHRpbmdzKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy50b29sSW5zdGFsbChcclxuICAgICAgICAgICAgJ0dpdFZlcnNpb24uVG9vbCcsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBzZXR1cFNldHRpbmdzXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW4ob3B0aW9uczogR2l0VmVyc2lvblNldHRpbmdzKTogUHJvbWlzZTxJRXhlY1Jlc3VsdD4ge1xyXG4gICAgICAgIGNvbnN0IHdvcmtEaXIgPSB0aGlzLmdldFJlcG9EaXIob3B0aW9ucy50YXJnZXRQYXRoKVxyXG5cclxuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5nZXRBcmd1bWVudHMod29ya0Rpciwgb3B0aW9ucylcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSgnZG90bmV0LWdpdHZlcnNpb24nLCBhcmdzKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVwb0Rpcih0YXJnZXRQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB3b3JrRGlyOiBzdHJpbmdcclxuICAgICAgICBjb25zdCBzcmNEaXIgPSB0aGlzLmJ1aWxkQWdlbnQuZ2V0U291cmNlRGlyKCkgfHwgJy4nXHJcbiAgICAgICAgaWYgKCF0YXJnZXRQYXRoKSB7XHJcbiAgICAgICAgICAgIHdvcmtEaXIgPSBzcmNEaXJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWlsZEFnZW50LmRpcmVjdG9yeUV4aXN0cyh0YXJnZXRQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgd29ya0RpciA9IHRhcmdldFBhdGhcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlyZWN0b3J5IG5vdCBmb3VuZCBhdCAnICsgdGFyZ2V0UGF0aClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd29ya0Rpci5yZXBsYWNlKC9cXFxcL2csICcvJylcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFyZ3VtZW50cyhcclxuICAgICAgICB3b3JrRGlyOiBzdHJpbmcsXHJcbiAgICAgICAgb3B0aW9uczogR2l0VmVyc2lvblNldHRpbmdzXHJcbiAgICApOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSBbd29ya0RpciwgJy9vdXRwdXQnLCAnanNvbicsICcvb3V0cHV0JywgJ2J1aWxkc2VydmVyJ11cclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB1c2VDb25maWdGaWxlLFxyXG4gICAgICAgICAgICBjb25maWdGaWxlUGF0aCxcclxuICAgICAgICAgICAgdXBkYXRlQXNzZW1ibHlJbmZvLFxyXG4gICAgICAgICAgICB1cGRhdGVBc3NlbWJseUluZm9GaWxlbmFtZSxcclxuICAgICAgICAgICAgYWRkaXRpb25hbEFyZ3VtZW50c1xyXG4gICAgICAgIH0gPSBvcHRpb25zXHJcblxyXG4gICAgICAgIGlmICh1c2VDb25maWdGaWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBZ2VudC5pc1ZhbGlkSW5wdXRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICdjb25maWdGaWxlUGF0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnRmlsZVBhdGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goJy9jb25maWcnLCBjb25maWdGaWxlUGF0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAnR2l0VmVyc2lvbiBjb25maWd1cmF0aW9uIGZpbGUgbm90IGZvdW5kIGF0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdGaWxlUGF0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cGRhdGVBc3NlbWJseUluZm8pIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKCcvdXBkYXRlYXNzZW1ibHlpbmZvJylcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc3BlY2lmeSAndXBkYXRlQXNzZW1ibHlJbmZvJyB3aXRob3V0ICd1cGRhdGVBc3NlbWJseUluZm9GaWxlbmFtZScuXHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVBc3NlbWJseUluZm9GaWxlbmFtZT8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBZ2VudC5pc1ZhbGlkSW5wdXRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXBkYXRlQXNzZW1ibHlJbmZvRmlsZW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVBc3NlbWJseUluZm9GaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh1cGRhdGVBc3NlbWJseUluZm9GaWxlbmFtZSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXNzZW1ibHlJbmZvRmlsZW5hbWUgZmlsZSBub3QgZm91bmQgYXQgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVBc3NlbWJseUluZm9GaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxBcmd1bWVudHMpIHtcclxuICAgICAgICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KHRoaXMuYXJnU3RyaW5nVG9BcnJheShhZGRpdGlvbmFsQXJndW1lbnRzKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3NcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVHaXRWZXJzaW9uVG9BZ2VudChnaXR2ZXJzaW9uOiBHaXRWZXJzaW9uT3V0cHV0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhnaXR2ZXJzaW9uKVxyXG4gICAgICAgIGxldCBnaXR2ZXJzaW9uT3V0cHV0ID0gPGFueT5naXR2ZXJzaW9uXHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnRvQ2FtZWxDYXNlKHByb3BlcnR5KVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdpdHZlcnNpb25PdXRwdXRbcHJvcGVydHldXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRBZ2VudC5zZXRPdXRwdXQobmFtZSwgdmFsdWUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFyZ1N0cmluZ1RvQXJyYXkoYXJnU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgdmFyIGFyZ3M6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgICAgICAgdmFyIGluUXVvdGVzID0gZmFsc2VcclxuICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlXHJcbiAgICAgICAgdmFyIGxhc3RDaGFyV2FzU3BhY2UgPSB0cnVlXHJcbiAgICAgICAgdmFyIGFyZyA9ICcnXHJcblxyXG4gICAgICAgIHZhciBhcHBlbmQgPSBmdW5jdGlvbiAoYzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIG9ubHkgZXNjYXBlIGRvdWJsZSBxdW90ZXMuXHJcbiAgICAgICAgICAgIGlmIChlc2NhcGVkICYmIGMgIT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIGFyZyArPSAnXFxcXCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXJnICs9IGNcclxuICAgICAgICAgICAgZXNjYXBlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ1N0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IGFyZ1N0cmluZy5jaGFyQXQoaSlcclxuXHJcbiAgICAgICAgICAgIGlmIChjID09PSAnICcgJiYgIWluUXVvdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhc3RDaGFyV2FzU3BhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJnKVxyXG4gICAgICAgICAgICAgICAgICAgIGFyZyA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYXN0Q2hhcldhc1NwYWNlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhc3RDaGFyV2FzU3BhY2UgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYyA9PT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlc2NhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5RdW90ZXMgPSAhaW5RdW90ZXNcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kKGMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYyA9PT0gJ1xcXFwnICYmIGVzY2FwZWQpIHtcclxuICAgICAgICAgICAgICAgIGFwcGVuZChjKVxyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGMgPT09ICdcXFxcJyAmJiBpblF1b3Rlcykge1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFwcGVuZChjKVxyXG4gICAgICAgICAgICBsYXN0Q2hhcldhc1NwYWNlID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGFzdENoYXJXYXNTcGFjZSkge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goYXJnLnRyaW0oKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcmdzXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b0NhbWVsQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZShcclxuICAgICAgICAgICAgLyg/Ol5cXHd8W0EtWl18XFxiXFx3fFxccyspL2csXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgrbWF0Y2ggPT09IDApIHJldHVybiAnJyAvLyBvciBpZiAoL1xccysvLnRlc3QobWF0Y2gpKSBmb3Igd2hpdGUgc3BhY2VzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gMCA/IG1hdGNoLnRvTG93ZXJDYXNlKCkgOiBtYXRjaC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi90dW5uZWwnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xudmFyIHRscyA9IHJlcXVpcmUoJ3RscycpO1xudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG52YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cblxuZXhwb3J0cy5odHRwT3Zlckh0dHAgPSBodHRwT3Zlckh0dHA7XG5leHBvcnRzLmh0dHBzT3Zlckh0dHAgPSBodHRwc092ZXJIdHRwO1xuZXhwb3J0cy5odHRwT3Zlckh0dHBzID0gaHR0cE92ZXJIdHRwcztcbmV4cG9ydHMuaHR0cHNPdmVySHR0cHMgPSBodHRwc092ZXJIdHRwcztcblxuXG5mdW5jdGlvbiBodHRwT3Zlckh0dHAob3B0aW9ucykge1xuICB2YXIgYWdlbnQgPSBuZXcgVHVubmVsaW5nQWdlbnQob3B0aW9ucyk7XG4gIGFnZW50LnJlcXVlc3QgPSBodHRwLnJlcXVlc3Q7XG4gIHJldHVybiBhZ2VudDtcbn1cblxuZnVuY3Rpb24gaHR0cHNPdmVySHR0cChvcHRpb25zKSB7XG4gIHZhciBhZ2VudCA9IG5ldyBUdW5uZWxpbmdBZ2VudChvcHRpb25zKTtcbiAgYWdlbnQucmVxdWVzdCA9IGh0dHAucmVxdWVzdDtcbiAgYWdlbnQuY3JlYXRlU29ja2V0ID0gY3JlYXRlU2VjdXJlU29ja2V0O1xuICBhZ2VudC5kZWZhdWx0UG9ydCA9IDQ0MztcbiAgcmV0dXJuIGFnZW50O1xufVxuXG5mdW5jdGlvbiBodHRwT3Zlckh0dHBzKG9wdGlvbnMpIHtcbiAgdmFyIGFnZW50ID0gbmV3IFR1bm5lbGluZ0FnZW50KG9wdGlvbnMpO1xuICBhZ2VudC5yZXF1ZXN0ID0gaHR0cHMucmVxdWVzdDtcbiAgcmV0dXJuIGFnZW50O1xufVxuXG5mdW5jdGlvbiBodHRwc092ZXJIdHRwcyhvcHRpb25zKSB7XG4gIHZhciBhZ2VudCA9IG5ldyBUdW5uZWxpbmdBZ2VudChvcHRpb25zKTtcbiAgYWdlbnQucmVxdWVzdCA9IGh0dHBzLnJlcXVlc3Q7XG4gIGFnZW50LmNyZWF0ZVNvY2tldCA9IGNyZWF0ZVNlY3VyZVNvY2tldDtcbiAgYWdlbnQuZGVmYXVsdFBvcnQgPSA0NDM7XG4gIHJldHVybiBhZ2VudDtcbn1cblxuXG5mdW5jdGlvbiBUdW5uZWxpbmdBZ2VudChvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgc2VsZi5wcm94eU9wdGlvbnMgPSBzZWxmLm9wdGlvbnMucHJveHkgfHwge307XG4gIHNlbGYubWF4U29ja2V0cyA9IHNlbGYub3B0aW9ucy5tYXhTb2NrZXRzIHx8IGh0dHAuQWdlbnQuZGVmYXVsdE1heFNvY2tldHM7XG4gIHNlbGYucmVxdWVzdHMgPSBbXTtcbiAgc2VsZi5zb2NrZXRzID0gW107XG5cbiAgc2VsZi5vbignZnJlZScsIGZ1bmN0aW9uIG9uRnJlZShzb2NrZXQsIGhvc3QsIHBvcnQsIGxvY2FsQWRkcmVzcykge1xuICAgIHZhciBvcHRpb25zID0gdG9PcHRpb25zKGhvc3QsIHBvcnQsIGxvY2FsQWRkcmVzcyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYucmVxdWVzdHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBwZW5kaW5nID0gc2VsZi5yZXF1ZXN0c1tpXTtcbiAgICAgIGlmIChwZW5kaW5nLmhvc3QgPT09IG9wdGlvbnMuaG9zdCAmJiBwZW5kaW5nLnBvcnQgPT09IG9wdGlvbnMucG9ydCkge1xuICAgICAgICAvLyBEZXRlY3QgdGhlIHJlcXVlc3QgdG8gY29ubmVjdCBzYW1lIG9yaWdpbiBzZXJ2ZXIsXG4gICAgICAgIC8vIHJldXNlIHRoZSBjb25uZWN0aW9uLlxuICAgICAgICBzZWxmLnJlcXVlc3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcGVuZGluZy5yZXF1ZXN0Lm9uU29ja2V0KHNvY2tldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ja2V0LmRlc3Ryb3koKTtcbiAgICBzZWxmLnJlbW92ZVNvY2tldChzb2NrZXQpO1xuICB9KTtcbn1cbnV0aWwuaW5oZXJpdHMoVHVubmVsaW5nQWdlbnQsIGV2ZW50cy5FdmVudEVtaXR0ZXIpO1xuXG5UdW5uZWxpbmdBZ2VudC5wcm90b3R5cGUuYWRkUmVxdWVzdCA9IGZ1bmN0aW9uIGFkZFJlcXVlc3QocmVxLCBob3N0LCBwb3J0LCBsb2NhbEFkZHJlc3MpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh7cmVxdWVzdDogcmVxfSwgc2VsZi5vcHRpb25zLCB0b09wdGlvbnMoaG9zdCwgcG9ydCwgbG9jYWxBZGRyZXNzKSk7XG5cbiAgaWYgKHNlbGYuc29ja2V0cy5sZW5ndGggPj0gdGhpcy5tYXhTb2NrZXRzKSB7XG4gICAgLy8gV2UgYXJlIG92ZXIgbGltaXQgc28gd2UnbGwgYWRkIGl0IHRvIHRoZSBxdWV1ZS5cbiAgICBzZWxmLnJlcXVlc3RzLnB1c2gob3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgd2UgYXJlIHVuZGVyIG1heFNvY2tldHMgY3JlYXRlIGEgbmV3IG9uZS5cbiAgc2VsZi5jcmVhdGVTb2NrZXQob3B0aW9ucywgZnVuY3Rpb24oc29ja2V0KSB7XG4gICAgc29ja2V0Lm9uKCdmcmVlJywgb25GcmVlKTtcbiAgICBzb2NrZXQub24oJ2Nsb3NlJywgb25DbG9zZU9yUmVtb3ZlKTtcbiAgICBzb2NrZXQub24oJ2FnZW50UmVtb3ZlJywgb25DbG9zZU9yUmVtb3ZlKTtcbiAgICByZXEub25Tb2NrZXQoc29ja2V0KTtcblxuICAgIGZ1bmN0aW9uIG9uRnJlZSgpIHtcbiAgICAgIHNlbGYuZW1pdCgnZnJlZScsIHNvY2tldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZU9yUmVtb3ZlKGVycikge1xuICAgICAgc2VsZi5yZW1vdmVTb2NrZXQoc29ja2V0KTtcbiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZnJlZScsIG9uRnJlZSk7XG4gICAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25DbG9zZU9yUmVtb3ZlKTtcbiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignYWdlbnRSZW1vdmUnLCBvbkNsb3NlT3JSZW1vdmUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5UdW5uZWxpbmdBZ2VudC5wcm90b3R5cGUuY3JlYXRlU29ja2V0ID0gZnVuY3Rpb24gY3JlYXRlU29ja2V0KG9wdGlvbnMsIGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHBsYWNlaG9sZGVyID0ge307XG4gIHNlbGYuc29ja2V0cy5wdXNoKHBsYWNlaG9sZGVyKTtcblxuICB2YXIgY29ubmVjdE9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoe30sIHNlbGYucHJveHlPcHRpb25zLCB7XG4gICAgbWV0aG9kOiAnQ09OTkVDVCcsXG4gICAgcGF0aDogb3B0aW9ucy5ob3N0ICsgJzonICsgb3B0aW9ucy5wb3J0LFxuICAgIGFnZW50OiBmYWxzZSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBob3N0OiBvcHRpb25zLmhvc3QgKyAnOicgKyBvcHRpb25zLnBvcnRcbiAgICB9XG4gIH0pO1xuICBpZiAob3B0aW9ucy5sb2NhbEFkZHJlc3MpIHtcbiAgICBjb25uZWN0T3B0aW9ucy5sb2NhbEFkZHJlc3MgPSBvcHRpb25zLmxvY2FsQWRkcmVzcztcbiAgfVxuICBpZiAoY29ubmVjdE9wdGlvbnMucHJveHlBdXRoKSB7XG4gICAgY29ubmVjdE9wdGlvbnMuaGVhZGVycyA9IGNvbm5lY3RPcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgY29ubmVjdE9wdGlvbnMuaGVhZGVyc1snUHJveHktQXV0aG9yaXphdGlvbiddID0gJ0Jhc2ljICcgK1xuICAgICAgICBuZXcgQnVmZmVyKGNvbm5lY3RPcHRpb25zLnByb3h5QXV0aCkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICB9XG5cbiAgZGVidWcoJ21ha2luZyBDT05ORUNUIHJlcXVlc3QnKTtcbiAgdmFyIGNvbm5lY3RSZXEgPSBzZWxmLnJlcXVlc3QoY29ubmVjdE9wdGlvbnMpO1xuICBjb25uZWN0UmVxLnVzZUNodW5rZWRFbmNvZGluZ0J5RGVmYXVsdCA9IGZhbHNlOyAvLyBmb3IgdjAuNlxuICBjb25uZWN0UmVxLm9uY2UoJ3Jlc3BvbnNlJywgb25SZXNwb25zZSk7IC8vIGZvciB2MC42XG4gIGNvbm5lY3RSZXEub25jZSgndXBncmFkZScsIG9uVXBncmFkZSk7ICAgLy8gZm9yIHYwLjZcbiAgY29ubmVjdFJlcS5vbmNlKCdjb25uZWN0Jywgb25Db25uZWN0KTsgICAvLyBmb3IgdjAuNyBvciBsYXRlclxuICBjb25uZWN0UmVxLm9uY2UoJ2Vycm9yJywgb25FcnJvcik7XG4gIGNvbm5lY3RSZXEuZW5kKCk7XG5cbiAgZnVuY3Rpb24gb25SZXNwb25zZShyZXMpIHtcbiAgICAvLyBWZXJ5IGhhY2t5LiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBodHRwLXBhcnNlciBsZWFrcy5cbiAgICByZXMudXBncmFkZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvblVwZ3JhZGUocmVzLCBzb2NrZXQsIGhlYWQpIHtcbiAgICAvLyBIYWNreS5cbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgb25Db25uZWN0KHJlcywgc29ja2V0LCBoZWFkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdChyZXMsIHNvY2tldCwgaGVhZCkge1xuICAgIGNvbm5lY3RSZXEucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgaWYgKHJlcy5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgIGRlYnVnKCd0dW5uZWxpbmcgc29ja2V0IGNvdWxkIG5vdCBiZSBlc3RhYmxpc2hlZCwgc3RhdHVzQ29kZT0lZCcsXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlKTtcbiAgICAgIHNvY2tldC5kZXN0cm95KCk7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ3R1bm5lbGluZyBzb2NrZXQgY291bGQgbm90IGJlIGVzdGFibGlzaGVkLCAnICtcbiAgICAgICAgJ3N0YXR1c0NvZGU9JyArIHJlcy5zdGF0dXNDb2RlKTtcbiAgICAgIGVycm9yLmNvZGUgPSAnRUNPTk5SRVNFVCc7XG4gICAgICBvcHRpb25zLnJlcXVlc3QuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICBzZWxmLnJlbW92ZVNvY2tldChwbGFjZWhvbGRlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoZWFkLmxlbmd0aCA+IDApIHtcbiAgICAgIGRlYnVnKCdnb3QgaWxsZWdhbCByZXNwb25zZSBib2R5IGZyb20gcHJveHknKTtcbiAgICAgIHNvY2tldC5kZXN0cm95KCk7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ2dvdCBpbGxlZ2FsIHJlc3BvbnNlIGJvZHkgZnJvbSBwcm94eScpO1xuICAgICAgZXJyb3IuY29kZSA9ICdFQ09OTlJFU0VUJztcbiAgICAgIG9wdGlvbnMucmVxdWVzdC5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgIHNlbGYucmVtb3ZlU29ja2V0KHBsYWNlaG9sZGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVidWcoJ3R1bm5lbGluZyBjb25uZWN0aW9uIGhhcyBlc3RhYmxpc2hlZCcpO1xuICAgIHNlbGYuc29ja2V0c1tzZWxmLnNvY2tldHMuaW5kZXhPZihwbGFjZWhvbGRlcildID0gc29ja2V0O1xuICAgIHJldHVybiBjYihzb2NrZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25FcnJvcihjYXVzZSkge1xuICAgIGNvbm5lY3RSZXEucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICBkZWJ1ZygndHVubmVsaW5nIHNvY2tldCBjb3VsZCBub3QgYmUgZXN0YWJsaXNoZWQsIGNhdXNlPSVzXFxuJyxcbiAgICAgICAgICBjYXVzZS5tZXNzYWdlLCBjYXVzZS5zdGFjayk7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCd0dW5uZWxpbmcgc29ja2V0IGNvdWxkIG5vdCBiZSBlc3RhYmxpc2hlZCwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdjYXVzZT0nICsgY2F1c2UubWVzc2FnZSk7XG4gICAgZXJyb3IuY29kZSA9ICdFQ09OTlJFU0VUJztcbiAgICBvcHRpb25zLnJlcXVlc3QuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgc2VsZi5yZW1vdmVTb2NrZXQocGxhY2Vob2xkZXIpO1xuICB9XG59O1xuXG5UdW5uZWxpbmdBZ2VudC5wcm90b3R5cGUucmVtb3ZlU29ja2V0ID0gZnVuY3Rpb24gcmVtb3ZlU29ja2V0KHNvY2tldCkge1xuICB2YXIgcG9zID0gdGhpcy5zb2NrZXRzLmluZGV4T2Yoc29ja2V0KVxuICBpZiAocG9zID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnNvY2tldHMuc3BsaWNlKHBvcywgMSk7XG5cbiAgdmFyIHBlbmRpbmcgPSB0aGlzLnJlcXVlc3RzLnNoaWZ0KCk7XG4gIGlmIChwZW5kaW5nKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBwZW5kaW5nIHJlcXVlc3RzIGFuZCBhIHNvY2tldCBnZXRzIGNsb3NlZCBhIG5ldyBvbmVcbiAgICAvLyBuZWVkcyB0byBiZSBjcmVhdGVkIHRvIHRha2Ugb3ZlciBpbiB0aGUgcG9vbCBmb3IgdGhlIG9uZSB0aGF0IGNsb3NlZC5cbiAgICB0aGlzLmNyZWF0ZVNvY2tldChwZW5kaW5nLCBmdW5jdGlvbihzb2NrZXQpIHtcbiAgICAgIHBlbmRpbmcucmVxdWVzdC5vblNvY2tldChzb2NrZXQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTZWN1cmVTb2NrZXQob3B0aW9ucywgY2IpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBUdW5uZWxpbmdBZ2VudC5wcm90b3R5cGUuY3JlYXRlU29ja2V0LmNhbGwoc2VsZiwgb3B0aW9ucywgZnVuY3Rpb24oc29ja2V0KSB7XG4gICAgdmFyIGhvc3RIZWFkZXIgPSBvcHRpb25zLnJlcXVlc3QuZ2V0SGVhZGVyKCdob3N0Jyk7XG4gICAgdmFyIHRsc09wdGlvbnMgPSBtZXJnZU9wdGlvbnMoe30sIHNlbGYub3B0aW9ucywge1xuICAgICAgc29ja2V0OiBzb2NrZXQsXG4gICAgICBzZXJ2ZXJuYW1lOiBob3N0SGVhZGVyID8gaG9zdEhlYWRlci5yZXBsYWNlKC86LiokLywgJycpIDogb3B0aW9ucy5ob3N0XG4gICAgfSk7XG5cbiAgICAvLyAwIGlzIGR1bW15IHBvcnQgZm9yIHYwLjZcbiAgICB2YXIgc2VjdXJlU29ja2V0ID0gdGxzLmNvbm5lY3QoMCwgdGxzT3B0aW9ucyk7XG4gICAgc2VsZi5zb2NrZXRzW3NlbGYuc29ja2V0cy5pbmRleE9mKHNvY2tldCldID0gc2VjdXJlU29ja2V0O1xuICAgIGNiKHNlY3VyZVNvY2tldCk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHRvT3B0aW9ucyhob3N0LCBwb3J0LCBsb2NhbEFkZHJlc3MpIHtcbiAgaWYgKHR5cGVvZiBob3N0ID09PSAnc3RyaW5nJykgeyAvLyBzaW5jZSB2MC4xMFxuICAgIHJldHVybiB7XG4gICAgICBob3N0OiBob3N0LFxuICAgICAgcG9ydDogcG9ydCxcbiAgICAgIGxvY2FsQWRkcmVzczogbG9jYWxBZGRyZXNzXG4gICAgfTtcbiAgfVxuICByZXR1cm4gaG9zdDsgLy8gZm9yIHYwLjExIG9yIGxhdGVyXG59XG5cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBvdmVycmlkZXMgPSBhcmd1bWVudHNbaV07XG4gICAgaWYgKHR5cGVvZiBvdmVycmlkZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG92ZXJyaWRlcyk7XG4gICAgICBmb3IgKHZhciBqID0gMCwga2V5TGVuID0ga2V5cy5sZW5ndGg7IGogPCBrZXlMZW47ICsraikge1xuICAgICAgICB2YXIgayA9IGtleXNbal07XG4gICAgICAgIGlmIChvdmVycmlkZXNba10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRhcmdldFtrXSA9IG92ZXJyaWRlc1trXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5cbnZhciBkZWJ1ZztcbmlmIChwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmIC9cXGJ0dW5uZWxcXGIvLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpIHtcbiAgZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgYXJnc1swXSA9ICdUVU5ORUw6ICcgKyBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJ1RVTk5FTDonKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbigpIHt9O1xufVxuZXhwb3J0cy5kZWJ1ZyA9IGRlYnVnOyAvLyBmb3IgdGVzdFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybCA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG5jb25zdCBodHRwcyA9IHJlcXVpcmUoXCJodHRwc1wiKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKFwiLi9VdGlsXCIpO1xubGV0IGZzO1xubGV0IHR1bm5lbDtcbnZhciBIdHRwQ29kZXM7XG4oZnVuY3Rpb24gKEh0dHBDb2Rlcykge1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJPS1wiXSA9IDIwMF0gPSBcIk9LXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIk11bHRpcGxlQ2hvaWNlc1wiXSA9IDMwMF0gPSBcIk11bHRpcGxlQ2hvaWNlc1wiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJNb3ZlZFBlcm1hbmVudGx5XCJdID0gMzAxXSA9IFwiTW92ZWRQZXJtYW5lbnRseVwiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJSZXNvdXJjZU1vdmVkXCJdID0gMzAyXSA9IFwiUmVzb3VyY2VNb3ZlZFwiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJTZWVPdGhlclwiXSA9IDMwM10gPSBcIlNlZU90aGVyXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIk5vdE1vZGlmaWVkXCJdID0gMzA0XSA9IFwiTm90TW9kaWZpZWRcIjtcbiAgICBIdHRwQ29kZXNbSHR0cENvZGVzW1wiVXNlUHJveHlcIl0gPSAzMDVdID0gXCJVc2VQcm94eVwiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJTd2l0Y2hQcm94eVwiXSA9IDMwNl0gPSBcIlN3aXRjaFByb3h5XCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIlRlbXBvcmFyeVJlZGlyZWN0XCJdID0gMzA3XSA9IFwiVGVtcG9yYXJ5UmVkaXJlY3RcIjtcbiAgICBIdHRwQ29kZXNbSHR0cENvZGVzW1wiUGVybWFuZW50UmVkaXJlY3RcIl0gPSAzMDhdID0gXCJQZXJtYW5lbnRSZWRpcmVjdFwiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJCYWRSZXF1ZXN0XCJdID0gNDAwXSA9IFwiQmFkUmVxdWVzdFwiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJVbmF1dGhvcml6ZWRcIl0gPSA0MDFdID0gXCJVbmF1dGhvcml6ZWRcIjtcbiAgICBIdHRwQ29kZXNbSHR0cENvZGVzW1wiUGF5bWVudFJlcXVpcmVkXCJdID0gNDAyXSA9IFwiUGF5bWVudFJlcXVpcmVkXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIkZvcmJpZGRlblwiXSA9IDQwM10gPSBcIkZvcmJpZGRlblwiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJOb3RGb3VuZFwiXSA9IDQwNF0gPSBcIk5vdEZvdW5kXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIk1ldGhvZE5vdEFsbG93ZWRcIl0gPSA0MDVdID0gXCJNZXRob2ROb3RBbGxvd2VkXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIk5vdEFjY2VwdGFibGVcIl0gPSA0MDZdID0gXCJOb3RBY2NlcHRhYmxlXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIlByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZFwiXSA9IDQwN10gPSBcIlByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZFwiO1xuICAgIEh0dHBDb2Rlc1tIdHRwQ29kZXNbXCJSZXF1ZXN0VGltZW91dFwiXSA9IDQwOF0gPSBcIlJlcXVlc3RUaW1lb3V0XCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIkNvbmZsaWN0XCJdID0gNDA5XSA9IFwiQ29uZmxpY3RcIjtcbiAgICBIdHRwQ29kZXNbSHR0cENvZGVzW1wiR29uZVwiXSA9IDQxMF0gPSBcIkdvbmVcIjtcbiAgICBIdHRwQ29kZXNbSHR0cENvZGVzW1wiVG9vTWFueVJlcXVlc3RzXCJdID0gNDI5XSA9IFwiVG9vTWFueVJlcXVlc3RzXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIkludGVybmFsU2VydmVyRXJyb3JcIl0gPSA1MDBdID0gXCJJbnRlcm5hbFNlcnZlckVycm9yXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIk5vdEltcGxlbWVudGVkXCJdID0gNTAxXSA9IFwiTm90SW1wbGVtZW50ZWRcIjtcbiAgICBIdHRwQ29kZXNbSHR0cENvZGVzW1wiQmFkR2F0ZXdheVwiXSA9IDUwMl0gPSBcIkJhZEdhdGV3YXlcIjtcbiAgICBIdHRwQ29kZXNbSHR0cENvZGVzW1wiU2VydmljZVVuYXZhaWxhYmxlXCJdID0gNTAzXSA9IFwiU2VydmljZVVuYXZhaWxhYmxlXCI7XG4gICAgSHR0cENvZGVzW0h0dHBDb2Rlc1tcIkdhdGV3YXlUaW1lb3V0XCJdID0gNTA0XSA9IFwiR2F0ZXdheVRpbWVvdXRcIjtcbn0pKEh0dHBDb2RlcyA9IGV4cG9ydHMuSHR0cENvZGVzIHx8IChleHBvcnRzLkh0dHBDb2RlcyA9IHt9KSk7XG5jb25zdCBIdHRwUmVkaXJlY3RDb2RlcyA9IFtIdHRwQ29kZXMuTW92ZWRQZXJtYW5lbnRseSwgSHR0cENvZGVzLlJlc291cmNlTW92ZWQsIEh0dHBDb2Rlcy5TZWVPdGhlciwgSHR0cENvZGVzLlRlbXBvcmFyeVJlZGlyZWN0LCBIdHRwQ29kZXMuUGVybWFuZW50UmVkaXJlY3RdO1xuY29uc3QgSHR0cFJlc3BvbnNlUmV0cnlDb2RlcyA9IFtIdHRwQ29kZXMuQmFkR2F0ZXdheSwgSHR0cENvZGVzLlNlcnZpY2VVbmF2YWlsYWJsZSwgSHR0cENvZGVzLkdhdGV3YXlUaW1lb3V0XTtcbmNvbnN0IE5ldHdvcmtSZXRyeUVycm9ycyA9IFsnRUNPTk5SRVNFVCcsICdFTk9URk9VTkQnLCAnRVNPQ0tFVFRJTUVET1VUJywgJ0VUSU1FRE9VVCcsICdFQ09OTlJFRlVTRUQnXTtcbmNvbnN0IFJldHJ5YWJsZUh0dHBWZXJicyA9IFsnT1BUSU9OUycsICdHRVQnLCAnREVMRVRFJywgJ0hFQUQnXTtcbmNvbnN0IEV4cG9uZW50aWFsQmFja29mZkNlaWxpbmcgPSAxMDtcbmNvbnN0IEV4cG9uZW50aWFsQmFja29mZlRpbWVTbGljZSA9IDU7XG5jbGFzcyBIdHRwQ2xpZW50UmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9XG4gICAgcmVhZEJvZHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgYnVmZmVyID0gQnVmZmVyLmFsbG9jKDApO1xuICAgICAgICAgICAgY29uc3QgZW5jb2RpbmdDaGFyc2V0ID0gdXRpbC5vYnRhaW5Db250ZW50Q2hhcnNldCh0aGlzKTtcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgRW5jb2RpbmcgZnJvbSBoZWFkZXI6ICdjb250ZW50LWVuY29kaW5nJ1xuICAgICAgICAgICAgLy8gTWF0Y2ggYGd6aXBgLCBgZ3ppcCwgZGVmbGF0ZWAgdmFyaWF0aW9ucyBvZiBHWklQIGVuY29kaW5nXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RW5jb2RpbmcgPSB0aGlzLm1lc3NhZ2UuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgaXNHemlwcGVkRW5jb2RlZCA9IG5ldyBSZWdFeHAoJyhnemlwJCl8KGd6aXAsICpkZWZsYXRlKScpLnRlc3QoY29udGVudEVuY29kaW5nKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSA/IEJ1ZmZlci5mcm9tKGRhdGEsIGVuY29kaW5nQ2hhcnNldCkgOiBkYXRhO1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IEJ1ZmZlci5jb25jYXQoW2J1ZmZlciwgY2h1bmtdKTtcbiAgICAgICAgICAgIH0pLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzR3ppcHBlZEVuY29kZWQpIHsgLy8gUHJvY2VzcyBHWmlwcGVkIFJlc3BvbnNlIEJvZHkgSEVSRVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3VuemlwcGVkQm9keSA9IHlpZWxkIHV0aWwuZGVjb21wcmVzc0d6aXBwZWRDb250ZW50KGJ1ZmZlciwgZW5jb2RpbmdDaGFyc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZ3VuemlwcGVkQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJ1ZmZlci50b1N0cmluZyhlbmNvZGluZ0NoYXJzZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5leHBvcnRzLkh0dHBDbGllbnRSZXNwb25zZSA9IEh0dHBDbGllbnRSZXNwb25zZTtcbmZ1bmN0aW9uIGlzSHR0cHMocmVxdWVzdFVybCkge1xuICAgIGxldCBwYXJzZWRVcmwgPSB1cmwucGFyc2UocmVxdWVzdFVybCk7XG4gICAgcmV0dXJuIHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG59XG5leHBvcnRzLmlzSHR0cHMgPSBpc0h0dHBzO1xudmFyIEVudmlyb25tZW50VmFyaWFibGVzO1xuKGZ1bmN0aW9uIChFbnZpcm9ubWVudFZhcmlhYmxlcykge1xuICAgIEVudmlyb25tZW50VmFyaWFibGVzW1wiSFRUUF9QUk9YWVwiXSA9IFwiSFRUUF9QUk9YWVwiO1xuICAgIEVudmlyb25tZW50VmFyaWFibGVzW1wiSFRUUFNfUFJPWFlcIl0gPSBcIkhUVFBTX1BST1hZXCI7XG4gICAgRW52aXJvbm1lbnRWYXJpYWJsZXNbXCJOT19QUk9YWVwiXSA9IFwiTk9fUFJPWFlcIjtcbn0pKEVudmlyb25tZW50VmFyaWFibGVzIHx8IChFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHt9KSk7XG5jbGFzcyBIdHRwQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyQWdlbnQsIGhhbmRsZXJzLCByZXF1ZXN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLl9pZ25vcmVTc2xFcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9hbGxvd1JlZGlyZWN0cyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FsbG93UmVkaXJlY3REb3duZ3JhZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWF4UmVkaXJlY3RzID0gNTA7XG4gICAgICAgIHRoaXMuX2FsbG93UmV0cmllcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYXhSZXRyaWVzID0gMTtcbiAgICAgICAgdGhpcy5fa2VlcEFsaXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlckFnZW50ID0gdXNlckFnZW50O1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnMgfHwgW107XG4gICAgICAgIGxldCBub19wcm94eSA9IHByb2Nlc3MuZW52W0Vudmlyb25tZW50VmFyaWFibGVzLk5PX1BST1hZXTtcbiAgICAgICAgaWYgKG5vX3Byb3h5KSB7XG4gICAgICAgICAgICB0aGlzLl9odHRwUHJveHlCeXBhc3NIb3N0cyA9IFtdO1xuICAgICAgICAgICAgbm9fcHJveHkuc3BsaXQoJywnKS5mb3JFYWNoKGJ5cGFzcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faHR0cFByb3h5QnlwYXNzSG9zdHMucHVzaCh1dGlsLmJ1aWxkUHJveHlCeXBhc3NSZWdleEZyb21FbnYoYnlwYXNzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RPcHRpb25zLmlnbm9yZVNzbEVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZ25vcmVTc2xFcnJvciA9IHJlcXVlc3RPcHRpb25zLmlnbm9yZVNzbEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc29ja2V0VGltZW91dCA9IHJlcXVlc3RPcHRpb25zLnNvY2tldFRpbWVvdXQ7XG4gICAgICAgICAgICB0aGlzLl9odHRwUHJveHkgPSByZXF1ZXN0T3B0aW9ucy5wcm94eTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucy5wcm94eSAmJiByZXF1ZXN0T3B0aW9ucy5wcm94eS5wcm94eUJ5cGFzc0hvc3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faHR0cFByb3h5QnlwYXNzSG9zdHMgPSBbXTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5wcm94eS5wcm94eUJ5cGFzc0hvc3RzLmZvckVhY2goYnlwYXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faHR0cFByb3h5QnlwYXNzSG9zdHMucHVzaChuZXcgUmVnRXhwKGJ5cGFzcywgJ2knKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jZXJ0Q29uZmlnID0gcmVxdWVzdE9wdGlvbnMuY2VydDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jZXJ0Q29uZmlnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdXNpbmcgY2VydCwgbmVlZCBmc1xuICAgICAgICAgICAgICAgIGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICAgICAgICAgICAgICAvLyBjYWNoZSB0aGUgY2VydCBjb250ZW50IGludG8gbWVtb3J5LCBzbyB3ZSBkb24ndCBoYXZlIHRvIHJlYWQgaXQgZnJvbSBkaXNrIGV2ZXJ5IHRpbWVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2VydENvbmZpZy5jYUZpbGUgJiYgZnMuZXhpc3RzU3luYyh0aGlzLl9jZXJ0Q29uZmlnLmNhRmlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2EgPSBmcy5yZWFkRmlsZVN5bmModGhpcy5fY2VydENvbmZpZy5jYUZpbGUsICd1dGY4Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jZXJ0Q29uZmlnLmNlcnRGaWxlICYmIGZzLmV4aXN0c1N5bmModGhpcy5fY2VydENvbmZpZy5jZXJ0RmlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VydCA9IGZzLnJlYWRGaWxlU3luYyh0aGlzLl9jZXJ0Q29uZmlnLmNlcnRGaWxlLCAndXRmOCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2VydENvbmZpZy5rZXlGaWxlICYmIGZzLmV4aXN0c1N5bmModGhpcy5fY2VydENvbmZpZy5rZXlGaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBmcy5yZWFkRmlsZVN5bmModGhpcy5fY2VydENvbmZpZy5rZXlGaWxlLCAndXRmOCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucy5hbGxvd1JlZGlyZWN0cyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWxsb3dSZWRpcmVjdHMgPSByZXF1ZXN0T3B0aW9ucy5hbGxvd1JlZGlyZWN0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucy5hbGxvd1JlZGlyZWN0RG93bmdyYWRlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxvd1JlZGlyZWN0RG93bmdyYWRlID0gcmVxdWVzdE9wdGlvbnMuYWxsb3dSZWRpcmVjdERvd25ncmFkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucy5tYXhSZWRpcmVjdHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21heFJlZGlyZWN0cyA9IE1hdGgubWF4KHJlcXVlc3RPcHRpb25zLm1heFJlZGlyZWN0cywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdE9wdGlvbnMua2VlcEFsaXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZWVwQWxpdmUgPSByZXF1ZXN0T3B0aW9ucy5rZWVwQWxpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdE9wdGlvbnMuYWxsb3dSZXRyaWVzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxvd1JldHJpZXMgPSByZXF1ZXN0T3B0aW9ucy5hbGxvd1JldHJpZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdE9wdGlvbnMubWF4UmV0cmllcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWF4UmV0cmllcyA9IHJlcXVlc3RPcHRpb25zLm1heFJldHJpZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3B0aW9ucyhyZXF1ZXN0VXJsLCBhZGRpdGlvbmFsSGVhZGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdPUFRJT05TJywgcmVxdWVzdFVybCwgbnVsbCwgYWRkaXRpb25hbEhlYWRlcnMgfHwge30pO1xuICAgIH1cbiAgICBnZXQocmVxdWVzdFVybCwgYWRkaXRpb25hbEhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnR0VUJywgcmVxdWVzdFVybCwgbnVsbCwgYWRkaXRpb25hbEhlYWRlcnMgfHwge30pO1xuICAgIH1cbiAgICBkZWwocmVxdWVzdFVybCwgYWRkaXRpb25hbEhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnREVMRVRFJywgcmVxdWVzdFVybCwgbnVsbCwgYWRkaXRpb25hbEhlYWRlcnMgfHwge30pO1xuICAgIH1cbiAgICBwb3N0KHJlcXVlc3RVcmwsIGRhdGEsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCByZXF1ZXN0VXJsLCBkYXRhLCBhZGRpdGlvbmFsSGVhZGVycyB8fCB7fSk7XG4gICAgfVxuICAgIHBhdGNoKHJlcXVlc3RVcmwsIGRhdGEsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BBVENIJywgcmVxdWVzdFVybCwgZGF0YSwgYWRkaXRpb25hbEhlYWRlcnMgfHwge30pO1xuICAgIH1cbiAgICBwdXQocmVxdWVzdFVybCwgZGF0YSwgYWRkaXRpb25hbEhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUFVUJywgcmVxdWVzdFVybCwgZGF0YSwgYWRkaXRpb25hbEhlYWRlcnMgfHwge30pO1xuICAgIH1cbiAgICBoZWFkKHJlcXVlc3RVcmwsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0hFQUQnLCByZXF1ZXN0VXJsLCBudWxsLCBhZGRpdGlvbmFsSGVhZGVycyB8fCB7fSk7XG4gICAgfVxuICAgIHNlbmRTdHJlYW0odmVyYiwgcmVxdWVzdFVybCwgc3RyZWFtLCBhZGRpdGlvbmFsSGVhZGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHZlcmIsIHJlcXVlc3RVcmwsIHN0cmVhbSwgYWRkaXRpb25hbEhlYWRlcnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIHJhdyBodHRwIHJlcXVlc3QuXG4gICAgICogQWxsIG90aGVyIG1ldGhvZHMgc3VjaCBhcyBnZXQsIHBvc3QsIHBhdGNoLCBhbmQgcmVxdWVzdCB1bHRpbWF0ZWx5IGNhbGwgdGhpcy5cbiAgICAgKiBQcmVmZXIgZ2V0LCBkZWwsIHBvc3QgYW5kIHBhdGNoXG4gICAgICovXG4gICAgcmVxdWVzdCh2ZXJiLCByZXF1ZXN0VXJsLCBkYXRhLCBoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnQgaGFzIGFscmVhZHkgYmVlbiBkaXNwb3NlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcGFyc2VkVXJsID0gdXJsLnBhcnNlKHJlcXVlc3RVcmwpO1xuICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLl9wcmVwYXJlUmVxdWVzdCh2ZXJiLCBwYXJzZWRVcmwsIGhlYWRlcnMpO1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIHJldHJpZXMgb24gcmVhZHMgc2luY2Ugd3JpdGVzIG1heSBub3QgYmUgaWRlbXBvdGVudC5cbiAgICAgICAgICAgIGxldCBtYXhUcmllcyA9ICh0aGlzLl9hbGxvd1JldHJpZXMgJiYgUmV0cnlhYmxlSHR0cFZlcmJzLmluZGV4T2YodmVyYikgIT0gLTEpID8gdGhpcy5fbWF4UmV0cmllcyArIDEgOiAxO1xuICAgICAgICAgICAgbGV0IG51bVRyaWVzID0gMDtcbiAgICAgICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgICAgIHdoaWxlIChudW1UcmllcyA8IG1heFRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB5aWVsZCB0aGlzLnJlcXVlc3RSYXcoaW5mbywgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtVHJpZXMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIuY29kZSAmJiBOZXR3b3JrUmV0cnlFcnJvcnMuaW5kZXhPZihlcnIuY29kZSkgPiAtMSAmJiBudW1UcmllcyA8IG1heFRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLl9wZXJmb3JtRXhwb25lbnRpYWxCYWNrb2ZmKG51bVRyaWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbiBhdXRoZW50aWNhdGlvbiBjaGFsbGVuZ2VcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UubWVzc2FnZSAmJiByZXNwb25zZS5tZXNzYWdlLnN0YXR1c0NvZGUgPT09IEh0dHBDb2Rlcy5VbmF1dGhvcml6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0aW9uSGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXS5jYW5IYW5kbGVBdXRoZW50aWNhdGlvbihyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbkhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGlvbkhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRoZW50aWNhdGlvbkhhbmRsZXIuaGFuZGxlQXV0aGVudGljYXRpb24odGhpcywgaW5mbywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHJlY2VpdmVkIGFuIHVuYXV0aG9yaXplZCByZXNwb25zZSBidXQgaGF2ZSBubyBoYW5kbGVycyB0byBoYW5kbGUgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZXQgdGhlIHJlc3BvbnNlIHJldHVybiB0byB0aGUgY2FsbGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCByZWRpcmVjdHNSZW1haW5pbmcgPSB0aGlzLl9tYXhSZWRpcmVjdHM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKEh0dHBSZWRpcmVjdENvZGVzLmluZGV4T2YocmVzcG9uc2UubWVzc2FnZS5zdGF0dXNDb2RlKSAhPSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLl9hbGxvd1JlZGlyZWN0c1xuICAgICAgICAgICAgICAgICAgICAmJiByZWRpcmVjdHNSZW1haW5pbmcgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID0gcmVzcG9uc2UubWVzc2FnZS5oZWFkZXJzW1wibG9jYXRpb25cIl07XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gbG9jYXRpb24gdG8gcmVkaXJlY3QgdG8sIHdlIHdvbid0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkUmVkaXJlY3RVcmwgPSB1cmwucGFyc2UocmVkaXJlY3RVcmwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkVXJsLnByb3RvY29sID09ICdodHRwczonICYmIHBhcnNlZFVybC5wcm90b2NvbCAhPSBwYXJzZWRSZWRpcmVjdFVybC5wcm90b2NvbCAmJiAhdGhpcy5fYWxsb3dSZWRpcmVjdERvd25ncmFkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkaXJlY3QgZnJvbSBIVFRQUyB0byBIVFRQIHByb3RvY29sLiBUaGlzIGRvd25ncmFkZSBpcyBub3QgYWxsb3dlZCBmb3Igc2VjdXJpdHkgcmVhc29ucy4gSWYgeW91IHdhbnQgdG8gYWxsb3cgdGhpcyBiZWhhdmlvciwgc2V0IHRoZSBhbGxvd1JlZGlyZWN0RG93bmdyYWRlIG9wdGlvbiB0byB0cnVlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGZpbmlzaCByZWFkaW5nIHRoZSByZXNwb25zZSBiZWZvcmUgcmVhc3NpZ25pbmcgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hpY2ggd2lsbCBsZWFrIHRoZSBvcGVuIHNvY2tldC5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgcmVzcG9uc2UucmVhZEJvZHkoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgbWFrZSB0aGUgcmVxdWVzdCB3aXRoIHRoZSBuZXcgcmVkaXJlY3RVcmxcbiAgICAgICAgICAgICAgICAgICAgaW5mbyA9IHRoaXMuX3ByZXBhcmVSZXF1ZXN0KHZlcmIsIHBhcnNlZFJlZGlyZWN0VXJsLCBoZWFkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB5aWVsZCB0aGlzLnJlcXVlc3RSYXcoaW5mbywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0c1JlbWFpbmluZy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoSHR0cFJlc3BvbnNlUmV0cnlDb2Rlcy5pbmRleE9mKHJlc3BvbnNlLm1lc3NhZ2Uuc3RhdHVzQ29kZSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90IGEgcmV0cnkgY29kZSwgcmV0dXJuIGltbWVkaWF0ZWx5IGluc3RlYWQgb2YgcmV0cnlpbmdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBudW1UcmllcyArPSAxO1xuICAgICAgICAgICAgICAgIGlmIChudW1UcmllcyA8IG1heFRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHJlc3BvbnNlLnJlYWRCb2R5KCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuX3BlcmZvcm1FeHBvbmVudGlhbEJhY2tvZmYobnVtVHJpZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5lZWRzIHRvIGJlIGNhbGxlZCBpZiBrZWVwQWxpdmUgaXMgc2V0IHRvIHRydWUgaW4gcmVxdWVzdCBvcHRpb25zLlxuICAgICAqL1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hZ2VudCkge1xuICAgICAgICAgICAgdGhpcy5fYWdlbnQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmF3IHJlcXVlc3QuXG4gICAgICogQHBhcmFtIGluZm9cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlcXVlc3RSYXcoaW5mbywgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrRm9yUmVzdWx0ID0gZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJhd1dpdGhDYWxsYmFjayhpbmZvLCBkYXRhLCBjYWxsYmFja0ZvclJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSYXcgcmVxdWVzdCB3aXRoIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSBpbmZvXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gb25SZXN1bHRcbiAgICAgKi9cbiAgICByZXF1ZXN0UmF3V2l0aENhbGxiYWNrKGluZm8sIGRhdGEsIG9uUmVzdWx0KSB7XG4gICAgICAgIGxldCBzb2NrZXQ7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaW5mby5vcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LUxlbmd0aFwiXSA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEsICd1dGY4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbGxiYWNrQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBoYW5kbGVSZXN1bHQgPSAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2tDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb25SZXN1bHQoZXJyLCByZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgcmVxID0gaW5mby5odHRwTW9kdWxlLnJlcXVlc3QoaW5mby5vcHRpb25zLCAobXNnKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0gbmV3IEh0dHBDbGllbnRSZXNwb25zZShtc2cpO1xuICAgICAgICAgICAgaGFuZGxlUmVzdWx0KG51bGwsIHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXEub24oJ3NvY2tldCcsIChzb2NrKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQgPSBzb2NrO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gSWYgd2UgZXZlciBnZXQgZGlzY29ubmVjdGVkLCB3ZSB3YW50IHRoZSBzb2NrZXQgdG8gdGltZW91dCBldmVudHVhbGx5XG4gICAgICAgIHJlcS5zZXRUaW1lb3V0KHRoaXMuX3NvY2tldFRpbWVvdXQgfHwgMyAqIDYwMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc29ja2V0KSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZVJlc3VsdChuZXcgRXJyb3IoJ1JlcXVlc3QgdGltZW91dDogJyArIGluZm8ub3B0aW9ucy5wYXRoKSwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgLy8gZXJyIGhhcyBzdGF0dXNDb2RlIHByb3BlcnR5XG4gICAgICAgICAgICAvLyByZXMgc2hvdWxkIGhhdmUgaGVhZGVyc1xuICAgICAgICAgICAgaGFuZGxlUmVzdWx0KGVyciwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVxLndyaXRlKGRhdGEsICd1dGY4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIChkYXRhKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGEub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlcS5lbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGF0YS5waXBlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXEuZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3ByZXBhcmVSZXF1ZXN0KG1ldGhvZCwgcmVxdWVzdFVybCwgaGVhZGVycykge1xuICAgICAgICBjb25zdCBpbmZvID0ge307XG4gICAgICAgIGluZm8ucGFyc2VkVXJsID0gcmVxdWVzdFVybDtcbiAgICAgICAgY29uc3QgdXNpbmdTc2wgPSBpbmZvLnBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgICAgIGluZm8uaHR0cE1vZHVsZSA9IHVzaW5nU3NsID8gaHR0cHMgOiBodHRwO1xuICAgICAgICBjb25zdCBkZWZhdWx0UG9ydCA9IHVzaW5nU3NsID8gNDQzIDogODA7XG4gICAgICAgIGluZm8ub3B0aW9ucyA9IHt9O1xuICAgICAgICBpbmZvLm9wdGlvbnMuaG9zdCA9IGluZm8ucGFyc2VkVXJsLmhvc3RuYW1lO1xuICAgICAgICBpbmZvLm9wdGlvbnMucG9ydCA9IGluZm8ucGFyc2VkVXJsLnBvcnQgPyBwYXJzZUludChpbmZvLnBhcnNlZFVybC5wb3J0KSA6IGRlZmF1bHRQb3J0O1xuICAgICAgICBpbmZvLm9wdGlvbnMucGF0aCA9IChpbmZvLnBhcnNlZFVybC5wYXRobmFtZSB8fCAnJykgKyAoaW5mby5wYXJzZWRVcmwuc2VhcmNoIHx8ICcnKTtcbiAgICAgICAgaW5mby5vcHRpb25zLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgaW5mby5vcHRpb25zLnRpbWVvdXQgPSAodGhpcy5yZXF1ZXN0T3B0aW9ucyAmJiB0aGlzLnJlcXVlc3RPcHRpb25zLnNvY2tldFRpbWVvdXQpIHx8IHRoaXMuX3NvY2tldFRpbWVvdXQ7XG4gICAgICAgIHRoaXMuX3NvY2tldFRpbWVvdXQgPSBpbmZvLm9wdGlvbnMudGltZW91dDtcbiAgICAgICAgaW5mby5vcHRpb25zLmhlYWRlcnMgPSB0aGlzLl9tZXJnZUhlYWRlcnMoaGVhZGVycyk7XG4gICAgICAgIGlmICh0aGlzLnVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbmZvLm9wdGlvbnMuaGVhZGVyc1tcInVzZXItYWdlbnRcIl0gPSB0aGlzLnVzZXJBZ2VudDtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLm9wdGlvbnMuYWdlbnQgPSB0aGlzLl9nZXRBZ2VudChpbmZvLnBhcnNlZFVybCk7XG4gICAgICAgIC8vIGdpdmVzIGhhbmRsZXJzIGFuIG9wcG9ydHVuaXR5IHRvIHBhcnRpY2lwYXRlXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXJzICYmICF0aGlzLl9pc1ByZXNpZ25lZCh1cmwuZm9ybWF0KHJlcXVlc3RVcmwpKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5wcmVwYXJlUmVxdWVzdChpbmZvLm9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuICAgIF9pc1ByZXNpZ25lZChyZXF1ZXN0VXJsKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zICYmIHRoaXMucmVxdWVzdE9wdGlvbnMucHJlc2lnbmVkVXJsUGF0dGVybnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm5zID0gdGhpcy5yZXF1ZXN0T3B0aW9ucy5wcmVzaWduZWRVcmxQYXR0ZXJucztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdFVybC5tYXRjaChwYXR0ZXJuc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX21lcmdlSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyY2FzZUtleXMgPSBvYmogPT4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGMsIGspID0+IChjW2sudG9Mb3dlckNhc2UoKV0gPSBvYmpba10sIGMpLCB7fSk7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zICYmIHRoaXMucmVxdWVzdE9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGxvd2VyY2FzZUtleXModGhpcy5yZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKSwgbG93ZXJjYXNlS2V5cyhoZWFkZXJzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvd2VyY2FzZUtleXMoaGVhZGVycyB8fCB7fSk7XG4gICAgfVxuICAgIF9nZXRBZ2VudChwYXJzZWRVcmwpIHtcbiAgICAgICAgbGV0IGFnZW50O1xuICAgICAgICBsZXQgcHJveHkgPSB0aGlzLl9nZXRQcm94eShwYXJzZWRVcmwpO1xuICAgICAgICBsZXQgdXNlUHJveHkgPSBwcm94eS5wcm94eVVybCAmJiBwcm94eS5wcm94eVVybC5ob3N0bmFtZSAmJiAhdGhpcy5faXNNYXRjaEluQnlwYXNzUHJveHlMaXN0KHBhcnNlZFVybCk7XG4gICAgICAgIGlmICh0aGlzLl9rZWVwQWxpdmUgJiYgdXNlUHJveHkpIHtcbiAgICAgICAgICAgIGFnZW50ID0gdGhpcy5fcHJveHlBZ2VudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fa2VlcEFsaXZlICYmICF1c2VQcm94eSkge1xuICAgICAgICAgICAgYWdlbnQgPSB0aGlzLl9hZ2VudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBhZ2VudCBpcyBhbHJlYWR5IGFzc2lnbmVkIHVzZSB0aGF0IGFnZW50LlxuICAgICAgICBpZiAoISFhZ2VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGFnZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVzaW5nU3NsID0gcGFyc2VkVXJsLnByb3RvY29sID09PSAnaHR0cHM6JztcbiAgICAgICAgbGV0IG1heFNvY2tldHMgPSAxMDA7XG4gICAgICAgIGlmICghIXRoaXMucmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgICAgIG1heFNvY2tldHMgPSB0aGlzLnJlcXVlc3RPcHRpb25zLm1heFNvY2tldHMgfHwgaHR0cC5nbG9iYWxBZ2VudC5tYXhTb2NrZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VQcm94eSkge1xuICAgICAgICAgICAgLy8gSWYgdXNpbmcgcHJveHksIG5lZWQgdHVubmVsXG4gICAgICAgICAgICBpZiAoIXR1bm5lbCkge1xuICAgICAgICAgICAgICAgIHR1bm5lbCA9IHJlcXVpcmUoJ3R1bm5lbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWdlbnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1heFNvY2tldHM6IG1heFNvY2tldHMsXG4gICAgICAgICAgICAgICAga2VlcEFsaXZlOiB0aGlzLl9rZWVwQWxpdmUsXG4gICAgICAgICAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlBdXRoOiBwcm94eS5wcm94eUF1dGgsXG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6IHByb3h5LnByb3h5VXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICBwb3J0OiBwcm94eS5wcm94eVVybC5wb3J0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgdHVubmVsQWdlbnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVySHR0cHMgPSBwcm94eS5wcm94eVVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgICAgICAgICBpZiAodXNpbmdTc2wpIHtcbiAgICAgICAgICAgICAgICB0dW5uZWxBZ2VudCA9IG92ZXJIdHRwcyA/IHR1bm5lbC5odHRwc092ZXJIdHRwcyA6IHR1bm5lbC5odHRwc092ZXJIdHRwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHVubmVsQWdlbnQgPSBvdmVySHR0cHMgPyB0dW5uZWwuaHR0cE92ZXJIdHRwcyA6IHR1bm5lbC5odHRwT3Zlckh0dHA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZ2VudCA9IHR1bm5lbEFnZW50KGFnZW50T3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9wcm94eUFnZW50ID0gYWdlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcmV1c2luZyBhZ2VudCBhY3Jvc3MgcmVxdWVzdCBhbmQgdHVubmVsaW5nIGFnZW50IGlzbid0IGFzc2lnbmVkIGNyZWF0ZSBhIG5ldyBhZ2VudFxuICAgICAgICBpZiAodGhpcy5fa2VlcEFsaXZlICYmICFhZ2VudCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsga2VlcEFsaXZlOiB0aGlzLl9rZWVwQWxpdmUsIG1heFNvY2tldHM6IG1heFNvY2tldHMgfTtcbiAgICAgICAgICAgIGFnZW50ID0gdXNpbmdTc2wgPyBuZXcgaHR0cHMuQWdlbnQob3B0aW9ucykgOiBuZXcgaHR0cC5BZ2VudChvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuX2FnZW50ID0gYWdlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgbm90IHVzaW5nIHByaXZhdGUgYWdlbnQgYW5kIHR1bm5lbCBhZ2VudCBpc24ndCBzZXR1cCB0aGVuIHVzZSBnbG9iYWwgYWdlbnRcbiAgICAgICAgaWYgKCFhZ2VudCkge1xuICAgICAgICAgICAgYWdlbnQgPSB1c2luZ1NzbCA/IGh0dHBzLmdsb2JhbEFnZW50IDogaHR0cC5nbG9iYWxBZ2VudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNpbmdTc2wgJiYgdGhpcy5faWdub3JlU3NsRXJyb3IpIHtcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gc2V0IE5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQ9MCBzaW5jZSB0aGF0IHdpbGwgYWZmZWN0IHJlcXVlc3QgZm9yIGVudGlyZSBwcm9jZXNzXG4gICAgICAgICAgICAvLyBodHRwLlJlcXVlc3RPcHRpb25zIGRvZXNuJ3QgZXhwb3NlIGEgd2F5IHRvIG1vZGlmeSBSZXF1ZXN0T3B0aW9ucy5hZ2VudC5vcHRpb25zXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIGNhc3QgaXQgdG8gYW55IGFuZCBjaGFuZ2UgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgIGFnZW50Lm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGFnZW50Lm9wdGlvbnMgfHwge30sIHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNpbmdTc2wgJiYgdGhpcy5fY2VydENvbmZpZykge1xuICAgICAgICAgICAgYWdlbnQub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oYWdlbnQub3B0aW9ucyB8fCB7fSwgeyBjYTogdGhpcy5fY2EsIGNlcnQ6IHRoaXMuX2NlcnQsIGtleTogdGhpcy5fa2V5LCBwYXNzcGhyYXNlOiB0aGlzLl9jZXJ0Q29uZmlnLnBhc3NwaHJhc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFnZW50O1xuICAgIH1cbiAgICBfZ2V0UHJveHkocGFyc2VkVXJsKSB7XG4gICAgICAgIGxldCB1c2luZ1NzbCA9IHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgICAgIGxldCBwcm94eUNvbmZpZyA9IHRoaXMuX2h0dHBQcm94eTtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gaHR0cF9wcm94eSBhbmQgaHR0cHNfcHJveHkgZW52XG4gICAgICAgIGxldCBodHRwc19wcm94eSA9IHByb2Nlc3MuZW52W0Vudmlyb25tZW50VmFyaWFibGVzLkhUVFBTX1BST1hZXTtcbiAgICAgICAgbGV0IGh0dHBfcHJveHkgPSBwcm9jZXNzLmVudltFbnZpcm9ubWVudFZhcmlhYmxlcy5IVFRQX1BST1hZXTtcbiAgICAgICAgaWYgKCFwcm94eUNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGh0dHBzX3Byb3h5ICYmIHVzaW5nU3NsKSB7XG4gICAgICAgICAgICAgICAgcHJveHlDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5VXJsOiBodHRwc19wcm94eVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChodHRwX3Byb3h5KSB7XG4gICAgICAgICAgICAgICAgcHJveHlDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5VXJsOiBodHRwX3Byb3h5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJveHlVcmw7XG4gICAgICAgIGxldCBwcm94eUF1dGg7XG4gICAgICAgIGlmIChwcm94eUNvbmZpZykge1xuICAgICAgICAgICAgaWYgKHByb3h5Q29uZmlnLnByb3h5VXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm94eVVybCA9IHVybC5wYXJzZShwcm94eUNvbmZpZy5wcm94eVVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJveHlDb25maWcucHJveHlVc2VybmFtZSB8fCBwcm94eUNvbmZpZy5wcm94eVBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgcHJveHlBdXRoID0gcHJveHlDb25maWcucHJveHlVc2VybmFtZSArIFwiOlwiICsgcHJveHlDb25maWcucHJveHlQYXNzd29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwcm94eVVybDogcHJveHlVcmwsIHByb3h5QXV0aDogcHJveHlBdXRoIH07XG4gICAgfVxuICAgIF9pc01hdGNoSW5CeXBhc3NQcm94eUxpc3QocGFyc2VkVXJsKSB7XG4gICAgICAgIGlmICghdGhpcy5faHR0cFByb3h5QnlwYXNzSG9zdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnlwYXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2h0dHBQcm94eUJ5cGFzc0hvc3RzLmZvckVhY2goYnlwYXNzSG9zdCA9PiB7XG4gICAgICAgICAgICBpZiAoYnlwYXNzSG9zdC50ZXN0KHBhcnNlZFVybC5ocmVmKSkge1xuICAgICAgICAgICAgICAgIGJ5cGFzcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnlwYXNzO1xuICAgIH1cbiAgICBfcGVyZm9ybUV4cG9uZW50aWFsQmFja29mZihyZXRyeU51bWJlcikge1xuICAgICAgICByZXRyeU51bWJlciA9IE1hdGgubWluKEV4cG9uZW50aWFsQmFja29mZkNlaWxpbmcsIHJldHJ5TnVtYmVyKTtcbiAgICAgICAgY29uc3QgbXMgPSBFeHBvbmVudGlhbEJhY2tvZmZUaW1lU2xpY2UgKiBNYXRoLnBvdygyLCByZXRyeU51bWJlcik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBtcykpO1xuICAgIH1cbn1cbmV4cG9ydHMuSHR0cENsaWVudCA9IEh0dHBDbGllbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcXMgPSByZXF1aXJlKFwicXNcIik7XG5jb25zdCB1cmwgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgemxpYiA9IHJlcXVpcmUoXCJ6bGliXCIpO1xuLyoqXG4gKiBjcmVhdGVzIGFuIHVybCBmcm9tIGEgcmVxdWVzdCB1cmwgYW5kIG9wdGlvbmFsIGJhc2UgdXJsIChodHRwOi8vc2VydmVyOjgwODApXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2UgLSBhIGZ1bGx5IHF1YWxpZmllZCB1cmwgb3IgcmVsYXRpdmUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmwgLSBhbiBvcHRpb25hbCBiYXNlVXJsIChodHRwOi8vc2VydmVyOjgwODApXG4gKiBAcGFyYW0ge0lSZXF1ZXN0T3B0aW9uc30gb3B0aW9ucyAtIGFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0LCBjb3VsZCBpbmNsdWRlIFF1ZXJ5UGFyYW1ldGVycyBlLmcuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gcmVzdWx0YW50IHVybFxuICovXG5mdW5jdGlvbiBnZXRVcmwocmVzb3VyY2UsIGJhc2VVcmwsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgY29uc3QgcGF0aEFwaSA9IHBhdGgucG9zaXggfHwgcGF0aDtcbiAgICBsZXQgcmVxdWVzdFVybCA9ICcnO1xuICAgIGlmICghYmFzZVVybCkge1xuICAgICAgICByZXF1ZXN0VXJsID0gcmVzb3VyY2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICByZXF1ZXN0VXJsID0gYmFzZVVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB1cmwucGFyc2UoYmFzZVVybCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdGFudFVybCA9IHVybC5wYXJzZShyZXNvdXJjZSk7XG4gICAgICAgIC8vIHJlc291cmNlIChzcGVjaWZpYyBwZXIgcmVxdWVzdCkgZWxlbWVudHMgdGFrZSBwcmlvcml0eVxuICAgICAgICByZXN1bHRhbnRVcmwucHJvdG9jb2wgPSByZXN1bHRhbnRVcmwucHJvdG9jb2wgfHwgYmFzZS5wcm90b2NvbDtcbiAgICAgICAgcmVzdWx0YW50VXJsLmF1dGggPSByZXN1bHRhbnRVcmwuYXV0aCB8fCBiYXNlLmF1dGg7XG4gICAgICAgIHJlc3VsdGFudFVybC5ob3N0ID0gcmVzdWx0YW50VXJsLmhvc3QgfHwgYmFzZS5ob3N0O1xuICAgICAgICByZXN1bHRhbnRVcmwucGF0aG5hbWUgPSBwYXRoQXBpLnJlc29sdmUoYmFzZS5wYXRobmFtZSwgcmVzdWx0YW50VXJsLnBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyZXN1bHRhbnRVcmwucGF0aG5hbWUuZW5kc1dpdGgoJy8nKSAmJiByZXNvdXJjZS5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICByZXN1bHRhbnRVcmwucGF0aG5hbWUgKz0gJy8nO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuZm9ybWF0KHJlc3VsdGFudFVybCk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeVBhcmFtcyA/XG4gICAgICAgIGdldFVybFdpdGhQYXJzZWRRdWVyeVBhcmFtcyhyZXF1ZXN0VXJsLCBxdWVyeVBhcmFtcykgOlxuICAgICAgICByZXF1ZXN0VXJsO1xufVxuZXhwb3J0cy5nZXRVcmwgPSBnZXRVcmw7XG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFVybFxuICogQHBhcmFtIHtJUmVxdWVzdFF1ZXJ5UGFyYW1zfSBxdWVyeVBhcmFtc1xuICogQHJldHVybiB7c3RyaW5nfSAtIFJlcXVlc3QncyBVUkwgd2l0aCBRdWVyeSBQYXJhbWV0ZXJzIGFwcGVuZGVkL3BhcnNlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0VXJsV2l0aFBhcnNlZFF1ZXJ5UGFyYW1zKHJlcXVlc3RVcmwsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgY29uc3QgdXJsID0gcmVxdWVzdFVybC5yZXBsYWNlKC9cXD8kL2csICcnKTsgLy8gQ2xlYW4gYW55IGV4dHJhIGVuZC1vZi1zdHJpbmcgXCI/XCIgY2hhcmFjdGVyXG4gICAgY29uc3QgcGFyc2VkUXVlcnlQYXJhbXMgPSBxcy5zdHJpbmdpZnkocXVlcnlQYXJhbXMucGFyYW1zLCBidWlsZFBhcmFtc1N0cmluZ2lmeU9wdGlvbnMocXVlcnlQYXJhbXMpKTtcbiAgICByZXR1cm4gYCR7dXJsfSR7cGFyc2VkUXVlcnlQYXJhbXN9YDtcbn1cbi8qKlxuICogQnVpbGQgb3B0aW9ucyBmb3IgUXVlcnlQYXJhbXMgU3RyaW5naWZ5aW5nLlxuICpcbiAqIEBwYXJhbSB7SVJlcXVlc3RRdWVyeVBhcmFtc30gcXVlcnlQYXJhbXNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gYnVpbGRQYXJhbXNTdHJpbmdpZnlPcHRpb25zKHF1ZXJ5UGFyYW1zKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGFkZFF1ZXJ5UHJlZml4OiB0cnVlLFxuICAgICAgICBkZWxpbWl0ZXI6IChxdWVyeVBhcmFtcy5vcHRpb25zIHx8IHt9KS5zZXBhcmF0b3IgfHwgJyYnLFxuICAgICAgICBhbGxvd0RvdHM6IChxdWVyeVBhcmFtcy5vcHRpb25zIHx8IHt9KS5zaG91bGRBbGxvd0RvdHMgfHwgZmFsc2UsXG4gICAgICAgIGFycmF5Rm9ybWF0OiAocXVlcnlQYXJhbXMub3B0aW9ucyB8fCB7fSkuYXJyYXlGb3JtYXQgfHwgJ3JlcGVhdCcsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IChxdWVyeVBhcmFtcy5vcHRpb25zIHx8IHt9KS5zaG91bGRPbmx5RW5jb2RlVmFsdWVzIHx8IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBvcHRpb25zO1xufVxuLyoqXG4gKiBEZWNvbXByZXNzL0RlY29kZSBnemlwIGVuY29kZWQgSlNPTlxuICogVXNpbmcgTm9kZS5qcyBidWlsdC1pbiB6bGliIG1vZHVsZVxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyc2V0PyAtIG9wdGlvbmFsOyBkZWZhdWx0cyB0byAndXRmLTgnXG4gKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIGRlY29tcHJlc3NHemlwcGVkQ29udGVudChidWZmZXIsIGNoYXJzZXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgemxpYi5ndW56aXAoYnVmZmVyLCBmdW5jdGlvbiAoZXJyb3IsIGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKGJ1ZmZlci50b1N0cmluZyhjaGFyc2V0IHx8ICd1dGYtOCcpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlY29tcHJlc3NHemlwcGVkQ29udGVudCA9IGRlY29tcHJlc3NHemlwcGVkQ29udGVudDtcbi8qKlxuICogQnVpbGRzIGEgUmVnRXhwIHRvIHRlc3QgdXJscyBhZ2FpbnN0IGZvciBkZWNpZGluZ1xuICogd2V0aGVyIHRvIGJ5cGFzcyBwcm94eSBmcm9tIGFuIGVudHJ5IG9mIHRoZVxuICogZW52aXJvbm1lbnQgdmFyaWFibGUgc2V0dGluZyBOT19QUk9YWVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBieXBhc3NcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYnVpbGRQcm94eUJ5cGFzc1JlZ2V4RnJvbUVudihieXBhc3MpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGtlZXAgdGhpcyBhcm91bmQgZm9yIGJhY2stY29tcGF0IHB1cnBvc2VzXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGJ5cGFzcywgJ2knKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgU3ludGF4RXJyb3IgJiYgKGJ5cGFzcyB8fCBcIlwiKS5zdGFydHNXaXRoKFwiKlwiKSkge1xuICAgICAgICAgICAgbGV0IHdpbGRjYXJkRXNjYXBlZCA9IGJ5cGFzcy5yZXBsYWNlKCcqJywgJyguKiknKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHdpbGRjYXJkRXNjYXBlZCwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuZXhwb3J0cy5idWlsZFByb3h5QnlwYXNzUmVnZXhGcm9tRW52ID0gYnVpbGRQcm94eUJ5cGFzc1JlZ2V4RnJvbUVudjtcbi8qKlxuICogT2J0YWluIFJlc3BvbnNlJ3MgQ29udGVudCBDaGFyc2V0LlxuICogVGhyb3VnaCBpbnNwZWN0aW5nIGBjb250ZW50LXR5cGVgIHJlc3BvbnNlIGhlYWRlci5cbiAqIEl0IFJldHVybnMgJ3V0Zi04JyBpZiBOTyBjaGFyc2V0IHNwZWNpZmllZC9tYXRjaGVkLlxuICpcbiAqIEBwYXJhbSB7SUh0dHBDbGllbnRSZXNwb25zZX0gcmVzcG9uc2VcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBDb250ZW50IEVuY29kaW5nIENoYXJzZXQ7IERlZmF1bHQ9dXRmLThcbiAqL1xuZnVuY3Rpb24gb2J0YWluQ29udGVudENoYXJzZXQocmVzcG9uc2UpIHtcbiAgICAvLyBGaW5kIHRoZSBjaGFyc2V0LCBpZiBzcGVjaWZpZWQuXG4gICAgLy8gU2VhcmNoIGZvciB0aGUgYGNoYXJzZXQ9Q0hBUlNFVGAgc3RyaW5nLCBub3QgaW5jbHVkaW5nIGA7LFxcclxcbmBcbiAgICAvLyBFeGFtcGxlOiBjb250ZW50LXR5cGU6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gICAgLy8gfF9fIG1hdGNoZXMgd291bGQgYmUgWydjaGFyc2V0PXV0Zi04JywgJ3V0Zi04JywgaW5kZXg6IDE4LCBpbnB1dDogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXVxuICAgIC8vIHxfX19fXyBtYXRjaGVzWzFdIHdvdWxkIGhhdmUgdGhlIGNoYXJzZXQgOnRhZGE6ICwgaW4gb3VyIGV4YW1wbGUgaXQncyB1dGYtOFxuICAgIC8vIEhvd2V2ZXIsIGlmIHRoZSBtYXRjaGVzIEFycmF5IHdhcyBlbXB0eSBvciBubyBjaGFyc2V0IGZvdW5kLCAndXRmLTgnIHdvdWxkIGJlIHJldHVybmVkIGJ5IGRlZmF1bHQuXG4gICAgY29uc3Qgbm9kZVN1cHBvcnRlZEVuY29kaW5ncyA9IFsnYXNjaWknLCAndXRmOCcsICd1dGYxNmxlJywgJ3VjczInLCAnYmFzZTY0JywgJ2JpbmFyeScsICdoZXgnXTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLm1lc3NhZ2UuaGVhZGVyc1snY29udGVudC10eXBlJ10gfHwgJyc7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnRUeXBlLm1hdGNoKC9jaGFyc2V0PShbXjssXFxyXFxuXSspL2kpO1xuICAgIHJldHVybiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdICYmIG5vZGVTdXBwb3J0ZWRFbmNvZGluZ3MuaW5kZXhPZihtYXRjaGVzWzFdKSAhPSAtMSkgPyBtYXRjaGVzWzFdIDogJ3V0Zi04Jztcbn1cbmV4cG9ydHMub2J0YWluQ29udGVudENoYXJzZXQgPSBvYnRhaW5Db250ZW50Q2hhcnNldDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSdcbmltcG9ydCB7IHNldHVwIH0gZnJvbSAnLi9tYWluJ1xuXG5zZXR1cCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=