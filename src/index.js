let teens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
let tens = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

let decade = Math.floor(number / 10);
let hundreds = Math.floor(number / 100);



module.exports = function toReadable (number) {

// от 0 до 19
if (number >=0 && number <20) {
    return teens[number]
    };

 // от 20 до 99
if (number >= 20 && number < 100) {
    if (number % 10 != 0) {
        return `${tens[decade]} ${teens[number % 10]}`};
    }
    else {
        return tens[decade];
    };

// от 100 до 999
if (number > 99 && number < 1000) {
    let k1 = Math.floor(number / 100); //сколько сотен в числе
    let k2 = Math.floor(number % 100 / 10);
    let k3 = Math.floor(number % 10); //сколько единиц в числе

    if (k2 != 0 && k3 != 0) {
        if (k2 == 1) {
            return `${teens[k1]} ${tens[0]} ${teens[[k3 + 10]]}`
        }
        else {
            return `${a1[k1]} ${a2[0]} ${a2[k2]} ${a1[k3]}`;
        };
    };
    if (k2 == 0 && k3 != 0) { return `${a1[k1]} ${a2[0]} ${a1[k3]}` };
    if (k2 != 0 && k3 == 0) { return `${a1[k1]} ${a2[0]} ${a2[k2]}` };
    if (k2 == 0 && k3 == 0) { return `${a1[k1]} ${a2[0]}` };
}
}
