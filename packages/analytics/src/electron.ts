import { MainChannels } from '@onlook/constants';
import { ipcMain } from 'electron';

export function sendAnalytics(event: string, data?: Record<string, any>) {
    ipcMain.emit(MainChannels.SEND_ANALYTICS, '', { event, data });
}


