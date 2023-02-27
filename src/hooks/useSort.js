export function useSort(value, config, labelToSort) {
  let sortedData = value;

  const { sortValue } = config.find((config) => config.label === labelToSort);

  sortedData = [...value].sort((a, b) => {
    const valueA = sortValue(a);
    const valueB = sortValue(b);

    const reverseOrder = config.orderSort === "asc" ? 1 : -1;

    if (typeof valueA === "string") {
      return valueA.localeCompare(valueB) * reverseOrder;
    } else {
      return (valueA - valueB) * reverseOrder;
    }
  });

  return {
    sortedData,
  };
}
