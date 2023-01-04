// import axios from "axios";
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Heading,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";
// export const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   // const [show, setShow] = useState(false);
//   // const handleClick = () => setShow(!show);
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userData, setUserData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone_no: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//     console.log(e.target);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUserData([...data, userData]);

//     axios
//       .post("https://shy-rose-trout-sock.cyclic.app/register", userData)
//       .then(() => {
//         alert("SignUp Successfully");
//         swal("Account Created Successfully!", "", "success");
//         navigate("/login");
//         setUserData({
//           first_name: "",
//           last_name: "",
//           email: "",
//           phone_no: "",
//           password: "",
//         });
//       });
//   };
//   // useEffect(() => {
//   //   getdata();
//   // }, []);

//   // const getdata = () => {
//   //   axios.get("https://flat.onrender.com/register").then((res) => {
//   //     setData(res.data);
//   //     console.log(res.data);
//   //   });
//   // };
//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} minW={"sm"} py={12} px={6}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"} textAlign={"center"}>
//             Sign up
//           </Heading>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           w="350px"
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spacing={3}>
//             <HStack>
//               <Box>
//                 <FormControl id="firstName" isRequired>
//                   <FormLabel>First Name</FormLabel>
//                   <Input
//                     name="first_name"
//                     type="text"
//                     onChange={handleChange}
//                     value={userData.first_name}
//                   />
//                 </FormControl>
//               </Box>
//               <Box>
//                 <FormControl id="lastName">
//                   <FormLabel>Last Name</FormLabel>
//                   <Input
//                     name="last_name"
//                     type="text"
//                     onChange={handleChange}
//                     value={userData.last_name}
//                   />
//                 </FormControl>
//               </Box>
//             </HStack>
//             <FormControl id="email" isRequired>
//               <FormLabel>Email address</FormLabel>
//               <Input
//                 name="email"
//                 type="email"
//                 onChange={handleChange}
//                 value={userData.email}
//               />
//             </FormControl>
//             <FormControl id="phone" isRequired>
//               <FormLabel>Phone no.</FormLabel>
//               <Input
//                 name="phone_no"
//                 type="Phone no."
//                 onChange={handleChange}
//                 value={userData.phone_no}
//               />
//             </FormControl>
//             <FormControl id="password" isRequired>
//               <FormLabel>Password</FormLabel>
//               <InputGroup>
//                 <Input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   onChange={handleChange}
//                   value={userData.password}
//                 />
//                 <InputRightElement h={"full"}>
//                   <Button
//                     variant={"ghost"}
//                     onClick={() =>
//                       setShowPassword((showPassword) => !showPassword)
//                     }
//                   >
//                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>
//             </FormControl>
//             <Stack spacing={10}>
//               <Button
//                 onClick={handleSubmit}
//                 loadingText="Submitting"
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//               >
//                 Sign up
//               </Button>
//             </Stack>
//             <Stack pt={6}>
//               <Link color={"blue.400"} to="/login">
//                 Already a User Login
//               </Link>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// };

//////////////////////////////////////////////////////////////

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

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    password: "",
  });

  const [data, setData] = useState([]);

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
      .post("https://shy-rose-trout-sock.cyclic.app/register", userData)
      .then(() => {
        // alert("SignUp Successfully");
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
  // useEffect(() => {
  //   getdata();
  // }, []);

  // const getdata = () => {
  //   axios.get("https://shy-rose-trout-sock.cyclic.app/register").then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      bg="rgb(15,6,23)"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} minW={"sm"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color="white">
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

// import {
//   Box,
//   Button,
//   Heading,
//   Center,
//   InputGroup,
//   InputRightElement,
//   Text,
//   Input,
// } from "@chakra-ui/react";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const Signup = () => {
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const handleClick = () => setShow(!show);

//   const [userData, setUserData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//     phone_no: "",
//   });

//   const [data, setData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//     console.log(e.target);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUserData([...data, userData]);

//     axios
//       .post("https://apartmentauth.herokuapp.com/register", userData)
//       .then(() => {
//         alert("SignUp Successfully");
//         navigate("/login");

//         setUserData({
//           first_name: "",
//           last_name: "",
//           email: "",
//           password: "",
//           phone_no: "",
//         });
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     axios.get("https://apartmentauth.herokuapp.com/register").then((res) => {
//       setData(res.data);
//       console.log(res.data);
//     });
//   };

//   return (
//     <Box
//       m="auto"
//       mt="50px"
//       w="995px"
//       h="940px"
//       border="1px solid white"
//       fontFamily='"Trade Gothic W01 Light", Arial, sans-serif'
//     >
//       <Heading
//         mt="35px"
//         as="h1"
//         fontWeight="400"
//         fontSize="24px"
//         p="0px 0px 15px"
//       >
//         Create an Account
//       </Heading>
//       <Box bg={"black"} border="1px solid white"></Box>
//       <Box w="360px" h="620px" m="auto" mt="15px">
//         <Text color="#333333" fontSize="14px">
//           First Name
//         </Text>
//         <Input
//           name="first_name"
//           onChange={handleChange}
//           value={userData.first_name}
//           mt="12px"
//           borderRadius="none"
//           w="356px"
//           h="35px"
//         />
//         <Text mt="45px">Last Name</Text>
//         <Input
//           name="last_name"
//           onChange={handleChange}
//           value={userData.last_name}
//           mt="12px"
//           borderRadius="none"
//           w="356px"
//           h="35px"
//         />
//         <Text mt="45px">Email Name</Text>
//         <Input
//           name="email"
//           onChange={handleChange}
//           value={userData.email}
//           mt="12px"
//           borderRadius="none"
//           w="356px"
//           h="35px"
//         />
//         <Text mt="45px">Phone</Text>
//         <Input
//           name="phone_no"
//           onChange={handleChange}
//           value={userData.phone_no}
//           mt="12px"
//           borderRadius="none"
//           w="356px"
//           h="35px"
//         />
//         <Text mt="45px">Password</Text>
//         <InputGroup size="md">
//           <Input
//             name="password"
//             onChange={handleChange}
//             value={userData.password}
//             borderRadius="none"
//             mt="2px"
//             w="356px"
//             h="35px"
//             pr="4.5rem"
//             type={show ? "text" : "password"}
//           />
//           <InputRightElement width="4.5rem">
//             <Button
//               h="35px"
//               fontSize="13px"
//               bg="none"
//               borderRadius="none"
//               onClick={handleClick}
//             >
//               {show ? "HIDE" : "SHOW"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//         <Center mt="45px">
//           <Button
//             onClick={handleSubmit}
//             w="196px"
//             h="35px"
//             colorScheme="blue"
//             borderRadius="none"
//             m="auto"
//             fontSize="11px"
//           >
//             CREATE AN ACCOUNT
//           </Button>
//         </Center>
//       </Box>
//     </Box>
//   );
// };
