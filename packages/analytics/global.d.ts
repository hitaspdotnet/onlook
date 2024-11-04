declare interface Window {
    api: {
        send<T>(channel: string, args: T): void;
        on<T>(channel: string, func: (...args: T[]) => void): void;
        once<T>(channel: string, func: (...args: T[]) => void): void;
        invoke<T, P>(channel: string, ...args: T[]): Promise<P>;
        removeListener<T>(channel: string, listener: (...args: T[]) => void): void;
        removeAllListeners(channel: string): void;
    };
}