import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  coffeeTypes = [
    { name: 'Latte', image: 'assets/latte.jpg' },
    { name: 'Expresso', image: 'assets/expresso.jpg' },
    { name: 'Macchiato', image: 'assets/macchiato.jpg' },
    { name: 'Filtrado', image: 'assets/filtrado.jpg' },
    { name: 'Cappuccino', image: 'assets/cappuccino.jpg' },
    { name: 'Cold Brew', image: 'assets/coldbrew.jpg' },
  ];

  selectedCoffees: any[] = [];
  hasSearched = false;
  coffeeImageUrl: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  // Função para carregar cafés aleatórios
  loadRandomCoffee() {
    this.http.get<{ file: string }>('https://coffee.alexflipnote.dev/random.json').subscribe(
      (response) => {
        console.log('Imagem de café:', response.file);
        this.coffeeImageUrl = response.file;
      },
      (error) => {
        console.error('Erro ao carregar a imagem:', error);
      }
    );
  }

  // Função para simular clique em um tipo de café
  onCoffeeTypeClick(type: string) {
    this.hasSearched = true;

    // Simula busca de cafés por tipo
    this.http.get<any[]>('https://coffee.alexflipnote.dev/random.json').subscribe(
      (response) => {
        // API randomica - Simulando com dados fictícios
        this.selectedCoffees = [
          { name: `${type} Especial`, image: 'assets/default-coffee.jpg', description: 'Um ótimo café.' },
          { name: `${type} Premium`, image: 'assets/default-coffee.jpg', description: 'Um café premium delicioso.' },
        ];
      },
      (error) => {
        console.error('Erro ao buscar cafés:', error);
        this.selectedCoffees = [];
      }
    );
  }
}
