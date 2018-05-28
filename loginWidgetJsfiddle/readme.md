# I started experimenting running the Okta Login widet with JSFiddle, this
worked for me,  just change your ClientID and Org.

```
<html>

<script
        src="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/js/okta-sign-in.min.js"
        type="text/javascript"></script>

<script
        src="https://ok1static.oktacdn.com/assets/js/sdk/okta-auth-js/1.16.0/okta-auth-js.min.js"
        type="text/javascript"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<link
        href="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/css/okta-sign-in.min.css"
        type="text/css"
        rel="stylesheet"/>

<!-- Theme file: Customize or replace this file if you want to override our default styles -->
<link
        href="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/css/okta-theme.css"
        type="text/css"
        rel="stylesheet"/>

<div id="widget-container"></div>
<div id="token-container"></div>

<script>

    var authClient = new OktaAuth({
        url: 'https://companyx.okta.com',
        clientId: '0oa1dspznqpJ0V6xS1d8',
    });

    authClient.session.exists()
        .then(function(exists) {
            if (exists) {
                // logged in
                console.log("Exists")
                sessionExists()

            } else {
                // not logged in
                renderWidget()

            }
        });

    function renderWidget() {

        var signIn = new OktaSignIn({
            baseUrl: 'https://companyx.okta.com',
            // clientId: '0oa1dspznqpJ0V6xS1d8',
            // redirectUri: 'https://fiddle.jshell.net',
            // authParams: {
            //     issuer: 'default',
            //     responseType: ['id_token', 'token'],
            //     display: 'page'
            // }
        });

        if (!signIn.token.hasTokensInUrl()) {
            signIn.renderEl({el: '#widget-container'},
                function (data) {
                    console.log("61")

                    console.log(data["session"]["token"])
                    var sessionToken = data["session"]["token"]

                    var authClient = new OktaAuth({
                        url: 'https://companyx.okta.com',
                        clientId: '0oa1dspznqpJ0V6xS1d8',
                        redirectUri: 'https://fiddle.jshell.net/_display/',
                        // issuer: 'aus1dvkme88qrcebO1d8',
                    });

                    authClient.token.getWithoutPrompt({
                        responseType: 'id_token', // or array of types
                        sessionToken: sessionToken // optional if the user has an existing Okta session
                    })
                        .then(function(tokenOrTokens) {
                            console.log("78")

                            // console.log(tokenOrTokens)
                            window.parent.postMessage(tokenOrTokens, '*');

                            // manage token or tokens
                        })
                        .catch(function(err) {
                            // handle OAuthError
                        });
                },
                function (err) {
                    console.err(err)
                });
        }

        else {

        }
    }

    function sessionExists() {

        var authClient = new OktaAuth({
            url: 'https://companyx.okta.com',
            clientId: '0oa1dspznqpJ0V6xS1d8',
        });

        var options = {
            responseType: [ 'token'],
            // responseType: ['token', 'token'],
            scopes: ['openid', 'email', 'profile', 'address', 'phone']
        };

        authClient.token.getWithoutPrompt(options)
            .then(function(tokenOrTokens) {
                console.log(tokenOrTokens);
                console.log("access Token")

                console.log(tokenOrTokens[1])
                // $("#accessToken").val(tokenOrTokens["accessToken"])

            })
            .catch(function(err) {
                console.log(err);
            });

    }

    function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener){
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }

    bindEvent(window, 'message', function (e) {
        // results.innerHTML = e.data;

        // console.log("153")

        console.log(e.data["id_token"])
        $("#widget-container").fadeOut();
        // console.log  ( e.data["id_token"] );
        $("#token-container").html("<h4>"+e.data["id_token"]+"</h4>")

    });
</script>

</html>

``

