import React, {useEffect, useState} from 'react';
import {useGetDataQuery} from "../store/gantCart.api";
import {IResponse, IChart} from "../models/responseInterface";


const Calendar = (): JSX.Element => {
    const {data, isLoading, isError} = useGetDataQuery('data');

    const recursiveTaskhandler = (obj) => {

        while (obj?.sub.length) {
            // @ts-ignore
            return [].push(<li>{obj?.sub.length} {obj?.title}</li>).push(recursiveTaskhandler(obj?.sub));

        }
    }

    return (
        <div className="calendar">
            <h1 className="calendar__header">{data?.project} / {data?.period}</h1>
            <div className="table__header">Work item</div>
            <ul className="table__tasks">

            </ul>
        </div>
    );
};

export default Calendar;
