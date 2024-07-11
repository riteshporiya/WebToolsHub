import { ChangeDetectorRef, Component } from '@angular/core';
import beautify from 'js-beautify';

@Component({
  selector: 'app-json-parser',
  templateUrl: './json-parser.component.html',
  styleUrls: ['./json-parser.component.scss']
})
export class JsonParserComponent {
  inputJson = '';
  outputJson = '';
  isDarkTheme: boolean = false;
  themeLabel: string = 'Light Theme';
  editorOptionsInput = {
    theme: 'vs-light',
    language: 'json',
    minimap: {
      enabled: false
    }
  };

  editorOptionsOutput = {
    theme: 'vs-light',
    language: 'json',
    readOnly: true,
    minimap: {
      enabled: false
    }
  };

  constructor(private cdr: ChangeDetectorRef) { }

  parseJson() {
    try {
      const parsed = JSON.parse(this.inputJson);
      this.outputJson = beautify.js(parsed, { indent_size: 2 });
    } catch (error) {
      this.outputJson = 'Invalid JSON String';
    }
  }

  // formatJson() {
  //   try {
  //     this.outputJson = beautify.js(this.inputJson, { indent_size: 2 });
  //   } catch (error) {
  //     this.outputJson = 'Invalid JSON Object';
  //   }
  // }

  formatJson() {
    try {
      let parsed;
      if (typeof this.inputJson === 'string') {
        // If it's a string, try to parse it as JSON
        try {
          parsed = JSON.parse(this.inputJson);
        } catch (parseError) {
          // If parsing fails, it might be a JSON-like string that needs formatting
          parsed = this.inputJson;
        }
      } else {
        // If it's not a string, assume it's already a JSON object
        parsed = this.inputJson;
      }
  
      // Ensure we're working with a string before beautifying
      const stringified = typeof parsed === 'string' ? parsed : JSON.stringify(parsed);
      this.outputJson = beautify.js(stringified, { indent_size: 2 });
  
      console.log('Output JSON:', this.outputJson);
    } catch (error) {
      console.error('Error in formatJson:', error);
      this.outputJson = 'Error: Unable to format JSON. Please check your input.';
    }
  }

  toggleTheme() {
    this.isDarkTheme = !!this.isDarkTheme;
    const newTheme = this.isDarkTheme ? 'vs-dark' : 'vs-light';
    this.themeLabel = this.isDarkTheme ? 'Dark Theme' : 'Light Theme';

    this.editorOptionsInput = {
      ...this.editorOptionsInput,
      theme: newTheme
    };

    this.editorOptionsOutput = {
      ...this.editorOptionsOutput,
      theme: newTheme
    };

    this.cdr.detectChanges();
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.inputJson = e.target.result;
        this.formatJson();
      };
      reader.readAsText(file);
    }
  }

  downloadFile() {
    const blob = new Blob([this.outputJson], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'json-parse.json';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  clearInput() {
    this.inputJson = '';
    this.outputJson = '';
  }

  copyOutput() {
    navigator.clipboard.writeText(this.outputJson);
  }
}