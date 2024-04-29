import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../pages/enventry-management.module').then((m) => m.EnventryManagementModule),
      }
    ]
  }
];

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatToolbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  ]

})
export class LayoutModule { }
