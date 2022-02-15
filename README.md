# :zap: Ionic Angular Audio Reproduction

* Ionic-Angular app to play mp3 audio files.
* Code from [Simon Grimm](https://www.youtube.com/channel/UCZZPgUIorPao48a1tBYSDgg) - see [:clap: Inspiration](#clap-inspiration) below. Updated to latest Ionic/Angular + dependencies. Strict mode enabled which required strict initialisation of properties, e.g. range, player to avoid errors.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-audiorep?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-audiorep?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-audiorep?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-audiorep?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Audio Reproduction](#zap-ionic-angular-audio-reproduction)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Uses the [Howler](https://www.npmjs.com/package/howler) audio library to play mp3 files.

## :camera: Screenshots

![screenshot](./img/audio-player.png)

## :signal_strength: Technologies

* [Ionic v6](https://ionicframework.com/)
* [Ionic/angular v6](https://ionicframework.com/)
* [Angular v13](https://angular.io/)
* [Howler v2](https://www.npmjs.com/package/howler)

## :floppy_disk: Setup

* To start the server on _localhost://8100_ type: 'ionic serve'
* To start the server on a mobile using Ionic devapp and connected via wifi, type: 'ionic serve --devapp'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## :computer: Code Examples

* `home.page.ts` function to start playing a track using the Howler audio library. Stops any previous track that was playing. Includes strict initialisation of properties.

```typescript
  activeTrack: Track = { name: "", path: "" };
  player: Howl = new Howl({
    src: ["./assets/mp3/jazzy-sounds.mp3"],
  });
  isPlaying = false;
  progress = 0;
  @ViewChild("range", { static: false }) range!: IonRange;

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

## :cool: Features

* Howler audio library API defaults to the [W3C Web Audio API](https://webaudio.github.io/web-audio-api/) and falls back to [HTML5 Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element).

## :clipboard: Status & To-do list

* Status: Working
* To-do: Nothing

## :clap: Inspiration

* [Simon Grimm 'How to Build a Simple Ionic 4 Audio Player'](https://www.youtube.com/watch?v=d_rKawKDq58).

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
