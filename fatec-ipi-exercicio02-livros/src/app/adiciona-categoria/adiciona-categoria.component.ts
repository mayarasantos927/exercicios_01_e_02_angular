import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adiciona-categoria',
  templateUrl: './adiciona-categoria.component.html',
  styleUrls: ['./adiciona-categoria.component.scss']
})
export class AdicionaCategoriaComponent implements OnInit {

  nomeCategoria: string;

  constructor() { }
  
  ngOnInit() {
  }

  adicionaCategoria (): void {
    if (this.nomeCategoria){
    window.alert ("Categoria adicionada com sucesso!");
    }
    else{
    window.alert ('Você deve preencher o nome da categoria!');
    }
    }
}
