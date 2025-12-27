export interface MainDataType {
  id: number;
  name: string;
  desc: string;
  images: string[];
  prices: PriceType[];
  location: string;
  places_covered: string[];
  inclusions: string[];
  exclusions: string[];
  bookingUrl: string;
}

export interface PriceType {
  type: SharingType;
  label: string;
  price: number;
  isHoneyMoon?: boolean;
}


export type SharingType = "quad" | "triple" | "double" | "couple" | "single";

export interface FaqDataType {
  ques: string;
  ans: string;
}
