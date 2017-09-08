import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CreateCustomerComponentComponent } from './create-customer-component/create-customer-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'EmployeeNo/1', pathMatch : 'full'},
  {path: 'create', component: CreateCustomerComponentComponent},
  {path: 'show', component: StoriesComponent, data: {storiesType: 'show'}},
  {path: 'item/:id', component: ItemDetailsComponent}
];

export const routing = RouterModule.forRoot(routes);