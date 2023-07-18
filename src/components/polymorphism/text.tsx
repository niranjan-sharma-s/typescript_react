import React from 'react'

type InputType = {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary',
    children: React.ReactNode

}

const text = ({ size, color, children }: InputType) => {
    return (
        <div className={`class-with-${size}-${color}`}>{children}</div>
    )
}

export default text