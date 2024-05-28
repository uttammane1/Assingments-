// import {
//     Box,
//     Button,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Heading,
//     Stack,
//     StackDivider,
//     Text,
//   } from "@chakra-ui/react";
//   import { useNavigate } from "react-router-dom";
  
//   export default function TicketCard({ id, title, status, priority }) {
//     const navigate = useNavigate();
  
//     //title, status, priority
//     return (
//       <Card>
//         <CardHeader>
//           <Heading size="md">{title}</Heading>
//         </CardHeader>
  
//         <CardBody>
//           <Stack divider={<StackDivider />} spacing="4">
//             <Box>
//               <Heading size="xs" textTransform="uppercase">
//                 Status
//               </Heading>
//               <Text pt="2" fontSize="sm">
//                 {status}
//               </Text>
//             </Box>
//             <Box>
//               <Heading size="xs" textTransform="uppercase">
//                 Priority
//               </Heading>
//               <Text pt="2" fontSize="sm">
//                 {priority}
//               </Text>
//             </Box>
//           </Stack>
//         </CardBody>
//         <CardFooter>
//           <Button
//             variant="outline"
//             colorScheme="red"
//             onClick={() => {
//               navigate(`/ticket/view/${id}`);
//             }}
//           >
//             View Ticket
//           </Button>
//         </CardFooter>
//       </Card>
//     );
//   }

import {
    Box,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    StackDivider,
    Text,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import PropTypes from 'prop-types';

  
  export default function TicketCard({ id, title, status, priority }) {
    TicketCard.propTypes = {
        id: PropTypes.string.isRequired, // Add prop validation for the 'id' prop
        title: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired
      };
      
    const navigate = useNavigate();
  
    //title, status, priority
    return (
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
  
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              <Text pt="2" fontSize="sm">
                {status}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Priority
              </Heading>
              <Text pt="2" fontSize="sm">
                {priority}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            variant="outline"
            colorScheme="red"
            onClick={() => {
              navigate(`/ticket/view/${id}`);
            }}
          >
            View Ticket
          </Button>
        </CardFooter>
      </Card>
    );
  }
