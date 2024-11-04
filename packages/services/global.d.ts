declare interface Window {
    api: {
        send<T>(channel: string, args: T);
        on<T>(channel: string, func: (...args: T[]) => void);
        once<T>(channel: string, func: (...args: T[]) => void);
        invoke<T, P>(channel: string, ...args: T[]): Promise<P>;
        removeListener<T>(channel: string, listener: (...args: T[]) => void);
        removeAllListeners(channel: string);
    };
}