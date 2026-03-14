import { Component, Prop, h, Watch, Method, Event, EventEmitter } from '@stencil/core';

export type DialogType = 'error' | 'warn' | 'info' | 'success';

@Component({
    tag: 'ne-dialog',
    styleUrl: 'ne-dialog.css',
    shadow: true,
})
export class NeonDialog {
    private refs: {
        dialog: HTMLDialogElement
    } = {
            dialog: null
        };
    /**
    * The `resolve` callback of the promise
    */
    private _resolve: null | ((value: any) => void) = null;

    @Event() dialogOpened: EventEmitter<NeonDialog>;
    @Event() dialogClosed: EventEmitter<NeonDialog>;

    /**
    * The dialog will open if set.
    * Can also be used to render the dialog already open.
    */
    @Prop({ reflect: true, mutable: true })
    open: boolean = false;

    /**
    * The text in the title of the dialog.
    * This text gets overwritten, if the title slot is used (e.g. `<div slot="title">My Title</div>`)
    */
    @Prop({ attribute: 'title-text' })
    titleText: string = '';

    render() {
        return (
            <dialog id="ne-diag-outer" ref={($el) => this.refs.dialog = $el}>
                <div id="ne-diag-inner">
                    <div id="ne-diag-header">
                        <div id="ne-title">
                            <slot name="title">{this.titleText}</slot>
                        </div>
                        <div id="ne-icon-close" onClick={() => this.close()}>
                            <span>X</span>
                        </div>
                    </div>
                    <div id="ne-diag-body">
                        <slot></slot>
                        <slot name="body"></slot>
                    </div>
                    <div id="ne-diag-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </dialog>
        );
    }

    @Watch('open')
    watchOpen(newValue: boolean): void {
        if (newValue) {
            this.refs.dialog.showModal();
            this.dialogOpened.emit(this);
        } else {
            this.refs.dialog.close();
            this.dialogClosed.emit(this);

            if (this._resolve instanceof Function) {
                this._resolve(null);
            }
        }
    }

    /**
    * Closes the dialog.
    */
    @Method()
    async close(): Promise<NeonDialog> {
        // We don't want to call `this._close()` directly,
        // because we want to ensure `this.open` is updated.
        this.open = false;
        return this;
    }

    /**
    * Opens the dialog and returns a promise,
    * which is resolved when the dialog closes.
    * The promise always resolves to `null`.
    */
    @Method()
    show(): Promise<void> {
        let promise = new Promise<void>((resolve, _reject) => {
            this._resolve = resolve;
        })

        this.open = true;
        return promise;
    }

    /**
     * Creates a temporary dialog and shows the content.
     * @param content The body content of the dialog
    * @param type The dialog type changes the title color and text
    * @param title The titleof the dialog
    */
    //static async showDialog(content: string, type: DialogType, title?: string): Promise<void> {
    //return await showDialogTemp(content, type, title);
    //}
}
