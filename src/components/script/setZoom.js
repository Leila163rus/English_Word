export function setZoom() {
  if (window.matchMedia('(min-width: 320px) and (max-width: 1280px)').matches) {
  document.body.style.zoom = "50%";
  } else {
  document.body.style.zoom = "100%";
  }
}

window.addEventListener('resize', setZoom);