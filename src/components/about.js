import React from "react"
import { Card, CardContent, Grid, Typography, Box } from "@material-ui/core"

const AboutMe = () => {
  const birthDate = new Date(1995, 4, 22)
  let age = new Date().getFullYear() - birthDate.getFullYear()
  const m = new Date().getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && new Date().getDate() < birthDate.getDate())) {
    age--
  }

  return (
    <Grid item xs={12}>
      <Card style={{ height: "100%" }}>
        <CardContent>
          <Box
            style={{
              textDecoration: "underline",
            }}
            borderRadius={15}
            padding={1}
            width={0.1}
          >
            <Typography variant="h5">About Me</Typography>
          </Box>
          <Typography>
            {age}-year old approachable guy from Joensuu. In my free time, I do
            a lots of different sports. Jogging, HIIT, bodyweight exercises and
            cross-country skiing are my main ways to try keep myself fit. I also
            play tennis, padel and badminton regulary for fun and I enjoy
            competiting on those sports, in addition to just training. Movies,
            series and videogames and other usual stuff are also of course part
            of my interests. I had data-driven sports betting -project for a
            couple of years, which took a big chunk of my time as well. During
            that project I learned massively about coding and analytic thinking,
            which I'm sure I can make use of in my future carer.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default AboutMe
