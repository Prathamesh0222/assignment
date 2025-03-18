import { ArrowLeftRight, X } from "lucide-react";
import { useProduct } from "../store/productState";
import { useState } from "react";
import { Table } from "antd";
import { columns } from "../libs/columns";
import { ProductProps } from "./Product";
import toast from "react-hot-toast";

export const Compare = () => {
  const { compareProducts, removeProduct, products, addProduct } = useProduct();
  const [openModel, setOpenModel] = useState<boolean>(false);

  const handleOpenModel = () => {
    setOpenModel(!openModel);
  };

  const handleCompare = (product: ProductProps) => {
    if (compareProducts.length >= 4) {
      toast.error("Max 4 Products allowed!");
      return;
    }
    addProduct(product);
    toast.success("Added Product successfully");
    setOpenModel(false);
  };

  const handleRemoveProduct = (id: number) => {
    removeProduct(id);
    toast.success("Removed product successfully");
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
          <h1 className="font-semibold md:block hidden">{product.title}</h1>
          <p className="text-gray-700/80 md:block hidden">
            {product.description.slice(0, 50)}
          </p>
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
            className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer shadow-lg hover:bg-blue-700 font-semibold"
          >
            Compare Products
          </button>
        </div>
        {openModel && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10">
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="p-5 bg-white rounded-xl shadow-xl max-w-4xl w-[90vw] max-h-[80vh] overflow-auto">
                <div className="flex justify-end">
                  <button
                    onClick={handleOpenModel}
                    className="px-1 py-1 my-3 bg-blue-500 text-white rounded-lg cursor-pointer shadow-lg"
                  >
                    <X />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <Table
                    pagination={{ pageSize: 3 }}
                    dataSource={tableData}
                    columns={columns}
                    scroll={{ x: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`flex gap-4 px-2 max-w-7xl mx-auto ${
            compareProducts.length > 0 ? "grid grid-cols-2 md:flex" : ""
          }`}
        >
          {compareProducts.length > 0 ? (
            compareProducts.map((product) => (
              <div
                key={product.id}
                className="relative border border-black/15 rounded-lg shadow-xl w-full"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4 bg-slate-500 rounded-t-lg"
                />
                <div className="px-4 pt-2 pb-4">
                  <h1 className="font-semibold">{product.title}</h1>
                  <h2 className="text-gray-600 tracking-tighter">
                    {product.brand}
                  </h2>
                  <p className="text-gray-600">${product.price}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <div className="text-center rounded-xl px-2 bg-green-300/50 text-sm">
                      {product.discountPercentage}%
                    </div>
                    <div className="text-center rounded-xl bg-slate-500 text-white text-sm px-2 font-semibold">
                      {product.category}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className="absolute top-0 right-2 mt-2 px-1 py-1 border border-white/20 rounded-md text-white hover:bg-black/50 cursor-pointer"
                >
                  <X />
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center w-full p-8 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 gap-4">
              <ArrowLeftRight className="w-12 h-12 text-gray-400" />
              <h1 className="text-2xl font-medium text-gray-500">
                Select products to compare
              </h1>
              <p className="text-gray-400 text-center mt-4">
                Choose up to 4 products to see detailed comparisons
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
