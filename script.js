
function zoomImage(src) {
  document.getElementById('zoomed-img').src = src;
  document.getElementById('overlay').style.display = 'flex';
}

function closeZoom() {
  document.getElementById('overlay').style.display = 'none';
}
