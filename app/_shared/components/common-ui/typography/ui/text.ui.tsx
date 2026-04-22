import { RefObject, useMemo } from "react"
import { PolymorphicProps } from "~types/index"
import { textVariants, TextVariantsStylesProps } from "../styles/typography.styles"


export type TextProps = ({
  ref?: RefObject<HTMLParagraphElement>,
} & Omit<PolymorphicProps<'p'>, 'as'> & TextVariantsStylesProps) | ({
  ref?: RefObject<HTMLSpanElement>
} & Omit<PolymorphicProps<'span'>, 'as'> & TextVariantsStylesProps)

export const Text = (props: TextProps & TextVariantsStylesProps) => {
  const { asParagraph, className, ...restProps } = props

  const classes = useMemo(() => textVariants({ className, asParagraph }), [asParagraph, className])

  if (asParagraph) {
    return <p className={classes} {...restProps} />
  }

  return <span className={classes} {...restProps} />
}
