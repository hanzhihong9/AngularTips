import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './exercise1/server/server.component';
import { MaponeComponent } from './exercise1/mapone/mapone.component';
import { FormsModule } from '@angular/forms';
import { ShowPostsComponent } from "./show-posts/show-posts.component";
import { MyInterceptor } from './httpInterceptor';

@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        MaponeComponent,
    ],
    providers: [
     {
        provide: HTTP_INTERCEPTORS,
        useClass: MyInterceptor

     }

    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ShowPostsComponent
    ]
})
export class AppModule { }
