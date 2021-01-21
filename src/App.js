import {Container} from "@material-ui/core"
import React from "react"
import BasicInfo from "./components/basicInfo"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Education from "./components/education"
import About from "./components/about"

const App = () => {
  return (
      <Container maxWidth="lg">
        <BasicInfo />
        <Skills />
        <Experience />
        <Education />
        <About />
      </Container>
  )
}

export default App
