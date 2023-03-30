

const addAge = (user:UserType) => {
    user.age++
}



test("Big test" , () => {
    let user = {
        name:"Andrey",
        age:20
    }

    addAge(user)

    expect(user.age).toBe(21)
})
