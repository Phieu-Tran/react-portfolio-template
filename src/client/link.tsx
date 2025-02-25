import React from 'react';
import Link from 'next/link';

import Link from 'next/link';

<Link href="/your-link" legacyBehavior>
  <a>Your Link Text</a>
</Link>

export default LinkComponent;

import React from 'react';
import LinkComponent from '../client/link';

const MyComponent = () => (
  <LinkComponent href="/about">
    <a>About</a>
  </LinkComponent>
);

export default MyComponent;