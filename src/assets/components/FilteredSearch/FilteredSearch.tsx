import React from "react";

interface FilteredSearchProps {
  data: Array<string>;
  value: string;
  renderedResults?(val: Array<object>): void;
}

export const FilteredSearch = ({
  data,
  value,
  renderedResults = () => null
}: FilteredSearchProps) => {
  const filteredData = data.filter( item => item.name.includes(value) );
  return renderedResults(filteredData);
};
