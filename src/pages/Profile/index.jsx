import { useParams } from 'react-router-dom';

function Profile() {
    const { nickname } = useParams();

    // Kiểm tra nếu không có dấu @ thì trả về 404
    if (!nickname.startsWith('@')) {
        return <div style={{ padding: 20, fontWeight: 'bold' }}>404 - Not Found</div>;
    }

    const cleanNickname = nickname.slice(1); // Bỏ dấu @

    return (
        <div style={{ padding: 20 }}>
            <h1>Trang cá nhân của @{cleanNickname}</h1>
            <p>Đây là nơi hiển thị profile user.</p>
        </div>
    );
}

export default Profile;
