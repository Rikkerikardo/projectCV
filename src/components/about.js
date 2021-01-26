import { Card, CardContent, Typography } from "@material-ui/core"

const AboutMe = () => {
  const age = new Date().getFullYear() - 1995

    return (
        <Card>       
        <CardContent>
        <Typography variant="h5" >About Me</Typography>
        <Typography>
          {age}-year old easily to approach guy from Joensuu. Lived there for the first 17 years of my life, moved then to Hämeenlinna in 2012. Finished high school in spring 2014 and performed national service 2014-2015. Started successful career at consumer sales 2015, moved to Jyväksylä in 2017. Continued working to 2018 until studies started.
        </Typography>
      </CardContent>
      </Card>
    )
}
export default AboutMe