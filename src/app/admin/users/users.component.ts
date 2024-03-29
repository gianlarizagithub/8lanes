import { Component, HostBinding, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ReadService } from '../../services/read/read.service';
import { User } from '../../models/user/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // animations: [slideInOut],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in => out', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class UsersComponent implements OnInit {
  paginationDatas = [
    {
      id: '1',
      name: 'John Doe',
      address: '123 Main St',
      status: 'active',
      email: 'johndoe@example.com',
    },
    {
      id: '2',
      name: 'Jane Smith',
      address: '456 Oak Ave',
      status: 'active',
      email: 'janesmith@example.com',
    },
    {
      id: '3',
      name: 'David Johnson',
      address: '789 Pine Ln',
      status: 'active',
      email: 'davidjohnson@example.com',
    },
    {
      id: '4',
      name: 'Sarah Williams',
      address: '101 Elm Dr',
      status: 'inactive',
      email: 'sarahwilliams@example.com',
    },
    {
      id: '5',
      name: 'Michael Brown',
      address: '202 Cedar Blvd',
      status: 'inactive',
      email: 'michaelbrown@example.com',
    },
  ];

  public getUsers!: User[]
  constructor(private readService: ReadService) {}


  ngOnInit(): void 
  {
    this.getUserList();  
  }

  getUserList() 
  {
    this.readService.getUsers().subscribe
    ({
      next: async (res) => 
      {
        var usersList = await res;

          usersList = usersList.filter((f: any) => f.email != '8lanesdrivingschool2020@gmail.com')
          this.getUsers = usersList;
      },
      error: async (error) => 
      {
        alert(JSON.stringify(error));
      }
    })
  }

}
