import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => (
  <Container>
    <Row className="justify-content-center align-content-center mt-5">
      <SkeletonTheme baseColor="#00A9D8" highlightColor="#f8f9f9">
        <Skeleton count={3} />
      </SkeletonTheme>
    </Row>
  </Container>
);

export default SkeletonLoader;
