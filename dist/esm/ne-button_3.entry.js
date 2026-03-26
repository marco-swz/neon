import { r as registerInstance, h, c as createEvent } from './index-C2QtI0Sh.js';

const neButtonCss = () => `:host{--ne-button-loading-cursor:default;--ne-button-cursor:pointer;--ne-button-disabled-cursor:not-allowed;--ne-button-borderWidth:0.1rem;--ne-button-fontSize:14px;--ne-button-height:35px;--ne-button-width:fit-content;--ne-button-color:black;--ne-button-backgroundColor:white;--ne-button-hover-backgroundColor:hsl(240 4.8% 95.9%);--ne-button-hover-color:black;--ne-button-borderColor:hsl(240 4.9% 83.9%);--ne-button-hover-borderColor:var(--ne-button-borderColor);--ne-theme-color:var(--ne-accent-color, steelblue);--ne-theme-bright1-color:hsl(from var(--ne-theme-color) h s calc(l + 10));--ne-theme-contrast:white;display:inline-block;text-wrap:nowrap;border-radius:3px;outline-style:none;box-shadow:none !important;width:var(--ne-button-width);min-width:var(--ne-button-minWidth);font-size:var(--ne-button-fontSize)}:host([theme=danger]){--ne-theme-color:hsl(0 72.2% 50.6%);--ne-theme-bright1-color:hsl(from var(--ne-theme-color) h s calc(l + 10));--ne-theme-contrast:white}:host([theme=warning]){--ne-theme-color:hsl(32.1 94.6% 43.7%);--ne-theme-bright1-color:hsl(from var(--ne-theme-color) h s calc(l + 10));--ne-theme-contrast:white}:host([theme=success]){--ne-theme-color:hsl(142.1 76.2% 36.3%);--ne-theme-bright1-color:hsl(from var(--ne-theme-color) h s calc(l + 10));--ne-theme-contrast:white}:host([theme][variant]),:host([theme]){--ne-button-color:var(--ne-theme-color);--ne-button-hover-color:var(--ne-theme-contrast);--ne-button-backgroundColor:var(--ne-theme-contrast);--ne-button-hover-backgroundColor:var(--ne-theme-color);--ne-button-borderColor:var(--ne-theme-color);--ne-button-hover-borderColor:var(--ne-theme-color)}:host([variant=primary]),:host([variant=primary][theme]){--ne-button-color:var(--ne-theme-contrast);--ne-button-hover-color:var(--ne-theme-contrast);--ne-button-backgroundColor:var(--ne-theme-color);--ne-button-hover-backgroundColor:var(--ne-theme-bright1-color);--ne-button-borderColor:var(--ne-theme-color);--ne-button-hover-borderColor:var(--ne-theme-bright1-color)}:host([variant=ghost]){--ne-button-borderColor:white;--ne-button-hover-borderColor:var(--ne-button-hover-backgroundColor)}:host([variant=ghost][theme]){--ne-button-color:var(--ne-theme-color);--ne-button-hover-color:var(--ne-theme-contrast);--ne-button-backgroundColor:var(--ne-theme-contrast);--ne-button-hover-backgroundColor:var(--ne-theme-color);--ne-button-borderColor:var(--ne-theme-contrast);--ne-button-hover-borderColor:var(--ne-theme-color)}a{width:inherit;cursor:inherit;padding:inherit;border-radius:inherit;outline-style:inherit;box-shadow:inherit;text-shadow:inherit;min-width:inherit}#ne-button{position:relative;border-radius:inherit;padding:inherit;vertical-align:middle;text-align:center;font-size:inherit;background-color:var(--ne-button-backgroundColor);outline-style:inherit;box-shadow:inherit;text-shadow:inherit;cursor:inherit;color:var(--ne-button-color);height:var(--ne-button-height);border-width:var(--ne-button-borderWidth);border-style:solid;border-color:var(--ne-button-borderColor);padding:0px 10px;font-weight:600;width:inherit;overflow:hidden;min-width:inherit}:host([disabled]){pointer-events:none}:host([disabled]) #ne-button{opacity:0.5;cursor:var(--ne-button-disabled-cursor)}:host(:not([loading]):not([disabled]):hover) #ne-button{transition:background-color 0.2s,         border-color 0.2s,         color 0.2s;background-color:var(--ne-button-hover-backgroundColor);border-color:var(--ne-button-hover-borderColor);cursor:var(--ne-button-cursor);color:var(--ne-button-hover-color)}:host(:not([loading]):not([disabled]):active) #ne-button{animation:inset-anim 0.15s 1 ease-in-out}:host([loading]){pointer-events:none}:host([loading]) #ne-button{opacity:0.5;cursor:var(--ne-button-loading-cursor)}:host([loading]) #ne-button::after{content:"";position:absolute;width:16px;height:16px;top:0;left:0;right:0;bottom:0;margin:auto;border:4px solid transparent;border-top-color:var(--ne-button-spinner-color, black);border-radius:50%;animation:button-loading-spinner 1s ease infinite}:host([ok]) #ne-button::after{content:"";position:absolute;width:16px;height:16px;top:0;left:0;right:0;bottom:0;margin:auto;border:4px solid transparent;border-bottom-color:var(--ne-button-spinner-color, black);border-right-color:var(--ne-button-spinner-color, black);transform:rotate(45deg)}@keyframes button-loading-spinner{from{transform:rotate(0turn)}to{transform:rotate(1turn)}}@keyframes inset-anim{0%{box-shadow:inset 0 0 0 0 hsl(from var(--ne-button-hover-backgroundColor) h s l)}50%{box-shadow:inset 0 0 10px 0 hsl(from var(--ne-button-hover-backgroundColor) h s calc(l - 10))}100%{box-shadow:inset 0 0 0 0 hsl(from var(--ne-button-hover-backgroundColor) h s l)}}`;

const NeonButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
    * Disables the button if set.
    * Clicks will no longer fire events.
    */
    disabled = false;
    /**
    * Sets the `loading` state the button.
    * It shows a loading animation and disables inputs.
    */
    loading = false;
    /**
    * This property can be used to assign a link to the button.
    * If it is clicked, the link is opened.
    */
    href;
    /**
    * Sets the (color) theme of the button.
    */
    theme;
    /**
    * Sets the style variant of the button.
    * @default 'outline'
    */
    variant;
    render() {
        return (h("a", { key: 'ccca4ae27426c208383e951349303138077b1bb1', href: this.href }, h("button", { key: 'a507b7a939977df3c677ce1f7a5dc9d43a5ca3ed', id: "ne-button", onClick: this.handleClickButton }, h("slot", { key: '0eda5ef25371e75a2728d03a4efa37e3c77a23dd' }))));
    }
    handleClickButton(evt) {
        if (this.disabled || this.loading) {
            evt.stopPropagation();
            return;
        }
    }
};
NeonButton.style = neButtonCss();

const neDialogCss = () => `#ne-diag-outer{outline:none;padding:0;border-radius:4px;border:0;box-shadow:0 5px 10px 0 #80808054;animation:fadeout 0.1s ease-in forwards}#ne-diag-outer[open]{animation:fadein 0.1s ease-in forwards}#ne-diag-outer[open]::backdrop{transition:opacity 0.2s;background-color:black;opacity:0.2}#ne-icon-close{font-weight:900;width:35px;aspect-ratio:1;height:fit-content;text-align:center;cursor:pointer;border-radius:50%;font-family:cursive;display:flex;justify-content:center;align-items:center}#ne-icon-close:hover{transition:background-color 0.2s;background-color:whitesmoke}#ne-diag-inner{min-height:100px;min-width:200px;display:flex;flex-direction:column;justify-content:space-between}#ne-diag-body{padding:10px 15px}#ne-diag-header{display:flex;justify-content:space-between;gap:10px;padding:10px 15px}#ne-diag-footer{display:flex;justify-content:flex-end;padding:15px;gap:5px}#ne-title{display:flex;font-weight:500;font-size:1.5rem;align-items:center;color:var(--ne-dialog-title-color)}#ne-diag-footer input[type=button]{border-radius:3px;color:black;height:35px;padding:0px 10px;vertical-align:middle;text-align:center;border:1px solid rgba(0, 0, 0, 0.2235294118);font-size:14px;background-color:white;outline-style:none;box-shadow:none !important;width:auto;visibility:collapse;&[disabled]{background-color:#d9d9d9;color:#666666;cursor:no-drop;text-shadow:none}&:hover:enabled,&:active:enabled,&:focus:enabled{cursor:pointer;text-shadow:0px 0px 0.3px #0082b4;border-color:#0082b4;color:#0082b4}&:hover:enabled{background-color:#0082b40d}}@keyframes fadein{0%{opacity:0}100%{opacity:1}}@keyframes fadeout{0%{opacity:1}100%{opacity:0}}`;

const NeonDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dialogOpened = createEvent(this, "dialogOpened");
        this.dialogClosed = createEvent(this, "dialogClosed");
    }
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
    static get watchers() { return {
        "open": [{
                "watchOpen": 0
            }]
    }; }
};
NeonDialog.style = neDialogCss();

const neInputCss = () => `:host{--ne-input-borderColor:lightgrey;--ne-input-borderWidth:1px;--ne-input-borderStyle:solid;--ne-input-color:black;--ne-input-fontSize:14px;--ne-input-backgroundColor:whitesmoke;--ne-input-hover-borderColor:grey;--ne-input-loading-spinner-color:black;--ne-input-padding:0.3rem 0.4rem;display:inline-block;position:relative;border-radius:3px;background-color:var(--ne-input-backgroundColor);width:100%;height:1.6rem;font-size:var(--ne-input-fontSize);border-style:var(--ne-input-borderStyle);border-color:var(--ne-input-borderColor);border-width:var(--ne-input-borderWidth);color:var(--ne-input-color);cursor:text}#cont-inp{display:inline-flex;width:100%;height:100%}:host(:hover),:host([variant="underline"]:hover){transition:border-color 0.2s;border-color:var(--ne-input-hover-borderColor)}:host([variant="underline"]){border-top:0;border-left:0;border-right:0;border-radius:0;border-bottom-color:var(--ne-input-borderColor)}:host([type="hidden"]){display:none}:host(:state(invalid)){transition:border-color 0.2s;border-color:indianred}:host(:state(invalid):hover){border-color:indianred}:host(:state(loading))::after{content:"";position:absolute;width:12px;height:12px;top:0;left:0;right:0;bottom:0;margin:auto 10px auto auto;border:3px solid darkgrey;border-radius:50%;border-bottom-color:var(--ne-input-loading-spinner-color);animation:button-loading-spinner 1s ease infinite}:host([ok]){border-color:green}:host([ok])::after{content:"✔";position:absolute;width:10px;height:15px;color:green;top:1px;right:8px;font-weight:700}#inp-main{font-family:inherit;outline:none;background-color:inherit;width:100%;font-size:inherit;border-radius:inherit;border:none;padding:var(--ne-input-padding);cursor:inherit;color:inherit}:host(:state(readonly):hover),:host(:state(disabled):hover){border-color:var(--ne-input-borderColor)}:host(:state(readonly)),:host(:state(disabled)){cursor:default;color:hsl(from var(--ne-input-color) h s calc(l + 50))}div[slot=content]{max-height:200px}#cont-options{display:flex;flex-direction:column}ne-popover{--ne-popover-borderRadius:5px}::slotted(*){cursor:pointer;padding:5px 10px;border-radius:3px}::slotted(*:hover){background-color:hsl(from white h s calc(l - 10))}@keyframes button-loading-spinner{from{transform:rotate(0turn)}to{transform:rotate(1turn)}}`;

const NeonInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    refs = {
        input: null
    };
    /**
     * The default value set when the input is empty
     */
    default;
    /**
     * Disables the input.
     * Form values are not submitted.
     */
    disabled = false;
    /**
     * Shows a loading animation inside the element
     */
    loading = false;
    /**
     * The name used in context of `<form>` elements
     */
    name;
    /**
     * This text is shown to the user when the input is empty.
     * It is **not** used as value (use `default` for this).
     */
    placeholder;
    /**
     * Marks the input as required in context of `<form>` elements.
     */
    required = false;
    /**
     * Disables the input for user input, but `<form>` values are still submitted.
     */
    readonly = false;
    /**
     * Sets the input type (same as native `<input>` element, but less options).
     */
    type;
    /**
     * The value of the input.
     */
    value = '';
    /**
     * The step size used when `type` is set to `number`.
     */
    step;
    /**
     * The pattern used when checking the validity of the input.
     */
    pattern;
    render() {
        return (h("div", { key: '20eae1563c02124fd8859b5f29b7591d04976cdb', id: "cont-inp" }, h("input", { key: 'cbfa69bea64f97921334c5cf20b9fa28db7b9025', id: "inp-main", ref: ($el) => this.refs.input = $el, onChange: (evt) => this.handleChangeInput(evt), type: this.type, placeholder: this.placeholder, step: this.step, pattern: this.pattern, readonly: this.readonly, disabled: this.disabled, required: this.required, autocomplete: "off", value: this.value })));
    }
    /**
    * Focuses the input.
    */
    async focus() {
        this.refs.input.focus();
        return this;
    }
    /**
    * Resets the input to the default state.
    */
    async reset() {
        this.formResetCallback();
        return this;
    }
    /**
    * Selects (highlights) the input text.
    */
    async select() {
        this.refs.input.select();
        return this;
    }
    watchDefault(newValue) {
        if (this.value === '' && !this.disabled) {
            this.internals.setFormValue(newValue);
        }
    }
    watchValue(newValue) {
        if (!this.disabled) {
            this.internals.setFormValue(newValue ?? '');
        }
    }
    watchName(newValue) {
        if (!this.disabled) {
            if (newValue) {
                this.internals.setFormValue(this.value);
            }
            else {
                this.internals.setFormValue(null);
            }
        }
    }
    watchDisabled(newValue) {
        if (newValue != null) {
            this.internals.setFormValue(null);
            // @ts-ignore
            this.internals.states.add('disabled');
        }
        else {
            this.internals.setFormValue(this.value);
            // @ts-ignore
            this.internals.states.remove('disabled');
        }
    }
    watchLoading(newValue) {
        if (newValue != null) {
            this.internals.setFormValue(null);
            // @ts-ignore
            this.internals.states.add('loading');
        }
        else {
            this.internals.setFormValue(this.value);
            // @ts-ignore
            this.internals.states.remove('loading');
        }
    }
    componentWillLoad() {
        this.internals.setFormValue(this.value);
    }
    /**
    * Checks if the value of the input is valid and
    * reports the validity.
    */
    checkValidity() {
        const validity = this.refs.input.validity ?? { valid: true };
        return validity.valid;
    }
    /**
    * The native callback function for resetting the input as part of a form.
    */
    formResetCallback() {
        this.value = "";
    }
    /**
    * The native callback function for disabling the input aa part of a form.
    */
    formDisabledCallback() {
        this.disabled = true;
    }
    /**
    * Callback for input changes.
    */
    handleChangeInput(evt) {
        if (this.disabled) {
            evt.stopPropagation();
            return;
        }
        if (this.checkValidity()) {
            this.value = this.refs.input.value;
        }
    }
    static get formAssociated() { return true; }
    static get attachInternalsCustomStates() {
        return [{
                "name": "disabled",
                "initialValue": false,
                "docs": ""
            }, {
                "name": "loading",
                "initialValue": false,
                "docs": ""
            }];
    }
    static get watchers() { return {
        "default": [{
                "watchDefault": 0
            }],
        "value": [{
                "watchValue": 0
            }],
        "name": [{
                "watchName": 0
            }],
        "disabled": [{
                "watchDisabled": 0
            }],
        "loading": [{
                "watchLoading": 0
            }]
    }; }
};
NeonInput.style = neInputCss();

export { NeonButton as ne_button, NeonDialog as ne_dialog, NeonInput as ne_input };
