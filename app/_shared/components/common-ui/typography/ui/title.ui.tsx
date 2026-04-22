import { HTMLAttributes, } from "react"

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  order?: 1 | 2 | 3
}
export const Title = (props: TitleProps) => {
  const { order = 2, ...restProps } = props

  const Component = `h${order}` as const
  return <Component {...restProps} />
}
