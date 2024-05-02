export interface IFilter {
    property: string;
    rule: string;
    value: string | undefined;
}

export interface IFilterComponentProps {
    filters: IFilter[];
}
