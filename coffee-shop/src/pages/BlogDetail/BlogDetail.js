import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./BlogDetail.module.scss";

const cx = classNames.bind(styles);

function BlogDetail() {
  return (
    <div className={cx('wrapper')}>
        <div className="grid">
            <div className="row">
                <div className="col-sm-12 col-lg-8">
                    <div className={cx('blog-left')}>
                        <div className={cx('blog__image')}>
                            <img alt="ima" src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-2.jpg"/>
                        </div>
                        <div className={cx('blog__info')}>
                            <span>by</span>
                            <Link to={'/'}>Sharon Garcia </Link>
                            <span className={cx('date')}>02/04/2018</span>
                        </div>
                        <div className={cx('blog__text-main')}>
                            <h3>FRENCH PRESS</h3>
                            <div className={cx('blog__content')}>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. morbi accumsan ipsum velit nam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className={cx('blog-right')}>
                        <h5 className={cx('title')}>Latest Posts</h5>
                        <div>
                            <Link to={'/'}>
                                <div className={cx('blog__item-image')}>
                                    <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-20-150x150.jpg" alt="ad"/>
                                </div>
                                <div className={cx('blog__item-content')}>
                                    <p>Coffee Consumption</p>
                                    <span>02/04/2018</span>
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className={cx('blog__item-image')}>
                                    <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-20-150x150.jpg" alt="ad"/>
                                </div>
                                <div className={cx('blog__item-content')}>
                                    <p>Coffee Consumption</p>
                                    <span>02/04/2018</span>
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className={cx('blog__item-image')}>
                                    <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-20-150x150.jpg" alt="ad"/>
                                </div>
                                <div className={cx('blog__item-content')}>
                                    <p>Coffee Consumption</p>
                                    <span>02/04/2018</span>
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className={cx('blog__item-image')}>
                                    <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-20-150x150.jpg" alt="ad"/>
                                </div>
                                <div className={cx('blog__item-content')}>
                                    <p>Coffee Consumption</p>
                                    <span>02/04/2018</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BlogDetail;
