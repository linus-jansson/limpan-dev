
const randomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// https://stackoverflow.com/questions/1484506/random-color-generator#1484514
const randomColorHex = (min:number = 0, max:number = 16777215) => '#' + (Math.abs(Math.random()*0xFFFFFF00<<0)).toString(16).padStart(8, '0');
// const randomColorHex = (min:number = 0, max:number = 16777215) => `#${(randomValue(min, max)).toString(16).padStart(6, '0')}`;
const randomDegree = () => `${Math.floor(Math.random()*360)}deg`;

export function randomCSSGradient(min:number, max:number) : string {
    // max min -> random * (max - min + 1) + min
    // https://stackoverflow.com/questions/53247687/set-a-minimum-value-for-randomly-generated-numbers
    const randomPercentage = (min = 20) => `${Math.floor(Math.random() * (100 - min + 1) + min)}%`;
    
    console.log('#'+(Math.random()*0xFFFFFF<<0).toString(16))

    const color1 = randomColorHex(min, max);
    const color3 = randomColorHex(min, max);
    const to = `${randomValue(50, 75)}%`;
    
    const gradient = `linear-gradient(${randomDegree()}, ${color1} 0%, ${color3} ${to})`;    
    console.log(gradient)
    return gradient
    
}