import { Accordion, Card, CardContent, Typography, AccordionSummary, AccordionDetails, Link } from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
const Skills = () => {

    return (
        <Card>       
        <CardContent>
        <Typography variant="h5">Skills</Typography>  
        <Typography variant="h6" align="center">Programming</Typography>
        <Accordion> 
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Javascript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href="https://fullstackopen.com/en/">
              Fullstack / University of Helsinki (8 course credit, 5/5 score)
            </Link>
            <br />
            <Link href ="https://github.com/Rikkerikardo/fullstack-websovelluskehitys2020">
              (Github repository of course)
            </Link>
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion> 
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Java</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Link href="https://sisu.jyu.fi/student/courseunit/otm-5398e687-3268-48a3-b0a3-2d646f1a2b37/brochure">
              Ohjelmointi 2 / University of Jyväskylä (8 course credit, 5/5 score)
            </Link>
            <br />
            <Link href ="https://gitlab.jyu.fi/pelkrpxt/ohj2">
              (Gitlab repository of course)
            </Link>
          
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion> 
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>C#</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Link href="https://sisu.jyu.fi/student/courseunit/jy-CU-9321-v2/brochure">
              Ohjelmointi 1 / University of Jyväskylä (6 course credit, 5/5 score)
            </Link>
          </Typography>
        </AccordionDetails>
        </Accordion>

        <Typography variant="h6" align="center">Language</Typography>
        <Typography align="left">Finnish - Native</Typography>
        <Typography align="left">English - Proficient (C1/CEFR)</Typography>
       
      </CardContent>
      </Card>
    )
}
export default Skills