import React from 'react'

const Button = ({ text, onClick, className, type }) => {
    return (
        <button type={type} onClick={onClick} className={` ${className} px-4 active:scale-95 py-2 w-fit text-white bg-primary rounded-full shadow-md transition 
                    hover:bg-[var(--btn-primary-hover)] 
                    focus:outline-none focus:ring-3 focus:ring-[var(--btn-primary-ring)] 
                    active:bg-[var(--btn-primary-active)] 
                    disabled:bg-[var(--btn-primary-disabled)] disabled:cursor-not-allowed cursor-pointer`}>
            {text}
        </button>

    )
}

export default Button