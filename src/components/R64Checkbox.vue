<template>
  <div :class="classes.wrapper">
    <label class="inline-flex items-center">
      <input
        type="checkbox"
        v-bind="$attrs"
        :class="formInputClasses"
        :disabled="disabled"
        :checked="value"
        @change="onChange"
      />
      <span :class="[classes.label]">
        {{ label }}
      </span>
    </label>
    <p v-if="hasError" :class="classes.error">{{ errorMessage }}</p>
  </div>
</template>
<script>
import formInput from '../mixins/formInput'

export default {
  name: "R64Checkbox",

  mixins: [formInput],

  props: {
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
      default: false,
    },
  },

  methods: {
    onChange() {
      if (this.v) this.v.$touch()
      this.$emit('change', !this.value)
    }
  }
};
</script>
<style>
input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: 50%;
}
</style>
