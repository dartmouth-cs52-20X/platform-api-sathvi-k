import Post from '../models/post_model';

export const createPost = (req, res) => {
  const post = new Post({
    title: req.body.title, tags: req.body.tags, content: req.body.content, coverUrl: req.body.coverUrl,
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
      coverUrl: req.body.coverUrl,
      content: req.body.content,
      tags: req.body.tags,
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
