import React, { PropsWithChildren } from "react";
import { Card as WPCard, CardHeader, CardBody } from "@wordpress/components";

interface CardProps {
  title?: string;
}

export const Card = ({ children, title }: PropsWithChildren<CardProps>) => {
  return (
    <WPCard size="small">
      {title && (
        <CardHeader isShady>
          <strong>{title}</strong>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </WPCard>
  );
};
