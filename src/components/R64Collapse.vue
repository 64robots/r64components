<template>
  <div :class="[ baseClass, disabled ? disabledClass : null ]" @click="open = !open">
    <div>
      <slot name="header" >{{ header }}</slot>
    </div>
    <!-- accordion -->
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div
        v-show="open"
        class="rounded-b bg-white transition-all duration-300 ease-out overflow-hidden"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import R64CollapseClasses from "../themes/default/R64Collapse";

const {
  baseClass,
  disabledClass
} = R64CollapseClasses;

export default {
  name: 'R64Collapse',

  props: {
    value: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    header: {
      type: String,
      default: ''
    },

    baseClass: {
      type: String,
      default: baseClass,
    },

    disabledClass: {
      type: String,
      default: disabledClass,
    }
  },

  computed: {
    open: {
      get() {
        if (this.disabled) {
          return false
        }
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
    },
  },
}
</script>
