import { createContext, useState } from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti"
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa"
export const ModeContext=createContext(null)

const Root = () => {
    const [mode,setMode]=useState("light")
    localStorage.setItem("mode",mode)
    const items=[
        {
            id:"home",
            text:"Home",
        },
        {
            id:"about",
            text:"About me",
        },
        {
            id:"education",
            text:"Education"
        },
        {
            id:"projects",
            text:"Projects",
        },
        {
            id:"contact",
            text:"Contact",
        },
    ]
    const icons=[
    {
        icon:<TiSocialFacebook />,
        link:"https://www.facebook.com/share/1DewXKegtM/"
    },
    {
        icon:<FaLinkedinIn />,
        link:"https://www.linkedin.com/in/ali-al-noufal-4080a3380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        icon:<FaTelegram />,
        link:"https://t.me/alinouf"
    },
    {
        icon:<FaGithub />,
        link:"https://github.com/Ali-Al-Noufal"
    },]

  return (
    <div className={mode}>
      <NavBar name="Ali" items={items} mode={mode} changeMode={setMode}/>
      <ModeContext value={mode}>
        <Outlet />
      </ModeContext>
      <Footer icons={icons} />
    </div>
  )
}

export default Root
