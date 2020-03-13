import React from 'react';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'gatsby';

const MuiLink = React.forwardRef(function MuiLink(props, ref) {
  const {to, href, url, ...rest} = props;

  if (to) {
    return <MaterialLink color='inherit' component={Link} ref={ref} {...props} />;
  }

  if (url) {
    if (url.startsWith('/')) {
      return <MaterialLink color='inherit' component={Link} ref={ref} to={url} {...rest} />;
    } else if (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('ftp://')) {
      return <MaterialLink color='inherit' ref={ref} href={url} {...rest} />;
    }
  }

  return <MaterialLink color='inherit' ref={ref} {...props} />;
});

export default MuiLink;
