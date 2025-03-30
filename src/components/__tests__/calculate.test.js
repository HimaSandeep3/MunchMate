import sum from "../Calculate";
test("Sum of 2 numbers",()=>{
    const res=sum(4,10);
    //Assertion
    expect(res).toBe(14);
})