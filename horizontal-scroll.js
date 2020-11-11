function reverse(e) {
  if (e.deltaY !== 0) {
    window.scrollBy(e.deltaY, 0);
    e.preventDefault();
  }
}

const HorizontalScroll = () => {
  window.addEventListener("wheel", reverse, { passive: false });
  return () => window.removeEventListener("wheel", reverse);
};

(function () {
  HorizontalScroll();
})();

try {
  module.exports = HorizontalScroll;
} catch (e) {}
