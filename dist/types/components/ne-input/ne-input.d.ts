type InputType = 'email' | 'hidden' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'week' | 'datetime';
/**
 * A custom styled input element with additional features.
 *
 */
export declare class NeonInput {
    internals: ElementInternals;
    private refs;
    /**
     * The default value set when the input is empty
     */
    default?: string;
    /**
     * Disables the input.
     * Form values are not submitted.
     */
    disabled: boolean;
    /**
     * Shows a loading animation inside the element
     */
    loading?: boolean;
    /**
     * The name used in context of `<form>` elements
     */
    name?: string;
    /**
     * This text is shown to the user when the input is empty.
     * It is **not** used as value (use `default` for this).
     */
    placeholder?: string;
    /**
     * Marks the input as required in context of `<form>` elements.
     */
    required: boolean;
    /**
     * Disables the input for user input, but `<form>` values are still submitted.
     */
    readonly: boolean;
    /**
     * Sets the input type (same as native `<input>` element, but less options).
     */
    type?: InputType;
    /**
     * The value of the input.
     */
    value: string;
    /**
     * The step size used when `type` is set to `number`.
     */
    step?: number;
    /**
     * The pattern used when checking the validity of the input.
     */
    pattern?: string;
    render(): any;
    /**
    * Focuses the input.
    */
    focus(): Promise<NeonInput>;
    /**
    * Resets the input to the default state.
    */
    reset(): Promise<NeonInput>;
    /**
    * Selects (highlights) the input text.
    */
    select(): Promise<NeonInput>;
    protected watchDefault(newValue: string): void;
    protected watchValue(newValue: string): void;
    protected watchName(newValue?: string): void;
    protected watchDisabled(newValue: string): void;
    protected watchLoading(newValue: string): void;
    componentWillLoad(): void;
    /**
    * Checks if the value of the input is valid and
    * reports the validity.
    */
    checkValidity(): boolean;
    /**
    * The native callback function for resetting the input as part of a form.
    */
    formResetCallback(): void;
    /**
    * The native callback function for disabling the input aa part of a form.
    */
    formDisabledCallback(): void;
    /**
    * Callback for input changes.
    */
    handleChangeInput(evt: InputEvent): void;
}
export {};
