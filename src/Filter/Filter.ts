const ages = [18,20,14,100,34,23,19]

const predicate = (age:number) => {
    return  age > 90
}
const oldAges  = [100]

type CoursesType = {
    title:string
    price:number
}

const courses = [
    {title: 'css',price:110},
    {title: 'react',price:200},
    {title: 'html',price:320},
    {title: 'js',price:160}
]

const cheapCourses = (course:CoursesType) => {
    return course.price < 160;
}

const cheapPredicateCourse = [
    {title: 'css',price:110},
]