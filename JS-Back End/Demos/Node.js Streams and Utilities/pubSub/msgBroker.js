const subscribers = {};

// addEventListener
exports.subscribe = (eventType, callback) => {
    if (!subscribers[eventType]) {
        subscribers[eventType] = [];
    }

    subscribers[eventType].push(callback);

    return () => {
        subscribers[eventType] = subscribers[eventType].filter(f => f !== callback)
    }
}


// Emit, Trigger
exports.publish = (eventType, ...params) => {
    subscribers[eventType].forEach(cb => cb(...params));
}