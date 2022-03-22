import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/global/app.reducer';
import { metaReducers } from './store/global/meta-reducer';
import { appEffects } from './store/global/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ROUTER_STATE } from './store/router/router.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 45,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_STATE,
      routerState: RouterState.Minimal
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
