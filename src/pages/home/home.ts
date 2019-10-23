import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // styleUrls: ['home.scss']
})
export class HomePage {
  playlist: Track[] = [
    {
      name: 'Jazzy Sounds',
      path: './assets/mp3/jazzy-sounds.mp3'
    },
    {
      name: 'Footage Feet',
      path: './assets/mp3/footage-feet.mp3'
    },
    {
      name: 'Death Grips',
      path: './assets/mp3/death-grips.mp3'
    }
  ];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  constructor(public navCtrl: NavController) {
  }

  start(track: Track) {
    if(this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true;
        this.activeTrack = track;
      },
      onend: () => {
        console.log('onend');
      }
    });
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() {

  }

  prev() {

  }

  seek() {

  }

  updateProgress() {

  }

}
