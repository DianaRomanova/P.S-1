
import React from "react";

export type TaskType={
    taskId: number,
    title: string,
    isDone: boolean
}

type PropsType={
    title: string
    tasks: Array<TaskType>
}

export function Title(props:PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
<ul>
    {props.tasks.map((el)=>{
        return (
            <li><input type='checkbox' checked={el.isDone}/><span>{el.title}</span></li>
        )

    })}


</ul>
        </div>)

}
