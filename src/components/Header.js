import React from "react"
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { showHeader } from "../utils/showHeader"


const StyledHeader = styled.header`
background: transparent;
width: 100vw;
position: fixed;
margin: 0 auto;
padding: 2% 8%;
display: flex;
justify-content: space-between;
align-items: center;
/* opacity: ${({ showHeader }) => showHeader ? 1 : 0}; */
opacity: 1;
transition: all .5s ease-out;
z-index: 2;
`

const Logo = styled.div`
  width: max-content;
  span{
    font-size: 2rem;
  }`
const MenuItems = styled.div`
display: flex;
justify-content: space-around;
width: 34%;

span {
padding: 0 12px 0 10px;
cursor: pointer;
margin-right: 1%;
position:  relative;
::after {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  background: rgba(0,0,0,0.9);
  transform-origin: 0 100%;
  transition: transform 0.35s;
}

&:hover::after {
  transform: scaleY(6.3);
}
}
`

const Header = (props) => {
  const { location = {} } = props;
  const { pathname } = location

  const SHOWHEADER = showHeader({pathname})
  return (
  <StyledHeader showHeader={props.showHeader}>
    <Logo>
      <span>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {props.siteTitle}
        </Link>
      </span>
    </Logo>
    <MenuItems>
      <span>
        what do we do
    </span>
      <span>
        who we are
    </span>
      <span>
        contribute
    </span>
    </MenuItems>
  </StyledHeader>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: 'Valasai',
}

export default withRouter(Header)
