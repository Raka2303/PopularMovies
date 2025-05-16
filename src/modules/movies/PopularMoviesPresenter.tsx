import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import MovieTile from './components/movieTile/MovieTile';
import {useStyles} from '@customHooks/useStyles';
import MoviesStyle from './MoviesStyle';
import DropDownView from '@components/dropdownView/DropDownView';
import AppConstants from '@constants/AppConstants';
import {IDropDown} from '@components/dropdownView/types';
import DividerView from '@components/dividerView/DividerView';

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
}

interface IPopularMoviesPresenterProps {
  movies: IMovie[];
  isLoading: boolean;
  onEndReached: () => void;
  dropDownData: IDropDown[];
  onLanguageOptionSelectionHandler: (value: string) => void;
}

const PopularMoviesPresenter: FC<IPopularMoviesPresenterProps> = ({
  movies,
  onEndReached,
  dropDownData,
  onLanguageOptionSelectionHandler,
}) => {
  const moviesStyles = useStyles(MoviesStyle);
  const {changeLanguage} = AppConstants();

  const renderMovieItem = ({item, index}: {item: IMovie; index: number}) => (
    <MovieTile
      pKey={item.id.toString()}
      imageUrl={item.poster_path}
      title={item.title}
      index={index}
    />
  );
  return (
    <View style={{flex: 1}}>
      <DividerView marginTop={10}/>
      <View style={{width: '100%'}}>
        <DropDownView
          dropDownData={dropDownData}
          dropDownTitle={changeLanguage}
          selectedOption={dropDownData.find(item => item.isSelected)?.value!}
          setSelectedOption={onLanguageOptionSelectionHandler}
        />
      </View>
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
