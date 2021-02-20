import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "localDate"
})
export class LocalDatePipe implements PipeTransform {
  transform(
    date: Date,
    style: string,
    locale: string,
    timezone: string
  ): string {
    let options = {
      dateStyle: style,
      timeStyle: style,
      timeZone: timezone
    };
    return date.toLocaleString(locale, options);
  }
}
