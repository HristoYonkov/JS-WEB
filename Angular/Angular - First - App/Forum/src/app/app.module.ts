import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module";
import { AppComponent } from './app.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    declarations: [
        AppComponent,
        RecentPostsComponent,
        MainComponent,
    ],
    imports: [
        AuthModule,
        ThemeModule,
        AppRoutingModule,
        BrowserModule,
        CoreModule,
        HttpClientModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
