class Vocabulary {
  private words: string[];
  protected language: string;

  constructor() {
    this.words = [];
    this.language = "English";
  }

  public addWord(word: string): void {
    if (word.length > 0 && !this.words.includes(word)) {
      this.words.push(word);
    }
  }

  public displayAll(): void {
    console.log("Language:", this.language);
    console.log("Words:", this.words.join(", "));
  }
}

export default Vocabulary;
