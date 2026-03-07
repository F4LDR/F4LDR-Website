// small helper – returns true for phones/tablets etc.
function isTouchDevice() {
  return (
    'ontouchstart' in window ||               // old WebKit
    navigator.maxTouchPoints > 0 ||           // modern browsers
    navigator.msMaxTouchPoints > 0            // IE/Edge
  );
}

if (!isTouchDevice()) {
  // rotate elements based on mouse position
  const items = document.querySelectorAll('body *:not(script)');
  const maxRotation = 1; // degrees

  function handleMouse(e) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const offsetX = (e.clientX / w) * 2 - 1; // -1..1
    const offsetY = (e.clientY / h) * 2 - 1;

    const rotY = offsetX * maxRotation;
    const rotX = -offsetY * maxRotation;

    items.forEach(el => {
      el.style.transform =
        `perspective(600px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(20px)`;
      el.style.transformStyle = 'preserve-3d';
    });
  }

  document.addEventListener('mousemove', handleMouse);
}