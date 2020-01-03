import { toast } from 'react-toastify';
export const SuccessfullToast = (info) => {
    toast.success(info, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export const ErrorToast = (info) => {
    toast.error(info, {
        position: toast.POSITION.TOP_RIGHT
    });
}
export const RemoveInternalSpaces = (sentence) => {
    sentence=sentence.replace(/\s/g, "");
    return sentence[0].toLowerCase() + sentence.slice(1);
}