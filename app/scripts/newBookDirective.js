'use strict';

angular.module('bookLightApp').directive('ngAutocomplete', [ '$parse', function($parse) {
    return {

      scope: {
        details: '=',
        ngAutocomplete: '=',
        options: '='
      },

      link: function(scope, element, attrs, model) {

        //options for autocomplete
        var opts;

        //convert options provided to opts
        var initOpts = function() {
          opts = {};
          if (scope.options) {
            if (scope.options.types) {
              opts.types = [];
              opts.types.push(scope.options.types);
            }
            if (scope.options.bounds) {
              opts.bounds = scope.options.bounds;
            }
            if (scope.options.country) {
              opts.componentRestrictions = {
                country: scope.options.country
              };
            }
          }
        };
        initOpts();
      }
    };
  }]);