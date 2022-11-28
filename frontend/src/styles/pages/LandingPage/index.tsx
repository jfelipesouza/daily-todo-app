import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100;
  min-height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

export const NavBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  span {
    font-size: ${({ theme }) => theme.font.fontSize.logo};
    font-weight: bold;
    margin-left: ${({ theme }) => theme.margin.sm};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const LinksContainer = styled.div`
  display: flex;
`
export const Links = styled(Link)<{ focus?: boolean }>`
  text-decoration: none;
  margin: 0 ${({ theme }) => theme.margin.sm};
  color: ${({ theme, focus }) =>
    focus ? theme.colors.primary : theme.colors.secundary};
  font-size: ${({ theme }) => theme.font.fontSize.navbarLinks};
  position: relative;

  ::after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    background-color: ${({ theme, focus }) =>
      focus ? theme.colors.primary : theme.colors.secundary};
    transition: all;
    transition-timing-function: linear;
    transition-duration: 0.3s;
  }

  :hover {
    font-weight: 600;
  }
  :hover::after {
    width: 100%;
  }
`
