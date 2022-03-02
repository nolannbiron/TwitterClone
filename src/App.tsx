import React from 'react';
import { Box, ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import customTheme from './theme';
import { BrowserRouter, Routes, Route, Outlet, OutletProps } from 'react-router-dom';
import Auth from './pages/Auth';
import { AppWrapper, BodyWrapper } from './components/Layout/styled';
import { Menu, MenuRight } from './components/Menu';
import FeedPage from './pages/Feed';
import BookmarksPage from './pages/Bookmarks';
import NotificationsPage from './pages/Notifications';
import SettingsPage from './pages/Settings';


const Wrapper = () => {
	return(
		<AppWrapper>
			<Menu />
			<Box height="100vh" width={["100%", "100%", "100%", "auto"]} minWidth={'40%'}>
				<Outlet />
			</Box>
			<MenuRight />
		</AppWrapper>
	)
}

function App() {
	return (
		<BrowserRouter>
			<ChakraProvider theme={customTheme}>
				<CSSReset />
				<ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
				<Routes>
					<Route element={<Wrapper />} path="/">
						<Route index element={<FeedPage />} />
						<Route path="sauvegarde" element={<BookmarksPage />} />
						<Route path="notifications" element={<NotificationsPage />} />
						<Route path="reglages" element={<SettingsPage />} />
					</Route>
					<Route element={<Auth />} path="login" />
				</Routes>
			</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;
