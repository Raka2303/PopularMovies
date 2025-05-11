import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import MovieTile from './components/movieTile/MovieTile';
import {useStyles} from '@customHooks/useStyles';
import MoviesStyle from './MoviesStyle';

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
}

interface IPopularMoviesPresenterProps {
  movies: IMovie[];
  isLoading:boolean;
  onEndReached: () => void;
}

const PopularMoviesPresenter: FC<IPopularMoviesPresenterProps> = ({movies,onEndReached}) => {
  const moviesStyles = useStyles(MoviesStyle);

  const renderMovieItem = ({ item }: { item: IMovie }) => (
    <MovieTile
      pKey={item.id.toString()}
      imageUrl={item.poster_path}
      title={item.title}
    />
  );
  return (
    <View style={{flex:1}}>
      <FlatList
        numColumns={2}
        data={movies}
        keyExtractor={item => item.id.toString()}
        style={moviesStyles.moviesContainer}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        renderItem={renderMovieItem}
      />
    </View>
  );
};

export default PopularMoviesPresenter;
