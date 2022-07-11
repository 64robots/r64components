<template>
  <div class="r64__radio" :class="classes.wrapper">
    <label :for="radioId" class="inline-flex items-center">
      <input
        id="radioId"
        type="radio"
        v-bind="$attrs"
        :class="formInputClasses"
        :name="name"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        @click="$emit('click', radioValue)"
      >
      <span :class="classes.label">{{ label }}</span>
    </label>
    <p v-if="hasError" aria-live="assertive" :class="classes.errorMessage">{{ errorMessage }}</p>
  </div>
</template>
<script>
import formInput from '../mixins/formInput'

export default {
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
      default: false,
    },
  },
  computed: {
    checked() {
      return this.value === this.radioValue
    },

    radioId() {
      if (this.id) {
        return this.id
      }

      return this._uid
    },
  }
}
</script>
<style>
.r64__radio input:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: 50%;
}
</style>
