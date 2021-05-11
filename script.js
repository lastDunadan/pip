const domElement = {
    video: document.getElementById('video'),
    source: document.getElementById('source'),
    button: document.getElementById('button'),
    stream: null
}

//Select media stream ad pass to video element to play
async function selectMedia() {
    try {
        domElement.stream = await navigator.mediaDevices.getDisplayMedia();  
    } catch (error) {
        console.error('error in selectMedia()', error);
    }
}

async function onVideoLoaded() {
    domElement.video.play();
    await domElement.video.requestPictureInPicture();
    domElement.button.disabled = false;
}

domElement.button.addEventListener('click', async () => {
    // Disable buttton
    domElement.button.disabled = true;
    domElement.video.onloadedmetadata = onVideoLoaded;
    domElement.video.srcObject = domElement.stream;
    
});

domElement.source.addEventListener('click', selectMedia);