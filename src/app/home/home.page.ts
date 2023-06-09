import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ClienteList } from '../userlist/ClienteList';
import { VendedorList } from '../userlist/VendedorList';
import { ImageList } from '../userlist/ImageList';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

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
    }
  ];

  public resultscli = [...this.clientes];
  public orderedcli = [];

  handleChangeCli(eventcli: any) {
    const query = eventcli.target.value.toLowerCase();
    this.resultscli = this.clientes.filter(c => c.nomecli.toLowerCase().indexOf(query) > -1);
  }

  showInfoModalCli(cliente: ClienteList) {
    this.dataService.setData('cliente', cliente);
    this.router.navigateByUrl('/cliente-data');
  }

// Vendedor

  public vendedores: VendedorList[] = [
    {
  idven: 1,
  nomeven: 'Mariana',
  imageven: 'https://64.media.tumblr.com/ca9ad155add866935adca392ac99b337/ab7e1aea19a5e04e-c5/s540x810/8c35fd9ae76f681db30b252d9e27a693c846111a.jpg',
  emailven: 'mariana@gmail.com',
  senhaven: '123123123',
  apelidoven: 'Mari',
  nascimentoven: '21/12/2005',
  generoven: 'Feminino',
  telefoneven: '999898',
  enderecoven: 'casa',
  complementoven: '',
  documentoven: '1908',
  comprovven: '1298283',
  idestado: 1,
  idcidade: 1,
  idramo: 1
    },
    {
      idven: 2,
  nomeven: 'Vitor',
  imageven: 'https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2021/12/ad57cb9-guitarra-worship.jpg',
  emailven: 'vitao@gmail.com',
  senhaven: '123123123',
  apelidoven: 'Vitão',
  nascimentoven: '??/??/2005',
  generoven: 'Masculino',
  telefoneven: '999898',
  enderecoven: 'apartamento',
  complementoven: '11',
  documentoven: '1098',
  comprovven: '233289471',
  idestado: 1,
  idcidade: 1,
  idramo: 2
    },
    {
    idven: 3,
    nomeven: 'Victor',
    imageven: 'https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png',
    emailven: 'vitao@gmail.com',
    senhaven: '123123123',
    apelidoven: 'Vitão',
    nascimentoven: '??/??/2005',
    generoven: 'Masculino',
    telefoneven: '999898',
    enderecoven: 'apartamento',
    complementoven: '11',
    documentoven: '1098',
    comprovven: '233289471',
    idestado: 1,
    idcidade: 1,
    idramo: 3
      },
      {
        idven: 4,
        nomeven: 'Gabriela',
        imageven: 'https://i.pinimg.com/564x/6c/f8/bf/6cf8bfe2d5f8c3f3289c14b1157d3508.jpg',
        emailven: 'gabriela@gmail.com',
        senhaven: '123123123',
        apelidoven: 'Gabi',
        nascimentoven: '??/??/2005',
        generoven: 'Masculino',
        telefoneven: '999898',
        enderecoven: 'apartamento',
        complementoven: '11',
        documentoven: '1098',
        comprovven: '233289471',
        idestado: 1,
        idcidade: 1,
        idramo: 3
      },
      {
        idven: 5,
        nomeven: 'Ariane',
        imageven: 'https://www.pinkvilla.com/images/2022-12/12301674_btss-kim-taehyung-aka-v-becomes-the-1st-ever-k-pop-star-to-have-two-osts-cross-200-million-spotify-streams_1280*720.jpg',
        emailven: 'ariane@gmail.com',
        senhaven: '123123123',
        apelidoven: 'Ari',
        nascimentoven: '??/??/2005',
        generoven: 'Masculino',
        telefoneven: '999898',
        enderecoven: 'apartamento',
        complementoven: '11',
        documentoven: '1098',
        comprovven: '233289471',
        idestado: 1,
        idcidade: 1,
        idramo: 3
      }
  ];

  public resultsven = [...this.vendedores];
  public orderedven = [];

  handleChangeVen(eventven: any) {
    const query = eventven.target.value.toLowerCase();
    this.resultsven = this.vendedores.filter(v => v.nomeven.toLowerCase().indexOf(query) > -1);
  }

  showInfoModalVen(vendedor: VendedorList) {
    this.dataService.setData('vendedor', vendedor);
    this.router.navigateByUrl('/vendedor-data');
  }

  // Images

  public images: ImageList[] = [
    {
      nomeimg: 'Aqseacha Logo',
      image: '/assets/aqseachalogo.png'
    },
    {
      nomeimg: 'Aqseacha Logo',
      image: '/assets/logoapp.png'
    }
  ];

  public resultsimg = [...this.images];
  public orderedimg = [];

  handleChangeImg(eventimg: any) {
    const query = eventimg.target.value.toLowerCase();
    this.resultsimg = this.images.filter(v => v.nomeimg.toLowerCase().indexOf(query) > -1);
  }




}



