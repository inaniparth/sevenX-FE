import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartupRegistrationsComponent } from "./startup-registrations.component";

export const mainRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: StartupRegistrationsComponent
            }
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