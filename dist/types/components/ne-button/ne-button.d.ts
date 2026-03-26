/**
 * A simple button with pre-definied variants, themes and additional states.
 *
 * @tag he-button
 */
export declare class NeonButton {
    /**
    * Disables the button if set.
    * Clicks will no longer fire events.
    */
    disabled: boolean;
    /**
    * Sets the `loading` state the button.
    * It shows a loading animation and disables inputs.
    */
    loading: boolean;
    /**
    * This property can be used to assign a link to the button.
    * If it is clicked, the link is opened.
    */
    href?: string;
    /**
    * Sets the (color) theme of the button.
    */
    theme?: 'danger' | 'warning' | 'success';
    /**
    * Sets the style variant of the button.
    * @default 'outline'
    */
    variant?: 'primary' | 'ghost' | 'outline';
    render(): any;
    private handleClickButton;
}
