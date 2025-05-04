import type { Product } from "@/types"

const API_URL = "https://fakestoreapi.com"

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error)
    return []
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    return null
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_URL}/products/categories`)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}
