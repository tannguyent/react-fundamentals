import Flex from "components/Layout/Flex"
import Text from "components/Text"
import NavBarLink from "./NavBarLink"

const Header = () => {
    return (
    <Flex justifyContent='space-between' alignItems='center' bg='gray300' pl='4'>
        <Text color='black' fontSize='l' >React Boilerplate</Text>
        <Flex>
            <NavBarLink title='Memo' to='/memo' activeClassName="active">Memo</NavBarLink>
            <NavBarLink title='Hook' to='/hooks' activeClassName="active">Hooks</NavBarLink>
            <NavBarLink title='Hook' to='/context' activeClassName="active">React Context</NavBarLink>
            <NavBarLink title='Hook' to='/redux' activeClassName="active">Redux</NavBarLink>
        </Flex>
    </Flex>)
}

export default Header