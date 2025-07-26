import { FC } from 'react';
import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { AppSearchHeader, AppSearchHeaderProps } from './AppSearchHeader';
import { AppHeaderProps } from './types';

import { useTheme } from '@tentwenty-tech/theme';

export const AppHeader: FC<AppHeaderProps> & {
  SearchBar: FC<AppSearchHeaderProps>;
} = ({ title, navigation, onBackPress, hideBackButton = false, ...rest }) => {
  const theme = useTheme();
  const handleOnBackPress = () => {
    if (onBackPress) {
      onBackPress();
      return;
    }

    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  if (rest.variant === 'center') {
    return (
      <Appbar.Header mode='center-aligned'>
        {!hideBackButton && <Appbar.BackAction onPress={handleOnBackPress} />}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text
            variant='titleLarge'
            style={{
              color: theme.colors.darkBlueGray
            }}
            numberOfLines={1}>
            {title}
          </Text>
          <Text
            variant='bodySmall'
            style={{
              color: theme.colors.skyBlue
            }}
            numberOfLines={1}>
            {rest.description}
          </Text>
        </View>
      </Appbar.Header>
    );
  }

  // Handle variant-specific props
  const variant = rest.variant ?? 'default';
  const hideSearchButton = variant === 'default' ? ('hideSearchButton' in rest ? rest.hideSearchButton ?? false : false) : true;

  return (
    <Appbar.Header mode='small'>
      <>
        {!hideBackButton && <Appbar.BackAction onPress={handleOnBackPress} />}
        <Appbar.Content
          title={title}
          color={theme.colors.darkBlueGray}
          style={{
            marginLeft: hideBackButton ? theme.spacing.s : 0
          }}
        />
        {!hideSearchButton && (
          <Appbar.Action
            icon='magnify'
            onPress={() => {
              rest.onSearchPress && rest.onSearchPress();
            }}
          />
        )}
      </>
    </Appbar.Header>
  );
};

AppHeader.SearchBar = AppSearchHeader;
