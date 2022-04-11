import type { CSSProperties } from "react";

declare module '@/utils/styles' {

    type StyleItem = CSSProperties

    type NamedStyles<T> = { [P in keyof T]: CSSProperties };
    export function CreateStyle<T extends NamedStyles<T>>(styles: T | NamedStyles<T>): T;

}