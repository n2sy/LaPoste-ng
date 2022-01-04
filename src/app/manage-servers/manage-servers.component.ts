import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent implements OnInit {
  selectedStatus = '';
  listServers: {
    name: string;
    type: string;
    status: string;
    startDate: Date;
  }[] = [
    {
      name: 'Production Server',
      type: 'small',
      status: 'critical',
      startDate: new Date(2020, 12, 12),
    },
    {
      name: 'Test Development Server',
      type: 'medium',
      status: 'stable',
      startDate: new Date(2010, 12, 12),
    },
    {
      name: 'Development Server',
      type: 'large',
      status: 'offline',
      startDate: new Date(2020, 12, 12),
    },
    {
      name: 'Nidhal Server',
      type: 'small',
      status: 'stable',
      startDate: new Date(2020, 12, 12),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  affecterClasse(stat) {
    return {
      'list-group-item-success': stat == 'stable' ? true : false,
      'list-group-item-danger': stat == 'critical' ? true : false,
      'list-group-item-warning': stat == 'offline' ? true : false,
    };
  }

  addNewServer() {
    this.listServers.push({
      name: 'New Server',
      type: 'small',
      status: 'stable',
      startDate: new Date(2020, 12, 12),
    });
  }
}
