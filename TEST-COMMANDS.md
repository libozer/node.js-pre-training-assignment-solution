# Test Commands

## Running All Tests
```bash
npm test
# or
npm run test:all
```

## Running Individual Test Files

### React CSS Tests
```bash
npm run test:react-css
```

### Docker Git Tests
```bash
npm run test:docker-git
```

### DB NoSQL Tests
```bash
npm run test:db-nosql
```

### JS TS Tests
```bash
npm run test:js-ts
```

## Additional Commands

### Running Tests in Watch Mode
```bash
npm run test:watch
```

### Running Tests with Code Coverage
```bash
npm run test:coverage
```

## Command Descriptions

- `npm test` / `npm run test:all` - runs all tests in the `tests/` folder
- `npm run test:react-css` - runs only React CSS tests
- `npm run test:docker-git` - runs only Docker Git tests
- `npm run test:db-nosql` - runs only DB NoSQL tests
- `npm run test:js-ts` - runs only JS TS tests
- `npm run test:watch` - runs tests in watch mode (automatically restarts when changes are detected)
- `npm run test:coverage` - runs tests with code coverage report generation

## Test Structure

Tests are located in the `tests/` folder:
- `react-css.test.js` - tests for React CSS
- `docker-git.test.js` - tests for Docker Git
- `db-nosql.test.js` - tests for DB NoSQL
- `js-ts.test.js` - tests for JS TS 