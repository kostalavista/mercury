import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Borrow } from './pages/Borrow';
import { Dashboard } from './pages/Dashboard';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  min-height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/borrow' element={<Borrow />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Container>
  );
}
