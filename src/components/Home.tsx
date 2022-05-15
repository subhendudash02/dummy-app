import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const routeChange = () => {
        let path = `/NewPage`;
        navigate(path);
    }

    return (
        <div className="Home">
            <Button variant="contained" onClick={ routeChange }>Click Me</Button>
        </div>
    );
}

export default Home;