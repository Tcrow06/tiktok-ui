import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e623922f4be62aeacc02a72d6118c02a~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=cc769232&x-expires=1744599600&x-signature=2KVDxkuZdQBywiSYI%2Fmqg2%2Fgg9o%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2" alt=""/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;