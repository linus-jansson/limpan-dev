const randomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomColorHex = (min:number, max:number) => `#${randomValue(min, max).toString(16)}`;
const randomDegree = () => `${Math.floor(Math.random()*360)}deg`;

export function randomCSSGradient(min:number, max:number) : string {
    // max min -> random * (max - min + 1) + min
    // https://stackoverflow.com/questions/53247687/set-a-minimum-value-for-randomly-generated-numbers
    const randomPercentage = (min = 20) => `${Math.floor(Math.random() * (100 - min + 1) + min)}%`;

    const color1 = randomColorHex(min, max);
    // const color2 = randomColorHex(min, max);
    // const middle = randomPercentage();
    const color3 = randomColorHex(min, max);
    const to = `${randomValue(50, 75)}%`;

    const gradient = `linear-gradient(${randomDegree()}, ${color1} 0%, ${color3} ${to})`;    

    console.log(gradient)

    return gradient

}