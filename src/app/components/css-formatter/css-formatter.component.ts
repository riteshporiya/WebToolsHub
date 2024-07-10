import { ChangeDetectorRef, Component } from '@angular/core';
import cssbeautify from 'cssbeautify';
@Component({
  selector: 'app-css-formatter',
  templateUrl: './css-formatter.component.html',
  styleUrls: ['./css-formatter.component.scss']
})
export class CssFormatterComponent {
  inputCss: string = '';
  outputCss: string = '';
  isDarkTheme: boolean = false;
  themeLabel: string = 'Light Theme';
  editorOptionsInput = {
    theme: 'vs-light',
    language: 'css',
    minimap: {
      enabled: false
    }
  };

  editorOptionsOutput = {
    theme: 'vs-light',
    language: 'css',
    readOnly: true,
    minimap: {
      enabled: false
    }
  };

  constructor(private cdr: ChangeDetectorRef) {}

  formatCss() {
    try {
      this.outputCss = cssbeautify(this.inputCss, {
        indent: '  ',
        openbrace: 'end-of-line',
        autosemicolon: true
      });
    } catch (error) {
      console.error('Error formatting CSS:', error);
      this.outputCss = 'Error: Invalid CSS';
    }
  }

  clearCss() {
    this.inputCss = '';
    this.outputCss = '';
  }

  copyCss() {
    navigator.clipboard.writeText(this.outputCss).then(() => {
      // You can add a toast notification here if desired
      console.log('CSS copied to clipboard');
    });
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

    // Force change detection
    this.cdr.detectChanges();
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.inputCss = e.target.result;
        this.formatCss();
      };
      reader.readAsText(file);
    }
  }

  downloadFile() {
    const blob = new Blob([this.outputCss], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formatted.css';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}