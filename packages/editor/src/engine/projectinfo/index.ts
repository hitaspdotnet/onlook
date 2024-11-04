import { makeAutoObservable } from 'mobx';
import type { ComponentDescriptor } from '@onlook/types/adapters';

export class ProjectInfoManager {
    private projectComponents: ComponentDescriptor[];
    constructor() {
        makeAutoObservable(this);
        this.projectComponents = [];
    }

    get components() {
        return this.projectComponents;
    }

    set components(newComponents: ComponentDescriptor[]) {
        this.projectComponents = newComponents;
    }
}
