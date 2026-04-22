import { ComponentProps, useMemo, } from "react"
import { StackStylesProps, stackVariants } from "../styles/stack.variants"

export type StackProps = ComponentProps<'div'> & StackStylesProps

export const Stack = (props: StackProps) => {
  const { className, align, justify, gap, ...restProps } = props

  const classes = useMemo(() => stackVariants({ gap, justify, align, className }), [gap, justify, align, className])

  return <div className={classes} {...restProps} />
}
