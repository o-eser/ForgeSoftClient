import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyToStringPipe } from './currencyToString.pipe';

@NgModule({
    declarations: [CurrencyToStringPipe],
    imports: [CommonModule],
    exports: [CurrencyToStringPipe] // Pipe'i dışa aktarın, böylece diğer bileşenlerde kullanabilirsiniz.
})
export class PipesModule { }
