const domElement = {
    video: document.getElementById('video'),
    source: document.getElementById('source'),
    button: document.getElementById('button')
}

//Select media stream ad pass to video element to play
async function selectMedia() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        console.log(mediaStream);
        domElement.video.srcObject = mediaStream;
        domElement.video.onloadedmetadata = () => {
            domElement.video.play();
        }
    } catch (error) {
        console.log('error in selectMedia()');
    }
}

domElement.button.addEventListener('click', async () => {
    // Disable buttton
    domElement.button.disabled = true;
    //Start PIP
    await domElement.video.requestPictureInPicture();
    domElement.button.disabled = false;
});

domElement.source.addEventListener('click', selectMedia);