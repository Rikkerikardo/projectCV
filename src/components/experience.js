import React, { useState } from "react"
import {
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  Box,
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

// TODO: secondary timeline

const Experience = () => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
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
            <Typography variant="h5">Timeline</Typography>
          </Box>
          <Button
            variant="outlined"
            onClick={() => {
              handleClick()
            }}
          >
            Expanded timeline
          </Button>

          {expanded ? (
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography
                      style={{ margin: "5px", fontWeight: "bold" }}
                      variant="subtitle1"
                    >
                      2021 winter
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Did this CV project to try and learn more front-end
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography
                      style={{ margin: "5px", fontWeight: "bold" }}
                      variant="subtitle1"
                    >
                      2020 winter
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Learned Tensorflow JS during the Christmas holidays
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography
                      style={{ margin: "5px", fontWeight: "bold" }}
                      variant="subtitle1"
                    >
                      2020 fall
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Continued to learn programming with Javascript (Fullstack)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2020 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Summer job at JWEB (E-commerce, Shopify)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2020 spring
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Continued to learn programming with Java (Ohjelmointi 2)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2019 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Summer job / retail at K-Rauta
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2019 spring
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Started programming career with C# (Ohjelmointi 1)
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      First own project, web scraper using C# and Selenium. Had
                      great experience of HTML and CSS as well
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2018 fall
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Started studying Information systems science
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2017 fall
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Moved to Jyväskylä and got second promotion to sales
                      trainer.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2015 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Consumer Sales at Suomen Lämpöikkuna Oy
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Started as appointment maker, quickly promoted to sales
                      representive after one month.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2014 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Started National service
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2014 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Finished high school
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2013 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Summer job at Finnish Defence Forces
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2012 fall
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Moved from Joensuu to Hämeenlinna
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#ececec",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px", fontWeight: "bold" }}>
                      2011 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Started high school
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ) : (
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px" }} variant="subtitle1">
                      2020 fall
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Continued to learn programming with Javascript (Fullstack)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px" }}>
                      2020 summer
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Summer job at JWEB (E-commerce, Shopify)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px" }}>
                      2020 spring
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Continued to learn programming with Java (Ohjelmointi 2)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
                  <TimelineConnector
                    style={{
                      background: "#80D0C7",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography style={{ margin: "5px" }}>
                      2019 spring
                    </Typography>
                    <Typography style={{ margin: "5px" }}>
                      Started programming career with C# (Ohjelmointi 1)
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      background: "#0093E9",
                    }}
                  />
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
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Experience
