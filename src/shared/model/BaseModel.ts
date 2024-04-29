export interface BaseModel<Type> {
    totalItems: number;
    data: Type;
    page: number;
    size: number;
}
