import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import NavBar2 from '../componentes/NavBar2'
import Products from '../componentes/Products'
import Newsletter from '../componentes/Newsletter'
import { useLocation } from 'react-router-dom'

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
console.log(sort)
  return (
    <Container>
      <NavBar2 />

      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="PageNumber" onChange={handleFilters}>
            <Option disabled>Page N°</Option>
            <Option>100+</Option>
            <Option>200+</Option>
            <Option>300+</Option>
            <Option>400+</Option>
            <Option>500+</Option>
            <Option>600+</Option>
          </Select>
          <Select name="Rate" onChange={handleFilters}>
            <Option disabled>Rate</Option>
            <Option>1 Star</Option>
            <Option>2 Stars</Option>
            <Option>3 Stars</Option>
            <Option>4 Stars</Option>
            <Option>5 Stars</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>

            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />

    </Container>
  );
};

export default ProductList;