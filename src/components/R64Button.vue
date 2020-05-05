<template>
  <button :class="buttonClasses" :type="type" @click="onClick" @blur="onBlur" @focus="onFocus">
    <slot v-if="!loading" />
    <slot v-else name="loading">
      <div class="loader" :class="loadingClasses" />
    </slot>
  </button>
</template>

<script>
import R64ButtonClasses from "../themes/default/R64Button";

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
  loadingClass,
} = R64ButtonClasses;

export default {
  name: "R64Button",

  props: {
    type: {
      type: String,
      default: "button"
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
      const classes = [baseClass];

      // REFACTOR
      if (this.outline) {
        classes.push(this.outlineClass);
        if (this.secondary) {
          classes.push(this.secondaryOutlineClass);
        } else if(this.error) {
          classes.push(this.errorOutlineClass)
        } else {
          classes.push(this.primaryOutlineClass);
        }
      } else {
        if (this.secondary) {
          classes.push(this.secondaryClass);
        } else if(this.error) {
          classes.push(this.errorClass)
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
        return this.loadingClass
      }
      return this.outline ? 'loader-outline' : ''
    }
  },

  methods: {
    onClick (event) {
      this.$emit('click', event)
    },

    onBlur (event) {
      this.$emit('blur', event)
    },

    onFocus (event) {
      this.$emit('focus', event)
    },
  }
};
</script>
<style>
.loader,
.loader:after {
  display: block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
.loader {
  position: relative;
  border-top: 0.2rem solid rgba(255, 255, 255, 0.2);
  border-right: 0.2rem solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.2rem solid rgba(255, 255, 255, 0.2);
  border-left: 0.2rem solid #ffffff;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}
.loader-outline {
  border-left: 0.2rem solid #1a202c;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
