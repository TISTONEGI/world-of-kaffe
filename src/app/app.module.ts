import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importar HttpClientModule para usar em requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CoffeeNamePipe } from './pipes/coffee-name.pipe';

// Diretivas
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleStyleDirective } from './directives/toggle-style.directive';

@NgModule({
  declarations: [
    AppComponent,            // Componente principal
    CapitalizePipe,          // Pipe personalizado
    CoffeeNamePipe,          // Pipe personalizado
    HighlightDirective,      // Diretiva personalizada
    ToggleStyleDirective     // Diretiva personalizada
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,        // Necessário para o HttpClient funcionar
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
