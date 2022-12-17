import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './components/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './components/store/effects';
import { NewUserComponent } from './components/users/new-user/new-user.component';

@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class MainModule {}
