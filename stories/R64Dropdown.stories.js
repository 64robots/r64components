import { storiesOf } from '@storybook/vue'
import { Center } from '../stories/_decorators'

import R64Dropdown from '../src/components/R64Dropdown.vue'

storiesOf('R64Dropdown', module)
  .addDecorator(Center)
  .add('Variants', () => ({
    components: { R64Dropdown },
    template: `
      <div class="container mx-auto py-6 flex flex-wrap items-center justify-center">
        <R64Dropdown class="w-1/2 mb-5 px-3" label="Primary" :value="false">
          <template #header>Dropdown header</template>
          <div class="flex flex-col">
              <div class="mb-3">First Item</div>
              <div class="mb-3">Second Item</div>
              <div class="mb-3">Third Item</div>
          </div>
        </R64Dropdown>
      </div>
    `
  }))
