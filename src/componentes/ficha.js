import React from 'react';
import styled from 'styled-components'


const FichaStyled = styled.div`
    width: 130px;
    height: 125px;
    border: 10px solid ${({ color }) => color.base};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    background: #edeaea;
    box-shadow: 0 10px 0 ${({ color }) => color.borde};
    &:active{
        transform: scale(.9);
    }
    cursor:pointer;
`

const colores ={

    Tijera:{
        base: '#7c3f62',
        borde: '#3b4262',

    },
    Piedra:{
        base: '#5c79b3',
        borde: '#3b4262',
    },

    Papel:{
        base: '#a4cb89',
        borde: '#3b4262',
    },
    lagarto:{
        base: '#ffff76',
        borde: '#3b4262',
    },
    Spock:{
        base: '#bacbea',
        borde: '#3b4262',

    },
    default: {
        base: 'transparent',
        borde: 'transparent',
    }
    
}

const Ficha = ({name, onClick}) => {

    const handleClick = () => {
        if(onClick){
            onClick(name)
        }
    }

    const color = (colores[name]) ? colores[name] : colores.default
    
    return(
            <FichaStyled color={color} onClick={(e) => handleClick(e)}>
                <img src={`./imagenesFichas/${name}.svg`} alt=""/>
            </FichaStyled>
        )

}

export default Ficha