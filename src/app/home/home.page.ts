import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  toDoList = [
  {
    itemName: 'Aniversário',
    itemDueDate: '03-09-23',
    itemPriority: 'low',
    itemCategory: 'Party'
  },
  { 
    itemName: 'Prova',
    itemDueDate: '03-09-23',
    itemPriority: 'high',
    itemCategory: 'Study'
  }
  ]

  today: number = Date.now()

  constructor() { }

  ngOnInit() {
  }

}
