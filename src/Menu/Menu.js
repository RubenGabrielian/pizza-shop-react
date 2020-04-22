import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'
import { FoodGrid, Food, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div `
    height: 1000px; 
    margin: 20px 400px 50px 20px;

    h4 {
        font-size: 25px;
    }
`


export const Menu = () => <MenuStyled>
   {Object.entries(foods).map(([sectionName, foods]) => (
   <>
     <h4>{sectionName}</h4>
        <FoodGrid>
        {foods.map((food, index) => (
            <Food  img={food.img} key={index}>
                <FoodLabel>
                    {food.name}
                </FoodLabel>
            </Food>
            ))}
        </FoodGrid>
    </>
   ))}
</MenuStyled>