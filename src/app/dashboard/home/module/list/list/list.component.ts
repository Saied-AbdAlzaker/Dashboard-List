import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  price: number = 550;
  today: number = Date.now();
  totalSales: string = '62,721 m^3';
  count: number = 5161;
  Compression: string = "Compression";
  maxTransaction: number = 20;

}
