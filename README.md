# Ionic Angular Audio Reproduction

App to play mp3 audio files. This is another great tutorial from [Simon Grimm 'How to Build a Simple Ionic 4 Audio Player'](https://www.youtube.com/watch?v=d_rKawKDq58).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Uses the [Howler](https://www.npmjs.com/package/howler) audio library to play mp3 files.

## Screenshots

![screenshot](./img/audio-player.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)
* [Ionic/angular v4.7.1](https://ionicframework.com/)
* [Angular v8.1.2](https://angular.io/)
* [Howler v2.1.2](https://www.npmjs.com/package/howler)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'
* To start the server on a mobile using Ionic devapp and connected via wifi, type: 'ionic serve --devapp'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## Code Examples

* function to start playing a track using the Howler audio library. Stops any previous track that was playing.

```typescript

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;

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
        console.log('End of track');
      }
    });
    this.player.play();
  }
```

## Features

* Howler audio library API defaults to the [W3C Web Audio API](https://webaudio.github.io/web-audio-api/) and falls back to [HTML5 Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element).

## Status & To-do list

* Status: Working.

* To-do: Increase the audio library in this app - currently only 3 files listed. Add functionality.

## Inspiration

* [Simon Grimm 'How to Build a Simple Ionic 4 Audio Player'](https://www.youtube.com/watch?v=d_rKawKDq58).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
