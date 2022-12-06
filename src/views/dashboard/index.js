import React from 'react';

// mui imports
import { Box } from '@mui/material';

// custom import
import Header from '../../components/Header';

const Dashboard = () => {
	return (
		<Box m='20px'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Header title='DASHBOARD' subtitle='Welcom to your dashboard' />
			</Box>
		</Box>
	);
};

export default Dashboard;
