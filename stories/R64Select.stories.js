import { storiesOf } from '@storybook/vue'
import { Center } from '../stories/_decorators'

import R64Select from '../src/components/R64Select.vue'

storiesOf('R64Select', module)
  .addDecorator(Center)
  .add('Variants', () => ({
    components: { R64Select },
    template: `
      <div class="container mx-auto py-6 flex flex-wrap items-center justify-around">
        <div class="w-1/2 px-12"><R64Select label="Select" :options="[{ value: 1, label: 'First Option'}]" /></div>
        <div class="w-1/2 px-12"><R64Select label="Select" :options="[{ value: 1, label: 'First Option'}]" error error-message="Introduce a valid user input" /></div>
        <div class="w-1/2 px-12"><R64Select label="Select" secondary :options="[{ value: 1, label: 'First Option'}]" /></div>
        <div class="w-1/2 px-12"><R64Select label="Select" error :options="[{ value: 1, label: 'First Option'}]" error-message="Introduce a valid user input" placeholder="placeholder" /></div>
        <div class="w-1/2 px-12"><R64Select label="Select" placeholder="placeholder" :options="[{ value: 1, label: 'First Option'}]" /></div>
        <div class="w-1/2 px-12"><R64Select label="Select" :options="[{ value: 1, label: 'First Option'}]" disabled /></div>
        <div class="w-1/2 px-12"><R64Select label="Select" secondary :options="[{ value: 1, label: 'First Option'}]" disabled /></div>
        <div class="w-1/2 px-12"><R64Select label="Select" error :options="[{ value: 1, label: 'First Option'}]" disabled /></div>
      </div>
    `
  }))
