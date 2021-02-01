import React from "react"
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core"

const BasicInfo = () => {
  return (
    <Grid item xs={12}>
      <Card style={{ height: "100%" }}>
        <CardContent>
          <Box
            style={{
              background: "linear-gradient(315deg, #a6a6a6 0%, #ececec 45%)",
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
        </CardContent>
      </Card>
    </Grid>
  )
}
export default BasicInfo
