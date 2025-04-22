import React, { FC } from "react"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant: "primary"|"secondary"|"danger"
}

const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
const variantStyles: Record<ButtonProps['variant'], string>   =  {
    primary: 'bg-primary hover:bg-primary text-white focus:ring-indigo-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
}

export const Button: FC<ButtonProps>=({
    variant = "primary",
    className = "",
    ...props
})=>{
return <button className={`${baseStyles}  ${variantStyles[variant]}  ${className}`.trim()} {...props}/>;
}