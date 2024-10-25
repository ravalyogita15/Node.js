import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Box } from '@mui/material';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  const [data, setData] = useState([]);
  const [book, setBook] = useState({ name: "", author: "", image: "", price: "", description: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const fetchBooks = () => {
    axios.get('http://localhost:8080/')
      .then((response) => setData(response.data))
      .catch((err) => console.error('Error fetching books:', err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      axios.put(`http://localhost:8080/${book._id}`, book)
        .then(() => {
          fetchBooks();
          resetForm();
          handleClose();
        })
        .catch((err) => console.error('Error updating book:', err));
    } else {
      axios.post('http://localhost:8080/', book)
        .then(() => {
          fetchBooks();
          resetForm();
          handleClose();
        })
        .catch((err) => console.error('Error adding book:', err));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/${id}`)
      .then(() => fetchBooks())
      .catch((err) => console.error('Error deleting book:', err));
  };

  const handleEdit = (book) => {
    setBook(book);
    setIsEdit(true);
    handleClickOpen();
  };

  const resetForm = () => {
    setBook({ name: "", author: "", image: "", price: "", description: "" });
    setIsEdit(false);
  };

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Book Store
        </Typography>

        <Button variant="contained" color="primary" onClick={handleClickOpen} fullWidth>
          Add New Book
        </Button>

        <BookForm
          open={open}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          book={book}
          handleInputChange={handleInputChange}
          isEdit={isEdit}
        />

        <BookList
          books={data}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </Box>
    </Container>
  );
};

export default App;
