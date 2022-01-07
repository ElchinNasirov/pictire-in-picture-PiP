const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select media stream, pass it to viewo element and then play
const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("There is an error ", error);
    }
}

button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true;

    // Start picture in picture
    await videoElement.requestPictureInPicture();

    // Reset button
    button.disabled = false;
});

selectMediaStream()