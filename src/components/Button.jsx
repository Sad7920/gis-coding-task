import React from 'react'

const Button = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 w-fit rounded-full text-white bg-primary shadow-md transition 
                hover:bg-[var(--btn-primary-hover)] 
                focus:outline-none focus:ring-3 focus:ring-[var(--btn-primary-ring)] 
                active:bg-[var(--btn-primary-active)] active:scale-95 
                disabled:bg-[var(--btn-primary-disabled)] disabled:cursor-not-allowed 
                cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default Button
