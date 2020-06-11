import defaultClasses from '../themes/default.js'

export default {
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
        helpMessage: '',
      }
    }
  },
  created() {
    this.classes.wrapper = this.wrapperClass || this.componentClasses.wrapperClass
    this.classes.base = this.baseClass || this.componentClasses.baseClass
    this.classes.disabled = this.disabledClass || this.componentClasses.disabledClass
    this.classes.label = this.labelClass || this.componentClasses.labelClass
    this.classes.primary = this.primaryClass || this.componentClasses.primaryClass
    this.classes.secondary = this.secondaryClass || this.componentClasses.secondaryClass
    this.classes.error = this.errorClass || this.componentClasses.errorClass
    this.classes.errorMessage = this.errorMessageClass || this.componentClasses.errorMessageClass
    this.classes.helpMessage = this.helpMessageClass || this.componentClasses.helpMessageClass
    this.classes.withoutLabel = this.withoutLabelClass || this.componentClasses.withoutLabelClass
  },
  computed: {
    formInputClasses() {
      const classes = [this.classes.base]

      if (this.disabled) {
        classes.push(this.classes.disabled)
      }

      if (this.hasError) {
        classes.push(this.classes.error)
      } else if (this.secondary) {
        classes.push(this.classes.secondary)
      } else {
        classes.push(this.classes.primary)
      }

      return classes
    },

    hasError() {
      if (this.v) {
        return this.v.$invalid && this.v.$dirty && !this.typing
      }

      return this.error && !this.typing
    },

    componentName() {
      return this.$options._componentTag || ''
    },

    componentClasses() {
      return defaultClasses[this.componentName]
    }
  }
}
