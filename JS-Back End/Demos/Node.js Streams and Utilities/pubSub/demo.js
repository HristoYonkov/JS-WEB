const msgBroker = require('./msgBroker');

let firstUnsub = msgBroker.subscribe('welcome', (name, sName) => console.log(`Hi there! ${name} ` + sName));
let secondUnsub = msgBroker.subscribe('welcome', (name, sName) => console.log(`Hi there, Second time! ${name} ` + sName));
msgBroker.subscribe('goodBye', () => console.log('Goodbye!!!'));

firstUnsub();

msgBroker.publish('welcome', 'Pesho', 'Gosho');
msgBroker.publish('welcome', 'Pesho', 'Stamat');