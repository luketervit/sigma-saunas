/**
 * Common types used throughout the application
 */

export interface Sauna {
  id: string
  name: string
  description: string
  price: number
  capacity: number
  imageUrl?: string
  features: string[]
}

export interface Booking {
  id: string
  saunaId: string
  userId: string
  date: Date
  startTime: string
  endTime: string
  status: 'pending' | 'confirmed' | 'cancelled'
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
}

