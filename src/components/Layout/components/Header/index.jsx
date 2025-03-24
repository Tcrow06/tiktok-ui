import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//dùng classnames.blind để có thể dùng tên class post-item
// thay vì postItem
const cx = classNames.bind(styles);
console.log(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                
            </div>
        </header>
    );
}

export default Header;
