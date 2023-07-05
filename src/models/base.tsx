
// base result model
export interface BaseResult<T> {
    code: number;
    success: string;
    message: boolean;
    data?: T;
}

// audit model
export interface Audit {
    createDate?: Date;
    updatedDate?: Date;
    creatBy?: string;
    updateBy?: string;
    isDelete: boolean;
}

// map<string, T> model
export interface ObjStringT<T> {
    [key: string]: T
}