import { storiesOf } from '@storybook/vue'
import { Center } from '../stories/_decorators'

import R64Radio from '../src/components/R64Radio.vue'

storiesOf('R64Radio', module)
  .addDecorator(Center)
  .add('Variants', () => ({
    components: { R64Radio },
    template: `
      <div class="container mx-auto py-6 flex flex-col">
        <R64Radio label="Radio" name="radio" value="check" radioValue="not" />
        <R64Radio label="Radio disabled" name="radio_disabled" value="check" radioValue="not" disabled />
        <R64Radio label="Radio" error name="radio" value="check" radioValue="not" error-message="Please introduce a valid user input" />

        <R64Radio label="Radio" name="radio_checked" value="check" radioValue="check" />
        <R64Radio label="Radio" secondary name="radio_secondary_checked" value="check" radioValue="check" />
        <R64Radio label="Radio" error name="radio_error_checked" value="error" radioValue="error" error-message="Please introduce a valid user input" />

        <R64Radio label="Radio" disabled name="radio_disabled" value="checked" radioValue="checked" />
        <R64Radio label="Radio" disabled secondary name="radio_secondary_disabled" value="checked" radioValue="checked" />
        <R64Radio label="Radio" disabled error name="radio_error_disabled" value="checked" radioValue="checked" />
      </div>
    `
  }))
