"use client";

import { ProductCard } from './product-card';
import { useCart } from './cart-context';

interface Product {
  name: string;
  description: string;
  priceLabel: string;
  priceValue: number;
  highlight?: boolean;
}

export function CartProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          description={product.description}
          price={product.priceLabel}
          highlight={product.highlight}
          onAdd={() =>
            addItem({
              name: product.name,
              priceLabel: product.priceLabel,
              priceValue: product.priceValue
            })
          }
        />
      ))}
    </div>
  );
}
