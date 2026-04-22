import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicProps<C extends ElementType, P = object> =
  PropsWithChildren<P & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, P>>;
