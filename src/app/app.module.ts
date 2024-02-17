import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { CreateService } from './services/create/create.service';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    AuthlayoutComponent,
  ],
  imports: 
  [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    AppRoutingModule, 
    NgxMapLibreGLModule,
    provideFirebaseApp(() => 
    initializeApp({"projectId":"lanesdrivingschool-ba107","appId":"1:499280610208:web:dfc13661360a2029f99ac5","storageBucket":"lanesdrivingschool-ba107.appspot.com",
    "apiKey":"AIzaSyCiADsvEnNlG6iOVi0JagfolEnICFQly2w","authDomain":"lanesdrivingschool-ba107.firebaseapp.com","messagingSenderId":"499280610208",
    "measurementId":"G-PB8QRY83S0"})), 
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"lanesdrivingschool-ba107","appId":"1:499280610208:web:dfc13661360a2029f99ac5","storageBucket":"lanesdrivingschool-ba107.appspot.com","apiKey":"AIzaSyCiADsvEnNlG6iOVi0JagfolEnICFQly2w","authDomain":"lanesdrivingschool-ba107.firebaseapp.com","messagingSenderId":"499280610208","measurementId":"G-PB8QRY83S0"})), provideFirestore(() => getFirestore())
  ],
  providers: [provideClientHydration(), AuthService, CreateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
