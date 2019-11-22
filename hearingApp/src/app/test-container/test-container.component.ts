import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

const audioFiles = [
  '../../assets/1kHz_44100Hz_16bit_05sec.wav',
  '../../assets/1kHz_44100Hz_16bit_05sec.wav',
  '../../assets/10kHz_44100Hz_16bit_05sec.wav',
  '../../assets/10kHz_44100Hz_16bit_05sec.wav',
  '../../assets/100Hz_44100Hz_16bit_05sec.wav',
  '../../assets/100Hz_44100Hz_16bit_05sec.wav',
  '../../assets/250Hz_44100Hz_16bit_05sec.wav',
  '../../assets/250Hz_44100Hz_16bit_05sec.wav',
  '../../assets/440Hz_44100Hz_16bit_05sec.wav',
  '../../assets/440Hz_44100Hz_16bit_05sec.wav',
];

const MIN = 3000;
const MAX = 5000;
const SECOND = 1000;

@Component({
  selector: 'app-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})

export class TestContainerComponent {
  audio = new Audio();
  index = 0;
  results = [false, false, false, false, false, false, false, false, false, false];
  constructor(private router: Router) {
    this.audio.addEventListener('canplaythrough', () => {
      setTimeout(() => {
          this.audio.pause();
          this.index++;
          if (this.index < audioFiles.length) {
            this.playAudio();
          } else {
            console.log(this.results);
            this.router.navigate(['/results']);
          }
        }, SECOND);
    }, false);
    this.playAudio();
  }

  randomJitterTime() {
    return Math.floor(Math.random() * (MAX - MIN)) + MIN;
  }

  playAudio() {
    setTimeout(() => {
      this.audio.src = audioFiles[this.index];
      this.audio.load();
      this.audio.play();
    }, this.randomJitterTime());
  }

  clickResult() {
    if (!this.audio.paused) {
      if (this.index < audioFiles.length) {
        this.results[this.index] = true;
      }
    }
  }

}
