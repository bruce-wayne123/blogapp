import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(Link)` color: #9e9e9e;text-decoration: none;
&:hover{text-decoration: underline;}

`;
function Navbar() {
    return (
        <div>
            <ul id="nav">
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li> <StyledLink to="/create-post">Create Post</StyledLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;