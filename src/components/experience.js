import React, { useState } from "react"
import {
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  Button,
} from "@material-ui/core"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab"
import { makeStyles } from "@material-ui/core/styles"
import { HistoryOutlined } from "@material-ui/icons"

const useStyles = makeStyles({
  timelineHeading: {
    margin: "5px",
    textDecoration: "underline",
  },
  timelineContent: {
    margin: "5px",
    textAlign: "center",
  },
  primaryDot: {
    background: "#0093E9",
  },
  primaryConnector: {
    background: "#80D0C7",
  },
  secondaryItems: {
    background: "#ececec",
  },
})

const Experience = () => {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid item xs={12}>
      <Card style={{ height: "100%" }}>
        <CardContent>
          <Grid container direction="row" alignItems="center">
            <Typography
              variant="h5"
              style={{
                textDecoration: "underline",
              }}
            >
              Timeline
              <HistoryOutlined
                fontSize="large"
                style={{ verticalAlign: "-10px", marginLeft: "10px" }}
              />
            </Typography>
          </Grid>
          {expanded ? (
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2021 winter
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Did this CV project to try and learn more front-end
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2020 winter
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Learned Tensorflow JS during the Christmas holidays
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2020 fall
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Continued to learn programming with Javascript (Fullstack)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2020 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Summer job at JWEB (E-commerce, Shopify)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2020 spring
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Continued to learn programming with Java (Ohjelmointi 2)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2019 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Summer job / retail at K-Rauta
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2019 spring
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Started programming career with C# (Ohjelmointi 1)
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      First own project, web scraper using C# and Selenium. Had
                      great experience of HTML and CSS as well
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2018 fall
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Started studying Information systems science
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2017 fall
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Moved to Jyväskylä and got second promotion to sales
                      trainer.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2015 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Consumer Sales at Suomen Lämpöikkuna Oy
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Started as appointment maker, quickly promoted to sales
                      representive after one month.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2014 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Started National service
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2014 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Finished high school
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2013 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Summer job at Finnish Defence Forces
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                  <TimelineConnector className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2012 fall
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Moved from Joensuu to Hämeenlinna
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.secondaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2011 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Started high school
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <Button
                style={{ width: "25%", alignSelf: "center", marginTop: "3%" }}
                variant="outlined"
                onClick={() => {
                  handleClick()
                }}
              >
                Minimize timeline
              </Button>
            </Timeline>
          ) : (
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2020 fall
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Continued to learn programming with Javascript (Fullstack)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2020 summer
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Summer job at JWEB (E-commerce, Shopify)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2020 spring
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Continued to learn programming with Java (Ohjelmointi 2)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                  <TimelineConnector className={classes.primaryConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2019 spring
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Started programming career with C# (Ohjelmointi 1)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={classes.primaryDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography className={classes.timelineHeading}>
                      2018 fall
                    </Typography>
                    <Typography className={classes.timelineContent}>
                      Started studying Information systems science
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <Button
                style={{ width: "25%", alignSelf: "center", marginTop: "3%" }}
                variant="outlined"
                onClick={() => {
                  handleClick()
                }}
              >
                Expand timeline
              </Button>
            </Timeline>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Experience
