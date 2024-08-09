import React, { lazy, Suspense } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, TextField, Tooltip } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, Notifications, MoreVert, Search, GroupAdd } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import colors from '../../../constants/colors';
import { useNavigate } from 'react-router';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [groupChatOpen, setGroupChatOpen] = React.useState(false);
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const [newGroupDialogOpen, setNewGroupDialogOpen] = React.useState(false);

    const SearchDialog = lazy(()=> import("../dialogs/Search"))
    const NotificationsDialog = lazy(()=> import("../dialogs/Notifications"))
    const NewGroupDialog = lazy(()=> import("../dialogs/NewGroup"))

    const navigate = useNavigate();

    const navigateToGroup = ()=>{}

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchOpen = () => {
        setSearchOpen(true);
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
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

    return (
        <AppBar position="static" sx={{ backgroundColor: colors.primaryColors.light }}>
            <Toolbar>
                {isMobile && (
                    <IconButton edge="start" color="inherit" aria-label="open drawer">
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
            </Menu>

            {/* Search Dialog */}
            { searchOpen && (
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
