'use strict';

favoritesService.$inject = ['$q', '_'];

export default function favoritesService($q, _) {
    let favorites = [];
    return {
        getFavorites,
        addTofavorites,
        removeFromFavorites
    };

    function getFavorites() {
        return favorites;
    }

    function addTofavorites(person) {
        let defer = $q.defer();
        if (favorites.length < 5 && !_.find(favorites, person)) {
            person.favorite = true;
            favorites = [...favorites, person];
            defer.resolve(favorites);
        } else {
            defer.reject(favorites);
        }
        return defer.promise;
    }

    function removeFromFavorites(person) {
        let defer = $q.defer();
        favorites = _.reject(favorites, person);
        delete person.favorite;
        defer.resolve(favorites);
        return defer.promise;
    }
}
