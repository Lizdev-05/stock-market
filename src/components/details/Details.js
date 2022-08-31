import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Navbar, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import {
  getCompanyDetails,
  getCompanyStatement,
  resetStock,
} from '../../Redux/Stock';
import './Detail.css';
import SkeletonLoader from '../loader/Loader';

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const detailsState = useSelector((state) => state.stockReducer.details);
  const statementState = useSelector(
    (state) => state.stockReducer.statement,
  );
  const { companyId } = useParams();
  useEffect(() => {
    dispatch(getCompanyDetails(companyId));
    dispatch(getCompanyStatement(companyId));
  }, [companyId]);

  const clickHandler = () => {
    dispatch(resetStock());
  };

  if (detailsState.length === 0 || statementState.length === 0) {
    return <SkeletonLoader />;
  }
  return (
    <>
      <header>
        <Container>
          <Navbar expand="lg" variant="dark">
            <Container>
              <Link to="/" onClick={clickHandler}>
                <div className="display-6 text-white">
                  <BsArrowLeftSquareFill />
                </div>
              </Link>
              <h2>
                <Navbar.Brand href="#" className="text-white">
                  Company Details
                </Navbar.Brand>
              </h2>
            </Container>
          </Navbar>
        </Container>
      </header>
      <section className="details-section">
        {detailsState.map(
          ({
            companyName,
            ceo,
            description,
            industry,
            country,
            city,
            image,
            currency,
            website,
            volAvg: volatility,
          }) => (
            <Container key={companyId} className="my-4">
              <div className="details-container flex">
                <div className="image-container flex">
                  <div>
                    <img src={image} alt="company" />
                  </div>
                  <div className="fs-4">
                    <span className="d-block fw-bold">
                      Country:&nbsp;
                      {country}
                    </span>
                    <span className="d-block fw-bold">
                      City:&nbsp;
                      {city}
                    </span>
                    <span className="d-block fw-bold">
                      Currency:&nbsp;
                      {currency}
                    </span>
                  </div>
                </div>
                <div className="company-details flex">
                  <h2 className="fs-1 mb-4">{companyName}</h2>
                  <span className="fw-bold mb-4 fs-3">
                    CEO:&nbsp;
                    {ceo}
                  </span>
                  <span className="fw-bold mb-4 fs-3">Description:</span>
                  <p>{description}</p>
                  <span className="fw-bold mb-4 fs-3">
                    Industry:&nbsp;
                    <span>{industry}</span>
                  </span>
                  <span className="fw-bold mb-4 fs-3">
                    Website:&nbsp;
                    <a href={website} target="_blank" rel="noreferrer">
                      Visit website
                    </a>
                  </span>
                  <span className="fw-bold mb-4 fs-3">
                    Stock volatility:&nbsp;
                    <span>{volatility}</span>
                  </span>
                </div>
              </div>
            </Container>
          ),
        )}
      </section>
      <section className="statements-section m-4">
        <Container>
          <h2 className="text-center">Financial statements report</h2>
          <Container>
            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>Reported Year</th>
                  <th>Income statement</th>
                </tr>
              </thead>
              <tbody>
                {statementState.map(
                  ({
                    revenue,
                    grossProfit,
                    grossProfitRatio,
                    netIncome,
                    netIncomeRatio,
                    calendarYear,
                    operatingIncomeRatio,
                  }) => (
                    <tr key={companyId}>
                      <td>{calendarYear}</td>
                      <td
                        className="statement-data"
                        key={`${companyId}statement`}
                      >
                        <span>
                          <strong>Revenue:</strong>
                          &nbsp;
                          {`${revenue}$`}
                        </span>
                        <span>
                          <strong>GrossProfit:</strong>
                          &nbsp;
                          {`${grossProfit}$`}
                        </span>
                        <span>
                          <strong>Net income:</strong>
                          &nbsp;
                          {`${netIncome}$`}
                        </span>
                        <span>
                          <strong>Gross Profit Ratio:</strong>
                          &nbsp;
                          {`${grossProfitRatio}`}
                        </span>
                        <span>
                          <strong>Net Income Ratio:</strong>
                          &nbsp;
                          {`${netIncomeRatio}`}
                        </span>
                        <span>
                          <strong>Operating Income Ratio:</strong>
                          &nbsp;
                          {`${operatingIncomeRatio}`}
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </Table>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default CompanyDetails;
