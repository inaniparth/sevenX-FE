import { growlMessageType } from "./growl-constants";

export interface GrowlComponentDataInterface {
    message: string;
    messageType: growlMessageType;
    messageTitle?: string;
}