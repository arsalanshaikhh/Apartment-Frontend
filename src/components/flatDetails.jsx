import axios from "axios";
// chakra
import {
  Box,
  GridItem,
  Grid,
  Divider,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FlatDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    getFlatDetail();
  });
  // function
  const getFlatDetail = () => {
    const { _id } = params;

    axios({
      url: `https://apartmentauth.herokuapp.com/flat/${_id}`,
      method: "GET",
    })
      .then((r) => setData(r.data))
      .catch((err) => console.log("error", err.message));
  };
  console.log("singledata", data);
  return (
    <Box>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2} bg="tomato">
          <img src={data.image} alt="" width="100%" height="100%" />
        </GridItem>
        <GridItem colSpan={1} bg="white">
          <TableContainer>
            <Box fontSize="40px" bg="black" color="white">
              Flat Details
            </Box>
            <Divider />
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>Block</Td>
                  <Td>{data.block}</Td>
                </Tr>
                <Tr>
                  <Td>Flat Number</Td>
                  <Td>{data.flat_number}</Td>
                </Tr>
                <Tr>
                  <Td>Type</Td>
                  <Td>{data.type}</Td>
                </Tr>
                <Tr>
                  <Td>Number of Residents</Td>
                  <Td>{data.residents}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
        <GridItem colSpan={1} bg="white">
          <TableContainer>
            <Box fontSize="40px" bg="black" color="white">
              Resident Details
            </Box>
            <Divider />
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>Name</Td>
                  <Td>{data.name}</Td>
                </Tr>
                <Tr>
                  <Td>Age</Td>
                  <Td>{data.age}</Td>
                </Tr>
                <Tr>
                  <Td>Gender</Td>
                  <Td>{data.gender}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      </Grid>
    </Box>
  );
};
