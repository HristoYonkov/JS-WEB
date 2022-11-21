import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';
import { UserDetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { UserResolver } from './user-details.resolver';
import { AuthGuard } from './user-details.guard';


@NgModule({
    declarations: [
        UserListComponent,
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'user/list',
                component: UserListComponent
            },
            {
                path: 'user/details/:id',
                resolve: { user: UserResolver },
                canActivate: [AuthGuard],
                component: UserDetailsComponent
            },
        ])
    ],
    // providers: [
    //     Test // { provide: Test, useClass: Test }
    // ],
    exports: [
        UserListComponent
    ]
})
export class UserModule {
    static forRoot(config: any): ModuleWithProviders<UserModule> {
        return {
            ngModule: UserModule,
            providers: [
                {
                    provide: 'test',
                    useValue: config,
                    multi: true
                }
            ]
        }
    }

    static forChild(config: any): ModuleWithProviders<UserModule> {
        return {
            ngModule: UserModule,
            providers: [
                {
                    provide: 'some aditional providers',
                    useValue: config,
                    multi: true
                }
            ]
        }
    }
}
