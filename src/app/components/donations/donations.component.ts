import { DeleteAlertComponent } from './../alert/delete-alert/delete-alert.component';
import { Donations } from './../../interface/donations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  amountNeeded: number = 18000;
  amountCollected: number = 0;
  idArr: Donations[] = []
  amountNow: number = 0;
  amountRemaining: number = 0;
  listOfDonations!: Donations[]

  constructor(
    public dialog: MatDialog
  ) {
    this.listOfDonations = [
      { id: 1, name: 'Ahd Mohamed', amountReceived: 1000 },
      { id: 2, name: 'Mohamed Adel', amountReceived: 1000 },
      { id: 3, name: 'Omar Akl', amountReceived: 1000 },
      { id: 4, name: 'Ahmed Mamdouh', amountReceived: 1000 },
    ]

  }

  ngOnInit(): void {
    this.calculate()
  }

  openDialog(id:number) {
    this.dialog.open(DeleteAlertComponent,{data: id}).afterClosed().subscribe(data => {
      let fiendDonationIndex = this.listOfDonations.findIndex(donation => donation.id == data);
      if (fiendDonationIndex) {this.deleteDonation(fiendDonationIndex)}
    })
  }

  calculate() {
    this.listOfDonations.forEach(el => this.amountNow += el.amountReceived);
    this.amountRemaining = this.amountNeeded - this.amountNow
  }

  resetCalculate() {
    this.amountNow = 0;
    this.amountRemaining = 0;
  }

  addToCollected(id: number) {
    let findDonation = this.listOfDonations.find(donation => donation.id == id);
    if (this.idArr.length == 0) {
      this.amountCollected += findDonation!.amountReceived;
      this.idArr.push(findDonation!)
      console.log(this.idArr)
    } else {
      const foundID = this.idArr.find(fID => fID.id == id);
      const foundIDIndx = this.idArr.findIndex(fID => fID.id == id);
      if (foundID) {
        this.idArr.splice(foundIDIndx, 1);
        this.amountCollected -= findDonation!.amountReceived;
      } else {
        this.idArr.push(findDonation!);
        this.amountCollected += findDonation!.amountReceived;
      }
    }
  }

  deleteDonation(index: number) {
    console.log(index)
    this.listOfDonations.splice(index, 1);
    this.amountNow = 0;
    this.calculate()
  }
}
