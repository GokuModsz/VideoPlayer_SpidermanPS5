const $play      = document.querySelector('#play');
const $pause     = document.querySelector('#pause');
const $forward   = document.querySelector('#forward');
const $backward  = document.querySelector('#backward');
const $video     = document.querySelector('#Video');
const $progress  = document.querySelector('#progress');

$play.addEventListener('click',  handlePlayVideo)
$pause.addEventListener('click', handlePauseVideo)

function handlePlayVideo() 
{ 
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePauseVideo() 
{ 
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

$forward.addEventListener('click', handleForwardVideo)

function handleForwardVideo()
{
    console.log('Retrocede 10 segundos', $video.currentTime);
    $video.currentTime -= 10;
}

$backward.addEventListener('click', handleBackwardVideo)

function handleBackwardVideo()
{
    console.log('Adelanta 10 segundos', $video.currentTime);
    $video.currentTime += 10;

}

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded()
{
    $progress.max = $video.duration;
}

function handleTimeUpdate()
{
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handlInput)

function handlInput()
{
    $video.currentTime = $progress.value;
}






