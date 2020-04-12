import React from "react";
import t from "prop-types";
import { Heading } from "../../../../../src/components/Heading";

const heading = (level) => {
  const Component = ({ id, children }) => {
    return (
      <>
        <div id={id}></div>
        <Heading level={level}>
          <a href={`#${id}`}>{children}</a>
        </Heading>
      </>
    );
  };

  Component.propTypes = {
    id: t.string,
    children: t.string,
  };
  return Component;
};

export const h1 = heading(1);
export const h2 = heading(2);
export const h3 = heading(3);
export const h4 = heading(4);
export const h5 = heading(5);
export const h6 = heading(6);
