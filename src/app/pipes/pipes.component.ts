import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  filterBy: string = '';

  servers: any[] = [
    {
      type: 'medium',
      name: 'Database',
      status: 'inactive',
      startedWorking: new Date(1, 3, 2015)
    },
    {
      type: 'high',
      name: 'Development Server',
      status: 'active',
      startedWorking: new Date(4, 5, 2014)
    },
    {
      type: 'low',
      name: 'Production Server',
      status: 'inactive',
      startedWorking: new Date(1, 3, 2018)
    },
    {
      type: 'medium',
      name: 'Testing Server',
      status: 'active',
      startedWorking: new Date(15, 3, 2017)
    },
  ];


  returnServerStatus(server: any) {
    return {
      'bg-success': server.status === 'active',
      'bg-danger': server.status === 'inactive'
    }
  }

  asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('active');
    }, 2000);
  });

}
