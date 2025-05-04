import { getProduct } from "@/lib/api"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <div className="aspect-square relative">
            <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-contain" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase">{product.category}</p>
            <h1 className="text-3xl font-bold mt-2">{product.title}</h1>

            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                <span className="ml-2 text-sm text-gray-500">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

          <div>
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="flex flex-col space-y-4">
            <Button size="lg" className="w-full">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>

            <Button variant="outline" size="lg" className="w-full">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div>Free shipping</div>
              <div>•</div>
              <div>In stock</div>
              <div>•</div>
              <div>Fast delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
