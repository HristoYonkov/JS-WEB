import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Test } from '../test';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule
    ],
    // providers: [
    //     Test // { provide: Test, useClass: Test }
    // ],
    exports: [
        ListComponent
    ]
})
export class UserModule {
    static forRoot(config: any): ModuleWithProviders<UserModule> {
        return {
            ngModule: UserModule,
            providers: [
                {
                    provide: 'test',
                    useValue: config
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
                    useValue: config
                }
            ]
        }
    }
}
