var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Watch, Method, Event } from '@stencil/core';
let NeonDialog = class NeonDialog {
    refs = {
        dialog: null
    };
    /**
    * The `resolve` callback of the promise
    */
    _resolve = null;
    dialogOpened;
    dialogClosed;
    /**
    * The dialog will open if set.
    * Can also be used to render the dialog already open.
    */
    open = false;
    /**
    * The text in the title of the dialog.
    * This text gets overwritten, if the title slot is used (e.g. `<div slot="title">My Title</div>`)
    */
    titleText = '';
    render() {
        return (h("dialog", { id: "ne-diag-outer", ref: ($el) => this.refs.dialog = $el },
            h("div", { id: "ne-diag-inner" },
                h("div", { id: "ne-diag-header" },
                    h("div", { id: "ne-title" },
                        h("slot", { name: "title" }, this.titleText)),
                    h("div", { id: "ne-icon-close", onClick: () => this.close() },
                        h("span", null, "X"))),
                h("div", { id: "ne-diag-body" },
                    h("slot", null),
                    h("slot", { name: "body" })),
                h("div", { id: "ne-diag-footer" },
                    h("slot", { name: "footer" })))));
    }
    watchOpen(newValue) {
        if (newValue) {
            this.refs.dialog.showModal();
            this.dialogOpened.emit(this);
        }
        else {
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
    async close() {
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
    show() {
        let promise = new Promise((resolve, _reject) => {
            this._resolve = resolve;
        });
        this.open = true;
        return promise;
    }
};
__decorate([
    Event()
], NeonDialog.prototype, "dialogOpened", void 0);
__decorate([
    Event()
], NeonDialog.prototype, "dialogClosed", void 0);
__decorate([
    Prop({ reflect: true, mutable: true })
], NeonDialog.prototype, "open", void 0);
__decorate([
    Prop({ attribute: 'title-text' })
], NeonDialog.prototype, "titleText", void 0);
__decorate([
    Watch('open')
], NeonDialog.prototype, "watchOpen", null);
__decorate([
    Method()
], NeonDialog.prototype, "close", null);
__decorate([
    Method()
], NeonDialog.prototype, "show", null);
NeonDialog = __decorate([
    Component({
        tag: 'ne-dialog',
        styleUrl: 'ne-dialog.css',
        shadow: true,
    })
], NeonDialog);
export { NeonDialog };
