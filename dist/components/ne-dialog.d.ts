import type { Components, JSX } from "../types/components";

interface NeDialog extends Components.NeDialog, HTMLElement {}
export const NeDialog: {
    prototype: NeDialog;
    new (): NeDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
