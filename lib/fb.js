
var FB     = require( 'fb' ),
    nop    = function() {};

FB.__connect = function( callback )
{
    FB.api( '/oauth/access_token',
    {
        client_id: process.env.FACEBOOK_APP_ID,
        client_secret: process.env.FACEBOOK_APP_SECRET,
        grant_type: 'client_credentials'
    },
    function( res )
    {
        if( !res || res.error )
        {
            console.error( '[ERROR] Unable to connect to Facebook', res.error );
            return;
        }

        var accessToken = res.access_token,
            expires     = res.expires ? res.expires : 0;

        FB.setAccessToken( accessToken );
        FB.tokenExpires = expires;

        callback( FB );
    } );
};

module.exports = FB;
