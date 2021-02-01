import React from "react"
import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab"

// TODO: secondary timeline

const Experience = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h5">Experience</Typography>

          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography style={{ margin: "5px" }} variant="subtitle1">
                    2020 fall
                  </Typography>
                  <Typography style={{ margin: "5px" }}>
                    Continued programming (Fullstack)
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography style={{ margin: "5px" }}>2020 summer</Typography>
                  <Typography style={{ margin: "5px" }}>
                    Summer job at JWEB (E-commerce, Shopify)
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography style={{ margin: "5px" }}>2020 spring</Typography>
                  <Typography style={{ margin: "5px" }}>
                    Continued programming career (Ohjelmointi 2)
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography style={{ margin: "5px" }}>2019 spring</Typography>
                  <Typography style={{ margin: "5px" }}>
                    Started programming career (Ohjelmointi 1)
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3}>
                  <Typography style={{ margin: "5px" }}>2018 fall</Typography>
                  <Typography style={{ margin: "5px" }}>
                    Started studying Information systems science
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Experience
