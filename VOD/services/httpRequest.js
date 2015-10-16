
//http request service...


angular.module('th.Server').service('ServerRequest', [ "$http", function ( $http) {

    this.sendPostData = function (url, data) {
        return $http({
            method: 'POST',
            url: url,
            dataType: "json",
            data: data

        }).success(function (data) {


         });
    }

}]);