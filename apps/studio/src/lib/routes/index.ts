import { makeAutoObservable } from 'mobx';
import { sendAnalytics } from '@onlook/analytics/react';

export enum Route {
    EDITOR = 'editor',
    SIGN_IN = 'signin',
    PROJECTS = 'projects',
}

export class RouteManager {
    private currentRoute: Route = Route.PROJECTS;

    constructor() {
        makeAutoObservable(this);
    }

    get route() {
        return this.currentRoute;
    }

    set route(newRoute: Route) {
        if (newRoute === this.currentRoute) {
            return;
        }
        this.currentRoute = newRoute;
        sendAnalytics('navigate', { route: newRoute });
    }
}
