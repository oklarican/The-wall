function fbPic(id){
    var url=null
    if(id>0){
        url="http://graph.facebook.com/"+id+"/picture";
    } else {
        url="lib/thewall/icons/nopic-small.jpg";/*https://dev.twitter.com/docs/api/1/get/users/profile_image/:screen_name8*/
    }
    return url
}

function getSession() {
    alert(JSON.stringify(FB.getSession()));
}

function getLoginStatus() {
    FB.getLoginStatus(function(response) {
                      if (response.session) {
                      alert('logged in');
                      } else {
                      alert('not logged in');
                      }
                      });
}

function me() {
    FB.api('/me', function(response) {
           email =response.email;
           fbid= response.id;
           
           });
}

function logout() {
    FB.logout(function(response) {
              alert('logged out');
              });
}

function fbPhotoClick(){
    //FB.https_www();
}

function login() {
    FB.login(function(response) {
             if (response.session) {
             
             FB.api('/me', function(response) {
                    email= response.email;
                    fbid= response.id;
                    FB.logout(function(response) {
                              console.log('Logged out.');
                              });
                    });
             } else {
             alert('User cancelled login or did not fully authorize.');
             }
             }, {perms: 'email'});
}

