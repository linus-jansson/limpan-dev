// https://stackoverflow.com/questions/1484506/random-color-generator#1484514
// https://stackoverflow.com/questions/53247687/set-a-minimum-value-for-randomly-generated-numbers

/* Random integer between @param min and @param max */
export const randomValueInt = (min: number, max: number) => Math.floor((Math.random() * (max - min + 1)) + min);
// Random hex generator with min, max and padding
const randomColorHex = (min:number = 0x000000, max:number = 0xFFFFFF) => '#' + Math.abs(randomValueInt(min, max)).toString(16).padStart(6, '0');

export function randomCSSGradient(min:number = 0x000000, max:number = 0xFFFFFF) : string {
    return `linear-gradient(${randomValueInt(0, 360)}deg, 
        ${randomColorHex(min, max)} 0%, 
        ${randomColorHex(min, max)} ${randomValueInt(50, 75)}%
    )`;    
}