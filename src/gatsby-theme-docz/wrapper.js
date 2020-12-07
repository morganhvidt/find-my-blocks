import React, { Fragment } from "react";
import t from "prop-types";
import { Helmet } from "react-helmet";
import { useConfig, useCurrentDoc } from "docz";
import favicon from "@fmb/assets/images/favicon.png";

import "@wordpress/components/build-style/style.css";

const Wrapper = ({ children }) => {
  const { title, description } = useConfig();
  const { name, route } = useCurrentDoc();
  const isHomePage = route === "/";
  const hasName = name !== "";
  const showName = hasName && !isHomePage;
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        {showName ? (
          <title>
            {name} | {title}
          </title>
        ) : (
          <title>{title}</title>
        )}
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      {children}
    </Fragment>
  );
};

Wrapper.propTypes = {
  children: t.element,
};

export default Wrapper;
