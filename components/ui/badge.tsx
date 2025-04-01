import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-vscodeGreen focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-vscodeBlue text-vscodePanel hover:bg-vscodeBlue/90",
        secondary:
          "bg-vscodeGreen/10 text-vscodeGreen hover:bg-vscodeGreen/20 border border-vscodeGreen/50",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "text-vscodeText border border-vscodeBorder hover:bg-vscodeBorder/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
