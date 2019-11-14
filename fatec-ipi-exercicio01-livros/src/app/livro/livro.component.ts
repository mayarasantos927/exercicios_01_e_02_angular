import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  categorias = [
    {id: 1, nome: 'Romance'},
    {id: 2, nome: 'Terror'},
    {id: 3, nome: 'Tecnologia'}
    ];

  constructor() { }

  ngOnInit() {
  }


  adicionarCategoria (): void{
    console.log("testando o adicionar categorias...");
  }

}
