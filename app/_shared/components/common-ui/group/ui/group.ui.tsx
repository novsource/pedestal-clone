import { ComponentProps, useMemo, } from "react"
import { GroupStylesProps, groupVariants } from "../styles/group.variants"

export type GroupProps = ComponentProps<'div'> & GroupStylesProps

export const Group = (props: GroupProps) => {
  const { className, align, justify, gap, ...restProps } = props

  const classes = useMemo(() => groupVariants({ gap, justify, align, className }), [gap, justify, align, className])

  return <div className={classes} {...restProps} />
}
