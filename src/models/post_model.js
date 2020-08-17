import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PostSchema = new Schema({
  title: String,
  tags: Array, // https://mongoosejs.com/docs/schematypes.html#arrays
  content: String,
  coverUrl: String,
  artist: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

// https://docs.mongodb.com/manual/text-search/
// PostSchema.index(
//  { title: 'text', tags: 'text', artist: 'text' },
//  { weights: { title: 3, artist: 3, tags: 2 } },
// );

// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
