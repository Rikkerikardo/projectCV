import { Grid } from "@material-ui/core"
import React from "react"
import BasicInfo from "./components/basicInfo"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Education from "./components/education"
import About from "./components/about"

const App = () => {
  return (
    <Grid container spacing={5}>
      <BasicInfo />
      <Skills />
      <Education />
      <Experience />
      <About />
    </Grid>
  )
}

export default App
