import { Navbar, Text, Button } from '@nextui-org/react';

const NavbarComponent = () => {
  return (
    <Navbar isCompact variant={"static"}>
      <Navbar.Brand>
        <Text b color="inherit">
          BugBuddies
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="md">
        <Navbar.Link href="#">Vision</Navbar.Link>
        <Navbar.Link href="#">Community</Navbar.Link>
        <Navbar.Link href="#">Contact Us</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link href="#">Login</Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Sign Up
          </Button> 
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComponent;
