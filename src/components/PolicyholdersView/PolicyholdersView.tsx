import { useEffect } from 'react';
import { Box } from '@mui/material';
import InfoTable from '../InfoTable';

const testRows = Array(5)
  .fill(null)
  .map((_, i) => ({
    key: `KEY ${i}`,
    value: 'VALUE',
  }));

function PolicyholdersView() {
  const apiUrl = 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

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
        console.log(0, 'fetched raw data:', rawData);
      })
      .catch((error) => {
        console.error(0, error);
      });
  }, []);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <InfoTable header="Policy Holders" rows={testRows} />
    </Box>
  );
}

export default PolicyholdersView;
