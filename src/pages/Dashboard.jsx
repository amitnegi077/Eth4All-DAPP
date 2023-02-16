import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";

const initialRecords = [
  { id: 1, title: "Record 1", description: "This is record 1." },
  { id: 2, title: "Record 2", description: "This is record 2." },
  { id: 3, title: "Record 3", description: "This is record 3." },
];

const Dashboard = () => {
  const [records, setRecords] = useState(initialRecords);

  const handleAddRecord = () => {
    const newRecord = {
      id: Date.now(),
      title: "New Record",
      description: "",
    };
    setRecords([...records, newRecord]);
  };

  const handleEditRecord = (record) => {
    // TODO: Implement edit record functionality
  };

  const handleDeleteRecord = (record) => {
    const newRecords = records.filter((r) => r.id !== record.id);
    setRecords(newRecords);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddRecord}
        >
          Add Record
        </Button>
      </Box>
      <List sx={{ mb: 4 }}>
        {records.map((record) => (
          <ListItem key={record.id}>
            <ListItemText
              primary={record.title}
              secondary={record.description}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEditRecord(record)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteRecord(record)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
