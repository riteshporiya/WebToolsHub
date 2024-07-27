import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-unit-calculators',
  templateUrl: './unit-calculators.component.html',
  styleUrls: ['./unit-calculators.component.scss']
})
export class UnitCalculatorsComponent {
  calculators = [
    { name: 'Area', icon: 'square', route: 'area-unit-converter' },
    { name: 'Data Transfer Rate', icon: 'arrow-down-up', route: 'data-transfer-rate' },
    { name: 'Digital Storage', icon: 'hdd', route: 'digital-storage' },
    { name: 'Energy', icon: 'lightning', route: 'energy-converter' },
    { name: 'Frequency', icon: 'activity', route: 'frequency-converter' },
    { name: 'Fuel Economy', icon: 'fuel-pump', route: 'fuel-economy-converter' },
    { name: 'Length', icon: 'rulers', route: 'length-converter' },
    { name: 'Mass', icon: 'mass', route: 'mass-converter' },
    { name: 'Plane Angle', icon: 'triangle', route: 'plane-angle-converter' },
    { name: 'Pressure', icon: 'speedometer', route: 'pressure-converter' },
    { name: 'Speed', icon: 'speedometer2', route: 'speed-converter' },
    { name: 'Temperature', icon: 'thermometer-half', route: 'temperature-converter' },
    { name: 'Time', icon: 'clock', route: 'time-converter' },
    { name: 'Volume', icon: 'box', route: 'volume-converter' }
  ];

  activeRoute: string = 'area-unit-converter';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: any) => {
      this.activeRoute = event.urlAfterRedirects.split('/')[2];
    });
  }

  selectCalculator(route: string) {
    this.router.navigate(['unit-converter/'+route]);
  }
}