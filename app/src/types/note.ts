export type NoteInput = {
  title: string;
  content: string;
};

export type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
