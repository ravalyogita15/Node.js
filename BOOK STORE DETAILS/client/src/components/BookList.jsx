import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const BookList = ({ books, handleDelete, handleEdit }) => {
  return (
    <Grid container spacing={4}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book._id}>
          <Card sx={{ borderRadius: 3, boxShadow: 4, overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="200"
              image={book.image || 'https://via.placeholder.com/200'}
              alt={book.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ backgroundColor: '#f8f9fa', padding: '16px' }}>
              <Typography variant="h6" gutterBottom>{book.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {book.author}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Price: ${book.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                {book.description}
              </Typography>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(book._id)}
                  sx={{ flex: 1, mr: 1 }}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(book)}
                  sx={{ flex: 1 }}
                >
                  Edit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
