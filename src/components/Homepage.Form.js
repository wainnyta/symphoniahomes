import {
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { FaGift } from 'react-icons/fa';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid');
const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required("Email is required. We won't spam you!"),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Phone is required for easy communication. We won't spam you!"),
  address: Yup.string().min(5, 'Address is too short').required('Required'),
});

export const HomepageForm = () => {
  const [formMessage, setFormMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  return (
    <Flex
      paddingX={{ xl: '0rem', base: '1rem' }}
      paddingY={{ xl: '5rem', base: '1rem' }}
      // borderWidth="1px"
      // borderColor="white"
      justifyContent="flex-end"
    >
      <Box
        w={{ xl: '70%', base: '100%' }}
        alignSelf="flex-end"
        backgroundColor="white"
        padding={{ xl: '2rem', base: '1.5rem' }}
        borderWidth="1px"
        borderRadius="15px"
      >
        <Text
          textColor="teal.800"
          fontSize="1rem"
          mb="2rem"
          mt="0.5rem"
          fontWeight="500"
        >
          Request a free, fair & no-obligation offer now!
        </Text>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          validationSchema={ContactFormSchema}
          onSubmit={(values, actions) => {
            // same shape as initial values
            emailjs
              .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                values,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
              )
              .then(
                ({ status }) => {
                  if (status === 200) {
                    setFormMessage(
                      'Thank you. Your offer request has been sent. We will get back to you within 24 hours.'
                    );
                    setHasError(false);
                    actions.setSubmitting(false);
                  } else {
                    setFormMessage(
                      'Sorry, there was some error trying to send your offer request. Please try again or contact us at 204-588-8329 or symphoniahomes@gmail.com'
                    );
                    setHasError(true);
                    actions.setSubmitting(false);
                  }
                },
                (err) => {
                  // eslint-disable-next-line no-console
                  console.log(err);
                  setFormMessage(
                    'Sorry, there was some error trying to send your offer request. Please try again or contact us at 204-588-8329 or symphoniahomes@gmail.com'
                  );
                  setHasError(true);
                  actions.setSubmitting(false);
                }
              );
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    {/* <FormLabel
                      htmlFor="name"
                      textColor="gray.500"
                      fontSize="0.8rem"
                    >
                      Name
                    </FormLabel> */}
                    <Input {...field} id="name" placeholder="Your Name *" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.email && form.touched.email}
                    pt="1.2rem"
                  >
                    {/* <FormLabel
                      htmlFor="email"
                      textColor="gray.500"
                      fontSize="0.8rem"
                    >
                      Email
                    </FormLabel> */}
                    <Input {...field} id="email" placeholder="Your Email *" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.phone && form.touched.phone}
                    pt="1.2rem"
                  >
                    {/* <FormLabel
                      htmlFor="phone"
                      textColor="gray.500"
                      fontSize="0.8rem"
                    >
                      Phone
                    </FormLabel> */}
                    <Input {...field} id="phone" placeholder="Your Phone *" />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="address">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.address && form.touched.address}
                    pt="1.2rem"
                  >
                    {/* <FormLabel
                      htmlFor="address"
                      textColor="gray.500"
                      fontSize="0.8rem"
                    >
                      Address
                    </FormLabel> */}
                    <Input
                      {...field}
                      id="address"
                      placeholder="House Address *"
                    />
                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="price">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.price && form.touched.price}
                    pt="1.2rem"
                  >
                    {/* <FormLabel
                      htmlFor="price"
                      textColor="gray.500"
                      fontSize="0.8rem"
                    >
                      Asking Price
                    </FormLabel> */}
                    <Input {...field} id="price" placeholder="Asking Price *" />
                    <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="message">
                {({ field, form }) => (
                  <FormControl pt="1.2rem">
                    {/* <FormLabel
                      htmlFor="price"
                      textColor="gray.500"
                      fontSize="0.8rem"
                    >
                      Asking Price
                    </FormLabel> */}
                    <Textarea
                      {...field}
                      id="message"
                      placeholder="Message (Optional)"
                    />
                  </FormControl>
                )}
              </Field>
              <Button
                mt="1rem"
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
                leftIcon={<FaGift />}
              >
                Get Offer
              </Button>
            </Form>
          )}
        </Formik>
        {formMessage.trim().length > 0 && (
          <Box pt={2}>
            <Text color={hasError ? 'red.500' : 'green.600'}>
              {formMessage}
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
