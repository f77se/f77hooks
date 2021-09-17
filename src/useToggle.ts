import {useState}from 'react'

export function useToggle(defaultValue?:boolean|any):[boolean, (b?:boolean)=>void] {
    const [value, setValue] = useState(defaultValue || false)

    function toggleValue(value:any){
        setValue((currentValue:any) => typeof value === 'boolean' ? value : !currentValue)
    }

    return [value, toggleValue]
}