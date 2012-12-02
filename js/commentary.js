(function () {

    var API = window.APPDOTNET;

    var ask_for_authentication = function () {
        console.log('Initializing authentication...');
        $('#authenticate').on('click', function () {
            console.log('authenticating...');
            var url = API.get_auth_url(NOTIFIER_OPTIONS);
            window.location.href = url;
        });
    };

    // if (window.location.hash !== '' && !window.localStorage.access_token) {
    //     var keys = URI('?' + window.location.hash.slice(1)).query(true);
    //     if (keys && keys.access_token) {
    //         window.localStorage.access_token = keys.access_token;
    //     }
    // }
    var check_access_token = function () {
        console.log("Checking access token...");
        if (window.localStorage.access_token) {
            console.log("...user is authenticated");
        } else {
            console.log("...not authenticated");
            ask_for_authentication();
        }
    };

    check_access_token();
}());