import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartupRegistrationsComponent } from "./startup-registrations.component";
// import { StartupRegistrationsFormComponent } from "./startup-registrations-form/startup-registrations-form.component";

export const mainRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: StartupRegistrationsComponent
            },
            // {
            //     path: 'forms',
            //     component: StartupRegistrationsFormComponent
            // }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: []
})
export class StartupRegistrationsRoutingModule { }