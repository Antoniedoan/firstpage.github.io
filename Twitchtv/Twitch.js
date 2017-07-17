$(document).ready(function(){
  
var url="https://wind-bow.gomix.me/twitch-api/streams/freecodecamp/?callback=?";
  $.getJSON(url,function(data){
    if(data.stream===null){
      $("#fccStatus").html("freeCodeCamp is now <i>offline</i>");
    }
    else{
      $("#fccStatus").html("freeCodeCamp is now <i>online</i>");
        }
  });
  
  var following=[];
  var followerURL="https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/follows/";
  $.getJSON(followerURL, function(data2){
    for (var i=0;i<data2.follows.length;i++){
      var displayName=data2.follows[i].user.display_name;
      following.push(displayName);
    }
   
    following.push("ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "brunofin");
   
  $.each(following, function(i){
    var url2='https://wind-bow.glitch.me/twitch-api/channels/' + following[i];
        
   
  $.getJSON(url2, function(data3){
   var logo, name, status, game;
     var twitchURL="https://www.twitch.tv/" + following[i];
     if (data3.error){
  //  console.log(data3.error);
      
       logo = "https://vignette1.wikia.nocookie.net/cutemariobro/images/5/59/Person-placeholder.jpg/revision/latest?cb=20170131092134";
        status = data3.error;
        name = data3.message;
       $("#followerInfo").prepend(
          "<div class='row'><div class='col-md-4'><img id='placeHolder' src=" +
            logo +
            "></div><div class='col-md-4 mid'>" +
            name +
            "</div><div class='col-md-4 mid'>" +
          status +
            "</div></div>");
     
     }
  
  })
  };
  
 }); //end of document ready function