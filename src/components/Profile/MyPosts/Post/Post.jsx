import s from './Post.module.css'

const Post = (props) => {
  return <div className={s.item}>
    <img src="https://cdn1.flamp.ru/2dfc4c6f81784fec63efada11464f3db.jpg" alt="avatar" />
        {props.message}
        <div>
          <span>Like</span>
          {props.likesCount}
        </div>
  </div>
}

export default Post;