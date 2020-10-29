import React, { PropsWithChildren } from "react";
import { Card as WPCard, CardHeader, CardBody } from "@wordpress/components";

interface CardProps {
  title?: string;
}

export const Card = ({ children, title }: PropsWithChildren<CardProps>) => {
  /**
   * We must check for window when using @wordpress/components
   *
   * In the case of Card, we still want content to render.
   */
  if (typeof window === "undefined") {
    return (
      <>
        {title}: {children}
      </>
    );
  }

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
