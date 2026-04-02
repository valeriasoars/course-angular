import { Component, input, Input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";


@Component({
  selector: 'app-dashboard-item',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
})
export class DashboardItem {
  // @Input({required: true}) image!: {src: string; alt: string}
  // @Input({required: true}) tittle!: string

  image = input.required<{src: string; alt: string}>()
  title = input.required<string>()

}
