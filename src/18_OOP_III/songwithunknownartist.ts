import Song from "./song";

class SongWithUnknownArtist extends Song {
  constructor(title: string) {
    super(title, "Unknown");
  }
  setArtist(name: string): void {
    this.artist = name;
  }
}

export default SongWithUnknownArtist;
