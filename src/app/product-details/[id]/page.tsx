import Link from "next/link";
import { products } from '@/data/item-product';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Rating } from '@/components/ui/rating';
import { ImageGallery } from '@/components/items-product/image-gallery';
import { ReviewCard } from '@/components/items-product/review-card';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

export default function ProductDetailsPage() {
  // Instead of using params, we'll use a hardcoded product for demonstration
  const currentProduct = products[0]; // Assuming products array has at least one item

  if (!currentProduct) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb
        items={[
          { label: 'Categories', href: '/categories' },
          { label: 'Details', href: '#' },
        ]}
      />
      <div className="container mx-auto px-4 py-8">


        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ImageGallery images={currentProduct.images} />

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{currentProduct.title}</h1>
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                {currentProduct.stock}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Rating value={currentProduct.rating} />
            </div>

            <div className="text-2xl font-bold text-[#FF7A00]">
              ${currentProduct.price.toFixed(2)}
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">Category:</span>
              <span className="ml-2 text-sm text-gray-900">{currentProduct.category}</span>
            </div>

            <p className="text-gray-600">{currentProduct.description}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-gray-300">
                <button className="p-2 hover:text-[#FF7A00]">
                  <Minus className="h-5 w-5" />
                </button>
                <input
                  type="number"
                  defaultValue="5"
                  className="w-16 border-x border-gray-300 p-2 text-center"
                  readOnly
                />
                <button className="p-2 hover:text-[#FF7A00]">
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              <Link href="/checkout/billing" className="text-center flex-1 bg-[#FF7A00] text-white px-6 py-3 rounded-full hover:bg-[#FF7A00]/90 transition-colors">
                Checkout
              </Link>

              <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 bg-gray-300">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Feedback</h2>
          <div className="divide-y divide-gray-200">
            {currentProduct.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

