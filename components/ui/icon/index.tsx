"use client";
import React from "react";
import { createIcon } from "@gluestack-ui/icon";
import { Path } from "react-native-svg";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { cssInterop } from "nativewind";
import { VariantProps } from "@gluestack-ui/nativewind-utils";
import { PrimitiveIcon, IPrimitiveIcon, Svg } from "@gluestack-ui/icon";

export const UIIcon = createIcon({
  Root: PrimitiveIcon,
}) as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
    React.RefAttributes<React.ElementRef<typeof Svg>>
>;

const iconStyle = tva({
  base: "text-typography-950 fill-none pointer-events-none",
  variants: {
    size: {
      "2xs": "h-3 w-3",
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-[18px] w-[18px]",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
    },
  },
});

cssInterop(UIIcon, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: "classNameColor",
      stroke: true,
    },
  },
});

type IIConProps = IPrimitiveIcon &
  VariantProps<typeof iconStyle> &
  React.ComponentPropsWithoutRef<typeof UIIcon>;

const Icon = React.forwardRef<React.ElementRef<typeof Svg>, IIConProps>(
  ({ size = "md", className, ...props }, ref) => {
    if (typeof size === "number") {
      return (
        <UIIcon
          ref={ref}
          {...props}
          className={iconStyle({ class: className })}
          size={size}
        />
      );
    } else if (
      (props.height !== undefined || props.width !== undefined) &&
      size === undefined
    ) {
      return (
        <UIIcon
          ref={ref}
          {...props}
          className={iconStyle({ class: className })}
        />
      );
    }
    return (
      <UIIcon
        ref={ref}
        {...props}
        className={iconStyle({ size, class: className })}
      />
    );
  },
);

Icon.displayName = "Icon";
export { Icon };

type ParameterTypes = Omit<Parameters<typeof createIcon>[0], "Root">;

const createIconUI = ({ ...props }: ParameterTypes) => {
  const UIIconCreateIcon = createIcon({
    Root: Svg,
    ...props,
  }) as React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
      React.RefAttributes<React.ElementRef<typeof Svg>>
  >;

  const Component = React.forwardRef<React.ElementRef<typeof Svg>>(
    (
      {
        className,
        size,
        ...inComingProps
      }: VariantProps<typeof iconStyle> &
        React.ComponentPropsWithoutRef<typeof UIIconCreateIcon>,
      ref,
    ) => {
      return (
        <UIIconCreateIcon
          ref={ref}
          {...inComingProps}
          className={iconStyle({ size, class: className })}
        />
      );
    },
  );
  Component.displayName = "IconUI";
  return Component;
};

export { createIconUI as createIcon };
// All Icons

const UnlockIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 11V7C6.99876 5.76005 7.45828 4.56387 8.28938 3.64367C9.12047 2.72347 10.2638 2.1449 11.4975 2.02029C12.7312 1.89568 13.9671 2.2339 14.9655 2.96931C15.9638 3.70472 16.6533 4.78485 16.9 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

UnlockIcon.displayName = "UnlockIcon";
export { UnlockIcon };
