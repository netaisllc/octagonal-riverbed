// Main.js
'use strict;'

requirejs.config({
    paths: {
        ga: "ga",
        head: '../lib/reveal/lib/js/head.min',
        reveal: '../lib/reveal/js/reveal'
    }
});

require([ 'ga', 'head', 'reveal' ],
    function ( ga, head, Reveal ) {

    // App...
    Reveal.initialize( {
        center: true,
        controls: true,
        history: true,
        progress: true,

        transition: 'convex', // none/fade/slide/convex/concave/zoom

        // Optional reveal.js plugins
        dependencies: [
            {
                src: '../lib/reveal/lib/js/classList.js',
                condition: function() {
                    return !document.body.classList;
                }
            },
            {
                src: '../lib/reveal/plugin/markdown/marked.js',
                condition: function() {
                    return !!document.querySelector( '[data-markdown]' );
                }
            },
            {
                src: '../lib/reveal/plugin/markdown/markdown.js',
                condition: function() {
                    return !!document.querySelector( '[data-markdown]' );
                }
            },
            {
                src: '../lib/reveal/plugin/zoom-js/zoom.js',
                async: true
            }
        ]
    } );
  });