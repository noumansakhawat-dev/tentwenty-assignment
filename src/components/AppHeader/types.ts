import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';

type Base = {
  variant?: 'default' | 'center';
  title: string;
  navigation: BottomTabNavigationProp<ParamListBase>;
  onBackPress?: () => void;
  hideBackButton?: boolean;
};

type DefaultVariant = Base & {
  variant?: 'default';
} & (
    | {
        hideSearchButton?: true;
        onSearchChange?: never;
        searchQuery?: never;
        searchLoading?: never;
      }
    | {
        hideSearchButton?: false;
        onSearchChange: (query: string) => void;
        searchQuery: string;
        searchLoading?: boolean;
      }
  );

type CenterVariant = Base & {
  variant: 'center';
  description: string;
};

export type AppHeaderProps = DefaultVariant | CenterVariant;
