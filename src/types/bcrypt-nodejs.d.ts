/** Declaration file generated by dts-gen */

export function compare(data: any, encrypted: any, callback: any): void;

export function compareSync(data: any, encrypted: any): any;

export function genSalt(rounds: any, callback: (err: any, salt: any)=>any): void;

export function genSaltSync(rounds: any): any;

export function getRounds(encrypted: any): any;

export function hash(data: any, salt: any, progress: any, hash: (err: any, salt: any)=>any): void;

export function hashSync(data: any, salt: any, progress: any): any;

