import { storiesOf } from '@storybook/vue'
import { Center } from '../stories/_decorators'

import R64Checkbox from '../src/components/R64Checkbox.vue'

storiesOf('R64Checkbox', module)
  .addDecorator(Center)
  .add('Variants', () => ({
    components: { R64Checkbox },
    template: `
      <div class="container mx-auto py-6 flex flex-wrap items-center justify-center">
        <R64Checkbox class="w-1/2 mb-5 px-3" label="Primary" :value="false" />
        <R64Checkbox class="w-1/2 mb-5 px-3" label="Primary checked" :value="true" />
        <R64Checkbox class="w-1/2 mb-5 px-3" label="Primary disabled" :value="false" disabled />
        <R64Checkbox class="w-1/2 mb-5 px-3" label="Primary disabled checked" :value="true" disabled />

        <R64Checkbox class="w-1/2 mb-5 px-3" secondary label="Secondary" :value="false" />
        <R64Checkbox class="w-1/2 mb-5 px-3" secondary label="Secondary checked" :value="true" />
        <R64Checkbox class="w-1/2 mb-5 px-3" secondary label="Secondary disabled" :value="false" disabled />
        <R64Checkbox class="w-1/2 mb-5 px-3" secondary label="Secondary disabled checked" :value="true" disabled />

        <R64Checkbox class="w-1/2 mb-5 px-3" error label="error" :value="false" error-message="You must accept the terms and conditions" />
        <R64Checkbox class="w-1/2 mb-5 px-3" error label="error checked" :value="true" error-message="Introduce a valid user input" />
      </div>
    `
  }))
