import React from 'react';
import {useGetDataQuery} from "../store/gantCart.api";
import {IChart} from "../models/responseInterface";
import {Gantt, Task, ViewMode} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const Calendar = (): JSX.Element => {
        const {data, isLoading, isError, isSuccess} = useGetDataQuery('data');
        // const {chart, project, period}: IResponse = data;
        // console.log(data?.chart.sub)
        let array: Task[] = [];
    //     start: new Date(2020, 1, 1),
    //     end: new Date(2020, 1, 2),
    //     name: 'Idea',
    //     id: 'Task 0',
    //     type:'task',
    //     progress: 45,
    //     isDisabled: true,
    //     styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        const taskhandler = (obj: IChart) => {
            if (!obj) {
                return;
            }
            console.log(obj?.title)
            const dependencies = (obj.id - 1).toString();

            array.push({
                start: new Date(obj.period_start),
                end: new Date(obj.period_end),
                name: obj.title,
                id: 'Task ' + obj.id.toString(),
                type: obj.title === data?.project ? 'project' : 'task',
                progress: 0,
                isDisabled: false,
                hideChildren: true,
                project: data?.project,
                // dependencies: [dependencies],
                styles: {
                    progressColor: '#ffbb54',
                    progressSelectedColor: '#ff9e0d'
                }
            })
            for (let i = 0; i < obj.sub?.length!; i++) {
                taskhandler(obj?.sub![i])
            }

        }
        taskhandler(data?.chart!)

        console.log(array)
        return (
            <div className="calendar">
                <h1 className="calendar__header">{data?.project} / {data?.period}</h1>
                <div className="table__header">Work item</div>
                {isSuccess && <Gantt tasks={array}
                                     viewMode={ViewMode.Day}
                                     columnWidth={32}
                                     rowHeight={40}
                                     locale={'en'}
                                     headerHeight={48}
                                     preStepsCount={1}
                                     fontSize={'14px'}
                                     arrowColor={'red'}
                                     onExpanderClick={(task: Task) => task.isDisabled = true}
                                     />}

            </div>
        );
    }
;

export default Calendar;
