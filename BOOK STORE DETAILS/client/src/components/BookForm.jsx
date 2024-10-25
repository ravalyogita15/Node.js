import React from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@mui/material';

const BookForm = ({ open, handleClose, handleSubmit, book, handleInputChange, isEdit }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{isEdit ? 'Edit Book' : 'Add New Book'}</DialogTitle>
      <DialogContent sx={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Book Name"
            name="name"
            fullWidth
            margin="normal"
            value={book.name}
            onChange={handleInputChange}
            required
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Author"
            name="author"
            fullWidth
            margin="normal"
            value={book.author}
            onChange={handleInputChange}
            required
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Image URL"
            name="image"
            fullWidth
            margin="normal"
            value={book.image}
            onChange={handleInputChange}
            required
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            fullWidth
            margin="normal"
            value={book.price}
            onChange={handleInputChange}
            required
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={book.description}
            onChange={handleInputChange}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          {isEdit ? 'Update Book' : 'Add Book'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookForm;
