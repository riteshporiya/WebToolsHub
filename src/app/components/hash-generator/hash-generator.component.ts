import { Component } from '@angular/core';
// @ts-ignore
// import * as cryptoBrowserify from 'crypto-browserify';
// import { sha3_512, sha3_256 } from 'js-sha3';
// import { crc16, crc32 } from 'crc';
// @ts-ignore
// import RIPEMD160 from 'ripemd160';
// import { Whirlpool, encoders } from 'whirlpool-hash';

@Component({
  selector: 'app-hash-generator',
  templateUrl: './hash-generator.component.html',
  styleUrls: ['./hash-generator.component.scss']
})
export class HashGeneratorComponent {
  algorithms = ['MD5', 'SHA-256', 'SHA512', 'SHA1', 'SHA3-256', 'SHA3-512', 'CRC16', 'CRC32', 'RipeMD-160', 'Whirlpool'];
  selectedAlgorithm = 'SHA-256';
  inputText = '';
  generatedHash = '';

  generateHash() {
    switch (this.selectedAlgorithm) {
      // case 'MD5':
      //   this.generatedHash = cryptoBrowserify.createHash('md5').update(this.inputText).digest('hex');
      //   break;
      // case 'SHA-256':
      //   this.generatedHash = cryptoBrowserify.createHash('sha256').update(this.inputText).digest('hex');
      //   break;
      // case 'SHA512':
      //   this.generatedHash = cryptoBrowserify.createHash('sha512').update(this.inputText).digest('hex');
      //   break;
      // case 'SHA1':
      //   this.generatedHash = cryptoBrowserify.createHash('sha1').update(this.inputText).digest('hex');
      //   break;
      // case 'SHA3-256':
      //   this.generatedHash = sha3_256(this.inputText);
      //   break;
      // case 'SHA3-512':
      //   this.generatedHash = sha3_512(this.inputText);
      //   break;
      // case 'CRC16':
      //   this.generatedHash = crc16(this.inputText).toString(16);
      //   break;
      // case 'CRC32':
      //   this.generatedHash = crc32(this.inputText).toString(16);
      //   break;
      // case 'RipeMD-160':
      //   this.generatedHash = new RIPEMD160().update(this.inputText).digest('hex');
      //   break;
      // case 'Whirlpool':
      //   this.generatedHash = new Whirlpool().getHash(this.inputText).toString();
      //   break;
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedHash);
  }
}