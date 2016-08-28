'use strict';

/**
 * @ngdoc service
 * @name abManagerApp.userFactory
 * @description
 * # userFactory
 * Factory in the abManagerApp.
 */
angular.module('abManagerApp')
  .factory('userFactory', function ($resource) {
    // Service logic
    // ...
    return $resource('http://localhost:3000/api/v1/users/:id');
  });
