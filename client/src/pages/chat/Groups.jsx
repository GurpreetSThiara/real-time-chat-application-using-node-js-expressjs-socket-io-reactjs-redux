import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Grid,
  Drawer,
} from "@mui/material";
import { Add, Delete, Done, Edit, KeyboardBackspace, Menu } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import GroupList from "../../components/groups/GroupList";

const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("Group Name");
  const [groupNameInput, setGroupNameInput] = useState(groupName);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openAddMemberDialog, setOpenAddMemberDialog] = useState(false);
  const [newMember, setNewMember] = useState("");
  const navigate = useNavigate();

  const chatId = useSearchParams()[0].get("group");

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const handleUpdateGroupName = () => {
    setIsEdit(false);
  };

  const handleDelete = () => {
    // Logic to delete the group
    setOpenDeleteDialog(false);
  };

  const handleAddMember = () => {
    // Logic to add a member
    setOpenAddMemberDialog(false);
  };

  const BtnGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4 rem",
      }}
    >
      <Button startIcon={<Delete />} onClick={() => setOpenDeleteDialog(true)}>
        Delete Group
      </Button>
      <Button startIcon={<Add />} onClick={() => setOpenAddMemberDialog(true)}>
        Add member
      </Button>
    </Stack>
  );

  useEffect(() => {
    setGroupName(groupNameInput);

    return () => {
      setGroupName("");
      setGroupNameInput("");
    };
  }, [chatId]);

  const GroupName = (
    <Stack>
      {isEdit ? (
        <>
          <TextField
            value={groupNameInput}
            onChange={(e) => setGroupNameInput(e.target.value)}
          />
          <IconButton onClick={handleUpdateGroupName}>
            <Done />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h6">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <Edit />
          </IconButton>
        </>
      )}
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <GroupList myGroups={[]} chatId={"dsf"} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          padding: "1rem 3rem",
        }}
      >
        <Tooltip title="back">
          <IconButton onClick={navigateBack}>
            <KeyboardBackspace />
          </IconButton>
        </Tooltip>

        {GroupName}

        <Typography>Members</Typography>

        <Stack overflow={"auto"}></Stack>

        {BtnGroup}
      </Grid>
      <Drawer
        sx={{
          display: { xs: "block", sm: "none" },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        Group List
      </Drawer>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this group? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Member Dialog */}
      <Dialog
        open={openAddMemberDialog}
        onClose={() => setOpenAddMemberDialog(false)}
      >
        <DialogTitle>Add New Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Member Name or Email"
            fullWidth
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddMemberDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddMember} color="primary">
            Add Member
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
///
export default Groups;
