# ne-input



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                          | Type      | Default |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------- |
| `open`      | `open`       | The dialog will open if set. Can also be used to render the dialog already open.                                                     | `boolean` | `false` |
| `titleText` | `title-text` | The text in the title of the dialog. This text gets overwritten, if the title slot is used (e.g. `<div slot="title">My Title</div>`) | `string`  | `''`    |


## Events

| Event          | Description | Type                      |
| -------------- | ----------- | ------------------------- |
| `dialogClosed` |             | `CustomEvent<NeonDialog>` |
| `dialogOpened` |             | `CustomEvent<NeonDialog>` |


## Methods

### `close() => Promise<NeonDialog>`

Closes the dialog.

#### Returns

Type: `Promise<NeonDialog>`



### `show() => Promise<void>`

Opens the dialog and returns a promise,
which is resolved when the dialog closes.
The promise always resolves to `null`.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
