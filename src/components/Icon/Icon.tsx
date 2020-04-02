import React from "react";
import FeatherIcon from "feather-icons-react";
import icons from "feather-icons-react/build/icons.json";

interface IconProps {
  /**
   * Determines the size of the icon. Can be a number like {32} or a string like "32px".
   */
  size?: string | number;
  color?: string;
  icon: string;
}

export const Icon = ({ size, color, icon }: IconProps) => {
  return <FeatherIcon size={size} color={color} icon={icon} />;
};

export const iconList = icons;
