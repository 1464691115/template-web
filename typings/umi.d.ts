import { UserModelRedux } from "umi";

declare module 'umi' {
    type TStateT = UserModelRedux

    export function useSelector<TState = TStateT, TSelected = unknown>(
        selector: (state: TState) => TSelected,
        equalityFn?: (left: TSelected, right: TSelected) => boolean
    ): TSelected;

}