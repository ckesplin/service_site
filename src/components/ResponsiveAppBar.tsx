import './ResponsiveAppBar.css'
import {useEffect, useLayoutEffect, useRef, useState} from "react"
import mapleLeafLogo from "../assets/images/1200px-Maple_Leaf.svg.png"
import Phone from '@mui/icons-material/PhoneInTalkOutlined'
import {useDetectScroll} from "../hooks/useDetectScroll"
import {Box, Drawer, List, ListItem, ListItemButton} from "@mui/material"
import {useWindowSize} from "../hooks/useWindowSize"
import {Link as ScrollLink} from 'react-scroll'
import {Menu} from "@mui/icons-material";


interface ResponsiveAppBarProps {
  links: string[]
}

function ResponsiveAppBar(props: ResponsiveAppBarProps) {
  const {links} = props
  const [menuOpen, setMenuOpen] = useState(false)
  const [linkClicked, setLinkClicked] = useState(false)
  const [scrollDir] = useDetectScroll({thr: 2})
  const horizWinSize = useWindowSize()[0]

  useLayoutEffect(() => {
    if (horizWinSize > 900) setMenuOpen(false)
  }, [horizWinSize])

  useEffect(() => {
    const resetLinkClicked = () => setLinkClicked(false)
    window.addEventListener("wheel", resetLinkClicked)
    window.addEventListener("touchstart", resetLinkClicked)

    return () => {
      window.removeEventListener("wheel", resetLinkClicked)
      window.removeEventListener("touchStart", resetLinkClicked)
    }
  }, [])

  console.log(linkClicked)

  return (
    <>
      <Box className={`navbar ${(scrollDir === "down" || linkClicked) && 'hide'}`}>
        <div className="logo-container">
          <div className="logo-capital">Capital</div>
          <div className="logo-chimney">Chimney</div>
          <img className="logo-img" src={mapleLeafLogo} alt="capital chimney logo"/>
        </div>
        <div className="link-container">
          {links.map(link =>
            <li key={link} className="link">
            </li>
          )
          }
        </div>
        <div className="phone-container">
          <Phone className="phone-icon"/>
          <a className="phone" href="tel:6138371645">(613) 837-1645</a>
        </div>
        <Menu
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-button"
          fontSize={"large"}
        />
      </Box>
      <Drawer
        anchor="top"
        open={menuOpen}
        variant="temporary"
        hideBackdrop
        elevation={0}
        sx={{width: "100%"}}
        onKeyDown={() => setMenuOpen(false)}
      >
        <List disablePadding sx={{width: "100%", paddingTop: '60px'}} className="drawer-link-container">
          {links.map(link => (
            <ListItem
              key={link}
              disableGutters
              disablePadding
              sx={{justifyContent: 'center'}}
            >
              <ScrollLink smooth to={link.replace(" ", "-")}>
                <ListItemButton
                  className="drawer-link"
                  sx={{
                    height: "60px",
                    justifyContent: 'center',
                    width: '100vw',
                  }}
                  onClick={() => {
                    setMenuOpen(false)
                    setLinkClicked(true)
                  }}
                >
                  {link}
                </ListItemButton>
              </ScrollLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;