<template>
  <div>
    <div :class="dropdownClass" @click="toggle">
      <slot name="header" />
      <svg
        v-if="expanded"
        fill="none"
        class="text-gray-700 w-4 h-4"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>

      <svg
        v-else
        fill="none"
        class="text-gray-700 w-4 h-4"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div v-show="expanded" :class="itemsContainerClass">
      <slot />
    </div>
  </div>
</template>
<script>
import R64DropdownClasses from "../themes/default/R64Dropdown";

const { dropdownClass, itemsContainerClass } = R64DropdownClasses;
export default {
  name: "R64Dropdown",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    dropdownClass: {
      type: String,
      default: dropdownClass
    },
    itemsContainerClass: {
      type: String,
      default: itemsContainerClass
    }
  },

  data() {
    return {
      expanded: false
    };
  },

  created() {
    this.expanded = this.isOpened;
  },

  methods: {
    toggle(event) {
      this.expanded = !this.expanded
      this.$emit("toggle", event)
    }
  }
};
</script>
