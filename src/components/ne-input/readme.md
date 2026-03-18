# ne-input



<!-- Auto Generated Below -->


## Overview

A custom styled input element with additional features.

## Properties

| Property      | Attribute     | Description                                                                                                   | Type                                                                                                                        | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `default`     | `default`     | The default value set when the input is empty                                                                 | `string`                                                                                                                    | `undefined` |
| `disabled`    | `disabled`    | Disables the input. Form values are not submitted.                                                            | `boolean`                                                                                                                   | `false`     |
| `loading`     | `loading`     | Shows a loading animation inside the element                                                                  | `boolean`                                                                                                                   | `false`     |
| `name`        | `name`        | The name used in context of `<form>` elements                                                                 | `string`                                                                                                                    | `undefined` |
| `pattern`     | `pattern`     | The pattern used when checking the validity of the input.                                                     | `string`                                                                                                                    | `undefined` |
| `placeholder` | `placeholder` | This text is shown to the user when the input is empty. It is **not** used as value (use `default` for this). | `string`                                                                                                                    | `undefined` |
| `readonly`    | `readonly`    | Disables the input for user input, but `<form>` values are still submitted.                                   | `boolean`                                                                                                                   | `false`     |
| `required`    | `required`    | Marks the input as required in context of `<form>` elements.                                                  | `boolean`                                                                                                                   | `false`     |
| `step`        | `step`        | The step size used when `type` is set to `number`.                                                            | `number`                                                                                                                    | `undefined` |
| `type`        | `type`        | Sets the input type (same as native `<input>` element, but less options).                                     | `"datetime" \| "email" \| "hidden" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "week"` | `undefined` |
| `value`       | `value`       | The value of the input.                                                                                       | `string`                                                                                                                    | `''`        |


## Methods

### `focus() => Promise<NeonInput>`

Focuses the input.

#### Returns

Type: `Promise<NeonInput>`



### `reset() => Promise<NeonInput>`

Resets the input to the default state.

#### Returns

Type: `Promise<NeonInput>`



### `select() => Promise<NeonInput>`

Selects (highlights) the input text.

#### Returns

Type: `Promise<NeonInput>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
