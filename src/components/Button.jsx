import React from 'react'

function Button({
    children,
    type = "button",
    className = '',
    bgColor = "bg-blue-500",
    text = "white",
    ...props
}) {

    return (
        <button  className={` px-3 py-2 rounded-ld ${bgColor} ${text}, ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
