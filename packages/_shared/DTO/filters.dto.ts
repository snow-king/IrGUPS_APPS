import {SelectDto} from "./utils.dto";

interface DocType {
    id: number,
    name: string,
    short_name: string,
    site_type: number,
    name_template: string,
    meta_tag: string | null,
    all_filials: number | null,
}

export interface DocumentsFilters {
    year: Array<SelectDto>,
    month: Array<SelectDto>,
    status: Array<SelectDto>,
    type: Array<SelectDto>,
    departments: Array<SelectDto>
}
export interface DocumentsFilter {
    year: SelectDto,
    month: SelectDto,
    status:SelectDto,
    type:SelectDto,
    departments: SelectDto
}
export interface DocStatus {
    id: number,
    name: string,
}
