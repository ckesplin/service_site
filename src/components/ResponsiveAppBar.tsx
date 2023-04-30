import './ResponsiveAppBar.css'
import {useEffect, useLayoutEffect, useRef, useState} from "react"
import mapleLeafLogo from "../assets/images/1200px-Maple_Leaf.svg.png"
import Phone from '@mui/icons-material/PhoneInTalkOutlined'
import {useDetectScroll} from "../hooks/useDetectScroll"
import {Box, Drawer, List, ListItem, ListItemButton} from "@mui/material"
import {useWindowSize} from "../hooks/useWindowSize"
import {links} from "../App"
import {Link as ScrollLink} from 'react-scroll'

function ResponsiveAppBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [scrollDir] = useDetectScroll({thr: 2})
  const windowSize = useWindowSize()
  const drawerAnchorEl = useRef()

  useLayoutEffect(() => {
    if (windowSize[0] > 900) setHamburgerOpen(false)
  }, [windowSize]);

  console.log(scrollDir)
  return (
    <>
      <Box className={`navbar ${(scrollDir !== "down") && 'show'}`} ref={drawerAnchorEl}>
        <div className="logo-container">
          <div className="logo-capital">Capital</div>
          <div className="logo-chimney">Chimney</div>
          <img className="logo-img" src={mapleLeafLogo} alt="capital chimney logo"/>
        </div>
        <div className="link-container">
          {links.map(link =>
            <li key={link}
              className="link"
            >
              <ScrollLink smooth spy to={link.replace(" ", "-")}>{link}</ScrollLink>
            </li>
          )
          }
        </div>
        <div className="phone-container">
          <Phone className="phone-icon"/>
          <a className="phone" href="tel:6138371645">(613) 837-1645</a>
        </div>
        <div className="hamburger-menu" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          <span className={`line line1 ${hamburgerOpen && "menu-open"}`}></span>
          <span className={`line line2 ${hamburgerOpen && "menu-open"}`}></span>
          <span className={`line line3 ${hamburgerOpen && "menu-open"}`}></span>
        </div>

      </Box>
      <Drawer
        anchor="top"
        open={hamburgerOpen}
        variant="temporary"
        hideBackdrop
        elevation={0}
        sx={{width: "100%"}}
        onKeyDown={() => setHamburgerOpen(false)}
      >
        <List disablePadding sx={{width: "100%", paddingTop: '60px'}} className="drawer-link-container">
          {links.map(link => (
            <ListItem
              key={link}
              disableGutters
              disablePadding
              sx={{justifyContent: 'center'}}
            >
              <ScrollLink smooth spy to={link.replace(" ", "-")} >
                <ListItemButton
                  className="drawer-link"
                  sx={{
                    height: "60px",
                    justifyContent: 'center',
                    width: '100vw',
                  }}
                  onClick={() => {
                    setHamburgerOpen(false)
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