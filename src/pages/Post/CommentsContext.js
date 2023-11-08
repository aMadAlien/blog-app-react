import React, { createContext, useState } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [newComment, setNewComment] = useState([]);

  return (
    <CommentsContext.Provider value={{ newComment, setNewComment }}>
      {children}
    </CommentsContext.Provider>
  );
};
