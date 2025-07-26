import { FC } from 'react';
import { View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from '@tentwenty-tech/theme';

export type AppSearchHeaderProps = {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  searchLoading?: boolean;
  onSearchClose?: () => void;
};
export const AppSearchHeader: FC<AppSearchHeaderProps> = ({
  onSearchChange,
  searchQuery,
  searchLoading = false,
  onSearchClose
}) => {
  const theme = useTheme();

  const handleSearchClose = () => {
    onSearchClose && onSearchClose();
    onSearchChange && onSearchChange('');
  };
  return (
    <Appbar.Header mode='small'>
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
    </Appbar.Header>
  );
};
