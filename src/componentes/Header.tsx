import {
    createStyles,
    Header,
    Menu,
    Group,
    Center,
    Burger,
    Image,
    Container,
    rem,
  } from "@mantine/core";
  import { useDisclosure } from "@mantine/hooks";
  import { IconChevronDown } from "@tabler/icons-react";
  import logoHeader from '../assets/logo.png'
  const useStyles = createStyles((theme) => ({
    header :{
     display:'flex',
     borderTop:'6px solid #6BC2B4',
     justifyContent:'space-between',
     alignItems: 'center',
    },

    inner: {
      height: rem(80),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    links: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: `${rem(20)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      fontFamily:'Roboto',
 
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.lg,
      fontWeight: 400,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[0],
      },
    },
  
    linkLabel: {
      marginRight: rem(5),
    },
  }));
  
  interface HeaderSearchProps {
    links: { link: string; label: string; links: { link: string; label: string }[] }[];
  }
  
function HeaderBar({ links }: HeaderSearchProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));
    
        if (menuItems) {
          return (
            <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
              <Menu.Target>
                <a
                  href={link.link}
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.linkLabel}>{link.label}</span>
                    <IconChevronDown size="0.9rem" stroke={1.5} />
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>{menuItems}</Menu.Dropdown>
            </Menu>
          );
        }
    
        return (
          <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            {link.label}
          </a>
        );
      });
    
      return (
        <Header height={120}   className={classes.header}>
          <Container>
          <Image
                width={100}
     
                fit="contain"
                height={180}
                src={logoHeader}
              />
          </Container>
          <Container>
            <div className={classes.inner}>
            
              <Group spacing={5} className={classes.links}>
                {items}
              </Group>
              <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            </div>
          </Container>
        </Header>
    );
  }
  
  
  export default HeaderBar;