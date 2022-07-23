import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-search-organization',
  templateUrl: './search-organization.component.html',
  styleUrls: ['./search-organization.component.scss']
})
export class SearchOrganizationComponent implements OnInit {

  control = new FormControl('');
  streets: string[] = ['مؤسسة الخير فى امتى', ' دار النور ', ' دار الرحمة', 'مؤسسة دار الاسلام'];
  filteredStreets!: Observable<string[]>;
  orgSelected : any;

  ngOnInit() {
    // this.filteredStreets = this.control.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );

  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
