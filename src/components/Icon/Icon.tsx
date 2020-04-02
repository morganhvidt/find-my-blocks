import React from "react";
import FeatherIcon from "feather-icons-react";
import icons from "feather-icons-react/build/icons.json";

interface IconProps {
  size?: string | number;
  color?: string;
  icon: string;
}

export const Icon = ({ size = 16, color, icon }: IconProps) => {
  return <FeatherIcon size={size} color={color} icon={icon} />;
};

export const iconList = icons;
