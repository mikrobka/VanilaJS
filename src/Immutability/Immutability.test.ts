import {
    addBookForUser,
    moveUser, removeBook, replaceBookUser,
    superUpdatedUser,
    updateCompanies, updateCompaniesForUser,
    updateLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./Immutability";

function hairdresser(u: UserType, power: number) {
    const copy = {
        ...u
    }
    copy.hair = u.hair / power
    return copy
}

test("referens type test", () => {
    let user: UserType = {
        name: "Andrey",
        hair: 40,
        address: {city: "Moscow",house:2}
    }
    const cutUser = hairdresser(user, 5)

    expect(user.hair).toBe(40);
    expect(cutUser).toBe(8);

})



test("change address test", () => {
    let user: UserWithLaptopType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Moscow",
            house:2
        },
        laptop: {
            title: "Macbook"
        }
    }
    const movedUser = moveUser(user,"New York")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address.city).toBe("Moscow")

})

test("update laptop to new macbook", () => {
    let user: UserWithLaptopType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Moscow",
            house:2
        },
        laptop: {
            title: "Acer"
        }
    }
    const updatedUser = updateLaptop(user,"Macbook16")

    expect(user).not.toBe(updatedUser)
    expect(user.laptop).not.toBe(updatedUser.laptop)
    expect(user.laptop.title).toBe("Acer")
    expect(updatedUser.laptop.title).toBe("Macbook16")

})

test("Super update user ", () => {
    let user: UserWithLaptopType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Dubna",
            house:5
        },
        laptop: {
            title: "Acer"
        }
    }
    const superUpdateUser = superUpdatedUser(user,"Macbook","Moscow",21)

    expect(user).not.toBe(superUpdateUser)
    expect(user.laptop).not.toBe(superUpdateUser.laptop)
    expect(user.laptop.title).toBe("Acer")
    expect(superUpdateUser.laptop.title).toBe("Macbook")
    expect(superUpdateUser.address.city).toBe("Moscow")
    expect(user.address.city).toBe("Dubna")


})

test("update users book ", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Dubna",
            house:5
        },
        laptop: {
            title: "Acer"
        },
        books:["html", "css", "js"]
    }
    const userWithNewBooks = addBookForUser(user,["React","Jango"])

    expect(user).not.toBe(userWithNewBooks)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[3]).toEqual("React")
    expect(userWithNewBooks.books.length).toBe(5)

})

test("replace users book ", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Dubna",
            house:5
        },
        laptop: {
            title: "Acer"
        },
        books:["html", "css", "js"]
    }
    const userWithNewBooks = replaceBookUser(user,"js","ts")

    expect(user).not.toBe(userWithNewBooks)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[2]).toBe("ts")
    expect(userWithNewBooks.books.length).toBe(3)

})

test("remove users book ", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Dubna",
            house:5
        },
        laptop: {
            title: "Acer"
        },
        books:["html", "css", "js"]
    }
    const userWithNewBooks = removeBook(user,"js")

    expect(user).not.toBe(userWithNewBooks)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[2]).toBe(undefined)
    expect(userWithNewBooks.books.length).toBe(2)

})

test("Add Companies  ", () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Dubna",
            house:5
        },
        laptop: {
            title: "Acer"
        },
        books:["html", "css", "js"],
        companies:[
            {id:1,title:"Apple"},
            {id:2,title:"Microsoft"},
            {id:3,title:"Epam"},
        ]
    }
    const userWithNewCompanies = updateCompanies(user,4,"Google")

    expect(user).not.toBe(userWithNewCompanies)
    expect(user.companies).not.toBe(userWithNewCompanies.companies)
    expect(userWithNewCompanies.companies[3].title).toBe("Google")
    expect(userWithNewCompanies.companies.length).toBe(4)

})

test("Change companies ", () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: "Andrey",
        hair: 40,
        address: {
            city: "Dubna",
            house:5
        },
        laptop: {
            title: "Acer"
        },
        books:["html", "css", "js"],
        companies:[
            {id:1,title:"Apple"},
            {id:2,title:"Microsoft"},
            {id:3,title:"Epam"},
        ]
    }
    const userWithUpdateCompanies = updateCompaniesForUser(user,3,"Google")

    expect(user).not.toBe(userWithUpdateCompanies)
    expect(user.companies).not.toBe(userWithUpdateCompanies.companies)
    expect(userWithUpdateCompanies.companies[2].title).toBe("Google")
    expect(userWithUpdateCompanies.companies.length).toBe(3)

})