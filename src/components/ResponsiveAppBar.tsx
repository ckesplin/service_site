import './ResponsiveAppBar.css'
import {useLayoutEffect, useRef, useState} from "react"
import mapleLeafLogo from "../assets/images/1200px-Maple_Leaf.svg.png"
import Phone from '@mui/icons-material/PhoneInTalkOutlined'
import {useDetectScroll} from "../hooks/useDetectScroll"
import {Box, Drawer, List, ListItem, ListItemButton} from "@mui/material"
import {useWindowSize} from "../hooks/useWindowSize"
import {links} from "../App"
import {Link as ScrollLink} from 'react-scroll'

function ResponsiveAppBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [scrollDir] = useDetectScroll({})
  const windowSize = useWindowSize()
  const drawerAnchorEl = useRef()

  useLayoutEffect(() => {
    if (windowSize[0] > 900) setHamburgerOpen(false)
  }, [windowSize]);

  return (
    <>
      <Box className={`navbar ${(scrollDir === "down") && ''}`} ref={drawerAnchorEl}>
        <div className="logo-container">
          <div className="logo-capital">Capital</div>
          <div className="logo-chimney">Chimney</div>
          <img className="logo-img" src={mapleLeafLogo} alt="capital chimney logo"/>
        </div>
        <div className="link-container">
          {links.map(link =>
            <li key={link} className="link"><ScrollLink smooth spy to={link.replace(" ", "-")}>{link}</ScrollLink></li>)
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
        <div className="drawer-link-container">
          <List disablePadding sx={{width: "100%"}}>
            {links.map(link => (
              <ListItem
                key={link}
                className="drawer-list-item"
                disableGutters
                disablePadding
              >
                <ListItemButton
                  className="drawer-link"
                  sx={{justifyContent: "center", height: "60px"}}
                >
                  <ScrollLink smooth spy to={link.replace(" ", "-")} onClick={() => setHamburgerOpen(false)}>
                    {link}
                  </ScrollLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;