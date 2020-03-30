<template>
  <div :class="[classes.wrapper]">
    <label :for="inputId" :class="classes.label">
      {{ label }}
    </label>
    <input
      :id="inputId"
      :ref="inputId"
      v-model="localValue"
      v-bind="$attrs"
      :class="formInputClasses"
      :type="internalType"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      @keydown="isTyping"
      @keyup="onKeyUp"
    />
    <p v-if="hasFeedback" :class="feedbackClass">
      {{ feedback }}
    </p>
  </div>
</template>

<script>
import formInput from '../mixins/formInput'

export default {
  name: "R64Input",

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
      default: "text"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    secondary: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: ""
    },
    placeholder: {
      type: [String, Number],
      default: ""
    },
    v: {
      type: Object,
      default: null,
    },
    errorMessage: {
      type: String,
      default: ""
    },
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
      const textTypes = ["date", "phone", "email"];
      if (textTypes.includes(this.type)) {
        return "text";
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
        this.$emit("input", newVal);
      }
    },
  },

  destroyed() {
    clearTimeout(this.typing);
  },

  methods: {
    onBlur(event) {
      this.focus = false;
      this.$emit("blur", event);
    },

    onFocus(event) {
      this.focus = true;
      this.$emit("focus", event);
    },

    onInput() {
      this.hasInput = this.localValue.length;
    },

    onKeyUp(event) {
      this.$emit('keyup', event)
    },

    isTyping(event) {
      this.$emit('keydown', event)
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
</script>
