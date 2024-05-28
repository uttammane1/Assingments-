import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";
import {
  Container,
  Input,
  Textarea,
  VStack,
  Select,
  Button,
} from "@chakra-ui/react";

export default function TicketEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState({});
  const [err, setErr] = useState(false);

  async function fetchAndUpdateData(id) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/${id}`,
      });

      let data = res?.data;
      setLoading(false);
      setTicket(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

  async function editTicket() {
    try {
      let updatedTicket = {
        title: ticket.title,
        description: ticket.description,
        assignee: ticket.assignee,
        status: ticket.status,
        priority: ticket.priority,
      };

      let res = await axios({
        method: "put",
        url: `http://localhost:3000/tickets/${id}`,
        data: updatedTicket,
      });

      if (res.status === 200) {
        navigate(`/tickets`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }

  const { title, description, assignee, status, priority } = ticket;
  return (
    <Container>
      <VStack spacing={8} my={4}>
        <Input
          placeholder="Enter Title"
          size="lg"
          value={title}
          onChange={(e) => {
            setTicket({
              ...ticket,
              title: e.target.value,
            });
          }}
        />
        <Textarea
          placeholder="Enter Description"
          size="lg"
          value={description}
          onChange={(e) => {
            setTicket({
              ...ticket,
              description: e.target.value,
            });
          }}
        />
        <Select
          placeholder="Assignee"
          size="lg"
          value={assignee}
          onChange={(e) =>
            setTicket({
              ...ticket,
              assignee: e.target.value,
            })
          }
        >
          <option value="rahul">Rahul</option>
          <option value="sakshi">Sakshi</option>
          <option value="varun">Varun</option>
          <option value="abdul">Abdul</option>
          <option value="saharan">Saharan</option>
        </Select>
        <Select
          placeholder="Status"
          size="lg"
          value={status}
          onChange={(e) => {
            setTicket({
              ...ticket,
              status: e.target.value,
            });
          }}
        >
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed</option>
        </Select>
        <Select
          placeholder="Priority"
          size="lg"
          value={priority}
          onChange={(e) => {
            setTicket({
              ...ticket,
              priority: Number(e.target.value),
            });
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
        <Button variant="outline" colorScheme="red" onClick={editTicket}>
          Edit Ticket
        </Button>
      </VStack>
    </Container>
  );
}

// view ticket page

// create ticket page