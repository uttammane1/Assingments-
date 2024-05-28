import {
    Button,
    Container,
    Flex,
    SimpleGrid,
    Select,
    HStack,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { useState, useEffect } from "react";
  import axios from "axios";
  import LoadingIndicator from "../Components/LoadingIndicator";
  import ErrorIndicator from "../Components/ErrorIndicator";
  import TicketCard from "../Components/TicketCard";
  
  export default function Tickets() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [err, setErr] = useState(false);
    const [sortOrderValue, setSortOrderValue] = useState("");
    const [filterValue, setFilterValue] = useState("");
  
    async function fetchAndUpdateData(sortOrderValue, filterValue) {
      setLoading(true);
      try {
        let queryParams = {};
        if (filterValue) {
          queryParams.status = filterValue;
        }
  
        if (sortOrderValue) {
          queryParams._sort = "priority";
          queryParams._order = sortOrderValue;
        }
  
        let res = await axios({
          method: "get",
          url: `http://localhost:3000/tickets`,
          params: queryParams,
        });
  
        let data = res?.data;
        setLoading(false);
        setTickets(data);
      } catch (error) {
        setLoading(false);
        setErr(true);
      }
    }
  
    useEffect(() => {
      fetchAndUpdateData(sortOrderValue, filterValue);
    }, [sortOrderValue, filterValue]);
  
    if (loading) {
      return <LoadingIndicator />;
    }
  
    if (err) {
      return <ErrorIndicator />;
    }
  
    return (
      <Container maxW="container.xl">
        <Flex direction="row-reverse">
          <Button
            variant="outline"
            colorScheme="red"
            onClick={() => {
              navigate(`/ticket/create`);
            }}
            marginY={8}
          >
            Create Ticket
          </Button>
        </Flex>
        <HStack spacing={4} my={4}>
          <Select
            placeholder="Sort by Priority"
            value={sortOrderValue}
            onChange={(e) => {
              setSortOrderValue(e.target.value);
            }}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
          <Select
            placeholder="Filter by Status"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="progress">Progress</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </Select>
        </HStack>
  
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {tickets?.map((ticket) => (
            <TicketCard {...ticket} key={ticket.id} />
          ))}
        </SimpleGrid>
      </Container>
    );
  }