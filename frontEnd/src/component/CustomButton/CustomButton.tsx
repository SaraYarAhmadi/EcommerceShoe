import { ClassNames } from '@emotion/react'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    className?: string;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    children?: ReactNode;
}

export default function CustomButton({ to, className, href, children, type = 'button',onClick,disabled, ...otherButtonProps }: CustomButtonProps) {
    if (to) {
        return (
            <Link to={to} className={className}>{children}</Link>

        )
    } else if (href) {
        return (
            <a href={href} className={className}>{children}</a>
        )
    } else {
        return (
            <button type={type} className={className} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        )
    }
}
