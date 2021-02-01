import {
  List,
  ListItem,
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

const Education = () => {
  const [bachelor, setBachelor] = useState(false)
  const [matriculation, setMatriculation] = useState(false)

  const handleClick = (index) => {
    switch (index) {
      case 0:
        setBachelor(!bachelor)
        break
      case 1:
        setMatriculation(!matriculation)
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
            <Typography variant="h5">Education</Typography>
          </Box>
          <List>
            <ListItem button onClick={() => handleClick(0)}>
              <Typography>
                Information systems science (bachelor's degree) <br />
                08/2018 - 05/2021
              </Typography>
            </ListItem>
            <Collapse in={bachelor} timeout="auto" unmountOnExit>
              <List>
                <ListItem>
                  <Typography>
                    <Link href="https://opintopolku.fi/koski/opinnot/3be813526eff479580ee35a16c061f6c">
                      - Completed courses
                    </Link>
                  </Typography>
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem button onClick={() => handleClick(1)}>
              <Typography>
                Matriculation examination <br />
                08/2011 - 05/2014
              </Typography>
            </ListItem>
            <Collapse in={matriculation} timeout="auto" unmountOnExit>
              <List>
                <ListItem>
                  <Typography>
                    <Link href="https://opintopolku.fi/koski/opinnot/e3d9f79b475f4097b8358a5395de2206">
                      - Grades
                    </Link>
                  </Typography>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Education
