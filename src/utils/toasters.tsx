import {toast} from 'react-toastify';

const customId = 'Network error';

export function ErrorToast(e: any) {
    let message = e.response?.data?.message ? e.response.data.message : 'Something went wrong';

    if (Array.isArray(message)) {
        message = e.response?.data?.message[0];
    }

    toast.error(message, {
        toastId: customId,
    });
}

export function SuccessToast(props: string) {
    toast.success(props);
}

export function WarningToast(props: string) {
    toast.warning(props);
}
