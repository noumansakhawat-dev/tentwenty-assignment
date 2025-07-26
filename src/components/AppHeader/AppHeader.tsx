import { FC, useState } from 'react';
import { View } from 'react-native';
import { Appbar, Searchbar, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppHeaderProps } from './types';

import { useTheme } from '@tentwenty-tech/theme';

export const AppHeader: FC<AppHeaderProps> = ({ title, navigation, onBackPress, hideBackButton = false, ...rest }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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
  const onSearchChange = variant === 'default' && 'onSearchChange' in rest ? rest.onSearchChange : undefined;
  const searchQuery = variant === 'default' && 'searchQuery' in rest ? rest.searchQuery ?? '' : '';
  const searchLoading = variant === 'default' && 'searchLoading' in rest ? rest.searchLoading ?? false : false;

  const handleSearchClose = () => {
    setIsSearchVisible(false);
    if (variant === 'default' && 'onSearchChange' in rest) {
      {
        rest.onSearchChange && rest.onSearchChange('');
      }
    }
  };

  return (
    <Appbar.Header mode='small'>
      {isSearchVisible ? (
        <View style={{ flex: 1, marginHorizontal: theme.spacing.s }}>
          <Searchbar
            placeholder='Search'
            onChangeText={onSearchChange}
            value={searchQuery}
            loading={searchLoading}
            right={() => (
              <MaterialCommunityIcons
                name='close'
                size={theme.spacing.m}
                color={theme.colors.darkBlueGray}
                style={{
                  marginRight: theme.spacing.xs
                }}
                onPress={handleSearchClose}
              />
            )}
            onClearIconPress={handleSearchClose}
          />
        </View>
      ) : (
        <>
          {!hideBackButton && <Appbar.BackAction onPress={handleOnBackPress} />}
          <Appbar.Content
            title={title}
            color={theme.colors.darkBlueGray}
            style={{
              marginLeft: hideBackButton ? theme.spacing.s : 0
            }}
          />
          {!hideSearchButton && <Appbar.Action icon='magnify' onPress={() => setIsSearchVisible(true)} />}
        </>
      )}
    </Appbar.Header>
  );
};
