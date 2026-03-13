import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ne-button',
  styleUrl: 'ne-button.css',
  shadow: true,
})
export class NeonButton {
  /**
  * Disables the button if set.
  * Clicks will no longer fire events.
  */
  @Prop({ reflect: true })
  disabled: boolean = false;

  /**
  * Sets the `loading` state the button.
  * It shows a loading animation and disables inputs.
  */
  @Prop({ reflect: true })
  loading: boolean = false;

  /**
  * This property can be used to assign a link to the button.
  * If it is clicked, the link is opened.
  */
  @Prop({ reflect: true })
  href?: string;

  /**
  * Sets the (color) theme of the button.
  */
  @Prop({ reflect: true })
  theme?: 'danger' | 'warning' | 'success';

  /**
  * Sets the style variant of the button.
  * @default 'outline'
  */
  @Prop({ reflect: true })
  variant?: 'primary' | 'ghost' | 'outline';

  render() {
    return (
      <a href={this.href}>
        <button id="he-button" onClick={this._handleClickButton}>
          <slot></slot>
        </button>
      </a>
    );
  }

  private _handleClickButton() {

  }
}
