export interface IBaseScreenProps {
    children: React.ReactNode;
    isParallaxEffect?: boolean;
    isScrollEnabled?: boolean;
    showHeader?: boolean;
    showLoader?: boolean;
    title?: string;
    noBackButton?: boolean;
    cartCount?: string;
    testID?: string;
    onBackPress?: () => void;
  }
