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
  imagecli: 'https://64.media.tumblr.com/ca9ad155add866935adca392ac99b337/ab7e1aea19a5e04e-c5/s540x810/8c35fd9ae76f681db30b252d9e27a693c846111a.jpg',
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
    },
    {
      idcli: 2,
  nomecli: 'Vitor',
  imagecli: 'https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2021/12/ad57cb9-guitarra-worship.jpg',
  emailcli: 'vitao@gmail.com',
  senhacli: '123123123',
  apelidocli: 'Vitão',
  nascimentocli: '??/??/2005',
  generocli: 'Masculino',
  telefonecli: '999898',
  enderecocli: 'apartamento',
  complementocli: '11',
  documentocli: '1098',
  idestado: 1,
  idcidade: 1
    },
    {
    idcli: 3,
    nomecli: 'Victor',
    imagecli: 'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1',
    emailcli: 'hero@gmail.com',
    senhacli: '2222222',
    apelidocli: 'Vitão',
    nascimentocli: '03/06/2005',
    generocli: 'Masculino',
    telefonecli: '999898',
    enderecocli: 'casa',
    complementocli: '',
    documentocli: '0902',
    idestado: 1,
    idcidade: 1
      },
          {
    idcli: 5,
    nomecli: 'Ariane',
    imagecli: 'https://m.media-amazon.com/images/I/81hZXwAi55L.jpg',
    emailcli: 'ariane@gmail.com',
    senhacli: '2242122',
    apelidocli: 'Ari',
    nascimentocli: '??/??/2005',
    generocli: 'Feminino',
    telefonecli: '009398',
    enderecocli: 'apartamento',
    complementocli: '22',
    documentocli: '9736',
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
    this.router.navigateByUrl('/cliente-data');
  }


}



