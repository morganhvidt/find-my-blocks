type Block = {
  name: string;
  posts: Array<string>;
};
interface FilterProps {
  /**
   * The original data that you would like to filter through
   */
  data: Block[];
  /**
   * The value or the filter query.
   */
  value: string;
  /**
   * The key that you would like to match in the data.
   */
  match: string;
  /**
   * A function that returns the filtered data as an array.
   */
  renderedResults(results: Block[]): Block[] | undefined;
}

export const Filter = ({
  data,
  value,
  match,
  renderedResults = () => undefined,
}: FilterProps) => {
  const serachableValue = value.toLowerCase();
  const filteredData: Block[] = data.filter((item) => {
    // @ts-ignore
    const serachableItem = item[match].toLowerCase();
    return serachableItem.includes(serachableValue);
  });

  return renderedResults(filteredData);
};
