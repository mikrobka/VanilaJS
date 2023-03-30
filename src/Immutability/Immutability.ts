export type UserType = {
    name:string
    hair:number
    address:{city:string,house:number}
}

export type LaptopType = {
    title:string
}

export type UserWithLaptopType = UserType & {
    laptop:LaptopType
}

export type UserWithBooksType = UserType & {
    books:Array<string>
}

export type WithCompaniesType = UserType & {
   companies:Array<{id:number,title:string}>
}

export function moveUser(user:UserWithLaptopType,newCity:string){
   return {...user,address:{...user.address , city: newCity}}

}

export function updateLaptop(user:UserWithLaptopType,newLaptop:string){
    return {...user,laptop:{...user.laptop,title:newLaptop}}

}

export function superUpdatedUser(user:UserWithLaptopType,newLaptop:string,newCity:string,newHouse:number){
    return {...user,address:{...user.address,city:newCity,house:newHouse},laptop:{...user.laptop,title:newLaptop}}

}
export function addBookForUser(user:UserWithBooksType & UserWithLaptopType,newBook:Array<string>){
    return {...user,books:[...user.books,...newBook]}

}

export function replaceBookUser(user:UserWithBooksType & UserWithLaptopType,oldBook:string,newBook:string){
    return {...user,books:user.books.map(b => b === oldBook ?  newBook : b)}

}

export function removeBook(user:UserWithBooksType & UserWithLaptopType,removeBook:string){
    return {...user,books:user.books.filter(b => b !== removeBook)}

}

export function updateCompanies(user:UserWithBooksType & UserWithLaptopType & WithCompaniesType ,id:number,title:string){
    const newCompanies = {
        id:id,
        title:title
    }
    return {...user,companies: [...user.companies, newCompanies]}

}
export function updateCompaniesForUser(user:UserWithBooksType & UserWithLaptopType & WithCompaniesType ,id:number,title:string){
    return {...user,companies: [...user.companies].map(c => c.id === id ? {...c ,title:title} : c)}

}