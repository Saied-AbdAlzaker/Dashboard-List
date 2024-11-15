import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  price: string = "71.028 EGP";
  sales: string = "20,000 m^3";
  count: number = 1567;
  totalValue: number = 0.02;
  AvgValue: string = "50 m^3";
  totalSales: string = '62,721 m^3';


  config: any;
  chart: Chart | undefined;

  ngOnInit(): void {
    this.config = {
      type: "radar",
      data: {
        labels: [
          24.00,
          2.00,
          4.00,
          6.00,
          8.00,
          10.00,
          12.00,
          14.00,
          16.00,
          18.00,
          20.00,
          22.00,
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, , 66, 77, 90, 81, 88, 88, 87, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgb(54, 162, 235)',
        }, {
          label: 'My Second Dataset',
          data: [28, , 30, 44, 33, 48, 40, 19, 55, 66, 96, 88, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.4)',
          borderColor: 'rgb(54, 162, 235)',
        }]

      },
      options: {
        aspectRatio: 1.5,
        borderWidth: 0
      },

    }

    this.chart = new Chart('myChart', this.config)
  }


}
