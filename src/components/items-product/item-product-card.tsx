// import Image from 'next/image'
// import Link from 'next/link'
// import { Price } from '@/components/ui/item-product-price'
// import type { Product } from '@/types/item-product'

// interface ProductCardProps {
//     product: Product
// }

// export function ProductCard({ product }: ProductCardProps) {
//     return (
//         <Link
//             href={`/product-details/${product.id}`}
//             className="group block rounded-2xl bg-white p- shadow-sm transition-shadow hover:shadow-md"
//         >
//             <div className="aspect-[7/3] relative mb-4 overflow-hidden rounded-2xl rounded-b-none bg-gray-100">
//                 <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                     // sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
//                 />
//             </div>
//             <div className='flex justify-between mx-4 mb-4'>
//                 <div>
//                     <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#00A651] transition-colors">
//                         {product.title}
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500 line-clamp-2">
//                         {product.description}
//                     </p>
//                 </div>
//                 <div className="mt-2">
//                     <Price amount={product.price} />
//                 </div>
//             </div>
//         </Link>
//     )
// }

// components/ui/item-product-card.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Price } from '@/components/ui/item-product-price';
import type { Product } from '@/types/item-product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product-details/${product.id}`}
      className="group block rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-[7/3] relative mb-4 overflow-hidden rounded-2xl rounded-b-none bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between mx-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#00A651] transition-colors">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="mt-2">
          <Price amount={product.price} />
        </div>
      </div>
    </Link>
  );
}
