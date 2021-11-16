<template>
  <div class="r64__select" :class="[classes.wrapper]">
    <label v-if="label" :class="classes.label">
      {{ label }}
    </label>
    <select
      ref="select"
      v-model="localValue"
      v-bind="$attrs"
      :class="formInputClasses"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      @click="onClick"
      @change="onChange"
    >
      <option v-if="placeholder" :value="null">
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <p v-if="hasError" :class="classes.errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import formInput from '../mixins/formInput'

export default {
  name: 'R64Select',

  inheritAttrs: false,

  mixins: [formInput],

  props: {
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
    }
  },

  watch: {
    value(newVal) {
      this.localValue = newVal
    },

    localValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (this.v) this.v.$touch()
        this.$emit('input', newVal)
      }
    }
  },

  methods: {
    onChange(event) {
      this.localValue = event.target.value
      this.$emit('change', event.target.value)
    },

    onClick() {
      const isFocused =
        document.activeElement === this.$refs.select ||
        document.activeElement === this.$refs.select.$el
      if (isFocused) {
        this.$emit('focus', event)
      }
    }
  }
}
</script>
<style>
.r64__select select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em 1.5em;
}
</style>
