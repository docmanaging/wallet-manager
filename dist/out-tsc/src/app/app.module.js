import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from "ng2-file-upload";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { AppConstantsComponent } from './app-constants/app-constants.component';
import { WalletBodyComponent } from './wallet-body/wallet-body.component';
import { Clientreg2Component } from './clientreg2/clientreg2.component';
import { LoginComponent } from './login/login.component';
import { ClientFileUploadComponent } from './client-file-upload/client-file-upload.component';
import { UserRegComponent } from './user-reg/user-reg.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                SelfRegistrationComponent,
                WalletHeaderComponent,
                WalletFooterComponent,
                ClientRegComponent,
                AppConstantsComponent,
                WalletBodyComponent,
                Clientreg2Component,
                LoginComponent,
                ClientFileUploadComponent,
                UserRegComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                ReactiveFormsModule,
                FormlyModule.forRoot(),
                FormlyBootstrapModule,
                HttpClientModule,
                FileUploadModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: '/Main', pathMatch: 'full' },
                    { path: 'Dash', component: AppComponent },
                    { path: 'Main', component: WalletBodyComponent },
                    { path: 'Self', component: SelfRegistrationComponent },
                    { path: 'ClientReg', component: ClientRegComponent },
                    { path: 'ClientReg2', component: Clientreg2Component },
                    { path: 'Login', component: LoginComponent },
                    { path: 'FileUpload', component: ClientFileUploadComponent },
                    { path: 'UserReg', component: UserRegComponent },
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map