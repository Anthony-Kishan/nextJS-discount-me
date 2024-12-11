export interface Review {
    id: string;
    userName: string;
    userImage: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: "clothing" | "food" | "toys" | "books";     
    colors?: string[];
    stock: string;
    rating: number;
    reviewCount: number;
    images: string[];
    reviews: Review[];
  }