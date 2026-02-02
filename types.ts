export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  price?: string;
  shopUrl?: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role?: string;
}

export interface PaletteColor {
  name: string;
  hex: string;
}

export interface AIResponse {
  suggestion: string;
  colorPalette: PaletteColor[];
  stitchTypes: string[];
}