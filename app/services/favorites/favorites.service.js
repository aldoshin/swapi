'use strict';

favoritesService.$inject = ['$q', '_'];

export default function favoritesService($q, _) {
  let favorites = [];
  return {
    addTofavorites,
    removeFromFavorites
  };

  function addTofavorites(person) {
    let defer = $q.defer();
    if(favorites.length < 5 && !_.find(favorites, person)) {
      person.favorite = true;
      favorites = [...favorites, person];
      defer.resolve(favorites);
    } else {
      defer.reject(favorites);
    }
    return defer.promise;
  }

  function removeFromFavorites(person) {
    favorites = _.reject(favorites, person);
    delete person.favorite;
    return favorites;
  }
}
