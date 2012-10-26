
;( function( window, undefined )
{
  'use strict';

  var Modernizr = window.Modernizr;

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if( Modernizr.touch && !window.location.hash )
  {
    window.addEventListener(
      'load',
      function()
      {
        setTimeout( function()
        {
          window.scrollTo( 0, 1 );
        }, 0 );
      }
    );
  }

} )( this );
