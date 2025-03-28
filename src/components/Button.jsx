import React from 'react'

const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={` px-4 py-2 text-sm text-white bg-primary rounded-full shadow-md transition 
                    hover:bg-[var(--btn-primary-hover)] 
                    focus:outline-none focus:ring-3 focus:ring-[var(--btn-primary-ring)] 
                    active:bg-[var(--btn-primary-active)] 
                    disabled:bg-[var(--btn-primary-disabled)] disabled:cursor-not-allowed cursor-pointer ${className}`}>
            {text}
        </button>

    )
}

export default Button