import type { Components, JSX } from "../types/components";

interface NeInput extends Components.NeInput, HTMLElement {}
export const NeInput: {
    prototype: NeInput;
    new (): NeInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
