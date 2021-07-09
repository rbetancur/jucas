import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from '@core/services/core.service';
import { CoreComponent } from '@core/components/core.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CoreComponent],
  providers: [CoreService]
})
export class CoreModule {
}
