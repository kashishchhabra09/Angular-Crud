import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD APPLICATION';

  pageSize=3
  currentPage=1

  items: any = [];
  newItem: any = {};
  editingItem: any = {};

  constructor(private client: DataService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.client.getMethod().subscribe((item: any) => {
      console.log(item)
      // this.Users=item
      this.items = item;
    });
  }

  addItem(): void {
    this.client.addMethod(this.newItem).subscribe(() => {
      this.getItems();
      this.newItem = {};
    });
  }

  editItem(item: any): void {
    this.editingItem = { ...item };
  }

  updateItem(): void {
    this.client.updateMethod(this.editingItem).subscribe(() => {
      this.getItems();
      this.editingItem = {};
    });
  }

  deleteItem(id: number): void {
    this.client.deleteMethod(id).subscribe(() => {
      this.getItems();
    });
  }
}


