import { DOM_IGNORE_TAGS, EditorAttributes } from '@onlook/constants';
import { finder } from '@onlook/utility/selector';
import { ulid } from '@onlook/utility/ulid';

export function getOrAssignUuid(el: HTMLElement): string {
    let id = el.getAttribute(EditorAttributes.DATA_ONLOOK_UNIQUE_ID);
    if (id) {
        return id;
    }

    id = ulid();
    el.setAttribute(EditorAttributes.DATA_ONLOOK_UNIQUE_ID, id);
    return id;
}

export function escapeSelector(selector: string) {
    return CSS.escape(selector);
}
export function querySelectorCommand(selector: string) {
    return `document.querySelector('${escapeSelector(selector)}')`;
}

export const getUniqueSelector = (el: HTMLElement, root?: Element | undefined): string => {
    let selector = el.tagName.toLowerCase();
    getOrAssignUuid(el);

    const onlookUniqueId = getOnlookUniqueSelector(el);
    if (onlookUniqueId) {
        return onlookUniqueId;
    }
    try {
        if (el.nodeType !== Node.ELEMENT_NODE) {
            return selector;
        }
        if (root) {
            selector = finder(el, { className: () => false, root });
        } else {
            selector = finder(el, { className: () => false });
        }
    } catch (e) {
        console.warn('Error creating selector ', e);
    }
    return selector;
};

export const getOnlookUniqueSelector = (el: HTMLElement): string => {
    return `[${EditorAttributes.DATA_ONLOOK_UNIQUE_ID}="${getOrAssignUuid(el)}"]`;
};

export function isValidHtmlElement(element: Element): boolean {
    return (
        element &&
        element instanceof Node &&
        element.nodeType === Node.ELEMENT_NODE &&
        !DOM_IGNORE_TAGS.includes(element.tagName) &&
        !element.hasAttribute(EditorAttributes.DATA_ONLOOK_IGNORE) &&
        (element as HTMLElement).style.display !== 'none'
    );
}

export function isOnlookInDoc(doc: Document): boolean {
    const attributeExists = doc.evaluate(
        '//*[@data-onlook-id]',
        doc,
        null,
        XPathResult.BOOLEAN_TYPE,
        null,
    ).booleanValue;
    return attributeExists;
}