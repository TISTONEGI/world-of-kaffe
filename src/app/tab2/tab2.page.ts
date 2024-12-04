import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router
import { coffeeData } from 'src/app/tab2/data/coffee-data';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  coffeeList = coffeeData;
  selectedCoffee: any = null;

  constructor(private router: Router) {
    this.selectedCoffee = this.coffeeList[0];
  }

  // Navegar de volta para Tab1
  goBackToTab1() {
    this.router.navigate(['/tabs/tab1']);
  }
  goToTab3() {
    this.router.navigate(['/tabs/tab3']);
  }
  selectCoffee(coffee: any) {
    this.selectedCoffee = coffee;
  }
}
