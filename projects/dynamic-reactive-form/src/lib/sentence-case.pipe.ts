import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sentenceCase', standalone: true})
export class SentenceCasePipe implements PipeTransform {
    transform(value: string): string {
        /**
         * Convert camelCast to Sentence case
         * (capitalize first word, convert subsequent caps to spaces)
         */
        const input = value || '';
        const result = input.replace( /([A-Z])/g, ' $1' );
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
}
