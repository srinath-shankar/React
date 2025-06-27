import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
test("test wheater contact page is loaded", ()=>{
   render(<Contact/>);

   const heading = screen.getByRole("heading");
   //assertion
   expect(heading).toBeInTheDocument();
})