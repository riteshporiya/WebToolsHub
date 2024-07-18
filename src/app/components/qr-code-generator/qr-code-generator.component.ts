import { Component, ElementRef, ViewChild } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeElementType, QRCodeErrorCorrectionLevel } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.scss']
})
export class QrCodeGeneratorComponent {
  @ViewChild('qrcodeElement', { static: false }) qrcodeElement!: ElementRef;

  qrdata: string = 'https://github.com/riteshporiya/WebToolsHub';
  allowEmptyString: boolean = true;
  alt: string = 'A custom alt attribute';
  ariaLabel: string = 'QR Code image with the following content...';
  colorDark: string = '#000000ff';
  colorLight: string = '#ffffffff';
  cssClass: string = 'center';
  elementType: QRCodeElementType = 'canvas';
  errorCorrectionLevel: QRCodeErrorCorrectionLevel = 'M';
  imageSrc: string = 'https://angular.io/assets/images/favicons/favicon-16x16.png';
  imageHeight: number = 75;
  imageWidth: number = 75;
  margin: number = 4;
  scale: number = 1;
  title: string = 'A custom title attribute';
  width: number = 300;

  qrCodeDownloadLink: SafeUrl = '';

  showImage: boolean = true;
  showA11y: boolean = true;
  showColors: boolean = true;
  showCss: boolean = true;

  elementTypes: QRCodeElementType[] = ['canvas', 'img', 'url', 'svg'];
  errorCorrectionLevels: QRCodeErrorCorrectionLevel[] = ['L', 'M', 'Q', 'H'];
  cssClasses: string[] = ['left', 'center', 'right', 'demoBorder', 'demoBorderRadius'];

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  downloadQRCode() {
    console.log('ssss ', this.qrcodeElement.nativeElement);
    
    const element = this.qrcodeElement.nativeElement.querySelector('canvas, img, svg');
    if (element) {
      let url: string;
      let filename: string;

      if (element instanceof HTMLCanvasElement) {
        url = element.toDataURL('image/png');
        filename = 'qr-code.png';
      } else if (element instanceof SVGElement) {
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(element);
        url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);
        filename = 'qr-code.svg';
      } else if (element instanceof HTMLImageElement) {
        url = element.src;
        filename = 'qr-code.png';
      } else {
        console.error('Unsupported element type');
        return;
      }

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
    } else {
      console.error('QR code element not found');
    }
  }

  toggleFeature(feature: string) {
    switch (feature) {
      case 'image':
        this.showImage = !this.showImage;
        break;
      case 'a11y':
        this.showA11y = !this.showA11y;
        break;
      case 'colors':
        this.showColors = !this.showColors;
        break;
      case 'css':
        this.showCss = !this.showCss;
        break;
    }
  }
}