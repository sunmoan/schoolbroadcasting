// 네이버 음성합성 Open API 예제
var express = require('express');
var app = express();
var client_id = '9sv11t2u6i';
var client_secret = 'XowQovIKLzdBXs6XkbUAJ40F9hxbbSBYnFGE0Qhv';
var fs = require('fs');
app.get('/tts', function(req, res) {
  var api_url = 'https://naveropenapi.apigw.ntruss.com/voice-premium/v1/tts';
  var request = require('request');
  var options = {
    url: api_url,
    form: { speaker: 'nara', volume: '0', speed: '0', pitch: '0', emotion: '0', text: '잠시후, 방송이 시작될 예정이오니, 학생여러분께서는 빔프로젝터를 켜시고, 자리에 착석해 주시기 바랍니다.', format: 'mp3' },
    headers: { 'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret },
  };
  var writeStream = fs.createWriteStream('./tts1.mp3');
  var _req = request.post(options).on('response', function(response) {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']);
  });
  _req.pipe(writeStream); // file로 출력
  _req.pipe(res); // 브라우저로 출력
});
app.listen(3000, function() {
  console.log('http://127.0.0.1:3000/tts app listening on port 3000!');
});
