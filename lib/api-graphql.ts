import type { Tour, Category, TourType, Hotel, HomePage, Page } from './types'

const WP_URL = process.env.WORDPRESS_API_URL!

async function graphqlRequest<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const res = await fetch(WP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })
  const json = await res.json()
  if (json.errors) throw new Error(json.errors[0].message)
  return json.data
}

// ============================================================
// TOURS
// ============================================================
export async function getTours(): Promise<Tour[]> {
  const query = `
    query GetTours {
      tours {
        nodes {
          id
          title
          slug
          excerpt
          featuredImage { node { sourceUrl } }
          categories { nodes { id name slug } }
          tipos: tourTypes { nodes { id name slug } }
          tourFields {
            imagen
            dias
            tipo_viaje
            dificultad
            altura
            acomodacion
            etiqueta_1
            etiqueta_2
            ubicacion
            precio
            precio_anterior
            pago_100
            precios_resumen
            resumen
            incluye
            no_incluye
            faq
            descripcion
            banners
            itinerario_dia {
              titulo_dia
              descripcion_dia
              fotos_dia
            }
          }
        }
      }
    }
  `
  const data = await graphqlRequest<{ tours: { nodes: any[] } }>(query)
  return mapTours(data.tours.nodes)
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  const query = `
    query GetTourBySlug($slug: String!) {
      tourBy(slug: $slug) {
        id
        title
        slug
        excerpt
        featuredImage { node { sourceUrl } }
        categories { nodes { id name slug } }
        tourTypes { nodes { id name slug } }
        tourFields {
          imagen
          dias
          tipo_viaje
          dificultad
          altura
          acomodacion
          etiqueta_1
          etiqueta_2
          ubicacion
          precio
          precio_anterior
          pago_100
          precios_resumen
          resumen
          incluye
          no_incluye
          faq
          descripcion
          banners
          itinerario_dia {
            titulo_dia
            descripcion_dia
            fotos_dia
          }
        }
      }
    }
  `
  const data = await graphqlRequest<{ tourBy: any }>(query, { slug })
  if (!data.tourBy) return null
  return mapTours([data.tourBy])[0]
}

function mapTours(nodes: any[]): Tour[] {
  return nodes.map((node: any) => ({
    id: parseInt(node.id.replace(/\D/g, '')),
    title: node.title,
    slug: node.slug,
    excerpt: node.excerpt || '',
    featuredImage: node.featuredImage?.node?.sourceUrl || '',
    categories: (node.categories?.nodes || []).map((c: any) => ({
      id: parseInt(c.id.replace(/\D/g, '')),
      name: c.name,
      slug: c.slug,
    })),
    tipos: (node.tourTypes?.nodes || []).map((t: any) => ({
      id: parseInt(t.id.replace(/\D/g, '')),
      name: t.name,
      slug: t.slug,
    })),
    acf: node.tourFields ? {
      ...node.tourFields,
      imagen: node.tourFields.imagen || '',
      itinerario_dia: node.tourFields.itinerario_dia || [],
      banners: node.tourFields.banners || [],
    } : {} as any,
  })) as Tour[]
}

// ============================================================
// CATEGORIES
// ============================================================
export async function getCategories(): Promise<Category[]> {
  const query = `
    query GetCategories {
      categories {
        nodes {
          id
          name
          slug
          count
          categoryFields {
            carril
            titulo_categoria
            informacion
            titulo_atractivos
            atractivos {
              titulo_atractivo
              contenido_atractivo
            }
            banner
            fotos
            faqs
          }
        }
      }
    }
  `
  const data = await graphqlRequest<{ categories: { nodes: any[] } }>(query)
  return data.categories.nodes.map((node: any) => ({
    id: parseInt(node.id.replace(/\D/g, '')),
    name: node.name,
    slug: node.slug,
    count: node.count,
    acf: node.categoryFields || {},
  })) as Category[]
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const cats = await getCategories()
  return cats.find(c => c.slug === slug) ?? null
}

// ============================================================
// TOUR TYPES (TODO)
// ============================================================
export async function getTourTypes(): Promise<TourType[]> {
  return []
}

// ============================================================
// HOTELES (TODO)
// ============================================================
export async function getHoteles(): Promise<Hotel[]> {
  return []
}

export async function getHotelBySlug(slug: string): Promise<Hotel | null> {
  return null
}

// ============================================================
// PAGES (TODO)
// ============================================================
export async function getHomePage(): Promise<HomePage | null> {
  return null
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  return null
}

export async function getAllPages(): Promise<Page[]> {
  return []
}
