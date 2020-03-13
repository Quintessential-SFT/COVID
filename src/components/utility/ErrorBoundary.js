import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MuiLink from "./MuiLink";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
          <Box p={6}>
            <Typography variant='h3'>
              Oops! Something went wrong.
            </Typography>
            <MuiLink underline='none' to={'/'}>
              <Button variant='contained' color='primary'>
                Return to Home
              </Button>
            </MuiLink>
          </Box>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
