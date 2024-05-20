import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  data: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {

    // Get the current client data
    this.http.get('https://enventrysystem-default-rtdb.firebaseio.com/client.json').subscribe(
      (data: any) => {
        this.data = data;
        console.log("Data :", this.data);

        this.data = this.convertToArray(data);

      }

    );

  }


  convertToArray(data: any): any[] {
    const resultArray = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        resultArray.push({ id: key, ...data[key] });
      }
    }
    console.log("this is array :", resultArray)
    return resultArray;
  }
}
