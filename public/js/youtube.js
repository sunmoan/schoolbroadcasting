var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  var player;
  function onYouTubeIframeAPIReady() {

    var ctrlq = document.getElementById("player");

    player = new YT.Player('player', {
      height: '100',
      width: '100',
      videoId: ctrlq.dataset.video,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange 
      },
      playerVars: {
        autoplay: '0',
        loop: ctrlq.dataset.loop,
        
      },
      
    });
  } 

  function videostart() {
    alert("ready1");
    player.playVideo();
    alert("ready2");
    document.getElementById("youtube-audio-play").style.display = "none";
    document.getElementById("youtube-audio-loading").style.display = "inline";
    document.getElementById("progressbar").style.display = "";
    
  }

  function onPlayerReady(event) {
    alert("readasasy");
    event.target.playVideo();
    alert("readasasy");
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) { //재생중이면
      document.getElementById("youtube-audio-loading").style.display = "none"; //로딩중 삭제
      document.getElementById("progressbar").style.display = "none"; //로딩바 삭제
      document.getElementById("youtube-audio-playing").style.display = "inline"; //재생중 표시
      document.getElementById("youtube-audio-pause").style.display = "inline"; //일시정지하기 표시
    } else if (event.data == YT.PlayerState.PAUSED) { //일시정지중이면
      document.getElementById("youtube-audio-playing").style.display = "none"; //재생중 삭제
      document.getElementById("youtube-audio-pause").style.display = "none"; //일시정지학기 삭제
      document.getElementById("youtube-audio-paused").style.display = "inline"; //일시정지중 표시
      document.getElementById("youtube-audio-resume").style.display = "inline"; //이어서 듣기 표시
    }
  }



  function videopause() {

  }

  function videoresume() {

  }
  


  function toggleAudio() {
    if ( player.getPlayerState() == 1 || player.getPlayerState() == 3 ) {
      player.pauseVideo(); 
      
    } else {
      player.playVideo(); 
   
    } 
  } 

