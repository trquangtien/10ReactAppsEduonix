import AppDispatcher from './../dispatcher/app-dispatcher';
import AppConstants from './../constants/app-constants';

var AppActions = {
  searchMovies(movie) {
    console.log(`AppActions - searchMoviesByText method`);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIE,
      movie: movie
    });
  }
};

export default AppActions;
