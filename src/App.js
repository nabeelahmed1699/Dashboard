import { Route, Routes } from 'react-router-dom';
// mui imports
import { CssBaseline, ThemeProvider } from '@mui/material';

// custom imports
import { ColorModeContext, useMode } from './theme';
import Sidebar from './views/global/sidebar';
import Topbar from './views/global/topbar';
import Dashboard from './views/dashboard';
import Team from './views/team';
import Contacts from './views/contacts';
import Invoices from './views/invoices';
// import Bar from './views/bar';
// import Line from './views/line';
import Form from './views/form';
// import Pie from './views/pie';
// import FAQ from './views/faq';
// import Geography from './views/geography';
// import Calender from './views/calender';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<Sidebar />
					<main className='content'>
						<Topbar />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/teams' element={<Team />} />
							<Route path='/contacts' element={<Contacts />} />
							<Route path='/invoices' element={<Invoices />} />
							{/* <Route path='/faq' element={<FAQ />} /> */}
							{/* <Route path='/geography' element={<Geography />} /> */}
							{/* <Route path='/bar' element={<Bar />} /> */}
							{/* <Route path='/line' element={<Line />} /> */}
							{/* <Route path='/pie' element={<Pie />} /> */}
							<Route path='/form' element={<Form />} />
							{/* <Route path='/calender' element={<Calender />} /> */}
						</Routes>
					</main>
				</div>
				;
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
