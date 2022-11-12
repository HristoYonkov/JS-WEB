// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//     enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//     .catch(err => console.error(err));


// Monkey Patching ------------------------------------------------------------
// const _setInterval = window.setInterval;
// (window as any).setInterval = function (...args: any[]): number {
//     console.log('setInterval was called', args);
//     return _setInterval.apply(this, args as any) as unknown as number;
// } 


interface ClassProvider {
    provide: any;
    useClass: any;
}

interface ValueProvider {
    provide: any;
    useValue: any;
}

type Provider = ClassProvider | ValueProvider;

const injector = {
    collection: new Map(),
    instances: new Map(),
    provide(provider: Provider) {
        this.collection.set(provider.provide, provider)
    },
    get(key: any, defaultValue?: any): any {
        const provider = this.collection.get(key) as Provider
        if (!provider) {
            if (defaultValue) { return defaultValue }
            throw new Error('Value not found in injector')
        }
        if ((provider as ValueProvider).useValue) {
            return (provider as ValueProvider).useValue
        }

        if ((provider as ClassProvider).useClass) {
            let instance = this.instances.get(provider.provide)
            if (instance) { return instance }
            instance = new (provider as ClassProvider).useClass(this)
            this.instances.set(provider.provide, instance);
            return instance
        }
    }
};


type Injector = typeof injector
const amount = Symbol('Amount')
const state = Symbol('State')

class Wallet {
    private amount: number
    constructor(injector: Injector) {
        this.amount = injector.get(amount, 200)
        const _state = injector.get(state)
        _state['someProp'] = 100;
    }
}

class Person {
    wallet: Wallet
    constructor(injector: Injector) {
        this.wallet = injector.get(Wallet)
    }
}

class Empoyee {
    wallet: Wallet;
    constructor(injector: Injector) {
        this.wallet = injector.get(Wallet)
        const _state = injector.get(state)
        _state['someProp']++;
    }

}

injector.provide({ provide: Wallet, useClass: Wallet })
injector.provide({ provide: amount, useValue: 2000 })
injector.provide({provide: state, useValue: {}})

console.log(injector);

const w = new Wallet(injector)
console.log(w);
console.log(injector);

const p = new Person(injector)
console.log(p);

const e = new Empoyee(injector)
console.log(e);
