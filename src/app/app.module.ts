import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import localePt from "@angular/common/locales/pt";
import localeJa from "@angular/common/locales/ja";
import { LocalDatePipe } from "./local-date.pipe";

registerLocaleData(localeEs);
registerLocaleData(localePt);
registerLocaleData(localeJa);

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LocalDatePipe],
  bootstrap: [AppComponent],
  providers: [
    // { provide: LOCALE_ID, useValue: "es-ES" },
    // { provide: LOCALE_ID, useValue: "pt-PT" },
    // { provide: LOCALE_ID, useValue: "ja-JP" }
  ]
})
export class AppModule {}
