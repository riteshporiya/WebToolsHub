import { Component } from '@angular/core';
import { v1, v3, v4, v5 } from 'uuid';

@Component({
  selector: 'app-uuid-generator',
  templateUrl: './uuid-generator.component.html',
  styleUrls: ['./uuid-generator.component.scss']
})
export class UuidGeneratorComponent {
  currentVersion = 4;
  uuids: string[] = [];
  namespace: string = '';
  text: string = '';
  count = 1;

  onVersionChange() {
    this.count = 1;
    this.generateUUIDs();
  }

  generateUUIDs() {
    this.uuids = [];
    for (let i = 0; i < this.count; i++) {
      switch (this.currentVersion) {
        case 1:
          this.uuids.push(v1());
          break;
        case 3:
          this.uuids.push(v3(this.text, this.namespace));
          break;
        case 4:
          this.uuids.push(v4());
          break;
        case 5:
          this.uuids.push(v5(this.text, this.namespace));
          break;
      }
    }
  }

  regenerateNamespace() {
    this.namespace = v4();
    this.generateUUIDs(); // Regenerate UUIDs with the new namespace
  }

  copyUUIDs() {
    const uuidString = this.uuids.join('\n');
    navigator.clipboard.writeText(uuidString);
  }

  incrementCount() {
    this.count++;
    this.generateUUIDs();
  }

  decrementCount() {
    if (this.count > 1) {
      this.count--;
      this.generateUUIDs();
    }
  }
}