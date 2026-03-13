import { Component, Prop, h, AttachInternals, Watch } from '@stencil/core';

@Component({
  tag: 'ne-input',
  styleUrl: 'ne-input.css',
  shadow: true,
  formAssociated: true,
})
export class NeonInput {
  @AttachInternals() _internals: ElementInternals;

  private _refs: {
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

  @Prop({ reflect: true })
  value?: string;

  @Prop({ reflect: true })
  step?: number;

  @Prop({ reflect: true })
  pattern?: string;

  render() {
    return (
      <div id="cont-inp">
        <input id="inp-main" ref={($el) => this._refs.input = $el}
          onChange={this._handleChangeInput}
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

  @Watch('default')
  protected _watchDefault(newValue: string) {
    if (this.value === '' && !this.disabled) {
      this._internals.setFormValue(newValue);
    }
  }

  @Watch('value')
  protected _watchValue(newValue: string) {
    if (!this.disabled) {
      this._internals.setFormValue(newValue ?? '');
    }
  }

  @Watch('disabled')
  protected _watchDisabled(newValue: string) {
    if (newValue != null) {
      this._internals.setFormValue(null);
    } else {
      this._internals.setFormValue(this.value);
    }
  }

  componentWillLoad() {
    this._internals.setFormValue('');
  }

  /**
  * Checks if the value of the input is valid and
  * reports the validity.
  */
  checkValidity(): boolean {
    const validity = this._refs.input.validity ?? { valid: true };
    return validity.valid;
  }

  /**
  * Sets the focus to the input.
  */
  focus(): NeonInput {
    this._refs.input.focus();
    return this;
  }

  /**
  * The native callback function for resetting the input a part of a form.
  */
  formResetCallback() {
    this.value = "";
  }

  /**
  * Resets the input to the default state.
  */
  reset(): NeonInput {
    this.formResetCallback();
    return this;
  }

  /**
  * Selects (highlights) the input text.
  */
  select(): NeonInput {
    this._refs.input.select();
    return this;
  }

  /**
  * Callback for input changes.
  */
  _handleChangeInput(evt: InputEvent) {
    if (this.disabled) {
      evt.stopPropagation();
      return;
    }

    if (this.checkValidity()) {
      this._internals.setFormValue(this._refs.input.value ?? '');
    }
  }

}
