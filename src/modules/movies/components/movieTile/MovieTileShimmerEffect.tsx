import {useStyles} from '@customHooks/useStyles';
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import MovieTileStyle from './MovieTileStyle';
import normalize from '@utils/utilities';

const MovieTileShimmerEffect = ({index}:{index:number}) => {
  const movieTileStyles = useStyles(MovieTileStyle);

  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View
        style={[
          movieTileStyles.movieTileContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginLeft: index % 2 !== 0 ? normalize(5) : 0,
            marginRight: index % 2 !== 0 ? 0 : normalize(5),
          },
        ]}>
        <FastImage
          source={{uri: `http://image.tmdb.org/t/p/w500imageUrl`}}
          resizeMode={FastImage.resizeMode.cover}
          style={movieTileStyles.movieTile}
        />
        <View style={movieTileStyles.movieTitle} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default MovieTileShimmerEffect;
