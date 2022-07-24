import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAndRegisterComponent } from './auth/login-and-register/login-and-register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';



import { AddOrsearchOfOrganizationComponent } from './components/add-orsearch-of-organization/add-orsearch-of-organization.component';
import { AddOrganizationComponent } from './components/add-organization/add-organization.component';
import { SearchOrganizationComponent } from './components/search-organization/search-organization.component';
import { HeaderComponent } from './components/header/header.component';
import { ListDonorsComponent } from './components/list-donors/list-donors.component';
import { ListCasesComponent } from './components/list-cases/list-cases.component';
import { NewCaseComponent } from './components/new-case/new-case.component';
import { JoinRequestsComponent } from './components/join-requests/join-requests.component';
import { NewDonorComponent } from './components/new-donor/new-donor.component';
import { DonationsComponent } from './components/donations/donations.component';
import { DeleteAlertComponent } from './components/alert/delete-alert/delete-alert.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginAndRegisterComponent,
    LoginComponent,
    RegisterComponent,
    AddOrsearchOfOrganizationComponent,
    AddOrganizationComponent,
    SearchOrganizationComponent,
    HeaderComponent,
    ListDonorsComponent,
    ListCasesComponent,
    NewCaseComponent,
    JoinRequestsComponent,
    NewDonorComponent,
    DonationsComponent,
    DeleteAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
