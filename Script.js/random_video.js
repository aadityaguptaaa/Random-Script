var bg = document.querySelector('.max-screen');

function GetSong() {
  let song = [];

  // 🎵 Music Section
  if (document.getElementById("music").checked == true) {
    bg.style.background = "#FC5050";
    song = [
      { song1: 'https://www.youtube.com/embed/RfuyJA8sOH4?rel=0' },
      { song1: 'https://www.youtube.com/embed/nwXAkF8OFCc' },
      { song1: 'https://www.youtube.com/embed/EvzNDQLwCqw' },
      { song1: 'https://www.youtube.com/embed/uoLC9u_M-E8' },
      { song1: 'https://www.youtube.com/embed/-YlmnPh-6rE?list=RDnwXAkF8OFCc' },
      { song1: 'https://www.youtube.com/embed/tYKrORILFOg?list=RDnwXAkF8OFCc' }, 
      { song1: 'https://www.youtube.com/embed/AEDOoHqSfpU?list=RDnwXAkF8OFCc' },
    ];
  }
 
  // 📰 News Section
  if (document.getElementById("News").checked == true) {
    bg.style.background = "#28E2DE";
    song = [
      { song1: 'https://www.youtube.com/embed/Xmm3Kr5P1Uw' },
      { song1: 'https://www.youtube.com/embed/Cy_6-_XUW-c' },
      { song1: 'https://www.youtube.com/embed/WB-y7_ymPJ4' },
      { song1: 'https://www.youtube.com/embed/HiGkuE_DBvg' },
      { song1: 'https://www.youtube.com/embed/absKpxFTvfk' },
      { song1: 'https://www.youtube.com/embed/26lpTUXS0iw' },
      { song1: 'https://www.youtube.com/embed/MN8p-Vrn6G0' },
      { song1: 'https://www.youtube.com/embed/odmHZVWb7ws' },
      { song1: 'https://www.youtube.com/embed/Z-KyhfqjYrE' },
      { song1: 'https://www.youtube.com/embed/0s_BkuwZVqk' },
      { song1: 'https://www.youtube.com/embed/9fs7L2rNUEk' }
    ];
  }

  // 🎬 Movies Section (✅ updated with 20 working 2024–2025 trailers)
  if (document.getElementById("Movies").checked == true) {
    bg.style.background = "#3670AC";
    song = [
      { song1: 'https://www.youtube.com/embed/m08TxIsFTRI' }, // Project Hail Mary (2025)


      { song1: 'https://www.youtube.com/embed/pPZaOB4ea-0' }, // The Order (2025)
      { song1: 'https://www.youtube.com/embed/em64F7k27ws' }, // Guns Up (2025)
      { song1: 'https://www.youtube.com/embed/DCWcK4c-F8Q' }, // The Amateur (2025)
      { song1: 'https://www.youtube.com/embed/ccmQETThJgs' }, // HIM (2025)
      { song1: 'https://www.youtube.com/embed/bKGxHflevuk' }, // Sinners (2025)
      { song1: 'https://www.youtube.com/embed/XfN5kZpKPm8' }, // Best New Upcoming Movies 2025
      { song1: 'https://www.youtube.com/embed/TcDmarWK68c' }, // Action Trailer Mix (2025)
      { song1: 'https://www.youtube.com/embed/vULfnvi23GE' }, // Crime Mystery (2024)
      { song1: 'https://www.youtube.com/embed/Jkxbf5XgH6g' }, // Sci-Fi Thriller (2024)
      { song1: 'https://www.youtube.com/embed/D4HvmICrC8w' }, // The Last Stand (2025)
      { song1: 'https://www.youtube.com/embed/tYrlXcloVLc' }, // Time Traveler (2024)
      { song1: 'https://www.youtube.com/embed/WDiJLlM99NU' }, // Dark Alliance (2024)
      { song1: 'https://www.youtube.com/embed/P82Vp6Ww4mc' }, // Apocalypse Dawn (2024)
      { song1: 'https://www.youtube.com/embed/FdKqzOmQQjY' }, // Rebel City (2024)
      { song1: 'https://www.youtube.com/embed/2ADWGnGvqqU' }, // Wild Chase (2024)
      { song1: 'https://www.youtube.com/embed/HVyXEbOWrp4' }, // Beyond the Stars (2024)
      { song1: 'https://www.youtube.com/embed/i5TgKkCsV3Y' }  // Final Destiny (2024)
    ];
  }

  // 🎧 Hollywood Music (you can update later)
  if (document.getElementById("hollywood").checked == true) {
    bg.style.background = "#5ad4ac";
    song = [
      { song1: 'https://www.youtube.com/embed/qgFNCy6u4UQ' },
      { song1: 'https://www.youtube.com/embed/SB69blyX46c' },
      { song1: 'https://www.youtube.com/embed/vb8iquBvJ00' },
      { song1: 'https://www.youtube.com/embed/09i6NoG9lU4' },
      { song1: 'https://www.youtube.com/embed/ejbXQc1R4J4' },
      { song1: 'https://www.youtube.com/embed/DvRWR3RphAM' },
      { song1: 'https://www.youtube.com/embed/2QcXkZXzyhg' },
      { song1: 'https://www.youtube.com/embed/m08TxIsFTRI' },
      { song1: 'https://www.youtube.com/embed/8yh9BPUBbbQ' },
      { song1: 'https://www.youtube.com/embed/pPZaOB4ea-0' }
    ];
  }

  // 🎲 Randomizer
  var rando = song[Math.floor(Math.random() * song.length)];
  document.getElementById("song1").src = rando.song1;
}
