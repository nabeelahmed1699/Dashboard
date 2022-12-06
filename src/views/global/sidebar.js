import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

// mui imports
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

// custom  imports
import { tokens } from '../../theme';

// icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Item = ({ title, icon, to, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const menuList = [
	{
		category: '',
		id: '1',
		list: [
			{
				title: 'Dashboard',
				to: '/',
				icon: <HomeOutlinedIcon />,
			},
		],
	},
	{
		category: 'Data',
		id: '2',
		list: [
			{
				title: 'Manage Teams',
				to: '/teams',
				icon: <PeopleOutlineOutlinedIcon />,
			},
			{
				title: 'Contacts Information',
				to: '/contacts',
				icon: <ContactsOutlinedIcon />,
			},
			{
				title: 'Invoice Balance',
				to: '/invoices',
				icon: <ReceiptOutlinedIcon />,
			},
		],
	},
	{
		category: 'Pages',
		id: '3',
		list: [
			{
				title: 'Profile Form',
				to: '/form',
				icon: <PersonOutlineOutlinedIcon />,
			},
			{
				title: 'Calender',
				to: '/calender',
				icon: <CalendarTodayOutlinedIcon />,
			},
			{
				title: 'FAQ Page',
				to: '/faq',
				icon: <HelpOutlineOutlinedIcon />,
			},
		],
	},
	{
		category: 'Charts',
		id: '4',
		list: [
			{
				title: 'Bar Chart',
				to: '/bar',
				icon: <BarChartOutlinedIcon />,
			},
			{
				title: 'Pie Chart',
				to: '/pie',
				icon: <PieChartOutlineOutlinedIcon />,
			},
			{
				title: 'Line Chart',
				to: '/line',
				icon: <TimelineOutlinedIcon />,
			},
			{
				title: 'Geography Chart',
				to: '/geography',
				icon: <MapOutlinedIcon />,
			},
		],
	},
];
const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');

	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape='square'>
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
					>
						{!isCollapsed && (
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								ml='15px'
							>
								<Typography variant='h3' color={colors.grey[100]}>
									ADMINS
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/* USER */}
					{!isCollapsed && (
						<Box mb={'25px'}>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<img
									alt='profile-user'
									width='100px'
									height='100px'
									src={`../../assets/user.jpg`}
									style={{ cursor: 'pointer', borderRadius: '50%' }}
								/>
							</Box>
							<Box textAlign='center'>
								<Typography
									variant='h2'
									color={colors.grey[100]}
									fontWeight='bold'
									sx={{ m: '10px 0 0 0' }}
								>
									Nabeel Ahmed
								</Typography>
								<Typography variant='h5' color={colors.greenAccent[500]}>
									VP Fancy Admin
								</Typography>
							</Box>
						</Box>
					)}

					{/* MENU ITEMS */}
					<Box paddingLeft={isCollapsed ? undefined : '10%'}>
						{/* {menuItemsList.map((menuItem) => {
							const { title, to, icon } = menuItem;
							return (
								<Item
									key={title}
									title={title}
									to={to}
									icon={icon}
									selected={selected}
									setSelected={setSelected}
								/>
							);
						})} */}
						{menuList.map((itemsList) => {
							return (
								<Box key={itemsList.id}>
									<Typography
										variant='h6'
										color={colors.grey[300]}
										sx={{ m: '15px 0 5px 20px' }}
									>
										{itemsList.category}
									</Typography>
									{itemsList.list.map((menuItem) => {
										const { title, to, icon } = menuItem;
										return (
											<Item
												key={title}
												title={title}
												to={to}
												icon={icon}
												selected={selected}
												setSelected={setSelected}
											/>
										);
									})}
								</Box>
							);
						})}
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default Sidebar;
