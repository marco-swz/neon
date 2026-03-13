import { Component, Prop, h, AttachInternals, Watch, Method } from '@stencil/core';

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
  * The dialog will open if set.
  * Can also be used to render the dialog already open.
  */
  @Prop({ reflect: true })
  open: boolean = false;

  /**
  * The text in the title of the dialog.
  * This text gets overwritten, if the title slot is used (e.g. `<div slot="title">My Title</div>`)
  */
  @Prop({ attribute: 'title-text' })
  titleText: string = '';

  /**
  * If set, allows the user to close the dialog by clicking outside (on the backdrop)
  */
  //@property({ type: Boolean, attribute: 'outside-close' })
  //outsideClose: boolean = false;

  /**
  * The `resolve` callback of the promise
  */
  _resolve: null | ((value: any) => void) = null;

  render() {
    return (
      <dialog id="he-diag-outer" ref={($el) => this.refs.dialog = $el}>
        <div id="he-diag-inner">
          <div id="he-diag-header">
            <div id="he-title">
              <slot name="title">{this.titleText}</slot>
            </div>
            <div id="he-icon-close" onClick={() => this.close()}>
              <span>X</span>
            </div>
          </div>
          <div id="he-diag-body">
            <slot></slot>
            <slot name="body"></slot>
          </div>
          <div id="he-diag-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </dialog>
    );
  }

  @Watch('open')
  watchOpen(newValue: boolean): void {
    if (newValue) {
      this._show();
    } else {
      this._close();
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

    this.showModal();
    return promise;
  }

  /**
  * Opens the dialog.
  * This is the non-async alternative to `show()`.
  */
  async showModal(): Promise<NeonDialog> {
    // We don't want to call `this._close()` directly,
    // because we want to ensure `this.open` is updated.
    this.open = true;
    return this;
  }

  _close(): void {
    const $dialog = this.refs.dialog;
    if ($dialog == null) {
      return;
    }

    $dialog.close();

    const evt = new CustomEvent('close');
    this.dispatchEvent(evt);


    if (this._resolve instanceof Function) {
      this._resolve(null);
    }
  }

  _handleClickOutsideClose(e: MouseEvent): void {
    const $dialog = this._refs.dialog.value;
    if ($dialog == null) {
      return;
    }
    const rect = $dialog.getBoundingClientRect();
    const isInDialog = rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width; if (!isInDialog && e.target instanceof HeliumDialog) { this.close(); }
  }
  _show(): void {
    this._refs.dialog.value?.showModal(); const evt = new CustomEvent('show');
    this.dispatchEvent(evt);
  } /** * Creates a temporary dialog and shows the content. * @param content The body
          content of the dialog * @param type The dialog type changes the title color and text * @param title The title
          of the dialog */ static async showDialog(content: string, type: DialogType, title?: string): Promise<void> {
    return await showDialogTemp(content, type, title);
  }
}
