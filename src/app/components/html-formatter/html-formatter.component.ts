import { ChangeDetectorRef, Component } from '@angular/core';
import beautify from 'js-beautify';

@Component({
  selector: 'app-html-formatter',
  templateUrl: './html-formatter.component.html',
  styleUrls: ['./html-formatter.component.scss']
})
export class HtmlFormatterComponent {
  inputHtml: string = '';
  outputHtml: string = '';
  isDarkTheme: boolean = false;
  themeLabel: string = 'Light Theme';
  htmlRunView: boolean = false;

  editorOptionsInput = {
    theme: 'vs-light',
    language: 'html',
    minimap: {
      enabled: false
    }
  };

  editorOptionsOutput = {
    theme: 'vs-light',
    language: 'html',
    readOnly: true,
    minimap: {
      enabled: false
    }
  };

  constructor(private cdr: ChangeDetectorRef) { }

  formatHtml() {
    try {
      this.outputHtml = beautify.html(this.inputHtml, {
        indent_size: 2,
        wrap_line_length: 80,
        max_preserve_newlines: 2,
        preserve_newlines: true
      });
    } catch (error) {
      console.error('Error formatting HTML:', error);
      this.outputHtml = 'Error: Invalid HTML';
    }
  }

  clearHtml() {
    this.inputHtml = '';
    this.outputHtml = '';
    this.htmlRunView = false;
  }

  copyHtml() {
    navigator.clipboard.writeText(this.outputHtml).then(() => {
      console.log('HTML copied to clipboard');
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

    this.cdr.detectChanges();
  }

  runHtml() {
    this.htmlRunView = true;
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.inputHtml = e.target.result;
        this.formatHtml();
      };
      reader.readAsText(file);
    }
  }

  downloadFile() {
    const blob = new Blob([this.outputHtml], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formatted.html';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}