export interface Sub4 {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
}

export interface Sub3 {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
    sub: Sub4[];
}

export interface Sub2 {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
    sub: Sub3[];
}

export interface Sub {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
    sub: Sub2[];
}

export interface Chart {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
    sub: Sub[];
}

export interface IResponse {
    project: string;
    period: string;
    chart: Chart;
}


