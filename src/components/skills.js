import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Link,
  Divider,
  Collapse,
  Grid,
  Box,
} from "@material-ui/core"
import React, { useState } from "react"

const Skills = () => {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  const handleClick = (index) => {
    switch (index) {
      case 0:
        setFirst(!first)
        break
      case 1:
        setSecond(!second)
        break
      case 2:
        setThird(!third)
        break
      default:
        break
    }
  }

  return (
    <Grid item xs={6}>
      <Card style={{ height: "100%" }}>
        <CardContent>
          <Box
            style={{
              textDecoration: "underline",
            }}
            borderRadius={15}
            padding={1}
            width={0.2}
          >
            <Typography variant="h5">Skills</Typography>
          </Box>
          <Typography variant="h6" align="center">
            Programming
          </Typography>
          <List>
            <ListItem
              button
              onClick={() => handleClick(0)}
              style={{
                background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
              }}
            >
              <ListItemText primary="Javascript" align="center" />
            </ListItem>
            <Collapse in={first} timeout="auto" unmountOnExit>
              <List>
                <ListItemText>
                  Most significant technologies learned at school:
                </ListItemText>
                <List dense>
                  <ListItemText>- React</ListItemText>
                  <ListItemText>- Node.js</ListItemText>
                  <ListItemText>- GraphQL</ListItemText>

                  <ListItemText>
                    <Link href="https://fullstackopen.com/en/">
                      (Learned at Fullstack / University of Helsinki, 8 course
                      credit, 5/5 score)
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link href="https://github.com/Rikkerikardo/fullstack-websovelluskehitys2020">
                      (Github repository of course)
                    </Link>
                  </ListItemText>
                </List>
                <Divider />
                <ListItemText>
                  Most significant technologies learned on my own:
                </ListItemText>
                <List dense={true}>
                  <ListItemText>- Tensorflow JS</ListItemText>
                </List>
              </List>
            </Collapse>
            <Divider />
            <ListItem
              button
              onClick={() => handleClick(1)}
              style={{
                background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
              }}
            >
              <ListItemText primary="Java" align="center" />
            </ListItem>
            <Collapse in={second} timeout="auto" unmountOnExit>
              <List dense>
                <ListItemText>
                  <Link href="https://sisu.jyu.fi/student/courseunit/otm-5398e687-3268-48a3-b0a3-2d646f1a2b37/brochure">
                    (Learned at Ohjelmointi 2 / University of Jyväskylä, 8
                    course credit, 5/5 score)
                  </Link>
                  <ListItemText>
                    <Link href="https://gitlab.jyu.fi/pelkrpxt/ohj2">
                      (Gitlab repository of course)
                    </Link>
                  </ListItemText>
                </ListItemText>
              </List>
            </Collapse>
            <Divider />
            <ListItem
              button
              onClick={() => handleClick(2)}
              style={{
                background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
              }}
            >
              <ListItemText primary="C#" align="center" />
            </ListItem>
            <Collapse in={third} timeout="auto" unmountOnExit>
              <List dense>
                <ListItemText>
                  <Link href="https://sisu.jyu.fi/student/courseunit/jy-CU-9321-v2/brochure">
                    (Learned at Ohjelmointi 1 / University of Jyväskylä, 6
                    course credit, 5/5 score)
                  </Link>
                </ListItemText>
              </List>
              <Divider />
              <ListItemText>
                Most significant technologies learned on my own:
              </ListItemText>
              <List dense={true}>
                <ListItemText>- Selenium</ListItemText>
              </List>
            </Collapse>
          </List>
          <Typography variant="h6" align="center">
            Language
          </Typography>
          <Typography align="center">Finnish - Native</Typography>
          <Typography align="center">English - Proficient (C1/CEFR)</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Skills
