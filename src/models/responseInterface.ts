export interface IChart {
    id: number;
    title: string;
    period_start: string;
    period_end: string;
    sub?: Array<IChart>;

}

export interface IResponse {
    project: string;
    period: string;
    chart: IChart;
}


