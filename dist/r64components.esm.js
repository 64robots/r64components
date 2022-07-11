var R64Button = {
  baseClass: 'block rounded inline-flex items-center justify-center',
  primaryClass: 'bg-gray-900 text-white hover:bg-gray-800',
  secondaryClass: 'bg-indigo-500 hover:bg-indigo-400 text-white',
  errorClass: 'bg-red-500 text-white hover:bg-red-500',
  disabledClass: 'opacity-50 pointer-events-none',
  outlineClass: 'border bg-transparent transition duration-150 ease-in-out',
  primaryOutlineClass: 'border-gray-900 text-gray-900 hover:bg-gray-800 hover:text-white',
  secondaryOutlineClass: 'border-indigo-500 text-indigo-500 hover:bg-indigo-400 hover:text-white',
  errorOutlineClass: 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
  smallClass: 'font-normal py-1 px-5',
  fullClass: 'w-full',
  normalSizeClass: 'font-semibold py-2 px-6'
};

//
const {
  baseClass,
  primaryClass,
  secondaryClass,
  errorClass,
  outlineClass,
  primaryOutlineClass,
  secondaryOutlineClass,
  errorOutlineClass,
  smallClass,
  fullClass,
  disabledClass,
  normalSizeClass,
  loadingClass
} = R64Button;
var script = {
  name: 'R64Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    primaryClass: {
      type: String,
      default: primaryClass
    },
    secondaryClass: {
      type: String,
      default: secondaryClass
    },
    errorClass: {
      type: String,
      default: errorClass
    },
    outlineClass: {
      type: String,
      default: outlineClass
    },
    primaryOutlineClass: {
      type: String,
      default: primaryOutlineClass
    },
    secondaryOutlineClass: {
      type: String,
      default: secondaryOutlineClass
    },
    errorOutlineClass: {
      type: String,
      default: errorOutlineClass
    },
    smallClass: {
      type: String,
      default: smallClass
    },
    fullClass: {
      type: String,
      default: fullClass
    },
    disabledClass: {
      type: String,
      default: disabledClass
    },
    normalSizeClass: {
      type: String,
      default: normalSizeClass
    },
    loadingClass: {
      type: String,
      default: loadingClass
    }
  },
  computed: {
    buttonClasses() {
      const classes = [baseClass]; // REFACTOR

      if (this.outline) {
        classes.push(this.outlineClass);

        if (this.secondary) {
          classes.push(this.secondaryOutlineClass);
        } else if (this.error) {
          classes.push(this.errorOutlineClass);
        } else {
          classes.push(this.primaryOutlineClass);
        }
      } else {
        if (this.secondary) {
          classes.push(this.secondaryClass);
        } else if (this.error) {
          classes.push(this.errorClass);
        } else {
          classes.push(this.primaryClass);
        }
      }

      if (this.small) {
        classes.push(this.smallClass);
      }

      if (this.full) {
        classes.push(this.fullClass);
      }

      if (this.disabled) {
        classes.push(this.disabledClass);
      }

      if (this.normalSize) {
        classes.push(this.normalSizeClass);
      }

      return classes;
    },

    normalSize() {
      return !this.small;
    },

    loadingClasses() {
      if (this.loadingClass) {
        return this.loadingClass;
      }

      return this.outline ? 'loader-outline' : '';
    }

  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },

    onBlur(event) {
      this.$emit('blur', event);
    },

    onFocus(event) {
      this.$emit('focus', event);
    }

  }
};

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

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "r64__button",
    class: _vm.buttonClasses,
    attrs: {
      "type": _vm.type
    },
    on: {
      "click": _vm.onClick,
      "blur": _vm.onBlur,
      "focus": _vm.onFocus
    }
  }, [!_vm.loading ? _vm._t("default") : _vm._t("loading", [_c('div', {
    staticClass: "loader",
    class: _vm.loadingClasses
  })])], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-211a6710_0", {
    source: ".loader,.loader:after{display:block;border-radius:50%;width:24px;height:24px}.loader{position:relative;border-top:.2rem solid rgba(255,255,255,.2);border-right:.2rem solid rgba(255,255,255,.2);border-bottom:.2rem solid rgba(255,255,255,.2);border-left:.2rem solid #fff;transform:translateZ(0);animation:load8 1.1s infinite linear}.loader-outline{border-left:.2rem solid #1a202c}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

var R64Button$1 = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

var R64Checkbox = {
  wrapperClass: 'mb-1 h-12',
  labelClass: 'ml-2 text-black',
  baseClass: 'appearance-none outline-none select-none w-4 h-4 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:shadow-outline focus:border-blue-400',
  primaryClass: 'text-black',
  secondaryClass: 'text-indigo-500',
  errorClass: 'text-red-500',
  disabledClass: 'opacity-50',
  errorMessageClass: 'mt-1 text-sm text-red-500'
};

var R64Radio = {
  wrapperClass: 'mb-1 h-12',
  labelClass: 'ml-2 text-black',
  baseClass: 'appearance-none outline-none select-none w-4 h-4 bg-white border border-gray-400 rounded-full transition duration-150 ease-in-out focus:shadow-outline focus:border-blue-400',
  primaryClass: 'text-black',
  secondaryClass: 'text-indigo-500',
  errorClass: 'text-red-500',
  disabledClass: 'opacity-50',
  errorMessageClass: 'mt-1 text-sm text-red-500'
};

var R64Input = {
  wrapperClass: 'mb-1 h-24',
  labelClass: 'block leading-tight text-gray-800',
  baseClass: 'leading-snug outline-none mt-1 px-3 py-2 block w-full text-gray-900 rounded-md focus:shadow-outline focus:border-blue-400',
  primaryClass: 'border border-gray-400 placeholder-gray-600',
  secondaryClass: 'border border-indigo-300 placeholder-indigo-400',
  errorClass: 'border border-red-600 placeholder-red-400',
  disabledClass: 'border border-gray-400 bg-gray-100 text-gray-900 cursor-not-allowed opacity-50',
  helpMessageClass: 'mt-1 text-sm text-gray-600',
  errorMessageClass: 'mt-1 text-sm text-red-500',
  withoutLabelClass: 'h-auto mb-1'
};

var R64Select = {
  wrapperClass: 'mb-1 h-24',
  labelClass: 'block mb-1 text-gray-700',
  baseClass: 'leading-snug w-full transition duration-150 ease-in-out appearance-none py-2 pr-10 pl-3 rounded',
  primaryClass: 'border border-gray-400 bg-white',
  secondaryClass: 'border border-indigo-300 bg-white',
  errorClass: 'border border-red-500 bg-white',
  disabledClass: 'opacity-50',
  errorMessageClass: 'mt-1 text-sm text-red-500'
};

var R64Textarea = {
  wrapperClass: 'mb-1 h-auto',
  labelClass: 'block leading-tight text-gray-800',
  baseClass: 'leading-snug outline-none mt-1 px-3 py-2 block w-full text-gray-900 rounded-md focus:shadow-outline focus:border-blue-400',
  primaryClass: 'border border-gray-400 placeholder-gray-600',
  secondaryClass: 'border border-indigo-300 placeholder-indigo-400',
  errorClass: 'border border-red-600 placeholder-red-400',
  disabledClass: 'border border-gray-400 bg-gray-100 text-gray-900 cursor-not-allowed opacity-50',
  helpMessageClass: 'mt-1 text-sm text-gray-600',
  errorMessageClass: 'mt-1 text-sm text-red-500',
  withoutLabelClass: 'h-auto mb-1'
};

var R64Collapse = {
  baseClass: 'shadow rounded h-auto my-6 p-4',
  disabledClass: 'opacity-50',
  primaryClass: 'bg-white text-black',
  secondaryClass: 'bg-indigo-500 text-white'
};

const defaultTheme = {
  R64Button,
  R64Checkbox,
  R64Radio,
  R64Input,
  R64Select,
  R64Textarea,
  R64Collapse
};

var formInput = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    v: {
      type: Object,
      default: null
    },
    wrapperClass: {
      type: String,
      default: ''
    },
    baseClass: {
      type: String,
      default: ''
    },
    disabledClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    primaryClass: {
      type: String,
      default: ''
    },
    secondaryClass: {
      type: String,
      default: ''
    },
    errorClass: {
      type: String,
      default: ''
    },
    errorMessageClass: {
      type: String,
      default: ''
    },
    helpMessageClass: {
      type: String,
      default: ''
    },
    withoutLabelClass: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      classes: {
        wrapper: '',
        base: '',
        disabled: '',
        label: '',
        primary: '',
        secondary: '',
        error: '',
        errorMessage: '',
        helpMessage: ''
      }
    };
  },

  created() {
    this.classes.wrapper = this.wrapperClass || this.componentClasses.wrapperClass;
    this.classes.base = this.baseClass || this.componentClasses.baseClass;
    this.classes.disabled = this.disabledClass || this.componentClasses.disabledClass;
    this.classes.label = this.labelClass || this.componentClasses.labelClass;
    this.classes.primary = this.primaryClass || this.componentClasses.primaryClass;
    this.classes.secondary = this.secondaryClass || this.componentClasses.secondaryClass;
    this.classes.error = this.errorClass || this.componentClasses.errorClass;
    this.classes.errorMessage = this.errorMessageClass || this.componentClasses.errorMessageClass;
    this.classes.helpMessage = this.helpMessageClass || this.componentClasses.helpMessageClass;
    this.classes.withoutLabel = this.withoutLabelClass || this.componentClasses.withoutLabelClass;
  },

  computed: {
    formInputClasses() {
      const classes = [this.classes.base];

      if (this.disabled) {
        classes.push(this.classes.disabled);
      }

      if (this.hasError) {
        classes.push(this.classes.error);
      } else if (this.secondary) {
        classes.push(this.classes.secondary);
      } else {
        classes.push(this.classes.primary);
      }

      return classes;
    },

    hasError() {
      if (this.v) {
        return this.v.$invalid && this.v.$dirty && !this.typing;
      }

      return this.error && !this.typing;
    },

    componentName() {
      return this.$options._componentTag || '';
    },

    componentClasses() {
      return defaultTheme[this.componentName];
    }

  }
};

//
var script$1 = {
  name: 'R64Checkbox',
  inheritAttrs: false,
  mixins: [formInput],
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange() {
      if (this.v) this.v.$touch();
      this.$emit('change', !this.value);
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "r64__button",
    class: _vm.classes.wrapper
  }, [_c('label', {
    staticClass: "inline-flex items-center"
  }, [_c('input', _vm._b({
    class: _vm.formInputClasses,
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": _vm.onChange
    }
  }, 'input', _vm.$attrs, false)), _vm._v(" "), _c('span', {
    class: [_vm.classes.label]
  }, [_vm._v("\n      " + _vm._s(_vm.label) + "\n    ")])]), _vm._v(" "), _vm.hasError ? _c('p', {
    class: _vm.classes.error
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-f42f1390_0", {
    source: ".r64__button input:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

var R64Checkbox$1 = normalizeComponent_1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, browser, undefined);

//
var script$2 = {
  name: 'R64Input',
  inheritAttrs: false,
  mixins: [formInput],
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    secondary: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: ''
    },
    placeholder: {
      type: [String, Number],
      default: ''
    },
    v: {
      type: Object,
      default: null
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      hasInput: false,
      localValue: this.value,
      typing: false,
      focus: this.disabled
    };
  },

  computed: {
    inputId() {
      if (this.id) {
        return this.id;
      }

      return this._uid;
    },

    internalType() {
      const textTypes = ['date', 'phone', 'email'];

      if (textTypes.includes(this.type)) {
        return 'text';
      }

      return this.type;
    },

    hasFeedback() {
      return this.hasError || this.help;
    },

    feedback() {
      if (this.hasError) {
        return this.errorMessage;
      }

      return this.help;
    },

    feedbackClass() {
      return this.hasError ? this.classes.errorMessage : this.classes.helpMessage;
    }

  },
  watch: {
    value(newVal) {
      this.localValue = newVal;
    },

    localValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('input', newVal);
      }
    }

  },

  destroyed() {
    clearTimeout(this.typing);
  },

  methods: {
    onBlur(event) {
      this.focus = false;
      this.$emit('blur', event);
    },

    onFocus(event) {
      this.focus = true;
      this.$emit('focus', event);
    },

    onInput() {
      this.hasInput = this.localValue ? this.localValue.length : false;
    },

    onKeyUp(event) {
      this.$emit('keyup', event);
    },

    isTyping(event) {
      this.$emit('keydown', event);
      if (event.key === 'Tab') return;

      if (this.typing) {
        clearTimeout(this.typing);
      }

      const id = setTimeout(() => {
        this.typing = false;

        if (this.v && this.hasInput) {
          this.v.$touch();
        }
      }, 750);
      this.typing = id;
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "r64__input",
    class: [_vm.label ? _vm.classes.wrapper : _vm.classes.withoutLabel]
  }, [_c('label', {
    class: _vm.classes.label,
    attrs: {
      "for": _vm.inputId
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n  ")]), _vm._v(" "), _vm.internalType === 'checkbox' ? _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localValue,
      expression: "localValue"
    }],
    ref: _vm.inputId,
    class: _vm.formInputClasses,
    attrs: {
      "id": _vm.inputId,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.localValue) ? _vm._i(_vm.localValue, null) > -1 : _vm.localValue
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "keydown": _vm.isTyping,
      "keyup": _vm.onKeyUp,
      "change": function ($event) {
        var $$a = _vm.localValue,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.localValue = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.localValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.localValue = $$c;
        }
      }
    }
  }, 'input', _vm.$attrs, false)) : _vm.internalType === 'radio' ? _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localValue,
      expression: "localValue"
    }],
    ref: _vm.inputId,
    class: _vm.formInputClasses,
    attrs: {
      "id": _vm.inputId,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.localValue, null)
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "keydown": _vm.isTyping,
      "keyup": _vm.onKeyUp,
      "change": function ($event) {
        _vm.localValue = null;
      }
    }
  }, 'input', _vm.$attrs, false)) : _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localValue,
      expression: "localValue"
    }],
    ref: _vm.inputId,
    class: _vm.formInputClasses,
    attrs: {
      "id": _vm.inputId,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "type": _vm.internalType
    },
    domProps: {
      "value": _vm.localValue
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.localValue = $event.target.value;
      }, _vm.onInput],
      "keydown": _vm.isTyping,
      "keyup": _vm.onKeyUp
    }
  }, 'input', _vm.$attrs, false)), _vm._v(" "), _vm.hasFeedback ? _c('p', {
    class: _vm.feedbackClass
  }, [_vm._v("\n    " + _vm._s(_vm.feedback) + "\n  ")]) : _vm._e()]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

var R64Input$1 = normalizeComponent_1({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

//
var script$3 = {
  name: 'R64Textarea',
  inheritAttrs: false,
  mixins: [formInput],
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    secondary: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: ''
    },
    placeholder: {
      type: [String, Number],
      default: ''
    },
    v: {
      type: Object,
      default: null
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      hasInput: false,
      localValue: this.value,
      typing: false,
      focus: this.disabled
    };
  },

  computed: {
    textareaId() {
      if (this.id) {
        return this.id;
      }

      return this._uid;
    },

    hasFeedback() {
      return this.hasError || this.help;
    },

    feedback() {
      if (this.hasError) {
        return this.errorMessage;
      }

      return this.help;
    },

    feedbackClass() {
      return this.hasError ? this.classes.errorMessage : this.classes.helpMessage;
    }

  },
  watch: {
    value(newVal) {
      this.localValue = newVal;
    },

    localValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('input', newVal);
      }
    }

  },

  destroyed() {
    clearTimeout(this.typing);
  },

  methods: {
    onBlur(event) {
      this.focus = false;
      this.$emit('blur', event);
    },

    onFocus(event) {
      this.focus = true;
      this.$emit('focus', event);
    },

    onInput() {
      this.hasInput = this.localValue.length;
    },

    onKeyUp(event) {
      this.$emit('keyup', event);
    },

    isTyping(event) {
      this.$emit('keydown', event);
      if (event.key === 'Tab') return;

      if (this.typing) {
        clearTimeout(this.typing);
      }

      const id = setTimeout(() => {
        this.typing = false;

        if (this.v && this.hasInput) {
          this.v.$touch();
        }
      }, 750);
      this.typing = id;
    }

  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "r64__textarea",
    class: [_vm.label ? _vm.classes.wrapper : _vm.classes.withoutLabel]
  }, [_c('label', {
    class: _vm.classes.label,
    attrs: {
      "for": _vm.textareaId
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n  ")]), _vm._v(" "), _c('textarea', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localValue,
      expression: "localValue"
    }],
    ref: _vm.textareaId,
    class: _vm.formInputClasses,
    attrs: {
      "id": _vm.textareaId,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.localValue
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.localValue = $event.target.value;
      }, _vm.onInput],
      "keydown": _vm.isTyping,
      "keyup": _vm.onKeyUp
    }
  }, 'textarea', _vm.$attrs, false)), _vm._v(" "), _vm.hasFeedback ? _c('p', {
    class: _vm.feedbackClass
  }, [_vm._v("\n    " + _vm._s(_vm.feedback) + "\n  ")]) : _vm._e()]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

var R64Textarea$1 = normalizeComponent_1({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

//
var script$4 = {
  name: 'R64Radio',
  inheritAttrs: false,
  mixins: [formInput],
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    radioValue: {
      type: [String, Number, Boolean],
      required: true
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked() {
      return this.value === this.radioValue;
    },

    radioId() {
      if (this.id) {
        return this.id;
      }

      return this._uid;
    }

  }
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "r64__radio",
    class: _vm.classes.wrapper
  }, [_c('label', {
    staticClass: "inline-flex items-center",
    attrs: {
      "for": _vm.radioId
    }
  }, [_c('input', _vm._b({
    class: _vm.formInputClasses,
    attrs: {
      "id": "radioId",
      "type": "radio",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', _vm.radioValue);
      }
    }
  }, 'input', _vm.$attrs, false)), _vm._v(" "), _c('span', {
    class: _vm.classes.label
  }, [_vm._v(_vm._s(_vm.label))])]), _vm._v(" "), _vm.hasError ? _c('p', {
    class: _vm.classes.errorMessage
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = function (inject) {
  if (!inject) return;
  inject("data-v-d3962244_0", {
    source: ".r64__radio input:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject SSR */

var R64Radio$1 = normalizeComponent_1({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, browser, undefined);

//
var script$5 = {
  name: 'R64Select',
  inheritAttrs: false,
  mixins: [formInput],
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: 'r64-select'
    },
    placeholder: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [Date, String, Number],
      default: ''
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      localValue: this.value,
      rawValue: this.value
    };
  },

  computed: {
    selectId() {
      if (this.id) {
        return this.id;
      }

      return this._uid;
    }

  },
  watch: {
    value(newVal) {
      this.localValue = newVal;
    },

    localValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (this.v) this.v.$touch();
        this.$emit('input', newVal);
      }
    }

  },
  methods: {
    onChange(event) {
      this.localValue = event.target.value;
      this.$emit('change', event.target.value);
    },

    onClick() {
      const isFocused = document.activeElement === this.$refs.select || document.activeElement === this.$refs.select.$el;

      if (isFocused) {
        this.$emit('focus', event);
      }
    }

  }
};

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "r64__select",
    class: [_vm.classes.wrapper]
  }, [_vm.label ? _c('label', {
    class: _vm.classes.label,
    attrs: {
      "for": _vm.selectId
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('select', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localValue,
      expression: "localValue"
    }],
    ref: "select",
    class: _vm.formInputClasses,
    attrs: {
      "id": _vm.selectId,
      "disabled": _vm.disabled,
      "name": _vm.name,
      "placeholder": _vm.placeholder
    },
    on: {
      "click": _vm.onClick,
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.localValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onChange]
    }
  }, 'select', _vm.$attrs, false), [_vm.placeholder ? _c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("\n      " + _vm._s(_vm.placeholder) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.options, function (option) {
    return _c('option', {
      key: option.value,
      domProps: {
        "value": option.value
      }
    }, [_vm._v("\n      " + _vm._s(option.label) + "\n    ")]);
  })], 2), _vm._v(" "), _vm.hasError ? _c('p', {
    class: _vm.classes.errorMessage
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = function (inject) {
  if (!inject) return;
  inject("data-v-feb97d56_0", {
    source: ".r64__select select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 1rem center;background-size:1.5em 1.5em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject SSR */

var R64Select$1 = normalizeComponent_1({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, browser, undefined);

const components = {
  R64Button: R64Button$1,
  R64Checkbox: R64Checkbox$1,
  R64Input: R64Input$1,
  R64Textarea: R64Textarea$1,
  R64Radio: R64Radio$1,
  R64Select: R64Select$1
};

const extendComponent = (Vue, theme, component) => {
  const currentTheme = defaultTheme[component];
  const newTheme = { ...currentTheme,
    ...theme
  };
  const {
    props
  } = components[component];
  Object.keys(newTheme).forEach(key => {
    const prop = {
      default: () => newTheme[key]
    };
    props[key] = prop;
  });
  return Vue.extend({ ...components[component],
    ...{
      props
    }
  });
};

const install = function (Vue, options = {}) {
  if (install.installed) return;
  install.installed = true;
  const currentTheme = { ...defaultTheme,
    ...options
  };
  Object.keys(components).forEach(component => {
    Vue.component(component, extendComponent(Vue, currentTheme[component], component));
  });
};

const plugin = {
  install
};

export default plugin;
export { R64Button$1 as R64Button, R64Checkbox$1 as R64Checkbox, R64Input$1 as R64Input, R64Radio$1 as R64Radio, R64Select$1 as R64Select, R64Textarea$1 as R64Textarea };
