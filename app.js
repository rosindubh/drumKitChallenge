/* phil welsby - 11 aug 2021 Drum Kit Challenge*/
document.addEventListener('keydown', function(e) {

    if (e.keyCode == 65) {
      document.getElementById
      ('boom').play();
    }
    else if (e.keyCode == 83) {
      document.getElementById('clap').play();
    }
    else if (e.keyCode == 68) {
      document.getElementById('hihat').play();
    }
    else if (e.keyCode == 70) {
      document.getElementById('kick').play();
    }
    else if (e.keyCode == 71) {
      document.getElementById('openhat').play();
    }
    else if (e.keyCode == 72) {
      document.getElementById('ride').play();
    }
    else if (e.keyCode == 74) {
      document.getElementById('snare').play();
    }
    else if (e.keyCode == 75) {
      document.getElementById('tink').play();
    }
    else if (e.keyCode == 76) {
      document.getElementById('tom').play();
    }
  });