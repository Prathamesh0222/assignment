import { useState } from "react";
import { Table } from "antd";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../store/productState";
import { useFetchProduct } from "../hooks/useFetchProduct";
import { columns } from "../libs/columns";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  discountPercentage: number;
  images: string[];
  category: string;
}

export const Product = () => {
  useFetchProduct();
  const { products } = useProduct();
  const [filter, setFilter] = useState<string>("");
  const [filterDialog, setFilterDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  const { addProduct, compareProducts } = useProduct();

  const categories: string[] = [];
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  const handleFilter = (category: string) => {
    setFilter(category);
  };

  const handleDialog = () => {
    setFilterDialog(!filterDialog);
  };

  const handleCompare = (product: ProductProps) => {
    if (compareProducts.length >= 4) {
      alert("Not more than 4 allowed");
      return;
    }
    addProduct(product);
    navigate("/compare");
  };

  const filterData = filter
    ? products.filter((product) => product.category === filter)
    : products;

  const tableData = products.map((product) => ({
    key: product.title,
    product: [
      <div className="flex items-center gap-4">
        <img
          className="object-cover bg-slate-500 w-full max-w-20 h-20"
          src={product.images[0]}
        />
        <span>
          <h1 className="font-semibold">{product.title}</h1>
          <p className="text-gray-700/80">{product.description}</p>
        </span>
      </div>,
    ],
    brand: product.brand,
    originalPrice: product.price,
    price: <p>${product.price}</p>,
    originalDiscount: product.discountPercentage,
    discount: (
      <div className="text-center rounded-xl px-2 bg-green-300/50 text-sm">
        {product.discountPercentage}%
      </div>
    ),
    originalCategory: product.category,
    category: (
      <div className="text-center rounded-xl bg-slate-500 text-white px-2">
        {product.category}
      </div>
    ),
    compare: (
      <button
        onClick={() => handleCompare(product)}
        className="px-2 py-1 bg-blue-500 rounded-md text-white hover:bg-blue-700 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={compareProducts.some((p) => p.id === product.id)}
      >
        Compare
      </button>
    ),
  }));

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="mb-4">
        <button
          onClick={handleDialog}
          className="block md:hidden border px-4 py-1 rounded-md"
        >
          <span className="flex gap-1 items-center">
            <ChevronDown className="w-5 h-5" />
            Filter
          </span>
        </button>
        {filterDialog && (
          <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleFilter("")}
                className={`px-4 py-2 text-left rounded-md ${
                  filter === "" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={`px-4 py-2 text-left rounded-md ${
                    filter === category ? "bg-blue-100" : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Table
        className="border rounded-xl border-black/20 hidden md:block"
        dataSource={tableData}
        pagination={{ defaultPageSize: 5, position: ["bottomCenter"] }}
        columns={columns}
      />
      <div className="grid grid-cols-2 gap-2 md:hidden">
        {filterData.map((product) => (
          <div
            className="border border-black/20 rounded-lg"
            key={product.title}
          >
            <img
              className="bg-slate-500 object-cover h-40 w-full rounded-t-lg"
              src={`${product.images[0]}`}
            />
            <div className="p-2 text-sm">
              <h1 className="font-semibold text-gray-700/80">
                {product.title}
              </h1>
              <p className="font-semibold">{product.brand}</p>
              <p className="mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
