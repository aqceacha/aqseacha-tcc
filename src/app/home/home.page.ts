import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteList } from '../userlist/ClienteList';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private router: Router, private dataService: DataService) {}

  pagRoute(route:string){
    this.router.navigate([route])
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  public clientes: ClienteList[] = [
    {
      idcli: 1,
  nomecli: 'Mariana',
  emailcli: 'mariana@gmail.com',
  senhacli: '123123123',
  apelidocli: 'Mari',
  nascimentocli: '21/12/2005',
  generocli: 'Feminino',
  telefonecli: '999898',
  enderecocli: 'casa',
  complementocli: '',
  documentocli: '1908',
  idestado: 1,
  idcidade: 1
    }
  ];

  public results = [...this.clientes];
  public ordered = [];

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.clientes.filter(d => d.nomecli.toLowerCase().indexOf(query) > -1);
  }

  showInfoModal(cliente: ClienteList) {
    this.dataService.setData('cliente', cliente);
    this.router.navigateByUrl('/cliente-page');
  }


}



