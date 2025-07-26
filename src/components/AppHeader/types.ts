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
  hideSearchButton?: boolean;
  onSearchPress?: () => void;
};

type CenterVariant = Base & {
  variant: 'center';
  description: string;
};

export type AppHeaderProps = DefaultVariant | CenterVariant;
