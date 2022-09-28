const EventEmitter = require('events')

const eventEmitter = new EventEmitter();

// Into the new MODULE following code!!!

eventEmitter.on('sing', (songTitle) => {
    console.log(`${songTitle} - Lalalalal`);
});

eventEmitter.emit('sing', 'Nothing else matters!')