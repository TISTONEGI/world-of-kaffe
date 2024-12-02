import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    { name: 'ColdBrew', image: 'assets/coldbrew.jpg' },
  ];

  selectedCoffees: any[] = [];
  hasSearched = false;
  coffeeImageUrl: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

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

  // Método para navegar para a Página 2 com os dados do café
  onCoffeeTypeClick(coffee: any) {
    this.router.navigate(['/tab2'], { queryParams: { coffee: JSON.stringify(coffee) } });
  }

  // Gerar receitas aleatórias para cada tipo de café
  generateRandomRecipes(coffeeName: string) {
    const recipes: { [key: string]: { title: string; steps: string[] }[] } = {
      Latte: [
        { title: 'Café Latte Clássico', steps: ['Prepare um espresso forte', 'Adicione leite vaporizado', 'Decore com espuma'] },
        { title: 'Latte com Caramelo', steps: ['Prepare um espresso', 'Adicione leite vaporizado', 'Misture xarope de caramelo'] }
      ],
      Expresso: [
        { title: 'Expresso Tradicional', steps: ['Moer grãos de café', 'Prepare o café com máquina de expresso'] },
        { title: 'Expresso com Chocolate', steps: ['Prepare um espresso', 'Adicione chocolate derretido'] }
      ],
      // Adicione receitas para outros cafés conforme necessário
    };

    return recipes[coffeeName] || [{ title: 'Receita padrão', steps: ['Passo 1', 'Passo 2'] }];
  }
}
