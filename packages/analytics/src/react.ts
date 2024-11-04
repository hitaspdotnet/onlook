import { MainChannels } from '@onlook/constants';

export function sendAnalytics(event: string, data?: Record<string, any>) {
    window.api.send(MainChannels.SEND_ANALYTICS, { event, data });
}