import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyToString'
})
export class CurrencyToStringPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 1:
                return 'USD - US Dollar';
            case 2:
                return 'CNY - Chinese Yuan';
            case 3:
                return 'TRY - Turkish Lira';
            default:
                return 'Unknown Currency';
        }
    }
}
