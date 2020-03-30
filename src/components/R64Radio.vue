<template>
  <div :class="classes.wrapper">
    <label class="inline-flex items-center">
      <input
        type="radio"
        v-bind="$attrs"
        :class="formInputClasses"
        :name="name"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        @click="$emit('click', radioValue)"
      />
      <span :class="labelClass">{{ label }}</span>
    </label>
    <p v-if="hasError" :class="classes.errorMessage">{{ errorMessage }}</p>
  </div>
</template>
<script>
import formInput from '../mixins/formInput'

export default {
  name: "R64Radio",

  mixins: [formInput],

  props: {
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
      return this.value === this.radioValue;
    },
  }
};
</script>
<style scoped>
input[type="radio"]:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: 50%;
}
</style>
