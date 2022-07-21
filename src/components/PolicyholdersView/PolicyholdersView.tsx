import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { mockPolicyHoldersList } from '../../constants/mockPolicyHoldersData';
import InfoTable from '../InfoTable';

type TPolicyHoldersList = {
  policyHolders: { key: string; value: string | number }[][];
};

function PolicyholdersView() {
  const apiUrl = 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';
  const defaultPolicyHoldersList: TPolicyHoldersList = { policyHolders: [[]] };

  const [policyHoldersList, setPolicyHoldersList] = useState(defaultPolicyHoldersList);

  useEffect(() => {
    fetch(apiUrl)
      .then(async (response) => {
        const rawData = await response.json();

        if (!response.ok) {
          const error = (rawData && rawData.message) || response.statusText;
          throw new Error(error);
        };

        return rawData;
      })
      .then((rawData) => {
        const displayData: TPolicyHoldersList = { policyHolders: [[]] };
        const formattedData = rawData.policyHolders.map((
          {
            name = '',
            age = 0,
            address = {
              line1: '',
              line2: undefined,
              city: '',
              state: '',
              postalCode: '',
            },
            phoneNumber = '',
            isPrimary = true,
          }) => ([
            {
              key: 'Name',
              value: `${name}`,
            },
            {
              key: 'Age',
              value: Number(`${age}`),
            },
            {
              key: 'Address',
              value: `${address.line1}, ${address.line2 ? address.line2 + ', ' : ''}${address.city}, ${address.state}, ${address.postalCode}`,
            },
            {
              key: 'Phone number',
              value: `${phoneNumber}`,
            },
            {
              key: 'Primary policy holder?',
              value: `${isPrimary ? 'Yes' : 'No'}`,
            },
          ])
        );

        displayData.policyHolders = formattedData;

        console.log(0, 'fetched raw data:', rawData);
        console.log(0, 'formatted data:', formattedData);
        console.log(0, 'display data:', displayData);

        setPolicyHoldersList(displayData);
      })
      .catch((error) => {
        console.error(0, error);
      });
  }, []);

  console.log(10, 'formatted data mockPolicyHoldersList:', mockPolicyHoldersList);
  console.log(10, 'formatted data policyHoldersList:', policyHoldersList);

  return (
    <Box sx={{ textAlign: 'center' }}>
      {policyHoldersList.policyHolders.map((_, i) => (
        <InfoTable key={i} header={(i === 0) ? "Policy Holders" : ""} rows={policyHoldersList.policyHolders[i]} />
      ))}
    </Box>
  );
};

export default PolicyholdersView;
