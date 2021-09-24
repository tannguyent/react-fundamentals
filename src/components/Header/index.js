import Flex from "components/Layout/Flex"
import NavBar from "./NavBar"
import NavBarLink from "./NavBarLink"
import Text from "components/Text"

const Header = () => {
    return (
    <Flex justifyContent='space-between' alignItems='center' bg='gray900' p='4'>
        <Text color='white' >React Boilerplate</Text>
        <NavBar>
            <NavBarLink title='Memo' to='/memo' activeClassName="active">Memo</NavBarLink>
            <NavBarLink title='Hook' to='/hooks' activeClassName="active">Hooks</NavBarLink>
            <NavBarLink title='Hook' to='/context' activeClassName="active">React Context</NavBarLink>
            <NavBarLink title='Hook' to='/redux' activeClassName="active">Redux</NavBarLink>
        </NavBar>
    </Flex>)
}

export default Header