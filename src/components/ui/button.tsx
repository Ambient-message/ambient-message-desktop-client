import React, { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn_twMerge';

export interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}


export const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default: 'bg-slate-900 text-white hover:bg-slate-800',
                ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2',
                lg: 'h-11 px-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)


const Button: FC<IButtonProps> = ({ className, children, variant, size, isLoading, ...props }) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} disabled={isLoading} {...props}>
        {isLoading ? <Loader2 className='mr-auto h-5 w-5 animate-spin'/> : null}
        {children}
    </button>
}


export default Button
