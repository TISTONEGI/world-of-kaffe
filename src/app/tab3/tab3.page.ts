import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  coffees: any[] = [];
  searchText: string = '';
  coffeeType: string = 'Cold Brew'; // Tipo de café inicial

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.fetchCoffees();
  }

  fetchCoffees() {
    this.coffeeService.getCoffeesByType(this.coffeeType).subscribe({
      next: (data) => {
        this.coffees = data;
      },
      error: (err) => {
        console.error('Erro ao buscar cafés:', err);
      },
    });
  }

  filterCoffees(event: any) {
    this.searchText = event.target.value;
  }

  onCoffeeTypeChange(type: string) {
    this.coffeeType = type;
    this.fetchCoffees();
  }

  isSpecial(coffee: any): boolean {
    return coffee.type === 'Cold Brew' || coffee.type === 'Espresso';
  }
}