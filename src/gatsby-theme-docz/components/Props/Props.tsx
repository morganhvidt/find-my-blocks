/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { PropsComponentProps } from "docz";
import { Icon } from "@fmb/components/Icon";
import * as styles from "./styles";

export function Props({ props, getPropType }: PropsComponentProps) {
  const entries = Object.entries(props).map(([key, prop]) => ({
    key,
    ...prop,
  }));

  return (
    <Box sx={styles.container}>
      {entries.map((prop) => (
        <Prop key={prop.key} prop={prop} type={getPropType(prop)} />
      ))}
    </Box>
  );
}

interface PropProps {
  prop: PropsComponentProps;
  type: string;
}

function Prop({ prop, type }: PropProps) {
  if (!prop.type && !prop.flowType) return null;

  const { required, name, description } = prop;

  return (
    <Box sx={styles.prop}>
      <Box sx={styles.info}>
        <Box sx={styles.name}>
          {required && <Icon icon="star" size={13} />}
          {name}
          {getDefaultValue(prop) && (
            <Box sx={styles.defaultText}>
              default: <strong>{getDefaultValue(prop)}</strong>
            </Box>
          )}
        </Box>
        <Box sx={styles.type}>{type}</Box>
      </Box>
      {prop.description && <Box sx={styles.description}>{description}</Box>}
    </Box>
  );
}

function getDefaultValue({
  defaultValue,
  type,
  flowType,
}: PropsComponentProps) {
  const propType = flowType ? flowType : type;

  if (!defaultValue || !defaultValue.value) {
    return null;
  }

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
    return "false";
  }

  return defaultValue.value;
}
