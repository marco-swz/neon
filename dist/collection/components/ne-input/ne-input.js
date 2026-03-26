import { h } from "@stencil/core";
/**
 * A custom styled input element with additional features.
 *
 */
export class NeonInput {
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
    static get is() { return "ne-input"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ne-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ne-input.css"]
        };
    }
    static get properties() {
        return {
            "default": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The default value set when the input is empty"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default"
            },
            "disabled": {
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
                    "text": "Disables the input.\nForm values are not submitted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "loading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows a loading animation inside the element"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The name used in context of `<form>` elements"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "This text is shown to the user when the input is empty.\nIt is **not** used as value (use `default` for this)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Marks the input as required in context of `<form>` elements."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the input for user input, but `<form>` values are still submitted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputType",
                    "resolved": "\"datetime\" | \"email\" | \"hidden\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"week\"",
                    "references": {
                        "InputType": {
                            "location": "global",
                            "id": "global::InputType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the input type (same as native `<input>` element, but less options)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The step size used when `type` is set to `number`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "step"
            },
            "pattern": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The pattern used when checking the validity of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pattern"
            }
        };
    }
    static get methods() {
        return {
            "focus": {
                "complexType": {
                    "signature": "() => Promise<NeonInput>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "NeonInput": {
                            "location": "global",
                            "id": "global::NeonInput"
                        }
                    },
                    "return": "Promise<NeonInput>"
                },
                "docs": {
                    "text": "Focuses the input.",
                    "tags": []
                }
            },
            "reset": {
                "complexType": {
                    "signature": "() => Promise<NeonInput>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "NeonInput": {
                            "location": "global",
                            "id": "global::NeonInput"
                        }
                    },
                    "return": "Promise<NeonInput>"
                },
                "docs": {
                    "text": "Resets the input to the default state.",
                    "tags": []
                }
            },
            "select": {
                "complexType": {
                    "signature": "() => Promise<NeonInput>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "NeonInput": {
                            "location": "global",
                            "id": "global::NeonInput"
                        }
                    },
                    "return": "Promise<NeonInput>"
                },
                "docs": {
                    "text": "Selects (highlights) the input text.",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "default",
                "methodName": "watchDefault"
            }, {
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "name",
                "methodName": "watchName"
            }, {
                "propName": "disabled",
                "methodName": "watchDisabled"
            }, {
                "propName": "loading",
                "methodName": "watchLoading"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
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
}
