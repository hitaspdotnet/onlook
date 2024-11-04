import type { ChatMessageContext, UserContentBlock } from '@onlook/models/chat';
import { ChatMessageRole, ChatMessageType, type UserChatMessage } from '@onlook/models/chat';
import type { CoreUserMessage } from 'ai';
import { ulid } from '@onlook/utility/ulid';
import { getFormattedUserPrompt, getStrippedContext } from '../prompt';

export class UserChatMessageImpl implements UserChatMessage {
    id: string;
    type: ChatMessageType.USER = ChatMessageType.USER;
    role: ChatMessageRole.USER = ChatMessageRole.USER;
    content: UserContentBlock[];
    context: ChatMessageContext[] = [];

    constructor(content: string, context: ChatMessageContext[] = []) {
        this.id = ulid();
        this.content = [{ type: 'text', text: content }];
        this.context = context;
    }

    getStringContent(): string {
        return this.content.map((c) => c.text).join('\n');
    }

    toPreviousMessage(): CoreUserMessage {
        const strippedContext: ChatMessageContext[] = getStrippedContext(this.context);
        return {
            role: this.role,
            content: getFormattedUserPrompt(this.getStringContent(), strippedContext),
        };
    }

    toCurrentMessage(): CoreUserMessage {
        return {
            role: this.role,
            content: getFormattedUserPrompt(this.getStringContent(), this.context),
        };
    }
}
