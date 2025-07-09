export interface SlideItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  singleImage?: boolean;
  isSpecialStyle?: boolean;
}

export interface SlideProps {
  slide: SlideItem;
  isTransitioning?: boolean;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}
