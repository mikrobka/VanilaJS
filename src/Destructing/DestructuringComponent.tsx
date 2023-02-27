import React from 'react';

type PropsType = {
    title:string
    man:manType

}
type manType ={
    name:string
    age:number
    lessons:Array<{title:string}>
}

export const DestructuringComponent:React.FC<PropsType> = ({title,man}) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>
    );
};

