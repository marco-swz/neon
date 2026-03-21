var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, AttachInternals, Watch, Method } from '@stencil/core';
/**
 * A custom styled input element with additional features.
 *
 */
let NeonInput = class NeonInput {
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
        return (h("div", { id: "cont-inp" },
            h("input", { id: "inp-main", ref: ($el) => this.refs.input = $el, onChange: (evt) => this.handleChangeInput(evt), type: this.type, placeholder: this.placeholder, step: this.step, pattern: this.pattern, readonly: this.readonly, disabled: this.disabled, required: this.required, autocomplete: "off", value: this.value })));
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
            this.internals.add('disabled');
        }
        else {
            this.internals.setFormValue(this.value);
            this.internals.states.add('disabled');
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
};
__decorate([
    AttachInternals({
        states: {
            disabled: false,
            loading: false,
        }
    })
], NeonInput.prototype, "internals", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "default", void 0);
__decorate([
    Prop({ mutable: true })
], NeonInput.prototype, "disabled", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "loading", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "name", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "placeholder", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "required", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "readonly", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "type", void 0);
__decorate([
    Prop({ mutable: true })
], NeonInput.prototype, "value", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "step", void 0);
__decorate([
    Prop()
], NeonInput.prototype, "pattern", void 0);
__decorate([
    Method()
], NeonInput.prototype, "focus", null);
__decorate([
    Method()
], NeonInput.prototype, "reset", null);
__decorate([
    Method()
], NeonInput.prototype, "select", null);
__decorate([
    Watch('default')
], NeonInput.prototype, "watchDefault", null);
__decorate([
    Watch('value')
], NeonInput.prototype, "watchValue", null);
__decorate([
    Watch('name')
], NeonInput.prototype, "watchName", null);
__decorate([
    Watch('disabled')
], NeonInput.prototype, "watchDisabled", null);
NeonInput = __decorate([
    Component({
        tag: 'ne-input',
        styleUrl: 'ne-input.css',
        shadow: true,
        formAssociated: true,
    })
], NeonInput);
export { NeonInput };
