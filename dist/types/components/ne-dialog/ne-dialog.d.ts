import { EventEmitter } from '../../stencil-public-runtime';
export type DialogType = 'error' | 'warn' | 'info' | 'success';
export declare class NeonDialog {
    private refs;
    /**
    * The `resolve` callback of the promise
    */
    private _resolve;
    dialogOpened: EventEmitter<NeonDialog>;
    dialogClosed: EventEmitter<NeonDialog>;
    /**
    * The dialog will open if set.
    * Can also be used to render the dialog already open.
    */
    open: boolean;
    /**
    * The text in the title of the dialog.
    * This text gets overwritten, if the title slot is used (e.g. `<div slot="title">My Title</div>`)
    */
    titleText: string;
    render(): any;
    watchOpen(newValue: boolean): void;
    /**
    * Closes the dialog.
    */
    close(): Promise<NeonDialog>;
    /**
    * Opens the dialog and returns a promise,
    * which is resolved when the dialog closes.
    * The promise always resolves to `null`.
    */
    show(): Promise<void>;
}
