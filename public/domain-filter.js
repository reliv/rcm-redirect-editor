/**
 * Filter that will query all existing domains
 */
angular.module('rcmRedirectEditor')
    .filter('domainFilter', function () {
        return function (input, query) {
            if (!query) {
                return input
            }
            var result = {};
            var regex = new RegExp(query, 'i');
            angular.forEach(
                input, function (site) {
                    if (site.domain && regex.test(site.domainName)) {
                        result[site.siteId] = site;
                    }
                }
            );
            return result;
        };
    });


