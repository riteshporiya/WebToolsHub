import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent {
  tools = [
    { name: 'Password Generator', icon: 'bi-key', route: '/password-generator' },
    { name: 'Character Counter', icon: 'bi-123', route: '/character-counter' },
    // { name: 'Barcode Generator', icon: 'bi-upc', route: '/barcode-generator' },
    // { name: 'QR Code Generator', icon: 'bi-qr-code', route: '/qr-code-generator' },
    // { name: 'Unit Converter', icon: 'bi-arrow-left-right', route: '/unit-converter' },
    // { name: 'World Clock', icon: 'bi-globe', route: '/world-clock' },
    { name: 'Text to ASCII', icon: 'bi-file-text', route: '/text-to-ascii' },
    { name: 'Text Repeater', icon: 'bi-type', route: '/text-repeater' },
    { name: 'Random String Generator', icon: 'bi-shuffle', route: '/random-string' },
    { name: 'Random IP Generator', icon: 'bi-hdd-network', route: '/random-ip' },
    // { name: 'Hash Generator', icon: 'bi-hash', route: '/hash-generator' },
    { name: 'UUID Generator', icon: 'bi-upc-scan', route: '/uuid-generator' },
    { name: 'Numbers To Words Converter', icon: 'bi-123', route: '/numbers-to-words' },
    // { name: 'Time Zone Converter', icon: 'bi-clock', route: '/time-zone-converter' },
    // { name: 'Passport Photo Generator', icon: 'bi-camera', route: '/passport-photo' },
    // { name: 'Online Chart Maker', icon: 'bi-bar-chart', route: '/chart-maker' },
    // { name: 'Image to Icon Converter', icon: 'bi-image', route: '/image-to-icon' },
    { name: 'Money Counter Calculator', icon: 'bi-cash-stack', route: '/money-counter-calculator' },
    // { name: 'IP Subnet Calculator', icon: 'bi-diagram-3', route: '/ip-subnet-calculator' },
    // { name: 'CSS Formatter', icon: 'bi-file-earmark-code', route: '/css-formatter' }
  ];
}
