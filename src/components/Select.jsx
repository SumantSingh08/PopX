import React from 'react'
import { forwardRef, useId } from 'react'
function Select({
    label, 
    option,
    className,
    ...props
}, ref) {
    const id = useId()
    return (
        <div>
            {label && <label htmlFor={id} className={`mb-2 inline-block ${className}`}>
                {label}
            </label>}
            <select className={`px-4 py-2 bg-white text-black w-full border border-gray-200 duration-200 ${className}`}
            ref={ref}
            id={id}
            {...props}
            >
                {option.map((option) =>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select)
