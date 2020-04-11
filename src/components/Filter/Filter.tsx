interface FilterProps {
  data: Array<string>;
  value: string;
  match: string;
  renderedResults?(val: Array<object>): void;
}

export const Filter = ({
  data,
  value,
  match,
  renderedResults = () => null,
}: FilterProps) => {
  const serachableValue = value.toLowerCase();
  const filteredData = data.filter((item) => {
    const serachableItem = item[match].toLowerCase();
    return serachableItem.includes(serachableValue);
  });
  return renderedResults(filteredData);
};
