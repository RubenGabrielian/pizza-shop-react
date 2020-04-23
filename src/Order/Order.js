import React from 'react'
import styled from 'styled-components'
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog'
 
const OrderStyled = styled.div `
    position: fixed;
    right: 0;
    top: 40px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    z-index: 10;
    box-shadow: 4px 0px 5px 4px grey;
`

const OrderContent = styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const OrderFooter = styled.div `

`

export function Order () {
    return <OrderStyled>
        <OrderContent>
            Your order's are empty
        </OrderContent>
    </OrderStyled>
}