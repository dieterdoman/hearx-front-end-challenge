import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DownloadContainerComponent } from './download-container/download-container.component';
import { StartContainerComponent } from './start-container/start-container.component';
import { ButtonComponent } from './button/button.component';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { TestContainerComponent } from './test-container/test-container.component';
import { ResultContainerComponent } from './result-container/result-container.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import {FlowGuard} from './flowGuard';
import { ContainerComponent } from './container/container.component';
import { HeadingComponent } from './heading/heading.component';

const routes: Routes = [
  { path: '', component: StartContainerComponent },
  { path: 'download', component: DownloadContainerComponent, canActivate: [FlowGuard] },
  { path: 'details', component: DetailsContainerComponent, canActivate: [FlowGuard] },
  { path: 'test', component: TestContainerComponent, canActivate: [FlowGuard] },
  { path: 'results', component: ResultContainerComponent, canActivate: [FlowGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    DownloadContainerComponent,
    StartContainerComponent,
    ButtonComponent,
    DetailsContainerComponent,
    TestContainerComponent,
    ResultContainerComponent,
    UserComponent,
    ContainerComponent,
    HeadingComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [FlowGuard],
  bootstrap: [AppComponent],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppModule { }
