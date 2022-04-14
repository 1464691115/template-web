// @ts-ignore
import React, { useMemo } from "react";
import { numberToArray } from "@/utils";
import type { CSSProperties } from 'react';

interface stateType<T extends (any[] | number)> extends GlobalComponentsPropsType {
    style?: CSSProperties
    /** 是否包含的 */
    isParent?: true | FALSE_TYPE
    list?: T,
    keyName: (record: T extends any[] ? { item: T[number], index: number } : { index: number }) => string | number
    renderItem: (record: T extends any[] ? { item: T[number], index: number } : { index: number }) => JSX.Element
}


function FloatList<T extends (any[] | number)>(props: stateType<T>) {
    if (props.if !== undefined && !props.if) return null

    const renderItem = useMemo(() => {
        if (!props.renderItem) return (_) => <></>
        return props.renderItem
    }, [props.renderItem])

    const list = useMemo(() => {
        switch (typeof props.list) {
            case 'number':
                return numberToArray(props.list)
            case 'object':
                return new Array(props.list || [])
            default:
                return []
        }
    }, [props.list])

    const Children = list.map((item, index) => {
        const element: any = { item, index }
        return React.cloneElement(
            renderItem(element),
            { key: props.keyName ? props.keyName(element) : index }
        )
    })

    if (!props.list) return null

    return props.isParent != false ?
        <div style={props.style}>
            {Children}
        </div> : Children as any

}


export function FloatListFn<T extends any[]>(arr: T, renderItem: (item: T[number], index: number) => JSX.Element) {
    if (!arr || !arr.length) return <></>
    return arr.map(renderItem)
}

export default FloatList