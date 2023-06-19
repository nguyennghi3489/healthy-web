# Healthy Web Application

Web base application for healthcare services base on the [design](https://www.figma.com/file/7qqT3dvv5OagaRlUFK01vB/HealthApp_1203?type=design&node-id=0-358&t=8U08HZ8lcGAZapk8-0).

## Tech

Web application uses a number of open source projects to work properly:

- [ReactJS](https://react.dev/): The library for web and native user interfaces
- [ReactRouter](https://reactrouter.com/en/main) - client side routing
- [Recharts](https://recharts.org/en-US/) - A composable charting library built on React components
- [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar) - A circular progressbar component, built with SVG and extensively customizable

## Installation

```sh
yarn install
yarn start
```

For production environments...

```sh
yarn build
```

## Development

### Structure

The structure includes:

- components: components is used to share in the app
- pages: specific folder for route-level components
- apis: declare apis will be used in the app
- models: contains data interfaces
- data: list of mock data

### Styling

We uses CSS Modules to style React components.
Global variable (spacing, color, font-size) is defined in index.css file.

### Data

Currenty, we simulate the real data from api by creating a list of mock data inside /data folder. And it will put inside api function and return via Promise. Finally, the page component will fetch the data and inject it into state and present on UI.
