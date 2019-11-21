import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DownloadContainerComponent } from './download-container/download-container.component';
import { StartContainerComponent } from './start-container/start-container.component';

const routes: Routes = [
  { path: '', component: StartContainerComponent },
  { path: 'download', component: DownloadContainerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DownloadContainerComponent,
    StartContainerComponent
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
