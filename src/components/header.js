import Title from './title';
import Button from './button';

function Header() {
    return (
        <div>
            <Title/>
            <p>This is Headear paragraph</p>
            <Button title="Button Text"/>
            <Button title="Button Text 2"/>
        </div>
    )
}

export default Header;