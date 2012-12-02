window.APPDOTNET = (function () {

    var default_options = {
        api_host: 'alpha-api.app.net',
        url_base: '/stream/0/',
        auth_host: 'account.app.net',
        auth_endpoint: '/oauth/authenticate'
    };

    var API = {

        get_auth_url: function (options) {
            var local_options = $.extend({}, default_options, options);
            var url = URI('https://' + local_options.auth_host + local_options.auth_endpoint);

            url.addSearch('client_id', local_options.client_id);
            url.addSearch('redirect_uri', local_options.redirect_uri);
            url.addSearch('response_type', local_options.response_type);
            url.addSearch('scope', local_options.scope);

            return '' + url;
        }

    };

    return API;

}());