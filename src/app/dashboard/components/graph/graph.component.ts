import { Component, OnInit } from '@angular/core';
import Chart, { registerables } from 'chart.js/auto';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  config:any;
  chart: Chart|undefined;

  ngOnInit(): void {
    this.config = {
      type: "bar",
      data: {
        labels: ['Station Name Dummy 1', 'Station Name Dummy 2', 'Station Name Dummy 3', 'Station Name Dummy 4', 'Station Name Dummy 5'],
        datasets: [{
          label: 'Sales',
          data: ['280', '50', '150', '200','80', '300'],
          backgroundColor: '#FF7F5C'
        },
        {
          label: 'Transaction',
          // data: ['50', '100', '200', '230', '280'],
          // backgroundColor: 'red',
        },
        {
          label: 'Value',
          // data: ['50', '40', '130', '200', '280'],
          // backgroundColor: 'blue',
        },
        {
          label: 'Compression',
          // data: ['50', '80', '150', '230', '300'],
          // backgroundColor: 'green',
        }]
  
      },
      options: {
        aspectRatio:2,
        borderWidth:1,
        },
  
    }

    this.chart = new Chart('myChart', this.config)
  }

  

}


