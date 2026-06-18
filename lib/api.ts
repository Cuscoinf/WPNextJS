import type { Tour, Category, TourType, Hotel, HomePage, Page } from './types'

import toursData from './data/tours.json'
import categoriesData from './data/categories.json'
import hotelesData from './data/hoteles.json'
import pagesData from './data/pages.json'

// ============================================================
// HELPERS
// ============================================================
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const categories = categoriesData as unknown as Category[]
const tipos: TourType[] = [
  { id: 1, name: 'Aventura', slug: 'aventura' },
  { id: 2, name: 'Cultural', slug: 'cultural' },
  { id: 3, name: 'Relax', slug: 'relax' },
]

function resolveTours(raw: any[]): Tour[] {
  return raw.map(t => ({
    ...t,
    categories: t.categories.map((id: number) =>
      categories.find(c => c.id === id)!
    ),
    tipos: t.tipos.map((id: number) =>
      tipos.find(tp => tp.id === id)!
    ),
  }))
}

// ============================================================
// TOURS
// ============================================================
export async function getTours(): Promise<Tour[]> {
  return resolveTours(toursData)
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  const tour = (toursData as any[]).find(t => t.slug === slug)
  if (!tour) return null
  return resolveTours([tour])[0]
}

export async function getToursByCategory(categorySlug: string): Promise<Tour[]> {
  const category = categories.find(c => c.slug === categorySlug)
  if (!category) return []
  return resolveTours(
    (toursData as any[]).filter(t => t.categories.includes(category.id))
  )
}

// ============================================================
// CATEGORIES
// ============================================================
export async function getCategories(): Promise<Category[]> {
  return categories
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return categories.find(c => c.slug === slug) ?? null
}

// ============================================================
// TOUR TYPES
// ============================================================
export async function getTourTypes(): Promise<TourType[]> {
  return tipos
}

// ============================================================
// HOTELES
// ============================================================
export async function getHoteles(): Promise<Hotel[]> {
  return hotelesData as unknown as Hotel[]
}

export async function getHotelBySlug(slug: string): Promise<Hotel | null> {
  return (hotelesData as unknown as Hotel[]).find(h => h.slug === slug) ?? null
}

// ============================================================
// PAGES
// ============================================================
export async function getHomePage(): Promise<HomePage | null> {
  const raw = (pagesData as any[]).find(p => p.slug === 'portada')
  if (!raw) return null
  return raw as HomePage
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const raw = (pagesData as any[]).find(p => p.slug === slug && p.slug !== 'portada')
  if (!raw) return null
  return raw as Page
}

export async function getAllPages(): Promise<Page[]> {
  return (pagesData as any[])
    .filter(p => p.slug !== 'portada')
    .map(p => p as Page)
}
