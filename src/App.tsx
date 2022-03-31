import React, { useEffect } from 'react';
import { Box, ChakraProvider, ColorModeScript, CSSReset, Spinner } from '@chakra-ui/react';
import customTheme from './theme';
import { BrowserRouter, Routes, Route, Outlet, OutletProps, useNavigate, RouteObject, RouteProps, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import { AppWrapper, BodyWrapper } from './components/Layout/styled';
import { Menu, MenuRight } from './components/Menu';
import FeedPage from './pages/Feed';
import BookmarksPage from './pages/Bookmarks';
import NotificationsPage from './pages/Notifications';
import SettingsPage from './pages/Settings';
import LoginPage  from './pages/Auth';
import {Provider as ReduxProvider} from 'react-redux';
import store from './state';
import { useUser } from './state/auth/hooks';
import PostPage from './pages/Post';
import ProfilePage from './pages/Profile';

const Wrapper = () => {
	const user = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if(!user.loggedIn && !user.loading && !user.initialized){
			navigate('/login');
		}
	}, [user]);

	return !user.loading ? (
		<AppWrapper>
			<Menu />
			<Box height="100vh" width={["100%", "100%", "100%", "40%"]} minWidth={'40%'}>
				<Outlet />
			</Box>
			<MenuRight />
		</AppWrapper>
	) : (
		<AppWrapper>
			<Spinner />
		</AppWrapper>
	);
}

function App() {
	return (
		<ReduxProvider store={store}>
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
							<Route path="post/:id" element={<PostPage />} />
							<Route path="profile/:id" element={<ProfilePage />} />
						</Route>
						<Route path="login" element={<LoginPage />} />
					</Routes>
				</ChakraProvider>
			</BrowserRouter>
		</ReduxProvider>
	);
}

export default App;
