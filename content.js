const body = document.querySelector("body");

document.addEventListener("keydown", (e) => {
  if (e.key === "F11") {
    toggleFullScreen(body);
  }
})

function toggleFullScreen(element) {

  if (!document.fullscreenElement) {
    element.requestFullscreen().catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen?.();
  }
}