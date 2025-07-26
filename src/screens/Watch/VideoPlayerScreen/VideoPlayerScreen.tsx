import { FC, useCallback, useRef, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ActivityIndicator, Appbar } from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStatusBar } from '~/components';
import { useTheme } from '~/hooks/useTheme';
import { WatchStackParamList } from '~/navigation/stack';

type VideoPlayerScreenProps = NativeStackScreenProps<WatchStackParamList, 'VideoPlayerScreen'>;

export const VideoPlayerScreen: FC<VideoPlayerScreenProps> = ({ navigation, route }) => {
  const { height } = useWindowDimensions();
  const theme = useTheme();
  const { videoKey, movieTitle } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<typeof YoutubePlayer>(null);

  const onStateChange = useCallback(
    (state: string) => {
      if (state === 'ended') {
        // Auto-close when video ends
        navigation.goBack();
        setIsPlaying(false);
      }
    },
    [navigation]
  );

  const handleDone = () => {
    navigation.goBack();
  };

  const onError = useCallback(
    (error: string) => {
      showMessage({
        message: 'Video Error',
        description: 'Unable to play the trailer. Please try again later.',
        type: 'danger'
      });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <AppStatusBar barStyle='light-content' />

      <Appbar.Header style={styles.header}>
        <Appbar.Content title={`${movieTitle} - Trailer`} titleStyle={styles.headerTitle} />
        <Appbar.Action icon='close' iconColor={theme.colors.white} onPress={handleDone} />
      </Appbar.Header>

      <View style={styles.playerContainer}>
        {!isReady && (
          <ActivityIndicator
            size='large'
            color={theme.colors.white}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}
            animating={true}
          />
        )}
        <YoutubePlayer
          ref={playerRef}
          height={isReady ? height * 0.8 : 0}
          width='100%'
          play={isPlaying}
          videoId={videoKey}
          onChangeState={onStateChange}
          onReady={() => {
            setIsPlaying(true);
            setIsReady(true);
          }}
          contentScale={0.8}
          onError={onError}
          forceAndroidAutoplay
          initialPlayerParams={{
            loop: false,
            controls: true,
            showClosedCaptions: true,
            modestbranding: true,
            rel: false
          }}
          webViewProps={{
            injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            true;
          `
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    elevation: 0
  },
  headerTitle: {
    color: 'white',
    fontSize: 16
  },
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});
