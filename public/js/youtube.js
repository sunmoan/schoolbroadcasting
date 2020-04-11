var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  var player;
  function onYouTubeIframeAPIReady() {

    var ctrlq = document.getElementById("player");

    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: ctrlq.dataset.video,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange 
      },
      playerVars: {
        autoplay: ctrlq.dataset.autoplay,
        loop: ctrlq.dataset.loop,
        
      },
      
    });
  } 

  function videostart() {
    
    player.playVideo();
    player.setVolume('50')
    document.getElementById("youtube-audio-play").style.display = "none";
    document.getElementById("youtube-audio-loading").style.display = "inline";
    document.getElementById("progressbar-loading").style.display = "";
    
   
  }

  function onPlayerReady(event) {
 
    
    
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) { //재생중이면
      
      document.getElementById("progressbar-playing").style.display = "inline";
      document.getElementById("progressbar-playing").style.display = "inline";
      document.getElementById("youtube-audio-play").style.display = "none"; //재생하기 삭제
      document.getElementById("youtube-audio-loading").style.display = "none"; //로딩중 삭제
      document.getElementById("progressbar-loading").style.display = "none"; //로딩바 삭제
      document.getElementById("youtube-audio-fromfirst").style.display = "none"; //처음부터 듣기 삭제
      document.getElementById("youtube-audio-playing").style.display = "inline"; //재생중 표시
      document.getElementById("youtube-audio-pause").style.display = "inline"; //일시정지하기 표시
      document.getElementById("youtube-audio-paused").style.display = "none"; //일시정지중 삭제
      document.getElementById("youtube-audio-resume").style.display = "none"; //이어서 듣기 삭제

    } else if (event.data == YT.PlayerState.PAUSED) { //일시정지중이면
      document.getElementById("youtube-audio-fromfirst").style.display = "inline"; //처음부터 듣기 표시
      document.getElementById("youtube-audio-playing").style.display = "none"; //재생중 삭제
      document.getElementById("youtube-audio-pause").style.display = "none"; //일시정지학기 삭제
      document.getElementById("youtube-audio-paused").style.display = "inline"; //일시정지중 표시
      document.getElementById("youtube-audio-resume").style.display = "inline"; //이어서 듣기 표시
    } 
  }



  function videopause() {
    player.pauseVideo();
  }

  function videoresume() {
    player.playVideo();
  }
  
  function videofromfirst() {
    player.seekTo(0,false);
    player.playVideo();
  }


  function toggleAudio() {
    if ( player.getPlayerState() == 1 || player.getPlayerState() == 3 ) {
      player.pauseVideo(); 
      
    } else {
      player.playVideo(); 
   
    } 
  } 

