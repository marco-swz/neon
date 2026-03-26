import type { Components, JSX } from "../types/components";

interface NeButton extends Components.NeButton, HTMLElement {}
export const NeButton: {
    prototype: NeButton;
    new (): NeButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
