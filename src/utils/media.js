const sizes = {
  desktop: '1200px',
  tablet: '900px',
  phone: '600px',
};

const media = {
  desktop: {
    up: `(min-width: ${sizes.desktop})`,
    down: `(max-width: ${sizes.desktop})`,
  },
  tablet: {
    up: `(min-width: ${sizes.tablet})`,
    down: `(max-width: ${sizes.tablet})`,
  },
  phone: {
    up: `(min-width: ${sizes.phone})`,
    down: `(max-width: ${sizes.phone})`,
  },
};

export default media;
