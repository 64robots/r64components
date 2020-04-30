import { storiesOf } from '@storybook/vue'
import { Center } from '../stories/_decorators'

import R64Input from '../src/components/R64Input.vue'

storiesOf('R64Input', module)
  .addDecorator(Center)
  .add('Primary and secondary state', () => ({
    components: { R64Input },
    template: `
      <div class="container mx-auto py-6 px-24 flex flex-wrap items-center justify-around">
        <R64Input class="px-3 w-1/2" label="Email" />
        <R64Input class="px-3 w-1/2" label="Email" secondary />
        <R64Input class="px-3 w-1/2" label="Email" placeholder="jon@doe.com" />
        <R64Input class="px-3 w-1/2" label="Email" secondary placeholder="jon@doe.com"/>
        <R64Input class="px-3 w-1/2" label="Email" placeholder="jon@doe.com" help="Any text might help the user to fill the input" />
        <R64Input class="px-3 w-1/2" label="Email" secondary placeholder="jon@doe.com" help="Any text might help the user to fill the input"/>
        </div>
        `
  }))
  .add('Error state', () => ({
    components: { R64Input },
    mounted() {
      this.$refs.error.hasInput = true
    },
    template: `
      <div class="container mx-auto py-6 px-24 flex flex-wrap items-center justify-around">
        <R64Input ref="error" class="px-3 w-1/2" label="Email" error errorMessage="Please provide a valid input" />
      </div>
        `
  }))
  .add('Disabled', () => ({
    components: { R64Input },
    template: `
      <div class="container mx-auto py-6 px-24 flex flex-wrap items-center justify-around">
        <R64Input class="px-3 w-1/2" label="Email" disabled/>
        <R64Input class="px-3 w-1/2" label="Email" placeholder="jon@doe.com" disabled/>
        <R64Input class="px-3 w-1/2" label="Email" value="jon@doe.com" disabled/>
        <R64Input class="px-3 w-1/2" label="Email" value="jon@doe.com" help="Any text might help the user to fill the input" disabled/>
      </div>
    `
  }))
