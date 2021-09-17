import {useState}from 'react'

export function useToggle(defaultValue?:boolean|any):[v:boolean, toogleValue:(v?:boolean)=>void] {
    const [value, setValue] = useState(defaultValue || false)

    function toggleValue(value:any){
        setValue((currentValue:any) => typeof value === 'boolean' ? value : !currentValue)
    }

    return [value, toggleValue]
}