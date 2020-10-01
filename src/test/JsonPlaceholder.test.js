import React from "react";
import {render , findByText } from '@testing-library/react'
import JsonPlaceholder from '../components/JsonPlaceholder'



describe("JsonPlaceholder dom test", () => {
    let getByText , getByPlaceholderText;
    beforeEach(()=>{
      const todos = render(<JsonPlaceholder/>);
      getByText = todos.getByText;
      getByPlaceholderText = todos.getByPlaceholderText;
    })

    test('JsonPlaceholder text appears',()=>{
        const elem = getByText("JsonPlaceholder")
        expect(elem).not.toBeNull();
    })

    test('first and last names appears',async () =>{
        const items = await findByText("Leanne Graham")
        expect(items).toHaveLength(1)
    })
})