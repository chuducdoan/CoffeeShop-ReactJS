import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import blogApi from "~/api/blogApi";
import config from "~/config";
import { formatDate } from "~/util";

import styles from "./BlogDetail.module.scss";

const cx = classNames.bind(styles);

function BlogDetail() {

    const {blogId} = useParams();
    const [blog, setBlog] = useState({});
    const [blogNews, setBlogNews] = useState([]);

    useEffect(() => {
        try {
            const fetchBlog = async () => {
                const response = await blogApi.get(blogId);
                setBlog(response);
            }
            const fetchBlogNews = async () => {
                const params = {
                    _sort: 'createAt',
                    _order: 'desc',
                    _limit: 4
                }
                const response = await blogApi.getAll(params);
                setBlogNews(response.data);
            }
            fetchBlog();
            fetchBlogNews();
        } catch(error) {
            console.log(error);
        }
    }, [blogId]);

    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <div className="row">
                    <div className="col-sm-12 col-lg-8">
                        <div className={cx('blog-left')}>
                            <div className={cx('blog__image')}>
                                <img alt={blog.name} src={blog.thumnailUrl}/>
                            </div>
                            <div className={cx('blog__info')}>
                                <span>by</span>
                                <Link to={'/'}>Sharon Garcia </Link>
                                <span className={cx('date')}>{formatDate(blog.createAt)}</span>
                            </div>
                            <div className={cx('blog__text-main')}>
                                <h3>{blog.name}</h3>
                                <div className={cx('blog__content')}>
                                    <p>
                                        {blog.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className={cx('blog-right')}>
                            <h5 className={cx('title')}>Latest Posts</h5>
                            <div>
                                {blogNews.map((blog, index) => (
                                    <Link to={`${config.routes.blogDetail}/${blog.id}`} key={index}>
                                        <div className={cx('blog__item-image')}>
                                            <img src={blog.thumnailUrl} alt={blog.name}/>
                                        </div>
                                        <div className={cx('blog__item-content')}>
                                            <p>{blog.name}</p>
                                            <span>{formatDate(blog.createAt)}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
