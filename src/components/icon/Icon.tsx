"use client";

import React from "react";
import theme from "@/styles/theme";
import * as Icons from "iconsax-react";
import SimpleCheck from "../../../public/icons/SimpleCheck";
import SimpleX from "../../../public/icons/SimpleX";
import SimpleArrowUpRight from "../../../public/icons/SimpleArrowUpRight";

export type IconNameType =
  | keyof typeof Icons
  | "SimpleCheck"
  | "SimpleX"
  | "SimpleArrowUpRight"
  | React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface IconProps {
  name: IconNameType;
  color?: keyof typeof theme.colors;
  size?: number;
  onClick?: () => void;
  variant: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
}

const Icon: React.FC<IconProps> = ({
  name,
  color = "primary",
  size = 20,
  onClick,
  variant,
}: IconProps) => {
  const hexColor = theme.colors[color];

  // name이 문자열이면 iconsax-react 또는 레포 내 컴포넌트를 사용하고,
  // 그렇지 않으면 전달받은 React 컴포넌트를 사용합니다.

  const customIcons = {
    SimpleCheck,
    SimpleX,
    SimpleArrowUpRight,
  };

  const IconComponent =
    typeof name === "string"
      ? Icons[name as keyof typeof Icons] ||
        customIcons[name as keyof typeof customIcons]
      : name;

  return (
    <IconComponent
      color={hexColor}
      size={size}
      onClick={onClick}
      style={{ pointerEvents: "none" }}
      variant={variant}
    />
  );
};

export default Icon;
