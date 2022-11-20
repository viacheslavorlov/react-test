import React, {useEffect, useState} from 'react';
import {useGetDataQuery} from "../store/gantCart.api";


const Calendar = (): JSX.Element => {
    const {data, isLoading, isError} = useGetDataQuery('')
    return (
        <div>
            Hello!
        </div>
    );
};

export default Calendar;
