import moment from 'moment';
export function refreshPage(){
    window.location.reload();
}

export const formatDate = (date?: string) => {
    return moment(date)?.format('DD.MM.YYYY.');
};
