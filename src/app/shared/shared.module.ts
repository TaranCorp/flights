import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalPipe } from './pipes/capital.pipe';
import { ExpandListComponent } from './components/expand-list/expand-list.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
export { CapitalFormControl } from './forms/controls/capital-form-control';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { NavigationComponent } from './components/navigation/navigation.component';



@NgModule({
  declarations: [
    CapitalPipe,
    ExpandListComponent,
    RecommendationComponent,
    AnimatedButtonComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    CapitalPipe,
    RecommendationComponent,
    AnimatedButtonComponent,
    NavigationComponent,
    ExpandListComponent
  ]
})
export class SharedModule { }
