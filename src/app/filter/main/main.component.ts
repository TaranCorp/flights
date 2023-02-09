import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { CapitalFormControl } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  flightForm = new FormGroup({
    departure: new CapitalFormControl(''),
    arrival: new CapitalFormControl(''),
    range: new FormGroup({
      startDate: new FormControl<Date | null>(null),
      endDate: new FormControl<Date | null>(null)
    }),
  });

  onFormSubmit() {
    this.flightForm.reset();
  }

  get range() {
    return this.flightForm.controls.range;
  }

  get startDate() {
    return this.range.controls.startDate;
  }

  get endDate() {
    return this.range.controls.endDate;
  }

  get departure() {
    return this.flightForm.controls.departure;
  }

  get arrival() {
    return this.flightForm.controls.arrival;
  }
}
