import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteList } from '../userlist/ClienteList';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-data',
  templateUrl: './cliente-data.page.html',
  styleUrls: ['./cliente-data.page.scss'],

})
export class ClienteDataPage implements OnInit{

  cliente?: ClienteList;

  constructor(private dataService: DataService, private router: Router) { }

  goToRoute(route: string){
    this.router.navigate([`../${route}`]);
  }

  ngAfterContentChecked(){
    this.cliente = this.dataService.getData('cliente');
  }

  ngOnInit(): void {

  }

}

