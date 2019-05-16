import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatChipsModule, MatExpansionModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatDialogModule, MatTabsModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      MatStepperModule,
      MatInputModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatChipsModule,
      MatExpansionModule,
      MatIconModule,
      MatSelectModule,
      MatCheckboxModule,
      MatDialogModule,
      MatCardModule,
      MatTabsModule,
      MatGridListModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
  ],
  exports: [
      CommonModule,
      MatStepperModule,
      MatInputModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatChipsModule,
      MatExpansionModule,
      MatIconModule,
      MatSelectModule,
      MatCheckboxModule,
      MatDialogModule,
      MatCardModule,
      MatTabsModule,
      MatGridListModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
    ]
})
export class AppMaterialModule { }