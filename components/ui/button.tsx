import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-pixel transition-transform duration-150 active:translate-y-0.5 shadow-pixel border-2 border-gold px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-grassGreen text-darkPurple hover:bg-grassGreen/80",
        destructive: "bg-brickRed text-white hover:bg-brickRed/80",
        outline: "bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-pixelBg",
        secondary: "bg-skyBlue text-darkPurple hover:bg-skyBlue/80",
        ghost: "bg-transparent text-gold hover:text-skyBlue",
        link: "text-skyBlue underline underline-offset-4 hover:text-gold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
