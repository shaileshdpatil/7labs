import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Divider,
  Textarea,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter,Container
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { specificApis } from '../data/SpecificApis';

export default function RegisterCustomer() {
  const [formData, setFormData] = useState({
    patientId: 'AUTOGENERATED', // Assuming it's auto-generated and non-editable
    designation: '',
    firstName: '',
    lastName: '',
    phone: '',
    gender: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    pincode: '',
    age: '',
    ageType: 'Years',
    sampleCollector: '',
    organisation: '',
    sampleCollectedAt: '',
    referralType: '',
    doctorHospitalName: '',
    degree: '',
    complements: '',
    searchQuery: '',
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    onOpen();
  };

  const closeModal = () => {
    setActiveModal(null);
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    console.log('Searching for:', formData.searchQuery);
    specificApis.
    // Implement your search logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Placeholder for your submission logic
  };

  return (
    <main className="flex min-h-screen  flex-col items-center justify-center bg-red-700 w-full">
      <form onSubmit={handleSubmit}>
        <Stack spacing={20}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Register Customer</Text>
          <form onSubmit={handleSearch}>
            <Flex>
          <Input name="search" bg="black" color="blue.500" placeholder="Search by Patient ID, Email, or Mobile No" mb={4} />
          <Button ml={2} colorScheme="blue" type="submit">Search</Button>
            </Flex>
          </form>
          <Divider />
          <FormControl isReadOnly>
            <FormLabel>Patient ID</FormLabel>
            <Input name="patientId" bg="black" color="blue.500" value={formData.patientId} readOnly />
          </FormControl>
          <Flex flexDirection="row" justifyContent="space-between">
          <Select
    name="designation"
    bg="black"
    color="blue.500"
    value={formData.designation}
    onChange={handleInputChange}
    placeholder="Select designation"
  >
    <option value="Mr">Mr.</option>
    <option value="Mrs">Mrs.</option>
    <option value="Ms">Ms.</option>
  </Select>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input name="firstName" bg="black" color="blue.500"  value={formData.firstName} onChange={handleInputChange} />
          </FormControl>
          
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input name="lastName"  bg="black" color="blue.500" value={formData.lastName} onChange={handleInputChange} />
          </FormControl>
          
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input name="phone" type="tel" bg="black" color="blue.500" value={formData.phone} onChange={handleInputChange} />
          </FormControl>
          </Flex>
          <Flex flexDirection="row" justifyContent="space-between">
          <FormControl>
            <FormLabel>Email ID</FormLabel>
            <Input name="email" type="email" bg="black" color="blue.500" value={formData.email} onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <Flex align="center">
              <Input name="age" type="number" bg="black" color="blue.500" value={formData.age} onChange={handleInputChange} marginRight={2} />
              <Select name="ageType" bg="black" color="blue.500" value={formData.ageType} onChange={handleInputChange}>
                <option value="Years">Years</option>
                <option value="Months">Months</option>
              </Select>
            </Flex>
          </FormControl>
          
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select name="gender" bg="black" color="blue.500" value={formData.gender} onChange={handleInputChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>
          </Flex>
          <Flex flexDirection="row" justifyContent="space-between" wrap="wrap">
          <FormControl width="25%" mb={2}>
            <FormLabel>Address Line 1</FormLabel>
            <Textarea name="addressLine1"  bg="black" color="blue.500" value={formData.addressLine1} onChange={handleInputChange} />
          </FormControl>
          
          <FormControl width="25%" mr={2}>
            <FormLabel>Address Line 2</FormLabel>
            <Textarea name="addressLine2" bg="black" color="blue.500" value={formData.addressLine2} onChange={handleInputChange} />
          </FormControl>
          
          <FormControl width="25%" mr={2}>
            <FormLabel>Address Line 3</FormLabel>
            <Textarea name="addressLine3" bg="black" color="blue.500" value={formData.addressLine3} onChange={handleInputChange} />
          </FormControl>
          <FormControl width="25%" mr={2}>
            <FormLabel>Pincode</FormLabel>
            <Input name="pincode" bg="black" color="blue.500" value={formData.pincode} onChange={handleInputChange} />
          </FormControl>
          </Flex>
          <Flex flexDirection="row" justifyContent="space-between">
          <FormControl>
            <FormLabel>Sample Collector</FormLabel>
            <Flex align="center">
              <Select name="sampleCollector" bg="black" color="blue.500" value={formData.sampleCollector} onChange={handleInputChange} flex={1}>
                {/* Add options dynamically here */}
              </Select>
              <IconButton aria-label="Add new collector" icon={<AddIcon />} onClick={() => openModal('collector')} ml={2} />
            </Flex>
          </FormControl>
          
          <FormControl>
            <FormLabel>Organisation</FormLabel>
            <Flex align="center">
              <Select name="organisation" bg="black" color="blue.500" value={formData.organisation} onChange={handleInputChange} flex={1}>
                {/* Add options dynamically here */}
              </Select>
              <IconButton aria-label="Add new organisation" icon={<AddIcon />} onClick={() => openModal('organisation')} ml={2} />
            </Flex>
          </FormControl>
          
          <FormControl>
            <FormLabel>Sample Collected At</FormLabel>
            <Flex align="center">
              <Select name="sampleCollectedAt" bg="black" color="blue.500" value={formData.sampleCollectedAt} onChange={handleInputChange} flex={1}>
                {/* Add options dynamically here */}
              </Select>
              <IconButton aria-label="Add new sample location" icon={<AddIcon />} onClick={() => openModal('sample')} ml={2} />
            </Flex>
          </FormControl>
          </Flex>
          <Button colorScheme="blue" type="submit">Go to Billing</Button>
        </Stack>
      </form>
      <Container centerContent >
      <Modal isOpen={isOpen} onClose={onClose}  closeOnOverlayClick={false} >
        <ModalOverlay />
        <ModalContent size="sm" marginY="250" marginX="250" marginBottom="2500" bg="green" color="blue.500">
          <ModalHeader>Add New Organisation Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {activeModal === 'organisation' && (
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Referral Type (Doctor/Hospital)</FormLabel>
                <Select name="referralType" bg="red" color="blue.500" onChange={handleInputChange} placeholder="Select type">
                  <option value="Doctor">Doctor</option>
                  <option value="Hospital">Hospital</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input bg="red" color="blue.500" name="doctorHospitalName" onChange={handleInputChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Degree</FormLabel>
                <Input name="degree" bg="red" color="blue.500" onChange={handleInputChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Complements</FormLabel>
                <Textarea name="complements" bg="red" color="blue.500" onChange={handleInputChange} />
              </FormControl>
            </Stack>
            )}
            {activeModal === 'collector' && (
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Sample Collector Name</FormLabel>
                  <Input name="sample collector" onChange={handleInputChange} />
                </FormControl>
                {/* Additional fields for organisation if necessary */}
              </Stack>
            )}
            {activeModal === 'sample' && (
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Sample Location</FormLabel>
                  <Input name="sampleLocation" onChange={handleInputChange} />
                </FormControl>
                {/* Additional fields for sample location if necessary */}
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={() => {
              console.log('Saving Organisation Details');
              onClose(); // Assuming you handle the save logic
            }}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Container>
    </main>
  );
}
