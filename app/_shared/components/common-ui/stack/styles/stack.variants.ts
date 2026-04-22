import { tv, VariantProps } from 'tailwind-variants'

export const stackVariants = tv({
  base: 'flex flex-col',
  variants: {
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-5',
      xl: 'gap-7'
    },
    justify: {
      center: 'justify-center',
      'flex-start': 'justify-start',
      'flex-end': 'justify-end',
      'space-between': 'justify-between',
      'space-around': 'justify-around'
    },
    align: {
      center: 'items-center',
      stretch: 'items-stretch',
      'flex-start': 'items-start',
      'flex-end': 'items-end',
    },
  },
  defaultVariants: {
    gap: 'md',
    align: 'center',
    justify: 'center'
  }
})

export type StackStylesProps = VariantProps<typeof stackVariants>
