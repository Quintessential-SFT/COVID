import React from 'react';
import {Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
};

const useStyles = makeStyles(theme => ({
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ContactForm({handleClose, ...rest}) {
  const classes = useStyles();

  return (
      <Formik
          initialValues={{name: '', email: '', message: ''}}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            fetch("/?no-cache=1", {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: encode({
                'form-name': 'contact',
                ...values,
              }),
            })
                .then(() => {
                  handleClose();
                  resetForm({
                    values: {name: '', email: '', message: ''}
                  });
                  setSubmitting(false);
                })
                .catch(error => {
                  console.log(error);
                  alert('Error: Please Try Again!');
                  setSubmitting(false)
                })
          }}
          {...rest}
      >
        {({
            isSubmitting,
            handleSubmit,
            handleChange,
            values
          }) => {
          return (
              <form onSubmit={handleSubmit} name="contact" netlify-honeypot="bot-field" data-netlify="true">
                <TextField
                    onChange={handleChange}
                    value={values.name}
                    className={classes.marginBottom}
                    color='secondary'
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"/>
                <TextField
                    onChange={handleChange}
                    value={values.email}
                    className={classes.marginBottom}
                    color='secondary'
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"/>
                <TextField
                    onChange={handleChange}
                    value={values.message}
                    className={classes.marginBottom}
                    color='secondary'
                    variant="outlined"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    id="message"
                    multiline
                    rows='8'/>
                <Box display='flex' justifyContent='flex-end'>
                  <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={24} color='inherit'/> : null}>
                    Send Message
                  </Button>
                </Box>
              </form>
          )
        }}
      </Formik>
  )
}
