import { Component, Prop, h, AttachInternals, Watch, Method } from '@stencil/core';

type InputType = 'email' | 'hidden' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'week' | 'datetime';

/**
 * A custom styled input element with additional features.
 *
 */
@Component({
    tag: 'ne-input',
    styleUrl: 'ne-input.css',
    shadow: true,
    formAssociated: true,
})
export class NeonInput {
    @AttachInternals() internals: ElementInternals;

    private refs: {
        input: HTMLInputElement
    } = {
        input: null
    };

    /**
     * The default value set when the input is empty
     */
    @Prop({ reflect: true })
    default?: string;

    /**
     * Disables the input.
     * Form values are not submitted.
     */
    @Prop({ reflect: true })
    disabled: boolean = false;

    /**
     * Shows a loading animation inside the element
     */
    @Prop({ reflect: true })
    loading: boolean = false;

    /**
     * The name used in context of `<form>` elements
     */
    @Prop({ reflect: true })
    name?: string;

    /**
     * This text is shown to the user when the input is empty.
     * It is **not** used as value (use `default` for this).
     */
    @Prop({ reflect: true })
    placeholder?: string;

    /**
     * Marks the input as required in context of `<form>` elements.
     */
    @Prop({ reflect: true })
    required: boolean = false;

    /**
     * Disables the input for user input, but `<form>` values are still submitted.
     */
    @Prop({ reflect: true })
    readonly: boolean = false;

    /**
     * Sets the input type (same as native `<input>` element, but less options).
     */
    @Prop({ reflect: true })
    type?: InputType;

    /**
     * The value of the input.
     */
    @Prop({ reflect: true, mutable: true })
    value: string = '';

    /**
     * The step size used when `type` is set to `number`.
     */
    @Prop({ reflect: true })
    step?: number;

    /**
     * The pattern used when checking the validity of the input.
     */
    @Prop({ reflect: true })
    pattern?: string;

    render() {
        return (
            <div id="cont-inp">
                <input id="inp-main" ref={($el) => this.refs.input = $el}
                    onChange={(evt: InputEvent) => this.handleChangeInput(evt)}
                    type={this.type}
                    placeholder={this.placeholder}
                    step={this.step}
                    pattern={this.pattern}
                    readonly={this.readonly}
                    disabled={this.disabled}
                    required={this.required}
                    autocomplete="off"
                    value={this.value}
                />
            </div>
        );
    }

    /**
    * Focuses the input.
    */
    @Method()
    async focus(): Promise<NeonInput> {
        this.refs.input.focus();
        return this;
    }

    /**
    * Resets the input to the default state.
    */
    @Method()
    async reset(): Promise<NeonInput> {
        this.formResetCallback();
        return this;
    }

    /**
    * Selects (highlights) the input text.
    */
    @Method()
    async select(): Promise<NeonInput> {
        this.refs.input.select();
        return this;
    }

    @Watch('default')
    protected watchDefault(newValue: string) {
        if (this.value === '' && !this.disabled) {
            this.internals.setFormValue(newValue);
        }
    }

    @Watch('value')
    protected watchValue(newValue: string) {
        if (!this.disabled) {
            this.internals.setFormValue(newValue ?? '');
        }
    }

    @Watch('disabled')
    protected watchDisabled(newValue: string) {
        if (newValue != null) {
            this.internals.setFormValue(null);
        } else {
            this.internals.setFormValue(this.value);
        }
    }

    componentWillLoad() {
        this.internals.setFormValue('');
    }

    /**
    * Checks if the value of the input is valid and
    * reports the validity.
    */
    checkValidity(): boolean {
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
    handleChangeInput(evt: InputEvent) {
        if (this.disabled) {
            evt.stopPropagation();
            return;
        }

        if (this.checkValidity()) {
            this.value = this.refs.input.value;
        }
    }
}
