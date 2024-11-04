export function timeSince(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        console.error('Invalid date provided');
        return 'Invalid date';
    }

    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + 'y';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + 'm';
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + 'd';
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + 'h';
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + 'm';
    }
    return Math.floor(seconds) + 's';
}