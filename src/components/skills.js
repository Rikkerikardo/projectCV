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
      <Card>
        <CardContent>
          <Typography variant="h5">Skills</Typography>
          <Typography variant="h6" align="center">
            Programming
          </Typography>
          <List>
            <ListItem button onClick={() => handleClick(0)}>
              <ListItemText primary="Javascript" align="center" />
            </ListItem>
            <Collapse in={first} timeout="auto" unmountOnExit>
              <List>
                <ListItem>
                  <Typography>
                    <Link href="https://fullstackopen.com/en/">
                      - Fullstack / University of Helsinki (8 course credit, 5/5
                      score)
                    </Link>
                    <br />
                    <Link href="https://github.com/Rikkerikardo/fullstack-websovelluskehitys2020">
                      - (Github repository of course)
                    </Link>
                  </Typography>
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem button onClick={() => handleClick(1)}>
              <ListItemText primary="Java" align="center" />
            </ListItem>
            <Collapse in={second} timeout="auto" unmountOnExit>
              <List>
                <ListItem>
                  <Typography>
                    <Link href="https://sisu.jyu.fi/student/courseunit/otm-5398e687-3268-48a3-b0a3-2d646f1a2b37/brochure">
                      - Ohjelmointi 2 / University of Jyväskylä (8 course
                      credit, 5/5 score)
                    </Link>
                    <br />
                    <Link href="https://gitlab.jyu.fi/pelkrpxt/ohj2">
                      - (Gitlab repository of course)
                    </Link>
                  </Typography>
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem button onClick={() => handleClick(2)}>
              <ListItemText primary="C#" align="center" />
            </ListItem>
            <Collapse in={third} timeout="auto" unmountOnExit>
              <List>
                <ListItem>
                  <Typography>
                    <Link href="https://sisu.jyu.fi/student/courseunit/jy-CU-9321-v2/brochure">
                      - Ohjelmointi 1 / University of Jyväskylä (6 course
                      credit, 5/5 score)
                    </Link>
                  </Typography>
                </ListItem>
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
