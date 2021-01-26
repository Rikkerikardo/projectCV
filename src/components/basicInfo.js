import React from "react"
import { Card, CardContent, Typography } from "@material-ui/core"

const BasicInfo = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Basic info</Typography>
        <Typography variant="h6" align="center">
          Riku Pelkonen
        </Typography>
        <Typography variant="h6" align="center">
          Information systems science student (2018 - 2023)
        </Typography>
        <Typography variant="h6" align="center">
          +358407468099
        </Typography>
        <Typography variant="h6" align="center">
          pelkonen.riku@gmail.com
        </Typography>
      </CardContent>
    </Card>
  )
}
export default BasicInfo
