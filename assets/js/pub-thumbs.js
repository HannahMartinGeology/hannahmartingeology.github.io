// Size each publication thumbnail to span from the top of the title to the bottom of the last line of text.
(function () {
  function size() {
    var mobile = window.matchMedia('(max-width: 600px)').matches;
    document.querySelectorAll('.pub-row:not(.talk-row)').forEach(function (row) {
      var text = row.querySelector('.pub-text');
      var img = row.querySelector('.pub-thumb img');
      if (!text || !img) return;
      if (mobile) { img.style.height = ''; img.style.marginTop = ''; return; }
      var kids = text.children;
      var first = kids[0].getBoundingClientRect();
      var last = kids[kids.length - 1].getBoundingClientRect();
      var rowTop = row.getBoundingClientRect().top;
      img.style.marginTop = (first.top - rowTop) + 'px';
      img.style.height = (last.bottom - first.top) + 'px';
    });
  }
  window.addEventListener('load', size);
  window.addEventListener('resize', size);
})();
