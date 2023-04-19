const ytdl = require('ytdl-core');

const fs = require('fs');

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  

  const videoUrl = document.getElementById('video-url').value;

  const videoInfo = await ytdl.getInfo(videoUrl);

  const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' });

  const videoStream = ytdl(videoUrl, { format: videoFormat });

  const outputFilePath = `${videoInfo.title}.${videoFormat.container}`;

  const outputStream = fs.createWriteStream(outputFilePath);

  

  videoStream.pipe(outputStream);

});

