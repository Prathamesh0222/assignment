import { X } from "lucide-react";
import { useProduct } from "../store/productState";
import { useState } from "react";
import { Table } from "antd";
import { columns } from "../libs/columns";
import { ProductProps } from "./Product";

export const Compare = () => {
  const { compareProducts, removeProduct, products, addProduct } = useProduct();
  const [openModel, setOpenModel] = useState<boolean>(false);

  const handleOpenModel = () => {
    setOpenModel(!openModel);
  };

  const handleCompare = (product: ProductProps) => {
    if (compareProducts.length >= 4) {
      alert("Not more than 4 allowed");
      return;
    }
    addProduct(product);
    setOpenModel(false);
  };

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
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end p-4">
          <button
            onClick={handleOpenModel}
            className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer shadow-lg hover:bg-blue-700"
          >
            Compare Products
          </button>
        </div>
        {openModel && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10">
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="p-5 bg-white rounded-xl shadow-xl">
                <div className="flex justify-end">
                  <button
                    onClick={handleOpenModel}
                    className="px-1 py-1 bg-blue-500 text-white rounded-lg cursor-pointer shadow-lg"
                  >
                    <X />
                  </button>
                </div>
                <Table
                  pagination={{ pageSize: 5 }}
                  dataSource={tableData}
                  columns={columns}
                />
              </div>
            </div>
          </div>
        )}

        <div className="md:flex grid grid-cols-2 gap-4 p-4 max-w-7xl x-auto">
          {compareProducts.map((product) => (
            <div
              key={product.id}
              className="relative border border-black/15 rounded-lg shadow-xl w-full"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-contain mb-4 bg-slate-500"
              />
              <div className="px-4 pt-2 pb-4">
                <h2 className="font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                className="absolute top-0 right-2 mt-2 px-1 py-1 border border-white/20 rounded-md text-white hover:bg-black/50 cursor-pointer"
              >
                <X />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
