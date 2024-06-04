class Song {
  private title: string;
  protected artist: string;
  public durationInSeconds: number;

  constructor(title: string, artist: string) {
    this.title = title;
    this.artist = artist;
  }

  getTitle(): string {
    return this.title;
  }

  getArtist(): string {
    return this.artist;
  }
}

export default Song;
