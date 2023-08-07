import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})

export class TasksPage implements OnInit {

  tasks: string[] = [];
  newTask: string = '';
  
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = ''; // Limpa o campo após adicionar
    }
  }

  removeTask(index: number){
    this.tasks.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
