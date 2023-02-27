export type MapType = {
    name:string
    age:number
}

const people:Array<MapType> = [
    {name:"Kolya Petrov",age:33},
    {name:"Sawa Ivanov",age:13},
    {name:"Katya Sizova",age:45},
    {name:"Liza Bobkova",age:18},
    {name:"Sveta Paramonova",age:27}
]

const transformator = (man:MapType) =>{
        return {
            stack:["css,html","js","tdd","react"],
            firstName:man.name.split(" ")[0],
            lastName:man.name.split(" ")[1]
        }
}




const dev = [
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Kolya",lastName:"Petrov"
    },
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Sawa",lastName:"Ivanov"
    },
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Katya",lastName:"Sizova"
    },
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Liza",lastName:"Bobkova"
    },
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Sveta",lastName:"Paramonova"
    },
]

const dev1 = people.map(transformator)
const dev2 = people.map((man)=>({
        stack:["css,html","js","tdd","react"],
        firstName:man.name.split(" ")[0],
        lastName:man.name.split(" ")[1]
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welocom to work`)