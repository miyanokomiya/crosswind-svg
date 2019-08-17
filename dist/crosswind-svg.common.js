/*!
 * crosswind-svg v0.1.0 
 * (c) 2019 miyanokomiya (https://github.com/miyanokomiya)
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

var script = Vue.extend({
  props: {
    shape: {
      type: String,
      default: "circle"
    },
    rotate: {
      type: String,
      default: "0"
    },
    inverse: {
      type: Boolean,
      default: false
    },
    duration: {
      type: String,
      default: "0.5s"
    }
  },
  computed: {
    style: function style() {
      return {
        transform: "rotate(" + this.rotate + ")",
        fill: "currentColor",
        stroke: "currentColor"
      };
    },
    transition: function transition() {
      return "all " + this.duration;
    },
    black: function black() {
      return this.inverse ? "white" : "";
    },
    white: function white() {
      return this.inverse ? "" : "white";
    }
  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({style:(_vm.style),attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 64 64"}},_vm.$listeners),[_c('g',{attrs:{"fill":_vm.white}},[(_vm.shape === 'circle')?_c('circle',{attrs:{"cx":"32","cy":"32","r":"32"}}):_vm._e(),_vm._v(" "),(_vm.shape === 'rect')?_c('rect',{attrs:{"x":"0","y":"0","rx":"6","ry":"6","width":"64","height":"64"}}):_vm._e()]),_vm._v(" "),_vm._t("default",null,{"w":64,"h":64,"black":_vm.black,"white":_vm.white,"transition":_vm.transition})],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SvgFlame = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var script$1 = Vue.extend({
  components: {
    SvgFlame: SvgFlame
  },
  props: {
    shape: String,
    rotate: String,
    inverse: Boolean,
    duration: String,
    expanded: {
      type: Boolean,
      default: false
    }
  }
});

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SvgFlame',_vm._g(_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(ref){
var black = ref.black;
var white = ref.white;
var transition = ref.transition;
return [_c('g',{attrs:{"stroke-width":"4","stroke":black,"stroke-linecap":"round"}},[_c('path',{staticStyle:{"transform-origin":"50% 50%"},style:({ transition: transition, transform: _vm.expanded ? 'rotate(90deg)' : '' }),attrs:{"d":"M 32 20 32 44"}}),_vm._v(" "),_c('path',{staticStyle:{"transform-origin":"50% 50%"},style:({ transition: transition, transform: _vm.expanded ? 'rotate(-180deg)' : '' }),attrs:{"d":"M 20 32 44 32"}})])]}}])},'SvgFlame',{ shape: _vm.shape, rotate: _vm.rotate, inverse: _vm.inverse, duration: _vm.duration },false),_vm.$listeners))};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OpenCloseIcon = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

exports.OpenCloseIcon = OpenCloseIcon;
