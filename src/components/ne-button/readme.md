# ne-button



<!-- Auto Generated Below -->


## Overview

A simple button with pre-definied variants, themes and additional states.

## Properties

| Property   | Attribute  | Description                                                                                     | Type                                 | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `disabled` | `disabled` | Disables the button if set. Clicks will no longer fire events.                                  | `boolean`                            | `false`     |
| `href`     | `href`     | This property can be used to assign a link to the button. If it is clicked, the link is opened. | `string`                             | `undefined` |
| `loading`  | `loading`  | Sets the `loading` state the button. It shows a loading animation and disables inputs.          | `boolean`                            | `false`     |
| `theme`    | `theme`    | Sets the (color) theme of the button.                                                           | `"danger" \| "success" \| "warning"` | `undefined` |
| `variant`  | `variant`  | Sets the style variant of the button.                                                           | `"ghost" \| "outline" \| "primary"`  | `undefined` |


## CSS Custom Properties

| Name                                | Description                              |
| ----------------------------------- | ---------------------------------------- |
| `--he-button-backgroundColor`       | The background color of the button       |
| `--he-button-borderColor`           | The border color of the button           |
| `--he-button-borderWidth`           | The border width of the button           |
| `--he-button-color`                 | The text color of the button             |
| `--he-button-cursor`                | The default cursor type of the button    |
| `--he-button-disabled-cursor`       | The cursor type when in `disabled` state |
| `--he-button-fontSize`              | The font size of the text                |
| `--he-button-height`                | The height of the button                 |
| `--he-button-hover-backgroundColor` | The background color when hovering       |
| `--he-button-hover-borderColor`     | The border color when hovering           |
| `--he-button-hover-color`           | The text color when hovering             |
| `--he-button-loading-cursor`        | The cursor type when in `loading` state  |
| `--he-button-width`                 | The button width                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
