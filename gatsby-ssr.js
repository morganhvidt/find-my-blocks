import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="ga-tag"
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-165299430-1"
    />,
    <script
      key="ga-code"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-165299430-1');
      `,
      }}
    />,
  ]);
};
