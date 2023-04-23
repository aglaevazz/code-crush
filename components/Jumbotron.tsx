import { Grid, Col, Text, Button } from '@nextui-org/react';

const Jumbotron = () => {
  return (
    <Grid.Container justify="center" css={{"height": "500px"}}>
      <Grid xs={12} sm={6} alignItems="center">
        <Col css={{"width": "100%"}}>
          <Text weight="bold" size={70} css={{ textAlign: "center"}}>The New Doggie Alimentation</Text>
          <Text weight={"bold"} size={30} css={{"textAlign": "center"}}>Some smaller text</Text>
          <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Learn More</Button>
        </Col>
      </Grid>
    </Grid.Container>
  );
};

export default Jumbotron;
