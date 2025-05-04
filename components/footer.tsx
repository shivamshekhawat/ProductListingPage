import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">STORE</h3>
            <p className="text-sm text-gray-500">
              Your one-stop shop for all your shopping needs. Quality products at affordable prices.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/men" className="text-sm text-gray-500 hover:text-primary">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link href="/categories/women" className="text-sm text-gray-500 hover:text-primary">
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link href="/categories/electronics" className="text-sm text-gray-500 hover:text-primary">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories/jewelry" className="text-sm text-gray-500 hover:text-primary">
                  Jewelry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="text-sm text-gray-500 hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-sm text-gray-500 hover:text-primary">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm text-gray-500 hover:text-primary">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-gray-500 hover:text-primary">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">123 Shopping Street, City</li>
              <li className="text-sm text-gray-500">Email: info@store.com</li>
              <li className="text-sm text-gray-500">Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} STORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
