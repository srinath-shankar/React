import { sum } from "../sum"

test("sum function should calculate",()=>{
 const result = sum(1, 2);
 expect(result).toBe(3);
})