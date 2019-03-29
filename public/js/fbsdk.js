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
                id: user.id,
                firstname: user.first_name,
                lastname: user.last_name,
                email: user.email,
                birth: user.birthday,
                photo: user.picture.data.url
            }
            console.log(user);
        }
    });
}
function logOut(){
    FB.logout(function(response){
        console.log(response);
    });
}
const createUser = (user) =>{
    $.ajax({
        type: "POST",
        url: "url",
        data: "user",
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        error: function (response) {  
            console.log(response);
        }
    });
}