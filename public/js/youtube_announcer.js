/* Javascript made by Sunmo An(sunmo@sunmo.dev) DATE:20200414 */
var playcounter = 0;
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  var player;

  function loadingalert1() {

    document.getElementById('loadingalert1').style.display = 'inline';
    
  }

  function loadingalert2() {
    document.getElementById('loadingalert2').style.display = 'inline';
  }

  function loadingalert3() {
    document.getElementById('loadingalert3').style.display = 'inline';
  }

  function loadingalert4() {
    document.getElementById('loadingalert4').style.display = 'inline';
  }

  function loadingalert5() {
    document.getElementById('loadingalert5').style.display = 'inline';
  }

  function loadingalert6() {
    document.getElementById('loadingalert6').style.display = 'inline';
  }

  function loadingalert7() {
    document.getElementById('loadingalert7').style.display = 'inline';
  }

  function loadingalert8() {
    document.getElementById('loadingalert8').style.display = 'inline';
  }

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: 100,
       width: 900,
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
    document.getElementById("youtubeplayerdiv").style.display = "";
    playcounter ++;
   // alert(VideoId);
    player.loadVideoById(VideoId, 5, "large");
    player.playVideo();
    
    player.seekTo('0',true);
    player.setVolume('100')
 //   document.getElementById("youtube-audio-play").style.display = "none";
   // document.getElementById("youtube-audio-loading").style.display = "inline";
  //  document.getElementById("progressbar-loading").style.display = "";
    
    
   
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
    player.loadVideoById('kvO_nHnvPtQ', 5, "large");
    player.playVideo();
  }


  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) { //재생중이면
      document.getElementById('loadingalert1').style.display = 'none';
      document.getElementById('loadingalert2').style.display = 'none';
      document.getElementById('loadingalert3').style.display = 'none';
      document.getElementById('loadingalert4').style.display = 'none';
      document.getElementById('loadingalert5').style.display = 'none';
      document.getElementById('loadingalert6').style.display = 'none';
      document.getElementById('loadingalert7').style.display = 'none';
      document.getElementById('loadingalert8').style.display = 'none';

    } else if (event.data == YT.PlayerState.PAUSED) { //일시정지중이면
   
    } else if (event.data == YT.PlayerState.ENDED) {
      document.getElementById("youtubeplayerdiv").style.display = "none";
    }
  }


  function showyoutube() {

    if(playcounter == 0){

      alert("먼저 내용을 선택하세요.")
      if($('#youtubediv').css('display') == 'none'){
        $('#youtubediv').show();
        $('#showembeda').text('숨기기');
        player.setSize(200, 200);
     }else{
        $('#youtubediv').hide();
        $('#showembeda').text('EMBED');
     }
  
     } else {

         if($('#youtubediv').css('display') == 'none'){
            $('#youtubediv').show();
            $('#showembeda').text('숨기기');

         }else{
            $('#youtubediv').hide();
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


