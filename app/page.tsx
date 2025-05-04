import ProductGrid from "@/components/product-grid"
import FilterSidebar from "@/components/filter-sidebar"
import { getProducts } from "@/lib/api"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <FilterSidebar />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <p className="text-gray-500">Showing {products.length} products</p>
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  )
}
