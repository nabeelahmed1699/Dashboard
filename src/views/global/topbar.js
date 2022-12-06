import React, { useContext } from 'react';

// mui imports
import { Box, Stack, IconButton, useTheme, InputBase } from '@mui/material';

// icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

// custom imports
import { ColorModeContext, tokens } from '../../theme';

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box display='flex' justifyContent='space-between' p={2}>
			{/* Search Bar */}
			<Box
				display='flex'
				backgroundColor={colors.primary[400]}
				borderRadius={'3px'}
			>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
				<IconButton sx={{ p: 1 }} type='button'>
					<SearchIcon />
				</IconButton>
			</Box>
			{/* ICONS */}
			<Box display='flex'>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<PersonOutlineOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
