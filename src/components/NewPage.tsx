import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NewPage() {
    const navigate = useNavigate();

    const routeChange = () => {
        navigate(-1);
    }
    return (
        <div className="NewPage">
            <h1>Hello</h1>
            <Button variant="contained" onClick={ routeChange }>Go Back</Button>
        </div>
    );
}

export default NewPage;