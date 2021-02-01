import { Grid } from "@material-ui/core"
import React from "react"
import BasicInfo from "./components/basicInfo"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Education from "./components/education"
import About from "./components/about"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 60%)",
    padding: "0 30px",
  },
})

const App = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={5} className={classes.root}>
      <BasicInfo />
      <Skills />
      <Education />
      <Experience />
      <About />
    </Grid>
  )
}

export default App
