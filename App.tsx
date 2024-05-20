import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  role: string;
  avatar: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = (newUser: Omit<User, 'id'>) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  const handleEditUser = (updatedUser: User) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Box mb={4}>
        <UserForm onSubmit={handleAddUser} />
      </Box>
      <UserTable 
        users={users} 
        onEditUser={handleEditUser} 
        onDeleteUser={handleDeleteUser} 
      />
    </Container>
  );
};

export default App;
