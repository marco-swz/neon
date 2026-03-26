import { h } from "@stencil/core";
/**
 * A simple button with pre-definied variants, themes and additional states.
 *
 * @tag he-button
 */
export class NeonButton {
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
    static get is() { return "ne-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ne-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ne-button.css"]
        };
    }
    static get properties() {
        return {
            "disabled": {
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
                    "text": "Disables the button if set.\nClicks will no longer fire events."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the `loading` state the button.\nIt shows a loading animation and disables inputs."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "href": {
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
                    "text": "This property can be used to assign a link to the button.\nIf it is clicked, the link is opened."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "href"
            },
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'danger' | 'warning' | 'success'",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the (color) theme of the button."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "theme"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'ghost' | 'outline'",
                    "resolved": "\"ghost\" | \"outline\" | \"primary\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "default",
                            "text": "'outline'"
                        }],
                    "text": "Sets the style variant of the button."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "variant"
            }
        };
    }
}
