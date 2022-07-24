import { DonationsComponent } from './components/donations/donations.component';
import { NewDonorComponent } from './components/new-donor/new-donor.component';
import { JoinRequestsComponent } from './components/join-requests/join-requests.component';
import { ListCasesComponent } from './components/list-cases/list-cases.component';
import { ListDonorsComponent } from './components/list-donors/list-donors.component';
import { AddOrsearchOfOrganizationComponent } from './components/add-orsearch-of-organization/add-orsearch-of-organization.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterComponent } from './auth/login-and-register/login-and-register.component';
import { NewCaseComponent } from './components/new-case/new-case.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full' },
  {path: 'login', component: LoginAndRegisterComponent},
  {path: 'organization', component: AddOrsearchOfOrganizationComponent},
  {path: 'list/donors', component: ListDonorsComponent},
  {path: 'new/donor', component: NewDonorComponent},
  {path: 'list/cases', component: ListCasesComponent},
  {path: 'new/case', component: NewCaseComponent},
  {path: 'join/requests', component: JoinRequestsComponent},
  {path: 'list/donations', component: DonationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
