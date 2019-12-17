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
