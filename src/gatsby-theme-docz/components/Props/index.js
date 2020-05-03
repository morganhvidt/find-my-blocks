/* eslint-disable react/prop-types */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

import { Icon } from "@fmb/components/Icon";
import * as styles from "./styles";

export const getDefaultValue = ({ defaultValue, type, flowType }) => {
  const propType = flowType ? flowType : type;
  if (!defaultValue || !defaultValue.value) return null;
  if (defaultValue.value === "''") {
    return "[Empty string]";
  }
  if (propType && propType.name === "string") {
    return defaultValue.value.replace(/'/g, '"');
  }
  if (typeof defaultValue.value === "object" && defaultValue.value.toString) {
    return defaultValue.value.toString();
  }

  if (!defaultValue && !type && !flowType) {
    console.log("nothing");
    return "false";
  }
  return defaultValue.value;
};

export const Prop = ({ propName, prop, getPropType }) => {
  if (!prop.type && !prop.flowType) return null;

  return (
    <React.Fragment>
      <div sx={styles.line}>
        <div sx={styles.propName}>
          {prop.required && (
            <Icon icon="star" size={13} color="var(--fmb-red)" />
          )}
          {propName}
          {getDefaultValue(prop) && (
            <div sx={styles.defaultProp}>
              default: <strong>{getDefaultValue(prop)}</strong>
            </div>
          )}
        </div>
        <div sx={styles.propType}>{getPropType(prop)}</div>
      </div>
      {prop.description && (
        <div sx={styles.description}>{prop.description}</div>
      )}
    </React.Fragment>
  );
};

export const Props = ({ props, getPropType, isToggle }) => {
  const entries = Object.entries(props);

  return (
    <div sx={styles.container} data-testid="props">
      {entries.map(([key, prop]) => (
        <Prop
          key={key}
          propName={key}
          prop={prop}
          getPropType={getPropType}
          isToggle={isToggle}
        />
      ))}
    </div>
  );
};
