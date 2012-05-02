Ext.regApplication({
    name: 'wall',
    launch: function() {
       this.launched = true;
       this.mainLaunch();
    },
    mainLaunch: function() {
        //alert('in mainLaunch');
        // Comment out the following 'if' statement for testing in a desktop browser       
        //if (!device || !this.launched) {return;}
        //alert('app 0');
        userRecord = new wall.models.User();
          
        // setup camera 
        //pictureSource=navigator.camera.PictureSourceType;
        //destinationType=navigator.camera.DestinationType;

        // setup gps
        //var options = {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
        //navigator.geolocation.watchPosition(onGpsSuccess, onGpsError,{maximumAge:5000,enableHighAccuracy: true, timeout:5000});

        // setup facebook
        try {
        //alert('calling FB.init');
        FB.init({ appId: "235261143169458", nativeInterface: PG.FB });
        document.getElementById('facebookData').innerHTML = "";
        } catch (e) {
        alert(e);
        }
               
        this.views.viewport = new this.views.Viewport();
        //alert('app 1');
        Ext.dispatch({
            controller: wall.controllers.main,
            action: 'initapp',
            //action: 'testproxy',
            animation: {type: 'slide', direction: 'left'}
        });
    }
});