export const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: {
      compare: (a: any, b: any) => a.originalPrice - b.originalPrice,
      render: (record: any) => <p>${record.originalPrice}</p>,
    },
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
    sorter: {
      compare: (a: any, b: any) => a.originalDiscount - b.originalDiscount,
      render: (record: any) => <p>${record.originalDiscount}</p>,
    },
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Compare",
    dataIndex: "compare",
    key: "compare",
  },
];
