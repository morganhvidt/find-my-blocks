interface Block {
  name: String;
  posts: Array<String>;
}
interface FilterProps {
  data: Array<Block>;
  value: String;
  match: String;
  renderedResults(results: Block[]): Block[] | undefined;
}

export const Filter = ({
  data,
  value,
  match,
  renderedResults = () => undefined,
}: FilterProps) => {
  const serachableValue = value.toLowerCase();
  const filteredData = data.filter((item) => {
    const serachableItem = item[match].toLowerCase();
    return serachableItem.includes(serachableValue);
  });

  return renderedResults(filteredData);
};
