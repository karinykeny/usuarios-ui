import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'telephone',
})
export class TelephonePipe implements PipeTransform {
  transform(value) {
    value = value.charAt(0) != 0 ? "351" + value : " " + value;

    let newStr = "";
    let i = 0;

    for (; i < Math.floor(value.length / 3) - 1; i++) {
      newStr = newStr + value.substr(i * 3, 3) + " ";
    }

    return newStr + value.substr(i * 3);
  }

  // transform(value: string): string {
  //   let formattedTelephone = ''

  //   if (!value) {
  //     return formattedTelephone
  //   }

  //   formattedTelephone = value.toString().replace(/\D/g, '')

  //   if (value.length === 8) {
  //     return formattedTelephone.replace(/^(\d{4})?(\d{4})/, '$1-$2')
  //   }
  //   if (value.length === 9) {
  //     return formattedTelephone.replace(/^(\d{5})?(\d{4})/, '$1-$2')
  //   }
  //   if (value.length === 10) {
  //     return formattedTelephone.replace(/^(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3')
  //   }
  //   if (value.length === 11) {
  //     return formattedTelephone.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3')
  //   }
  //   if (value.length === 12) {
  //     return formattedTelephone.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4')
  //   }
  //   if (value.length === 13) {
  //     return formattedTelephone.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4')
  //   }

  //   return formattedTelephone
  //}
}
