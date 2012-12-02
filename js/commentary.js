(function () {

    var API = window.APPDOTNET;

    var ask_for_authentication = function () {
        console.log('Initializing authentication...');
        $('#authenticate').removeClass('hide');

        $('#authenticate').on('click', function () {
            console.log('authenticating...');
            var url = API.get_auth_url(NOTIFIER_OPTIONS);
            window.location.href = url;
        });
    };

    var init = function (){
        NOTIFIER_OPTIONS.access_token = window.localStorage.access_token;
        API = API.init(NOTIFIER_OPTIONS);

        $('#logout').on('click', function () {
            console.log('Logging out...');
            delete window.localStorage.access_token;
        });
        $('#logout').addClass("btn");


        var get_user_info = function () {
            $('#authenticate').addClass('hide');

            API.users().done(function (data) {
                $('#userinfo').find('.user_full_name').text(data.data.name);
                $('#userinfo').removeClass('hide');
            });
        }

        get_user_info();
    }

    

    var check_access_token = function () {
        if (window.location.hash !== '' && !window.localStorage.access_token) {
            var keys = URI('?' + window.location.hash.slice(1)).query(true);
            if (keys && keys.access_token) {
                window.localStorage.access_token = keys.access_token;
            }
        }

        console.log("Checking access token...");
        if (window.localStorage.access_token) {
            console.log("...user is authenticated");
            init();
        } else {
            console.log("...not authenticated");
            ask_for_authentication();
        }
    };

    check_access_token();
}());