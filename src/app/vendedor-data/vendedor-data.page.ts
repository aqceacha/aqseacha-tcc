import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VendedorList } from '../userlist/VendedorList';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-data',
  templateUrl: './vendedor-data.page.html',
  styleUrls: ['./vendedor-data.page.scss'],

})
export class VendedorDataPage implements OnInit{

  vendedor?: VendedorList;

  constructor(private dataService: DataService, private router: Router) { }

  goToRoute(route: string){
    this.router.navigate([`../${route}`]);
  }

  ngAfterContentChecked(){
    this.vendedor = this.dataService.getData('vendedor');
  }

  ngOnInit(): void {

  }

}

