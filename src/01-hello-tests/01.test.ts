import {mult, SplitIntoWords, sum} from "./01";

test('sun should be correct',() => {
    //data
    const a  = 2
    const b  = 2

    const result1 = sum(a,b)


    expect(result1).toBe(4)

})
test('sun should be correct',() => {
    //data
    const a  = 2
    const b  = 2

    const result1 = mult(a,b)


    expect(result1).toBe(4)

})


test("spliting done",() => {
    //data
    const sent1 = "Hello my friend"
    const sent2 = "Hello  friend"

    //action
    const result1 =  SplitIntoWords(sent1);
    const result2 = SplitIntoWords(sent2);


    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("Hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")


})