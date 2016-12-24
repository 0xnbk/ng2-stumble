import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignListComponent, CampaignFormComponent, CampaignDetailComponent } from './campaign/index';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'campaign', component: CampaignListComponent },
  { path: 'campaign/:id', component: CampaignDetailComponent },
  { path: 'campaign-add', component: CampaignFormComponent },
  { path: 'campaign-edit/:id', component: CampaignFormComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);