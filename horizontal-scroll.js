function reverse(e) {
  if (e.deltaY !== 0) {
    window.scrollBy(e.deltaY, 0);
    e.preventDefault();
  }
}

class HorizontalScroll {
  static start() {
    window.addEventListener("wheel", reverse, { passive: false });
  }
  static stop() {
    window.removeEventListener("wheel", reverse);
  }
}

(function () {
  HorizontalScroll.start();
})();

try {
  module.exports = HorizontalScroll;
} catch (e) {}
