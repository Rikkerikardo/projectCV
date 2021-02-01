import React from "react"
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Link,
} from "@material-ui/core"

const BasicInfo = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Box
            style={{
              textDecoration: "underline",
            }}
            borderRadius={15}
            padding={1}
            width={0.1}
          >
            <Typography variant="h5">Basic info</Typography>
          </Box>
          <Typography variant="h6" align="center">
            Riku Pelkonen
          </Typography>
          <Typography variant="h6" align="center">
            Information systems science student (2018 - 2023)
          </Typography>
          <Typography variant="h6" align="center">
            University of Jyväskylä
          </Typography>
          <Typography variant="h6" align="center">
            +358407468099
          </Typography>
          <Typography variant="h6" align="center">
            pelkonen.riku@gmail.com
          </Typography>
          <Link href="https://github.com/Rikkerikardo">
            <Typography variant="h6" align="center">
              Github
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default BasicInfo
