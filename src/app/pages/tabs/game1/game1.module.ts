import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game1PageRoutingModule } from './game1-routing.module';

import { Game1Page } from './game1.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SwipeCategoriesComponent } from 'src/app/components/swipe-categories/swipe-categories.component';
import { QuestionCardComponent } from 'src/app/components/question-card/question-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game1PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Game1Page, SwipeCategoriesComponent, QuestionCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Game1PageModule {}
