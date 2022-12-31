import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...data, userData]);

    axios
      .post("https://apartmentauth.herokuapp.com/register", userData)
      .then(() => {
        alert("SignUp Successfully");
        swal("Account Created Successfully!", "", "success");
        navigate("/login");
        setUserData({
          first_name: "",
          last_name: "",
          email: "",
          phone_no: "",
          password: "",
        });
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get("https://apartmentauth.herokuapp.com/register").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} minW={"sm"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          w="350px"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={3}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="first_name"
                    type="text"
                    onChange={handleChange}
                    value={userData.first_name}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="last_name"
                    type="text"
                    onChange={handleChange}
                    value={userData.last_name}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                value={userData.email}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone no.</FormLabel>
              <Input
                name="phone_no"
                type="Phone no."
                onChange={handleChange}
                value={userData.phone_no}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  value={userData.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Link color={"blue.400"} to="/login">
                Already a User Login
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
