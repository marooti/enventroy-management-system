import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  form!: FormGroup;
  data: any[] = [];
  visible: boolean = false;
  loading: boolean = false;
  cols: any[] = [
    { field: "clientName", header: "Client Name" },
    { field: "phone", header: "Phone No" },
    { field: "Address", header: "Address" },
  ];
  currentId: number = 0;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }

  // This is form 
  createForm() {
    this.form = this.fb.group({
      companyName: [],
      itemName: [],
      phoneNo: [],
      date: [],
      description: [],
      quntity: [],
      unitPrice: [],
      total: []
    })
  }
  submit() {
    this.loading = true;
    const value = this.form.value;
    console.log("Form Data :", value);
    this.http.post(`https://enventrysystem-default-rtdb.firebaseio.com/stock.json`, value).subscribe(
      next => {
        if (next) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New customer added successfully' });
          this.getData();
          this.visible = false;
          this.loading = false;
        }
      }
    );
    return;
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


  applyFilter(event: Event, field: string, matchMode: string, table: any) {
    const inputElement = event.target as HTMLInputElement;
    table.filter(inputElement.value, field, matchMode);
  }

  showDialog() {
    this.visible = true;
  }
  notShowing() {
    this.visible = false;
    this.form.reset();
  }

  showSecondary() {
    this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
  }

  onSearchChange(searchValue: any) {
    console.log(searchValue);
  }
}
