interface evalExpressType {
    (target: any, express: string, scope?: any): any
}

interface getValueType {
    (target: any, express: string, scope?: any): any
}

interface setValueType {
    (target: any, express: string, value: any, scope?: any): any
}

export let evalExpress: evalExpressType

export let getValue: getValueType

export let setValue: setValueType