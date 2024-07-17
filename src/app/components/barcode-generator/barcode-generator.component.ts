import { Component, ViewChild, ElementRef } from '@angular/core';
import { BarcodeExportType, BarcodeType, RenderingMode, BarcodeGeneratorComponent as SyncfusionBarcodeComponent } from '@syncfusion/ej2-angular-barcode-generator';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-barcode-generator',
  templateUrl: './barcode-generator.component.html',
  styleUrls: ['./barcode-generator.component.scss']
})
export class BarcodeGeneratorComponent {
  @ViewChild('barcodeElement') barcodeElement!: ElementRef;
  @ViewChild('barcode') barcodeGenerator!: SyncfusionBarcodeComponent;

  colorOptions = [
    'Black', 'White', 'Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Gray'
  ];
  barcodeData: string = '';
  barcodeType: BarcodeType = 'Code128';
  barcodeTitle: string = '';
  barcodeNote: string = '';
  backgroundColor: string = '';
  lineColor: string = '';
  width: string = '200px';
  height: string = '150px';
  barcodeMode: RenderingMode = 'SVG'
  quality: number = 0.8; // Low: 0.8, Medium: 1.5, High: 3
  toggleVisibility = {
    data: true,
    title: false,
    note: false
  };
  isGenerateBarcodeClicked: boolean = false;
  isCopied: boolean = false;
  barcodeGeneratorReady: boolean = false;

  get displayText() {
    return {
      text: this.barcodeData,
      visibility: this.toggleVisibility.data
    };
  }

  generateBarcode() {
    if (!this.barcodeGenerator) {
      console.error('Barcode generator is not ready');
      return;
    }
    console.log('width: ', this.backgroundColor, ' ', this.lineColor);
    console.log(' this.barcodeGenerator ', this.barcodeGenerator);

    // Set up the barcode data
    this.barcodeGenerator.value = this.barcodeData;
    this.barcodeGenerator.type = this.barcodeType;
    this.barcodeGenerator.width = this.width;
    this.barcodeGenerator.height = this.height;
    this.barcodeGenerator.backgroundColor = this.backgroundColor;
    this.barcodeGenerator.foreColor = this.lineColor;
    this.barcodeGenerator.enableCheckSum = true;

    // Set up display text options
    this.barcodeGenerator.displayText = this.displayText;

    // // Only set title and note if they're visible and not empty
    // if (this.toggleVisibility.title && this.barcodeTitle) {
    //   this.barcodeGenerator. = this.barcodeTitle;
    // }

    // if (this.toggleVisibility.note && this.barcodeNote) {
    //   // You might need to find a way to display the note,
    //   // as it's not a standard property of the barcode generator
    // }

    // Trigger change detection and redraw the barcode
    this.barcodeGenerator.render();

    this.isGenerateBarcodeClicked = true;

    // Optionally, you could show a success message to the user here
    console.log('Barcode generated successfully');
  }

  updateBackgroundColor() {
    if (this.barcodeGenerator) {
      this.barcodeGenerator.backgroundColor = this.backgroundColor;
    }
  }

  updateLineColor() {
    if (this.barcodeGenerator) {
      this.barcodeGenerator.foreColor = this.lineColor;
    }
  }

  async copyBarcode() {
    try {
      const canvas = await this.getCanvas();
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(blob => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Canvas toBlob returned null'));
          }
        }, 'image/png');
      });
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob
        })
      ]);
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    } catch (err) {
      console.error('Failed to copy barcode:', err);
    }
  }

  async downloadBarcode(format: BarcodeExportType) {
    try {
      const fileName = `barcode_${new Date().getTime()}`;
      this.barcodeGenerator.exportImage(fileName, format);
    } catch (err) {
      console.error('Failed to download barcode:', err);
    }
  }

  private async getCanvas(): Promise<HTMLCanvasElement> {
    const element = this.barcodeElement.nativeElement;
    return html2canvas(element, {
      scale: this.quality,
      backgroundColor: null
    });
  }

  setQuality(quality: string) {
    switch (quality) {
      case 'Low':
        this.quality = 0.8;
        break;
      case 'Medium':
        this.quality = 1.5;
        break;
      case 'High':
        this.quality = 3;
        break;
    }
  }

  // isIncorrectData(): boolean {
  //   switch (this.barcodeType) {
  //     case 'Ean13':
  //       return this.barcodeData.length !== 12 ||
  //         isNaN(Number(this.barcodeData)) ||
  //         /\s/.test(this.barcodeData);

  //     case 'Code39':
  //       const regexLetterNumber = /^[A-Z0-9]+$/;
  //       const regexSpecialChar = /[%-+.$/]/;
  //       return !(regexLetterNumber.test(this.barcodeData) || regexSpecialChar.test(this.barcodeData));

  //     case 'ITF':
  //       return isNaN(Number(this.barcodeData)) ||
  //         this.barcodeData.length % 2 !== 0 ||
  //         /\s/.test(this.barcodeData);

  //     case 'ITF14':
  //       return isNaN(Number(this.barcodeData)) ||
  //         this.barcodeData.length !== 13 ||
  //         /\s/.test(this.barcodeData);

  //     case 'UPC':
  //       return isNaN(Number(this.barcodeData)) ||
  //         this.barcodeData.length !== 11 ||
  //         /\s/.test(this.barcodeData);

  //     case 'pharmacode':
  //       const isValidPharmacodeNumber = /^[0-9]+$/.test(this.barcodeData);
  //       const isValidLength = (this.barcodeData.includes('1') && this.barcodeData.length <= 6) ||
  //         (!this.barcodeData.includes('1') && this.barcodeData.length <= 5);
  //       return !isValidPharmacodeNumber ||
  //         !isValidLength ||
  //         this.barcodeData.length === 1 ||
  //         /\s/.test(this.barcodeData);

  //     case 'MSI':
  //     case 'MSI10':
  //     case 'MSI11':
  //     case 'MSI1010':
  //     case 'MSI1110':
  //       return isNaN(Number(this.barcodeData)) || /\s/.test(this.barcodeData);

  //     case 'EAN8':
  //       return isNaN(Number(this.barcodeData)) ||
  //         this.barcodeData.length !== 7 ||
  //         /\s/.test(this.barcodeData);

  //     case 'CODE128':
  //       // CODE128 can encode all 128 ASCII characters, so we'll just check for non-empty
  //       return this.barcodeData.trim().length === 0;

  //     case 'codabar':
  //       const codabarRegex = /^[A-D][0-9\-$:./+]+[A-D]$/;
  //       return !codabarRegex.test(this.barcodeData);

  //     default:
  //       // For any unhandled barcode types, we'll assume the data is correct
  //       return false;
  //   }
  // }
}