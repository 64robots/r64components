import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { Center } from "../stories/_decorators";


import R64Button from "../src/components/R64Button.vue";

storiesOf("R64Button", module)
  .addDecorator(Center)
  .add("Variants", () => ({
    ethods: {
      submit() {
        action("emit click")(null);
      }
    },
    components: { R64Button },
    template: `
      <div class="container mx-auto py-6 flex flex-wrap items-center justify-around">
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button>Primary</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button secondary>Secondary</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button error>Error</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button disabled>Primary disabled</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button disabled secondary>Secondary disabled</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button disabled error>Error disabled</R64Button></div>
      </div>
    `
  }))
  .add("Small", () => ({
    methods: {
      submit() {
        action("emit click")(null);
      }
    },
    components: { R64Button },
    template: `
      <div class="container mx-auto py-6 flex flex-wrap items-center justify-around">
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button small>Primary</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button small secondary>Secondary</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button small error>Error</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button small disabled>Primary disabled</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button small disabled secondary>Secondary disabled</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button small disabled error>Error disabled</R64Button></div>
      </div>
    `
  }))
  .add("Outline", () => ({
    methods: {
      submit() {
        action("emit click")(null);
      }
    },
    components: { R64Button },
    template: `
      <div class="container mx-auto py-6 flex flex-wrap items-center justify-around">
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button outline>Primary</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button outline secondary>Secondary</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button outline error>Error</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button outline disabled>Primary disabled</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button outline disabled secondary>Secondary disabled</R64Button></div>
        <div class="px-3 w-1/3 flex items-center my-4"><R64Button outline disabled error>Error disabled</R64Button></div>
      </div>
    `
  }))
  .add("Full width", () => ({
    methods: {
      submit() {
        action("emit click")(null);
      }
    },
    components: { R64Button },
    template: `
      <div class="container mx-auto py-6 flex flex-col items-center justify-around">
        <R64Button class="my-3" full>Primary</R64Button>
        <R64Button class="my-3" full secondary>Secondary</R64Button>
        <R64Button class="my-3" full error>Error</R64Button>
        <R64Button class="my-3" full disabled>Primary disabled</R64Button>
        <R64Button class="my-3" full disabled secondary>Secondary disabled</R64Button>
        <R64Button class="my-3" full disabled error>Error disabled</R64Button>
      </div>
    `
  }));
