import React from "react";

interface CardProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Card = ({ children }: CardProps) => {
  return <div>Hello World - {children}</div>;
};
