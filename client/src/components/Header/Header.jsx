import React, { lazy, Suspense } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, TextField, Tooltip } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, Notifications, MoreVert, Search, GroupAdd, TurnLeftOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import colors from '../../../constants/colors';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { server } from '../../../constants/config';
import { useDispatch, useSelector } from 'react-redux';
import { reduxLogout } from '../../redux/reducers/auth';
import toast from 'react-hot-toast';
import { setIsMobile } from '../../redux/reducers/deviceSlice';
import { setIsSearch } from '../../redux/reducers/searchSlice';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const {isSearch} = useSelector((state)=> state.search)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [groupChatOpen, setGroupChatOpen] = React.useState(false);
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const [newGroupDialogOpen, setNewGroupDialogOpen] = React.useState(false);

    const dispatch = useDispatch();

    const SearchDialog = lazy(()=> import("../dialogs/Search"))
    const NotificationsDialog = lazy(()=> import("../dialogs/Notifications"))
    const NewGroupDialog = lazy(()=> import("../dialogs/NewGroup"))

    const navigate = useNavigate();

    const navigateToGroup = ()=>{}

    const handleOpenMenu = () => {
        dispatch(setIsMobile(true))
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchOpen = () => {
       dispatch(setIsSearch(TurnLeftOutlined))
    };

    const handleSearchClose = () => {
        dispatch(setIsSearch(false))
    };

    const handleGroupChatOpen = () => {
        setGroupChatOpen(true);
    };

    const handleGroupChatClose = () => {
        setGroupChatOpen(false);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const CustomIconButton = ({title, onClick , icon}) => {
        return   <Tooltip title={title}>
        <IconButton color="inherit" onClick={onClick}>
            {icon}
        </IconButton>
    </Tooltip>

    }

    const handleLogout = async () => {
      try {
        const {data} = await axios.get(`${server}/api/v1/user/logout`,{
            withCredentials:true
        });

        toast.success(data.message);

        console.log(data);
        dispatch(reduxLogout());
        
      } catch (error) {
        toast.error(error.message)
        console.log(error)
      }
        handleMenuClose();
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: colors.primaryColors.light }}>
            <Toolbar>
                {isMobile && (
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={
                        handleOpenMenu
                    }>
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    ChatApp
                </Typography>
                {!isMobile && (
                    <Box sx={{ display: 'flex' }}>
                        <CustomIconButton icon={  <Search />} onClick={handleSearchOpen} title={"search"} />
                        <CustomIconButton icon={    <GroupAdd />} onClick={handleGroupChatOpen} title={"new group"} />
                        <CustomIconButton icon={    <Notifications />} onClick={handleSearchOpen} title={"notifications"} />
                     
                    
                      
                        <Tooltip title="profile">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
                {isMobile && (
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <MoreVert />
                    </IconButton>
                )}
            </Toolbar>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>

            {/* Search Dialog */}
            { isSearch && (
                <Suspense fallback={<div>...</div>}>
                    <SearchDialog onClose={handleSearchClose} />
                </Suspense>
            )}

{ notificationsOpen && (
                <Suspense fallback={<div>...</div>}>
                    <NotificationsDialog />
                </Suspense>
            )}

{ newGroupDialogOpen && (
                <Suspense fallback={<div>...</div>}>
                    <NewGroupDialog />
                </Suspense>
            )}



            {/* Group Chat Dialog */}

        </AppBar>
    );
};

export default Header;
