import React from 'react'
import  { forwardRef, useId } from 'react'
function Input({
    label, 
    type="text",
    className,
    ...props
}, ref) {

    const id = useId()
    return (
        <div>
            {label &&
         <label className='text-purple-600 font-semibold ' htmlFor={id}>
            {label}
        </label>}
        <input type={type} ref={ref} id={id} {...props} className={`px-4 py-1 rounded-md font-semibold bg-white text-black outline-none focus:bg-gray-50 duration-200 w-full border border-gray-200 ${className} `}/>
        </div>
    )
}

export default forwardRef(Input)
