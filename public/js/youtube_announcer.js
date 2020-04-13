/* Javascript made by Sunmo An(sunmo@sunmo.dev) DATE:20200414 */
var playcounter = 0;
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  var player;


  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
   //   height: 100,
     // width: 900,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange 
      },
      playerVars: {
        autoplay: '0',
        loop: '0'
        
      },
    });
  } 
  


  function VideostartbyVideoId(VideoId) {
   // alert("VideostartbyVideoId");
    playcounter ++;
   // alert(VideoId);
    player.loadVideoById(VideoId, 5, "large");
    player.playVideo();
    player.seekTo('0',true);
    player.setVolume('50')
    document.getElementById("youtube-audio-play").style.display = "none";
    document.getElementById("youtube-audio-loading").style.display = "inline";
    document.getElementById("progressbar-loading").style.display = "";
    
    
   
  }

  function VideostartbyPlaylistId(PlaylistId) {
    playcounter ++;
    player.loadPlaylist({
      'list': PlaylistId,
      'listType': 'playlist',
      'index': 0,
      'startSeconds': 0,
      'suggestedQuality': 'small'
  });
    //player.loadVideoById("bHQqvYy5KYo", 5, "large");
    player.playVideo();
    player.seekTo('0',true);
    player.setVolume('50')
    document.getElementById("youtube-audio-play").style.display = "none";
    document.getElementById("youtube-audio-loading").style.display = "inline";
    document.getElementById("progressbar-loading").style.display = "";
    
    
   
  }



  function onPlayerReady(event) {

  }


  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) { //재생중이면
      
    } else if (event.data == YT.PlayerState.PAUSED) { //일시정지중이면
     
    } else {
     
    }
  }


  function showyoutube() {

    if(playcounter == 0){

      alert("먼저 내용을 선택하세요.")
  
     } else {

         if($('#player').css('display') == 'none'){
            $('#player').show();
            $('#showembeda').text('숨기기');

         }else{
            $('#player').hide();
            $('#showembeda').text('EMBED');
         }
  
     }
    
    
  }
  function videopause() {
    player.pauseVideo();
  }

  function videoresume() {
    player.playVideo();
  }
  
  function videofromfirst() {
    player.seekTo(0,true);
    player.playVideo();
  }


