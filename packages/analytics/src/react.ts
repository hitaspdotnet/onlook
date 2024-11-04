import { MainChannels } from '@onlook/models/constants';
import { ipcRenderer } from 'electron';

export function sendAnalytics(event: string, data?: Record<string, any>) {
    ipcRenderer.send(MainChannels.SEND_ANALYTICS, '', { event, data });
}