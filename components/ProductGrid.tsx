import { Grid } from '@nextui-org/react';
import InfoCard from '@/components/InfoCard';
import { cardText } from '@/utils/data/cardText';

interface ProductGridProps {
  cardText: {
    label: string;
    title: string;
    imageURL: string;
    buttonMessage: string;
  }[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ cardText }) => {
  return (
    <Grid.Container gap={2}>
      {cardText.map((cardText) => (
        <Grid xs={12} sm={4} key={cardText.title}>
          <InfoCard
            label={cardText.label}
            title={cardText.title}
            imageURL={cardText.imageURL}
            buttonMessage={cardText.buttonMessage}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default ProductGrid;