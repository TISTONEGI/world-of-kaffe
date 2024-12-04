import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  coffees = [
    {
      name: 'Cold Brew',
      infusionTime: 'De 12 a 24 horas',
      filtration: 'Após a infusão, o café é coado manualmente ou com filtro especial.',
      dilution: 'Geralmente mais concentrado, então é comum diluí-lo com água ou gelo.',
      description: `O cold brew é um método de preparo que utiliza água fria ou em temperatura ambiente para extrair o sabor do café ao longo de várias horas. 
        Sua popularidade cresceu devido ao sabor suave, menos ácido e refrescante, sendo ideal para dias quentes.`,
      image: '/assets/coldbrew.jpg',
    },
    {
      name: 'Expresso',
      infusionTime: '25 a 30 segundos',
      filtration: 'Extração por pressão utilizando uma máquina de café.',
      dilution: 'Consumido puro ou combinado com leite, como no cappuccino ou latte.',
      description: `O expresso é o coração da cultura do café, caracterizado pela sua intensidade, aroma marcante e camada de crema dourada.
        Criado na Itália, é base para várias bebidas clássicas e preferido por quem busca uma dose rápida e concentrada de energia.`,
      image: '/assets/expresso.jpg',
    },
    {
      name: 'Filtrado',
      infusionTime: 'De 3 a 5 minutos',
      filtration: 'Utiliza filtros de papel ou metal para coar o café.',
      dilution: 'Geralmente consumido puro, mas pode ser combinado com leite ou açúcar.',
      description: `O café filtrado é um dos métodos mais tradicionais e versáteis de preparo. Comum em diversas culturas, 
        ele permite destacar nuances únicas de grãos especiais, sendo ideal para quem aprecia um sabor mais equilibrado.`,
      image: '/assets/filtrado.jpg',
    },
    {
      name: 'Macchiato',
      infusionTime: 'Base de espresso, pronto em segundos',
      filtration: 'Não aplicável - preparado diretamente com café espresso.',
      dilution: 'Geralmente servido com uma pequena quantidade de espuma de leite.',
      description: `O macchiato, cujo nome significa "manchado" em italiano, consiste em uma dose de espresso 
        "manchada" com um toque de espuma de leite. É perfeito para quem gosta do sabor intenso do café com um leve toque de suavidade.`,
      image: '/assets/macchiato.jpg',
    },
    {
      name: 'Cappuccino',
      infusionTime: 'Base de espresso',
      filtration: 'Não aplicável.',
      dilution: 'Combinado com leite vaporizado e espuma em proporções iguais.',
      description: `O cappuccino é um símbolo da tradição italiana, combinando espresso, leite vaporizado e espuma. 
        A bebida é conhecida por sua cremosidade e harmonia entre o amargor do café e a suavidade do leite.`,
      image: '/assets/cappuccino.jpg',
    },
    {
      name: 'Latte',
      infusionTime: 'Base de espresso',
      filtration: 'Não aplicável - extração por pressão.',
      dilution: 'Geralmente com uma maior quantidade de leite vaporizado e pouca espuma.',
      description: `O café latte é uma bebida suave e cremosa, ideal para quem prefere um sabor mais leve. 
        Ele combina uma dose de espresso com bastante leite vaporizado, tornando-o perfeito para personalizações com xaropes ou arte no leite.`,
      image: '/assets/latte.jpg',
    },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }
}
