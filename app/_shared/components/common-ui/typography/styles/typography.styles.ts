import { tv, VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: 'font-body text-md',
  variants: {
    asParagraph: {
      true: '',
      false: 'tracking-[-0.02rem]'
    }
  }
})

export type TextVariantsStylesProps = VariantProps<typeof textVariants>
