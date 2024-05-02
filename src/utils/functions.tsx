import moment from 'moment';
import {IFilter, IFilterComponentProps} from '../shared/model/Filter';
export function refreshPage(){
    window.location.reload();
}

export const formatDate = (date?: string) => {
    return moment(date)?.format('DD.MM.YYYY.');
};

// Function to construct filter string based on an array of filter objects
export const constructFilterString = (filters: IFilter[]): string => {
    if (!filters || !Array.isArray(filters) || filters.length === 0) {
        return ''; // Return empty string if filters array is invalid or empty
    }

    // Initialize an array to hold valid filter parts
    const filterParts: string[] = [];

    // Iterate over filter objects and construct filter string for valid elements
    filters.forEach((filter) => {
        const { property, rule, value } = filter;

        // Check if value is not empty or undefined
        if (value !== '' && value !== undefined) {
            // Construct part of the filter string
            const filterPart = `${property}:${rule}:${value}`;

            // Push filter part into array
            filterParts.push(filterPart);
        }
    });

    // Join filter parts with a delimiter (e.g., comma) to form the final filter string
    return filterParts.join(',');
};
