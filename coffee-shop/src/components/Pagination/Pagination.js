import classNames from "classnames/bind";
import '@fortawesome/fontawesome-free/css/all.min.css';

import styles from './Pagination.module.scss';
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Pagination({pagination, onPageChange}) {
    const {_limit, _page, _totalRows} = pagination;
    const totalPage = Math.ceil(_totalRows/_limit);
    const [pages, setPages] = useState(() => {
        return Array.from({length: totalPage}, (v, k) => k + 1);
    });
    // 51/10 = 5.1 -> ceil lam tron len la 6

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    useEffect(() => {
        setPages(
            [...Array.from({length: totalPage}, (v, k) => k + 1)]
        )
    }, [_totalRows, _limit])

    return ( 
        <div className={cx('wrapper__pagination')}>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                <i className ="fas fa-angle-left"></i>
            </button>
            {pages && pages.map((page, index) => (
                <button key={index} onClick={() => handlePageChange(page)} className={cx({
                    'active': page === _page
                })}>
                    {page}
                </button>
            ))}
            <button
                disabled={_page >= totalPage}
                onClick={() => handlePageChange(_page + 1)}
            >
                <i className ="fas fa-angle-right"></i>
            </button>
        </div>
     );
}

export default Pagination;