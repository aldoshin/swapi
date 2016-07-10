'use strict';

peopleService.$inject = ['$http', '$q'];

export default function peopleService($http, $q) {

    let moreUrl = 'http://swapi.co/api/people/',
        currentList = [];

    return {
        getPeople,
        getMorePeople
    };

    function getPeople() {
        return callService('http://swapi.co/api/people/');
    }

    function getMorePeople() {
        return !moreUrl ? noMoreDataResponse() : callService(moreUrl);
    }

    //--------------------- private functions ------------
    function callService(url) {
        return $http.get(url).then(response => {
            moreUrl = response.data.next;
            currentList = [...currentList, ...response.data.results];
        }).then(() => currentList);
    }

    function noMoreDataResponse() {
        let defer = $q.defer();
        defer.reject('No more Data to load');
        return defer.promise;
    }

}
