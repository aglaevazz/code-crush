import type {NextPage} from 'next';
import {Card, Text, Row, Col, Button} from '@nextui-org/react'

interface Props {
    title: string;
    label: string;
    imageURL: string;
    buttonMessage: string;
}

const InfoCard: NextPage<Props> = (props) => {

    const { title, label, imageURL, buttonMessage } = props;

    const cardStyle = imageURL ? {backgroundImage: `url(${imageURL})`} : {backgroundColor: '#87CEFA'};

    return (

        <Card>
            <Card.Header css={{position: 'absolute', top: 5}}>
                <Col>
                    <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
                        {label}
                    </Text>
                    <Text h4 color='white'>
                        {title}
                    </Text>
                </Col>
            </Card.Header>
            {imageURL && <Card.Image src={imageURL} />}
            {!imageURL && (
                <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Text>A basic card - we can add text here or an image</Text>
                </Card.Body>
            )}
            <Card.Footer
                isBlurred
                css={{
                    position: 'aboslute',
                    bgBlur: '#0f111466',
                    bottom: 0
                }}
            >
                <Row>
                    <Col css={{display: 'flex', justifyContent: 'center'}}>
                        <Button flat auto rounded color='primary'>
                            <Text css={{color: 'inherit'}} size={12} transform='uppercase'>
                                { buttonMessage }
                            </Text>
                        </Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default InfoCard;