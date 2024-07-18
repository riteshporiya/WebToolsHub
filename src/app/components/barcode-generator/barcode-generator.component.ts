import { Component, ViewChild, ElementRef } from '@angular/core';
import { BarcodeExportType, BarcodeType, BarcodeGeneratorComponent as SyncfusionBarcodeComponent } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  selector: 'app-barcode-generator',
  templateUrl: './barcode-generator.component.html',
  styleUrls: ['./barcode-generator.component.scss']
})
export class BarcodeGeneratorComponent {
  @ViewChild('barcodeElement') barcodeElement!: ElementRef;
  @ViewChild('barcode') barcodeGenerator!: SyncfusionBarcodeComponent;

  colorOptions = ['Black', 'White', 'Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Gray'];
  barcodeData = '';
  barcodeType: BarcodeType = 'Code128';
  backgroundColor = 'white';
  lineColor = 'black';
  width = '200px';
  height = '150px';
  showData = true;
  isGenerateBarcodeClicked = false;
  errorMessage = '';

  get displayText() {
    return { text: this.barcodeData, visibility: this.showData };
  }

  get placeholderText(): string {
    switch (this.barcodeType) {
      case 'Code128': return 'Example ABCD@1234';
      case 'Ean13': return 'Example 978020137961';
      case 'Ean8': return 'Example 9780201';
      case 'UpcA': return 'Example 123456';
      default: return 'Example 1234';
    }
  }

  generateBarcode() {
    if (!this.barcodeGenerator) {
      console.error('Barcode generator is not ready');
      return;
    }

    if (!this.validateBarcodeData()) {
      console.log('kkkkkkkkk');
      
      return;
    }

    this.updateBarcodeSettings();
    this.barcodeGenerator.render();
    this.isGenerateBarcodeClicked = true;
    this.errorMessage = '';
  }

  private updateBarcodeSettings() {
    Object.assign(this.barcodeGenerator, {
      value: this.barcodeData,
      type: this.barcodeType,
      width: this.width,
      height: this.height,
      backgroundColor: this.backgroundColor,
      foreColor: this.lineColor,
      enableCheckSum: true,
      displayText: this.displayText
    });
  }

  updateColor(type: 'background' | 'line') {
    if (this.barcodeGenerator) {
      if (type === 'background') {
        this.barcodeGenerator.backgroundColor = this.backgroundColor;
      } else {
        this.barcodeGenerator.foreColor = this.lineColor;
      }
    }
  }

  async downloadBarcode(format: BarcodeExportType) {
    try {
      const fileName = `barcode_${Date.now()}`;
      this.barcodeGenerator.exportImage(fileName, format);
    } catch (err) {
      console.error('Failed to download barcode:', err);
    }
  }

  validateBarcodeData(): boolean {
    const value = this.barcodeData;
    switch (this.barcodeType) {
      case 'Code128':
        if (!/^[A-Za-z0-9@\-\.\/\+\$\% ]+$/.test(value)) {
          this.errorMessage = 'Invalid characters for Code128';
          return false;
        }
        break;
      case 'Ean13':
        if (!/^\d{13}$/.test(value)) {
          this.errorMessage = 'EAN13 must be exactly 13 digits';
          return false;
        }
        break;
      case 'Ean8':
        if (!/^\d{8}$/.test(value)) {
          this.errorMessage = 'EAN8 must be exactly 8 digits';
          return false;
        }
        break;
      case 'UpcA':
        if (!/^\d{12}$/.test(value)) {
          this.errorMessage = 'UPC-A must be exactly 12 digits';
          return false;
        }
        break;
      default:
        if (!/^[A-Za-z0-9]+$/.test(value)) {
          this.errorMessage = 'Invalid characters for this barcode type';
          return false;
        }
    }
    return true;
  }

  onBarcodeDataChange(value: string) {
    this.barcodeData = value;
    this.isGenerateBarcodeClicked = false;
    this.errorMessage = '';
  }
}