import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { SharedModule } from "../shared/shared.module";
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { MainComponent } from './main/main.component'
import { RecentPostsComponent } from './recent-posts/recent-posts.component'


@NgModule({
    declarations: [
      ThemeListComponent,
      NewThemeComponent,
      ThemeDetailsComponent,
      MainComponent,
      RecentPostsComponent
    ],
    exports: [
      ThemeListComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      ThemeRoutingModule
    ]
})
export class ThemeModule { }
