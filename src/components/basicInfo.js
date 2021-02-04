import React from "react"
import { Card, CardContent, Grid, Typography, Link } from "@material-ui/core"
import {
  AccountCircleOutlined,
  EmailOutlined,
  GitHub,
  InfoOutlined,
  PhoneOutlined,
} from "@material-ui/icons"

const BasicInfo = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            style={{
              textDecoration: "underline",
            }}
          >
            Basic info
            <InfoOutlined
              fontSize="large"
              style={{ verticalAlign: "-10px", marginLeft: "10px" }}
            />
          </Typography>
          <Grid container direction="column" alignItems="center">
            <Typography variant="h6">
              <AccountCircleOutlined
                fontSize="large"
                style={{ verticalAlign: "-10px", marginRight: "10px" }}
              />
              Riku Pelkonen
            </Typography>
            <Typography variant="h6">
              Information systems science student (2018 - 2023)
            </Typography>
            <Typography variant="h6">University of Jyväskylä</Typography>
            <Typography variant="h6">
              <PhoneOutlined
                fontSize="large"
                style={{ verticalAlign: "-10px" }}
              ></PhoneOutlined>
              +358407468099
            </Typography>
            <Typography variant="h6">
              <EmailOutlined
                fontSize="large"
                style={{ verticalAlign: "-10px" }}
              ></EmailOutlined>
              pelkonen.riku@gmail.com
            </Typography>
            <Link href="https://github.com/Rikkerikardo">
              <Typography variant="h6">
                <GitHub fontSize="large" style={{ verticalAlign: "-10px" }} />{" "}
                Github
              </Typography>
            </Link>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default BasicInfo
