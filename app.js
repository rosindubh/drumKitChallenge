document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
      document.getElementById('boom').play();
    }
    else if (e.keyCode == 83) {
      document.getElementById('clap').play();
    }
  });