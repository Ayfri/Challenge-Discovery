Object.freeze(virus19);
const vaccine = JSON.parse(JSON.stringify(antivirus));
Object.seal(vaccine);
Object.freeze(vaccine);
