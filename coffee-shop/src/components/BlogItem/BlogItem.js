import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BlogItem.module.scss';

const cx = classNames.bind(styles);

function BlogItem({
    to,
    blog
    }) {

    return ( 
        <div className={cx("blog__item")}>
            <Link to={to}>
                <div className={cx("blog__image")}>
                    <img src={blog.thumnailUrl} alt=""/>
                </div>
            </Link>
            <h5 className={cx("blog__title")}>
                <Link to={to}>
                {blog.name} </Link>
            </h5>
            <p>{blog.description}</p>
            <Link to={to} className={cx("blog__more")}>
                <span>Read More</span>
            </Link>
        </div>
    );
}

export default BlogItem;