import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
import { fetchStockData } from '../../Redux/Stock';
import SkeletonLoader from '../loader/SkeletonLoader';
import Search from '../search/Search';
import './Stock.css';
import Chart from '../../images/chart-graph.png';

const Stock = () => {
  const stockState = useSelector((state) => state.stocksDataReducer.stocksData);
  const filteredState = useSelector(
    (state) => state.stocksDataReducer.filtered,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStockData());
  }, []);

  if (stockState.length === 0) {
    return <SkeletonLoader />;
  }
  return (
    <>
      <Search />
      <Container className="p-0">
        <section className="companyListing">
          {filteredState.length === 0
            ? stockState.map(
              ({
                id, change, companyName, price, changesPercentage,
              }) => (
                <Card className="text-white alternate card" key={id}>
                  <Link to={`/details/${id}`} key={`${id}link`} className="text-white">
                    <Card.Img src={Chart} alt="Card image" />
                    <Card.ImgOverlay className="text-center align-center d-flex flex-column  justify-content-center">
                      <Card.Title>{companyName}</Card.Title>
                      <Card.Text>
                        <span className=" bg-dark text-white p-2 text-center">
                          {id}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        <span>
                          <strong>Price:</strong>
                          {' '}
                          {`${price}$`}
                        </span>
                        <span>
                          <FaLongArrowAltUp className="text-success" />
                          {changesPercentage}
                        </span>
                        <span>
                          <FaLongArrowAltDown className="text-danger" />
                          {change}
                        </span>
                        <Card.Text className="right-side d-flex flex-column">
                          <span>
                            <FiArrowRightCircle className="text-white m-2 h3" />
                          </span>
                        </Card.Text>
                      </Card.Text>
                      <Card.Text>Last updated 20 hours ago</Card.Text>
                    </Card.ImgOverlay>
                  </Link>
                </Card>
              ),
            )
            : filteredState.map(
              ({
                id, change, companyName, price, changesPercentage,
              }) => (
                <Card className=" p-1 text-white alternate card" key={id}>
                  <Link to={`/details/${id}`} key={id} className="text-white">
                    <Card.Img src={Chart} alt="Card image" />
                    <Card.ImgOverlay className=" align-center d-flex flex-column  justify-content-start">
                      <Card.Title className="h2 fs-2 p-1 fw-bold">{companyName}</Card.Title>
                      <Card.Text>
                        <span className=" bg-dark text-white p-1 text-center">
                          {id}
                        </span>
                      </Card.Text>
                      <Card.Text className="d-flex flex-column m-0">
                        <span className="span-paragraph">
                          <strong>Price:</strong>
                          {' '}
                          {`${price}$`}
                        </span>
                        <span className="span-paragraph">
                          <FaLongArrowAltUp className="text-success" />
                          {changesPercentage}
                        </span>
                        <span className="span-paragraph">
                          <FaLongArrowAltDown className="text-danger" />
                          {change}
                        </span>
                      </Card.Text>
                      <Card.Text className="right-side d-flex flex-column-reverse">
                        <span>
                          <FiArrowRightCircle className="text-white m-2 h3" />
                        </span>
                      </Card.Text>
                      <Card.Text className="span-paragraph">Last updated 20 hours ago</Card.Text>
                    </Card.ImgOverlay>
                  </Link>
                </Card>
              ),
            )}
        </section>
      </Container>
    </>
  );
};

export default Stock;
