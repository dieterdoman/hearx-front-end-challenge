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

const routes: Routes = [
  { path: '', component: StartContainerComponent },
  { path: 'download', component: DownloadContainerComponent },
  { path: 'details', component: DetailsContainerComponent },
  { path: 'test', component: TestContainerComponent },
  { path: 'results', component: ResultContainerComponent },
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
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppModule { }
