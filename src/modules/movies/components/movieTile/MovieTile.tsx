import {useStyles} from '@customHooks/useStyles';
import React, {FC} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import MovieTileStyle from './MovieTileStyle';
import CText from '@components/cText/CText';
import normalize from '@utils/utilities';

interface IMovieTileProps {
  pKey: string;
  imageUrl: string;
  title: string;
  index: number;
}

const MovieTile: FC<IMovieTileProps> = ({pKey, imageUrl, title, index}) => {
  const movieTileStyles = useStyles(MovieTileStyle);
  return (
    <View
      key={pKey}
      style={[
        movieTileStyles.movieTileContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginLeft: index % 2 === 0 ? 0 : normalize(8),
          marginRight: index % 2 === 0 ? 0 : normalize(8),
        },
      ]}>
      <FastImage
        source={{uri: `http://image.tmdb.org/t/p/w500${imageUrl}`}}
        resizeMode={FastImage.resizeMode.cover}
        style={movieTileStyles.movieTile}
      />
      <View style={movieTileStyles.movieTitle}>
        <CText.HeaderText numberOfLines={1} style={{paddingHorizontal: 15}}>
          {title}
        </CText.HeaderText>
      </View>
    </View>
  );
};
export default MovieTile;
