import React from "react";
import {render , findByText ,  } from '@testing-library/react'
import JsonPlaceholder from '../components/JsonPlaceholder'



describe("JsonPlaceholder dom test", () => {
    test('JsonPlaceholder text appears',()=>{
        const {getByText} = render(<JsonPlaceholder/>);
        const elem = getByText("JsonPlaceholder")
        expect(elem).toBeInTheDocument()
    })

    // --- i have error here that i dont understand and i do not know how to fix
    test('first and last names appears',async () =>{
        const {findByText} = render(<JsonPlaceholder/>);
        const item =  await findByText("Leanne Graham");
        expect(item).toBeInTheDocument();
    })

    
})