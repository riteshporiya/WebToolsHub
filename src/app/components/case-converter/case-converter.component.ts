import { Component } from '@angular/core';

enum TextCaseType {
  SENTENCE_CASE = "Sentence case",
  CAPITAL_CASE = "Capitalized Case",
  LOWER_CASE = "lower case",
  UPPER_CASE = "Upper Case",
  ALTERNAT_CASE = "alternat Case",
  TITLE_CASE = "Title Case",
  INVERSE_CASE = "Inverse Case",
  HYPHEN_CASE = "Hyphane Case",
  REMOVE_EXTRA_SPACE = "Remove Extra Space",
  REMOVE_ALL_SPACE = "Remove All Space",
  REMOVE_ENTER = "Remove Enter",
}

@Component({
  selector: 'app-case-converter',
  templateUrl: './case-converter.component.html',
  styleUrls: ['./case-converter.component.scss']
})
export class CaseConverterComponent {
  inputText: string = '';
  character: number = 0;
  word: number = 0;
  paragraph: number = 0;
  copySuccess: boolean = false;
  fontSize: number = 32;
  TextCaseType = TextCaseType;

  private readonly exceptions = new Set([
    "and", "or", "is", "for", "in", "with", "the", "a", "to", "of", "on", "as", "by", "at"
  ]);

  convertToTextCase(textCaseType: TextCaseType): void {
    const converters: Record<TextCaseType, () => string> = {
      [TextCaseType.SENTENCE_CASE]: this.toSentenceCase,
      [TextCaseType.CAPITAL_CASE]: this.toCapitalCase,
      [TextCaseType.LOWER_CASE]: () => this.inputText.toLowerCase(),
      [TextCaseType.UPPER_CASE]: () => this.inputText.toUpperCase(),
      [TextCaseType.ALTERNAT_CASE]: this.toAlternatingCase,
      [TextCaseType.INVERSE_CASE]: this.toInverseCase,
      [TextCaseType.TITLE_CASE]: this.toTitleCase,
      [TextCaseType.HYPHEN_CASE]: () => this.inputText.split(/\s+/).join("-"),
      [TextCaseType.REMOVE_EXTRA_SPACE]: () => this.inputText.replace(/\s+/g, " "),
      [TextCaseType.REMOVE_ALL_SPACE]: () => this.inputText.replace(/\s+/g, ""),
      [TextCaseType.REMOVE_ENTER]: () => this.inputText.replace(/\n/g, ""),
    };

    this.inputText = converters[textCaseType]();
    this.handleTextCount();
  }

  private toSentenceCase = (): string => {
    return this.inputText
      .split(/\n+/)
      .map(paragraph => {
        paragraph = paragraph.trim();
        if (paragraph.length > 0) {
          const sentences = paragraph.split(".");
          return sentences
            .map(sentence => {
              sentence = sentence.trim();
              return sentence.length > 0 ? sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase() : sentence;
            })
            .join(". ");
        }
        return paragraph;
      })
      .join("\n\n");
  }

  private toCapitalCase = (): string => {
    return this.inputText
      .split(/\n+/)
      .map(paragraph =>
        paragraph
          .split(/\s+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ")
      )
      .join("\n\n");
  }

  private toAlternatingCase = (): string => {
    return this.inputText
      .split("")
      .map((letter, i) => i % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase())
      .join("");
  }

  private toInverseCase = (): string => {
    return this.inputText
      .split("")
      .map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
      .join("");
  }

  private toTitleCase = (): string => {
    return this.inputText
      .split(/\n+/)
      .map(paragraph => {
        paragraph = paragraph.trim();
        if (paragraph.length > 0) {
          const sentences = paragraph.split(/\.\s+/);
          return sentences.map(sentence => {
            const words = sentence.split(/\s+/);
            return words.map((word, i) => {
              if (this.exceptions.has(word.toLowerCase()) && i !== 0) {
                return word.toLowerCase();
              }
              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(" ");
          }).join(". ");
        }
        return paragraph;
      })
      .join("\n\n");
  }

  handleCopyClick(): void {
    navigator.clipboard.writeText(this.inputText);
    this.copySuccess = true;
    setTimeout(() => {
      this.copySuccess = false;
    }, 2000);
  }

  handleInputChange(event: Event): void {
    this.inputText = (event.target as HTMLTextAreaElement).value;
    this.handleTextCount();
  }

  handleTextCount(): void {
    this.character = this.inputText.length;
    this.word = this.inputText.split(/\s+/).filter(Boolean).length;
    this.paragraph = this.inputText === "" ? 0 : this.inputText.split(/\n+/).filter(paragraph => paragraph.trim() !== "").length;

    this.fontSize = this.inputText.length > 500 ? 16 : this.inputText.length > 250 ? 20 : 32;
  }

  handleTextClear(): void {
    this.inputText = "";
    this.character = 0;
    this.word = 0;
    this.paragraph = 0;
  }
}
