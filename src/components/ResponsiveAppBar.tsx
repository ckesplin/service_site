import './ResponsiveAppBar.css'
import {useRef, useState} from "react"
import mapleLeafLogo from "../assets/images/1200px-Maple_Leaf.svg.png"
import Phone from '@mui/icons-material/PhoneInTalkOutlined'
import {useDetectScroll} from "../hooks/useDetectScroll";
import {Box, Drawer, List, ListItem, ListItemButton} from "@mui/material";

const links = [
  'who we are',
  'what we provide',
  'who we serve',
  'contact',
];

function ResponsiveAppBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [scrollDir] = useDetectScroll({})
  const drawerAnchorEl = useRef()

  return (
    <>
      <Box className={`navbar ${scrollDir === "down" && 'hide'}`} ref={drawerAnchorEl}>
        <div className="logo-container">
          <div className="logo-capital">Capital</div>
          <div className="logo-chimney">Chimney</div>
          <img className="logo-img" src={mapleLeafLogo} alt="capital chimney logo"/>
        </div>
        <div className="link-container">
          {links.map(link =>
            <li className="link">{link}</li>)
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
          <List>
            {links.map(link =>  (
              <ListItem key={link} className="drawer-list-item">
                <ListItemButton className="drawer-link" sx={{justifyContent: "center"}}>{link}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;