import Dropdown from 'react-bootstrap/Dropdown';

function DropdownButton() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic">
                Made with React by Gina Nikroo
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item className='justify-content-center py-3' href="https://github.com/GNikroo">
                    <i className="fa-brands fa-github pe-2"></i>
                    <span>github.com/GNikroo</span>
                </Dropdown.Item>
                <Dropdown.Item className='justify-content-center py-3' href="https://www.linkedin.com/in/gina-nikroo/">
                    <i className="fa-brands fa-linkedin pe-2"></i>
                    <span>linkedin.com/in/gina-nikroo</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownButton;