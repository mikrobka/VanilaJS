import exp from "constants";

test("should be old men older then 90", () => {
    const ages = [18, 20, 14, 100, 34, 23, 19]
    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test("should take courses cheaper 160", () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'react', price: 200},
        {title: 'html', price: 320},
        {title: 'js', price: 150}
    ]

    // const cheapPredicate = (course: CoursesType) => {
    //     return course.price < 160;
    // }

    const cheapCourses = courses.filter(course => course.price < 160)


    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("css");

})


test("only complyted tasks", () => {
    const tasks = [
        {id:1,title:'Bread', isDone:false},
        {id:2,title:'Salt', isDone:true},
        {id:3,title:'Milk', isDone:true},
        {id:4,title:'Meat', isDone:true}
    ]

    const ComplytedTask = tasks.filter(t => t.isDone === true)

    expect(ComplytedTask.length).toBe(3)

})