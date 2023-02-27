type manType ={
    name:string
    age:number
    lessons:Array<{title:string}>
}
let props:manType;
beforeEach(()=>{
    props = {
        name:"Andrey",
        age:21,
        lessons:[{title:"1"},{title:"2"}]
    }
})
test("", () => {

    const {name,age} = props

    expect(age).toBe(21)
})

