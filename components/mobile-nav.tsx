"use client"

import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User } from "lucide-react"
import { useState } from "react"

export default function MobileNav() {
  const { user, signOut } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col h-full">
      <div className="px-2 py-4">
        <Link href="/" className="font-bold text-xl mb-6 block">
          STORE
        </Link>

        <div className="relative mb-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <nav className="flex flex-col gap-4 mb-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/categories/men" className="text-sm font-medium transition-colors hover:text-primary">
            Men
          </Link>
          <Link href="/categories/women" className="text-sm font-medium transition-colors hover:text-primary">
            Women
          </Link>
          <Link href="/categories/electronics" className="text-sm font-medium transition-colors hover:text-primary">
            Electronics
          </Link>
          <Link href="/categories/jewelry" className="text-sm font-medium transition-colors hover:text-primary">
            Jewelry
          </Link>
        </nav>

        <div className="flex flex-col gap-2">
          <Link href="/cart" className="flex items-center gap-2 text-sm font-medium">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </Link>

          {user ? (
            <>
              <Link href="/account" className="flex items-center gap-2 text-sm font-medium">
                <User className="h-4 w-4" />
                Account
              </Link>
              <Button variant="outline" onClick={signOut} className="mt-2">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
