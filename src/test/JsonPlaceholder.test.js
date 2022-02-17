import React from "react";
import {render } from '@testing-library/react'
import JsonPlaceholder from '../components/JsonPlaceholder'

// --- simple testing-library test

describe("JsonPlaceholder dom test", () => {
    test('JsonPlaceholder text appears',()=>{
        const {getByText} = render(<JsonPlaceholder/>);
        const elem = getByText("JsonPlaceholder")
        expect(elem).toBeInTheDocument()
    })

    test('first and last names appears',async () =>{
        const {findByText} = render(<JsonPlaceholder/>);
        const item =  await findByText("Leanne Graham");
        expect(item).toBeInTheDocument();
    })
})