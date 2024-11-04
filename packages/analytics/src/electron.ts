import { MainChannels } from '@onlook/models/constants';
import { ipcMain } from 'electron';

export function sendAnalytics(event: string, data?: Record<string, any>) {
    ipcMain.emit(MainChannels.SEND_ANALYTICS, '', { event, data });
}


