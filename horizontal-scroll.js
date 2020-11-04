function reverse(e) {
  e.deltaY != 0 &&
    (window.scroll(window.scrollX + e.deltaY, window.scrollY),
    e.preventDefault());
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
