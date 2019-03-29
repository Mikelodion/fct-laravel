window.onload = function () {  
    window.fbAsyncInit = function() {
    FB.init({
        appId      : '387027218549306',
        xfbml      : true,
        version    : 'v3.2'
    });
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  };
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
}
function statusChangeCallback(response){
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
    console.log('Logged In');
    testAPI();
    } else {
    console.log('Not Logged In');
    }
}
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
function testAPI(){
    FB.api('/me?fields=id,first_name,last_name,email,birthday,picture{url}', function(response){
        if(response && !response.error){
            const user = {
                id: response.id,
                firstname: response.first_name,
                lastname: response.last_name,
                email: response.email,
                birth: response.birthday,
                photo: response.picture.data.url
            }
            createUser(user);
        }
    });
}
const createUser = (user) =>{
    $.ajax({
        type: "POST",
<<<<<<< HEAD
        url: "/fblogin",
=======
        url: "/insertNewUser",
>>>>>>> c26735d67cba39a52e761ab12c5d0550e2fc8226
        data: user,
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        error: function (response) {  
            console.log(response);
        }
    });
}