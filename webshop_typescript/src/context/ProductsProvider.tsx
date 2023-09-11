import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

export type UseProductContextType = { products: ProductType[] };

const ProductsContext = createContext<UseProductContextType>({ products: [] });

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      try {
        const res = await fetch('http://localhost:8080/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        return data;
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          // Handle the error state or retry logic here if needed
        }
        return [];
      }
    };

    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
