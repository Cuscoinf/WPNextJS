// ============================================================
// TAXONOMIES
// ============================================================
export interface Category {
  id: number
  name: string
  slug: string
  count: number
  acf: CategoryAcf
}

export interface CategoryAcf {
  carril: boolean
  titulo_categoria: string
  informacion: string
  titulo_atractivos: string
  atractivos: Atractivo[]
  banner: string[]
  fotos: string[]
  faqs: number[]
}

export interface Atractivo {
  titulo_atractivo: string
  contenido_atractivo: string
}

export interface TourType {
  id: number
  name: string
  slug: string
}

// ============================================================
// TOURS
// ============================================================
export interface Tour {
  id: number
  title: string
  slug: string
  excerpt: string
  featuredImage: string
  categories: Category[]
  tipos: TourType[]
  acf: TourAcf
}

export interface TourAcf {
  imagen: string
  dias: string
  tipo_viaje: string
  dificultad: string
  altura: string
  acomodacion: string
  etiqueta_1: string
  etiqueta_2: string
  ubicacion: string
  itinerario_dia: ItinerarioItem[]
  resumen: string
  imagen1: string
  imagne2: string
  incluye: string
  no_incluye: string
  faq: string
  descripcion: string
  banners: string[]
  precio: string
  precio_anterior: string
  pago_100: boolean
  precios_resumen: string
}

export interface ItinerarioItem {
  titulo_dia: string
  descripcion_dia: string
  fotos_dia: string[]
}

// ============================================================
// HOTELES
// ============================================================
export interface Hotel {
  id: number
  title: string
  slug: string
  excerpt: string
  featuredImage: string
  content: string
  acf: HotelAcf
}

export interface HotelAcf {
  ubicacion: string
  estrellas: number
  imagenes: string[]
  servicios: string[]
  precio_noche: string
}

// ============================================================
// PAGES
// ============================================================
export interface HomePage {
  id: number
  title: string
  slug: string
  acf: HomePageAcf
}

export interface HomePageAcf {
  sliders: Slider[]
  secciones: Seccion[]
}

export interface Slider {
  imagen_o_banner: string
  etiqueta_sliders: string
  titulo_slider: string
  descripcion_slider: string
  boton_slider: string
  link_slider: string
}

export interface Seccion {
  titulo_seccion: string
  etiqueta_seccion: string
  descripcion_seccion: string
  imagen_seccion: string
  tours_seccion: number[]
  categorias_seccion: number[]
}

export interface Page {
  id: number
  title: string
  slug: string
  content: string
  acf: PageAcf
}

export interface PageAcf {
  accordion?: AccordionSection
  carrusel?: CarruselSection
}

export interface AccordionSection {
  titulo: string
  descripcion: string
  contenido: AccordionItem[]
}

export interface AccordionItem {
  titulo: string
  contenido: string
  link: string
}

export interface CarruselSection {
  titulo: string
  descripcion: string
  carrusel_item: CarruselItem[]
}

export interface CarruselItem {
  icono_caja: string
  titulo_caja: string
  descripcion_caja: string
}
