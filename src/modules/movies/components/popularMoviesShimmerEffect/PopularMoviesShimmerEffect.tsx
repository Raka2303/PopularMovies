import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {useStyles} from '@customHooks/useStyles';
import MoviesStyle from '@modules/movies/MoviesStyle';
import MovieTileShimmerEffect from '../movieTile/MovieTileShimmerEffect';


const PopularMoviesShimmerEffect: FC = ({}) => {
  const moviesStyles = useStyles(MoviesStyle);

  const renderMovieItem = ({index}:{index:number}) => (
    <MovieTileShimmerEffect index={index}/>
  );
  return (
    <View style={{flex:1}}>
      <FlatList
        numColumns={2}
        data={[1,2,3,4,5,6]}
        style={moviesStyles.moviesContainer}
        // contentContainerStyle={{margin:0}}
        renderItem={renderMovieItem}
      />
    </View>
  );
};

export default PopularMoviesShimmerEffect;
