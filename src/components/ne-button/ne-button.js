var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h } from '@stencil/core';
/**
 * A simple button with pre-definied variants, themes and additional states.
 *
 * @tag he-button
 */
let NeonButton = class NeonButton {
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
        return (h("a", { href: this.href },
            h("button", { id: "ne-button", onClick: this.handleClickButton },
                h("slot", null))));
    }
    handleClickButton(evt) {
        if (this.disabled || this.loading) {
            evt.stopPropagation();
            return;
        }
    }
};
__decorate([
    Prop({ reflect: true })
], NeonButton.prototype, "disabled", void 0);
__decorate([
    Prop({ reflect: true })
], NeonButton.prototype, "loading", void 0);
__decorate([
    Prop({ reflect: true })
], NeonButton.prototype, "href", void 0);
__decorate([
    Prop({ reflect: true })
], NeonButton.prototype, "theme", void 0);
__decorate([
    Prop({ reflect: true })
], NeonButton.prototype, "variant", void 0);
NeonButton = __decorate([
    Component({
        tag: 'ne-button',
        styleUrl: 'ne-button.css',
        shadow: true,
    })
], NeonButton);
export { NeonButton };
