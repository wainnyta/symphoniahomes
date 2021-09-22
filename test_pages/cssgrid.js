const { Grid, GridItem } = require('@chakra-ui/react');

const CssGrid = () => {
  return (
    <div>
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(600px, 1fr))">
        <GridItem>Hello 1</GridItem>
        <GridItem>Hello 2</GridItem>
        <GridItem>Hello 3</GridItem>
        <GridItem>Hello 4</GridItem>
        <GridItem>Hello 5</GridItem>
        <GridItem>Hello 6</GridItem>
        <GridItem>Hello 7</GridItem>
      </Grid>
    </div>
  );
};

export default CssGrid;
