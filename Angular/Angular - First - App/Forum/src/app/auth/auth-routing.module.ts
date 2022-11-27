import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
        data: {
            title: 'Register'
        }
    },
    {
        path: 'auth/logout',
        component: LogoutComponent,
        data: {
            title: 'Logout'
        }
    },
    {
        path: 'auth/profile',
        component: ProfileComponent,
        data: {
            title: 'Profile'
        }
    }
];

// const sameRoutes: Routes = [
//     {
//         path: 'auth',
//         // ---- Guard friendly way !!!
//         children: [
//             {
//                 path: 'login',
//                 component: LoginComponent
//             },
//             {
//                 path: 'register',
//                 component: RegisterComponent
//             },
//             {
//                 path: 'logout',
//                 component: LogoutComponent
//             },
//             {
//                 path: 'profile',
//                 component: ProfileComponent
//             }
//         ]
//     }
// ];

export const AuthRoutingModule = RouterModule.forChild(routes);