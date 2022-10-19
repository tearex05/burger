import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import styled from 'styled-components';
import "./style.css"


function Navbar() {

      const [moved, setMoved] = useState("not-moved");

      return (
            <Nav>
                  <ul className={"nav-list " + moved}>
                        <li>TeaRex</li>
                        <li>Foods</li>
                        <li>About</li>
                  </ul>
                  <Icon onClick={() => {
                        if (moved === "not-moved") {
                              setMoved("moved")
                        } else {
                              setMoved("not-moved")
                        }
                  }} />
            </Nav>
      )
}

const Nav = styled.div`
      color:snow;
      position: absolute;
      display:flex;
      justify-content: space-between;
      width:100vw;
      left: 0;
      right: 0;
      padding: 20px;
      font-size:40px;
      @media (min-width:769px){
            padding:10px;
      }
`;

const Icon = styled(FaHamburger)`
      @media (min-width:769px){
            display:none;
      }
      display: inline-block;
      margin-right:20px;
      position: fixed;
      right:0;
      z-index: 201;
      &:hover{
            color: #e4e4e4;
      }
`;

export default Navbar