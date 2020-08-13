import Post from '../models/post_model';

export const createPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    tags: req.body.tags.split(' '),
    content: req.body.content,
    coverUrl: req.body.coverUrl,
    artist: req.body.artist,
  });
  post.save()
    .then((result) => {
      res.json({ message: 'Post created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const getPosts = (req, res) => {
  Post.find()
    .then((result) => {
      // sorting: https://www.javascripttutorial.net/javascript-array-sort/
      result.sort((a, b) => { return ((a.createdAt < b.createdAt) ? 1 : -1); });
      res.send(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ message: 'deleted post' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      tags: req.body.tags.split(' '),
      content: req.body.content,
      coverUrl: req.body.coverUrl,
      artist: req.body.artist,
    },
    { new: true },
  )
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const search = (req, res) => {
  // https://docs.mongodb.com/manual/text-search/
  // https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs
  // https://stackoverflow.com/questions/59727855/how-to-query-mongodb-database-using-mongodb-express-react-and-node
  Post.find(
    { $text: { $search: req.params.request } },
    { score: { $meta: 'textScore' } },
  )
    .sort({ score: { $meta: 'textScore' } })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
