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
    ResultContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
