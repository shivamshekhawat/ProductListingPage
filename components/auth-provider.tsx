"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    // In a real app, you would call your API here
    // This is a mock implementation for demo purposes
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock validation - in a real app, this would be handled by your backend
      if (email === "user@example.com" && password === "password") {
        const user = { id: "1", name: "Demo User", email }
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (error) {
      throw error
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    // In a real app, you would call your API here
    // This is a mock implementation for demo purposes
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const user = { id: "1", name, email }
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)
    } catch (error) {
      throw error
    }
  }

  const signOut = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
