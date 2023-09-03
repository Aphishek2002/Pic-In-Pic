const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//  prompt to select media screee,pass to video element,then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement. play();
        }
    }
    catch {
        // catch error here
        console.log("ooops,Error here",Error);
    }
}

button.addEventListener('click',async () => {
    // button disabled
    button.disabled = true;
    // Start p-i-p mode
    await videoElement.requestPictureInPicture();
});


// onload
selectMediaStream();