import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiUserPlus,
  FiFilePlus,
} from 'react-icons/fi';
import { specificApis } from '../data/SpecificApis';
import PatientList from './PatientList';
// import ReportsEntry from './ReportsEntry';
import VerifyReports from './VerifyReports';
import FinancialAnalysis from './FinancialAnalysis';
import TestList from './TestList';
import OrganisationList from './OrganisationList';
import EmployeeList from './EmployeeList';
import Center from './LabCenter';
import LabProfile from './LabProfile';
const PatientListLink = () => {
    return <PatientList />;
  };

  const LinkItems = [
    { name: 'Patient List', icon: FiHome, component: <PatientList /> },
    // { name: 'Reports Entry', icon: FiTrendingUp, component: <ReportsEntry /> },
    { name: 'Verify Reports', icon: FiCompass, component: <VerifyReports /> },
    { name: 'Financial Analysis', icon: FiStar, component: <FinancialAnalysis /> },
    { name: 'Test List', icon: FiSettings, component: <TestList /> },
    { name: 'Organisation List', icon: FiSettings, component: <OrganisationList /> },
    { name: 'Employees', icon: FiSettings, component: <EmployeeList /> },
    { name: 'Center', icon: FiSettings, component: <Center /> },
    { name: 'Lab Profile', icon: FiSettings, component: <LabProfile /> },
  ];

export default function SidebarWithHeader({ children, onRegisterCustomerOpen, onNewBillOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        w={{ base: 'full', md: 60 }}
        onRegisterCustomerOpen={onRegisterCustomerOpen}
        onNewBillOpen={onNewBillOpen}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Flex flex="1" flexDirection="column">
        <MobileNav onOpen={onOpen} />
        <Box flex="1" p="4">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}

function SidebarContent({ onClose, onRegisterCustomerOpen, onNewBillOpen, ...rest }) {
  const customLinkItems = [
    ...LinkItems,
    { name: 'Register New Customer', icon: FiUserPlus, onClick: onRegisterCustomerOpen },
    { name: 'Create New Bill', icon: FiFilePlus, onClick: onNewBillOpen },
  ];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('red', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {customLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={link.onClick}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

function NavItem({ icon, component, onClick, ...rest }) {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} onClick={onClick}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {component}
      </Flex>
    </Link>
  );
}

function MobileNav({ onOpen, ...rest }) {
  return (
    <Flex
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('green', 'gray.900')}
      justifyContent="space-between"
      {...rest}>
      <Text
        ml={4}
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}></Flex>
      </HStack>
    </Flex>
  );
}

