import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets: [{ background, full_background }],
    addToBasket = Function.prototype,
    order,
    setShow,
    decQuantity,
    incQuantity,
    setImageShow,
    setImage,
    setIndexImage,
  } = props;

  const orderItem = order.find((item) => item.mainId === mainId);
  return (
    <Card id={mainId} text="light" bg="dark" className="mb-1 card">
      <Carousel interval={null} variant="light pill" indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2 cardImg"
            src={full_background}
            alt={displayName}
            onClick={() => {
              setImageShow(true);
              setImage({ full_background, background, displayName });
              setIndexImage(0);
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2 cardImg"
            src={background}
            alt={displayName}
            onClick={() => {
              setImageShow(true);
              setImage({ full_background, background, displayName });
              setIndexImage(1);
            }}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{displayName}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
      </Card.Body>
      <Card.Footer className="border-top border-primary cardFooter">
        {orderItem?.quantity ? (
          <span>
            <span
              variant="outline-danger"
              className="plusMinus"
              onClick={() => decQuantity(mainId, orderItem.quantity)}
            >
              &#10134;
            </span>{' '}
            <p className="quantity">{orderItem?.quantity}</p>{' '}
            <span
              variant="outline-danger"
              className="plus"
              onClick={() => incQuantity(mainId)}
            >
              &#10133;
            </span>{' '}
          </span>
        ) : (
          <Button
            variant="primary rounded-4"
            className="buy"
            onClick={() => {
              addToBasket({ mainId, displayName, price: { finalPrice } });
              setShow(true);
            }}
          >
            Buy
          </Button>
        )}
        <span className="ms-1 buyPrice">{finalPrice} V-Bucks</span>
      </Card.Footer>
    </Card>
  );
}

export { GoodsItem };