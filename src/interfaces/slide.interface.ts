export interface SlideItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  singleImage: boolean;
  isSpecialStyle?: boolean;
}

export type PlayStationItem = Omit<SlideItem, 'title'> & {};
export type HookahItem = Omit<SlideItem, 'title'> & {};
