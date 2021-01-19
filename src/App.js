import { Card, Container, CardContent, Typography } from "@material-ui/core"
import React from "react"

const App = () => {
  return (
      <Container maxWidth="lg">
        <Card>       
          <CardContent>
          <Typography>Basic info</Typography>
        </CardContent>
        <CardContent>
          <Typography>Skills</Typography>
        </CardContent>
        <CardContent>
          <Typography>Work experience</Typography>
        </CardContent>
        <CardContent>
          <Typography>Education</Typography>
        </CardContent>
        <CardContent>
          <Typography>About me</Typography>
        </CardContent>
        </Card>
      </Container>
  )
}

export default App
