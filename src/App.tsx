import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './components/HomeView';
import Instructions from './components/Instructions';
import Layout from './components/Layout';
import Modal from './components/Modal';
import PolicyholdersView from './components/PolicyholdersView';
import RedirectView from './components/RedirectView';
import TableDemoView from './components/TableDemoView';
import YouCanDoItView from './components/YouCanDoItView';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Layout onFooterClick={() => setIsModalOpen(true)}>
        <Routes>
          <Route path="*" element={<RedirectView />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/policyholders" element={<PolicyholdersView />} />
          <Route path="/table" element={<TableDemoView />} />
          <Route path="/you-can-do-it" element={<YouCanDoItView />} />
        </Routes>
      </Layout>
      <Modal
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title="Sure Technical Challenge"
      >
        <Instructions />
      </Modal>
    </BrowserRouter>
  );
}

export default App;
