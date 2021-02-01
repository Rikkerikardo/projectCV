import React from "react"
import { Card, CardContent, Grid, Typography } from "@material-ui/core"

const AboutMe = () => {
  const birthDate = new Date(1995, 4, 22)
  let age = new Date().getFullYear() - birthDate.getFullYear()
  const m = new Date().getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && new Date().getDate() < birthDate.getDate())) {
    age--
  }

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h5">About Me</Typography>
          <Typography>
            {age}-year old easily to approach guy from Joensuu. Lived there for
            the first 17 years of my life, moved then to Hämeenlinna in 2012.
            Finished high school in spring 2014 and performed national service
            2014-2015. Started successful career at consumer sales 2015, moved
            to Jyväksylä in 2017. Continued working to 2018 until studies
            started.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default AboutMe
