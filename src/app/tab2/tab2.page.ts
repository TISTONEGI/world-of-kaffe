import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  selectedCoffee: any = null;
  coffeeRecipes: { title: string; steps: string[] }[] = [];

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params['coffee']) {
        this.selectedCoffee = JSON.parse(params['coffee']);
        this.loadCoffeeRecipes();
      }
    });
  }

  goBack() {
    this.location.back();
  }

  loadCoffeeRecipes() {
    const recipes: { [key: string]: { title: string; steps: string[] }[] } = {
      Latte: [
        { title: 'Café Latte Clássico', steps: ['Prepare o espresso', 'Adicione leite vaporizado', 'Decore com espuma'] },
      ],
      Expresso: [
        { title: 'Expresso Tradicional', steps: ['Moer os grãos de café', 'Preparar o café na máquina de expresso'] },
      ],
      Filtrado: [
        { title: 'Filtrado Tradicional', steps: ['Moer os grãos de café', 'Para cada 1g de café você vai usar 10ml de água.', 
        'Em uma chaleira coloque a água e o açúcar.', 'Em um suporte para filtro, coloque o filtro de papel e o pó e a água quente.'] },
      ],
      Macchiato: [
        { title: 'Macchiato Tradicional', steps: ['Moer os grãos de café', 'Prepare o espresso: Coloque o pó moído no porta-filtro da máquina de espresso e tampe.', 
        'Aqueça e espume o leite: Enquanto o espresso extrai, aqueça o leite no vaporizador até atingir cerca de 60°C.', 'Monte o macchiato: Despeje o espresso na xícara. Em seguida, com cuidado, despeje a espuma de leite sobre o espresso.'] },
      ],
      Cappuccino: [
        { title: 'Cappuccino', steps: ['Moer os grãos de café', 'Coloque o pó moído no porta-filtro da máquina de espresso e tampe', 
        'Pressione o pó com o tamper para garantir uma extração uniforme', 'Em um suporte para filtro, coloque o filtro de papel e o pó e a água quente.'] },
      ],
      ColdBrew: [
        { title: 'ColdBrew', steps: ['Moer os grãos de café', 'Misture o café com água: Em um recipiente limpo, coloque o café moído e adicione água filtrada fria.', 
        'Em uma chaleira coloque a água e o açúcar.', 'Coe o café: Após o tempo de infusão, coe o café utilizando um filtro de papel ou pano fino. Você pode usar um coador de café reutilizável ou um filtro de papel para café.'] },
      ],
    };

    this.coffeeRecipes = recipes[this.selectedCoffee.name] || [{ title: 'Receita padrão', steps: ['Passo 1', 'Passo 2'] }];
  }
}
