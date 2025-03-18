import { create } from "zustand";
import { ProductProps } from "../components/Product";

interface ProductState {
  products: ProductProps[];
  setProducts: (e: ProductProps[]) => void;
  compareProducts: ProductProps[];
  addProduct: (e: ProductProps) => void;
  removeProduct: (productId: number) => void;
}

export const useProduct = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  compareProducts: [],
  addProduct: (product) =>
    set((state) => {
      if (
        state.compareProducts.length > 4 &&
        !state.compareProducts.find((p) => p.id === product.id)
      ) {
        return state;
      }
      return { compareProducts: [...state.compareProducts, product] };
    }),
  removeProduct: (productId) =>
    set((state) => ({
      compareProducts: state.compareProducts.filter((p) => p.id !== productId),
    })),
}));
