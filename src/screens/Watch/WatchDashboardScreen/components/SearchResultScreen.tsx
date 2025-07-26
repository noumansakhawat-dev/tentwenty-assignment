// import { FC } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';
// import { IUpcomingMovies } from '../hooks/types';

// import { MovieCard } from '~/components';
// import { useTheme } from '~/hooks/useTheme';

// type Result = IUpcomingMovies['results'][number];

// interface SearchResultScreenProps {
//   data: Result[];
//   isLoading: boolean;
//   isMoreLoading: boolean;
//   loadMore: () => void;
//   isPagesLoaded: boolean;
//   searchQuery: string;
// }

// export const SearchResultScreen: FC<SearchResultScreenProps> = ({
//   data,
//   isLoading,
//   isMoreLoading,
//   loadMore,
//   isPagesLoaded,
//   searchQuery
// }) => {
//   const theme = useTheme();

//   if (isLoading && data.length === 0) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator animating={true} color={theme.colors.primary} size={'large'} />
//         <Text
//           style={{
//             marginTop: theme.spacing.s,
//             color: theme.colors.primary,
//             fontSize: 16
//           }}>
//           Searching for &quot;{searchQuery}&quot;...
//         </Text>
//       </View>
//     );
//   }

//   if (!isLoading && data.length === 0 && searchQuery.trim().length > 0) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: theme.spacing.l }}>
//         <Text
//           style={{
//             color: theme.colors.primary,
//             fontSize: 18,
//             fontWeight: 'bold',
//             textAlign: 'center',
//             marginBottom: theme.spacing.s
//           }}>
//           No results found
//         </Text>
//         <Text
//           style={{
//             color: theme.colors.mutedLavender,
//             fontSize: 14,
//             textAlign: 'center'
//           }}>
//           We couldn&apos;t find any movies matching &quot;{searchQuery}&quot;. Try searching with different keywords.
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <View
//         style={{
//           paddingHorizontal: theme.spacing.m,
//           paddingVertical: theme.spacing.s,
//           backgroundColor: theme.colors.lightGray
//         }}>
//         <Text
//           style={{
//             color: theme.colors.primary,
//             fontSize: 16,
//             fontWeight: '600'
//           }}>
//           Search Results for &quot;{searchQuery}&quot; ({data.length} movies)
//         </Text>
//       </View>

//       <FlatList
//         data={data}
//         style={{ paddingTop: theme.spacing.s }}
//         keyExtractor={(item, index) => `search-${item.id}-${index}`}
//         renderItem={({ item }) => (
//           <MovieCard
//             imageUrl={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
//             title={item.title}
//             style={{
//               marginHorizontal: theme.spacing.m,
//               marginBottom: theme.spacing.m
//             }}
//           />
//         )}
//         maxToRenderPerBatch={20}
//         scrollEventThrottle={16}
//         onEndReached={() => {
//           if (isMoreLoading || isPagesLoaded) {
//             return;
//           }
//           loadMore();
//         }}
//         onEndReachedThreshold={0}
//         ListFooterComponent={
//           isMoreLoading ? (
//             <ActivityIndicator
//               style={{
//                 marginVertical: theme.spacing.m
//               }}
//               animating={true}
//               color={theme.colors.primary}
//               size={'large'}
//             />
//           ) : null
//         }
//       />
//     </View>
//   );
// };
