# Components

## R64Button

### Basic example

```html
<R64Button>Primary button</R64Button>
<R64Button secondary>Secondary button</R64Button>
<R64Button outline>Outline button</R64Button>
<R64Button full>Full width button</R64Button>
<R64Button loading>Loading button</R64Button>
```

### Events

| Event | Payload |
| ----- | ------- |
| click | event   |
| blur  | event   |
| focus | event   |

### Props

| Property  | Type    | Default value |
| --------- | ------- | ------------- |
| secondary | Boolean | false         |
| disabled  | Boolean | false         |
| error     | Boolean | false         |
| outline   | Boolean | false         |
| full      | Boolean | false         |
| small     | Boolean | false         |
| loading   | Boolean | false         |

### Class style props

- baseClass
- primaryClass
- secondaryClass
- errorClass
- outlineClass
- primaryOutlineClass
- secondaryOutlineClass
- errorOutlineClass
- smallClass
- fullClass
- disabledClass
- normalSizeClass
- loadingClass

### Default theme settings

```javascript
export default {
  baseClass: "block rounded inline-flex items-center justify-center",
  primaryClass: "bg-gray-900 text-white hover:bg-gray-800",
  secondaryClass: "bg-indigo-500 hover:bg-indigo-400 text-white",
  errorClass: "bg-red-500 text-white hover:bg-red-500",
  disabledClass: "opacity-50 pointer-events-none",
  outlineClass: "border bg-transparent text-black transition duration-150 ease-in-out",
  primaryOutlineClass: "border-gray-900 text-gray-900 hover:bg-gray-800 hover:text-white",
  secondaryOutlineClass: "border-indigo-500 text-indigo-500 hover:bg-indigo-400 hover:text-white",
  errorOutlineClass: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
  smallClass: "font-normal py-1 px-5",
  fullClass: "w-full",
  normalSizeClass: "font-semibold py-2 px-6",
  loadingClass: '',
}
```

## R64Checkbox

### Basic example

```html
<R64Checkbox>Primary checkbox</R64Checkbox>
<R64Checkbox secondary>Secondary checkbox</R64Checkbox>
<R64Checkbox error>Error checkbox</R64Checkbox>
<R64Checkbox disabled>Disabled checkbox</R64Checkbox>
```

### Events

| Event  | Payload       |
| ------ | ------------- |
| change | true \| false |

### Props

| Property  | Type    | Default value | Required |
| --------- | ------- | ------------- | -------- |
| label     | String  |               | true     |
| value     | Boolean |               | true     |
| secondary | Boolean | false         | false    |

### Class style props

- wrapperClass
- labelClass
- baseClas
- primaryClass
- secondaryClass
- errorClass
- disabledClass
- errorMessageClass

### Default theme settings

```javascript
export default {
  wrapperClass: "mb-1 h-12",
  labelClass: "ml-2 text-black",
  baseClass: "appearance-none outline-none select-none w-4 h-4 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:shadow-outline focus:border-blue-400",
  primaryClass: "text-black",
  secondaryClass: "text-indigo-500",
  errorClass: "text-red-500",
  disabledClass: "opacity-50",
  errorMessageClass: "mt-1 text-sm text-red-500"
};
```

## R64Input

### Basic example

```html
<R64Input>Primary input</R64Input>
<R64Input secondary>Secondary input</R64Input>
<R64Input error error-message="This field is required">Error input</R64Input>
<R64Input disabled>Disabled input</R64Input>
```

### Validation example

If you are working with a validation library that has an `$error` and `$dirty` property like vuelidate you can pass the validator as a prop

```javascript
<R64Input
  v-model="profile.name"
  label="Name"
  :v="$v.profile.name"
  error-message="The name introduced is too short"
/>
// in your validations
validations: {
  profile: {
    name: {
      required,
      minLength: minLength(4)
    },
  },
}

```

If you use vee-validate you can also use the `error` prop

```javascript
<validation-provider rules="required" v-slot="{ errors, invalid, dirty }">
  <R64Input
  v-model="profile.name"
  label="Name"
  :error="invalid && dirty"
  :error-message="errors[0]"
/>
</validation-provider>
```

And if you are using another validator you can use the error prop as a flag to turn it on and off

### Events

| Event   | Payload                  |
| ------- | ------------------------ |
| blur    | event                    |
| focus   | event                    |
| input   | String (new input value) |
| keydown | event                    |
| keyup   | event                    |

### Props

| Property     | Type             | Default value | Required |
| ------------ | ---------------- | ------------- | -------- |
| id           | String           | null          | false    |
| label        | String           | null          | false    |
| type         | String           | text          | false    |
| secondary    | Boolean          | false         | false    |
| help         | String           | ""            | false    |
| placeholder  | [String, Number] | ""            | false    |
| v            | Object           | null          | false    |
| errorMessage | String           | ""            | false    |

### Class style props

- wrapperClass
- labelClass
- baseClas
- primaryClass
- secondaryClass
- errorClass
- disabledClass
- errorMessageClass
- helpMessageClass
- withoutLabelClass

### Default theme settings

```javascript
export default {
  wrapperClass: "mb-1 h-24",
  labelClass: "block leading-tight text-gray-800",
  baseClass: "leading-snug outline-none mt-1 px-3 py-2 block w-full text-gray-900 rounded-md focus:shadow-outline focus:border-blue-400",
  primaryClass: "border border-gray-400 placeholder-gray-600",
  secondaryClass: "border border-indigo-300 placeholder-indigo-400",
  errorClass: "border border-red-600 placeholder-red-400",
  disabledClass: "border border-gray-400 bg-gray-100 text-gray-900 cursor-not-allowed opacity-50",
  helpMessageClass: "mt-1 text-sm text-gray-600",
  errorMessageClass: "mt-1 text-sm text-red-500",
  withoutLabelClass: "mb-1 h-auto",
};
```

## R64Textarea
### Basic example

```html
<R64Textarea>Primary input</R64Textarea>
<R64Textarea secondary>Secondary input</R64Textarea>
<R64Textarea error error-message="This field is required">Error input</R64Textarea>
<R64Textarea disabled>Disabled input</R64Textarea>
```

### Validation example

If you are working with a validation library that has an `$error` and `$dirty` property like vuelidate you can pass the validator as a prop

```javascript
<R64Textarea
  v-model="profile.message"
  label="Message"
  :v="$v.profile.message"
  error-message="The message introduced is too short"
/>
// in your validations
validations: {
  profile: {
    message: {
      required,
      minLength: minLength(4)
    },
  },
}

```

If you use vee-validate you can also use the `error` prop

```javascript
<validation-provider rules="required" v-slot="{ errors, invalid, dirty }">
  <R64Textarea
  v-model="profile.message"
  label="Message"
  :error="invalid && dirty"
  :error-message="errors[0]"
/>
</validation-provider>
```

And if you are using another validator you can use the error prop as a flag to turn it on and off

### Events

| Event   | Payload                  |
| ------- | ------------------------ |
| blur    | event                    |
| focus   | event                    |
| input   | String (new input value) |
| keydown | event                    |
| keyup   | event                    |

### Props

| Property     | Type             | Default value | Required |
| ------------ | ---------------- | ------------- | -------- |
| id           | String           | null          | false    |
| label        | String           | null          | false    |
| type         | String           | text          | false    |
| secondary    | Boolean          | false         | false    |
| help         | String           | ""            | false    |
| placeholder  | [String, Number] | ""            | false    |
| v            | Object           | null          | false    |
| errorMessage | String           | ""            | false    |

### Class style props

- wrapperClass
- labelClass
- baseClas
- primaryClass
- secondaryClass
- errorClass
- disabledClass
- errorMessageClass
- helpMessageClass
- withoutLabelClass

### Default theme settings

```javascript
export default {
  wrapperClass: "mb-1 h-32",
  labelClass: "block leading-tight text-gray-800",
  baseClass: "leading-snug outline-none mt-1 px-3 py-2 block w-full text-gray-900 rounded-md focus:shadow-outline focus:border-blue-400",
  primaryClass: "border border-gray-400 placeholder-gray-600",
  secondaryClass: "border border-indigo-300 placeholder-indigo-400",
  errorClass: "border border-red-600 placeholder-red-400",
  disabledClass: "border border-gray-400 bg-gray-100 text-gray-900 cursor-not-allowed opacity-50",
  helpMessageClass: "mt-1 text-sm text-gray-600",
  errorMessageClass: "mt-1 text-sm text-red-500",
  withoutLabelClass: "mb-1 h-auto",
};
```

## R64Radio
### Basic example

```html
<R64Radio>Primary radio</R64Radio>
<R64Radio secondary>Secondary radio</R64Radio>
<R64Radio error>Error radio</R64Radio>
<R64Radio disabled>Disabled Radio</R64Radio>
```

### Events

| Event | Payload                               |
| ----- | ------------------------------------- |
| click | [String, Number, Boolean] radio value |

### Props

| Property  | Type    | Default value | Required |
| --------- | ------- | ------------- | -------- |
| label     | String  |               | true     |
| name  | String |  | true  |
| secondary | Boolean | false         | false    |
| value | [String, Number, Boolean] |  | true |
| radioValue | [String, Number, Boolean] |  | true |

### Class style props

- wrapperClass
- labelClass
- baseClas
- primaryClass
- secondaryClass
- errorClass
- disabledClass
- errorMessageClass

### Default theme settings

```javascript
export default {
  wrapperClass: "mb-1 h-12",
  labelClass: "ml-2 text-black",
  baseClass: "appearance-none outline-none select-none w-4 h-4 bg-white border border-gray-400 rounded-full transition duration-150 ease-in-out focus:shadow-outline focus:border-blue-400",
  primaryClass: "text-black",
  secondaryClass: "text-indigo-500",
  errorClass: "text-red-500",
  disabledClass: "opacity-50",
  errorMessageClass: "mt-1 text-sm text-red-500"
};
```

## R64Select

### Basic example

```html
<R64Select
  v-model="secondaryProfile.notifications"
  :options="schedule"
  label="Notifications schedule"
/>
<R64Select
  v-model="secondaryProfile.notifications"
  :options="schedule"
  label="Notifications schedule"
  secondary
/>
```

### Events

| Event  | Payload           |
| ------ | ----------------- |
| input  | String, new value |
| change | String, new value |
| focus  | event             |

### Props

| Property    | Type             | Default value | Required |
| ----------- | ---------------- | ------------- | -------- |
| label       | String           | null          | false    |
| name        | String           | r64-select    | false    |
| placeholder | [String, Number] | null          | false    |
| secondary   | Boolean          | false         | false    |
| options     | Array            |               | true     |

### Class style props

- wrapperClass
- labelClass
- baseClas
- primaryClass
- secondaryClass
- errorClass
- disabledClass
- errorMessageClass

### Default theme settings

```javascript
export default {
  wrapperClass: "mb-1 h-24",
  labelClass: "block mb-1 text-gray-700",
  baseClass: "leading-snug w-full transition duration-150 ease-in-out appearance-none py-2 pr-10 pl-3 rounded",
  primaryClass: "border border-gray-400 bg-white",
  secondaryClass: "border border-indigo-300 bg-white",
  errorClass: "border border-red-500 bg-white",
  disabledClass: "opacity-50",
  errorMessageClass: "mt-1 text-sm text-red-500"
};
```
