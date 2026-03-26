import { h } from "@stencil/core";
export class NeonDialog {
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
        return (h("dialog", { key: '1fd3e064f013ea98e55c67d342c51763d222fca3', id: "ne-diag-outer", ref: ($el) => this.refs.dialog = $el }, h("div", { key: '1d5f3d2d1d80769c28e2bbedff091288fa7f9a61', id: "ne-diag-inner" }, h("div", { key: '46f1cc18e1eea3077551fcd02b9d6a1c471f3e6d', id: "ne-diag-header" }, h("div", { key: 'd15357ed9477f1bc257501bfb7f5465f25473d01', id: "ne-title" }, h("slot", { key: '0179709eec726568029846774887aa22dbaba59f', name: "title" }, this.titleText)), h("div", { key: '8ca0c3bcce7b02c0521e4663393559397f53509a', id: "ne-icon-close", onClick: () => this.close() }, h("span", { key: '544bf371883e4f8a105ac3d17f0f716ae443a605' }, "X"))), h("div", { key: 'bc9c8691de88006345ece7a7f0c5a99d69f5fc96', id: "ne-diag-body" }, h("slot", { key: '9984e690601491a813ceb1c3351bdb7017349523' }), h("slot", { key: 'c0873ab74fb04795a73b77ef328e5a009cbe4e5a', name: "body" })), h("div", { key: '1ae9c844659906b9f9093ae482e68dca9d5ebf93', id: "ne-diag-footer" }, h("slot", { key: '84ed28d1c222a63a66e50213f54f33a388db1cf5', name: "footer" })))));
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
    static get is() { return "ne-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ne-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ne-dialog.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The dialog will open if set.\nCan also be used to render the dialog already open."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            },
            "titleText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The text in the title of the dialog.\nThis text gets overwritten, if the title slot is used (e.g. `<div slot=\"title\">My Title</div>`)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "title-text",
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "dialogOpened",
                "name": "dialogOpened",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "NeonDialog",
                    "resolved": "NeonDialog",
                    "references": {
                        "NeonDialog": {
                            "location": "global",
                            "id": "global::NeonDialog"
                        }
                    }
                }
            }, {
                "method": "dialogClosed",
                "name": "dialogClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "NeonDialog",
                    "resolved": "NeonDialog",
                    "references": {
                        "NeonDialog": {
                            "location": "global",
                            "id": "global::NeonDialog"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "close": {
                "complexType": {
                    "signature": "() => Promise<NeonDialog>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "NeonDialog": {
                            "location": "global",
                            "id": "global::NeonDialog"
                        }
                    },
                    "return": "Promise<NeonDialog>"
                },
                "docs": {
                    "text": "Closes the dialog.",
                    "tags": []
                }
            },
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the dialog and returns a promise,\nwhich is resolved when the dialog closes.\nThe promise always resolves to `null`.",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "watchOpen"
            }];
    }
}
