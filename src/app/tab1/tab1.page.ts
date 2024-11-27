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

  // Função para carregar cafés aleatórios diretamente do HttpClient
  loadRandomCoffee() {
    this.http.get<{ file: string }>('https://coffee.alexflipnote.dev/random.json').subscribe({
      next: (data: { file: string }) => {
        console.log('Imagem de café carregada:', data.file);
        this.coffeeImageUrl = data.file;
      },
      error: (err: any) => {
        console.error('Erro ao buscar café aleatório:', err);
      },
    });
  }

  // Simula o clique em um tipo de café
  onCoffeeTypeClick(type: string) {
    this.hasSearched = true;

    // Simulação de busca de cafés por tipo com dados fictícios
    this.selectedCoffees = [
      { name: `${type} Especial`, image: 'assets/default-coffee.jpg', description: 'Um ótimo café.' },
      { name: `${type} Premium`, image: 'assets/default-coffee.jpg', description: 'Um café premium delicioso.' },
    ];
  }
}
