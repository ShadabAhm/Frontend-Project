import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PredictionModelComponent } from './prediction-model/prediction-model.component';
import { FeaturePlotComponent } from './feature-plot/feature-plot.component';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/auth.guard';
import { ProductTableComponent } from './product-table/product-table.component';
import { RegisterComponent } from './register/register.component';
import { DigitalEkycComponent } from './digital-ekyc/digital-ekyc.component';
import { EkycResultComponent } from './ekyc-result/ekyc-result.component';

export const routes: Routes = [
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'sidebar', component: SidebarComponent, canActivate:[authGuard]},
    {path: 'header', component: HeaderComponent, canActivate:[authGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate:[authGuard]},
    {path: 'prediction-model', component: PredictionModelComponent, canActivate:[authGuard] },
    {path:'feature-plot', component:FeaturePlotComponent, canActivate:[authGuard]},
    {path: 'performance-metrics', component: PerformanceMetricsComponent, canActivate:[authGuard]},
    {path: 'product-table', component: ProductTableComponent, canActivate:[authGuard]},
    {path: 'ekyc', component:DigitalEkycComponent},
    {path: 'ekyc-result', component: EkycResultComponent}
    
];
