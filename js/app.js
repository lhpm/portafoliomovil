document.addEventListener('deviceready', onDeviceReady, false);


  /* INICIO ONDEVICE */

  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("ad10848b-f1af-4b80-b95e-c6d5a6588383")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

    var app;
    navigator.splashscreen.hide();
    app = new Application();
    app.run();

};/* FIN ONDEVICE */


function Application() {
}

Application.prototype = {

    run: function() {
        var that = this,
            openLocal = document.getElementById("openLocal"),
            openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser"),
            openExternalPDF = document.getElementById("openExternalPDF"),
            openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser");

            openLocal.addEventListener("click", that.openLocal);
            openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
            openExternalPDF.addEventListener("click", that.openExternalPDF);
            openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
    },

    openLocal: function() {
        window.open("pano/index.html", "_blank");
    },
 
    openExternalInAppBrowser:  function () {
        window.open("http://www.telerik.com", "_blank");
    },

    openExternalPDF:  function () {
        if (window.navigator.simulator === true) {
            alert("Not Supported in Simulator.");
        } else {
            window.open("http://www.telerik.com/whitepapers/appbuilder/approaching-mobile-understanding-the-three-ways-to-build-mobile-apps", "_blank");
        }
    },

    openExternalInSystemBrowser:function () {
        window.open("http://wiki.apache.org/cordova/InAppBrowser", "_system");
    }
}


/* Script Compartir */

        document.addEventListener("deviceready", onDeviceReady, true);
        
        function shareToFacebook(){
            window.plugins.socialsharing.shareViaFacebook(
                'Message via Facebook', 
                null /* img */, 
                null /* url */, 
                function() {console.log('share ok')}, 
                function(errormsg){alert(errormsg)}
            );
        }
        
        function shareToTwitter(){
            window.plugins.socialsharing.shareViaTwitter(
                'Message via Twitter', 
                null /* img */, 
                null /* url */, 
                function() {console.log('share ok')}, 
                function(errormsg){alert(errormsg)}
            );
        }
        
        function shareToSMS(){
            window.plugins.socialsharing.shareViaSMS(
                'Message via SMS', 
                '1234567890' /* phone numbers comma seperated */, 
                function() {console.log('share ok')}, 
                function(errormsg){alert(errormsg)}
            );
        }
        
        function shareToEmail(){
            window.plugins.socialsharing.shareViaEmail(
                'Message via Email',
                'Subject',
                ['name@companyname.com'] /* to :array or null */, 
                null /* cc :array or null */,
                null /* bcc :array or null */,
                null /* files :array or null */,
                function() {console.log('share ok')}, 
                function(errormsg){alert(errormsg)}
            );
        }
        
        function shareToOptions(){
            window.plugins.socialsharing.share(
                'Descarga Gratis Nuestra Aplicación Móvil en Play Store https://play.google.com/store/apps/details?id=com.arquipamplona.nazareth&hl=es-419'
            );
        }

/* Script Swipe */
$(document).on('swipeleft', '.ui-page', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});
/* FIN Script Swipe */