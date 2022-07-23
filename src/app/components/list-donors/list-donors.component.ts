import { map, Observable, startWith } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-list-donors',
  templateUrl: './list-donors.component.html',
  styleUrls: ['./list-donors.component.scss']
})
export class ListDonorsComponent implements OnInit {

  control = new FormControl('');
  streets: string[] = ['امل احمد', '  سعاد عبدالله ', ' زين الدين ', ' نور احمد '];
  filteredStreets!: Observable<string[]>;
  orgSelected : any;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
