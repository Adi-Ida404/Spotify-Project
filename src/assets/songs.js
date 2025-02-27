import bachkeBachkeImg from '../assets/Bachke Bachke.jpg';
import onTopImg from '../assets/On Top.jpg';
import softlyImg from '../assets/SOFTLY.jpg';
import taubaTaubaImg from '../assets/Tauba Tauba.jpg';
import winningSpeechImg from '../assets/Winning Speech.jpg';

import bachkeBachkeMP3 from '../assets/mp3/Bachke Bachke.mp3';
import onTopMP3 from '../assets/mp3/On Top.mp3';
import softlyMP3 from '../assets/mp3/SOFTLY.mp3';
import taubaTaubaMP3 from '../assets/mp3/Tauba Tauba.mp3';
import winningSpeechMP3 from '../assets/mp3/Winning Speech.mp3';

const songs = [
    {
        id: Date.now() + 1,
        title: "Bachke Bachke",
        artist: "Karan Aujla",
        mp3: bachkeBachkeMP3,
        image: bachkeBachkeImg,
        link: "#"
    },
    {
        id: Date.now() + 2,
        title: "On Top",
        artist: "Karan Aujla",
        mp3: onTopMP3,
        image: onTopImg,
        link: "#"
    },
    {
        id: Date.now() + 3,
        title: "SOFTLY",
        artist: "Karan Aujla",
        mp3: softlyMP3,
        image: softlyImg,
        link: "#"
    },
    {
        id: Date.now() + 4,
        title: "Tauba Tauba",
        artist: "Karan Aujla",
        mp3: taubaTaubaMP3,
        image: taubaTaubaImg,
        link: "#"
    },
    {
        id: Date.now() + 5,
        title: "Winning Speech",
        artist: "Karan Aujla",
        mp3: winningSpeechMP3,
        image: winningSpeechImg,
        link: "#"
    }
];

export default songs;
