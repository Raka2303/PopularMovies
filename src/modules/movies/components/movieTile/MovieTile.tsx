import {useStyles} from '@customHooks/useStyles';
import React, {FC} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import MovieTileStyle from './MovieTileStyle';
import CText from '@components/cText/CText';

interface IMovieTileProps {
  pKey:string;
  imageUrl: string;
  title: string;
}

const MovieTile: FC<IMovieTileProps> = ({pKey, imageUrl, title}) => {
  const movieTileStyles = useStyles(MovieTileStyle);
  return (
    <View key={pKey} style={movieTileStyles.movieTileContainer}>
      <FastImage
        source={{uri: `http://image.tmdb.org/t/p/w500${imageUrl}`}}
        resizeMode={FastImage.resizeMode.cover}
        style={movieTileStyles.movieTile}
      />
      <View style={movieTileStyles.movieTitle}>
        <CText.HeaderText style={{textAlign: 'center'}}>
          {title}
        </CText.HeaderText>
      </View>
    </View>
  );
};
export default MovieTile;
