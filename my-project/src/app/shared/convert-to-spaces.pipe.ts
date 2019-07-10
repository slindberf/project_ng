import { Pipe } from '@angular/core';

@Pipe({ //Add Pipe Decorator to the class to define it as a pipe
    name: 'convertToSpaces' //name of the pipe used in the template convertToSpaces:'-'
})

export class ConvertToSpacesPipe {
    transform(value: string, character: string ): string { //transform method to transform a value and return it
        return value.replace(character, ' '); 
    }
}