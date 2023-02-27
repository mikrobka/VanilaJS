import {MapType} from "./Map";

let people: Array<MapType> = []
beforeEach(() => {
    let people = [
        {name: "Kolya Petrov", age: 33},
        {name: "Sawa Ivanov", age: 13},
        {name: "Katya Sizova", age: 45},
        {name: "Liza Bobkova", age: 18},
        {name: "Sveta Paramonova", age: 27}
    ]
})

test("should be hello + name",() => {
    const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welocome to work`)

    expect(messages.length).toBe(5)
    // expect(messages[0]).toBe("Hello Kolya.Welocome to work")
    // expect(messages[1]).toBe("Hello Sawa.Welocome to work")
    // expect(messages[2]).toBe("Hello Katya.Welocome to work")
    // expect(messages[3]).toBe("Hello Liza.Welocome to work")
    // expect(messages[4]).toBe("Hello Sveta.Welocome to work")
})