import React from "react";
import "../styles/AboutUs.css";
// import { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 100,
  },
});

function AboutUs() {
  const classes = useStyles();
  return (
    <div className="about-class">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/pages/images/logo.png"
            title="Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              RAW ENGINEERING
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Raw Engineering is an Innovative Digital Solutions company
              providing Digital Transformation Strategy and Custom Development
              Services. We partner with the world’s best Fortune 500 Enterprises
              and Startups to deliver Headless CMS Strategy & Implementation,
              Mobile Apps, Websites,SaaS Products, Cloud Strategy, DevOps and
              SRE Solutions.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/pages/images/logo.png"
            title="Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              CONTENTSTACK
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Contentstack is the leading API-first content hub at the
              intersection of CMS and DXP powering modernized digital
              experiences. It recently received a Series-A funding of $31.5
              million to deliver personalized, omnichannel digital experiences.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/pages/images/logo.png"
            title="Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              SURFBOARD VENTURES
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Organize several events all year-round, ranging from online
              sessions for students and classroom activities to
              innovation-driven development competitions.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
// class AboutUs extends Component {
//   render() {
//     return (
//       <div>
//         <h1>RAW ENGINEERING</h1>
//         <p>
//           Raw Engineering is an Innovative Digital Solutions company providing
//           Digital Transformation Strategy and Custom Development Services. We
//           partner with the world’s best Fortune 500 Enterprises and Startups to
//           deliver Headless CMS Strategy & Implementation, Mobile Apps, Websites,
//           SaaS Products, Cloud Strategy, DevOps and SRE Solutions.
//         </p>
//         <h1>CONTENTSTACK</h1>
//         <p>
//           Contentstack is the leading API-first content hub at the intersection
//           of CMS and DXP powering modernized digital experiences. It recently
//           received a Series-A funding of $31.5 million to deliver personalized,
//           omnichannel digital experiences.
//         </p>
//         <h1>SURFBOARD VENTURES</h1>
//         <p>
//           Organize several events all year-round, ranging from online sessions
//           for students and classroom activities to innovation-driven development
//           competitions.{" "}
//         </p>
//       </div>
//     );
//   }
// }
export default AboutUs;
