requirejs.config({
    //By default load any module IDs from javascript/lib
    baseUrl: 'javascript/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: './jquery'
    }
});

require(['jquery'], function($){

    $("div").html("cool");
});


