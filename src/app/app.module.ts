import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './views/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AbonadoComponent } from './abonado/abonado.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    
  ],
  exports:[MatDialogModule],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AbonadoComponent
  ],
  entryComponents:[AbonadoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
