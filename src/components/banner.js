import React from "react"
import { Container, Image, Box, NavLink } from "theme-ui"
import profilePic from "../assets/images/profile.jpg"
import BannerMDX from "../sections/banner"
import NavMenu from "./nav-menu"
import "../styles/global.scss"

const Banner = () => (
  <Container className={"page-banner"}>
    <NavMenu></NavMenu>
    <Image
      src={profilePic}
      sx={{
        maxWidth: "20%",
        minWidth: "200px",
      }}
      className={"profile-pic"}
    />
    <Box>
      <BannerMDX />
    </Box>
    <Box as="nav">
      <NavLink href="#about" p={2}>
        About
      </NavLink>
      <NavLink href="#projects" p={2}>
        Projects
      </NavLink>
      <NavLink href="#contact" p={2}>
        Contact
      </NavLink>
    </Box>
  </Container>
)

export default Banner
