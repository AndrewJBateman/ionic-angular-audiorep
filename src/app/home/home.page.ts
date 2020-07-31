import { Component, ViewChild } from '@angular/core';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';

export interface Track {
	name: string;
	path: string;
}

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	playlist: Track[] = [
		{
			name: 'Jazzy Sounds',
			path: './assets/mp3/jazzy-sounds.mp3',
		},
		{
			name: 'Footage Feet',
			path: './assets/mp3/footage-feet.mp3',
		},
		{
			name: 'Death Grips',
			path: './assets/mp3/death-grips.mp3',
		},
	];

	activeTrack: Track = null;
	player: Howl = null;
	isPlaying = false;
	progress = 0;
	@ViewChild('range', { static: false }) range: IonRange;

	constructor() {}

	// function to stop playing existing track (if playing) then play audio file.
	// run update progress function so % complete indicator is updated.
	start(track: Track) {
		if (this.player) {
			this.player.stop();
		}
		this.player = new Howl({
			src: [track.path],
			html5: true,
			onplay: () => {
				console.log('onplay');
				this.isPlaying = true;
				this.activeTrack = track;
				this.updateProgress();
			},
			onend: () => {
				console.log('onend');
			},
		});
		this.player.play();
	}

	togglePlayer(pause: any) {
		this.isPlaying = !pause;
		if (pause) {
			this.player.pause();
		} else {
			this.player.play();
		}
	}

	next() {
		const index = this.playlist.indexOf(this.activeTrack);
		if (index !== this.playlist.length - 1) {
			this.start(this.playlist[index + 1]);
		} else {
			this.start(this.playlist[0]);
		}
	}

	prev() {
		const index = this.playlist.indexOf(this.activeTrack);
		if (index > 0) {
			this.start(this.playlist[index - 1]);
		} else {
			this.start(this.playlist[this.playlist.length - 1]);
		}
	}

	seek() {
		const newValue = +this.range.value;
		const duration = this.player.duration();
		this.player.seek(duration + newValue / 100);
	}

	updateProgress() {
		const seek = this.player.seek();
		this.progress = (seek / this.player.duration()) * 100 || 0;
		setTimeout(() => {
			this.updateProgress();
		}, 1000);
	}
}
