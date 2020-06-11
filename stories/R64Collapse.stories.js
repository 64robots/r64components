import { storiesOf } from '@storybook/vue'
import { Center } from '../stories/_decorators'

import R64Collapse from '../src/components/R64Collapse.vue'

storiesOf('R64Collapse', module)
  .addDecorator(Center)
  .add('Default', () => ({
    components: { R64Collapse },
    data() {
      return {
        openSlot: false,
        openProp: false,
      }
    },
    template: `
      <div class="container mx-auto py-6 flex flex-col items-center justify-center">
        <R64Collapse class="w-1/2 mb-5 px-3" v-model="openSlot">
          <template #header>Collapse header with slot</template>
          <div class="flex flex-col pt-3">
              <div class="mb-3">First Item</div>
              <div class="mb-3">Second Item</div>
              <div class="mb-3">Third Item</div>
          </div>
        </R64Collapse>
        <R64Collapse class="w-1/2 mb-5 px-3" header="Collapse header with props" v-model="openProp">
          <div class="flex flex-col pt-3">
              <div class="mb-3">First Item</div>
              <div class="mb-3">Second Item</div>
              <div class="mb-3">Third Item</div>
          </div>
        </R64Collapse>
      </div>
    `
  }))
  .add('Disabled', () => ({
    components: { R64Collapse },
    data() {
      return {
        open: false
      }
    },
    template: `
      <div class="container mx-auto py-6 flex flex-wrap items-center justify-center">
        <R64Collapse class="w-1/2 mb-5 px-3" v-model="open" disabled>
          <template #header>Collapse header</template>
          <div class="flex flex-col py-3">
              <div class="mb-3">First Item</div>
              <div class="mb-3">Second Item</div>
              <div class="mb-3">Third Item</div>
          </div>
        </R64Collapse>
      </div>
    `
  }))
