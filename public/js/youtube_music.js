var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  var player;
  var playcounter = 0;

  function onYouTubeIframeAPIReady() {

    var ctrlq = document.getElementById("player");

    player = new YT.Player('player', {
      height: '270',
      width: '480',
      videoId: ctrlq.dataset.video,
 //     list: 'PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange 
      },
      playerVars: {
        autoplay: '0',
        loop: '0'
        
      },
    //  https://jsbin.com/cocatuta/29/edit?js,output
    });
  } 
  


  function videostart() {
  
  
    //player.loadVideoById("bHQqvYy5KYo", 5, "large");
   
   
 
   
   player.seekTo(0,true);
   
    player.setVolume('50');
    document.getElementById("youtube-audio-play").style.display = "none";
    document.getElementById("youtube-audio-loading").style.display = "inline";
    document.getElementById("progressbar-loading").style.display = "";
    
   
    player.playVideo();
  }

  function onPlayerReady(event) {
    player.loadVideoById('kvO_nHnvPtQ', 5, "large");
    player.playVideo();
    player.cuePlaylist({
      'listType': 'playlist',
      'list': 'PLjAinDIbL70ZrNYfbDA2d67l1bYh5b3bX',
      
      'index': 0,
      'startSeconds': 0,
      'suggestedQuality': 'small'
  });
    /*
    player.loadPlaylist(playlist:String|Array,
      index:Number,
      startSeconds:Number,
      suggestedQuality:String)
    */
 
  
 
   
    
  }

  String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) { //재생중이면
      playcounter++;
      playertime = setInterval(function(){
        var playerTotalTime = player.getDuration();
        var currenttime = player.getCurrentTime();
        /*
        var hours   = Math.floor(currenttime / 3600);
        var minutes = Math.floor((currenttime - (hours * 3600)) / 60);
        var seconds = currenttime - (hours * 3600) - (minutes * 60); */
        var currenttimeinteger = currenttime.toFixed(0);
        var playertotaltimeinteger = playerTotalTime.toFixed(0);
        var percent = currenttimeinteger / playertotaltimeinteger * 100;
        var barwidth = 0.5 + percent * 0.995;
        var barwidthinteger = barwidth.toFixed(1) + "%";

        var barwidthintegershow = percent.toFixed(2) + "%";
        document.getElementById("percentindicator").innerHTML = currenttimeinteger.toHHMMSS() + " / " + playertotaltimeinteger.toHHMMSS() ;  
        document.getElementById("currenttime").style.width = barwidthinteger;
        
        
      },1000);
      
    
      
      
      document.getElementById("youtube-audio-play").style.display = "none"; //재생하기 삭제
      document.getElementById("youtube-audio-loading").style.display = "none"; //로딩중 삭제
      document.getElementById("progressbar-loading").style.display = "none"; //로딩바 삭제
      document.getElementById("progressbar-playing").style.display = ""; //로딩바 삭제
      document.getElementById("youtube-audio-fromfirst").style.display = "none"; //처음부터 듣기 삭제
      document.getElementById("youtube-audio-playing").style.display = "inline"; //재생중 표시
      document.getElementById("youtube-audio-pause").style.display = "inline"; //일시정지하기 표시
      document.getElementById("youtube-audio-paused").style.display = "none"; //일시정지중 삭제
      document.getElementById("youtube-audio-resume").style.display = "none"; //이어서 듣기 삭제 
     
  
  

    } else if (event.data == YT.PlayerState.PAUSED) { //일시정지중이면
      clearInterval(playertime);
      document.getElementById("youtube-audio-fromfirst").style.display = "inline"; //처음부터 듣기 표시
      document.getElementById("youtube-audio-playing").style.display = "none"; //재생중 삭제
      document.getElementById("youtube-audio-pause").style.display = "none"; //일시정지학기 삭제
      document.getElementById("youtube-audio-paused").style.display = "inline"; //일시정지중 표시
      document.getElementById("youtube-audio-resume").style.display = "inline"; //이어서 듣기 표시
    } else {
      clearInterval(playertime);
    }
  }


  function showyoutube() {
 
    if(playcounter == 0){

     
        $('#player').show();
        

     
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
    alert('차트를 처음부터 다시 재생합니다.');
    player.playVideo();
  }


