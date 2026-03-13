import { Component, Prop, h, AttachInternals, Watch, Method } from '@stencil/core';

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

  @Prop({ reflect: true })
  default?: string;

  @Prop({ reflect: true })
  disabled: boolean = false;

  @Prop({ reflect: true })
  loading: boolean = false;

  @Prop({ reflect: true })
  name?: string;

  @Prop({ reflect: true })
  placeholder?: string;

  @Prop({ reflect: true })
  required: boolean = false;

  @Prop({ reflect: true })
  readonly: boolean = false;

  @Prop({ reflect: true })
  type?: string;

  @Prop({ reflect: true, mutable: true })
  value?: string;

  @Prop({ reflect: true })
  step?: number;

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
        />
      </div>
    );
  }

  /**
  * Sets the focus to the input.
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
